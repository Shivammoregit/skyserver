import Script from "next/script";
import PageShell from "@/components/PageShell";
import PricingWidget from "@/components/PricingWidget";
import RdpContent from "./RdpContent";

export const metadata = {
  title: { absolute: "Windows RDP Server India | NVMe SSD Full Admin Access — SkyServer Cloud" },
  description: "Buy Windows RDP server in India with NVMe SSD, full admin access, dedicated resources, instant setup & 24/7 expert support. Starting ₹299/mo. Powered by SkyServer.",
  alternates: { canonical: "https://skyserver.in/windows-rdp" },
  openGraph: {
    title: "Windows RDP Server India | NVMe Full Admin Access — SkyServer",
    description: "Buy Windows RDP with full admin access, NVMe SSD, dedicated resources, instant setup & 24/7 support. India data center.",
    type: "website", url: "https://skyserver.in/windows-rdp",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    siteName: "SkyServer Cloud Technologies", locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Windows RDP Server India | SkyServer Cloud",
    description: "Fast & secure Windows RDP with full admin access, NVMe SSD & instant activation. India data center.",
    images: ["https://skyserver.in/img/og-banner.jpg"], site: "@SkyServerCloud"
  }
};

const schemas = [
  {"@context":"https://schema.org","@type":"Product","name":"SkyServer Windows RDP Server","description":"Windows RDP servers with NVMe SSD, full admin access, dedicated resources, India data center, and 24/7 support.","brand":{"@type":"Organization","name":"SkyServer Cloud Technologies","url":"https://skyserver.in/"},"url":"https://skyserver.in/windows-rdp","offers":{"@type":"AggregateOffer","priceCurrency":"INR","lowPrice":"299","highPrice":"4999","availability":"https://schema.org/InStock"}},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://skyserver.in/"},{"@type":"ListItem","position":2,"name":"Windows RDP","item":"https://skyserver.in/windows-rdp"}]},
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Windows RDP?","acceptedAnswer":{"@type":"Answer","text":"Windows RDP (Remote Desktop Protocol) is a Microsoft technology that lets you connect to and control a remote Windows server over the internet. With SkyServer RDP, you get a dedicated Windows server in India with full admin access — usable from any device, anywhere in the world."}},{"@type":"Question","name":"What is the difference between RDP and VPS?","acceptedAnswer":{"@type":"Answer","text":"Windows RDP and Windows VPS are essentially the same thing — a virtual Windows server. The term RDP highlights that you access it via the Remote Desktop Protocol."}},{"@type":"Question","name":"Can I run software 24/7 on the RDP server?","acceptedAnswer":{"@type":"Answer","text":"Yes. SkyServer RDP servers run 24/7 without interruption. You can install and run any Windows-compatible software."}},{"@type":"Question","name":"Do I get full administrator access?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every SkyServer Windows RDP plan includes full administrator access."}},{"@type":"Question","name":"How do I connect to my RDP server?","acceptedAnswer":{"@type":"Answer","text":"You connect using the built-in Remote Desktop Connection app on any Windows PC, or using Microsoft Remote Desktop on Mac, iOS, or Android."}}]}
];

export default function WindowsRdpPage() {
  return (
    <PageShell breadcrumb="Windows RDP">
      <link rel="stylesheet" href="/css/vp-product.css" />
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      <style>{`
        :root { --brand:#7c3aed; --brand-dk:#6d28d9; --dark:#0f0a1e; }
        .vp-label { background:#f5f3ff; border-color:#ddd6fe; }
        .vp-feat-card:hover, .vp-step-card:hover, .vp-usecase-card:hover, .vp-why-item:hover { border-color:#c4b5fd; }
        .vp-feat-card:hover { box-shadow:0 10px 32px rgba(124,58,237,.1); }
        .vp-faq-icon { background:#f5f3ff; }
        .vp-compare-table .col-sky { background:#f5f3ff!important; }
        .vp-cta-section { background:linear-gradient(135deg,#0f0a1e 0%,#4c1d95 55%,#0891b2 100%); }
        .vp-cta-section::after { background:rgba(124,58,237,.18); }
      `}</style>

      {schemas.map((s, i) => (
        <Script key={i} id={`schema-rdp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <h1 style={{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0,0,0,0)",whiteSpace:"nowrap",border:0}}>
        Windows RDP Server India — NVMe SSD Full Admin Remote Desktop by SkyServer Cloud
      </h1>

      <section className="hosting-section spad">
        <div className="container"><div className="row"><div className="col-lg-12">
          <div className="section-title"><h2>Windows RDP Plans — India</h2></div>
          <PricingWidget gid={9} />
        </div></div></div>
      </section>

      <RdpContent />

      <Script src="https://api.hdmedianetwork.in/sky_cdn/skystore.js" strategy="afterInteractive" />
    </PageShell>
  );
}
