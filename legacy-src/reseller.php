<?php
header_remove("X-Powered-By");
header("Cache-Control: public, max-age=3600, must-revalidate");
header("Vary: Accept-Encoding");
if (!ob_get_level()) ob_start("ob_gzhandler");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reseller Hosting India | WHM cPanel White Label — SkyServer Cloud</title>
  <meta name="description" content="Start your own hosting business with SkyServer Reseller Hosting. WHM, cPanel, NVMe SSD, free SSL, white-label control & 24/7 expert support. Starting ₹399/mo."/>
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <meta name="publisher" content="SkyServer Cloud Technologies"/>
  <meta name="author" content="SkyServer Cloud Technologies"/>
  <link rel="canonical" href="https://skyserver.in/reseller"/>
  <meta name="keywords" content="reseller hosting India, WHM reseller hosting, cPanel reseller hosting, NVMe reseller hosting, white label reseller hosting, start web hosting business India, master reseller hosting, cheap reseller hosting India, SkyServer reseller hosting, WHMCS reseller hosting, unlimited reseller hosting, web hosting reseller India"/>
  <meta property="og:title" content="Reseller Hosting India | WHM cPanel — SkyServer Cloud"/>
  <meta property="og:description" content="Start your own hosting business with WHM, cPanel, NVMe SSD, free SSL & white-label control. 24/7 expert support included."/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://skyserver.in/reseller"/>
  <meta property="og:image" content="https://skyserver.in/img/og-banner.jpg"/>
  <meta property="og:site_name" content="SkyServer Cloud Technologies"/>
  <meta property="og:locale" content="en_IN"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Reseller Hosting India | SkyServer Cloud"/>
  <meta name="twitter:description" content="Launch your hosting business with WHM, cPanel, NVMe SSD & white-label reseller hosting from SkyServer."/>
  <meta name="twitter:image" content="https://skyserver.in/img/og-banner.jpg"/>
  <meta name="twitter:site" content="@SkyServerCloud"/>
  <meta name="theme-color" content="#0a0e2a"/>
  <link rel="icon" type="image/png" sizes="48x48" href="/img/ico.png"/>
  <link rel="apple-touch-icon" href="/img/ico.png"/>

  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"WebHostingService","name":"SkyServer Reseller Hosting","serviceType":"Reseller Hosting","url":"https://skyserver.in/reseller","provider":{"@type":"Organization","name":"SkyServer Cloud Technologies","url":"https://skyserver.in/","logo":"https://skyserver.in/img/og-banner.jpg","contactPoint":{"@type":"ContactPoint","telephone":"+91-7509683151","contactType":"Customer Support","areaServed":"IN","availableLanguage":"English"}},"description":"Start your web hosting business with SkyServer Reseller Hosting — WHM, cPanel, NVMe SSD, free SSL and 24/7 expert support.","offers":{"@type":"Offer","priceCurrency":"INR","price":"399","availability":"https://schema.org/InStock"}}
  </script>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://skyserver.in/"},{"@type":"ListItem","position":2,"name":"Reseller Hosting","item":"https://skyserver.in/reseller"}]}
  </script>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is Reseller Hosting?","acceptedAnswer":{"@type":"Answer","text":"Reseller hosting allows you to purchase server resources in bulk from SkyServer and sell them to your own clients as branded hosting plans. You get WHM to manage accounts and cPanel for each client, with full white-label control."}},{"@type":"Question","name":"Can I use my own brand name with reseller hosting?","acceptedAnswer":{"@type":"Answer","text":"Yes. SkyServer reseller hosting is fully white-label. You can set your own company name, logo, and branding. Your clients will never see SkyServer's name — it is 100% your brand."}},{"@type":"Question","name":"Do I need technical knowledge to run a reseller hosting business?","acceptedAnswer":{"@type":"Answer","text":"Basic knowledge helps, but SkyServer's managed reseller hosting handles all server-level tasks. You manage client accounts through WHM, and SkyServer handles hardware, security, and uptime."}},{"@type":"Question","name":"Is WHMCS included with reseller hosting?","acceptedAnswer":{"@type":"Answer","text":"WHMCS is available as an add-on with our reseller plans. It automates billing, client management, and support tickets for your hosting business."}},{"@type":"Question","name":"Can I upgrade my reseller plan later?","acceptedAnswer":{"@type":"Answer","text":"Yes. All SkyServer reseller plans are fully scalable. You can upgrade disk space, bandwidth, and the number of accounts anytime without downtime."}}]}
  </script>

  <!-- Performance: preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://api.hdmedianetwork.in">
  <link rel="dns-prefetch" href="https://cdn.jsdelivr.net">
  <link rel="dns-prefetch" href="https://upload.wikimedia.org">

  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="css/elegant-icons.css">
  <link rel="stylesheet" href="css/flaticon.css">
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/slicknav.min.css">
  <link rel="stylesheet" href="css/style.css">

  <style>
    :root {
      --brand:     #0f766e;
      --brand-dk:  #0d6b63;
      --accent:    #06b6d4;
      --dark:      #0a1a18;
      --text:      #1e293b;
      --muted:     #64748b;
      --border:    #e2e8f0;
      --radius:    14px;
      --shadow:    0 4px 24px rgba(0,0,0,0.07);
      --shadow-lg: 0 16px 48px rgba(0,0,0,0.12);
      --font:      'Plus Jakarta Sans', sans-serif;
      --font-hd:   'Syne', sans-serif;
    }
    *, *::before, *::after { box-sizing: border-box; }
    body { font-family: var(--font); color: var(--text); background: #fff; }

    /* breadcrumb */
    .breadcrumb-section { width:100%; }
    .breadcrumb-section > .container,
    .breadcrumb-section .container,
    .breadcrumb-section .row,
    .breadcrumb-section .col-lg-12 {
      max-width:100%!important; width:100%!important;
      margin-left:0!important; margin-right:0!important;
      padding-left:0!important; padding-right:0!important;
    }
    .breadcrumb-section .breadcrumb__option { padding-left:15px; padding-right:15px; }
    .breadcrumb-section { background-size:cover; background-position:center; }

    /* pricing toggle */
    .monthly__plans,.yearly__plans{display:none}
    .monthly__plans.active,.yearly__plans.active{display:flex;flex-wrap:wrap}
    .pricing__item h3{white-space:nowrap}

    /* layout */
    .vp-section { padding:72px 24px; }
    .vp-wrap    { max-width:1160px; margin:0 auto; }
    .vp-center  { text-align:center; }

    .vp-label {
      display:inline-flex; align-items:center; gap:7px;
      background:#f0fdfa; color:var(--brand);
      font-size:11px; font-weight:700; letter-spacing:1.4px;
      text-transform:uppercase; padding:5px 14px;
      border-radius:99px; border:1px solid #99f6e4; margin-bottom:14px;
    }

    .vp-h2 {
      font-family:var(--font-hd);
      font-size:clamp(24px,4vw,38px);
      font-weight:800; color:var(--dark);
      line-height:1.2; margin:0 0 14px;
    }
    .vp-h2 span { color:var(--brand); }

    .vp-lead {
      font-size:15px; color:var(--muted);
      line-height:1.75; max-width:600px; margin:0 auto 40px;
    }

    /* stats bar */
    .vp-stats { background:var(--dark); }
    .vp-stats-inner {
      max-width:1160px; margin:0 auto;
      display:grid; grid-template-columns:repeat(4,1fr);
    }
    .vp-stat-item {
      padding:28px 24px; text-align:center;
      border-right:1px solid rgba(255,255,255,0.08);
    }
    .vp-stat-item:last-child { border-right:none; }
    .vp-stat-num { font-family:var(--font-hd); font-size:34px; font-weight:800; color:#fff; line-height:1; }
    .vp-stat-num span { color:var(--accent); }
    .vp-stat-lbl { font-size:12px; color:rgba(255,255,255,0.5); margin-top:5px; font-weight:500; }
    @media(max-width:640px){
      .vp-stats-inner { grid-template-columns:repeat(2,1fr); }
      .vp-stat-item { border-bottom:1px solid rgba(255,255,255,0.08); }
    }

    /* features */
    .vp-features-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
    @media(max-width:900px){ .vp-features-grid { grid-template-columns:repeat(2,1fr); } }
    @media(max-width:560px){ .vp-features-grid { grid-template-columns:1fr; } }

    .vp-feat-card {
      background:#fff; border:1.5px solid var(--border);
      border-radius:var(--radius); padding:28px 24px;
      transition:border-color .2s, box-shadow .2s, transform .2s;
    }
    .vp-feat-card:hover {
      border-color:#5eead4;
      box-shadow:0 10px 32px rgba(15,118,110,.1);
      transform:translateY(-3px);
    }
    .vp-feat-icon {
      width:48px; height:48px; border-radius:12px;
      display:flex; align-items:center; justify-content:center; margin-bottom:16px;
    }
    .vp-feat-title { font-size:15px; font-weight:700; color:var(--dark); margin-bottom:7px; }
    .vp-feat-desc  { font-size:13px; color:var(--muted); line-height:1.65; }

    /* two col */
    .vp-two-col { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; }
    @media(max-width:860px){ .vp-two-col { grid-template-columns:1fr; gap:32px; } }

    /* how it works steps */
    .vp-steps { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
    @media(max-width:860px){ .vp-steps { grid-template-columns:repeat(2,1fr); } }
    @media(max-width:480px){ .vp-steps { grid-template-columns:1fr; } }

    .vp-step-card {
      background:#fff; border:1.5px solid var(--border);
      border-radius:var(--radius); padding:28px 20px;
      text-align:center; box-shadow:var(--shadow);
      transition:border-color .2s, transform .2s;
      position:relative;
    }
    .vp-step-card:hover { border-color:#5eead4; transform:translateY(-3px); }
    .vp-step-num {
      width:44px; height:44px; border-radius:50%;
      background:var(--brand); color:#fff;
      font-family:var(--font-hd); font-size:18px; font-weight:800;
      display:flex; align-items:center; justify-content:center;
      margin:0 auto 16px;
    }
    .vp-step-title { font-size:14px; font-weight:700; color:var(--dark); margin-bottom:8px; }
    .vp-step-desc  { font-size:12px; color:var(--muted); line-height:1.6; }

    /* use cases */
    .vp-usecase-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
    @media(max-width:860px){ .vp-usecase-grid { grid-template-columns:repeat(2,1fr); } }
    @media(max-width:540px){ .vp-usecase-grid { grid-template-columns:1fr; } }

    .vp-usecase-card {
      background:#fff; border:1.5px solid var(--border);
      border-radius:var(--radius); padding:24px;
      box-shadow:var(--shadow);
      transition:border-color .2s, transform .2s;
    }
    .vp-usecase-card:hover { border-color:#5eead4; transform:translateY(-2px); }
    .vp-usecase-icon {
      width:44px; height:44px; border-radius:10px;
      display:flex; align-items:center; justify-content:center;
      margin-bottom:14px;
    }
    .vp-usecase-title { font-size:14px; font-weight:700; color:var(--dark); margin-bottom:6px; }
    .vp-usecase-desc  { font-size:12px; color:var(--muted); line-height:1.6; }

    /* comparison table */
    .vp-table-wrap { overflow-x:auto; border-radius:var(--radius); box-shadow:var(--shadow-lg); }
    .vp-compare-table { width:100%; border-collapse:collapse; background:#fff; font-size:14px; }
    .vp-compare-table thead th {
      background:var(--dark); color:#fff; padding:16px 20px;
      text-align:left; font-weight:700; font-size:13px;
    }
    .vp-compare-table thead th:first-child { border-radius:var(--radius) 0 0 0; }
    .vp-compare-table thead th:last-child  { border-radius:0 var(--radius) 0 0; }
    .vp-compare-table tbody td { padding:14px 20px; border-bottom:1px solid var(--border); color:var(--text); }
    .vp-compare-table tbody tr:last-child td { border-bottom:none; }
    .vp-compare-table tbody tr:nth-child(even) td { background:#f8fafc; }
    .vp-compare-table td .tick  { color:#16a34a; font-weight:700; font-size:16px; }
    .vp-compare-table td .cross { color:#dc2626; font-weight:700; }
    .vp-compare-table td.hl     { font-weight:700; color:var(--brand); }
    .vp-compare-table .col-sky  { background:#f0fdfa!important; }

    /* why grid */
    .vp-why-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
    @media(max-width:640px){ .vp-why-grid { grid-template-columns:1fr; } }

    .vp-why-item {
      display:flex; gap:14px; align-items:flex-start;
      background:#fff; border:1.5px solid var(--border);
      border-radius:var(--radius); padding:20px; box-shadow:var(--shadow);
      transition:border-color .2s, transform .2s;
    }
    .vp-why-item:hover { border-color:#5eead4; transform:translateY(-2px); }
    .vp-why-num {
      flex-shrink:0; width:36px; height:36px;
      background:var(--brand); color:#fff;
      border-radius:10px; font-family:var(--font-hd);
      font-size:14px; font-weight:800;
      display:flex; align-items:center; justify-content:center;
    }
    .vp-why-title { font-size:14px; font-weight:700; color:var(--dark); margin-bottom:4px; }
    .vp-why-text  { font-size:12px; color:var(--muted); line-height:1.6; }

    /* testimonials */
    .vp-testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
    @media(max-width:860px){ .vp-testi-grid { grid-template-columns:repeat(2,1fr); } }
    @media(max-width:560px){ .vp-testi-grid { grid-template-columns:1fr; } }

    .vp-testi-card {
      background:#fff; border:1.5px solid var(--border);
      border-radius:var(--radius); padding:24px; box-shadow:var(--shadow);
      transition:box-shadow .2s, transform .2s;
    }
    .vp-testi-card:hover { box-shadow:var(--shadow-lg); transform:translateY(-2px); }
    .vp-stars { color:#f59e0b; font-size:13px; margin-bottom:12px; }
    .vp-testi-text { font-size:13px; color:var(--muted); line-height:1.7; margin-bottom:16px; font-style:italic; }
    .vp-testi-author { display:flex; align-items:center; gap:10px; }
    .vp-testi-avatar {
      width:38px; height:38px; border-radius:50%;
      background:linear-gradient(135deg,var(--brand),var(--accent));
      display:flex; align-items:center; justify-content:center;
      font-size:13px; font-weight:800; color:#fff; flex-shrink:0;
    }
    .vp-testi-name { font-size:13px; font-weight:700; color:var(--dark); }
    .vp-testi-role { font-size:11px; color:#aaa; }

    /* trust badges */
    .vp-trust-row { display:flex; flex-wrap:wrap; gap:14px; justify-content:center; }
    .vp-trust-badge {
      display:flex; align-items:center; gap:8px;
      background:#fff; border:1.5px solid var(--border);
      border-radius:10px; padding:10px 16px;
      font-size:13px; font-weight:600; color:var(--dark); box-shadow:var(--shadow);
    }

    /* seo content */
    .vp-seo-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:24px; }
    @media(max-width:640px){ .vp-seo-grid { grid-template-columns:1fr; } }
    .vp-seo-card {
      background:#fff; border:1.5px solid var(--border);
      border-radius:var(--radius); padding:28px; box-shadow:var(--shadow);
    }
    .vp-seo-card h3 { font-size:16px; font-weight:800; color:var(--dark); margin-bottom:12px; }
    .vp-seo-card p  { font-size:13px; color:var(--muted); line-height:1.75; margin:0; }

    /* faq */
    .vp-faq-list { max-width:820px; margin:0 auto; }
    .vp-faq-item {
      border:1.5px solid var(--border); border-radius:var(--radius);
      margin-bottom:12px; overflow:hidden; background:#fff; box-shadow:var(--shadow);
    }
    .vp-faq-q {
      display:flex; justify-content:space-between; align-items:center;
      padding:18px 22px; font-size:14px; font-weight:700;
      color:var(--dark); cursor:pointer; user-select:none; gap:12px;
    }
    .vp-faq-q:hover { color:var(--brand); }
    .vp-faq-icon {
      flex-shrink:0; width:28px; height:28px; border-radius:8px;
      background:#f0fdfa; color:var(--brand);
      display:flex; align-items:center; justify-content:center;
      transition:transform .25s, background .25s;
    }
    .vp-faq-item.open .vp-faq-icon { transform:rotate(45deg); background:var(--brand); color:#fff; }
    .vp-faq-a {
      display:none; padding:14px 22px 18px;
      font-size:13px; color:var(--muted); line-height:1.75;
      border-top:1px solid var(--border);
    }
    .vp-faq-item.open .vp-faq-a { display:block; }

    /* CTA */
    .vp-cta-section {
      background:linear-gradient(135deg,#0a1a18 0%,#134e4a 55%,#0891b2 100%);
      padding:72px 24px; text-align:center; position:relative; overflow:hidden;
    }
    .vp-cta-section::before {
      content:''; position:absolute; top:-60px; right:-60px;
      width:320px; height:320px; border-radius:50%;
      background:rgba(6,182,212,.12); pointer-events:none;
    }
    .vp-cta-section::after {
      content:''; position:absolute; bottom:-80px; left:-40px;
      width:240px; height:240px; border-radius:50%;
      background:rgba(15,118,110,.18); pointer-events:none;
    }
    .vp-cta-h   { font-family:var(--font-hd); font-size:clamp(26px,4vw,42px); font-weight:800; color:#fff; margin-bottom:14px; }
    .vp-cta-sub { font-size:16px; color:rgba(255,255,255,.65); max-width:560px; margin:0 auto 32px; line-height:1.65; }
    .vp-cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
    .vp-btn {
      display:inline-flex; align-items:center; gap:8px;
      padding:14px 32px; border-radius:10px;
      font-size:15px; font-weight:700; text-decoration:none;
      transition:transform .18s, box-shadow .18s; cursor:pointer; border:none;
    }
    .vp-btn:hover { transform:translateY(-2px); box-shadow:0 12px 32px rgba(0,0,0,.25); text-decoration:none; }
    .vp-btn-primary { background:var(--brand); color:#fff; }
    .vp-btn-white   { background:#fff; color:var(--dark); }
    .vp-cta-note { color:rgba(255,255,255,.4); font-size:12px; margin-top:20px; }

    /* badge pills */
    .vp-badge { font-size:10px; font-weight:700; padding:2px 9px; border-radius:99px; }
    .badge-free { background:#dcfce7; color:#15803d; }
    .badge-inc  { background:#f0fdfa; color:#0f766e; }
    .badge-pop  { background:#ccfbf1; color:#0f766e; }
    .badge-add  { background:#fff7ed; color:#c2410c; }

    /* divider */
    .vp-divider { height:1px; background:linear-gradient(to right,transparent,var(--border) 20%,var(--border) 80%,transparent); }

    @media(max-width:540px){ .vp-section{padding:48px 16px;} .vp-stat-num{font-size:26px;} }
  </style>
</head>
<body>

<div id="preloder"><div class="loader"></div></div>
<?php include 'header.php'; ?>

<!-- H1 — Primary SEO Heading (accessible, screen-reader visible) -->
<h1 style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">Reseller Hosting India — WHM cPanel White Label Hosting Business by SkyServer Cloud</h1>

<!-- Breadcrumb -->
<div class="breadcrumb-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="breadcrumb__option">
          <a href="./index.php" title="SkyServer Home - Web Hosting India"><span class="fa fa-home" aria-hidden="true"></span> Home</a>
          <span>Reseller Hosting</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════ PRICING ═══════ -->
<section class="hosting-section spad">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="section-title"><h2>Reseller Hosting Plans — India</h2></div>
        <section>
          <link rel="stylesheet" href="https://api.hdmedianetwork.in/sky_cdn/pricing/pricing.css">
          <script src="https://api.hdmedianetwork.in/sky_cdn/pricing/pricing.js?gid=6" defer></script>
          <section class="prc-section">
            <div class="container">
              <div class="prc-head">
                <div class="prc-head-left">
                  <span id="planTag" class="hidden"></span>
                  <h2>Choose Your Plan</h2>
                </div>
                <div class="prc-toggle">
                  <label class="active" id="lblMonthly">Monthly <input type="radio" id="monthly" name="billing" checked></label>
                  <label id="lblYearly">Yearly <input type="radio" id="yearly" name="billing"></label>
                </div>
              </div>
              <div id="plansLoading" class="prc-loading">Loading plans, please wait…</div>
              <div class="prc-grid" id="monthlyPlans"></div>
              <div class="prc-grid prc-hidden" id="yearlyPlans"></div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ STATS BAR ═══════ -->
<div class="vp-stats">
  <div class="vp-stats-inner">
    <div class="vp-stat-item">
      <div class="vp-stat-num">99.<span>9%</span></div>
      <div class="vp-stat-lbl">Uptime SLA Guaranteed</div>
    </div>
    <div class="vp-stat-item">
      <div class="vp-stat-num">500<span>+</span></div>
      <div class="vp-stat-lbl">Active Reseller Partners</div>
    </div>
    <div class="vp-stat-item">
      <div class="vp-stat-num">24<span>/7</span></div>
      <div class="vp-stat-lbl">Expert Support</div>
    </div>
    <div class="vp-stat-item">
      <div class="vp-stat-num">100<span>%</span></div>
      <div class="vp-stat-lbl">White Label Control</div>
    </div>
  </div>
</div>

<!-- ═══════ FEATURES ═══════ -->
<section class="vp-section" style="background:#f8fafc;">
  <div class="vp-wrap">
    <div class="vp-center" style="margin-bottom:44px;">
      <span class="vp-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        Everything Included
      </span>
      <h2 class="vp-h2">Everything You Need to <span>Run a Hosting Business</span></h2>
      <p class="vp-lead">SkyServer Reseller Hosting is built for web designers, developers, and agencies who want to sell hosting under their own brand — without managing servers.</p>
    </div>
    <div class="vp-features-grid">

      <div class="vp-feat-card">
        <div class="vp-feat-icon" style="background:#f0fdfa;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div class="vp-feat-title">WHM + cPanel Included</div>
        <div class="vp-feat-desc">Full WebHost Manager access to create and manage all client accounts. Each client gets their own cPanel — industry standard, trusted worldwide.</div>
      </div>

      <div class="vp-feat-card">
        <div class="vp-feat-icon" style="background:#ecfdf5;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <div class="vp-feat-title">100% White Label Branding</div>
        <div class="vp-feat-desc">Set your own company name, logo, and nameservers. Your clients will never see SkyServer — it is 100% your brand, your identity, your business.</div>
      </div>

      <div class="vp-feat-card">
        <div class="vp-feat-icon" style="background:#eff6ff;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <div class="vp-feat-title">NVMe SSD Storage</div>
        <div class="vp-feat-desc">All reseller plans run on Gen4 NVMe SSDs — delivering blazing-fast load times for all your clients' websites hosted under your brand.</div>
      </div>

      <div class="vp-feat-card">
        <div class="vp-feat-icon" style="background:#fff7ed;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div class="vp-feat-title">DDoS Protection on All Accounts</div>
        <div class="vp-feat-desc">Every hosting account under your reseller plan is protected by built-in DDoS mitigation — keeping all your clients' sites online and secure.</div>
      </div>

      <div class="vp-feat-card">
        <div class="vp-feat-icon" style="background:#f0fdf4;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803d" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <div class="vp-feat-title">Free SSL for All Client Sites</div>
        <div class="vp-feat-desc">Every website hosted on your reseller account gets a free Let's Encrypt SSL certificate — auto-renewing, browser-trusted, zero extra cost.</div>
      </div>

      <div class="vp-feat-card">
        <div class="vp-feat-icon" style="background:#fdf4ff;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="vp-feat-title">Sell at Your Own Price</div>
        <div class="vp-feat-desc">You set your own pricing for client plans. Buy wholesale from SkyServer and sell at any markup — you keep 100% of the profit difference.</div>
      </div>

      <div class="vp-feat-card">
        <div class="vp-feat-icon" style="background:#f0fdfa;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <div class="vp-feat-title">WHMCS Compatible</div>
        <div class="vp-feat-desc">Fully compatible with WHMCS for automated billing, invoicing, client management, and support tickets — run your hosting business on autopilot.</div>
      </div>

      <div class="vp-feat-card">
        <div class="vp-feat-icon" style="background:#fff1f2;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <div class="vp-feat-title">India Data Centers</div>
        <div class="vp-feat-desc">Hosted in Mumbai and Delhi Tier-3 data centers. Your clients' websites load fast for Indian visitors — typically under 5ms latency.</div>
      </div>

      <div class="vp-feat-card">
        <div class="vp-feat-icon" style="background:#fffbeb;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="vp-feat-title">Unlimited Client Accounts</div>
        <div class="vp-feat-desc">No cap on the number of accounts you can create. Host as many clients as your plan's disk space and bandwidth allow — scale freely.</div>
      </div>

    </div>
  </div>
</section>

<!-- ═══════ HOW IT WORKS ═══════ -->
<section class="vp-section" style="background:#fff;">
  <div class="vp-wrap">
    <div class="vp-center" style="margin-bottom:44px;">
      <span class="vp-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        How It Works
      </span>
      <h2 class="vp-h2">Start Your Hosting Business in <span>4 Simple Steps</span></h2>
      <p class="vp-lead">No technical server knowledge needed. SkyServer handles all the infrastructure — you focus on growing your client base.</p>
    </div>
    <div class="vp-steps">
      <div class="vp-step-card">
        <div class="vp-step-num">1</div>
        <div class="vp-step-title">Choose a Reseller Plan</div>
        <div class="vp-step-desc">Pick the disk space and bandwidth that suits your expected number of clients. You can upgrade anytime as you grow.</div>
      </div>
      <div class="vp-step-card">
        <div class="vp-step-num">2</div>
        <div class="vp-step-title">Set Your Brand</div>
        <div class="vp-step-desc">Configure your own nameservers, company name, and logo inside WHM. Your brand is front and center — SkyServer stays invisible.</div>
      </div>
      <div class="vp-step-card">
        <div class="vp-step-num">3</div>
        <div class="vp-step-title">Create Client Packages</div>
        <div class="vp-step-desc">Design hosting packages with the resources you want — disk, bandwidth, email accounts — and set your own selling price per package.</div>
      </div>
      <div class="vp-step-card">
        <div class="vp-step-num">4</div>
        <div class="vp-step-title">Sell and Profit</div>
        <div class="vp-step-desc">Add clients via WHM or WHMCS, collect payments at your price, and pocket the difference. SkyServer handles all server-level support.</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ WHO IS IT FOR ═══════ -->
<section class="vp-section" style="background:#f8fafc;">
  <div class="vp-wrap">
    <div class="vp-center" style="margin-bottom:44px;">
      <span class="vp-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Who Is It For
      </span>
      <h2 class="vp-h2">Perfect For <span>These Professionals</span></h2>
      <p class="vp-lead">Reseller hosting is ideal for anyone who builds or manages websites for others and wants to add a steady recurring income stream.</p>
    </div>
    <div class="vp-usecase-grid">
      <div class="vp-usecase-card">
        <div class="vp-usecase-icon" style="background:#f0fdfa;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <div class="vp-usecase-title">Web Developers</div>
        <div class="vp-usecase-desc">Build sites for clients and host them all under your own brand. Add a monthly hosting fee on top of your development charges.</div>
      </div>
      <div class="vp-usecase-card">
        <div class="vp-usecase-icon" style="background:#eff6ff;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
        <div class="vp-usecase-title">Web Design Agencies</div>
        <div class="vp-usecase-desc">Manage all client websites from a single WHM dashboard. Offer hosting as a value-added service and build a predictable monthly revenue.</div>
      </div>
      <div class="vp-usecase-card">
        <div class="vp-usecase-icon" style="background:#fff7ed;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div class="vp-usecase-title">Digital Marketing Agencies</div>
        <div class="vp-usecase-desc">Host client landing pages and websites yourself. Control performance, uptime, and security — deliver better results for your campaigns.</div>
      </div>
      <div class="vp-usecase-card">
        <div class="vp-usecase-icon" style="background:#f5f3ff;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        </div>
        <div class="vp-usecase-title">Entrepreneurs</div>
        <div class="vp-usecase-desc">Start a hosting company from scratch with zero server management. Resell branded hosting plans and build a scalable online business.</div>
      </div>
      <div class="vp-usecase-card">
        <div class="vp-usecase-icon" style="background:#f0fdf4;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </div>
        <div class="vp-usecase-title">IT Institutes &amp; Trainers</div>
        <div class="vp-usecase-desc">Provide hosting to students and trainees under your institute brand. A professional finishing touch for every course you deliver.</div>
      </div>
      <div class="vp-usecase-card">
        <div class="vp-usecase-icon" style="background:#fff1f2;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        </div>
        <div class="vp-usecase-title">Small Hosting Companies</div>
        <div class="vp-usecase-desc">Launch or expand a web hosting business without investing in physical servers. Let SkyServer be your silent infrastructure partner.</div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ COMPARISON TABLE ═══════ -->
<div class="vp-divider"></div>
<section class="vp-section" style="background:#fff;">
  <div class="vp-wrap">
    <div class="vp-center" style="margin-bottom:40px;">
      <span class="vp-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        Comparison
      </span>
      <h2 class="vp-h2">Reseller vs Shared vs <span>VPS Hosting</span></h2>
      <p class="vp-lead">Understand which hosting type is right for your needs — especially if you plan to host multiple client websites.</p>
    </div>
    <div class="vp-table-wrap">
      <table class="vp-compare-table" summary="Comparison of Reseller Hosting vs Shared Hosting vs VPS Hosting features and pricing">
        <thead>
          <tr>
            <th>Feature</th>
            <th style="background:#134e4a;">SkyServer Reseller</th>
            <th>Shared Hosting</th>
            <th>VPS Hosting</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Manage Multiple Clients</strong></td><td class="col-sky hl"><span class="tick">&#10003;</span> Yes — via WHM</td><td><span class="cross">&#10007;</span> No</td><td><span class="cross">&#10007;</span> Manual only</td></tr>
          <tr><td><strong>White Label / Own Brand</strong></td><td class="col-sky"><span class="tick">&#10003;</span> Full white label</td><td><span class="cross">&#10007;</span> No</td><td><span class="cross">&#10007;</span> No</td></tr>
          <tr><td><strong>cPanel for Each Client</strong></td><td class="col-sky"><span class="tick">&#10003;</span> Included</td><td>One account only</td><td>Manual setup</td></tr>
          <tr><td><strong>Storage Type</strong></td><td class="col-sky hl">NVMe SSD</td><td>SATA / Slow HDD</td><td>NVMe SSD</td></tr>
          <tr><td><strong>Free SSL for All Sites</strong></td><td class="col-sky"><span class="tick">&#10003;</span> All accounts</td><td><span class="tick">&#10003;</span> One site</td><td>Manual install</td></tr>
          <tr><td><strong>WHMCS Billing Support</strong></td><td class="col-sky"><span class="tick">&#10003;</span> Compatible</td><td><span class="cross">&#10007;</span> No</td><td>Self-managed</td></tr>
          <tr><td><strong>Custom Nameservers</strong></td><td class="col-sky"><span class="tick">&#10003;</span> Yes</td><td><span class="cross">&#10007;</span> No</td><td><span class="tick">&#10003;</span> Yes</td></tr>
          <tr><td><strong>Price (Starting)</strong></td><td class="col-sky hl">&#8377;399 / month</td><td>&#8377;49 / month</td><td>&#8377;299 / month</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- ═══════ WHY SKYSERVER ═══════ -->
<section class="vp-section" style="background:#f8fafc;">
  <div class="vp-wrap">
    <div class="vp-center" style="margin-bottom:44px;">
      <span class="vp-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        Why SkyServer
      </span>
      <h2 class="vp-h2">Why 500+ Resellers Choose <span>SkyServer</span></h2>
      <p class="vp-lead">We are not just a server provider — we are your silent backend partner, making sure your hosting business runs flawlessly.</p>
    </div>
    <div class="vp-why-grid">
      <div class="vp-why-item">
        <div class="vp-why-num">01</div>
        <div>
          <div class="vp-why-title">India-Based 24/7 Support</div>
          <div class="vp-why-text">Our engineers are in India and available round the clock. When your clients have issues, we resolve them fast — average response under 5 minutes.</div>
        </div>
      </div>
      <div class="vp-why-item">
        <div class="vp-why-num">02</div>
        <div>
          <div class="vp-why-title">Transparent Pricing — No Hidden Fees</div>
          <div class="vp-why-text">No setup fees, no hidden charges. The price you see is what you pay every billing cycle — so your business margins stay predictable.</div>
        </div>
      </div>
      <div class="vp-why-item">
        <div class="vp-why-num">03</div>
        <div>
          <div class="vp-why-title">99.9% Uptime SLA</div>
          <div class="vp-why-text">Backed by a written SLA. Tier-3 data centers in Mumbai and Delhi with redundant power, cooling, and 10Gbps network links keep everything up.</div>
        </div>
      </div>
      <div class="vp-why-item">
        <div class="vp-why-num">04</div>
        <div>
          <div class="vp-why-title">Pay in INR — UPI, Cards, Net Banking</div>
          <div class="vp-why-text">No dollar conversion. Pay in rupees using UPI, debit/credit cards, or net banking. Designed for Indian resellers and businesses.</div>
        </div>
      </div>
      <div class="vp-why-item">
        <div class="vp-why-num">05</div>
        <div>
          <div class="vp-why-title">Instant Account Provisioning</div>
          <div class="vp-why-text">New client accounts are live within 60 seconds of creation in WHM. No waiting, no manual setup — your clients get access immediately.</div>
        </div>
      </div>
      <div class="vp-why-item">
        <div class="vp-why-num">06</div>
        <div>
          <div class="vp-why-title">Scalable as You Grow</div>
          <div class="vp-why-text">Start small and upgrade anytime. As your client base grows, simply move to a higher reseller plan — all data migrates with zero downtime.</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ TESTIMONIALS ═══════ -->
<section class="vp-section" style="background:#fff;">
  <div class="vp-wrap">
    <div class="vp-center" style="margin-bottom:44px;">
      <span class="vp-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        Reseller Reviews
      </span>
      <h2 class="vp-h2">What Our <span>Reseller Partners Say</span></h2>
      <p class="vp-lead">Real feedback from web designers, developers, and agencies running their hosting business on SkyServer.</p>
    </div>
    <div class="vp-testi-grid">
      <div class="vp-testi-card">
        <div class="vp-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="vp-testi-text">"Started with 10 clients, now managing 80+ under my own brand. SkyServer's WHM is seamless and support has never let me down in 3 years."</div>
        <div class="vp-testi-author">
          <div class="vp-testi-avatar">AK</div>
          <div><div class="vp-testi-name">Amit Kaur</div><div class="vp-testi-role">Web Design Agency Owner, Chandigarh</div></div>
        </div>
      </div>
      <div class="vp-testi-card">
        <div class="vp-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="vp-testi-text">"The white-label setup was done in under an hour. My clients think I run my own data center — SkyServer's infrastructure does all the heavy lifting."</div>
        <div class="vp-testi-author">
          <div class="vp-testi-avatar">RN</div>
          <div><div class="vp-testi-name">Rajan Nair</div><div class="vp-testi-role">Freelance Developer, Kochi</div></div>
        </div>
      </div>
      <div class="vp-testi-card">
        <div class="vp-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="vp-testi-text">"NVMe speed means my clients' WordPress sites score 90+ on PageSpeed. That alone justifies the reseller hosting cost — clients are very happy."</div>
        <div class="vp-testi-author">
          <div class="vp-testi-avatar">SP</div>
          <div><div class="vp-testi-name">Sneha Pillai</div><div class="vp-testi-role">WordPress Developer, Pune</div></div>
        </div>
      </div>
      <div class="vp-testi-card">
        <div class="vp-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="vp-testi-text">"WHMCS integration was plug-and-play. Billing is fully automated now. I spend zero time on invoicing and my reseller business basically runs itself."</div>
        <div class="vp-testi-author">
          <div class="vp-testi-avatar">MR</div>
          <div><div class="vp-testi-name">Mahesh Rao</div><div class="vp-testi-role">IT Services Provider, Hyderabad</div></div>
        </div>
      </div>
      <div class="vp-testi-card">
        <div class="vp-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="vp-testi-text">"Best decision I made — adding hosting to my digital agency. SkyServer India servers mean fast sites for my Indian clients. Revenue up 40% this year."</div>
        <div class="vp-testi-author">
          <div class="vp-testi-avatar">DM</div>
          <div><div class="vp-testi-name">Divya Menon</div><div class="vp-testi-role">Digital Marketing Agency, Bangalore</div></div>
        </div>
      </div>
      <div class="vp-testi-card">
        <div class="vp-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="vp-testi-text">"Upgraded from shared to reseller hosting — now managing 35 student accounts for my IT training institute. Setup was simple and support is always available."</div>
        <div class="vp-testi-author">
          <div class="vp-testi-avatar">VT</div>
          <div><div class="vp-testi-name">Vivek Tiwari</div><div class="vp-testi-role">IT Trainer, Indore</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ TRUST BADGES ═══════ -->
<div style="background:#f8fafc;padding:32px 24px;">
  <div style="max-width:1160px;margin:0 auto;">
    <div class="vp-trust-row">
      <div class="vp-trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        WHM + cPanel Included
      </div>
      <div class="vp-trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        100% White Label
      </div>
      <div class="vp-trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        Free SSL All Accounts
      </div>
      <div class="vp-trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        DDoS Protected
      </div>
      <div class="vp-trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        India Data Center
      </div>
      <div class="vp-trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
        Pay in INR / UPI
      </div>
      <div class="vp-trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        NVMe SSD Speed
      </div>
      <div class="vp-trust-badge">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        24/7 Support
      </div>
    </div>
  </div>
</div>

<!-- ═══════ SEO CONTENT ═══════ -->
<section class="vp-section" style="background:#fff;">
  <div class="vp-wrap">
    <div class="vp-center" style="margin-bottom:44px;">
      <span class="vp-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        Learn More
      </span>
      <h2 class="vp-h2">Understanding <span>Reseller Hosting in India</span></h2>
    </div>
    <div class="vp-seo-grid">
      <div class="vp-seo-card">
        <h3>What is Reseller Hosting?</h3>
        <p>Reseller hosting allows you to purchase a bulk hosting package from SkyServer and divide it into smaller hosting plans to sell to your own clients. You get WHM (WebHost Manager) to manage all client accounts, and each client receives their own cPanel login. Your clients never see SkyServer — everything operates under your brand with your own company name, logo, and nameservers.</p>
      </div>
      <div class="vp-seo-card">
        <h3>How Much Can You Earn from Reseller Hosting?</h3>
        <p>Earnings depend on how many clients you onboard and your pricing strategy. If SkyServer charges you ₹399/month for a reseller plan and you host 20 clients at ₹150/month each, you earn ₹3,000/month — a profit of ₹2,601/month from a single plan. As you grow to 50, 100, or 200 clients, revenue scales proportionally. Many Indian resellers earn ₹20,000–₹1,00,000+ per month from reseller hosting alone.</p>
      </div>
      <div class="vp-seo-card">
        <h3>What is WHM and Why Do You Need It?</h3>
        <p>WHM (WebHost Manager) is the reseller's control panel that sits above cPanel. It lets you create, manage, suspend, and delete hosting accounts for all your clients from a single dashboard. You can set resource limits per account, create custom hosting packages, configure nameservers, view server resource usage, and manage SSL certificates — all without logging into each individual client account.</p>
      </div>
      <div class="vp-seo-card">
        <h3>Reseller Hosting vs Starting a VPS Business</h3>
        <p>A VPS gives you a single server environment — ideal for one business or one technical user. Reseller hosting is purpose-built for selling to multiple clients. With reseller hosting, WHM handles all multi-account management automatically. There is no need to manually configure web servers, PHP, or MySQL for each client. For anyone building a hosting business with 5–500 clients, reseller hosting is far easier and more cost-effective than managing a VPS.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════ FAQ ═══════ -->
<section class="vp-section" style="background:#f8fafc;">
  <div class="vp-wrap">
    <div class="vp-center" style="margin-bottom:44px;">
      <span class="vp-label">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        FAQ
      </span>
      <h2 class="vp-h2">Frequently Asked <span>Questions</span></h2>
      <p class="vp-lead">Everything you need to know before starting your reseller hosting business with SkyServer.</p>
    </div>
    <div class="vp-faq-list">

      <div class="vp-faq-item">
        <div class="vp-faq-q" onclick="toggleFaq(this)">
          What is Reseller Hosting and how does it work?
          <span class="vp-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </div>
        <div class="vp-faq-a">Reseller hosting lets you buy server resources in bulk from SkyServer and resell them to your own clients as branded hosting plans. You manage all accounts through WHM, each client gets cPanel access, and SkyServer handles all server maintenance, security, and hardware.</div>
      </div>

      <div class="vp-faq-item">
        <div class="vp-faq-q" onclick="toggleFaq(this)">
          Can I use my own brand name and domain with reseller hosting?
          <span class="vp-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </div>
        <div class="vp-faq-a">Yes, completely. SkyServer reseller hosting is 100% white-label. You configure your own nameservers (e.g., ns1.yourdomain.com), set your company name and logo inside WHM, and your clients will never see any reference to SkyServer. It is your brand entirely.</div>
      </div>

      <div class="vp-faq-item">
        <div class="vp-faq-q" onclick="toggleFaq(this)">
          Do I need technical knowledge to manage reseller hosting?
          <span class="vp-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </div>
        <div class="vp-faq-a">Basic computer skills and some familiarity with web hosting are helpful, but deep technical server knowledge is not required. WHM and cPanel are designed for non-technical users. SkyServer handles all server-level tasks — you only manage client accounts through the provided dashboard.</div>
      </div>

      <div class="vp-faq-item">
        <div class="vp-faq-q" onclick="toggleFaq(this)">
          Is WHMCS included or available with reseller plans?
          <span class="vp-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </div>
        <div class="vp-faq-a">WHMCS is available as an add-on with SkyServer reseller plans. It automates billing, invoicing, client registration, support tickets, and account provisioning. Once set up, your clients can sign up, pay, and get hosting access automatically — without any manual work from your side.</div>
      </div>

      <div class="vp-faq-item">
        <div class="vp-faq-q" onclick="toggleFaq(this)">
          How many client accounts can I create?
          <span class="vp-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </div>
        <div class="vp-faq-a">There is no hard limit on the number of accounts. You can create as many client accounts as your plan's total disk space and bandwidth allow. If you need more resources, simply upgrade your reseller plan and continue scaling your business.</div>
      </div>

      <div class="vp-faq-item">
        <div class="vp-faq-q" onclick="toggleFaq(this)">
          Can I upgrade my reseller plan without losing client data?
          <span class="vp-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </div>
        <div class="vp-faq-a">Yes. All SkyServer reseller plans are fully scalable. You can upgrade disk space, bandwidth, and account limits at any time from your client area. All existing client accounts, their files, databases, and email remain completely intact during the upgrade process.</div>
      </div>

      <div class="vp-faq-item">
        <div class="vp-faq-q" onclick="toggleFaq(this)">
          What payment methods are accepted?
          <span class="vp-faq-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
        </div>
        <div class="vp-faq-a">We accept all major Indian payment methods — UPI (PhonePe, GPay, Paytm), debit and credit cards (Visa, Mastercard, RuPay), net banking, and digital wallets. All payments are in INR with no dollar conversion needed. There are no setup fees or hidden charges on any reseller plan.</div>
      </div>

    </div>
  </div>
</section>

<!-- ═══════ CTA ═══════ -->
<section class="vp-cta-section">
  <div style="position:relative;z-index:1;">
    <h2 class="vp-cta-h">Ready to Start Your Hosting Business?</h2>
    <p class="vp-cta-sub">Join 500+ reseller partners already running their hosting brand on SkyServer. Start earning recurring revenue today — starting at just &#8377;399/month.</p>
    <div class="vp-cta-btns">
      <a href="https://skyserver.in/order" class="vp-btn vp-btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        Start Reselling Now
      </a>
      <a href="tel:+917509683151" class="vp-btn vp-btn-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a1a18" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Talk to an Expert
      </a>
    </div>
    <p class="vp-cta-note">No setup fee &nbsp;&middot;&nbsp; Cancel anytime &nbsp;&middot;&nbsp; Instant deployment</p>
  </div>
</section>

<?php include 'footer.php'; ?>

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.slicknav.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/main.js"></script>
<script src="https://api.hdmedianetwork.in/sky_cdn/skystore.js"></script>
<script>
  function toggleFaq(el) {
    var item = el.parentElement;
    document.querySelectorAll('.vp-faq-item').forEach(function(i){ if(i!==item) i.classList.remove('open'); });
    item.classList.toggle('open');
  }
</script>
</body>
</html>