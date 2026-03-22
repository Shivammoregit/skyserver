import Script from "next/script";
import PageShell from "@/components/PageShell";
import PricingWidget from "@/components/PricingWidget";

export const metadata = {
  title: { absolute: "Cloud Hosting in India | SkyServer — Fast NVMe Cloud, cPanel & Free SSL" },
  description:
    "Scalable NVMe cloud hosting in India with cPanel, LiteSpeed, free SSL, DDoS protection, and 99.9% uptime. Pay monthly with 24/7 expert support.",
  alternates: { canonical: "https://skyserver.in/cloud" },
  openGraph: {
    title: "Cloud Hosting in India | SkyServer — NVMe, cPanel & Free SSL",
    description:
      "Scale on demand with NVMe cloud hosting, LiteSpeed, free SSL, and 99.9% uptime. Managed cloud with 24/7 expert support.",
    type: "website",
    url: "https://skyserver.in/cloud",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    siteName: "SkyServer Cloud Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Hosting in India | SkyServer",
    description:
      "High-performance NVMe cloud hosting with cPanel, LiteSpeed & free SSL. Scale easily with 24/7 support.",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    site: "@SkyServerCloud"
  }
};

const schemaService = {
  "@context": "https://schema.org",
  "@type": "WebHostingService",
  name: "SkyServer Cloud Hosting",
  serviceType: "Cloud hosting",
  url: "https://skyserver.in/cloud",
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
    "Scalable NVMe cloud hosting in India with cPanel, LiteSpeed, free SSL and 99.9% uptime. Managed cloud with 24/7 support."
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://skyserver.in/" },
    { "@type": "ListItem", position: 2, name: "Cloud Hosting", item: "https://skyserver.in/cloud" }
  ]
};

export default function CloudPage() {
  return (
    <PageShell breadcrumb="Cloud Hosting">
      <Script
        id="schema-cloud-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-cloud-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <section className="hosting-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>Cloud WEB HOSTING PLAN!</h3>
              </div>
              <PricingWidget gid={8} />
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
