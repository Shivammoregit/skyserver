<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>




<!-- TrustBox script -->
<script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
<!-- End TrustBox script -->

<script src="https://www.google.com/recaptcha/enterprise.js?render=6LdBgEosAAAAAAIeuYzVExNImWOJzXMZms4yBQ1o"></script>
  <!-- Your code -->

<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1205442074864302');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1205442074864302&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->


<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "urjkdonn8s");
</script>




<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/69050ebbf27fe5194da9dbb0/1j8ts3453';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

<!-- =================== TOP RIBBON =================== -->
<base href="https://skyserver.in/">

<!-- =================== TOP RIBBON =================== -->
<div class="ss-topbar" 
     style="width:100%; background:#f9fafb; border-bottom:1px solid #e5e5e5;">

  <div class="ss-container ss-top"
       style="
         display:flex; 
         align-items:center; 
         justify-content:space-between;
         padding:6px 10px;
         gap:12px;
         flex-wrap:nowrap;
         overflow:hidden;
       ">

    <!-- LEFT BLOCK -->
    <div class="ss-left"
         style="
           display:flex;
           align-items:center;
           gap:20px;
           flex-wrap:nowrap;
           flex-grow:1;
         ">

      <!-- OFFERS BUTTON -->
      <a href="./offers.php"
         style="
          font-weight:600;
          font-size:13px;
          color:#333;
          text-decoration:none;
          display:flex;
          align-items:center;
          gap:4px;
          padding:3px 10px;
          border:1px solid #ddd;
          border-radius:6px;
          background:#ffffff;
          flex-shrink:0;
         ">
         <svg width="13" height="13" viewBox="0 0 24 24" stroke="#ff3b3b" fill="none" stroke-width="2">
           <path d="M12 2C12 2 7 7 7 11C7 14.866 9.134 18 12 18C14.866 18 17 14.866 17 11C17 7 12 2 12 2Z"/>
         </svg>
         OFFERS
      </a>

      <!-- LINKS -->
      <nav class="ss-links"
           style="
             display:flex; 
             align-items:center; 
             gap:18px;
             white-space:nowrap;
           ">
        <a href="#" style="font-weight:600; font-size:13px; color:#333; text-decoration:none;">Blog</a>

        <a href="./contact.php"
           style="font-weight:600; font-size:13px; color:#333; text-decoration:none;">
           Contact
        </a>

        <a href="https://status.skyserver.in/" 
           style="display:flex; align-items:center; gap:4px; color:#333; font-size:13px; font-weight:600; text-decoration:none;">
           
           <span style="
                width:7px;
                height:7px;
                border-radius:50%;
                background:#16a34a;
                animation:blinkDot 1.2s infinite ease-in-out;
           "></span>

           Server Status
        </a>
      </nav>
    </div>

    <!-- RIGHT: IMAGE FIXED TO RIGHT -->
    <div class="ss-offer-img"
         style="
           flex-shrink:0;
           margin-left:auto;         /* MAKES IMAGE GO FULL RIGHT */
           display:flex;
           align-items:center;
         ">
      <img src="https://api.hdmedianetwork.in/sky_cdn/offer.png"
           alt="Offer Banner"
           style="height:30px; width:auto;">
    </div>

  </div>
</div>

<style>
@keyframes blinkDot {
  0% { opacity:1; }
  50% { opacity:0.3; }
  100% { opacity:1; }
}

/* ============ MOBILE VIEW ============ */
@media (max-width: 600px) {

  .ss-top {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
  }

  .ss-left {
    width:100%;
    justify-content:center;
    flex-wrap:wrap;
  }

  .ss-links {
    gap:14px;
  }

  .ss-offer-img {
    width:100%;
    display:flex;
    justify-content:center;
  }

  .ss-offer-img img {
    height:26px;
  }
}
</style>

<style>
@keyframes blinkDot {
  0% { opacity:1; }
  50% { opacity:0.2; }
  100% { opacity:1; }
}

@keyframes fireFlare {
  0%   { transform:scale(1); opacity:1; }
  30%  { transform:scale(1.08); opacity:0.85; }
  60%  { transform:scale(0.95); opacity:1; }
  100% { transform:scale(1); opacity:1; }
}
</style>

<!-- =================== MOBILE OFFCANVAS =================== -->
<div class="ss-overlay"></div>
<aside class="ss-offcanvas" aria-hidden="true">
  <button class="ss-close" aria-label="Close menu">✕</button>

  <!-- top: logo -->
  <a class="ss-off-logo" href="./index.php"><img src="./logo.png" alt="SkyServer" /></a>

  <!-- middle: SCROLLABLE area -->
  <div class="ss-off-scroll">
    <nav class="ss-mobile-nav" aria-label="Mobile navigation">
      <a class="<?= $current_page == 'index.php' ? 'active' : ''; ?>" href="./index.php">Home</a>
      <a class="<?= $current_page == 'about.php' ? 'active' : ''; ?>" href="./about.php">About</a>

      <details>
        <summary>Domain</summary>
        <a href="https://skyserver.in/client/cart.php?a=add&domain=register">Register Domain</a>
        <a href="https://skyserver.in/client/order.php?domainaction=transfer">Transfer Domain</a>
        <a href="./whois.php">Domain WHOIS Lookup</a>
      </details>

      <details>
        <summary>Web Hosting</summary>
        <a href="./cloud.php">Cloud Hosting</a>
        <a href="./hosting.php">Shared Hosting</a>
        <a href="./wordpress.php">WordPress Hosting</a>
        <a href="./business.php">Business Hosting</a>
        <a href="./custom.php">Custom Hosting</a>
      </details>

      <a href="./reseller.php">Reseller Hosting</a>
      <a href="./vps.php">VPS Servers</a>
<a 
  href="./windows-rdp"
  style="
    position: relative;
    display: inline-flex;
    align-items: center; 
    gap: 4px;               /* text & tag ke beech minimal gap */
    font-weight: 700;
    color:#ffffff !important;
  "
>
  Windows RDP

  <span
    style="
      background: #ff1e47;
      color: #fff;
      font-size: 8px;
      font-weight: 900;
      padding: 1px 4px;
      border-radius: 3px;
      line-height: 1;
      animation: blink 1s infinite;
      position: relative;
      top: 0;               /* PERFECT: vertically center */
    "
  >
    NEW
  </span>
</a>

<style>
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: .3; }
  100% { opacity: 1; }
}
</style>
    </nav>
  </div>

  <!-- bottom: FIXED CTA buttons -->
  <div class="ss-off-cta">
    <a class="ss-btn ss-btn-outline" href="https://api.whatsapp.com/send?phone=917509683151&text=Hello+Team+SkyServer." target="_blank">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 9h10M7 13h6" stroke="#dbe7ff" stroke-width="1.7" stroke-linecap="round"/><path d="M12 4c4.97 0 9 3.358 9 7.5S16.97 19 12 19a11.5 11.5 0 0 1-3.6-.57L4 20l1.87-3.05A8.3 8.3 0 0 1 3 11.5C3 7.358 7.03 4 12 4Z" stroke="#dbe7ff" stroke-width="1.7" stroke-linejoin="round"/></svg>
      Live Chat
    </a>
    <a class="ss-btn ss-btn-solid" href="https://skyserver.in/client/login">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" stroke="#ffffff" stroke-width="1.7"/><path d="M4 21a8 8 0 0 1 16 0" stroke="#ffffff" stroke-width="1.7" stroke-linecap="round"/></svg>
      Client Area
    </a>
  </div>
</aside>

<!-- =================== DESKTOP HEADER =================== -->
<header class="ss-header">
  <div class="ss-container ss-headgrid">
    <a class="ss-logo" href="./index.php"><img src="./logo.png" alt="SkyServer" /></a>

    <nav class="ss-nav" aria-label="Primary">
      <a class="<?= $current_page == 'index.php' ? 'active' : ''; ?>" href="./index.php">Home</a>
      <a class="<?= $current_page == 'about.php' ? 'active' : ''; ?>" href="./about.php">About</a>

      <div class="ss-dd">
        <a href="#" class="ss-dd-toggle" aria-haspopup="true" aria-expanded="false">Domain
          <svg width="12" height="12" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </a>
        <div class="ss-dd-menu" role="menu">
          <a href="https://skyserver.in/client/cart.php?a=add&domain=register">Register Domain</a>
          <a href="https://skyserver.in/client/order.php?domainaction=transfer">Transfer Domain</a>
          <a href="./whois.php">Domain WHOIS Lookup</a>
        </div>
      </div>

      <div class="ss-dd">
        <a href="#" class="ss-dd-toggle" aria-haspopup="true" aria-expanded="false">Web Hosting
          <svg width="12" height="12" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </a>
        <div class="ss-dd-menu" role="menu">
          <a href="./cloud.php">Cloud Hosting</a>
          <a href="./hosting.php">Shared Hosting</a>
          <a href="./wordpress.php">WordPress Hosting</a>
          <a href="./business.php">Business Hosting</a>
          <a href="./custom.php">Custom Hosting</a>
        </div>
      </div>

      <a href="./reseller.php">Reseller Hosting</a>
      <a href="./vps.php">VPS Servers</a>
<a 
  class="<?= $current_page == 'windows-rdp' ? 'active' : ''; ?>" 
  href="./windows-rdp"
  style="position: relative; display: inline-block; padding-right: 28px; font-weight: 700; color:#0b5bd3;"
>
  Windows RDP

  <span
    style="
      position: absolute;
      top: -8px;
      right: -10px;
      background: #ff1e47;
      color: #fff;
      font-size: 8px;
      font-weight: 900;
      padding: 1px 4px;
      border-radius: 3px;
      line-height: 1;
      animation: blink 1s infinite;
    "
  >
    NEW
  </span>
</a>

<style>
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: .3; }
  100% { opacity: 1; }
}
</style>
    </nav>

    <div class="ss-cta">
      <a class="ss-btn ss-btn-outline" href="https://api.whatsapp.com/send?phone=917509683151&text=Hello+Team+SkyServer." target="_blank">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 9h10M7 13h6" stroke="#1677ff" stroke-width="1.7" stroke-linecap="round"/><path d="M12 4c4.97 0 9 3.358 9 7.5S16.97 19 12 19a11.5 11.5 0 0 1-3.6-.57L4 20l1.87-3.05A8.3 8.3 0 0 1 3 11.5C3 7.358 7.03 4 12 4Z" stroke="#1677ff" stroke-width="1.7" stroke-linejoin="round"/></svg>
        Live Chat
      </a>
      <a class="ss-btn ss-btn-solid" href="https://skyserver.in/client/login">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" stroke="#ffffff" stroke-width="1.7"/><path d="M4 21a8 8 0 0 1 16 0" stroke="#ffffff" stroke-width="1.7" stroke-linecap="round"/></svg>
        Client Area
      </a>
    </div>

    <button class="ss-burger" aria-label="Menu">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
  </div>
</header>

<!-- =================== STYLES =================== -->
<style>
:root{
  --ss-blue:#1677ff;--ss-blue-dark:#0b5bd3;--ss-ink:#0f172a;
  --ss-line:#e5e7eb;--ss-hover:#f1f6ff;
}
body{margin:0;font-family:Inter,system-ui,sans-serif;}
.ss-container{max-width:100%;padding:0 15px;}

/* Top ribbon */
.ss-topbar{background:#f8fafc;border-bottom:1px solid var(--ss-line);font-size:13px;width:100%;}
.ss-topbar .ss-container{
  display:flex;align-items:center;gap:12px;min-height:36px;
  justify-content:flex-start!important;
  max-width:100%!important;margin:0!important;
  padding-left:15px;padding-right:15px;
  flex-wrap:wrap; /* NEW: allow wrapping so Blog/Tutorials never hide */
}
.ss-toplinks{
  display:flex;
  gap:16px;
  margin-left:12px;
  flex-wrap:wrap;          /* NEW */
}
.ss-topbar,.ss-topbar *{text-align:left!important;}
.ss-learn{background:var(--ss-blue);color:#fff;padding:5px 9px;border-radius:6px;font-weight:700;text-decoration:none;}
.ss-toplinks a{text-decoration:none;color:#334155;}
.ss-toplinks a:hover{color:#000;}

/* Desktop header */
.ss-header{background:#fff;border-bottom:1px solid var(--ss-line);box-shadow:0 2px 8px rgba(0,0,0,.04);}
.ss-headgrid{display:grid;grid-template-columns:auto 1fr auto auto;align-items:center;min-height:88px;gap:12px;}
.ss-logo img{width:130px;display:block;}
.ss-nav{display:flex;justify-content:center;gap:34px;font-weight:600;}
.ss-nav a,.ss-dd-toggle{color:var(--ss-ink);text-decoration:none;position:relative;cursor:pointer;}
.ss-nav a:hover,.ss-dd-toggle:hover{color:var(--ss-blue);}
.ss-dd{position:relative;}
.ss-dd-toggle{display:inline-flex;align-items:center;gap:6px;background:none;border:none;appearance:none;outline:none;}
.ss-dd-menu{display:none;position:absolute;top:100%;left:0;background:#fff;border:1px solid var(--ss-line);border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,.06);padding:8px;min-width:200px;z-index:50;}
.ss-dd.open .ss-dd-menu,.ss-dd:hover .ss-dd-menu{display:block;}
.ss-dd-menu a{display:block;padding:9px 12px;border-radius:6px;color:var(--ss-ink);font-weight:500;text-decoration:none;}
.ss-dd-menu a:hover{background:var(--ss-hover);color:var(--ss-blue);}
.ss-dd-toggle svg{transition:.2s;}
.ss-dd.open .ss-dd-toggle svg{transform:rotate(180deg);}
.ss-cta{margin-left:auto;display:flex;gap:10px;}
.ss-btn{display:inline-flex;align-items:center;gap:6px;padding:8px 13px;border-radius:10px;font-weight:700;text-decoration:none;}
.ss-btn-outline{border:1.4px solid var(--ss-blue);color:var(--ss-blue);background:#fff;}
.ss-btn-outline:hover{background:var(--ss-hover);color:var(--ss-blue-dark);border-color:var(--ss-blue-dark);}
.ss-btn-solid{background:var(--ss-blue);border:1.4px solid var(--ss-blue);color:#fff;}
.ss-btn-solid:hover{background:var(--ss-blue-dark);border-color:var(--ss-blue-dark);}
.ss-burger{display:none;background:#fff;border:1px solid var(--ss-line);border-radius:8px;padding:5px 7px;}

/* Offcanvas */
.ss-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);opacity:0;pointer-events:none;transition:.25s;z-index:70;}
.ss-overlay.show{opacity:1;pointer-events:auto;}
.ss-offcanvas{position:fixed;top:0;left:0;height:100%;width:300px;background:#0b1220;color:#fff;transform:translateX(-100%);transition:.25s;z-index:80;padding:16px;display:flex;flex-direction:column;overflow:hidden;border-right:1px solid rgba(255,255,255,.06);}
.ss-offcanvas.open{transform:none;}
.ss-close{background:none;border:0;color:#fff;font-size:22px;position:absolute;right:10px;top:10px;}
.ss-off-logo img{width:150px;margin:6px 0 8px;filter:brightness(0) invert(1);}
.ss-off-scroll{flex:1 1 auto;overflow-y:auto;padding-right:4px;margin-top:6px;}
.ss-mobile-nav{display:flex;flex-direction:column;gap:10px;}
.ss-mobile-nav>a,.ss-mobile-nav summary{color:#fff;font-weight:600;text-decoration:none;padding:8px;border-radius:6px;}
.ss-mobile-nav details{background:rgba(255,255,255,.08);border-radius:10px;padding:6px 8px;}
.ss-mobile-nav details[open]{background:rgba(255,255,255,.12);}
.ss-mobile-nav details a{color:#cbd5e1;padding:6px 6px;border-radius:6px;display:block;}
.ss-off-cta{flex:0 0 auto;padding-top:10px;background:linear-gradient(180deg,rgba(11,18,32,0)0%,rgba(11,18,32,.85)40%,rgba(11,18,32,1)100%);box-shadow:0 -1px 0 rgba(255,255,255,.06);position:relative;}
.ss-off-cta .ss-btn{width:100%;justify-content:center;border-radius:12px;padding:10px 14px;font-weight:700;}
.ss-off-cta .ss-btn + .ss-btn{margin-top:10px;}
.ss-off-cta .ss-btn-outline{border-color:#9bbcff;color:#dbe7ff;background:rgba(59,130,246,0.08);}
.ss-off-cta .ss-btn-outline:hover{background:rgba(59,130,246,0.14);}

/* Responsive */
@media (max-width:1100px){
  .ss-headgrid{grid-template-columns:auto 1fr auto;}
  .ss-nav{display:none;}
  .ss-cta{display:none;}
  .ss-burger{display:inline-flex;margin-left:auto;}
}
/* NOTE: removed the rule that hid .ss-toplinks on small screens */
</style>

<!-- =================== JS =================== -->
<script>
(()=> {
  const burger=document.querySelector('.ss-burger'),
        aside=document.querySelector('.ss-offcanvas'),
        close=document.querySelector('.ss-close'),
        ovl=document.querySelector('.ss-overlay');
  const open=()=>{aside.classList.add('open');ovl.classList.add('show');document.body.style.overflow='hidden';};
  const shut=()=>{aside.classList.remove('open');ovl.classList.remove('show');document.body.style.overflow='';};
  burger?.addEventListener('click',open);
  close?.addEventListener('click',shut);
  ovl?.addEventListener('click',shut);

  // desktop dropdown: click toggles, outside click closes
  document.querySelectorAll('.ss-dd-toggle').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.preventDefault();
      const parent=btn.closest('.ss-dd');
      const openNow=parent.classList.contains('open');
      document.querySelectorAll('.ss-dd.open').forEach(dd=>dd.classList.remove('open'));
      if(!openNow) parent.classList.add('open');
    });
  });
  document.addEventListener('click',e=>{
    if(!e.target.closest('.ss-dd')) document.querySelectorAll('.ss-dd.open').forEach(dd=>dd.classList.remove('open'));
  });

  // mobile accordion: only one <details> open
  const groups=document.querySelectorAll('.ss-mobile-nav details');
  groups.forEach(d=>{
    d.addEventListener('toggle',()=>{ if(d.open){ groups.forEach(o=>{ if(o!==d) o.open=false; }); } });
  });
})();
</script>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ZNDBHEY9YN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZNDBHEY9YN');
</script>
