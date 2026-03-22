"use client";

import { useEffect } from "react";

export default function SitePreloader() {
  useEffect(() => {
    const loader = document.querySelector(".loader");
    const preloder = document.getElementById("preloder");

    if (loader) {
      loader.style.transition = "opacity 0.3s ease";
      loader.style.opacity = "0";
    }

    if (preloder) {
      const timer = setTimeout(() => {
        preloder.style.transition = "opacity 0.5s ease";
        preloder.style.opacity = "0";
        setTimeout(() => {
          preloder.style.display = "none";
        }, 500);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div id="preloder">
      <div className="loader" />
    </div>
  );
}
