<?php
include 'config.php';

if (!isset($_GET['city'])) {
  header("HTTP/1.0 404 Not Found");
  exit;
}

$slug = $db->real_escape_string($_GET['city']);

/* ===== Try City ===== */
$cityQ = $db->query("
  SELECT c.*, s.state_name, s.state_slug
  FROM cities c
  JOIN states s ON s.id = c.state_id
  WHERE c.city_slug = '$slug'
");

$isCity = $cityQ->num_rows > 0;

/* ===== Else Try State ===== */
if (!$isCity) {
  $stateQ = $db->query("SELECT * FROM states WHERE state_slug = '$slug'");
  if ($stateQ->num_rows === 0) {
    header("HTTP/1.0 404 Not Found");
    exit;
  }
  $state = $stateQ->fetch_assoc();
  $pageType = 'state';

  $locationName = $state['state_name'];
  $canonical = "https://skyserver.in/page/vps-hosting/{$state['state_slug']}";
} else {
  $city = $cityQ->fetch_assoc();
  $pageType = 'city';

  $locationName = $city['city_name'] . ", " . $city['state_name'];
  $canonical = "https://skyserver.in/page/vps-hosting/{$city['city_slug']}";
}

/* ===== SEO ===== */
$pageTitle = "VPS Hosting in {$locationName} | SkyServer Cloud";
$pageDesc  = "Fast & secure VPS hosting in {$locationName} with NVMe SSD, cPanel, full root access, free SSL and 24/7 expert support.";
$keywords  = "VPS hosting {$locationName}, NVMe VPS, Linux VPS, Windows VPS, Cloud VPS India, Managed VPS hosting, cPanel VPS, SkyServer VPS";
?>
<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title><?= $pageTitle ?></title>
<meta name="description" content="<?= $pageDesc ?>">
<meta name="keywords" content="<?= $keywords ?>">
<meta name="robots" content="index, follow">
<link rel="canonical" href="<?= $canonical ?>">

<link rel="icon" href="/img/ico.png">

<link rel="stylesheet" href="https://skyserver.in/css/bootstrap.min.css">
<link rel="stylesheet" href="https://skyserver.in/css/style.css">

<!-- ================= CARDS CSS (FIXED) ================= -->
<style>
.hero-city{
  padding:70px 0;
  text-align:center;
}
.hero-city h1{font-weight:800}
.hero-city p{
  max-width:900px;
  margin:auto;
  color:#555;
}

.section-gap{
  padding:70px 0;
}

.feature-card{
  background:#ffffff;
  border-radius:18px;
  padding:35px 28px;
  text-align:center;
  height:100%;
  box-shadow:0 15px 35px rgba(0,0,0,0.08);
  transition:all .3s ease;
}
.feature-card:hover{
  transform:translateY(-8px);
  box-shadow:0 22px 45px rgba(0,0,0,0.12);
}

.icon-circle{
  width:70px;
  height:70px;
  border-radius:50%;
  background:linear-gradient(135deg,#ede9ff,#f7f5ff);
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0 auto 20px;
}
.icon-circle svg{
  width:30px;
  height:30px;
  stroke:#4b2bbd;
}

.feature-card h5{
  font-weight:700;
  margin-bottom:10px;
}
.feature-card p{
  color:#666;
  font-size:15px;
  line-height:1.6;
}
</style>

<!-- ================= SCHEMA ================= -->
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"WebHostingService",
  "name":"SkyServer VPS Hosting",
  "url":"<?= $canonical ?>",
  "serviceType":"VPS Hosting",
  "provider":{
    "@type":"Organization",
    "name":"SkyServer Cloud Technologies",
    "url":"https://skyserver.in/"
  },
  "areaServed":"<?= $locationName ?>"
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Product",
  "name":"SkyServer VPS Hosting",
  "aggregateRating":{
    "@type":"AggregateRating",
    "ratingValue":"4.8",
    "reviewCount":"120"
  }
}
</script>

</head>
<body>

<?php include '../header.php'; ?>

<!-- HERO -->
<section class="hero-city">
  <div class="container">
    <h1>VPS Hosting in <?= $locationName ?></h1>
    <p>
      High-performance VPS hosting designed for speed, security, and scalability.
      Ideal for businesses, developers, and startups in <?= $locationName ?>.
    </p>
  </div>
</section>

<!-- PRICING -->
<link rel="stylesheet" href="https://api.hdmedianetwork.in/sky_cdn/pricing/pricing.css">
<script src="https://api.hdmedianetwork.in/sky_cdn/pricing/pricing.js?gid=5" defer></script>

<section class="section-gap">
  <div class="container">
    <h2 class="mb-4 text-center">Choose Your VPS Plan</h2>
    <div id="plansLoading">Loading plans…</div>
    <div id="monthlyPlans" class="prc-grid"></div>
    <div id="yearlyPlans" class="prc-grid prc-hidden"></div>
  </div>
</section>

<!-- WHY CHOOSE (CARDS FIXED) -->
<section class="section-gap bg-light">
  <div class="container">

    <div class="text-center mb-5">
      <h2>Why Choose SkyServer?</h2>
      <p class="mt-3">
        Enterprise-grade VPS infrastructure with NVMe SSD and expert support.
      </p>
    </div>

    <div class="row">

      <div class="col-md-4 mb-4">
        <div class="feature-card">
          <div class="icon-circle">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16"/>
            </svg>
          </div>
          <h5>NVMe SSD Storage</h5>
          <p>Ultra-fast NVMe SSD storage for maximum performance.</p>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="feature-card">
          <div class="icon-circle">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z"/>
            </svg>
          </div>
          <h5>99.9% Uptime SLA</h5>
          <p>Highly available infrastructure backed by SLA.</p>
        </div>
      </div>

      <div class="col-md-4 mb-4">
        <div class="feature-card">
          <div class="icon-circle">
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.6 0 3-1.4 3-3s-1.4-3-3-3-3 1.4-3 3 1.4 3 3 3zM5.5 20a6.5 6.5 0 0113 0"/>
            </svg>
          </div>
          <h5>Full Root Access</h5>
          <p>Complete administrative control over your VPS.</p>
        </div>
      </div>

    </div>
  </div>
</section>




  <section style="padding:60px 20px;font-family:Arial,Helvetica,sans-serif;background:#ffffff;">

  <!-- Heading -->
  <h2 style="text-align:center;font-size:32px;font-weight:700;color:#4b2bbd;margin-bottom:10px;">
    Choose Your Control Panel
  </h2>

  <p style="text-align:center;max-width:900px;margin:0 auto 45px;font-size:15px;color:#555;line-height:1.6;">
    SkyServer offers flexible control panel options with Indian VPS. Choose what suits your workflow, budget, and hosting needs.
  </p>

  <!-- Control Panels -->
  <div style="display:flex;flex-wrap:wrap;gap:28px;justify-content:center;margin-bottom:70px;">

    <!-- aaPanel -->
    <div style="width:320px;background:#f9f9ff;border-radius:14px;padding:20px;box-shadow:0 12px 28px rgba(0,0,0,0.08);text-align:center;">
      <h3 style="color:#4b2bbd;font-size:18px;margin-bottom:12px;">
        1. Free Control Panel (aaPanel)
      </h3>
      <img src="https://www.aapanel.com/static/new/images/index/home.png"
           alt="aaPanel Control Panel"
           style="width:100%;border-radius:10px;">
    </div>

    <!-- Plesk -->
    <div style="width:320px;background:#f9f9ff;border-radius:14px;padding:20px;box-shadow:0 12px 28px rgba(0,0,0,0.08);text-align:center;">
      <h3 style="color:#4b2bbd;font-size:18px;margin-bottom:12px;">
        2. Plesk Control Panel
      </h3>
      <img src="https://www.plesk.com/wp-content/uploads/2017/03/developers_title2-1024x626.png"
           alt="Plesk Control Panel"
           style="width:100%;border-radius:10px;">
    </div>

    <!-- cPanel WHM -->
    <div style="width:320px;background:#f9f9ff;border-radius:14px;padding:20px;box-shadow:0 12px 28px rgba(0,0,0,0.08);text-align:center;">
      <h3 style="color:#4b2bbd;font-size:18px;margin-bottom:12px;">
        3. cPanel & WHM
      </h3>
      <img src="https://www.cpanel.net/wp-content/uploads/2025/07/latest-Home-Hero-Image-1024x715.webp"
           alt="cPanel WHM"
           style="width:100%;border-radius:10px;">
    </div>

  </div>

  <!-- OS Section -->
  <h2 style="text-align:center;font-size:30px;font-weight:700;color:#4b2bbd;margin-bottom:10px;">
    Choice of Operating System
  </h2>

  <p style="text-align:center;max-width:900px;margin:0 auto 40px;font-size:15px;color:#555;">
    Deploy your VPS with popular Linux distributions or Windows OS with full root access on SkyServer.
  </p>

  <!-- OS Logos -->
  <div style="display:flex;flex-wrap:wrap;gap:22px;justify-content:center;">

    <!-- CentOS -->
    <div style="width:140px;padding:20px;border-radius:14px;text-align:center;box-shadow:0 8px 20px rgba(0,0,0,0.08);">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/centos/centos-original.svg" style="width:42px;">
      <div style="margin-top:10px;font-weight:600;">CentOS</div>
    </div>

    <!-- Ubuntu -->
    <div style="width:140px;padding:20px;border-radius:14px;text-align:center;box-shadow:0 8px 20px rgba(0,0,0,0.08);">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" style="width:42px;">
      <div style="margin-top:10px;font-weight:600;">Ubuntu</div>
    </div>

    <!-- Fedora -->
    <div style="width:140px;padding:20px;border-radius:14px;text-align:center;box-shadow:0 8px 20px rgba(0,0,0,0.08);">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg" style="width:42px;">
      <div style="margin-top:10px;font-weight:600;">Fedora</div>
    </div>

    <!-- Debian -->
    <div style="width:140px;padding:20px;border-radius:14px;text-align:center;box-shadow:0 8px 20px rgba(0,0,0,0.08);">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" style="width:42px;">
      <div style="margin-top:10px;font-weight:600;">Debian</div>
    </div>

    <!-- SUSE -->
    <div style="width:140px;padding:20px;border-radius:14px;text-align:center;box-shadow:0 8px 20px rgba(0,0,0,0.08);">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opensuse/opensuse-original.svg" style="width:42px;">
      <div style="margin-top:10px;font-weight:600;">SUSE</div>
    </div>

    <!-- Windows -->
    <div style="width:140px;padding:20px;border-radius:14px;text-align:center;box-shadow:0 8px 20px rgba(0,0,0,0.08);">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" style="width:42px;">
      <div style="margin-top:10px;font-weight:600;">Windows</div>
    </div>

  </div>

</section>





    
<style>
/* ================= ROOT VARIABLES ================= */
:root{
  --cn_bg_clr:#0f1720;
  --cn_white_clr:#ffffff;
  --cn_ttl_clr:#0f1720;

  --cn_dflx:flex;
  --cn_dnone:none;
  --cn_relative_:relative;

  --cn_align_center:center;
  --cn_justify_center:center;
  --cn_txt_center:center;

  --cn_fw_bold:700;
  --cn_fw_medium:500;

  --cn_radius_6:6px;

  --server_location_gap:24px;
  --server_location_duration:35s;
  --server_location_scroll_start:0%;
  --server_location_scroll_end:-100%;
}

/* ================= SECTION ================= */
.cn-datacenter-area{
  background: radial-gradient(ellipse at bottom, #18222e, #0f1720);
  padding:80px 0 40px;
  overflow:hidden;
}

.cn-ttl-h2{
  color:#fff;
  font-size:42px;
  text-align:center;
  margin-bottom:15px;
}
.cn-sub-ttl{
  color:#cfd8e3;
  max-width:900px;
  margin:0 auto;
  text-align:center;
  font-size:16px;
  line-height:1.6;
}

/* ================= COUNTER ================= */
.cn-datacenter-counterbox{
  display:flex;
  justify-content:center;
  margin-top:50px;
  position:relative;
  z-index:2;
}

.cn-datacenter-round{
  height:160px;
  width:160px;
  border-radius:50%;
  background:#fff;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-shadow:0 20px 40px rgba(0,0,0,.35);
}

.cn-datacenter-counter{
  font-size:42px;
  font-weight:700;
  color:#0f1720;
}
.cn-datacenter-txt{
  font-size:15px;
  color:#555;
}

/* ================= MAP ================= */
.cn-datacenter-mapbox{
  position:relative;
  margin-top:-120px;
  text-align:center;
}
.cn-datacenter-mapbox img{
  max-width:100%;
  opacity:.9;
}

/* ================= MARQUEE ================= */
.cn-srvr-wrapper{
  max-width:1400px;
  margin:40px auto 0;
}

.cn-srvr-marquee{
  display:flex;
  overflow:hidden;
  mask-image:linear-gradient(to right,
    transparent,
    black 15%,
    black 85%,
    transparent
  );
}

.cn-marquee-group{
  display:flex;
  gap:24px;
  flex-shrink:0;
  min-width:100%;
  animation:scroll-x var(--server_location_duration) linear infinite;
}
.marquee-reverse .cn-marquee-group{
  animation-direction:reverse;
}

@keyframes scroll-x{
  from{transform:translateX(0);}
  to{transform:translateX(-100%);}
}

/* ================= LOCATION BOX ================= */
.cn-srvr-lctbox{
  display:flex;
  align-items:center;
  gap:12px;
  padding:10px 22px;
  border-radius:8px;
  background:linear-gradient(320deg,#293139,#121820);
  border:1px solid #2e3740;
}

.cn-srvr-name{
  color:#fff;
  font-size:15px;
  font-weight:500;
}

/* ================= MOBILE ================= */
@media(max-width:992px){
  .cn-datacenter-counterbox,
  .cn-datacenter-mapbox{display:none;}
}
</style>

<section class="cn-space cn-datacenter-area">
    <div class="container">
        <h2 class="cn-ttl-h2">World-Class Data Centers</h2>
        <p class="cn-sub-ttl">The worldwide located data centers apply the highest technologies for availability. These centers offer large, safe and highly stable environments for businesses small and large. Stay assured to receive the best performance and reliability from us.</p>
    </div>
    <div class="cn-datacenter-counterbox">
        <div class="cn-datacenter-round">
            <div class="cn-datacenter-counter">10+</div>
            <div class="cn-datacenter-txt">Locations</div>
        </div>
    </div>
    <div class="cn-datacenter-mapbox">
        <img loading="lazy" src="https://www.cantech.in//assets/images/data-centers-map.svg" alt="World-Class Data Centers | Cantech" title="World-Class Data Centers | Cantech">
    </div>
    <div class="cn-srvr-wrapper">
        <div class="cn-srvr-marquee marquee-reverse">
            <div class="cn-marquee-group">
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/india.svg" alt="India Flag | Cantech" title="India Flag | Cantech">
                    <span class="cn-srvr-name">India</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/usa.svg" alt="United States Flag | Cantech" title="United States Flag | Cantech">
                    <span class="cn-srvr-name">United States</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/uk.svg" alt="United Kingdom Flag | Cantech" title="United Kingdom Flag | Cantech">
                    <span class="cn-srvr-name">United Kingdom</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/canada.svg" alt="Canada Flag | Cantech" title="Canada Flag | Cantech">
                    <span class="cn-srvr-name">Canada</span>
                </div>
                 <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/germany.svg" alt="Germany Flag | Cantech" title="Germany Flag | Cantech">
                    <span class="cn-srvr-name">Germany</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/australia.svg" alt="Australia Flag | Cantech" title="Australia Flag | Cantech">
                    <span class="cn-srvr-name">Australia</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/france.svg" alt="France Flag | Cantech" title="France Flag | Cantech">
                    <span class="cn-srvr-name">France</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/dubai.svg" alt="UAE Flag | Cantech" title="UAE Flag | Cantech">
                    <span class="cn-srvr-name">Dubai (UAE)</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/singapore.svg" alt="Singapore Flag | Cantech" title="Singapore Flag | Cantech">
                    <span class="cn-srvr-name">Singapore</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/hong-kong.svg" alt="Hong Kong Flag | Cantech" title="Hong Kong Flag | Cantech">
                    <span class="cn-srvr-name">Hong Kong</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/netherlands.svg" alt="Netherlands Flag | Cantech" title="Netherlands Flag | Cantech">
                    <span class="cn-srvr-name">Netherlands</span>
                </div>
            </div>
            <div class="cn-marquee-group">
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/india.svg" alt="India Flag | Cantech" title="India Flag | Cantech">
                    <span class="cn-srvr-name">India</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/usa.svg" alt="United States Flag | Cantech" title="United States Flag | Cantech">
                    <span class="cn-srvr-name">United States</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/uk.svg" alt="United Kingdom Flag | Cantech" title="United Kingdom Flag | Cantech">
                    <span class="cn-srvr-name">United Kingdom</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/canada.svg" alt="Canada Flag | Cantech" title="Canada Flag | Cantech">
                    <span class="cn-srvr-name">Canada</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/germany.svg" alt="Germany Flag | Cantech" title="Germany Flag | Cantech">
                    <span class="cn-srvr-name">Germany</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/australia.svg" alt="Australia Flag | Cantech" title="Australia Flag | Cantech">
                    <span class="cn-srvr-name">Australia</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/france.svg" alt="France Flag | Cantech" title="France Flag | Cantech">
                    <span class="cn-srvr-name">France</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/dubai.svg" alt="UAE Flag | Cantech" title="UAE Flag | Cantech">
                    <span class="cn-srvr-name">Dubai (UAE)</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/singapore.svg" alt="Singapore Flag | Cantech" title="Singapore Flag | Cantech">
                    <span class="cn-srvr-name">Singapore</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/hong-kong.svg" alt="Hong Kong Flag | Cantech" title="Hong Kong Flag | Cantech">
                    <span class="cn-srvr-name">Hong Kong</span>
                </div>
                <div class="cn-srvr-lctbox">
                    <img loading="lazy" class="cn-srvr-flg" width="32" height="32" src="https://www.cantech.in//assets/images/location-flag/netherlands.svg" alt="Netherlands Flag | Cantech" title="Netherlands Flag | Cantech">
                    <span class="cn-srvr-name">Netherlands</span>
                </div>
            </div>
        </div>
    </div>

    </section>    
    
    
    
    
    <section style="padding:60px 0;background:#f8fafc;">
  <div style="max-width:1200px;margin:auto;padding:0 20px;">

    <!-- Heading -->
    <div style="text-align:center;margin-bottom:50px;">
      <h3 style="font-size:36px;font-weight:800;color:#1e293b;">
        Choose the <span style="color:#2563eb;">Right Solution</span>
      </h3>
      <p style="color:#64748b;margin-top:10px;">
        Select the perfect hosting plan for your needs
      </p>
    </div>

    <!-- Cards -->
    <div class="services-flex">

      <a href="./vps.php" class="service-card">
        <span class="badge blue">India Servers</span>
        <h5>VPS Servers</h5>
        <p>Fully managed virtual servers with high performance and security.</p>
      </a>

      <a href="./cloud.php" class="service-card">
        <span class="badge red">Best Seller</span>
        <h5>Cloud Hosting</h5>
        <p>Scale your website effortlessly with next-gen cloud infrastructure.</p>
      </a>

      <a href="./hosting.php" class="service-card">
        <span class="badge green">Budget Plan</span>
        <h5>Shared Hosting</h5>
        <p>Affordable and reliable hosting for small businesses & startups.</p>
      </a>

      <a href="./wordpress.php" class="service-card">
        <span class="badge yellow">Popular</span>
        <h5>WordPress Hosting</h5>
        <p>Optimized WordPress hosting with blazing speed & 1-click setup.</p>
      </a>

      <a href="./business.php" class="service-card">
        <span class="badge purple">High Power</span>
        <h5>Business Hosting</h5>
        <p>Powerful hosting for eCommerce & high-traffic websites.</p>
      </a>

      <a href="./reseller.php" class="service-card">
        <span class="badge pink">Earn Revenue</span>
        <h5>Reseller Hosting</h5>
        <p>Start your own hosting business and earn recurring revenue.</p>
      </a>

    </div>
  </div>
</section>



<style>
/* Layout */
.services-flex{
  display:flex;
  flex-wrap:wrap;
  gap:24px;
}

/* Card */
.service-card{
  width:calc(33.333% - 16px);
  background:#fff;
  border:1px solid #e2e8f0;
  border-radius:14px;
  padding:28px;
  text-decoration:none;
  color:#1e293b;
  position:relative;
  transition:.3s ease;
}

.service-card:hover{
  transform:translateY(-6px);
  box-shadow:0 12px 24px rgba(0,0,0,.1);
}

/* Text */
.service-card h5{
  font-size:20px;
  margin:0 0 10px;
}
.service-card p{
  font-size:14px;
  color:#64748b;
  line-height:1.6;
}

/* Badge */
.badge{
  position:absolute;
  top:14px;
  right:14px;
  font-size:11px;
  padding:6px 12px;
  border-radius:20px;
  font-weight:600;
  color:#fff;
  text-transform:uppercase;
}

/* Badge Colors */
.blue{background:#2563eb}
.red{background:#dc2626}
.green{background:#059669}
.yellow{background:#eab308;color:#000}
.purple{background:#7c3aed}
.pink{background:#be123c}

/* Responsive */
@media(max-width:992px){
  .service-card{width:calc(50% - 12px);}
}
@media(max-width:600px){
  .service-card{width:100%;}
}
</style>


<?php include '../footer.php'; ?>

<script src="https://skyserver.in/js/jquery-3.3.1.min.js"></script>
<script src="https://skyserver.in/js/bootstrap.min.js"></script>

</body>
</html>
