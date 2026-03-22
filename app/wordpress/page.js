import Script from "next/script";
import PageShell from "@/components/PageShell";
import PricingWidget from "@/components/PricingWidget";

export const metadata = {
  title: { absolute: "Managed WordPress Hosting in India | SkyServer — Fast, Secure & Easy" },
  description:
    "Blazing-fast managed WordPress hosting in India with LiteSpeed, cPanel, free SSL, daily backups & 24/7 expert support. Launch your site in minutes.",
  alternates: { canonical: "https://skyserver.in/wordpress" },
  openGraph: {
    title: "Managed WordPress Hosting in India | SkyServer",
    description:
      "Launch your WordPress website on ultra-fast LiteSpeed servers with free SSL, daily backups, and 99.9% uptime from SkyServer.",
    type: "website",
    url: "https://skyserver.in/wordpress",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    siteName: "SkyServer Cloud Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed WordPress Hosting | SkyServer",
    description:
      "Fast & secure managed WordPress hosting with LiteSpeed, cPanel & free SSL. 24/7 support included.",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    site: "@SkyServerCloud"
  }
};

const schemaService = {
  "@context": "https://schema.org",
  "@type": "WebHostingService",
  name: "SkyServer WordPress Hosting",
  serviceType: "Managed WordPress Hosting",
  url: "https://skyserver.in/wordpress",
  provider: {
    "@type": "Organization",
    name: "SkyServer Cloud Technologies",
    url: "https://skyserver.in/",
    logo: "https://skyserver.in/img/og-banner.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7509683151",
      contactType: "Customer Support",
      areaServed: "IN",
      availableLanguage: "English"
    }
  },
  description:
    "Managed WordPress hosting in India with LiteSpeed, cPanel, free SSL, and 99.9% uptime backed by 24/7 expert support."
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://skyserver.in/" },
    { "@type": "ListItem", position: 2, name: "WordPress Hosting", item: "https://skyserver.in/wordpress" }
  ]
};

export default function WordPressPage() {
  return (
    <PageShell breadcrumb="WordPress Hosting">
      <Script
        id="schema-wp-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-wp-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <section className="hosting-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>WORDPRESS HOSTING PLAN!</h3>
              </div>
              <PricingWidget gid={3} />
            </div>
          </div>
        </div>
      </section>

      <Script
        src="https://api.hdmedianetwork.in/sky_cdn/skystore.js"
        strategy="afterInteractive"
      />
    </PageShell>
  );
}
