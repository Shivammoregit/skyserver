import Script from "next/script";
import PageShell from "@/components/PageShell";
import PricingWidget from "@/components/PricingWidget";
import SolutionCards from "@/components/SolutionCards";

export const metadata = {
  title: { absolute: "Shared Hosting India ₹29/mo | cPanel & Free SSL – SkyServer" },
  description:
    "⚡ India's fastest shared hosting from ₹99/month. cPanel, LiteSpeed, Free SSL, 99.9% uptime & 24/7 support. Start your website today with SkyServer!",
  alternates: { canonical: "https://skyserver.in/hosting" },
  openGraph: {
    title: "Best Shared Hosting India ₹99/mo | cPanel + Free SSL | SkyServer",
    description:
      "⚡ India's fastest shared hosting. cPanel, LiteSpeed, Free SSL, 99.9% uptime & 24/7 support. Plans start at ₹99/month!",
    type: "website",
    url: "https://skyserver.in/hosting",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    siteName: "SkyServer Cloud Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Shared Hosting India | SkyServer",
    description:
      "Fast, secure, and affordable shared hosting in India with cPanel, SSD, and free SSL from ₹99/month.",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    site: "@SkyServerCloud"
  }
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SkyServer Cloud Technologies",
  url: "https://skyserver.in",
  logo: "https://skyserver.in/img/og-banner.jpg",
  description:
    "Leading web hosting provider in India offering shared hosting, VPS hosting, and dedicated servers.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7509683151",
    contactType: "Customer Support",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"]
  },
  sameAs: ["https://twitter.com/SkyServerCloud", "https://facebook.com/SkyServerCloud"]
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://skyserver.in/" },
    { "@type": "ListItem", position: 2, name: "Shared Hosting", item: "https://skyserver.in/hosting" }
  ]
};

const schemaFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is shared hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shared hosting is a web hosting service where multiple websites share the same server resources. It's the most affordable hosting option, perfect for small businesses, blogs, and personal websites."
      }
    },
    {
      "@type": "Question",
      name: "Does SkyServer provide free SSL certificates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All our shared hosting plans include free SSL certificates to secure your website and improve SEO rankings."
      }
    },
    {
      "@type": "Question",
      name: "What is the uptime guarantee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SkyServer guarantees 99.9% uptime for all shared hosting plans, ensuring your website stays online and accessible 24/7."
      }
    },
    {
      "@type": "Question",
      name: "Which control panel is provided?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide cPanel, the industry's most popular control panel for easy website management, email setup, database management, and file management."
      }
    },
    {
      "@type": "Question",
      name: "Is LiteSpeed faster than Apache?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! LiteSpeed web server is up to 84x faster than Apache and significantly reduces server load, providing faster page load times for your visitors."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer 24/7 customer support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! SkyServer provides 24/7 expert customer support via live chat, email, and phone to assist you with any hosting issues."
      }
    }
  ]
};

const faqItems = [
  {
    question: "Is shared hosting good for beginners?",
    answer:
      "Yes, shared hosting is the best choice for beginners. SkyServer shared hosting includes cPanel, one-click installers, free SSL, and managed security which makes it easy for anyone to launch a website without technical knowledge."
  },
  {
    question: "How secure is SkyServer shared hosting?",
    answer:
      "SkyServer uses proactive server monitoring, malware protection, firewalls, and LiteSpeed security rules. Free SSL certificates ensure encrypted connections for all hosted websites."
  },
  {
    question: "Can I upgrade my hosting plan later?",
    answer:
      "Absolutely. You can upgrade your shared hosting plan anytime as your website grows. SkyServer allows seamless scaling to higher shared plans, VPS hosting, or cloud servers."
  },
  {
    question: "Why choose SkyServer over other hosting providers?",
    answer:
      "SkyServer offers Indian-optimized hosting infrastructure, fast support, transparent pricing, and enterprise-grade LiteSpeed servers at affordable prices."
  },
  {
    question: "What is included in shared hosting plans?",
    answer:
      "All SkyServer shared hosting plans include free SSL certificates, cPanel control panel, email accounts, MySQL databases, daily backups, 99.9% uptime guarantee, and 24/7 technical support in Hindi and English."
  },
  {
    question: "How long does it take to set up hosting?",
    answer:
      "Your shared hosting account is activated instantly after payment. You'll receive login credentials immediately and can start building your website within minutes. Domain propagation may take 24-48 hours."
  }
];

export default function HostingPage() {
  return (
    <PageShell breadcrumb="Shared Hosting">
      <Script
        id="schema-hosting-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <Script
        id="schema-hosting-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <Script
        id="schema-hosting-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      {/* Hero Section */}
      <section className="hero-hosting" style={{ background: "#ffffff", padding: "50px 0", position: "relative", overflow: "hidden" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
          <div className="row align-items-center" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 30 }}>
            {/* Left Content */}
            <div className="col-lg-6" style={{ flex: 1, minWidth: 300 }}>
              <span style={{ display: "inline-block", background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)", color: "#fff", padding: "6px 16px", borderRadius: 50, fontSize: 13, fontWeight: 600, marginBottom: 16, boxShadow: "0 4px 15px rgba(245, 158, 11, 0.3)" }}>
                Up to <strong style={{ fontWeight: 800 }}>80% OFF</strong> Web Hosting
              </span>

              <h1 style={{ color: "#1e293b", fontSize: 42, fontWeight: 800, lineHeight: 1.2, margin: "0 0 20px 0", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                Fast, Secure Cloud &amp;<br />
                <span style={{ background: "linear-gradient(to right, #3b82f6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Web Hosting in India
                </span>
              </h1>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
                {[
                  "Launch your website in minutes with India-based support",
                  "Free SSL, email & daily backups",
                  "24/7 expert support in Hindi & English",
                  "Cloud hosting & cPanel hosting available"
                ].map((text) => (
                  <li key={text} style={{ color: "#475569", fontSize: 15, padding: "8px 0", paddingLeft: 30, position: "relative", lineHeight: 1.5 }}>
                    <span style={{ position: "absolute", left: 0, top: 8, width: 20, height: 20, background: "rgba(59, 130, 246, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6", fontSize: 12, fontWeight: "bold" }}>
                      ✓
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <div style={{ marginBottom: 10 }}>
                <span style={{ color: "#3b82f6", fontSize: 46, fontWeight: 800, lineHeight: 1 }}>₹29.00</span>
                <span style={{ color: "#64748b", fontSize: 18, fontWeight: 500 }}>/mo</span>
              </div>

              <p style={{ color: "#64748b", fontSize: 13, margin: "0 0 18px 0", fontWeight: 500 }}>
                Same Price at Renewal – Guaranteed ✨
              </p>

              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34, 197, 94, 0.1)", padding: "10px 18px", borderRadius: 50, border: "1px solid rgba(34, 197, 94, 0.3)" }}>
                <span style={{ color: "#22c55e", fontWeight: 600, fontSize: 13 }}>🛡️ 7-day money-back guarantee</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center" style={{ flex: 1, minWidth: 300, position: "relative" }}>
              <div style={{ position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://api.hdmedianetwork.in/sky_cdn/cheap-web-hosting-762x571.avif"
                  alt="Web Hosting in India"
                  className="img-fluid"
                  width={762}
                  height={571}
                  style={{ maxWidth: "100%", height: "auto", borderRadius: 12 }}
                />

                <div style={{ position: "absolute", bottom: 20, right: 20, background: "#ffffff", backdropFilter: "blur(10px)", padding: "16px 24px", borderRadius: 12, boxShadow: "0 8px 20px rgba(0,0,0,0.1)", textAlign: "center", border: "2px solid rgba(59, 130, 246, 0.2)" }}>
                  <strong style={{ display: "block", fontSize: 32, color: "#3b82f6", fontWeight: 800, lineHeight: 1 }}>24/7</strong>
                  <span style={{ display: "block", fontSize: 13, color: "#64748b", fontWeight: 600, marginTop: 4 }}>Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="hosting-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>SHARED WEB HOSTING PLAN!</h3>
              </div>
              <PricingWidget gid={2} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="hosting-faq spad" style={{ background: "#f8fafc", padding: "60px 0" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ color: "#1e293b", fontSize: 38, fontWeight: 800, margin: "0 0 12px 0", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
              Shared Hosting{" "}
              <span style={{ background: "linear-gradient(to right, #3b82f6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                FAQs
              </span>
            </h2>
            <p style={{ color: "#64748b", fontSize: 16, margin: 0 }}>Got questions? We&apos;ve got answers!</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {faqItems.map((faq) => (
              <div
                key={faq.question}
                style={{ background: "#ffffff", borderRadius: 12, padding: 28, border: "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "all 0.3s ease" }}
              >
                <div style={{ width: 48, height: 48, background: "rgba(59, 130, 246, 0.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <span style={{ color: "#3b82f6", fontSize: 18, fontWeight: "bold" }}>?</span>
                </div>
                <h3 style={{ color: "#1e293b", fontSize: 19, fontWeight: 700, margin: "0 0 14px 0", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                  {faq.question}
                </h3>
                <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <SolutionCards />

      <Script
        src="https://api.hdmedianetwork.in/sky_cdn/skystore.js"
        strategy="afterInteractive"
      />
    </PageShell>
  );
}
