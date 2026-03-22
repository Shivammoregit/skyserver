"use client";

import { useState, useRef, useCallback } from "react";

/* ── API ── */
const API_BASE = "https://api.hdmedianetwork.in/whois/whois.php?domain=";

/* ── helpers ── */
function sanitizeDomain(v) {
  let d = (v || "").trim()
    .replace(/https?:\/\/|www\./gi, "")
    .replace(/:\d+$/, "")
    .split("/")[0]
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, "");
  if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/.test(d)) return "";
  return d;
}
function fmtDate(v) {
  if (v == null || v === "" || v === "N/A") return "N/A";
  const d = new Date(v);
  if (!isNaN(d.getTime())) return d.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
  return String(v);
}
function txt(v) {
  if (Array.isArray(v)) return v.filter(Boolean).join(", ");
  if (typeof v === "object" && v !== null) return "N/A";
  return v === null || v === undefined || v === "" ? "N/A" : String(v);
}
function asArray(v) {
  if (Array.isArray(v)) return v;
  if (v == null || v === "") return [];
  if (typeof v === "string") return v.split(/[,\n]+/).map(s => s.trim()).filter(Boolean);
  return [String(v)];
}
function getTLD(domain) {
  if (!domain) return "N/A";
  const p = domain.split(".");
  return p.length > 1 ? "." + p[p.length - 1].toUpperCase() : "N/A";
}
function diffDays(a, b) { return Math.floor((b - a) / (1000 * 60 * 60 * 24)); }
function humanYearsDays(from, to) {
  const days = diffDays(from, to);
  if (isNaN(days)) return "N/A";
  const years = Math.floor(days / 365);
  const rem = days - years * 365;
  return years > 0 ? `${years}y ${rem}d` : `${days}d`;
}

/* ── sub-components ── */
const ICON_URL = "https://cdn-icons-png.flaticon.com/128/16994/16994871.png";

function SectionHeader({ title }) {
  return (
    <h4 className="card-title" style={{ color: "#007bff" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={ICON_URL} alt="" width={20} height={20} />
      {title}
    </h4>
  );
}

function KvRow({ label, children, show = true }) {
  if (!show) return null;
  return (
    <>
      <div className="k">{label}</div>
      <div className="v">{children}</div>
    </>
  );
}

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function ContactCard({ title, contact }) {
  if (!contact || Object.values(contact).every(v => !v)) return null;
  const fields = [
    ["Name", contact.name], ["Organization", contact.organization],
    ["Email", contact.email], ["Phone", contact.phone], ["Fax", contact.fax],
    ["Street", contact.street], ["City", contact.city], ["State", contact.state],
    ["Postal Code", contact.postal_code], ["Country", contact.country]
  ];
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, marginTop: 16 }}>
      <SectionHeader title={title} />
      <div className="kv">
        {fields.map(([label, val]) => val ? <KvRow key={label} label={label}>{txt(val)}</KvRow> : null)}
      </div>
    </div>
  );
}

/* ── AVAILABLE state ── */
function DomainAvailable({ domain }) {
  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" style={{ margin: "0 auto 15px", display: "block" }}>
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <h3 style={{ color: "#16a34a", margin: "15px 0 10px", fontSize: 22 }}>Domain Available!</h3>
      <p style={{ color: "#64748b", fontSize: 16, marginBottom: 20 }}><strong>{domain}</strong> is not registered yet.</p>
      <div className="available-notice">
        <div className="available-text">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
          <span>Register now to secure this domain</span>
        </div>
        <a className="buy-now-btn" href={`https://www.skyserver.in/client/order.php?domainaction=register&domain=${encodeURIComponent(domain)}`} target="_blank" rel="noopener noreferrer">
          Register Domain
        </a>
      </div>
    </div>
  );
}

/* ── RESULT state ── */
function WhoisResult({ data, onCopySummary }) {
  let domain = data.domain || data.name || "N/A";
  if (typeof domain === "object") domain = domain.domain || domain.name || "N/A";

  let extension = data.extension;
  if (!extension || extension === "N/A") extension = getTLD(domain);

  const status = asArray(data.status);
  const nameservers = asArray(data.nameservers || data.name_servers);
  const created = data.created_date || data.created || data.created_date_in_time;
  const updated = data.updated_date || data.updated || data.updated_date_in_time;
  const expires = data.expiry_date || data.expiration_date || data.expiration_date_in_time || data.expires;

  let regDetails = data.registrar_details || {};
  if (typeof data.registrar === "object" && data.registrar !== null) regDetails = data.registrar;

  const regName = txt(regDetails.name || data.registrar);
  const regIanaId = txt(regDetails.iana_id || regDetails.ianaId);
  const regAbuseEmail = txt(regDetails.abuse_email || regDetails.abuseEmail);
  const regAbusePhone = txt(regDetails.abuse_phone || regDetails.abusePhone);
  const regUrl = txt(regDetails.url || regDetails.website);
  const regWhoisServer = txt(regDetails.whois_server || data.whois_server);

  const now = new Date();
  const createdD = created ? new Date(created) : null;
  const expiresD = expires ? new Date(expires) : null;
  const age = createdD && !isNaN(createdD) ? humanYearsDays(createdD, now) : "N/A";
  const daysLeft = expiresD && !isNaN(expiresD) ? diffDays(now, expiresD) : NaN;
  const expired = typeof daysLeft === "number" ? daysLeft < 0 : false;
  const expiryColor = expired ? "#dc2626" : daysLeft < 30 ? "#f59e0b" : "#16a34a";

  return (
    <div className="grid-2">
      {/* LEFT — Domain & Registrar */}
      <div>
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
          <SectionHeader title="Domain Information" />
          <div className="kv">
            <KvRow label="Domain Name"><strong style={{ fontSize: 16 }}>{txt(domain)}</strong></KvRow>
            <KvRow label="Extension (TLD)">{extension}</KvRow>
            <KvRow label="Status">{status.length ? status.map(s => <Chip key={s}>{txt(s)}</Chip>) : "N/A"}</KvRow>
            <KvRow label="Created Date">{fmtDate(created)}</KvRow>
            <KvRow label="Updated Date">{fmtDate(updated)}</KvRow>
            <KvRow label="Expiry Date"><span style={{ color: expiryColor, fontWeight: 600 }}>{fmtDate(expires)}</span></KvRow>
            <KvRow label="Name Servers">{nameservers.length ? nameservers.map(ns => <Chip key={ns}>{ns}</Chip>) : "N/A"}</KvRow>
            <KvRow label="WHOIS Server" show={regWhoisServer !== "N/A"}>{regWhoisServer}</KvRow>
          </div>
        </div>

        {regName !== "N/A" && (
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, marginTop: 16 }}>
            <SectionHeader title="Registrar Information" />
            <div className="kv">
              <KvRow label="Registrar Name"><strong>{regName}</strong></KvRow>
              <KvRow label="IANA ID" show={regIanaId !== "N/A"}>{regIanaId}</KvRow>
              <KvRow label="Website" show={regUrl !== "N/A"}><a href={regUrl} target="_blank" rel="nofollow noopener noreferrer">{regUrl}</a></KvRow>
              <KvRow label="Abuse Email" show={regAbuseEmail !== "N/A"}><a href={`mailto:${regAbuseEmail}`}>{regAbuseEmail}</a></KvRow>
              <KvRow label="Abuse Phone" show={regAbusePhone !== "N/A"}>{regAbusePhone}</KvRow>
            </div>
          </div>
        )}

        <ContactCard title="Registrant Contact" contact={data.registrant} />
      </div>

      {/* RIGHT — Insights & Other Contacts */}
      <div>
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
          <SectionHeader title="Domain Insights" />
          <div className="kv">
            <KvRow label="Domain Age"><strong>{age}</strong></KvRow>
            <KvRow label="Days to Expiry">
              <strong style={{ color: expiryColor }}>
                {isNaN(daysLeft) ? "N/A" : expired ? `${Math.abs(daysLeft)}d (Expired)` : `${daysLeft}d`}
              </strong>
            </KvRow>
            <KvRow label="Name Servers Count">{nameservers.length || 0}</KvRow>
            <KvRow label="Status Codes">{status.length || 0}</KvRow>
            <KvRow label="TLD">{extension}</KvRow>
          </div>
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #e5e7eb" }}>
            <div className="k" style={{ marginBottom: 8, fontWeight: 600 }}>Quick Actions:</div>
            <button className="btn-lite" type="button" onClick={onCopySummary} style={{ background: "#007bff", color: "#fff", border: "none", width: "100%" }}>
              Copy Summary
            </button>
            <div style={{ marginTop: 12, padding: 10, background: "#f0fdf4", border: "1px solid #86efac", borderRadius: 8, textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: 13, color: "#166534", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                Domain is already registered
              </p>
            </div>
          </div>
        </div>

        <ContactCard title="Administrative Contact" contact={data.admin} />
        <ContactCard title="Technical Contact" contact={data.tech} />
        <ContactCard title="Billing Contact" contact={data.billing} />
      </div>
    </div>
  );
}

/* ── MAIN WHOIS TOOL ── */
export default function WhoisTool() {
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);     // { type: "data"|"available"|"rawOnly"|"error", ... }
  const [rawText, setRawText] = useState("");
  const [rawVisible, setRawVisible] = useState(true);
  const [copyRawLabel, setCopyRawLabel] = useState("Copy");
  const infoRef = useRef(null);

  const doLookup = useCallback(async (domain) => {
    setLoading(true);
    setResult(null);
    setRawText("");
    setRawVisible(true);

    try {
      const response = await fetch(API_BASE + encodeURIComponent(domain));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const contentType = response.headers.get("content-type") || "";
      let body;
      if (contentType.includes("application/json")) {
        body = await response.json();
      } else {
        body = await response.text();
      }

      setLoading(false);

      // string response → raw WHOIS
      if (typeof body === "string") {
        if (/no match|not found|available|no entries found|no data found/i.test(body)) {
          setResult({ type: "available", domain });
        } else {
          setResult({ type: "rawOnly" });
          setRawText(body.trim());
        }
        return;
      }

      // error
      if (!body.ok || body.error) {
        setResult({ type: "available", domain });
        return;
      }

      // success
      if (body.data) {
        if (body.data.raw_text && /not found|no match|available/i.test(body.data.raw_text)) {
          setResult({ type: "available", domain });
          return;
        }
        setResult({ type: "data", data: body.data });
        if (body.data.raw) {
          if (/no match|not found|available|no entries found|no data found/i.test(body.data.raw)) {
            setResult({ type: "available", domain });
          } else {
            setRawText(body.data.raw.trim());
          }
        }
      } else {
        setResult({ type: "available", domain });
      }
    } catch (err) {
      setLoading(false);
      setResult({ type: "error", message: err.message });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const domain = sanitizeDomain(inputVal);
    if (!domain) { alert("Please enter a valid domain name (e.g., example.com)"); return; }
    setInputVal(domain);
    doLookup(domain);
  };

  const handleBlur = () => {
    const s = sanitizeDomain(inputVal);
    if (s) setInputVal(s);
  };

  const handleCopyRaw = async () => {
    try {
      await navigator.clipboard.writeText(rawText);
      setCopyRawLabel("Copied!");
      setTimeout(() => setCopyRawLabel("Copy"), 1400);
    } catch { alert("Copy failed"); }
  };

  const handleCopySummary = async () => {
    try {
      const text = infoRef.current?.innerText?.trim() || "";
      await navigator.clipboard.writeText(text);
    } catch { alert("Copy failed. Please try again."); }
  };

  return (
    <>
      <style>{`
        #domain-info { border:1px solid #e5e7eb; border-radius:12px; padding:16px; box-shadow:0 8px 20px rgba(0,0,0,0.06); background:#fff; }
        .inline-loader{ display:none; width:42px;height:42px;border:4px solid #e5e7eb;border-top-color:#3498db;border-radius:50%;animation:spin 1s linear infinite;margin:18px auto; }
        .loading .inline-loader{ display:block; }
        .loading .placeholder{ height:16px;background:linear-gradient(90deg,#f1f5f9,#e2e8f0,#f1f5f9);background-size:200% 100%;animation:shimmer 1.2s infinite;border-radius:8px;margin:8px 0; }
        @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
        @keyframes spin{to{transform:rotate(360deg)}}
        .card-title { font-weight:700; margin-bottom:16px; display:flex; align-items:center; gap:8px; justify-content:center; }
        .card-title img { width:20px; height:20px; }
        .kv { display:grid; grid-template-columns: 1fr 2fr; gap:8px 14px; }
        .kv .k { color:#475569; font-weight:600; }
        .kv .v { color:#0f172a; word-break:break-word; }
        .grid-2 { display:grid; grid-template-columns: 1fr 1fr; gap:16px; }
        @media (max-width: 991.98px) { .grid-2 { grid-template-columns: 1fr; } }
        .chip { display:inline-block; padding:4px 10px; border-radius:999px; border:1px solid #e2e8f0; margin:2px; font-size:12px; }
        .available-notice { background:linear-gradient(135deg,#dcfce7 0%,#f0fdf4 100%); border:2px solid #22c55e; padding:24px; border-radius:16px; margin:16px 0; display:flex; align-items:center; justify-content:space-between; box-shadow:0 4px 6px rgba(34,197,94,0.1); flex-wrap:wrap; gap:12px; }
        .available-text { color:#166534; font-size:1.2rem; font-weight:600; display:flex; align-items:center; gap:10px; }
        .buy-now-btn { background:linear-gradient(135deg,#22c55e,#16a34a); color:#fff; padding:12px 24px; border-radius:12px; text-decoration:none; font-weight:600; transition:.25s ease; }
        .buy-now-btn:hover { transform:translateY(-2px); color:#fff; }
        .raw-whois { background:#0f172a;color:#e2e8f0;padding:14px;border-radius:10px;font-family:ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap;max-height:420px;overflow:auto; }
        .mini-actions { display:flex; gap:10px; justify-content:flex-end; margin-top:10px; }
        .btn-lite { border:1px solid #cbd5e1;background:#fff;color:#0f172a;padding:8px 12px;border-radius:10px;font-weight:600;cursor:pointer; }
        .btn-lite:hover { background:#f8fafc; }
        .register__form input[type="text"] { text-transform: lowercase; }
        .site-btn { cursor:pointer; }
      `}</style>

      {/* Search form */}
      <div className="register__form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="domain-input"
            placeholder='ex: hdmedianetwork.in, skyserver.in'
            required
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onBlur={handleBlur}
          />
          <button type="submit" className="site-btn" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
      </div>

      {/* Results area */}
      <div className="register__result">
        <div id="domain-info" className={`card${loading ? " loading" : ""}`} style={{ marginTop: 20 }} ref={infoRef}>
          {loading && (
            <>
              <div className="inline-loader" />
              <div className="placeholder" style={{ width: "70%" }} />
              <div className="placeholder" style={{ width: "55%" }} />
            </>
          )}

          {!loading && !result && (
            <center id="domain-placeholder">
              <p>Enter the domain name to perform a WHOIS Lookup</p>
              <div className="placeholder" style={{ width: "70%", height: 16, background: "#f1f5f9", borderRadius: 8, margin: "8px auto" }} />
              <div className="placeholder" style={{ width: "55%", height: 16, background: "#f1f5f9", borderRadius: 8, margin: "8px auto" }} />
            </center>
          )}

          {!loading && result?.type === "available" && (
            <DomainAvailable domain={result.domain} />
          )}

          {!loading && result?.type === "data" && (
            <WhoisResult data={result.data} onCopySummary={handleCopySummary} />
          )}

          {!loading && result?.type === "rawOnly" && (
            <p style={{ textAlign: "center", color: "#64748b" }}>Displaying raw WHOIS data</p>
          )}

          {!loading && result?.type === "error" && (
            <div style={{ textAlign: "center", padding: 20 }}>
              <p style={{ color: "#dc2626", fontSize: 16, marginBottom: 10 }}>⚠️ Error fetching WHOIS data</p>
              <p style={{ color: "#64748b", fontSize: 14 }}>{result.message}</p>
              <button className="btn-lite" type="button" onClick={() => { setResult(null); setRawText(""); }} style={{ marginTop: 16 }}>
                Try Again
              </button>
            </div>
          )}
        </div>

        {/* Raw WHOIS section */}
        {rawText && (
          <div style={{ marginTop: 14 }}>
            <div className="card" style={{ padding: 14 }}>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="m-0">Raw WHOIS</h5>
                <div className="mini-actions">
                  <button className="btn-lite" type="button" onClick={handleCopyRaw}>{copyRawLabel}</button>
                  <button className="btn-lite" type="button" onClick={() => setRawVisible(!rawVisible)}>
                    {rawVisible ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              {rawVisible && <div className="raw-whois">{rawText}</div>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
