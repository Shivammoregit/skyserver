import Script from "next/script";
import PageShell from "@/components/PageShell";
import PricingWidget from "@/components/PricingWidget";

export const metadata = {
  title: { absolute: "Business Hosting in India | SkyServer — Power, Security & cPanel" },
  description:
    "High-performance Business Hosting in India with cPanel, NVMe SSD, free SSL, priority support and 99.9% uptime. Built for SMEs and growing brands.",
  alternates: { canonical: "https://skyserver.in/business" },
  openGraph: {
    title: "Business Hosting in India | SkyServer — Power & Security",
    description:
      "Boost your business with NVMe SSD, cPanel, free SSL, and priority support. Perfect for SMEs and growing brands.",
    type: "website",
    url: "https://skyserver.in/business",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    siteName: "SkyServer Cloud Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Hosting in India | SkyServer",
    description:
      "High-performance Business Hosting with NVMe SSD, cPanel & free SSL. Priority support included.",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    site: "@SkyServerCloud"
  }
};

const schemaService = {
  "@context": "https://schema.org",
  "@type": "WebHostingService",
  name: "SkyServer Business Hosting",
  serviceType: "Business Hosting",
  url: "https://skyserver.in/business",
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
    "Business hosting plans with NVMe SSD, cPanel, free SSL and 99.9% uptime. Priority support for SMEs and growing brands."
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://skyserver.in/" },
    { "@type": "ListItem", position: 2, name: "Business Hosting", item: "https://skyserver.in/business" }
  ]
};

export default function BusinessPage() {
  return (
    <PageShell breadcrumb="Business Hosting">
      <Script
        id="schema-biz-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        id="schema-biz-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <section className="hosting-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>BUSINESS WEB HOSTING PLAN!</h3>
              </div>
              <PricingWidget gid={4} />
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
