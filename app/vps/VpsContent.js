"use client";
import VpFaqList from "@/components/VpFaqList";

const faqData = [
  { q: "What is VPS Hosting and how is it different from shared hosting?", a: "VPS hosting gives you dedicated CPU, RAM, and NVMe SSD storage that is never shared with others. Unlike shared hosting where hundreds of sites compete for the same resources, your VPS resources are guaranteed 100% of the time. You also get full root access, custom OS installation, and the ability to install any software — none of which shared hosting allows." },
  { q: "How fast can I deploy my VPS after ordering?", a: "Your VPS is deployed automatically within 60 seconds of payment confirmation. You will receive your server IP, root credentials, and control panel access instantly via email. No waiting for manual provisioning — everything is fully automated on SkyServer's platform." },
  { q: "Can I upgrade my VPS plan later without losing data?", a: "Absolutely. SkyServer VPS plans are fully scalable. You can upgrade your CPU cores, RAM, and SSD storage anytime directly from your client area. In most cases, upgrades happen without any downtime. Your data, configurations, and installed software remain completely intact throughout the upgrade process." },
  { q: "Which Linux distributions and operating systems are available?", a: "SkyServer supports CentOS 7/Stream, Ubuntu 20.04/22.04, Debian 10/11/12, Fedora 38/39, openSUSE Leap 15, Rocky Linux 8/9, and Windows Server 2019/2022. You can select your preferred OS during checkout. Our team can also reinstall a different OS anytime on request at no extra charge." },
  { q: "Do you offer managed VPS hosting?", a: "Yes. SkyServer offers both managed and unmanaged VPS options. Managed plans include server setup, initial security hardening, control panel installation, OS patching, and 24/7 technical support for server-level issues. This is ideal for businesses that want high performance without the system administration overhead." },
  { q: "Is DDoS protection included on all VPS plans?", a: "Yes, DDoS protection is included on all VPS plans at no extra cost. Our protection covers volumetric attacks such as UDP floods and SYN floods, as well as application-layer attacks. Our network-level mitigation activates automatically within seconds of detecting abnormal traffic, keeping your server online and stable." },
  { q: "What payment methods are accepted?", a: "We accept all major Indian payment methods including UPI (PhonePe, GPay, Paytm), debit and credit cards (Visa, Mastercard, RuPay), net banking, and popular digital wallets. All payments are processed in INR — no dollar conversion needed. There are no hidden fees or setup charges on any plan." },
  { q: "Where are SkyServer data centers located?", a: "SkyServer operates Tier-3 data centers in Mumbai and Delhi — the two major internet hubs of India. This gives your Indian visitors ultra-low latency, faster page loads, and better SEO rankings for India-targeted websites. Both facilities have redundant power, cooling systems, and 10Gbps network uplinks for maximum reliability." }
];

const features = [
  { bg: "#eff6ff", stroke: "#2563eb", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", title: "Gen4 NVMe SSD Storage", desc: "Up to 20x faster than SATA SSDs. Ultra-low I/O latency keeps your databases, apps, and files blazing fast at all times." },
  { bg: "#ecfdf5", stroke: "#16a34a", icon: "M7 11V7a5 5 0 0 1 10 0v4", rect: { x: 3, y: 11, w: 18, h: 11 }, title: "Full Root / Admin Access", desc: "Complete control over your server. Install any software, configure firewall rules, and manage everything at OS level." },
  { bg: "#fff7ed", stroke: "#ea580c", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "DDoS Protection Included", desc: "Built-in DDoS mitigation on all plans. Your server stays online and responsive even during large-scale volumetric attacks." },
  { bg: "#fdf4ff", stroke: "#9333ea", icon: null, polylines: ["23 6 13.5 15.5 8.5 10.5 1 18", "17 6 23 6 23 12"], title: "Instant Vertical Scaling", desc: "Upgrade RAM, CPU, or storage anytime from your control panel — no downtime, no data migration, no hassle." },
  { bg: "#f0fdf4", stroke: "#15803d", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", polylines: ["9 12 11 14 15 10"], title: "Free SSL Certificate", desc: "Every VPS includes free Let's Encrypt SSL. Auto-renewing, browser-trusted, installs in one click via your control panel." },
  { bg: "#fff1f2", stroke: "#e11d48", title: "India Data Centers", desc: "Hosted in Mumbai and Delhi Tier-3 data centers. Ultra-low latency for Indian traffic — typically under 5ms ping." },
  { bg: "#eff6ff", stroke: "#2563eb", title: "Automated VPS Recovery", desc: "Our system detects failures and automatically restores your VPS — often before you even notice. Zero manual intervention required." },
  { bg: "#ecfdf5", stroke: "#16a34a", title: "KVM Virtualization", desc: "True KVM-based hardware isolation — dedicated resources never shared with neighbors. Your CPU and RAM, exclusively yours." },
  { bg: "#fffbeb", stroke: "#d97706", title: "Dedicated IPv4 + IPv6", desc: "Each VPS includes a dedicated IPv4 address and IPv6 support out of the box. Additional IPs available on request." }
];

const testimonials = [
  { text: "Migrated from shared hosting to SkyServer VPS and my site load time went from 4.2s to 0.8s. The NVMe difference is real. Setup took under 5 minutes.", initials: "RK", name: "Rahul Kumar", role: "WordPress Developer, Pune" },
  { text: "Running 12 client sites on a single SkyServer VPS with cPanel. The auto-recovery feature saved us twice already. Support replies in minutes, not hours.", initials: "PS", name: "Priya Sharma", role: "Agency Owner, Mumbai" },
  { text: "Best VPS hosting for Indian traffic. Low latency, UPI payment support — everything an Indian startup needs. Been with them for 2 years straight.", initials: "AV", name: "Arjun Verma", role: "SaaS Founder, Bangalore" },
  { text: "I host trading bots and APIs here. Uptime is rock solid. The DDoS protection handled a large attack without a single packet drop. Very impressive.", initials: "MJ", name: "Manish Joshi", role: "Algo Trader, Delhi" },
  { text: "Switched from AWS India to SkyServer — same performance at 60% less cost. The support team helped migrate everything in one evening. Highly recommend.", initials: "NK", name: "Neha Kapoor", role: "CTO, E-commerce Startup, Hyderabad" },
  { text: "Hosting game servers for 500+ players with zero lag. SkyServer Mumbai gives players under 5ms ping. Best value VPS in India, period.", initials: "SR", name: "Siddharth Rao", role: "Game Server Admin, Chennai" }
];

const whyItems = [
  { num: "01", title: "India-Based Support Team", text: "Our support engineers are based in India and available 24/7 via chat, ticket, and phone. Average first response under 5 minutes." },
  { num: "02", title: "Transparent Pricing — No Hidden Fees", text: "What you see is what you pay. No setup fees, no renewal surprises, no resource throttling. Ever." },
  { num: "03", title: "99.9% Uptime SLA", text: "Backed by a written uptime guarantee. Our Tier-3 data centers in Mumbai and Delhi ensure maximum redundancy and availability." },
  { num: "04", title: "Pay in INR — UPI, Cards, Net Banking", text: "No dollar conversion needed. Pay in rupees via UPI, debit/credit cards, or net banking — whichever suits you best." },
  { num: "05", title: "Automatic VPS Recovery", text: "Our proprietary auto-recovery system detects server failures and automatically restores your VPS — often before you even notice." },
  { num: "06", title: "Instant Provisioning in 60 Seconds", text: "Your VPS is deployed and ready to use within 60 seconds of payment confirmation. No waiting, no manual setup, fully automated." }
];

const osCards = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg", name: "CentOS", ver: "7 / Stream" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg", name: "Ubuntu", ver: "20.04 / 22.04" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg", name: "Debian", ver: "10 / 11 / 12" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg", name: "Fedora", ver: "38 / 39" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opensuse/opensuse-original.svg", name: "openSUSE", ver: "Leap 15" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rockylinux/rockylinux-original.svg", name: "Rocky Linux", ver: "8 / 9" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg", name: "Windows", ver: "2019 / 2022" }
];

export default function VpsContent() {
  return (
    <>
      {/* Stats Bar */}
      <div className="vp-stats">
        <div className="vp-stats-inner">
          <div className="vp-stat-item"><div className="vp-stat-num">99.<span>9%</span></div><div className="vp-stat-lbl">Uptime SLA Guaranteed</div></div>
          <div className="vp-stat-item"><div className="vp-stat-num">10<span>Gbps</span></div><div className="vp-stat-lbl">Network Uplink Speed</div></div>
          <div className="vp-stat-item"><div className="vp-stat-num">24<span>/7</span></div><div className="vp-stat-lbl">Expert Support</div></div>
          <div className="vp-stat-item"><div className="vp-stat-num">60<span>sec</span></div><div className="vp-stat-lbl">VPS Deploy Time</div></div>
        </div>
      </div>

      {/* Features */}
      <section className="vp-section" style={{ background: "#f8fafc" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">⚡ Why SkyServer VPS</span>
            <h2 className="vp-h2">Everything You Need in a <span>VPS Server</span></h2>
            <p className="vp-lead">Enterprise-grade infrastructure at startup-friendly prices. Built for developers, agencies, and businesses that demand speed and reliability.</p>
          </div>
          <div className="vp-features-grid">
            {features.map((f, i) => (
              <div key={i} className="vp-feat-card">
                <div className="vp-feat-icon" style={{ background: f.bg }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={f.stroke} strokeWidth="2">
                    {f.icon && <path d={f.icon} />}
                    {f.rect && <rect x={f.rect.x} y={f.rect.y} width={f.rect.w} height={f.rect.h} rx="2" />}
                    {f.polylines?.map((p, j) => <polyline key={j} points={p} />)}
                  </svg>
                </div>
                <div className="vp-feat-title">{f.title}</div>
                <div className="vp-feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control Panels + Banner */}
      <section className="vp-section" style={{ background: "#fff" }}>
        <div className="vp-wrap">
          <div className="vp-two-col">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/vps-recovery.png" alt="SkyServer VPS Auto-Recovery" className="vp-banner-img" loading="eager" />
            </div>
            <div>
              <span className="vp-label">🖥️ Control Panels</span>
              <h2 className="vp-h2" style={{ fontSize: "clamp(22px,3vw,30px)" }}>Choose Your <span>Control Panel</span></h2>
              <p className="vp-lead" style={{ fontSize: 14, marginBottom: 24 }}>SkyServer supports all major control panels on Indian VPS. Pick what fits your team.</p>

              <div className="vp-panel-card">
                <div className="vp-panel-icon" style={{ background: "#f0f7ff" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/AaPanel_Logo.png" width={38} height={38} alt="aaPanel" loading="lazy" />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="vp-panel-name">aaPanel <span className="vp-badge badge-free">FREE</span></div>
                  <div className="vp-panel-desc">Lightweight open-source panel — 1-click LAMP/LEMP installs, file manager, FTP</div>
                  <div className="vp-panel-meta">Apache · Nginx · MySQL · PHP · SSL</div>
                </div>
              </div>

              <div className="vp-panel-card">
                <div className="vp-panel-icon" style={{ background: "#f0f9ff" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Logo_Plesk.svg/960px-Logo_Plesk.svg.png" width={38} height={38} alt="Plesk" loading="lazy" />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="vp-panel-name">Plesk <span className="vp-badge badge-paid">PAID</span></div>
                  <div className="vp-panel-desc">Industry-standard panel — Linux &amp; Windows support, WordPress toolkit included</div>
                  <div className="vp-panel-meta">Linux · Windows · Multi-server · Docker</div>
                </div>
              </div>

              <div className="vp-panel-card">
                <div className="vp-panel-icon" style={{ background: "#fff1f0" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.dreamlineit.com/wp-content/uploads/2018/08/cpanel-whm-logo.png" width={38} height={38} alt="cPanel & WHM" loading="lazy" />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="vp-panel-name">cPanel &amp; WHM <span className="vp-badge badge-pop">POPULAR</span></div>
                  <div className="vp-panel-desc">World&apos;s #1 hosting panel — WHM reseller access, Softaculous, Email management</div>
                  <div className="vp-panel-meta">Linux · Reseller-ready · Softaculous · Email</div>
                </div>
              </div>

              <div className="vp-panel-card">
                <div className="vp-panel-icon" style={{ background: "#f5f0ff" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://cdn-icons-png.flaticon.com/512/2777/2777083.png" width={38} height={38} alt="More panels" loading="lazy" />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="vp-panel-name">More Panels <span className="vp-badge badge-req">ON REQUEST</span></div>
                  <div className="vp-panel-desc">DirectAdmin, Webmin, ISPConfig, CyberPanel &amp; more — contact our support team</div>
                  <div className="vp-panel-meta">Available on all plans · Free installation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Systems */}
      <div className="vp-divider" />
      <section className="vp-section" style={{ background: "#f8fafc" }}>
        <div className="vp-wrap vp-center">
          <span className="vp-label">🖥️ OS Options</span>
          <h2 className="vp-h2">Choice of <span>Operating System</span></h2>
          <p className="vp-lead">Deploy with any popular Linux distro or Windows Server. Full root access on every OS — your server, your rules.</p>
          <div className="vp-os-grid">
            {osCards.map((os) => (
              <div key={os.name} className="vp-os-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={os.src} width={42} height={42} alt={os.name} loading="lazy" />
                <div className="vp-os-name">{os.name}</div>
                <div className="vp-os-ver">{os.ver}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="vp-section" style={{ background: "#fff" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 40 }}>
            <span className="vp-label">📊 Comparison</span>
            <h2 className="vp-h2">VPS vs Shared vs <span>Dedicated Server</span></h2>
            <p className="vp-lead">See why VPS is the smartest choice for growing businesses — the perfect balance of performance and price.</p>
          </div>
          <div className="vp-table-wrap">
            <table className="vp-compare-table">
              <thead><tr>
                <th>Feature</th>
                <th style={{ background: "#1e3a8a" }}>SkyServer VPS</th>
                <th>Shared Hosting</th>
                <th>Dedicated Server</th>
              </tr></thead>
              <tbody>
                <tr><td><strong>Resources</strong></td><td className="col-sky hl">Dedicated vCPU &amp; RAM</td><td>Shared with 100s of users</td><td>Full server dedicated</td></tr>
                <tr><td><strong>Root Access</strong></td><td className="col-sky"><span className="tick">✓</span> Full Root</td><td><span className="cross">✗</span> No</td><td><span className="tick">✓</span> Full Root</td></tr>
                <tr><td><strong>Storage</strong></td><td className="col-sky hl">Gen4 NVMe SSD</td><td>SATA / Slow HDD</td><td>NVMe SSD</td></tr>
                <tr><td><strong>Performance</strong></td><td className="col-sky hl">Ultra Fast</td><td>Slow — shared I/O</td><td>Ultra Fast</td></tr>
                <tr><td><strong>Scalability</strong></td><td className="col-sky"><span className="tick">✓</span> Instant upgrade</td><td><span className="cross">✗</span> Very limited</td><td><span className="cross">✗</span> Hardware change needed</td></tr>
                <tr><td><strong>DDoS Protection</strong></td><td className="col-sky"><span className="tick">✓</span> Included</td><td>Basic only</td><td><span className="tick">✓</span> Included</td></tr>
                <tr><td><strong>Custom OS</strong></td><td className="col-sky"><span className="tick">✓</span> Yes</td><td><span className="cross">✗</span> No</td><td><span className="tick">✓</span> Yes</td></tr>
                <tr><td><strong>Price (Starting)</strong></td><td className="col-sky hl">₹299 / month</td><td>₹49 / month</td><td>₹8,000+ / month</td></tr>
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
            <h2 className="vp-h2">Trusted by <span>1,000+ Businesses</span> Across India</h2>
            <p className="vp-lead">We are not just another hosting company. Here is what makes SkyServer the most reliable VPS provider in India.</p>
          </div>
          <div className="vp-why-grid">
            {whyItems.map((w) => (
              <div key={w.num} className="vp-why-item">
                <div className="vp-why-num">{w.num}</div>
                <div>
                  <div className="vp-why-title">{w.title}</div>
                  <div className="vp-why-text">{w.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="vp-section" style={{ background: "#fff" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">💬 Customer Reviews</span>
            <h2 className="vp-h2">What Our <span>Customers Say</span></h2>
            <p className="vp-lead">Real feedback from real customers across India who rely on SkyServer VPS every single day.</p>
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
            {["DDoS Protected", "Free SSL Included", "India Data Center", "Pay in INR / UPI", "Daily Backups", "60-sec Deploy", "24/7 Support", "No Hidden Fees"].map((badge) => (
              <div key={badge} className="vp-trust-badge">{badge}</div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <section className="vp-section" style={{ background: "#fff" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">📖 Learn More</span>
            <h2 className="vp-h2">Everything About <span>VPS Hosting in India</span></h2>
          </div>
          <div className="vp-seo-grid">
            <div className="vp-seo-card"><h3>What is VPS Hosting?</h3><p>A Virtual Private Server (VPS) is a virtualized server that acts like a dedicated server within a larger physical machine. With VPS hosting, your resources — CPU cores, RAM, and NVMe SSD storage — are exclusively reserved for you. Unlike shared hosting, your neighbors&apos; traffic spikes will never affect your site. SkyServer uses KVM virtualization ensuring true hardware-level isolation for every customer.</p></div>
            <div className="vp-seo-card"><h3>Why Choose VPS Over Shared Hosting?</h3><p>Shared hosting puts hundreds of websites on a single server. If one site gets traffic spikes, yours slows down. VPS gives you guaranteed CPU, RAM, and storage. You get full root access to install any software, customize your server stack, and scale resources on demand. For any business that is serious about performance, uptime, and security — VPS is the only choice that makes sense.</p></div>
            <div className="vp-seo-card"><h3>NVMe SSD vs Regular SSD for VPS</h3><p>Traditional SATA SSDs max out at around 500 MB/s read speed. NVMe SSDs achieve 3,500–7,000 MB/s — up to 14x faster. For VPS workloads like databases, web applications, and file serving, faster storage means lower TTFB, faster query times, and better Google PageSpeed scores. All SkyServer VPS plans include Gen4 NVMe SSDs as a standard inclusion with zero extra charge.</p></div>
            <div className="vp-seo-card"><h3>Managed vs Unmanaged VPS — Which to Choose?</h3><p>An unmanaged VPS gives full root access but requires technical knowledge to setup, secure, and maintain. A managed VPS includes server setup, security hardening, OS updates, monitoring, and expert support — so you focus on your business. SkyServer offers both options. For growing businesses and beginners, managed VPS is strongly recommended.</p></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vp-section" style={{ background: "#f8fafc" }}>
        <div className="vp-wrap">
          <div className="vp-center" style={{ marginBottom: 44 }}>
            <span className="vp-label">❓ FAQ</span>
            <h2 className="vp-h2">Frequently Asked <span>Questions</span></h2>
            <p className="vp-lead">Got questions? We have answers. If you do not find what you are looking for, chat with our support team instantly.</p>
          </div>
          <VpFaqList items={faqData} />
        </div>
      </section>

      {/* CTA */}
      <section className="vp-cta-section">
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 className="vp-cta-h">Ready to Launch Your VPS?</h2>
          <p className="vp-cta-sub">Join 1,000+ businesses already hosting with SkyServer. Deploy your NVMe VPS in 60 seconds — starting at just ₹299/month.</p>
          <div className="vp-cta-btns">
            <a href="https://skyserver.in/order" className="vp-btn vp-btn-primary">⚡ Get Started Now</a>
            <a href="tel:+917509683151" className="vp-btn vp-btn-white">📞 Talk to an Expert</a>
          </div>
          <p className="vp-cta-note">No setup fee &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; Instant deployment</p>
        </div>
      </section>
    </>
  );
}
