"use client";

import Script from "next/script";

/**
 * Shared pricing widget component that loads SkyServer's CDN-hosted pricing
 * plans. Each product page passes a different `gid` value:
 *   - Shared Hosting: gid=2
 *   - WordPress Hosting: gid=3
 *   - Business Hosting: gid=4
 *   - Cloud Hosting: gid=8
 */
export default function PricingWidget({ gid }) {
  return (
    <section className="prc-section">
      <link
        rel="stylesheet"
        href="https://api.hdmedianetwork.in/sky_cdn/pricing/pricing.css"
      />
      <div className="container">
        <div className="prc-head">
          <div className="prc-head-left">
            <span id="planTag" className="hidden" />
            <h2>Choose Your Plan</h2>
          </div>

          <div className="prc-toggle">
            <label className="active" id="lblMonthly" htmlFor="monthly">
              Monthly
              <input type="radio" id="monthly" name="billing" defaultChecked />
            </label>
            <label id="lblYearly" htmlFor="yearly">
              Yearly
              <input type="radio" id="yearly" name="billing" />
            </label>
          </div>
        </div>

        <div id="plansLoading" className="prc-loading">
          Loading plans, please wait…
        </div>

        <div className="prc-grid" id="monthlyPlans" />
        <div className="prc-grid prc-hidden" id="yearlyPlans" />
      </div>

      <Script
        src={`https://api.hdmedianetwork.in/sky_cdn/pricing/pricing.js?gid=${gid}`}
        strategy="afterInteractive"
      />
    </section>
  );
}
