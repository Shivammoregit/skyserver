"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import PageShell from "@/components/PageShell";

const schemaService = {
  "@context": "https://schema.org",
  "@type": "WebHostingService",
  name: "SkyServer Custom Hosting",
  serviceType: "Custom Hosting",
  url: "https://skyserver.in/custom",
  provider: {
    "@type": "Organization",
    name: "SkyServer Cloud Technologies",
    url: "https://skyserver.in/",
    logo: "https://skyserver.in/img/og-banner.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7509683151",
      contactType: "Customer Support",
      areaServed: "IN",
      availableLanguage: "English"
    }
  },
  description:
    "Custom hosting plans built to fit your business — flexible CPU, RAM, storage, and 24/7 managed support."
};

export default function CustomPage() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // Check Turnstile
    const response = formRef.current?.querySelector("[name='cf-turnstile-response']")?.value;
    if (!response) {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
    setSubmitting(true);

    try {
      const formData = new FormData(formRef.current);
      await fetch("https://email.gosecureserver.in/api/send.php", {
        method: "POST",
        body: formData
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  const inputStyle = {
    flex: "1 1 48%",
    padding: "16px 18px",
    border: "1px solid #cbd5e1",
    borderRadius: 12,
    fontSize: 16,
    background: "#fff",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)"
  };

  return (
    <PageShell breadcrumb="Custom Hosting">
      <Script
        id="schema-custom-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />

      <section
        id="custom-hosting"
        style={{
          maxWidth: 900,
          margin: "60px auto",
          padding: "50px 40px",
          background: "linear-gradient(145deg, #f8fafc, #eef2ff)",
          borderRadius: 22,
          boxShadow: "0 10px 30px rgba(30,58,138,0.12)",
          fontFamily: "'Inter', Arial, sans-serif"
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 35 }}>
          <h2 style={{ fontSize: 32, color: "#1e3a8a", marginBottom: 8, fontWeight: 800 }}>
            Custom Hosting Request
          </h2>
          <p style={{ fontSize: 16, color: "#475569" }}>
            Tailored hosting solutions from <strong>SkyServer Cloud Technologies</strong> to match your business needs.
          </p>
        </div>

        {!submitted ? (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <input type="hidden" name="to" value="support@skyserver.in" />

            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              <input type="text" name="name" placeholder="Full Name *" required style={inputStyle} />
              <input type="email" name="email" placeholder="Business Email *" required style={inputStyle} />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              <input type="text" name="phone" placeholder="Phone / WhatsApp *" required style={inputStyle} />
              <input type="text" name="domain" placeholder="Existing Domain (optional)" style={inputStyle} />
            </div>

            <select name="hosting_type" required style={{ ...inputStyle, flex: "unset" }}>
              <option value="">Select Hosting Type</option>
              <option>Shared Hosting</option>
              <option>VPS Hosting</option>
              <option>Dedicated Server</option>
              <option>Reseller Hosting</option>
              <option>Cloud / Custom Infrastructure</option>
              <option>Managed WordPress Hosting</option>
            </select>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              <input type="text" name="cpu" placeholder="CPU Cores (e.g. 2 / 4 / 8)" style={inputStyle} />
              <input type="text" name="ram" placeholder="RAM (e.g. 4GB / 8GB / 16GB)" style={inputStyle} />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              <input type="text" name="storage" placeholder="Storage (SSD / NVMe, size in GB)" style={inputStyle} />
              <input type="text" name="bandwidth" placeholder="Monthly Traffic / Bandwidth" style={inputStyle} />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              <select name="os_preference" style={inputStyle}>
                <option value="">Preferred Operating System</option>
                <option>Linux (Ubuntu / CentOS / AlmaLinux)</option>
                <option>Windows Server</option>
                <option>CloudLinux</option>
                <option>Other / Not Sure</option>
              </select>
              <select name="control_panel" style={inputStyle}>
                <option value="">Control Panel Preference</option>
                <option>cPanel / WHM</option>
                <option>Plesk</option>
                <option>CyberPanel (OpenLiteSpeed)</option>
                <option>DirectAdmin</option>
                <option>None / Custom Setup</option>
              </select>
            </div>

            <textarea
              name="requirements"
              rows={6}
              placeholder="Describe your requirements (websites, tech stack, SSL, backups, etc.)"
              style={{ ...inputStyle, flex: "unset", resize: "vertical" }}
            />

            <div style={{ display: "flex", justifyContent: "center", margin: "15px 0" }}>
              <div
                className="cf-turnstile"
                data-sitekey="0x4AAAAAACNBUwxaNU3iTupR"
              />
            </div>

            {captchaError && (
              <div style={{ color: "#dc2626", fontSize: 14, fontWeight: 600, textAlign: "center", marginTop: -5 }}>
                ⚠️ Please complete the security verification
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              style={{
                background: "linear-gradient(90deg, #1e3a8a, #2563eb)",
                color: "#fff",
                padding: "16px 20px",
                border: "none",
                borderRadius: 12,
                fontSize: 17,
                fontWeight: 600,
                cursor: submitting ? "not-allowed" : "pointer",
                transition: "0.3s",
                boxShadow: "0 4px 10px rgba(30,58,138,0.3)",
                opacity: submitting ? 0.6 : 1
              }}
            >
              {submitting ? "⏳ Submitting..." : "Submit Hosting Request"}
            </button>
          </form>
        ) : (
          <div style={{ textAlign: "center", marginTop: 35, fontSize: 20, fontWeight: 600, color: "#16a34a" }}>
            ✅ Thank you for contacting <strong>SkyServer Cloud Technologies</strong>!
            <br />
            Our team will get back to you soon.
          </div>
        )}
      </section>
    </PageShell>
  );
}
