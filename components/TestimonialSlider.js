"use client";
import { useState, useEffect, useCallback } from "react";

/**
 * A simple testimonial slider with prev/next buttons and auto-play.
 * @param {{ items: { text: string | React.ReactNode, name: string, location?: string }[], autoPlayMs?: number }} props
 */
export default function TestimonialSlider({ items, autoPlayMs = 5000 }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % items.length), [items.length]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (!autoPlayMs) return;
    const id = setInterval(next, autoPlayMs);
    return () => clearInterval(id);
  }, [next, autoPlayMs]);

  return (
    <div style={{ position: "relative", overflow: "hidden", borderRadius: 24 }}>
      <div
        className="seo-testi-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((t, i) => (
          <div key={i} className="seo-testi-item">
            <div className="seo-testi-card">
              <div className="seo-testi-quote">&ldquo;</div>
              <p className="seo-testi-text">{t.text}</p>
              <div className="seo-testi-divider" />
              <div className="seo-testi-author">{t.name}</div>
              {t.location && <div className="seo-testi-loc">{t.location}</div>}
            </div>
          </div>
        ))}
      </div>

      <div className="seo-testi-nav">
        <button type="button" onClick={prev} aria-label="Previous testimonial">&#8249;</button>
        <button type="button" onClick={next} aria-label="Next testimonial">&#8250;</button>
      </div>
    </div>
  );
}
