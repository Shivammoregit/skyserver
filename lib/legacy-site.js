import fs from "node:fs";
import path from "node:path";

const ROUTE_MAP = {
  "": "index.php"
};

const ROOT = path.join(process.cwd(), "legacy-src");

function readFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function decodeBasicEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/â‚¹/g, "Rs")
    .replace(/Â©/g, "©")
    .replace(/â€”/g, "—")
    .replace(/â€“/g, "–")
    .replace(/â€¦/g, "...")
    .replace(/âœ•/g, "x")
    .replace(/ðŸš€/g, "");
}

function routeFromPhpPath(filePath) {
  const cleanPath = filePath.replace(/^\.?\//, "").replace(/^\.\.\//, "");
  if (cleanPath === "index.php") {
    return "/";
  }

  return `/${cleanPath.replace(/\.php$/, "")}`;
}

function sanitizeHtml(html) {
  return decodeBasicEntities(
    html
    .replace(/<\?php[\s\S]*?\?>/g, "")
    .replace(/<base[^>]*href=["']https:\/\/skyserver\.in\/["'][^>]*>/gi, "")
    .replace(
      /(href|action)=["'](?:\.\/|\.\.\/)?([^"':?#]+?\.php)(\?[^"']*)?["']/gi,
      (_, attr, filePath, query = "") => `${attr}="${routeFromPhpPath(filePath)}${query}"`
    )
    .replace(
      /(href|src)=["'](?:\.\/|\.\.\/)?(css|js|img|fonts)\/([^"']+)["']/gi,
      (_, attr, folder, assetPath) => `${attr}="/${folder}/${assetPath}"`
    )
    .replace(/(href|src)=["']\.\/logo\.png["']/gi, '$1="/logo.png"')
    .replace(/href=["']\.\/([a-z0-9\-\/]+)["']/gi, 'href="/$1"')
    .trim()
  );
}

function normalizeScriptSource(src) {
  if (/^(https?:)?\/\//i.test(src)) {
    return src.startsWith("//") ? `https:${src}` : src;
  }

  return src
    .replace(/^\.?\//, "/")
    .replace(/^\.\.\//, "/");
}

function extractScripts(html) {
  const scripts = [];

  const cleanedHtml = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (_, attributes = "", content = "") => {
    const srcMatch = attributes.match(/\ssrc=["']([^"']+)["']/i);
    const typeMatch = attributes.match(/\stype=["']([^"']+)["']/i);
    const defer = /\sdefer\b/i.test(attributes);
    const async = /\sasync\b/i.test(attributes);

    if (srcMatch) {
      const src = normalizeScriptSource(srcMatch[1]);
      if (!/\/js\/(jquery-3\.3\.1\.min|bootstrap\.min|jquery\.slicknav|owl\.carousel\.min|main)\.js$/i.test(src) && src !== "/mail.js") {
        scripts.push({ src, defer, async, type: typeMatch?.[1] });
      }
    } else if (content.trim()) {
      scripts.push({ content: decodeBasicEntities(content.trim()), type: typeMatch?.[1] });
    }

    return "";
  });

  return { html: cleanedHtml, scripts };
}

function stripCommonFragments(html) {
  return html
    .replace(/<div id=["']preloder["'][\s\S]*?<\/div>\s*<\/div>/i, "")
    .trim();
}

function extractPageBody(content) {
  const headerIncludeMatch = content.match(/<\?php include ['"](?:\.\.\/)?header\.php['"];?\s*\?>/i);
  const footerIncludeMatch = content.match(/<\?php include ['"](?:\.\.\/)?footer\.php['"];?\s*\?>/i);

  if (headerIncludeMatch && footerIncludeMatch) {
    const start = content.indexOf(headerIncludeMatch[0]) + headerIncludeMatch[0].length;
    const end = content.indexOf(footerIncludeMatch[0]);
    return content.slice(start, end);
  }

  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : content;
}

function extractHeadValue(content, pattern) {
  const match = content.match(pattern);
  return match ? decodeBasicEntities(match[1].trim()) : undefined;
}

export function getLegacyRoutes() {
  return Object.keys(ROUTE_MAP);
}

export function hasLegacyRoute(routeKey) {
  return Object.prototype.hasOwnProperty.call(ROUTE_MAP, routeKey);
}

export function getLegacyPage(routeKey) {
  const relativePath = ROUTE_MAP[routeKey];

  if (!relativePath) {
    return null;
  }

  const content = readFile(relativePath);

  const extractedPage = extractScripts(stripCommonFragments(sanitizeHtml(extractPageBody(content))));

  return {
    routeKey,
    sourcePath: relativePath,
    title: extractHeadValue(content, /<title>([\s\S]*?)<\/title>/i) ?? "SkyServer",
    description: extractHeadValue(
      content,
      /<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["'][^>]*>/i
    ),
    canonical: extractHeadValue(
      content,
      /<link[^>]+rel=["']canonical["'][^>]+href=["']([\s\S]*?)["'][^>]*>/i
    ),
    html: extractedPage.html,
    scripts: extractedPage.scripts
  };
}

export function getLegacyStandalonePage(relativePath) {
  const content = readFile(relativePath);
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const extractedPage = extractScripts(stripCommonFragments(sanitizeHtml(bodyMatch ? bodyMatch[1] : content)));

  return {
    title: extractHeadValue(content, /<title>([\s\S]*?)<\/title>/i) ?? "SkyServer",
    html: extractedPage.html,
    scripts: extractedPage.scripts
  };
}
