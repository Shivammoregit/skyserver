"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteFooter() {
  const [visible, setVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="footer-section">
        <div className="footer__text set-bg ss-footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer__text-about">
                  <div className="footer__logo">
                    <Link href="/">
                      <img alt="SkyServer" src="/logo.png" style={{ width: 200, height: "auto", filter: "invert(100%)" }} />
                    </Link>
                  </div>
                  <p>
                    SkyServer Cloud Technologies offers India&apos;s top cPanel web hosting with secure services, managed
                    WordPress hosting, and free SSL. Enjoy expert support, advanced infrastructure, and affordable plans
                    for optimal website performance and security.
                  </p>
                  <div className="footer__social">
                    <a href="https://in.linkedin.com/company/skyserver" rel="noreferrer" target="_blank">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="https://www.instagram.com/skyserver.in/" rel="noreferrer" target="_blank">
                      <i className="fa fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer__text-widget">
                  <h5>Company</h5>
                  <ul>
                    <li><Link href="/about">About Us</Link></li>
                    <li><a href="https://status.skyserver.in" rel="noreferrer" target="_blank">Server Status</a></li>
                    <li><Link href="/disclaimer">Disclaimer Policy</Link></li>
                    <li><Link href="/refund">Refund Policy</Link></li>
                    <li><Link href="/terms">Terms of Services</Link></li>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                    <li><Link href="/unlimited-hosting-policy">Unlimited Hosting Policy</Link></li>
                    <li><Link href="/abuse">Abuse &amp; Unethical Use Policy</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer__text-widget">
                  <h5>Services</h5>
                  <ul>
                    <li><Link href="/hosting">Shared Hosting</Link></li>
                    <li><Link href="/wordpress">WordPress Hosting</Link></li>
                    <li><Link href="/business">Business Hosting</Link></li>
                    <li><a href="https://api.whatsapp.com/send?phone=917509683151&text=Hello+Team+SkyServer." rel="noreferrer" target="_blank">Custom Hosting</a></li>
                    <li><a href="https://skyserver.in/client/cart.php?a=add&domain=register" rel="noreferrer" target="_blank">Register New Domain</a></li>
                    <li><a href="https://skyserver.in/client/order.php?domainaction=transfer" rel="noreferrer" target="_blank">Transfer Domain</a></li>
                    <li><Link href="/whois">Domain WHOIS Lookup</Link></li>
                    <li><Link href="/pages/cheap-web-hosting-india">Cheap Web Hosting</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer__text-widget">
                  <h5>Contact Us</h5>
                  <ul className="footer__widget-info">
                    <li><span className="fa fa-map-marker" /> BT-1, Bio Technology Park, Sitapura, Jaipur, 302022</li>
                    <li><span className="fa fa-mobile" /> +91-7509683151</li>
                    <li><span className="fa fa-headphones" /> support@skyserver.in</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-middle ss-footer-card">
              <div className="container-fluid">
                <div className="reg-bar text-md-left text-center">
                  <div className="d-lg-flex align-items-center justify-content-between">
                    <div className="text">
                      <h4 className="title-4 ss-footer-price-title">
                        Shared Hosting prices starting
                        <br />
                        from Rs49 only.
                      </h4>
                    </div>
                    <div className="buttons mt-lg-0 mt-3">
                      <Link className="btn btn-fill-primary shadow-off text-uppercase font-500 ss-footer-buy" href="/hosting">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="container-fluid">
                <div className="content d-flex align-items-start mb-2 ss-footer-copy">
                  <div className="copyright mr-lg-5">
                    <p className="para-3">© 2024-{currentYear} SkyServer Cloud Technologies, All Rights Reserved.</p>
                  </div>
                </div>
                <div className="content d-lg-flex align-items-end flex-wrap">
                  <p className="para-3">
                    By using this site, you signify that you agree to be bound by these <Link href="/terms">Universal Terms of Service</Link>.
                  </p>
                  <div className="signature ml-auto mt-lg-0 mt-1">
                    <p className="para-3">
                      Powered by <a href="https://hdmedianetwork.in" rel="noreferrer" target="_blank">HD Media Network</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button
        className={`ss-go-top ${visible ? "show" : ""}`}
        id="goTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Go to Top"
        type="button"
      >
        <img alt="Rocket Go Top" src="https://freesvg.org/img/black-and-white-rocket.png" />
      </button>
    </>
  );
}
