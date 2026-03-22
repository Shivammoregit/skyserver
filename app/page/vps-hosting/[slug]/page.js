import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SitePreloader from "@/components/SitePreloader";
import { getAllLocationSlugs, getLocationBySlug } from "@/lib/vps-locations";

const featureCards = [
  {
    title: "NVMe SSD Storage",
    body: "Ultra-fast NVMe SSD storage for maximum performance.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
        <path d="M4 6h16M4 10h16M4 14h16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "99.9% Uptime SLA",
    body: "Highly available infrastructure backed by SLA.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
        <path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    title: "Full Root Access",
    body: "Complete administrative control over your VPS.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.8">
        <path d="M12 11c1.6 0 3-1.4 3-3s-1.4-3-3-3-3 1.4-3 3 1.4 3 3 3zM5.5 20a6.5 6.5 0 0113 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

const controlPanels = [
  {
    title: "1. Free Control Panel (aaPanel)",
    image: "https://www.aapanel.com/static/new/images/index/home.png",
    alt: "aaPanel Control Panel"
  },
  {
    title: "2. Plesk Control Panel",
    image: "https://www.plesk.com/wp-content/uploads/2017/03/developers_title2-1024x626.png",
    alt: "Plesk Control Panel"
  },
  {
    title: "3. cPanel & WHM",
    image: "https://www.cpanel.net/wp-content/uploads/2025/07/latest-Home-Hero-Image-1024x715.webp",
    alt: "cPanel WHM"
  }
];

const operatingSystems = [
  ["CentOS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg"],
  ["Ubuntu", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"],
  ["Fedora", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg"],
  ["Debian", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"],
  ["SUSE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opensuse/opensuse-original.svg"],
  ["Windows", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"]
];

const locations = [
  ["India", "https://www.cantech.in//assets/images/location-flag/india.svg"],
  ["United States", "https://www.cantech.in//assets/images/location-flag/usa.svg"],
  ["United Kingdom", "https://www.cantech.in//assets/images/location-flag/uk.svg"],
  ["Canada", "https://www.cantech.in//assets/images/location-flag/canada.svg"],
  ["Germany", "https://www.cantech.in//assets/images/location-flag/germany.svg"],
  ["Australia", "https://www.cantech.in//assets/images/location-flag/australia.svg"],
  ["France", "https://www.cantech.in//assets/images/location-flag/france.svg"],
  ["Dubai (UAE)", "https://www.cantech.in//assets/images/location-flag/dubai.svg"],
  ["Singapore", "https://www.cantech.in//assets/images/location-flag/singapore.svg"],
  ["Hong Kong", "https://www.cantech.in//assets/images/location-flag/hong-kong.svg"],
  ["Netherlands", "https://www.cantech.in//assets/images/location-flag/netherlands.svg"]
];

const relatedSolutions = [
  ["/vps", "India Servers", "blue", "VPS Servers", "Fully managed virtual servers with high performance and security."],
  ["/cloud", "Best Seller", "red", "Cloud Hosting", "Scale your website effortlessly with next-gen cloud infrastructure."],
  ["/hosting", "Budget Plan", "green", "Shared Hosting", "Affordable and reliable hosting for small businesses & startups."],
  ["/wordpress", "Popular", "yellow", "WordPress Hosting", "Optimized WordPress hosting with blazing speed & 1-click setup."],
  ["/business", "High Power", "purple", "Business Hosting", "Powerful hosting for eCommerce & high-traffic websites."],
  ["/reseller", "Earn Revenue", "pink", "Reseller Hosting", "Start your own hosting business and earn recurring revenue."]
];

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getAllLocationSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);

  if (!location) {
    return {};
  }

  const canonical = `https://skyserver.in/page/vps-hosting/${location.slug}`;
  const title = `VPS Hosting in ${location.locationName} | SkyServer Cloud`;
  const description = `Fast & secure VPS hosting in ${location.locationName} with NVMe SSD, cPanel, full root access, free SSL and 24/7 expert support.`;

  return {
    title: { absolute: title },
    description,
    keywords: `VPS hosting ${location.locationName}, NVMe VPS, Linux VPS, Windows VPS, Cloud VPS India, Managed VPS hosting, cPanel VPS, SkyServer VPS`,
    alternates: { canonical },
    robots: { index: true, follow: true }
  };
}

function VpsLocationBody({ location }) {
  const canonical = `https://skyserver.in/page/vps-hosting/${location.slug}`;

  return (
    <>
      <Script id="vps-location-service-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebHostingService",
          name: "SkyServer VPS Hosting",
          url: canonical,
          serviceType: "VPS Hosting",
          provider: {
            "@type": "Organization",
            name: "SkyServer Cloud Technologies",
            url: "https://skyserver.in/"
          },
          areaServed: location.locationName
        })}
      </Script>
      <Script id="vps-location-product-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "SkyServer VPS Hosting",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "120"
          }
        })}
      </Script>
      <Script src="https://api.hdmedianetwork.in/sky_cdn/pricing/pricing.js?gid=5" strategy="afterInteractive" />

      <section className="hero-city">
        <div className="container">
          <h1>VPS Hosting in {location.locationName}</h1>
          <p>
            High-performance VPS hosting designed for speed, security, and scalability. Ideal for businesses,
            developers, and startups in {location.locationName}.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="container">
          <h2 className="mb-4 text-center">Choose Your VPS Plan</h2>
          <div id="plansLoading">Loading plans...</div>
          <div className="prc-grid" id="monthlyPlans" />
          <div className="prc-grid prc-hidden" id="yearlyPlans" />
        </div>
      </section>

      <section className="section-gap bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Why Choose SkyServer?</h2>
            <p className="mt-3">Enterprise-grade VPS infrastructure with NVMe SSD and expert support.</p>
          </div>

          <div className="row">
            {featureCards.map((feature) => (
              <div className="col-md-4 mb-4" key={feature.title}>
                <div className="feature-card">
                  <div className="icon-circle">{feature.icon}</div>
                  <h5>{feature.title}</h5>
                  <p>{feature.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vps-control-panels">
        <h2>Choose Your Control Panel</h2>
        <p>
          SkyServer offers flexible control panel options with Indian VPS. Choose what suits your workflow, budget,
          and hosting needs.
        </p>

        <div className="vps-panel-grid">
          {controlPanels.map((panel) => (
            <div className="vps-panel-card" key={panel.title}>
              <h3>{panel.title}</h3>
              <img alt={panel.alt} src={panel.image} />
            </div>
          ))}
        </div>

        <h2 className="vps-panel-heading">Choice of Operating System</h2>
        <p>
          Deploy your VPS with popular Linux distributions or Windows OS with full root access on SkyServer.
        </p>

        <div className="vps-os-grid">
          {operatingSystems.map(([label, image]) => (
            <div className="vps-os-card" key={label}>
              <img alt={label} src={image} />
              <div>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cn-space cn-datacenter-area">
        <div className="container">
          <h2 className="cn-ttl-h2">World-Class Data Centers</h2>
          <p className="cn-sub-ttl">
            The worldwide located data centers apply the highest technologies for availability. These centers offer
            large, safe and highly stable environments for businesses small and large. Stay assured to receive the
            best performance and reliability from us.
          </p>
        </div>

        <div className="cn-datacenter-counterbox">
          <div className="cn-datacenter-round">
            <div className="cn-datacenter-counter">10+</div>
            <div className="cn-datacenter-txt">Locations</div>
          </div>
        </div>

        <div className="cn-datacenter-mapbox">
          <img
            alt="World-Class Data Centers"
            loading="lazy"
            src="https://www.cantech.in//assets/images/data-centers-map.svg"
            title="World-Class Data Centers"
          />
        </div>

        <div className="cn-srvr-wrapper">
          <div className="cn-srvr-marquee marquee-reverse">
            {[0, 1].map((group) => (
              <div className="cn-marquee-group" key={group}>
                {locations.map(([label, image]) => (
                  <div className="cn-srvr-lctbox" key={`${group}-${label}`}>
                    <img
                      alt={`${label} Flag`}
                      className="cn-srvr-flg"
                      height="32"
                      loading="lazy"
                      src={image}
                      title={`${label} Flag`}
                      width="32"
                    />
                    <span className="cn-srvr-name">{label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vps-solution-section">
        <div className="vps-solution-inner">
          <div className="vps-solution-head">
            <h3>
              Choose the <span>Right Solution</span>
            </h3>
            <p>Select the perfect hosting plan for your needs</p>
          </div>

          <div className="services-flex">
            {relatedSolutions.map(([href, badge, badgeClass, title, body]) => (
              <Link className="service-card" href={href} key={href}>
                <span className={`badge ${badgeClass}`}>{badge}</span>
                <h5>{title}</h5>
                <p>{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default async function VpsLocationPage({ params }) {
  const { slug } = await params;
  const location = await getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <SitePreloader />
      <style>{`
        @import url("https://api.hdmedianetwork.in/sky_cdn/pricing/pricing.css");
        .hero-city{padding:70px 0;text-align:center}
        .hero-city h1{font-weight:800}
        .hero-city p{max-width:900px;margin:auto;color:#555}
        .section-gap{padding:70px 0}
        .feature-card{background:#fff;border-radius:18px;padding:35px 28px;text-align:center;height:100%;box-shadow:0 15px 35px rgba(0,0,0,.08);transition:all .3s ease}
        .feature-card:hover{transform:translateY(-8px);box-shadow:0 22px 45px rgba(0,0,0,.12)}
        .icon-circle{width:70px;height:70px;border-radius:50%;background:linear-gradient(135deg,#ede9ff,#f7f5ff);display:flex;align-items:center;justify-content:center;margin:0 auto 20px}
        .icon-circle svg{width:30px;height:30px;stroke:#4b2bbd}
        .feature-card h5{font-weight:700;margin-bottom:10px}
        .feature-card p{color:#666;font-size:15px;line-height:1.6}
        .vps-control-panels{padding:60px 20px;font-family:Arial,Helvetica,sans-serif;background:#fff}
        .vps-control-panels h2{text-align:center;font-size:32px;font-weight:700;color:#4b2bbd;margin-bottom:10px}
        .vps-control-panels p{text-align:center;max-width:900px;margin:0 auto 45px;font-size:15px;color:#555;line-height:1.6}
        .vps-panel-grid{display:flex;flex-wrap:wrap;gap:28px;justify-content:center;margin-bottom:70px}
        .vps-panel-card{width:320px;background:#f9f9ff;border-radius:14px;padding:20px;box-shadow:0 12px 28px rgba(0,0,0,.08);text-align:center}
        .vps-panel-card h3{color:#4b2bbd;font-size:18px;margin-bottom:12px}
        .vps-panel-card img{width:100%;border-radius:10px}
        .vps-panel-heading{font-size:30px !important}
        .vps-os-grid{display:flex;flex-wrap:wrap;gap:22px;justify-content:center}
        .vps-os-card{width:140px;padding:20px;border-radius:14px;text-align:center;box-shadow:0 8px 20px rgba(0,0,0,.08)}
        .vps-os-card img{width:42px}
        .vps-os-card div{margin-top:10px;font-weight:600}
        :root{--cn_bg_clr:#0f1720;--cn_white_clr:#fff;--cn_ttl_clr:#0f1720;--server_location_duration:35s}
        .cn-datacenter-area{background:radial-gradient(ellipse at bottom,#18222e,#0f1720);padding:80px 0 40px;overflow:hidden}
        .cn-ttl-h2{color:#fff;font-size:42px;text-align:center;margin-bottom:15px}
        .cn-sub-ttl{color:#cfd8e3;max-width:900px;margin:0 auto;text-align:center;font-size:16px;line-height:1.6}
        .cn-datacenter-counterbox{display:flex;justify-content:center;margin-top:50px;position:relative;z-index:2}
        .cn-datacenter-round{height:160px;width:160px;border-radius:50%;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 20px 40px rgba(0,0,0,.35)}
        .cn-datacenter-counter{font-size:42px;font-weight:700;color:#0f1720}
        .cn-datacenter-txt{font-size:15px;color:#555}
        .cn-datacenter-mapbox{position:relative;margin-top:-120px;text-align:center}
        .cn-datacenter-mapbox img{max-width:100%;opacity:.9}
        .cn-srvr-wrapper{max-width:1400px;margin:40px auto 0}
        .cn-srvr-marquee{display:flex;overflow:hidden;mask-image:linear-gradient(to right,transparent,black 15%,black 85%,transparent)}
        .cn-marquee-group{display:flex;gap:24px;flex-shrink:0;min-width:100%;animation:scroll-x var(--server_location_duration) linear infinite}
        .marquee-reverse .cn-marquee-group{animation-direction:reverse}
        @keyframes scroll-x{from{transform:translateX(0)}to{transform:translateX(-100%)}}
        .cn-srvr-lctbox{display:flex;align-items:center;gap:12px;padding:10px 22px;border-radius:8px;background:linear-gradient(320deg,#293139,#121820);border:1px solid #2e3740}
        .cn-srvr-name{color:#fff;font-size:15px;font-weight:500}
        .vps-solution-section{padding:60px 0;background:#f8fafc}
        .vps-solution-inner{max-width:1200px;margin:auto;padding:0 20px}
        .vps-solution-head{text-align:center;margin-bottom:50px}
        .vps-solution-head h3{font-size:36px;font-weight:800;color:#1e293b}
        .vps-solution-head h3 span{color:#2563eb}
        .vps-solution-head p{color:#64748b;margin-top:10px}
        .services-flex{display:flex;flex-wrap:wrap;gap:24px}
        .service-card{width:calc(33.333% - 16px);background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:28px;text-decoration:none;color:#1e293b;position:relative;transition:.3s ease}
        .service-card:hover{transform:translateY(-6px);box-shadow:0 12px 24px rgba(0,0,0,.1)}
        .service-card h5{font-size:20px;margin:0 0 10px}
        .service-card p{font-size:14px;color:#64748b;line-height:1.6}
        .badge{position:absolute;top:14px;right:14px;font-size:11px;padding:6px 12px;border-radius:20px;font-weight:600;color:#fff;text-transform:uppercase}
        .blue{background:#2563eb}.red{background:#dc2626}.green{background:#059669}.yellow{background:#eab308;color:#000}.purple{background:#7c3aed}.pink{background:#be123c}
        @media (max-width:992px){.cn-datacenter-counterbox,.cn-datacenter-mapbox{display:none}.service-card{width:calc(50% - 12px)}}
        @media (max-width:600px){.service-card{width:100%}}
      `}</style>
      <VpsLocationBody location={location} />
      <SiteFooter />
    </>
  );
}
