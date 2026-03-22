"use client";

import Link from "next/link";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function JaipurHostingContent() {
  const testimonials = [
    {
      text: <>SkyServer has ensured seamless website <strong style={{ color: "var(--seo-accent)" }}>performance</strong> and consistent service <strong style={{ color: "var(--seo-accent)" }}>stability</strong> for our Jaipur-based business.</>,
      name: "Jaydev Solanki",
      location: "Jaipur, Rajasthan"
    },
    {
      text: <>Their <strong style={{ color: "var(--seo-accent)" }}>support team</strong> helped us migrate our website smoothly with <strong style={{ color: "var(--seo-accent)" }}>zero downtime</strong>. Best hosting in Jaipur!</>,
      name: "Ankit Verma",
      location: "Jaipur, Rajasthan"
    },
    {
      text: <>With SkyServer's cloud hosting, our website speed improved dramatically and customer experience became <strong style={{ color: "var(--seo-accent)" }}>much better</strong>.</>,
      name: "Pooja Mehta",
      location: "Jaipur, Rajasthan"
    },
    {
      text: <>Reliable hosting, affordable pricing and <strong style={{ color: "var(--seo-accent)" }}>24/7 local support</strong> make SkyServer our long-term hosting partner in Jaipur.</>,
      name: "Rohit Sharma",
      location: "Jaipur, Rajasthan"
    }
  ];

  return (
    <>
      <link rel="stylesheet" href="/css/seo-landing.css" />

      {/* HERO SECTION */}
      <section className="seo-hero" style={{ background: "#fff", padding: "90px 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="seo-hero-tag" style={{ background: "transparent", color: "#0d6efd", border: "none", padding: 0, fontSize: "16px", marginBottom: "15px", backdropFilter: "none" }}>
                Up to <strong>80% OFF</strong> Web Hosting in Jaipur
              </span>
              <h1 className="seo-hero-title" style={{ color: "#000", fontSize: "44px" }}>
                Fast, Secure Cloud &<br/>Web Hosting in Jaipur
              </h1>
              <ul className="seo-hero-features" style={{ color: "#333" }}>
                <li style={{ color: "#000" }}>Launch your website in minutes with Jaipur-based support</li>
                <li style={{ color: "#000" }}>Free SSL, email & daily backups</li>
                <li style={{ color: "#000" }}>24/7 expert support in Hindi & English</li>
                <li style={{ color: "#000" }}>Cloud hosting & cPanel hosting available</li>
              </ul>
              <div>
                <span className="seo-hero-price" style={{ color: "#000" }}>₹49.00</span>
                <span className="seo-hero-per" style={{ color: "#666" }}>/mo</span>
              </div>
              <p className="seo-hero-renew" style={{ color: "#0d6efd" }}>Same Price at Renewal – Guaranteed</p>
              <div className="seo-hero-guarantee" style={{ color: "#333" }}>
                <i className="fa fa-shield" style={{ color: "#00b050" }}></i> 7-day money-back guarantee
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="seo-hero-img" style={{ animation: "none" }}>
                <img src="https://api.hdmedianetwork.in/sky_cdn/cheap-web-hosting-762x571.avif"
                     alt="Web Hosting in Jaipur" 
                     className="img-fluid"
                     width="762"
                     height="571"
                     onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/762x571?text=Web+Hosting+Jaipur"; }} 
                     style={{ boxShadow: "none" }} />
                <div className="seo-hero-uptime" style={{ borderColor: "#00b050" }}>
                  <strong style={{ color: "#00b050" }}>24/7</strong>
                  <span>Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-DAY MONEY BACK GUARANTEE (Custom Jaipur layout) */}
      <section style={{ background: "#f9fbff", borderRadius: "20px", padding: "40px 0" }}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-5 col-sm-6 text-center mb-4 mb-md-0">
              <div style={{
                width: "180px",
                height: "180px",
                margin: "0 auto",
                background: "#00b894",
                color: "#fff",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
              }}>
                <div style={{ fontSize: "22px", fontWeight: "800", marginBottom: "6px" }}>7 DAY</div>
                <div style={{ fontSize: "14px", fontWeight: "600", lineHeight: "1.4" }}>MONEY-BACK<br/>GUARANTEE</div>
              </div>
            </div>

            <div className="col-lg-8 col-md-7 col-sm-12">
              <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "15px", color: "#000" }}>
                7-Day Money Back Guarantee
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#333", marginBottom: 0 }}>
                Experience SkyServer with complete confidence.<br/>
                If we don't meet your expectations, simply request a refund within 
                <strong> 7 days</strong> — we'll process it promptly with 
                <strong> no questions asked</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRESS-FREE HOSTING AND SUPPORT */}
      <section style={{ padding: "80px 0", background: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "10px", color: "#000" }}>
              Stress-free hosting in Jaipur with proactive customer support
            </h2>
            <p style={{ fontSize: "15px", color: "#555", maxWidth: "700px", margin: "0 auto" }}>
              We have an expert team of technical specialists in Jaipur to tackle all your queries with prompt assistance in Hindi and English.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "50px", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "280px", textAlign: "center" }}>
              <img src="https://api.hdmedianetwork.in/sky_cdn/stress-free.png" 
                   alt="Hosting Support in Jaipur" 
                   style={{ maxWidth: "100%", height: "auto" }}
                   width="400"
                   height="400"
                   onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x400?text=Support+Team"; }} />
            </div>
            <div style={{ flex: "1", minWidth: "280px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "25px" }}>
                <div style={{ width: "45px", height: "45px", borderRadius: "50%", background: "#eef4ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>🎧</div>
                <div>
                  <h4 style={{ margin: "0 0 5px", fontSize: "18px", fontWeight: "700" }}>24/7 support in English & Hindi</h4>
                  <p style={{ margin: "0", fontSize: "14px", color: "#555" }}>Live chat, email, and ticket assistance from Jaipur</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "25px" }}>
                <div style={{ width: "45px", height: "45px", borderRadius: "50%", background: "#eef4ff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>💬</div>
                <div>
                  <h4 style={{ margin: "0 0 5px", fontSize: "18px", fontWeight: "700" }}>Prompt and friendly responses</h4>
                  <p style={{ margin: "0", fontSize: "14px", color: "#555" }}>Average chat response time: under 30 seconds</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "30px" }}>
                <div style={{ fontSize: "48px", fontWeight: "900", color: "#00b050", lineHeight: "1" }}>96<span style={{ fontSize: "24px" }}>%</span></div>
                <div>
                  <h4 style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>Happiness Score</h4>
                  <p style={{ margin: "0", fontSize: "13px", color: "#555" }}>Based on 21,916 customer ratings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER SUCCESS STORIES */}
      <section style={{ padding: "80px 0", background: "#f3f8ff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "800", marginBottom: "40px", color: "#000" }}>
            Customer success stories from Jaipur & Rajasthan
          </h2>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>
    </>
  );
}
