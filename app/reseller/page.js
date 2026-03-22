import Script from "next/script";
import PageShell from "@/components/PageShell";
import PricingWidget from "@/components/PricingWidget";
import ResellerContent from "./ResellerContent";

export const metadata = {
  title: { absolute: "Reseller Hosting India | WHM cPanel White Label — SkyServer Cloud" },
  description: "Start your own hosting business with SkyServer Reseller Hosting. WHM, cPanel, NVMe SSD, free SSL, white-label control & 24/7 expert support. Starting ₹399/mo.",
  alternates: { canonical: "https://skyserver.in/reseller" },
  openGraph: {
    title: "Reseller Hosting India | WHM cPanel — SkyServer Cloud",
    description: "Start your own hosting business with WHM, cPanel, NVMe SSD, free SSL & white-label control. 24/7 expert support included.",
    type: "website", url: "https://skyserver.in/reseller",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    siteName: "SkyServer Cloud Technologies", locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Reseller Hosting India | SkyServer Cloud",
    description: "Launch your hosting business with WHM, cPanel, NVMe SSD & white-label reseller hosting from SkyServer.",
    images: ["https://skyserver.in/img/og-banner.jpg"], site: "@SkyServerCloud"
  }
};

const schemas = [
  {"@context":"https://schema.org","@type":"WebHostingService","name":"SkyServer Reseller Hosting","serviceType":"Reseller Hosting","url":"https://skyserver.in/reseller","provider":{"@type":"Organization","name":"SkyServer Cloud Technologies","url":"https://skyserver.in/","logo":"https://skyserver.in/img/og-banner.jpg","contactPoint":{"@type":"ContactPoint","telephone":"+91-7509683151","contactType":"Customer Support","areaServed":"IN","availableLanguage":"English"}},"description":"Start your web hosting business with SkyServer Reseller Hosting — WHM, cPanel, NVMe SSD, free SSL and 24/7 expert support.","offers":{"@type":"Offer","priceCurrency":"INR","price":"399","availability":"https://schema.org/InStock"}},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://skyserver.in/"},{"@type":"ListItem","position":2,"name":"Reseller Hosting","item":"https://skyserver.in/reseller"}]},
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Reseller Hosting?","acceptedAnswer":{"@type":"Answer","text":"Reseller hosting allows you to purchase server resources in bulk from SkyServer and sell them to your own clients as branded hosting plans. You get WHM to manage accounts and cPanel for each client, with full white-label control."}},{"@type":"Question","name":"Can I use my own brand name with reseller hosting?","acceptedAnswer":{"@type":"Answer","text":"Yes. SkyServer reseller hosting is fully white-label. You can set your own company name, logo, and branding. Your clients will never see SkyServer's name — it is 100% your brand."}},{"@type":"Question","name":"Do I need technical knowledge to run a reseller hosting business?","acceptedAnswer":{"@type":"Answer","text":"Basic knowledge helps, but SkyServer's managed reseller hosting handles all server-level tasks. You manage client accounts through WHM, and SkyServer handles hardware, security, and uptime."}},{"@type":"Question","name":"Is WHMCS included with reseller hosting?","acceptedAnswer":{"@type":"Answer","text":"WHMCS is available as an add-on with our reseller plans. It automates billing, client management, and support tickets for your hosting business."}},{"@type":"Question","name":"Can I upgrade my reseller plan later?","acceptedAnswer":{"@type":"Answer","text":"Yes. All SkyServer reseller plans are fully scalable. You can upgrade disk space, bandwidth, and the number of accounts anytime without downtime."}}]}
];

export default function ResellerPage() {
  return (
    <PageShell breadcrumb="Reseller Hosting">
      <link rel="stylesheet" href="/css/vp-product.css" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      <style>{`
        :root { --brand:#0f766e; --brand-dk:#0d6b63; --dark:#0a1a18; }
        .vp-label { background:#f0fdfa; border-color:#99f6e4; }
        .vp-feat-card:hover, .vp-step-card:hover, .vp-usecase-card:hover, .vp-why-item:hover { border-color:#5eead4; }
        .vp-feat-card:hover { box-shadow:0 10px 32px rgba(15,118,110,.1); }
        .vp-faq-icon { background:#f0fdfa; }
        .vp-compare-table .col-sky { background:#f0fdfa!important; }
        .vp-cta-section { background:linear-gradient(135deg,#0a1a18 0%,#134e4a 55%,#0891b2 100%); }
        .vp-cta-section::after { background:rgba(15,118,110,.18); }
      `}</style>

      {schemas.map((s, i) => (
        <Script key={i} id={`schema-res-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <h1 style={{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}>
        Reseller Hosting India — WHM cPanel White Label Hosting Business by SkyServer Cloud
      </h1>

      <section className="hosting-section spad">
        <div className="container"><div className="row"><div className="col-lg-12">
          <div className="section-title"><h2>Reseller Hosting Plans — India</h2></div>
          <PricingWidget gid={6} />
        </div></div></div>
      </section>

      <ResellerContent />

      <Script src="https://api.hdmedianetwork.in/sky_cdn/skystore.js" strategy="afterInteractive" />
    </PageShell>
  );
}
