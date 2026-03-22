"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const domainLinks = [
  { href: "https://skyserver.in/client/cart.php?a=add&domain=register", label: "Register Domain", external: true },
  { href: "https://skyserver.in/client/order.php?domainaction=transfer", label: "Transfer Domain", external: true },
  { href: "/whois", label: "Domain WHOIS Lookup" }
];

const hostingLinks = [
  { href: "/cloud", label: "Cloud Hosting" },
  { href: "/hosting", label: "Shared Hosting" },
  { href: "/wordpress", label: "WordPress Hosting" },
  { href: "/business", label: "Business Hosting" },
  { href: "/custom", label: "Custom Hosting" }
];

function NavLink({ href, children, pathname, className = "", external = false, onNavigate }) {
  const isActive = href !== "/" ? pathname === href : pathname === "/";
  const combinedClassName = `${className} ${isActive ? "active" : ""}`.trim();

  if (external) {
    return (
      <a className={combinedClassName} href={href} onClick={onNavigate} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={combinedClassName} href={href} onClick={onNavigate}>
      {children}
    </Link>
  );
}

function DesktopDropdown({ label, links, openKey, onNavigate, setOpenKey }) {
  const isOpen = openKey === label;

  return (
    <div className={`ss-dd ${isOpen ? "open" : ""}`}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="ss-dd-toggle"
        onClick={() => setOpenKey(isOpen ? null : label)}
        type="button"
      >
        {label}
        <svg aria-hidden="true" height="12" viewBox="0 0 20 20" width="12">
          <path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
      </button>
      <div className="ss-dd-menu" role="menu">
        {links.map((link) =>
          link.external ? (
            <a href={link.href} key={link.href} onClick={onNavigate} rel="noreferrer" target="_blank">
              {link.label}
            </a>
          ) : (
            <Link href={link.href} key={link.href} onClick={onNavigate}>
              {link.label}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

function MobileDetails({ label, links, openKey, setOpenKey }) {
  const isOpen = openKey === label;

  return (
    <details onToggle={(event) => setOpenKey(event.currentTarget.open ? label : null)} open={isOpen}>
      <summary>{label}</summary>
      {links.map((link) =>
        link.external ? (
          <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
            {link.label}
          </a>
        ) : (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        )
      )}
    </details>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [mobileDetailsOpen, setMobileDetailsOpen] = useState(null);
  const closeMenus = () => {
    setMobileOpen(false);
    setDesktopOpen(null);
    setMobileDetailsOpen(null);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const closeMenus = (event) => {
      if (!event.target.closest(".ss-dd")) {
        setDesktopOpen(null);
      }
    };

    document.addEventListener("click", closeMenus);
    return () => document.removeEventListener("click", closeMenus);
  }, []);

  return (
    <>
      <div className="ss-topbar">
        <div className="ss-container ss-top">
          <div className="ss-left">
            <Link className="ss-offers-link" href="/offers">
              <svg fill="none" height="13" viewBox="0 0 24 24" width="13">
                <path d="M12 2C12 2 7 7 7 11C7 14.866 9.134 18 12 18C14.866 18 17 14.866 17 11C17 7 12 2 12 2Z" stroke="#ff3b3b" strokeWidth="2" />
              </svg>
              OFFERS
            </Link>

            <nav className="ss-links" aria-label="Top links">
              <a href="#">Blog</a>
              <Link href="/contact">Contact</Link>
              <a className="ss-status-link" href="https://status.skyserver.in/" rel="noreferrer" target="_blank">
                <span className="ss-status-dot" />
                Server Status
              </a>
            </nav>
          </div>

          <div className="ss-offer-img">
            <img alt="Offer Banner" src="https://api.hdmedianetwork.in/sky_cdn/offer.png" />
          </div>
        </div>
      </div>

      <div className={`ss-overlay ${mobileOpen ? "show" : ""}`} onClick={closeMenus} />

      <aside aria-hidden={!mobileOpen} className={`ss-offcanvas ${mobileOpen ? "open" : ""}`}>
        <button aria-label="Close menu" className="ss-close" onClick={closeMenus} type="button">
          x
        </button>

        <Link className="ss-off-logo" href="/" onClick={closeMenus}>
          <img alt="SkyServer" src="/logo.png" />
        </Link>

        <div className="ss-off-scroll">
          <nav aria-label="Mobile navigation" className="ss-mobile-nav">
            <NavLink href="/" onNavigate={closeMenus} pathname={pathname}>
              Home
            </NavLink>
            <NavLink href="/about" onNavigate={closeMenus} pathname={pathname}>
              About
            </NavLink>

            <MobileDetails label="Domain" links={domainLinks} openKey={mobileDetailsOpen} setOpenKey={setMobileDetailsOpen} />
            <MobileDetails label="Web Hosting" links={hostingLinks} openKey={mobileDetailsOpen} setOpenKey={setMobileDetailsOpen} />

            <NavLink href="/reseller" onNavigate={closeMenus} pathname={pathname}>
              Reseller Hosting
            </NavLink>
            <NavLink href="/vps" onNavigate={closeMenus} pathname={pathname}>
              VPS Servers
            </NavLink>
            <NavLink className="ss-nav-rdp" href="/windows-rdp" onNavigate={closeMenus} pathname={pathname}>
              Windows RDP
              <span className="ss-tag-new">NEW</span>
            </NavLink>
          </nav>
        </div>

        <div className="ss-off-cta">
          <a
            className="ss-btn ss-btn-outline"
            href="https://api.whatsapp.com/send?phone=917509683151&text=Hello+Team+SkyServer."
            onClick={closeMenus}
            rel="noreferrer"
            target="_blank"
          >
            Live Chat
          </a>
          <a className="ss-btn ss-btn-solid" href="https://skyserver.in/client/login" onClick={closeMenus}>
            Client Area
          </a>
        </div>
      </aside>

      <header className="ss-header">
        <div className="ss-container ss-headgrid">
          <Link className="ss-logo" href="/">
            <img alt="SkyServer" src="/logo.png" />
          </Link>

          <nav aria-label="Primary" className="ss-nav">
            <NavLink href="/" onNavigate={closeMenus} pathname={pathname}>
              Home
            </NavLink>
            <NavLink href="/about" onNavigate={closeMenus} pathname={pathname}>
              About
            </NavLink>

            <DesktopDropdown label="Domain" links={domainLinks} onNavigate={closeMenus} openKey={desktopOpen} setOpenKey={setDesktopOpen} />
            <DesktopDropdown label="Web Hosting" links={hostingLinks} onNavigate={closeMenus} openKey={desktopOpen} setOpenKey={setDesktopOpen} />

            <NavLink href="/reseller" onNavigate={closeMenus} pathname={pathname}>
              Reseller Hosting
            </NavLink>
            <NavLink href="/vps" onNavigate={closeMenus} pathname={pathname}>
              VPS Servers
            </NavLink>
            <NavLink className="ss-nav-rdp" href="/windows-rdp" onNavigate={closeMenus} pathname={pathname}>
              Windows RDP
              <span className="ss-tag-new">NEW</span>
            </NavLink>
          </nav>

          <div className="ss-cta">
            <a
              className="ss-btn ss-btn-outline"
              href="https://api.whatsapp.com/send?phone=917509683151&text=Hello+Team+SkyServer."
              rel="noreferrer"
              target="_blank"
            >
              Live Chat
            </a>
            <a className="ss-btn ss-btn-solid" href="https://skyserver.in/client/login">
              Client Area
            </a>
          </div>

          <button aria-label="Menu" className="ss-burger" onClick={() => setMobileOpen(true)} type="button">
            <svg aria-hidden="true" fill="none" height="22" viewBox="0 0 24 24" width="22">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#0f172a" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
