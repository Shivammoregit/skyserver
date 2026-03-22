"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PricingWidget from "@/components/PricingWidget";

export default function HomeContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const customCss = `
    /* TRUSTED SLIDER */
    .trusted-row { display: flex; align-items: center; }
    .trusted-title { font-size: 26px; font-weight: 800; letter-spacing: 2px; padding-right: 40px; white-space: nowrap; }
    .trusted-divider { width: 2px; height: 70px; background: #e0e0e0; margin-right: 40px; }
    .trusted-slider-wrap { overflow: hidden; flex: 1; position: relative; }
    .logo-slider { display: flex; align-items: center; gap: 80px; width: max-content; animation: logo-scroll 20s linear infinite; }
    .logo-slider:hover { animation-play-state: paused; }
    .bw-logo { height: 65px; width: auto; object-fit: contain; filter: grayscale(100%); opacity: 0.75; transition: all 0.3s ease; }
    .bw-logo:hover { filter: grayscale(0%); opacity: 1; transform: scale(1.05); }
    @keyframes logo-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

    /* FEATURE CARD */
    .home-feature-card { background: #ffffff; border-radius: 12px; padding: 20px; text-align: center; box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08); height: 120px; display: flex; flex-direction: column; align-items: center; justify-content: center; transition: transform 0.25s ease, box-shadow 0.25s ease; }
    .home-feature-card img { width: 55px; height: 55px; }
    .home-feature-card p { margin-top: 10px; font-size: 0.8rem; font-weight: 600; color: #000; margin-bottom: 0; }
    .home-feature-card:hover { transform: translateY(-5px); box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15); }

    /* REVIEW BTN */
    .review-btn { display: flex; align-items: center; gap: 12px; padding: 10px 18px; border-radius: 12px; border: 1px solid #e5e5e5; text-decoration: none; font-size: 0.9rem; font-weight: 600; color: #000; background: #fff; transition: transform 0.25s ease, box-shadow 0.25s ease; }
    .review-btn img { width: 26px; height: 26px; object-fit: contain; flex-shrink: 0; display: block; }
    .goodfirms-btn img, .hostadvice-btn img { width: 90px; height: auto; max-height: 32px; }
    .review-btn span { color: #000; line-height: 1; white-space: nowrap; }
    .review-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15); }

    /* SERVICES CARDS */
    .services-flex { display: flex; flex-wrap: wrap; gap: 24px; }
    .service-card { width: calc(33.333% - 16px); background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 28px; text-decoration: none; color: #1e293b; position: relative; transition: .3s ease; }
    .service-card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,.1); }
    .service-card h3 { font-size: 20px; margin: 0 0 10px; }
    .service-card p { font-size: 14px; color: #64748b; line-height: 1.6; }
    .srv-badge { position: absolute; top: 14px; right: 14px; font-size: 11px; padding: 6px 12px; border-radius: 20px; font-weight: 600; color: #fff; text-transform: uppercase; }
    .bdg-blue { background: #2563eb; } .bdg-red { background: #dc2626; } .bdg-green { background: #059669; }
    .bdg-yellow { background: #eab308; color: #000; } .bdg-purple { background: #7c3aed; } .bdg-pink { background: #be123c; }

    /* CTA BOX */
    .server-cta-wrap { padding: 30px 40px; }
    .server-cta { padding: 55px 30px; border-radius: 14px; background-image: url('https://www.cantech.in/assets/images/cta-grid-bg.svg'), linear-gradient(90deg, rgba(10,18,28,0.95), rgba(10,18,28,0.85)); background-size: cover, cover; background-repeat: no-repeat; background-position: center; }
    .cta-container { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 40px; }
    .cta-text h2 { color: #ffffff; font-size: 28px; font-weight: 800; margin: 0 0 12px; }
    .cta-text p { color: #cfd6e1; font-size: 16px; margin: 0; }
    .cta-btn { background: #d81f26; color: #ffffff; padding: 16px 30px; font-size: 16px; font-weight: 700; border-radius: 6px; text-decoration: none; transition: all 0.3s ease; white-space: nowrap; display: inline-block; }
    .cta-btn:hover { background: #b8181e; transform: translateY(-2px); color:#fff; }

    /* DATACENTER */
    :root { --server_location_duration: 35s; }
    .cn-datacenter-area { background: radial-gradient(ellipse at bottom, #18222e, #0f1720); padding: 80px 0 40px; overflow: hidden; }
    .cn-ttl-h2 { color: #fff; font-size: 42px; text-align: center; margin-bottom: 15px; }
    .cn-sub-ttl { color: #cfd8e3; max-width: 900px; margin: 0 auto; text-align: center; font-size: 16px; line-height: 1.6; }
    .cn-datacenter-counterbox { display: flex; justify-content: center; margin-top: 50px; position: relative; z-index: 2; }
    .cn-datacenter-round { height: 160px; width: 160px; border-radius: 50%; background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 20px 40px rgba(0,0,0,.35); }
    .cn-datacenter-counter { font-size: 42px; font-weight: 700; color: #0f1720; }
    .cn-datacenter-txt { font-size: 15px; color: #555; }
    .cn-datacenter-mapbox { position: relative; margin-top: -120px; text-align: center; }
    .cn-datacenter-mapbox img { max-width: 100%; opacity: .9; }
    .cn-srvr-wrapper { max-width: 1400px; margin: 40px auto 0; }
    .cn-srvr-marquee { display: flex; overflow: hidden; mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
    .cn-marquee-group { display: flex; gap: 24px; flex-shrink: 0; min-width: 100%; animation: scroll-x var(--server_location_duration) linear infinite; }
    .marquee-reverse .cn-marquee-group { animation-direction: reverse; }
    @keyframes scroll-x { from { transform: translateX(0); } to { transform: translateX(-100%); } }
    .cn-srvr-lctbox { display: flex; align-items: center; gap: 12px; padding: 10px 22px; border-radius: 8px; background: linear-gradient(320deg,#293139,#121820); border: 1px solid #2e3740; }
    .cn-srvr-name { color: #fff; font-size: 15px; font-weight: 500; }

    @media (max-width: 992px) {
      .service-card { width: calc(50% - 12px); }
      .cn-datacenter-counterbox, .cn-datacenter-mapbox { display: none; }
    }
    @media (max-width: 768px) {
      .trusted-row { flex-direction: column; gap: 30px; }
      .trusted-title { padding: 0; margin-bottom: 10px; text-align: center; }
      .trusted-divider { display: none; }
      .bw-logo { height: 50px; }
      .server-cta-wrap { padding: 50px 16px; }
      .cta-container { flex-direction: column; text-align: center; gap: 25px; }
      .cta-text h2 { font-size: 22px; }
      .cta-btn { width: 100%; text-align: center; }
    }
    @media (max-width: 600px) {
      .service-card { width: 100%; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customCss }} />

      {/* HERO SECTION */}
      <section className="hero-section" style={{ padding: 0, margin: 0, overflow: "hidden", position: "relative" }}>
        <div style={{ display: "flex", width: "200%", transform: "translateX(-" + (currentSlide * 50) + "%)", transition: "transform 0.5s ease-in-out" }}>
          
          {/* Slide 1 */}
          <div className="hero__item" style={{ width: "50%", background: "url('/img/hero/hero-1.jpg') center/cover", padding: "40px 0", minHeight: "auto", height: "auto" }}>
            <div className="container">
              <div className="row" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", minHeight: "500px" }}>
                <div className="col-lg-6" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                  <div className="hero__text" style={{ width: "100%" }}>
                    <h1 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "20px", color: "#ffffff" }}>Best cPanel Hosting in India – Hosting Plans that Fit Your Pocket!</h1>
                    <p style={{ fontSize: "18px", color: "#ffffff", marginBottom: "20px" }}>SkyServer offers fast, secure, and affordable hosting with 99.9% uptime and 24/7 support.</p>
                    <a href="https://skyserver.in/client/login" style={{ display: "inline-block", background: "#1677ff", color: "#fff", padding: "12px 28px", borderRadius: "8px", fontWeight: "600", textDecoration: "none" }}>Get started now</a>
                  </div>
                </div>
                <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="hero__img">
                    <img src="/img/hero/hero-right.png" alt="SkyServer Cloud Hosting India" style={{ width: "450px", height: "450px", objectFit: "contain", maxWidth: "100%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="hero__item" style={{ width: "50%", background: "url('/img/hero/hero-1.jpg') center/cover", padding: "40px 0", minHeight: "auto", height: "auto" }}>
            <div className="container">
              <div className="row" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", minHeight: "500px" }}>
                <div className="col-lg-6" style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                  <div className="hero__text" style={{ width: "100%" }}>
                    <p style={{ fontSize: "18px", color: "#ffffff", marginBottom: "10px" }}>SkyServer: Your Expert in Managed Hosting</p>
                    <p style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px", color: "#ffffff" }}>Seamless Web Hosting Excellence!</p>
                    <a href="https://skyserver.in/client/login" style={{ display: "inline-block", background: "#1677ff", color: "#fff", padding: "12px 28px", borderRadius: "8px", fontWeight: "600", textDecoration: "none" }}>Get started now</a>
                  </div>
                </div>
                <div className="col-lg-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div className="hero__img">
                    <img src="/img/hero/hero2.png" alt="SkyServer Managed Hosting Services" style={{ width: "450px", height: "450px", objectFit: "contain", maxWidth: "100%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="trusted-section" style={{ background: "#ffffff", padding: "15px 0", overflow: "hidden" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
          <div className="trusted-row">
            <div className="trusted-title">TRUSTED BY</div>
            <div className="trusted-divider"></div>
            <div className="trusted-slider-wrap">
              <div className="logo-slider">
                <img src="https://www.hdmedianetwork.in/assets/r-BplV-Lu1.png" alt="HD Media Network" className="bw-logo" />
                <img src="https://www.hdmedianetwork.in/assets/o-BVL5cdba.png" alt="Client Logo 1" className="bw-logo" />
                <img src="https://www.hdmedianetwork.in/assets/d-DUAQoCmr.png" alt="Client Logo 2" className="bw-logo" />
                <img src="https://www.gayoressentials.com/cdn/shop/files/Gayor-final-logo-e1662030521576-290x162_1_fb2ec112-b4a6-4f04-9bb2-1042144169af.png?v=1681188472" alt="Gayor Essentials" className="bw-logo" />
                <img src="https://poornima.edu.in/assets/images/PULogo.png" alt="Poornima University logo" className="bw-logo" />
                <img src="https://www.hdmedianetwork.in/assets/j-Hfzge_pi.png" alt="Client Logo 3" className="bw-logo" />
                <img src="https://www.hdmedianetwork.in/assets/r-BplV-Lu1.png" alt="HD Media Network Duplicate" className="bw-logo" />
                <img src="https://www.hdmedianetwork.in/assets/o-BVL5cdba.png" alt="Client Logo 1 Duplicate" className="bw-logo" />
                <img src="https://www.hdmedianetwork.in/assets/d-DUAQoCmr.png" alt="Client Logo 2 Duplicate" className="bw-logo" />
                <img src="https://www.gayoressentials.com/cdn/shop/files/Gayor-final-logo-e1662030521576-290x162_1_fb2ec112-b4a6-4f04-9bb2-1042144169af.png?v=1681188472" alt="Gayor Essentials Duplicate" className="bw-logo" />
                <img src="https://poornima.edu.in/assets/images/PULogo.png" alt="Poornima University logo Duplicate" className="bw-logo" />
                <img src="https://www.hdmedianetwork.in/assets/j-Hfzge_pi.png" alt="Client Logo 3 Duplicate" className="bw-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAIN SEARCH */}
      <section className="register-domain spad">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="register__text">
                <div className="section-title">
                  <h2>Register Your Domain Now!</h2>
                </div>
                <div className="register__form">
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const query = document.getElementById("domain-input").value;
                    if (query) {
                      window.location.href = "https://www.skyserver.in/client/order.php?domainaction=register&domain=" + query;
                    }
                  }}>
                    <input type="text" id="domain-input" placeholder="ex: hdmedianetwork" aria-label="Domain name search" />
                    <button type="submit" className="site-btn">Search</button>
                  </form>
                </div>
                <div className="register__result">
                  <div style={{ textAlign: "center" }}>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      <li style={{ display: "inline-block", margin: "2px 20px" }}><img src="/img/ext/1.png" alt=".com" style={{ width: "50px" }} /></li>
                      <li style={{ display: "inline-block", margin: "2px 20px" }}><img src="/img/ext/2.png" alt=".in" style={{ width: "50px" }} /></li>
                      <li style={{ display: "inline-block", margin: "2px 20px" }}><img src="/img/ext/3.png" alt=".net" style={{ width: "50px" }} /></li>
                      <li style={{ display: "inline-block", margin: "2px 20px" }}><img src="/img/ext/4.png" alt=".org" style={{ width: "50px" }} /></li>
                      <li style={{ display: "inline-block", margin: "2px 20px" }}><img src="/img/ext/5.png" alt=".co" style={{ width: "50px" }} /></li>
                      <li style={{ display: "inline-block", margin: "2px 20px" }}><img src="/img/ext/6.png" alt=".info" style={{ width: "50px" }} /></li>
                    </ul>
                  </div>
                </div>
                <p style={{ textAlign: "center" }}>Claim Your Digital Identity with SkyServer!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOSTING FEATURES */}
      <section style={{ backgroundColor: "#eeeffb", padding: "60px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0" style={{ textAlign: "left" }}>
              <h2 style={{ fontSize: "3rem", fontWeight: "700", color: "#000", lineHeight: "1.2" }}>Our Hosting Features</h2>
              <p style={{ fontSize: "1.2rem", color: "#666", marginTop: "15px" }}>
                Explore the most powerful features designed to deliver an exceptional hosting experience.
              </p>
            </div>
            <div className="col-md-6">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 mb-3">
                  <div className="home-feature-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/10150/10150384.png" alt="High Performance" />
                    <p>High Performance</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-3">
                  <div className="home-feature-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2092/2092745.png" alt="Enhanced Security" />
                    <p>Enhanced Security</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-3">
                  <div className="home-feature-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2160/2160089.png" alt="Indian Server" />
                    <p>Indian Server</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-3">
                  <div className="home-feature-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2254/2254257.png" alt="Daily Backups" />
                    <p>Daily Backups</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-3">
                  <div className="home-feature-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/9723/9723208.png" alt="24/7 Support" />
                    <p>24/7 Support</p>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-3">
                  <div className="home-feature-card">
                    <img src="https://cdn-icons-png.flaticon.com/512/2092/2092772.png" alt="Fast Load Time" />
                    <p>Fast Load Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: "#ffffff", padding: "40px 0" }}>
        <div className="container-fluid px-0">
          <div style={{ width: "100%", background: "#fff", borderRadius: "18px", padding: "30px 40px", border: "1px solid #eaeaea", boxShadow: "0 18px 45px rgba(0, 0, 0, 0.12)" }}>
            <div className="row align-items-center m-0">
              <div className="col-md-7 mb-3 mb-md-0">
                <p style={{ fontSize: "0.95rem", fontWeight: "700", color: "#000", marginBottom: "14px" }}>Review us on</p>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
                  <a href="https://www.trustpilot.com/review/skyserver.in" target="_blank" rel="noopener noreferrer" className="review-btn" aria-label="Review SkyServer on Trustpilot">
                    <img src="https://cdn.worldvectorlogo.com/logos/trustpilot-2.svg" alt="Trustpilot" />
                    <span>Trustpilot</span>
                  </a>
                  <a href="https://g.page/r/Cc85mN_DFSflEAI/review" target="_blank" rel="noopener noreferrer" className="review-btn" aria-label="Review SkyServer on Google">
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991231.png" alt="Google Reviews" />
                    <span>Google</span>
                  </a>
                  <a href="https://www.goodfirms.co/company/skyserver-cloud-technologies" target="_blank" rel="noopener noreferrer" className="review-btn goodfirms-btn" aria-label="Review SkyServer on GoodFirms">
                    <img src="https://assets.goodfirms.co/static/goodfirms.svg" alt="GoodFirms Logo" />
                  </a>
                  <a href="https://hostadvice.com/hosting-company/skyserver-reviews/" target="_blank" rel="noopener noreferrer" className="review-btn hostadvice-btn" aria-label="Review SkyServer on HostAdvice">
                    <img src="https://hostadvice.com/wp-content/themes/bestwh/v3/dist/img/logo-fox.png" alt="HostAdvice Logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div style={{ display: "flex", alignItems: "center", gap: "18px", background: "#f8f9ff", padding: "20px", borderRadius: "14px", border: "1px solid #ececff" }}>
                  <img src="https://hostadvice.com/awards/2026-top-25-web-hosting.png" alt="HostAdvice Award" style={{ width: "82px", height: "auto" }} />
                  <div>
                    <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: "700", color: "#000" }}>HostAdvice Award Winner 2026</h3>
                    <p style={{ margin: "6px 0 0", fontSize: "0.85rem", color: "#555", lineHeight: "1.4" }}>Top 25 Web Hosting Provider<br />Trusted by real customer reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING WIDGET */}
      <section className="hosting-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Shared Web Hosting Plans</h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                  <div className="d-flex justify-content-center align-items-center mb-4">
                    <img src="https://www.kindpng.com/picc/m/463-4630625_cpanel-logo-black-and-white-hd-png-download.png" alt="cPanel" className="me-1" width="100" />
                    <span className="mx-2 text-dark">+</span>
                    <img src="https://brandlogos.net/wp-content/uploads/2022/07/wordpress-logo_brandlogos.net_bbueg.png" alt="WordPress" className="me-1" width="100" />
                    <span className="ms-2 text-dark">- Users&apos; First Choice!</span>
                  </div>
                </div>
              </div>
              <PricingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="server-cta-wrap">
        <div className="server-cta">
          <div className="cta-container">
            <div className="cta-text">
              <h2>Not Sure Which Server is Right for You?</h2>
              <p>Let us guide you! Our experts will help you find the perfect hosting solution.</p>
            </div>
            <div className="cta-action">
              <a href="#contact" className="cta-btn">Get a Free Consultation →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE THE RIGHT SOLUTION */}
      <section style={{ padding: "60px 0", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "800", color: "#1e293b" }}>Choose the <span style={{ color: "#2563eb" }}>Right Solution</span></h2>
            <p style={{ color: "#64748b", marginTop: "10px" }}>Select the perfect hosting plan for your needs</p>
          </div>
          <div className="services-flex">
            <Link href="/vps" className="service-card">
              <span className="srv-badge bdg-blue">India Servers</span>
              <h3>VPS Servers</h3>
              <p>Fully managed virtual servers with high performance and security.</p>
            </Link>
            <Link href="/cloud" className="service-card">
              <span className="srv-badge bdg-red">Best Seller</span>
              <h3>Cloud Hosting</h3>
              <p>Scale your website effortlessly with next-gen cloud infrastructure.</p>
            </Link>
            <Link href="/hosting" className="service-card">
              <span className="srv-badge bdg-green">Budget Plan</span>
              <h3>Shared Hosting</h3>
              <p>Affordable and reliable hosting for small businesses & startups.</p>
            </Link>
            <Link href="/wordpress" className="service-card">
              <span className="srv-badge bdg-yellow">Popular</span>
              <h3>WordPress Hosting</h3>
              <p>Optimized WordPress hosting with blazing speed & 1-click setup.</p>
            </Link>
            <Link href="/business" className="service-card">
              <span className="srv-badge bdg-purple">High Power</span>
              <h3>Business Hosting</h3>
              <p>Powerful hosting for eCommerce & high-traffic websites.</p>
            </Link>
            <Link href="/reseller" className="service-card">
              <span className="srv-badge bdg-pink">Earn Revenue</span>
              <h3>Reseller Hosting</h3>
              <p>Start your own hosting business and earn recurring revenue.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* DATACENTER */}
      <section className="cn-datacenter-area">
        <div className="container">
          <h2 className="cn-ttl-h2">World-Class Data Centers</h2>
          <p className="cn-sub-ttl">The worldwide located data centers apply the highest technologies for availability. These centers offer large, safe and highly stable environments for businesses small and large. Stay assured to receive the best performance and reliability from us.</p>
        </div>
        <div className="cn-datacenter-counterbox">
          <div className="cn-datacenter-round">
            <div className="cn-datacenter-counter">10+</div>
            <div className="cn-datacenter-txt">Locations</div>
          </div>
        </div>
        <div className="cn-datacenter-mapbox">
          <img loading="lazy" src="https://www.cantech.in//assets/images/data-centers-map.svg" alt="World-Class Data Centers Map" />
        </div>
        <div className="cn-srvr-wrapper">
          <div className="cn-srvr-marquee marquee-reverse">
            <div className="cn-marquee-group">
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/india.svg" alt="India" /><span className="cn-srvr-name">India</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/usa.svg" alt="USA" /><span className="cn-srvr-name">United States</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/uk.svg" alt="UK" /><span className="cn-srvr-name">United Kingdom</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/canada.svg" alt="Canada" /><span className="cn-srvr-name">Canada</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/germany.svg" alt="Germany" /><span className="cn-srvr-name">Germany</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/australia.svg" alt="Australia" /><span className="cn-srvr-name">Australia</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/france.svg" alt="France" /><span className="cn-srvr-name">France</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/dubai.svg" alt="UAE" /><span className="cn-srvr-name">Dubai</span></div>
            </div>
            <div className="cn-marquee-group">
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/india.svg" alt="India" /><span className="cn-srvr-name">India</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/usa.svg" alt="USA" /><span className="cn-srvr-name">United States</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/uk.svg" alt="UK" /><span className="cn-srvr-name">United Kingdom</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/canada.svg" alt="Canada" /><span className="cn-srvr-name">Canada</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/germany.svg" alt="Germany" /><span className="cn-srvr-name">Germany</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/australia.svg" alt="Australia" /><span className="cn-srvr-name">Australia</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/france.svg" alt="France" /><span className="cn-srvr-name">France</span></div>
              <div className="cn-srvr-lctbox"><img loading="lazy" className="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/dubai.svg" alt="UAE" /><span className="cn-srvr-name">Dubai</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-DAY GUARANTEE */}
      <div className="container my-5" style={{ borderRadius: "22px", overflow: "hidden" }}>
        <div className="row bg-primary text-white p-5 rounded-4 align-items-center" style={{ borderRadius: "12px" }}>
          <div className="col-md-8">
            <h2 className="fw-bold fs-1 mb-3">7-day money back guarantee</h2>
            <p className="fs-6">
              Fully explore the features, performance, and assess our customer support. If we do not
              meet your expectations, ask for a refund & we will process it promptly with no questions
              asked.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img src="https://www.pngall.com/wp-content/uploads/13/100-Money-Back-Guarantee-No-Background.png" alt="7-Day Guarantee" className="img-fluid" width="180" style={{ filter: "invert(1)" }} />
          </div>
        </div>
      </div>

      {/* LITESPEED SERVER */}
      <section className="services-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img src="/img/hero/server.png" alt="LiteSpeed Server Infrastructure" />
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="plan__text">
                <h2>Our Platform is Powered by <strong>LiteSpeed Server</strong></h2>
                <ul>
                  <li><span className="fa fa-check"></span> FREE Domain Name <span style={{ backgroundColor: "#ff6347", color: "white", padding: "5px 10px", fontSize: "12px", fontWeight: "bold", borderRadius: "3px" }}>Coming Soon</span></li>
                  <li><span className="fa fa-check"></span> FREE Email Address</li>
                  <li><span className="fa fa-check"></span> Plenty of disk space</li>
                  <li><span className="fa fa-check"></span> FREE Website Builder</li>
                  <li><span className="fa fa-check"></span> FREE Marketing Tools</li>
                  <li><span className="fa fa-check"></span> 1-Click WordPress Install</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MIGRATION */}
      <div className="container-fluid" style={{ backgroundColor: "#2e6efc", height: "auto", padding: "50px 20px", marginBottom: "50px" }}>
        <div className="row align-items-center">
          <div className="col-md-6 position-relative">
            <div style={{ position: "relative", maxWidth: "600px", margin: "0 auto" }}>
              <div style={{ backgroundColor: "#4c7fff", borderRadius: "20px", padding: "30px", position: "relative", marginBottom: "20px" }}>
                <div style={{ fontSize: "24px", color: "white", fontWeight: "bold", marginBottom: "20px" }}>SkyServer Cloud Technologies</div>
                <div className="d-flex gap-3 mb-4">
                  <div style={{ border: "2px solid white", borderRadius: "10px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path></svg>
                  </div>
                  <div style={{ border: "2px solid white", borderRadius: "10px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "10px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16"><path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3z"></path></svg>
                  </div>
                  <div style={{ border: "2px solid white", borderRadius: "10px", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "10px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16"><path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"></path></svg>
                  </div>
                </div>
              </div>
              <img src="/img/men.png" style={{ position: "absolute", bottom: "-20px", right: "20px", maxWidth: "60%", borderRadius: "10px", zIndex: 9999 }} alt="Migration Expert" />
              <div style={{ position: "absolute", bottom: "-22px", right: "20px", width: "60%", height: "1px", backgroundColor: "rgba(128, 128, 128, 0.5)" }}></div>
              <div style={{ position: "absolute", bottom: "-70px", left: "0", fontSize: "100px", fontWeight: "900", color: "rgba(255,255,255,0.1)", letterSpacing: "20px" }} aria-hidden="true">MIGR</div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              <h2 style={{ color: "white", fontSize: "32px", fontWeight: "700", marginBottom: "10px" }}>
                Migrate Your Website to SkyServer, <span style={{ color: "#ffde00", fontWeight: "700" }}>Stress-Free</span> Without Hiccups
              </h2>
              <p style={{ color: "white", fontSize: "15px", marginBottom: "40px", lineHeight: "1.6" }}>
                Enjoy free migration and unmatched hosting performance, thanks to our qualified migration professionals.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="https://api.whatsapp.com/send?phone=917509683151&text=Hello+Team+SkyServer." className="btn btn-light px-4 py-3" style={{ borderRadius: "30px", fontWeight: "500", minWidth: "180px" }}>Talk to our expert</a>
                <Link href="/hosting" className="btn btn-outline-light px-4 py-3" style={{ borderRadius: "30px", fontWeight: "500", minWidth: "180px", marginLeft: "20px" }}>View Plans</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
