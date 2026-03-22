"use client";

import Link from "next/link";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function CheapHostingContent() {
  const testimonials = [
    {
      text: <>SkyServer has ensured seamless website <strong>performance</strong> and consistent service <strong>stability</strong>.</>,
      name: "Jaydev Solanki"
    },
    {
      text: <>Their <strong>support team</strong> helped us migrate our website smoothly with <strong>zero downtime</strong>.</>,
      name: "Ankit Verma"
    },
    {
      text: <>With SkyServer, our website speed improved dramatically and customer experience became <strong>much better</strong>.</>,
      name: "Pooja Mehta"
    },
    {
      text: <>Reliable hosting, affordable pricing and <strong>24/7 support</strong> make SkyServer our long-term hosting partner.</>,
      name: "Rohit Sharma"
    }
  ];

  return (
    <>
      <link rel="stylesheet" href="/css/seo-landing.css" />

      {/* HERO SECTION */}
      <section className="seo-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="seo-hero-tag">Up to <strong>80% OFF</strong> Cheap Web Hosting India</span>
              <h1 className="seo-hero-title"><strong>Cheap Web Hosting in India</strong> with Fast & Secure cPanel Servers</h1>
              <ul className="seo-hero-features">
                <li>Launch your website in minutes</li>
                <li>Free SSL, email & daily backups</li>
                <li>24/7 expert support</li>
              </ul>
              <div className="seo-hero-price-box">
                <span className="seo-hero-price">₹49.00</span>
                <span className="seo-hero-per">/mo</span>
              </div>
              <p className="seo-hero-renew">Same Price at Renewal – Guaranteed</p>
              <div className="seo-hero-guarantee">
                <i className="fa fa-shield"></i> 7-day money-back guarantee
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="seo-hero-img">
                <img src="https://api.hdmedianetwork.in/sky_cdn/cheap-web-hosting-762x571.avif" alt="Cheap Web Hosting India" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="seo-content-area">
        <div className="container">
          <div className="seo-heading">
            <h2><strong>Cheap Web Hosting India</strong> for Blogs, Business & Startups</h2>
            <p>
              Affordable, reliable and performance-driven web hosting solutions
              designed for Indian websites.
            </p>
          </div>

          <div className="seo-content-grid">
            <div className="seo-content-text">
              <p>
                SkyServer offers <strong>cheap web hosting in India</strong>
                for bloggers, startups, developers and small businesses who want high
                performance at an affordable price. Our <Link href="/hosting" title="Web Hosting Plans">hosting plans</Link> are powered by
                <strong> LiteSpeed web servers</strong>, <strong>NVMe SSD storage</strong> and the industry-standard <strong>cPanel
                control panel</strong>.
              </p>

              <p>
                Unlike many low-cost hosting providers, SkyServer focuses on <strong>speed</strong>,
                <strong> uptime</strong> and real human support. With Indian infrastructure and <strong>24/7
                expert assistance</strong>, your website remains fast, secure and always online. Looking for <Link href="/wordpress" title="WordPress Hosting">WordPress hosting</Link> or <Link href="/cloud" title="Cloud Hosting">cloud hosting</Link>? We've got you covered.
              </p>
            </div>

            <div className="seo-features-card">
              <h3>Why Choose SkyServer?</h3>
              <ul>
                <li>
                  <span>✓</span>
                  <strong>LiteSpeed</strong> powered servers for ultra-fast loading
                </li>
                <li>
                  <span>✓</span>
                  Free <strong>SSL certificates</strong> & daily automated backups
                </li>
                <li>
                  <span>✓</span>
                  <strong>99.9% uptime</strong> guarantee with stable infrastructure
                </li>
                <li>
                  <span>✓</span>
                  Beginner-friendly <strong>cPanel</strong> with one-click installs
                </li>
                <li>
                  <span>✓</span>
                  <strong>Transparent pricing</strong> with no hidden charges
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS SECTION */}
      <section className="seo-links-section">
        <div className="container">
          <div className="seo-links-heading">
            <h2><strong>Explore More Hosting Solutions</strong></h2>
            <p>Discover our complete range of hosting services tailored for your business needs</p>
          </div>

          <div className="seo-links-grid">
            <div className="seo-link-card">
              <Link href="/wordpress" title="WordPress Hosting India">
                <span className="seo-link-icon"><i className="fa fa-wordpress"></i></span>
                <strong>WordPress Hosting</strong>
              </Link>
              <p>Optimized WordPress hosting with automatic updates and enhanced security</p>
            </div>

            <div className="seo-link-card">
              <Link href="/cloud" title="Cloud Hosting India">
                <span className="seo-link-icon"><i className="fa fa-cloud"></i></span>
                <strong>Cloud Hosting</strong>
              </Link>
              <p>Scalable cloud infrastructure with guaranteed resources and flexibility</p>
            </div>

            <div className="seo-link-card">
              <Link href="/vps" title="VPS Hosting India">
                <span className="seo-link-icon"><i className="fa fa-server"></i></span>
                <strong>VPS Hosting</strong>
              </Link>
              <p>Powerful VPS servers with full root access and dedicated resources</p>
            </div>

            <div className="seo-link-card">
              <Link href="/reseller" title="Reseller Hosting India">
                <span className="seo-link-icon"><i className="fa fa-briefcase"></i></span>
                <strong>Reseller Hosting</strong>
              </Link>
              <p>Start your own hosting business with white-label reseller plans</p>
            </div>

            <div className="seo-link-card">
              <Link href="/business" title="Business Hosting India">
                <span className="seo-link-icon"><i className="fa fa-building"></i></span>
                <strong>Business Hosting</strong>
              </Link>
              <p>Enterprise-grade hosting solutions for growing businesses</p>
            </div>

            <div className="seo-link-card">
              <Link href="/windows-rdp" title="Windows RDP India">
                <span className="seo-link-icon"><i className="fa fa-windows"></i></span>
                <strong>Windows RDP</strong>
              </Link>
              <p>Windows remote desktop with SSD storage and dedicated IP</p>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE COMPONENT REUSE IN CSS OR HERE */}
      <section className="seo-guarantee">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-5 col-sm-6 text-center mb-4 mb-md-0">
              <div className="seo-guarantee-badge">
                <div className="seo-guarantee-inner">
                  <div className="big">7 DAY</div>
                  <div className="small">MONEY-BACK<br/>GUARANTEE</div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-7 col-sm-12 seo-guarantee-content">
              <h2><strong>7-Day Money Back Guarantee</strong></h2>
              <p>
                Experience SkyServer with complete confidence.<br/>
                If we don't meet your expectations, simply request a refund within 
                <strong> 7 days</strong> — we'll process it promptly with 
                <strong> no questions asked</strong>. Check our <Link href="/refund">refund policy</Link> for more details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-support">
        <div className="container">
          <h2 className="text-center"><strong>Stress-free hosting</strong> and proactive customer support</h2>
          <p className="seo-support-sub text-center">We have an expert team of technical specialists to tackle all your queries with prompt assistance.</p>
          
          <div className="seo-support-grid">
            <div className="seo-support-img">
              <img src="https://api.hdmedianetwork.in/sky_cdn/stress-free.png" alt="Stress Free Hosting Support" />
            </div>
            
            <div className="seo-support-items">
              <div className="seo-support-item">
                <div className="seo-support-icon"><i className="fa fa-headphones"></i></div>
                <div>
                  <h4><strong>24/7 support</strong> in English & Hindi</h4>
                  <p>Live chat, email, and ticket assistance</p>
                </div>
              </div>
              
              <div className="seo-support-item">
                <div className="seo-support-icon"><i className="fa fa-comments"></i></div>
                <div>
                  <h4><strong>Prompt</strong> and friendly responses</h4>
                  <p>Average chat response time: under 30 seconds</p>
                </div>
              </div>
              
              <div className="seo-happiness">
                <div className="seo-happiness-num">96<span>%</span></div>
                <div className="seo-happiness-text">
                  <h4>Happiness Score</h4>
                  <p>Based on 21,916 customer ratings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-testimonials">
        <div className="container">
          <h2><strong>Customer success stories</strong></h2>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>
    </>
  );
}
