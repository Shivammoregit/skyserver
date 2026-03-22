"use client";

/**
 * Accordion-style FAQ component used by VPS, Reseller, and Windows-RDP pages.
 * Replicates the legacy `toggleFaq` behavior: clicking one item closes all others.
 */
import { useState } from "react";

export default function VpFaqList({ items }) {
  const [openIdx, setOpenIdx] = useState(-1);

  return (
    <div className="vp-faq-list">
      {items.map((faq, i) => (
        <div key={i} className={`vp-faq-item${openIdx === i ? " open" : ""}`}>
          <div
            className="vp-faq-q"
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
          >
            {faq.q}
            <span className="vp-faq-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </div>
          <div className="vp-faq-a">{faq.a}</div>
        </div>
      ))}
    </div>
  );
}
