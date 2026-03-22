import Script from "next/script";
import PageShell from "@/components/PageShell";
import PricingWidget from "@/components/PricingWidget";
import VpFaqList from "@/components/VpFaqList";
import VpsContent from "./VpsContent";

export const metadata = {
  title: { absolute: "VPS Hosting India | NVMe SSD VPS Server — SkyServer Cloud" },
  description: "India's fastest NVMe VPS hosting with full root access, free SSL, cPanel, 99.9% uptime & 24/7 expert support. Deploy in 60 seconds. Starting ₹299/mo.",
  alternates: { canonical: "https://skyserver.in/vps" },
  openGraph: {
    title: "VPS Hosting India | NVMe SSD — SkyServer Cloud",
    description: "India's fastest NVMe VPS with full root access, free SSL, 99.9% uptime & 24/7 support. Deploy in 60 seconds.",
    type: "website",
    url: "https://skyserver.in/vps",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    siteName: "SkyServer Cloud Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "VPS Hosting India | SkyServer Cloud",
    description: "NVMe VPS hosting with cPanel, full root access & 24/7 managed support. Starting ₹299/mo.",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    site: "@SkyServerCloud"
  }
};

const schemas = [
  {"@context":"https://schema.org","@type":"WebHostingService","name":"SkyServer VPS Hosting","serviceType":"VPS Hosting","url":"https://skyserver.in/vps","provider":{"@type":"Organization","name":"SkyServer Cloud Technologies","url":"https://skyserver.in/","logo":"https://skyserver.in/img/og-banner.jpg","contactPoint":{"@type":"ContactPoint","telephone":"+91-7509683151","contactType":"Customer Support","areaServed":"IN","availableLanguage":"English"}},"description":"VPS hosting in India with NVMe SSD, cPanel, free SSL and 24/7 support. Full root access and instant scalability.","offers":{"@type":"Offer","priceCurrency":"INR","price":"299","availability":"https://schema.org/InStock"}},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://skyserver.in/"},{"@type":"ListItem","position":2,"name":"VPS Hosting","item":"https://skyserver.in/vps"}]},
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is VPS Hosting?","acceptedAnswer":{"@type":"Answer","text":"VPS (Virtual Private Server) hosting gives you a dedicated portion of a physical server with guaranteed CPU, RAM, and NVMe SSD storage. Unlike shared hosting, your resources are never shared with others, giving you full root access and complete control over your server environment."}},{"@type":"Question","name":"How fast is SkyServer's NVMe VPS?","acceptedAnswer":{"@type":"Answer","text":"SkyServer VPS uses Gen4 NVMe SSDs which are up to 20x faster than traditional SATA SSDs. Combined with our 10Gbps network uplinks and India-based data centers, you get ultra-low latency for your Indian audience."}},{"@type":"Question","name":"Can I upgrade my VPS plan later?","acceptedAnswer":{"@type":"Answer","text":"Yes. SkyServer VPS plans are fully scalable. You can upgrade your CPU, RAM, and storage anytime from your client panel without any downtime or data loss."}},{"@type":"Question","name":"Do you offer managed VPS hosting?","acceptedAnswer":{"@type":"Answer","text":"Yes, SkyServer offers both managed and unmanaged VPS options. Our managed plans include server setup, security hardening, OS updates, and 24/7 technical support."}},{"@type":"Question","name":"What control panels are available?","acceptedAnswer":{"@type":"Answer","text":"SkyServer supports aaPanel (free), cPanel & WHM, Plesk, DirectAdmin, Webmin, and ISPConfig. You can choose your preferred panel during checkout or request installation via support."}}]}
];

export default function VpsPage() {
  return (
    <PageShell breadcrumb="VPS Servers">
      <link rel="stylesheet" href="/css/vp-product.css" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      <style>{`
        :root { --brand:#2563eb; --brand-dk:#1d4ed8; --dark:#0a0e2a; }
        .vp-cta-section { background:linear-gradient(135deg,#0a0e2a 0%,#1e3a8a 60%,#0891b2 100%); }
      `}</style>

      {schemas.map((s, i) => (
        <Script key={i} id={`schema-vps-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <h1 style={{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}>
        VPS Hosting India — NVMe SSD Virtual Private Server by SkyServer Cloud
      </h1>

      {/* Pricing */}
      <section className="hosting-section spad">
        <div className="container">
          <div className="row"><div className="col-lg-12">
            <div className="section-title"><h2>VPS Hosting Plans — India</h2></div>
            <PricingWidget gid={5} />
          </div></div>
        </div>
      </section>

      <VpsContent />

      <Script src="https://api.hdmedianetwork.in/sky_cdn/skystore.js" strategy="afterInteractive" />
    </PageShell>
  );
}
