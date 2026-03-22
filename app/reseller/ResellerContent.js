"use client";
import VpFaqList from "@/components/VpFaqList";

const faqData = [
  { q: "What is Reseller Hosting and how does it work?", a: "Reseller hosting lets you buy server resources in bulk from SkyServer and resell them to your own clients as branded hosting plans. You manage all accounts through WHM, each client gets cPanel access, and SkyServer handles all server maintenance, security, and hardware." },
  { q: "Can I use my own brand name and domain with reseller hosting?", a: "Yes, completely. SkyServer reseller hosting is 100% white-label. You configure your own nameservers (e.g., ns1.yourdomain.com), set your company name and logo inside WHM, and your clients will never see any reference to SkyServer. It is your brand entirely." },
  { q: "Do I need technical knowledge to manage reseller hosting?", a: "Basic computer skills and some familiarity with web hosting are helpful, but deep technical server knowledge is not required. WHM and cPanel are designed for non-technical users. SkyServer handles all server-level tasks — you only manage client accounts through the provided dashboard." },
  { q: "Is WHMCS included or available with reseller plans?", a: "WHMCS is available as an add-on with SkyServer reseller plans. It automates billing, invoicing, client registration, support tickets, and account provisioning. Once set up, your clients can sign up, pay, and get hosting access automatically — without any manual work from your side." },
  { q: "How many client accounts can I create?", a: "There is no hard limit on the number of accounts. You can create as many client accounts as your plan's total disk space and bandwidth allow. If you need more resources, simply upgrade your reseller plan and continue scaling your business." },
  { q: "Can I upgrade my reseller plan without losing client data?", a: "Yes. All SkyServer reseller plans are fully scalable. You can upgrade disk space, bandwidth, and account limits at any time from your client area. All existing client accounts, their files, databases, and email remain completely intact during the upgrade process." },
  { q: "What payment methods are accepted?", a: "We accept all major Indian payment methods — UPI (PhonePe, GPay, Paytm), debit and credit cards (Visa, Mastercard, RuPay), net banking, and digital wallets. All payments are in INR with no dollar conversion needed. There are no setup fees or hidden charges on any reseller plan." }
];

const features = [
  { bg: "#f0fdfa", stroke: "#0f766e", title: "WHM + cPanel Included", desc: "Full WebHost Manager access to create and manage all client accounts. Each client gets their own cPanel — industry standard, trusted worldwide." },
  { bg: "#ecfdf5", stroke: "#16a34a", title: "100% White Label Branding", desc: "Set your own company name, logo, and nameservers. Your clients will never see SkyServer — it is 100% your brand, your identity, your business." },
  { bg: "#eff6ff", stroke: "#2563eb", title: "NVMe SSD Storage", desc: "All reseller plans run on Gen4 NVMe SSDs — delivering blazing-fast load times for all your clients' websites hosted under your brand." },
  { bg: "#fff7ed", stroke: "#ea580c", title: "DDoS Protection on All Accounts", desc: "Every hosting account under your reseller plan is protected by built-in DDoS mitigation — keeping all your clients' sites online and secure." },
  { bg: "#f0fdf4", stroke: "#15803d", title: "Free SSL for All Client Sites", desc: "Every website hosted on your reseller account gets a free Let's Encrypt SSL certificate — auto-renewing, browser-trusted, zero extra cost." },
  { bg: "#fdf4ff", stroke: "#9333ea", title: "Sell at Your Own Price", desc: "You set your own pricing for client plans. Buy wholesale from SkyServer and sell at any markup — you keep 100% of the profit difference." },
  { bg: "#f0fdfa", stroke: "#0f766e", title: "WHMCS Compatible", desc: "Fully compatible with WHMCS for automated billing, invoicing, client management, and support tickets — run your hosting business on autopilot." },
  { bg: "#fff1f2", stroke: "#e11d48", title: "India Data Centers", desc: "Hosted in Mumbai and Delhi Tier-3 data centers. Your clients' websites load fast for Indian visitors — typically under 5ms latency." },
  { bg: "#fffbeb", stroke: "#d97706", title: "Unlimited Client Accounts", desc: "No cap on the number of accounts you can create. Host as many clients as your plan's disk space and bandwidth allow — scale freely." }
];

const steps = [
  { num: 1, title: "Choose a Reseller Plan", desc: "Pick the disk space and bandwidth that suits your expected number of clients. You can upgrade anytime as you grow." },
  { num: 2, title: "Set Your Brand", desc: "Configure your own nameservers, company name, and logo inside WHM. Your brand is front and center — SkyServer stays invisible." },
  { num: 3, title: "Create Client Packages", desc: "Design hosting packages with the resources you want — disk, bandwidth, email accounts — and set your own selling price per package." },
  { num: 4, title: "Sell and Profit", desc: "Add clients via WHM or WHMCS, collect payments at your price, and pocket the difference. SkyServer handles all server-level support." }
];

const useCases = [
  { bg: "#f0fdfa", stroke: "#0f766e", title: "Web Developers", desc: "Build sites for clients and host them all under your own brand. Add a monthly hosting fee on top of your development charges." },
  { bg: "#eff6ff", stroke: "#2563eb", title: "Web Design Agencies", desc: "Manage all client websites from a single WHM dashboard. Offer hosting as a value-added service and build a predictable monthly revenue." },
  { bg: "#fff7ed", stroke: "#ea580c", title: "Digital Marketing Agencies", desc: "Host client landing pages and websites yourself. Control performance, uptime, and security — deliver better results for your campaigns." },
  { bg: "#f5f3ff", stroke: "#7c3aed", title: "Entrepreneurs", desc: "Start a hosting company from scratch with zero server management. Resell branded hosting plans and build a scalable online business." },
  { bg: "#f0fdf4", stroke: "#16a34a", title: "IT Institutes & Trainers", desc: "Provide hosting to students and trainees under your institute brand. A professional finishing touch for every course you deliver." },
  { bg: "#fff1f2", stroke: "#e11d48", title: "Small Hosting Companies", desc: "Launch or expand a web hosting business without investing in physical servers. Let SkyServer be your silent infrastructure partner." }
];

const testimonials = [
  { text: "Started with 10 clients, now managing 80+ under my own brand. SkyServer's WHM is seamless and support has never let me down in 3 years.", initials: "AK", name: "Amit Kaur", role: "Web Design Agency Owner, Chandigarh" },
  { text: "The white-label setup was done in under an hour. My clients think I run my own data center — SkyServer's infrastructure does all the heavy lifting.", initials: "RN", name: "Rajan Nair", role: "Freelance Developer, Kochi" },
  { text: "NVMe speed means my clients' WordPress sites score 90+ on PageSpeed. That alone justifies the reseller hosting cost — clients are very happy.", initials: "SP", name: "Sneha Pillai", role: "WordPress Developer, Pune" },
  { text: "WHMCS integration was plug-and-play. Billing is fully automated now. I spend zero time on invoicing and my reseller business basically runs itself.", initials: "MR", name: "Mahesh Rao", role: "IT Services Provider, Hyderabad" },
  { text: "Best decision I made — adding hosting to my digital agency. SkyServer India servers mean fast sites for my Indian clients. Revenue up 40% this year.", initials: "DM", name: "Divya Menon", role: "Digital Marketing Agency, Bangalore" },
  { text: "Upgraded from shared to reseller hosting — now managing 35 student accounts for my IT training institute. Setup was simple and support is always available.", initials: "VT", name: "Vivek Tiwari", role: "IT Trainer, Indore" }
];

const whyItems = [
  { num: "01", title: "India-Based 24/7 Support", text: "Our engineers are in India and available round the clock. When your clients have issues, we resolve them fast — average response under 5 minutes." },
  { num: "02", title: "Transparent Pricing — No Hidden Fees", text: "No setup fees, no hidden charges. The price you see is what you pay every billing cycle — so your business margins stay predictable." },
  { num: "03", title: "99.9% Uptime SLA", text: "Backed by a written SLA. Tier-3 data centers in Mumbai and Delhi with redundant power, cooling, and 10Gbps network links keep everything up." },
  { num: "04", title: "Pay in INR — UPI, Cards, Net Banking", text: "No dollar conversion. Pay in rupees using UPI, debit/credit cards, or net banking. Designed for Indian resellers and businesses." },
  { num: "05", title: "Instant Account Provisioning", text: "New client accounts are live within 60 seconds of creation in WHM. No waiting, no manual setup — your clients get access immediately." },
  { num: "06", title: "Scalable as You Grow", text: "Start small and upgrade anytime. As your client base grows, simply move to a higher reseller plan — all data migrates with zero downtime." }
];

export default function ResellerContent() {
  return (
    <>
      {/* Stats Bar */}
      <div className="vp-stats">
        <div className="vp-stats-inner">
          <div className="vp-stat-item"><div className="vp-stat-num">99.<span>9%</span></div><div className="vp-stat-lbl">Uptime SLA Guaranteed</div></div>
          <div className="vp-stat-item"><div className="vp-stat-num">500<span>+</span></div><div className="vp-stat-lbl">Active Reseller Partners</div></div>
          <div className="vp-stat-item"><div className="vp-stat-num">24<span>/7</span></div><div className="vp-stat-lbl">Expert Support</div></div>
          <div className="vp-stat-item"><div className="vp-stat-num">100<span>%</span></div><div className="vp-stat-lbl">White Label Control</div></div>
        </div>
      </div>

      {/* Features */}
      <section className="vp-section" style={{ background: "#f8fafc" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">⚡ Everything Included</span>
            <h2 className="vp-h2">Everything You Need to <span>Run a Hosting Business</span></h2>
            <p className="vp-lead">SkyServer Reseller Hosting is built for web designers, developers, and agencies who want to sell hosting under their own brand — without managing servers.</p>
          </div>
          <div className="vp-features-grid">
            {features.map((f, i) => (
              <div key={i} className="vp-feat-card">
                <div className="vp-feat-icon" style={{ background: f.bg }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={f.stroke} strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /></svg>
                </div>
                <div className="vp-feat-title">{f.title}</div>
                <div className="vp-feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="vp-section" style={{ background: "#fff" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">⏱️ How It Works</span>
            <h2 className="vp-h2">Start Your Hosting Business in <span>4 Simple Steps</span></h2>
            <p className="vp-lead">No technical server knowledge needed. SkyServer handles all the infrastructure — you focus on growing your client base.</p>
          </div>
          <div className="vp-steps">
            {steps.map((s) => (
              <div key={s.num} className="vp-step-card">
                <div className="vp-step-num">{s.num}</div>
                <div className="vp-step-title">{s.title}</div>
                <div className="vp-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="vp-section" style={{ background: "#f8fafc" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">👥 Who Is It For</span>
            <h2 className="vp-h2">Perfect For <span>These Professionals</span></h2>
            <p className="vp-lead">Reseller hosting is ideal for anyone who builds or manages websites for others and wants to add a steady recurring income stream.</p>
          </div>
          <div className="vp-usecase-grid">
            {useCases.map((u, i) => (
              <div key={i} className="vp-usecase-card">
                <div className="vp-usecase-icon" style={{ background: u.bg }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={u.stroke} strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /></svg>
                </div>
                <div className="vp-usecase-title">{u.title}</div>
                <div className="vp-usecase-desc">{u.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <div className="vp-divider" />
      <section className="vp-section" style={{ background: "#fff" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 40 }}>
            <span className="vp-label">📊 Comparison</span>
            <h2 className="vp-h2">Reseller vs Shared vs <span>VPS Hosting</span></h2>
            <p className="vp-lead">Understand which hosting type is right for your needs — especially if you plan to host multiple client websites.</p>
          </div>
          <div className="vp-table-wrap">
            <table className="vp-compare-table">
              <thead><tr><th>Feature</th><th style={{ background: "#134e4a" }}>SkyServer Reseller</th><th>Shared Hosting</th><th>VPS Hosting</th></tr></thead>
              <tbody>
                <tr><td><strong>Manage Multiple Clients</strong></td><td className="col-sky hl"><span className="tick">✓</span> Yes — via WHM</td><td><span className="cross">✗</span> No</td><td><span className="cross">✗</span> Manual only</td></tr>
                <tr><td><strong>White Label / Own Brand</strong></td><td className="col-sky"><span className="tick">✓</span> Full white label</td><td><span className="cross">✗</span> No</td><td><span className="cross">✗</span> No</td></tr>
                <tr><td><strong>cPanel for Each Client</strong></td><td className="col-sky"><span className="tick">✓</span> Included</td><td>One account only</td><td>Manual setup</td></tr>
                <tr><td><strong>Storage Type</strong></td><td className="col-sky hl">NVMe SSD</td><td>SATA / Slow HDD</td><td>NVMe SSD</td></tr>
                <tr><td><strong>Free SSL for All Sites</strong></td><td className="col-sky"><span className="tick">✓</span> All accounts</td><td><span className="tick">✓</span> One site</td><td>Manual install</td></tr>
                <tr><td><strong>WHMCS Billing Support</strong></td><td className="col-sky"><span className="tick">✓</span> Compatible</td><td><span className="cross">✗</span> No</td><td>Self-managed</td></tr>
                <tr><td><strong>Custom Nameservers</strong></td><td className="col-sky"><span className="tick">✓</span> Yes</td><td><span className="cross">✗</span> No</td><td><span className="tick">✓</span> Yes</td></tr>
                <tr><td><strong>Price (Starting)</strong></td><td className="col-sky hl">₹399 / month</td><td>₹49 / month</td><td>₹299 / month</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why SkyServer */}
      <section className="vp-section" style={{ background: "#f8fafc" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">⭐ Why SkyServer</span>
            <h2 className="vp-h2">Why 500+ Resellers Choose <span>SkyServer</span></h2>
            <p className="vp-lead">We are not just a server provider — we are your silent backend partner, making sure your hosting business runs flawlessly.</p>
          </div>
          <div className="vp-why-grid">
            {whyItems.map((w) => (<div key={w.num} className="vp-why-item"><div className="vp-why-num">{w.num}</div><div><div className="vp-why-title">{w.title}</div><div className="vp-why-text">{w.text}</div></div></div>))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="vp-section" style={{ background: "#fff" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">💬 Reseller Reviews</span>
            <h2 className="vp-h2">What Our <span>Reseller Partners Say</span></h2>
            <p className="vp-lead">Real feedback from web designers, developers, and agencies running their hosting business on SkyServer.</p>
          </div>
          <div className="vp-testi-grid">
            {testimonials.map((t) => (
              <div key={t.initials} className="vp-testi-card">
                <div className="vp-stars">★★★★★</div>
                <div className="vp-testi-text">&ldquo;{t.text}&rdquo;</div>
                <div className="vp-testi-author">
                  <div className="vp-testi-avatar">{t.initials}</div>
                  <div><div className="vp-testi-name">{t.name}</div><div className="vp-testi-role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div style={{ background: "#f8fafc", padding: "32px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className="vp-trust-row">
            {["WHM + cPanel Included", "100% White Label", "Free SSL All Accounts", "DDoS Protected", "India Data Center", "Pay in INR / UPI", "NVMe SSD Speed", "24/7 Support"].map((b) => (
              <div key={b} className="vp-trust-badge">{b}</div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <section className="vp-section" style={{ background: "#fff" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">📖 Learn More</span>
            <h2 className="vp-h2">Understanding <span>Reseller Hosting in India</span></h2>
          </div>
          <div className="vp-seo-grid">
            <div className="vp-seo-card"><h3>What is Reseller Hosting?</h3><p>Reseller hosting allows you to purchase a bulk hosting package from SkyServer and divide it into smaller hosting plans to sell to your own clients. You get WHM (WebHost Manager) to manage all client accounts, and each client receives their own cPanel login. Your clients never see SkyServer — everything operates under your brand with your own company name, logo, and nameservers.</p></div>
            <div className="vp-seo-card"><h3>How Much Can You Earn from Reseller Hosting?</h3><p>Earnings depend on how many clients you onboard and your pricing strategy. If SkyServer charges you ₹399/month for a reseller plan and you host 20 clients at ₹150/month each, you earn ₹3,000/month — a profit of ₹2,601/month from a single plan. As you grow to 50, 100, or 200 clients, revenue scales proportionally.</p></div>
            <div className="vp-seo-card"><h3>What is WHM and Why Do You Need It?</h3><p>WHM (WebHost Manager) is the reseller&apos;s control panel that sits above cPanel. It lets you create, manage, suspend, and delete hosting accounts for all your clients from a single dashboard. You can set resource limits per account, create custom hosting packages, configure nameservers, view server resource usage, and manage SSL certificates.</p></div>
            <div className="vp-seo-card"><h3>Reseller Hosting vs Starting a VPS Business</h3><p>A VPS gives you a single server environment — ideal for one business or one technical user. Reseller hosting is purpose-built for selling to multiple clients. With reseller hosting, WHM handles all multi-account management automatically. For anyone building a hosting business with 5–500 clients, reseller hosting is far easier and more cost-effective than managing a VPS.</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vp-section" style={{ background: "#f8fafc" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">❓ FAQ</span>
            <h2 className="vp-h2">Frequently Asked <span>Questions</span></h2>
            <p className="vp-lead">Everything you need to know before starting your reseller hosting business with SkyServer.</p>
          </div>
          <VpFaqList items={faqData} />
        </div>
      </section>

      {/* CTA */}
      <section className="vp-cta-section">
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 className="vp-cta-h">Ready to Start Your Hosting Business?</h2>
          <p className="vp-cta-sub">Join 500+ reseller partners already running their hosting brand on SkyServer. Start earning recurring revenue today — starting at just ₹399/month.</p>
          <div className="vp-cta-btns">
            <a href="https://skyserver.in/order" className="vp-btn vp-btn-primary">⚡ Start Reselling Now</a>
            <a href="tel:+917509683151" className="vp-btn vp-btn-white">📞 Talk to an Expert</a>
          </div>
          <p className="vp-cta-note">No setup fee &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; Instant deployment</p>
        </div>
      </section>
    </>
  );
}
