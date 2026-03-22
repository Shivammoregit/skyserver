"use client";
import VpFaqList from "@/components/VpFaqList";

const faqData = [
  { q: "What is Windows RDP and what can I use it for?", a: "Windows RDP is a dedicated Windows server you access remotely over the internet. You can use it to run software 24/7 (trading bots, automation scripts, SEO tools), as a shared team workspace, for software development, data processing, or simply as a powerful remote Windows PC accessible from anywhere in the world." },
  { q: "Do I get full administrator access with SkyServer RDP?", a: "Yes. Every SkyServer Windows RDP plan includes full administrator (admin) access. You have complete control to install any software, modify system settings, configure Windows Firewall, and manage the server exactly as you would manage a physical Windows PC or laptop." },
  { q: "How do I connect to my Windows RDP server?", a: 'On Windows, open the built-in Remote Desktop Connection app (search for "mstsc"). On Mac, download the free Microsoft Remote Desktop app from the App Store. On Android or iOS, use the Microsoft Remote Desktop app. Enter your server IP, username, and password — and you are connected instantly.' },
  { q: "Will my software keep running when I disconnect from RDP?", a: "Yes. When you disconnect from an RDP session (close the window without logging off), your server session remains active. All running software, scripts, and processes continue running uninterrupted — 24 hours a day, 7 days a week." },
  { q: "Which Windows version is installed on RDP servers?", a: "SkyServer RDP servers run Windows Server 2019 or Windows Server 2022 — both include the standard Windows desktop interface and full RDP functionality. These are enterprise-grade OS versions from Microsoft, optimized for server workloads." },
  { q: "Can I upgrade my RDP plan if I need more resources?", a: "Yes. All SkyServer RDP plans are fully scalable. You can upgrade your CPU cores, RAM, and NVMe SSD storage anytime from your client dashboard. In most cases upgrades are completed without any downtime." },
  { q: "What payment methods are accepted?", a: "We accept all major Indian payment methods — UPI (PhonePe, GPay, Paytm), debit and credit cards (Visa, Mastercard, RuPay), net banking, and digital wallets. All payments are processed in INR with no dollar conversion or international transaction fees." }
];

const features = [
  { bg: "#f5f3ff", stroke: "#7c3aed", title: "Full Administrator Access", desc: "Every plan includes full admin rights. Install any software, change system settings, configure firewall rules — complete Windows control." },
  { bg: "#eff6ff", stroke: "#2563eb", title: "Gen4 NVMe SSD Storage", desc: "Up to 20x faster than traditional SATA SSDs. Applications launch instantly, files transfer at maximum speed — no bottlenecks, ever." },
  { bg: "#ecfdf5", stroke: "#16a34a", title: "Dedicated CPU & RAM", desc: "Resources are exclusively yours — never shared with other users. Your RDP performs consistently whether it is 2 AM or 2 PM." },
  { bg: "#fff7ed", stroke: "#ea580c", title: "DDoS Protection Included", desc: "Built-in DDoS mitigation keeps your RDP server online and your Remote Desktop connection stable — even during active attacks." },
  { bg: "#fff1f2", stroke: "#e11d48", title: "India Data Center", desc: "Mumbai and Delhi Tier-3 data centers give Indian users ultra-low latency RDP connections — smooth, lag-free remote desktop sessions." },
  { bg: "#f5f3ff", stroke: "#7c3aed", title: "Runs 24/7 Uninterrupted", desc: "Your server stays on around the clock. Bots, scripts, and applications keep running even after you close your RDP connection." },
  { bg: "#fffbeb", stroke: "#d97706", title: "Connect from Any Device", desc: "Access your Windows RDP from any Windows PC, Mac, iPhone, Android, or tablet using the official Microsoft Remote Desktop app." },
  { bg: "#ecfdf5", stroke: "#16a34a", title: "Instant Activation — 60 Seconds", desc: "Your RDP server is provisioned and credentials delivered within 60 seconds of payment. No waiting, no manual setup required." },
  { bg: "#eff6ff", stroke: "#2563eb", title: "Dedicated IP Address", desc: "Each RDP plan includes a dedicated static IPv4 address — essential for consistent remote desktop access, whitelisting, and app configurations." }
];

const steps = [
  { num: 1, title: "Order Your Plan", desc: "Choose the RDP plan that matches your CPU, RAM, and storage needs. Pay in INR via UPI, card, or net banking." },
  { num: 2, title: "Receive Credentials", desc: "Within 60 seconds you receive your server IP address, username, and password via email and your client dashboard." },
  { num: 3, title: "Open Remote Desktop", desc: "Open the built-in Remote Desktop Connection app on Windows (search mstsc) or download Microsoft Remote Desktop on Mac, iOS, or Android." },
  { num: 4, title: "Enter IP and Connect", desc: "Type your server IP, enter your username and password, and you are connected. Your full Windows desktop is ready to use instantly." }
];

const useCases = [
  { bg: "#f5f3ff", stroke: "#7c3aed", title: "Forex & Stock Trading", desc: "Run MetaTrader 4/5, trading bots, and automated strategies 24/7 without keeping your personal PC on." },
  { bg: "#eff6ff", stroke: "#2563eb", title: "Software Development", desc: "Run heavy IDEs, compilers, and build tools on a powerful dedicated Windows server. Share access with your team." },
  { bg: "#fff7ed", stroke: "#ea580c", title: "SEO & Digital Marketing", desc: "Run SEO tools, scrapers, rank trackers, and automation scripts continuously on a dedicated Windows environment." },
  { bg: "#ecfdf5", stroke: "#16a34a", title: "Data Processing & Analytics", desc: "Run Excel macros, Power BI reports, ETL pipelines, and large data processing jobs on dedicated hardware." },
  { bg: "#fff1f2", stroke: "#e11d48", title: "Remote Work & Teams", desc: "Set up a shared Windows workspace for remote teams. Everyone accesses the same environment from anywhere." },
  { bg: "#fffbeb", stroke: "#d97706", title: "Automation & Bots", desc: "Run WhatsApp bots, social media automation, web scrapers, and scheduled tasks 24/7 on a stable dedicated Windows environment." }
];

const testimonials = [
  { text: "Running MetaTrader 5 on SkyServer RDP for 8 months. Zero downtime, ultra-low latency from Mumbai server. My EAs execute orders faster than ever.", initials: "VK", name: "Varun Khanna", role: "Forex Trader, Mumbai" },
  { text: "Switched from a US-based RDP to SkyServer India. The difference in response speed is night and day. Support resolved my issue in under 3 minutes.", initials: "PT", name: "Prashant Tewari", role: "SEO Agency Owner, Delhi" },
  { text: "Using SkyServer RDP as a shared team workspace for my 5-member dev team. NVMe speed means builds complete in seconds. Highly recommend.", initials: "AS", name: "Ankur Srivastava", role: "Software Team Lead, Hyderabad" },
  { text: "Running multiple WhatsApp automation bots 24/7. Server never goes down. INR billing via UPI makes it so convenient compared to foreign providers.", initials: "NK", name: "Nitin Kumar", role: "Marketing Automation, Jaipur" },
  { text: "Used shared RDP for a year — unstable and slow. Moved to SkyServer dedicated RDP and the difference is massive. Worth every rupee for serious work.", initials: "RM", name: "Rahul Mishra", role: "Data Analyst, Bangalore" },
  { text: "Our entire remote team works from SkyServer RDP. No VPN headache, same Windows environment for everyone, fast file sharing. Perfect for remote-first teams.", initials: "SD", name: "Sneha Desai", role: "Operations Manager, Pune" }
];

const whyItems = [
  { num: "01", title: "India-Based 24/7 Support", text: "Our engineers are in India and available round the clock. Connection issues, software problems, or any query — resolved in under 5 minutes on average." },
  { num: "02", title: "99.9% Uptime — Written SLA", text: "Backed by a written uptime guarantee. Tier-3 data centers with redundant power and network ensure your RDP server is always reachable." },
  { num: "03", title: "Truly Dedicated Resources", text: "Unlike shared RDP where 20 users fight for the same CPU and RAM, your SkyServer RDP has fully dedicated hardware — consistent performance, always." },
  { num: "04", title: "Pay in INR — UPI, Cards, Net Banking", text: "No international payment hassle. Pay in rupees via UPI, debit/credit cards, or net banking. Transparent pricing with no hidden charges." },
  { num: "05", title: "Low Latency for Indian Users", text: "Mumbai and Delhi data centers mean under 5ms ping for most Indian users. Smooth, lag-free remote desktop experience — critical for trading and automation." },
  { num: "06", title: "Instant Scalability", text: "Need more CPU or RAM? Upgrade your RDP plan anytime from your client panel without any downtime or reinstallation of your software." }
];

export default function RdpContent() {
  return (
    <>
      {/* Stats Bar */}
      <div className="vp-stats">
        <div className="vp-stats-inner">
          <div className="vp-stat-item"><div className="vp-stat-num">99.<span>9%</span></div><div className="vp-stat-lbl">Uptime SLA Guaranteed</div></div>
          <div className="vp-stat-item"><div className="vp-stat-num">60<span>sec</span></div><div className="vp-stat-lbl">Instant Activation</div></div>
          <div className="vp-stat-item"><div className="vp-stat-num">24<span>/7</span></div><div className="vp-stat-lbl">Expert Support</div></div>
          <div className="vp-stat-item"><div className="vp-stat-num">100<span>%</span></div><div className="vp-stat-lbl">Admin Access</div></div>
        </div>
      </div>

      {/* Features */}
      <section className="vp-section" style={{ background: "#f8fafc" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">⚡ Why SkyServer RDP</span>
            <h2 className="vp-h2">Everything Included in Your <span>Windows RDP Server</span></h2>
            <p className="vp-lead">Enterprise-grade Windows Remote Desktop servers with dedicated resources, India data center, and zero compromise on speed or security.</p>
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

      {/* How to Connect */}
      <section className="vp-section" style={{ background: "#fff" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">⏱️ How to Connect</span>
            <h2 className="vp-h2">Connect to Your RDP Server in <span>4 Simple Steps</span></h2>
            <p className="vp-lead">No technical knowledge needed. If you can use a Windows PC, you can connect to your RDP server in under 2 minutes.</p>
          </div>
          <div className="vp-steps">
            {steps.map((s) => (<div key={s.num} className="vp-step-card"><div className="vp-step-num">{s.num}</div><div className="vp-step-title">{s.title}</div><div className="vp-step-desc">{s.desc}</div></div>))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="vp-section" style={{ background: "#f8fafc" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">👥 Use Cases</span>
            <h2 className="vp-h2">Who Uses <span>Windows RDP Servers?</span></h2>
            <p className="vp-lead">SkyServer RDP is trusted by traders, developers, businesses, and power users across India for these high-demand tasks.</p>
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
            <h2 className="vp-h2">SkyServer RDP vs <span>Shared RDP vs Cloud PC</span></h2>
            <p className="vp-lead">Not all RDP solutions are equal. See why dedicated RDP from SkyServer outperforms shared and cloud alternatives.</p>
          </div>
          <div className="vp-table-wrap">
            <table className="vp-compare-table">
              <thead><tr><th>Feature</th><th style={{ background: "#4c1d95" }}>SkyServer Windows RDP</th><th>Shared RDP</th><th>Cloud PC (Azure/AWS)</th></tr></thead>
              <tbody>
                <tr><td><strong>Resources</strong></td><td className="col-sky hl">Dedicated CPU &amp; RAM</td><td>Shared with others</td><td>Dedicated (costly)</td></tr>
                <tr><td><strong>Admin Access</strong></td><td className="col-sky"><span className="tick">✓</span> Full Admin</td><td><span className="cross">✗</span> Limited or none</td><td><span className="tick">✓</span> Full Admin</td></tr>
                <tr><td><strong>Storage</strong></td><td className="col-sky hl">Gen4 NVMe SSD</td><td>HDD / Slow SSD</td><td>Standard SSD</td></tr>
                <tr><td><strong>Performance</strong></td><td className="col-sky hl">Consistent &amp; Fast</td><td>Unstable — varies</td><td>Good but expensive</td></tr>
                <tr><td><strong>India Data Center</strong></td><td className="col-sky"><span className="tick">✓</span> Mumbai / Delhi</td><td>Usually US / EU</td><td><span className="tick">✓</span> Available</td></tr>
                <tr><td><strong>DDoS Protection</strong></td><td className="col-sky"><span className="tick">✓</span> Included</td><td>Rarely included</td><td>Extra cost</td></tr>
                <tr><td><strong>24/7 Support</strong></td><td className="col-sky"><span className="tick">✓</span> India-based</td><td>Ticket only / slow</td><td>Automated / slow</td></tr>
                <tr><td><strong>Price (Starting)</strong></td><td className="col-sky hl">₹299 / month</td><td>₹99 / month</td><td>₹2,500+ / month</td></tr>
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
            <h2 className="vp-h2">Why Choose <span>SkyServer RDP</span></h2>
            <p className="vp-lead">We deliver what others promise. Fast, stable, India-based Windows RDP with real human support — not just automated ticket systems.</p>
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
            <span className="vp-label">💬 Customer Reviews</span>
            <h2 className="vp-h2">What Our <span>RDP Customers Say</span></h2>
            <p className="vp-lead">Real feedback from traders, developers, and businesses running their operations on SkyServer Windows RDP every day.</p>
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
            {["Full Admin Access", "Gen4 NVMe SSD", "DDoS Protected", "India Data Center", "Runs 24/7", "Pay in INR / UPI", "60-sec Activation", "24/7 Support"].map((b) => (
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
            <h2 className="vp-h2">Understanding <span>Windows RDP Hosting in India</span></h2>
          </div>
          <div className="vp-seo-grid">
            <div className="vp-seo-card"><h3>What is Windows RDP and How Does It Work?</h3><p>Windows RDP (Remote Desktop Protocol) is a built-in Microsoft technology that allows you to connect to and control a remote Windows server over the internet. When you purchase a SkyServer Windows RDP plan, you get a dedicated Windows server in our India data center. You connect via the Remote Desktop app from any device, and the full Windows desktop appears on your screen.</p></div>
            <div className="vp-seo-card"><h3>RDP vs VPS — What is the Difference?</h3><p>Windows RDP and Windows VPS refer to the same underlying technology — a virtual Windows server you access remotely. The term &ldquo;RDP&rdquo; emphasizes the connection method, while &ldquo;VPS&rdquo; emphasizes the virtualization. SkyServer Windows RDP plans include full administrator access, dedicated vCPU and RAM, NVMe SSD storage, a static IPv4 address, and 24/7 server availability.</p></div>
            <div className="vp-seo-card"><h3>Why Buy RDP from India Instead of Abroad?</h3><p>Most cheap RDP providers host servers in the US or Europe — resulting in 150–300ms latency for Indian users. SkyServer&apos;s Mumbai and Delhi data centers deliver under 5ms latency for Indian users, meaning your Remote Desktop session is smooth and responsive. Additionally, paying in INR via UPI or cards eliminates currency conversion charges.</p></div>
            <div className="vp-seo-card"><h3>Is Windows RDP Safe and Secure?</h3><p>SkyServer Windows RDP includes multiple security layers: network-level DDoS protection, a dedicated IP address, and isolated virtual hardware. You should additionally enable Windows Firewall, change the default RDP port, use strong passwords, and optionally restrict access by IP.</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vp-section" style={{ background: "#f8fafc" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">❓ FAQ</span>
            <h2 className="vp-h2">Frequently Asked <span>Questions</span></h2>
            <p className="vp-lead">Everything you need to know about SkyServer Windows RDP hosting before you buy.</p>
          </div>
          <VpFaqList items={faqData} />
        </div>
      </section>

      {/* CTA */}
      <section className="vp-cta-section">
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 className="vp-cta-h">Ready to Get Your Windows RDP Server?</h2>
          <p className="vp-cta-sub">Join thousands of traders, developers, and businesses running on SkyServer RDP. Activate your dedicated Windows server in 60 seconds — starting at just ₹299/month.</p>
          <div className="vp-cta-btns">
            <a href="https://skyserver.in/order" className="vp-btn vp-btn-primary">⚡ Get RDP Now</a>
            <a href="tel:+917509683151" className="vp-btn vp-btn-white">📞 Talk to an Expert</a>
          </div>
          <p className="vp-cta-note">No setup fee &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; 60-second activation</p>
        </div>
      </section>
    </>
  );
}
