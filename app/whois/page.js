import PageShell from "@/components/PageShell";
import SolutionCards from "@/components/SolutionCards";
import WhoisTool from "./WhoisTool";

export const metadata = {
  title: { absolute: "Domain WHOIS Lookup | SkyServer - Check Domain Owner & Registration Info" },
  description: "Find domain owner, registrar, and expiry details instantly with SkyServer WHOIS Lookup tool. Fast, accurate, and free WHOIS search online.",
  alternates: { canonical: "https://skyserver.in/whois" },
  openGraph: {
    title: "Domain WHOIS Lookup | SkyServer Cloud Technologies",
    description: "Instantly check domain owner, registrar, and expiry info using SkyServer WHOIS lookup tool. Accurate, free, and easy to use.",
    type: "website", url: "https://skyserver.in/whois",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    siteName: "SkyServer Cloud Technologies", locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Domain WHOIS Lookup | SkyServer",
    description: "Check any domain's WHOIS info instantly — owner, registrar, and expiry date with SkyServer WHOIS Lookup.",
    images: ["https://skyserver.in/img/og-banner.jpg"], site: "@SkyServerCloud"
  }
};

const schemas = [
  {"@context":"https://schema.org","@type":"WebApplication","name":"SkyServer WHOIS Lookup Tool","url":"https://skyserver.in/whois","description":"SkyServer WHOIS Lookup — free tool to check domain owner, registrar, and expiry details instantly.","applicationCategory":"Utility","operatingSystem":"All","creator":{"@type":"Organization","name":"SkyServer Cloud Technologies","url":"https://skyserver.in/","logo":"https://skyserver.in/img/og-banner.jpg","contactPoint":{"@type":"ContactPoint","telephone":"+91-7509683151","contactType":"Customer Support","areaServed":"IN","availableLanguage":"English"}}},
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://skyserver.in/"},{"@type":"ListItem","position":2,"name":"WHOIS Lookup","item":"https://skyserver.in/whois"}]}
];

export default function WhoisPage() {
  return (
    <PageShell breadcrumb="Domain WHOIS Lookup">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <section className="register-domain spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="register__text">
                <div className="section-title"><h3>Whois Domain Lookup</h3></div>
                <WhoisTool />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SolutionCards />

      {/* Achievement bar */}
      <section
        className="achievement-section set-bg spad"
        style={{
          position: "relative",
          backgroundImage: "url('https://cdn.pixabay.com/photo/2012/11/06/20/30/neon-light-64371_1280.jpg')",
          backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6"><div className="achievement__item"><span className="fa fa-shield" /><h4 style={{ color: "#fff" }}>Free SSL Certificates</h4></div></div>
            <div className="col-lg-3 col-md-3 col-sm-6"><div className="achievement__item"><span className="fa fa-wordpress" /><h4 style={{ color: "#fff" }}>Managed Wordpress</h4></div></div>
            <div className="col-lg-3 col-md-3 col-sm-6"><div className="achievement__item"><span className="fa fa-bolt" /><h4 style={{ color: "#fff" }}>LiteSpeed Server</h4></div></div>
            <div className="col-lg-3 col-md-3 col-sm-6"><div className="achievement__item"><span className="fa fa-server" /><h4 style={{ color: "#fff" }}>Fast Load Time</h4></div></div>
          </div>
        </div>
      </section>

      {/* LiteSpeed info */}
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/hero/server.png" alt="SkyServer LiteSpeed" />
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="plan__text">
                <h3>Our Platform is Powered by <strong>LiteSpeed Server</strong></h3>
                <ul>
                  <li><span className="fa fa-check" /> FREE Domain Name <span style={{ background: "#ff6347", color: "#fff", padding: "5px 10px", fontSize: 12, fontWeight: "bold", borderRadius: 3 }}>Coming Soon</span></li>
                  <li><span className="fa fa-check" /> FREE Email Address</li>
                  <li><span className="fa fa-check" /> Plenty of disk space</li>
                  <li><span className="fa fa-check" /> FREE Website Builder</li>
                  <li><span className="fa fa-check" /> FREE Marketing Tools</li>
                  <li><span className="fa fa-check" /> 1-Click WordPress Install</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
