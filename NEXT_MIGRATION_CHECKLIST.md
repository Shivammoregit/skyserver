# SkyServer Next.js Migration Checklist

## Phase 1: Foundation

- [x] Audit legacy PHP pages, assets, shared includes, and dynamic dependencies
- [x] Scaffold a Next.js app in the existing repo
- [x] Copy legacy static assets into Next.js `public/`
- [x] Create a reusable legacy layout wrapper for header, footer, CSS, and JS
- [x] Port the homepage and static content pages through a route loader
- [x] Preserve the existing client area redirect route

## Phase 2: Route Hardening

- [x] Replace legacy HTML injection with real React components for header and footer
- [x] Replace legacy HTML injection with React-based shared page sections where practical (`header`, `footer`, `preloader`, `404`)
- [x] Normalize shared internal header/footer links to clean Next.js routes
- [x] Normalize page-body internal links to clean Next.js routes
- [x] Convert page-specific inline scripts and external page-body scripts into the Next.js rendering path
- [x] Rebuild the shared navigation behavior in React for desktop and mobile
- [x] Rebuild the custom 404 page from the legacy design
- [ ] Verify layout and JS behavior on mobile in a browser session

## Phase 3: Data and SEO Migration

- [x] Replace `page/config.php` MySQL access with a Next.js data layer
- [x] Migrate `page/city.php` to a dynamic route backed by DB data
- [x] Replace `page/sitemap.php` with a generated sitemap route
- [x] Keep `robots.txt` and verification files in Next.js static assets
- [x] Rebuild per-page metadata for the dynamic VPS location route with Next.js metadata APIs

## Phase 4: Cleanup

- [x] Remove PHP-specific duplicate root files after route parity and archive them safely
- [x] Remove duplicate runtime static source directories from project root
- [x] Add linting and baseline test coverage
- [x] Add deployment build docs/config for Vercel

## Current Known Gaps

- Manual browser QA is still needed for responsive behavior verification across key pages
- Remaining legacy page bodies still rendered from `legacy-src` HTML: homepage and 2 SEO landing pages

## Phase 5: React Component Conversion (Legacy HTML → JSX)

- [x] Create shared `Breadcrumb` component
- [x] Create shared `PageShell` component (replaces `LegacyShell` for converted pages)
- [x] Create shared `PricingWidget` component (CDN pricing loader)
- [x] Create shared `SolutionCards` component ("Choose the Right Solution")
- [x] Create shared `VpFaqList` component (FAQ accordion for product pages)
- [x] Create shared `vp-product.css` stylesheet (grid/card styles for VPS/Reseller/RDP)
- [x] Convert `/about` to React component
- [x] Convert `/contact` to React component
- [x] Convert `/privacy` to React component
- [x] Convert `/terms` to React component
- [x] Convert `/disclaimer` to React component
- [x] Convert `/refund` to React component
- [x] Convert `/abuse` to React component
- [x] Convert `/unlimited-hosting-policy` to React component
- [x] Convert `/hosting` to React component (hero + pricing + FAQ + solutions)
- [x] Convert `/cloud` to React component
- [x] Convert `/business` to React component
- [x] Convert `/wordpress` to React component
- [x] Convert `/custom` to React component (client component with form + Turnstile)
- [x] Convert `/offers` to React component (Shadow DOM web component preserved)
- [x] Remove migrated routes from `ROUTE_MAP` in `legacy-site.js`
- [x] Convert `/vps` to React component (features, OS grid, panels, comparison, FAQ)
- [x] Convert `/reseller` to React component (how-it-works, use cases, comparison, FAQ)
- [x] Convert `/windows-rdp` to React component (use cases, connect steps, comparison, FAQ)
- [x] Convert `/whois` to React component (client component with API calls, domain lookup, result rendering)
- [ ] Convert `/pages/cheap-web-hosting-india` to React component
- [ ] Convert `/pages/web-hosting-jaipur` to React component
- [ ] Convert `/` (homepage) to React component
- [ ] Convert `404` to React component
- [ ] Remove `LegacyShell`, `LegacyPageClient`, `LegacyHtml` components
- [ ] Remove `legacy-site.js` and `legacy-src/` directory

