<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>

<!-- =================== TOP RIBBON =================== -->
<div class="ss-topbar">
  <div class="ss-container">
    <a class="ss-learn" href="https://skyserver.in/client/knowledgebase.php">LEARN MORE</a>
    <a class="ss-ribbon-link" href="https://skyserver.in/blog/razorhost-vs-hostinger-2025">
      Razorhost vs Hostinger (2025): Which Hosting Is Best for You?
    </a>
    <nav class="ss-toplinks">
      <a href="https://skyserver.in/blog">Blog</a>
      <a href="https://skyserver.in/tutorials">Tutorials</a>
      <a href="./contact.php">Contact Us</a>
    </nav>
  </div>
</div>

<!-- =================== MOBILE OFFCANVAS =================== -->
<div class="ss-overlay"></div>
<aside class="ss-offcanvas" aria-hidden="true">
  <button class="ss-close" aria-label="Close menu">✕</button>

  <!-- top: logo -->
  <a class="ss-off-logo" href="./index.php"><img src="./logo.png" alt="SkyServer" /></a>

  <!-- middle: SCROLLABLE area -->
  <div class="ss-off-scroll">
    <nav class="ss-mobile-nav">
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
        <a href="./hosting.php">Shared Hosting</a>
        <a href="./wordpress.php">WordPress Hosting</a>
        <a href="./business.php">Business Hosting</a>
        <a href="https://api.whatsapp.com/send?phone=917509683151&text=Hello+Team+SkyServer.">Custom Hosting</a>
      </details>

      <a href="./reseller.php">Reseller Hosting</a>
      <a href="./vps.php">Cloud VPS</a>
      <a class="<?= $current_page == 'contact.php' ? 'active' : ''; ?>" href="./contact.php">Contact</a>
    </nav>
  </div>

  <!-- bottom: FIXED CTA buttons -->
  <div class="ss-off-cta">
    <a class="ss-btn ss-btn-outline" href="https://api.whatsapp.com/send?phone=917509683151&text=Hello+Team+SkyServer.">
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

    <nav class="ss-nav">
      <a class="<?= $current_page == 'index.php' ? 'active' : ''; ?>" href="./index.php">Home</a>
      <a class="<?= $current_page == 'about.php' ? 'active' : ''; ?>" href="./about.php">About</a>

      <div class="ss-dd">
        <a href="#" class="ss-dd-toggle">Domain
          <svg width="12" height="12" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </a>
        <div class="ss-dd-menu">
          <a href="https://skyserver.in/client/cart.php?a=add&domain=register">Register Domain</a>
          <a href="https://skyserver.in/client/order.php?domainaction=transfer">Transfer Domain</a>
          <a href="./whois.php">Domain WHOIS Lookup</a>
        </div>
      </div>

      <div class="ss-dd">
        <a href="#" class="ss-dd-toggle">Web Hosting
          <svg width="12" height="12" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        </a>
        <div class="ss-dd-menu">
          <a href="./hosting.php">Shared Hosting</a>
          <a href="./wordpress.php">WordPress Hosting</a>
          <a href="./business.php">Business Hosting</a>
          <a href="https://api.whatsapp.com/send?phone=917509683151&text=Hello+Team+SkyServer.">Custom Hosting</a>
        </div>
      </div>

      <a href="./reseller.php">Reseller Hosting</a>
      <a href="./vps.php">Cloud VPS</a>
      <a class="<?= $current_page == 'contact.php' ? 'active' : ''; ?>" href="./contact.php">Contact</a>
    </nav>

    <div class="ss-cta">
      <a class="ss-btn ss-btn-outline" href="https://api.whatsapp.com/send?phone=917509683151&text=Hello+Team+SkyServer.">
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
.ss-topbar{background:#f8fafc;border-bottom:1px solid var(--ss-line);font-size:13px;}
.ss-topbar .ss-container{display:flex;align-items:center;gap:12px;min-height:36px;}
.ss-learn{background:var(--ss-blue);color:#fff;padding:5px 9px;border-radius:6px;font-weight:700;text-decoration:none;}
.ss-ribbon-link{color:#0f172a;flex:1;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.ss-toplinks{display:flex;gap:16px;}
.ss-toplinks a{text-decoration:none;color:#334155;}
.ss-toplinks a:hover{color:#000;}

/* Desktop header */
.ss-header{background:#fff;border-bottom:1px solid var(--ss-line);}
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

/* Offcanvas layout (NEW: fixed footer, scrollable body) */
.ss-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);opacity:0;pointer-events:none;transition:.25s;z-index:70;}
.ss-overlay.show{opacity:1;pointer-events:auto;}
.ss-offcanvas{
  position:fixed;top:0;left:0;height:100%;width:300px;
  background:#0b1220;color:#fff;transform:translateX(-100%);transition:.25s;z-index:80;
  padding:16px;display:flex;flex-direction:column;overflow:hidden;border-right:1px solid rgba(255,255,255,.06);
}
.ss-offcanvas.open{transform:none;}
.ss-close{background:none;border:0;color:#fff;font-size:22px;position:absolute;right:10px;top:10px;}
.ss-off-logo img{width:150px;margin:6px 0 8px;filter:brightness(0) invert(1);}

/* scrollable center */
.ss-off-scroll{flex:1 1 auto;overflow-y:auto;padding-right:4px;margin-top:6px;}
.ss-mobile-nav{display:flex;flex-direction:column;gap:10px;}
.ss-mobile-nav>a,.ss-mobile-nav summary{color:#fff;font-weight:600;text-decoration:none;padding:8px;border-radius:6px;}
.ss-mobile-nav details{background:rgba(255,255,255,.08);border-radius:10px;padding:6px 8px;}
.ss-mobile-nav details[open]{background:rgba(255,255,255,.12);}
.ss-mobile-nav details a{color:#cbd5e1;padding:6px 6px;border-radius:6px;display:block;}

/* fixed footer (not overlapping content) */
.ss-off-cta{
  flex:0 0 auto; padding-top:10px;
  background:linear-gradient(180deg, rgba(11,18,32,0) 0%, rgba(11,18,32,.85) 40%, rgba(11,18,32,1) 100%);
  box-shadow:0 -1px 0 rgba(255,255,255,.06);
  position:relative;
}
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
@media (max-width:720px){
  .ss-toplinks{display:none;}
}
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
    d.addEventListener('toggle',()=>{
      if(d.open){groups.forEach(o=>{if(o!==d)o.open=false;});}
    });
  });
})();
</script>
