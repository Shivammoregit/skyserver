import { getAllLocationSlugs } from "@/lib/vps-locations";

const staticRoutes = [
  "",
  "about",
  "abuse",
  "business",
  "cloud",
  "contact",
  "custom",
  "hosting",
  "offers",
  "privacy",
  "refund",
  "reseller",
  "terms",
  "unlimited-hosting-policy",
  "vps",
  "whois",
  "windows-rdp",
  "wordpress",
  "pages/cheap-web-hosting-india",
  "pages/web-hosting-jaipur"
];

export default async function sitemap() {
  const locationSlugs = await getAllLocationSlugs();
  const base = "https://skyserver.in";

  const staticEntries = staticRoutes.map((route) => ({
    url: route ? `${base}/${route}` : `${base}/`,
    changeFrequency: "monthly",
    priority: route ? 0.8 : 1
  }));

  const dynamicEntries = locationSlugs.map((slug) => ({
    url: `${base}/page/vps-hosting/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [...staticEntries, ...dynamicEntries];
}
