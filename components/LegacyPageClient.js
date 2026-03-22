"use client";

import { useEffect } from "react";
import LegacyHtml from "@/components/LegacyHtml";

export default function LegacyPageClient({ html, scripts }) {
  useEffect(() => {
    const appendedScripts = [];

    scripts.forEach((script, index) => {
      const node = document.createElement("script");
      if (script.type) {
        node.type = script.type;
      }

      if (script.src) {
        node.src = script.src;
        if (script.defer) {
          node.defer = true;
        }
        if (script.async) {
          node.async = true;
        }
      } else if (script.content) {
        node.text = script.content;
      }

      node.dataset.legacyScript = String(index);
      document.body.appendChild(node);
      appendedScripts.push(node);
    });

    return () => {
      appendedScripts.forEach((node) => node.remove());
    };
  }, [scripts]);

  return <LegacyHtml html={html} />;
}
