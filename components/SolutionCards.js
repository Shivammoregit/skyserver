import Link from "next/link";

/**
 * Reusable "Choose the Right Solution" cards section.
 * Shared across hosting, cloud, vps, and other product pages.
 */

const solutions = [
  {
    href: "/vps",
    badge: "India Servers",
    badgeColor: "blue",
    title: "VPS Servers",
    description: "Fully managed virtual servers with high performance and security."
  },
  {
    href: "/cloud",
    badge: "Best Seller",
    badgeColor: "red",
    title: "Cloud Hosting",
    description: "Scale your website effortlessly with next-gen cloud infrastructure."
  },
  {
    href: "/hosting",
    badge: "Budget Plan",
    badgeColor: "green",
    title: "Shared Hosting",
    description: "Affordable and reliable hosting for small businesses & startups."
  },
  {
    href: "/wordpress",
    badge: "Popular",
    badgeColor: "yellow",
    title: "WordPress Hosting",
    description: "Optimized WordPress hosting with blazing speed & 1-click setup."
  },
  {
    href: "/business",
    badge: "High Power",
    badgeColor: "purple",
    title: "Business Hosting",
    description: "Powerful hosting for eCommerce & high-traffic websites."
  },
  {
    href: "/reseller",
    badge: "Earn Revenue",
    badgeColor: "pink",
    title: "Reseller Hosting",
    description: "Start your own hosting business and earn recurring revenue."
  }
];

export default function SolutionCards() {
  return (
    <section style={{ padding: "60px 0", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1200, margin: "auto", padding: "0 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <h3 style={{ fontSize: 36, fontWeight: 800, color: "#1e293b" }}>
            Choose the <span style={{ color: "#2563eb" }}>Right Solution</span>
          </h3>
          <p style={{ color: "#64748b", marginTop: 10 }}>
            Select the perfect hosting plan for your needs
          </p>
        </div>

        <div className="services-flex">
          {solutions.map((s) => (
            <Link key={s.href} href={s.href} className="service-card">
              <span className={`badge ${s.badgeColor}`}>{s.badge}</span>
              <h5>{s.title}</h5>
              <p>{s.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .services-flex { display: flex; flex-wrap: wrap; gap: 24px; }
        .service-card { width: calc(33.333% - 16px); background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 28px; text-decoration: none; color: #1e293b; position: relative; transition: .3s ease; }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,.1); }
        .service-card h5 { font-size: 20px; margin: 0 0 10px; }
        .service-card p { font-size: 14px; color: #64748b; line-height: 1.6; }
        .badge { position: absolute; top: 14px; right: 14px; font-size: 11px; padding: 6px 12px; border-radius: 20px; font-weight: 600; color: #fff; text-transform: uppercase; }
        .badge.blue { background: #2563eb; }
        .badge.red { background: #dc2626; }
        .badge.green { background: #059669; }
        .badge.yellow { background: #eab308; color: #000; }
        .badge.purple { background: #7c3aed; }
        .badge.pink { background: #be123c; }
        @media (max-width: 992px) { .service-card { width: calc(50% - 12px); } }
        @media (max-width: 600px) { .service-card { width: 100%; } }
      `}</style>
    </section>
  );
}
