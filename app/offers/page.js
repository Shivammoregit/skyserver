import Script from "next/script";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: { absolute: "Hosting Offers & Discounts | SkyServer - Save on cPanel & Cloud Hosting" },
  description:
    "Grab the latest SkyServer hosting offers, promo codes & discounts on cPanel, VPS, and Cloud hosting plans. Limited-time deals with 24/7 support.",
  alternates: { canonical: "https://skyserver.in/offers" },
  openGraph: {
    title: "Hosting Offers & Deals | SkyServer Cloud Technologies",
    description:
      "Save big with SkyServer hosting offers on cPanel, VPS, and Cloud hosting. Claim your discount today!",
    type: "website",
    url: "https://skyserver.in/offers",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    siteName: "SkyServer Cloud Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hosting Offers & Discounts | SkyServer",
    description:
      "Grab SkyServer hosting discounts on cPanel, VPS, and Cloud hosting. Limited-time offers available now!",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    site: "@SkyServerCloud"
  }
};

const schemaOffer = {
  "@context": "https://schema.org",
  "@type": "SpecialAnnouncement",
  name: "SkyServer Hosting Offers & Discounts",
  url: "https://skyserver.in/offers",
  text: "Exclusive SkyServer hosting offers and discounts on cPanel, Cloud, and VPS plans. Limited-time deals with 24/7 support.",
  category: "Web Hosting",
  datePosted: "2025-11-05",
  expires: "2025-12-31",
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
  }
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://skyserver.in/" },
    { "@type": "ListItem", position: 2, name: "Offers", item: "https://skyserver.in/offers" }
  ]
};

/**
 * The offers page uses a Shadow DOM web component (<skyofrz-offers>) that is
 * self-contained — it fetches coupon data from an API and renders inside its
 * shadow root. We inject the component definition script after page load.
 */
export default function OffersPage() {
  return (
    <PageShell breadcrumb="Offers">
      <Script
        id="schema-offers"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOffer) }}
      />
      <Script
        id="schema-offers-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      {/* Offer Banner */}
      <section style={{ width: "100%", padding: "10px 0", display: "flex", justifyContent: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://api.hdmedianetwork.in/sky_cdn/offer.png"
          alt="Offer Banner"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </section>

      {/* Offers Mount — Shadow DOM component */}
      <section id="skyofrz-host">
        <skyofrz-offers
          data-api="https://skyserver.in/client/custom_apis/coupons_showcase_api.php"
          data-token="REPLACE_WITH_A_LONG_RANDOM_TOKEN_1"
        />
      </section>

      {/* Shadow DOM Offers Component Script */}
      <Script id="skyofrz-offers-component" strategy="afterInteractive">{`
class SkyofrzOffers extends HTMLElement{
  constructor(){
    super();
    this.root = this.attachShadow({mode:'open'});
    this.api  = this.getAttribute('data-api') || '';
    this.token= this.getAttribute('data-token') || '';
  }
  connectedCallback(){
    this.renderSkeleton();
    this.fetchData();
  }

  css(){return\`
    :host{all:initial;font-family:Montserrat,system-ui,Arial,sans-serif;color:#0f172a;}
    *,*::before,*::after{box-sizing:border-box;}
    .wrap{background:#f8faff;padding:24px 0 96px;}
    .container{max-width:1140px;margin:0 auto;padding:0 16px;}
    .title{text-align:center;margin:10px 0 28px;}
    .title h3{margin:0 0 6px;font-size:28px;font-weight:900;color:#23308f;}
    .title p{margin:0;color:#6b7280;font-weight:600;}
    .notice{border:1px solid #e0e6ff;background:#eef4ff;color:#1f3b8a;border-radius:12px;padding:12px 14px;margin:0 0 16px;font-weight:600;font-size:14px;}
    .notice.error{background:#fff3f3;border-color:#ffdada;color:#8a1f1f;}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:16px;}
    .card{background:#fff;border:1px solid #e0e6ff;border-radius:18px;box-shadow:0 4px 20px rgba(10,31,97,.07);display:flex;flex-direction:column;overflow:hidden;transition:transform .2s;}
    .card:hover{transform:translateY(-4px);}
    .header{background:linear-gradient(135deg,#23308f,#13509b);padding:20px 16px;color:#fff;}
    .code{margin:0;font-size:24px;font-weight:900;letter-spacing:1.5px;color:#fff;word-break:break-all;}
    .body{padding:16px;}
    .value{font-size:30px;font-weight:900;color:#23308f;}
    .dates{background:#f1f4ff;border:1px solid #e0e6ff;border-radius:12px;padding:10px 12px;font-size:14px;margin:10px 0 0;}
    .dates strong{color:#23308f;}
    .footer{margin-top:auto;padding:0 16px 16px;}
    .actions{display:flex;gap:10px;flex-wrap:wrap;}
    .btn{border:1px solid transparent;border-radius:10px;font-weight:800;padding:10px 14px;cursor:pointer;background:#fff;color:#13509b;display:inline-flex;align-items:center;gap:8px;text-decoration:none;}
    .btn.copy{width:100%;justify-content:center;margin:12px 0 10px;background:linear-gradient(135deg,#23308f,#13509b);color:#fff;}
    .btn.view{border-color:#e0e6ff;}
    .btn.buy{background:linear-gradient(135deg,#1b5e20,#388e3c);color:#fff;}
    #buyModal.modal{z-index:999998;}
    #buyModal .backdrop{z-index:999998;}
    #buyModal .panel{z-index:999999;}
    #plansModal.modal{z-index:1000000;}
    #plansModal .backdrop{z-index:1000000;}
    #plansModal .panel{z-index:1000001;}
    .modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;}
    .modal.open{display:flex;}
    .backdrop{position:absolute;inset:0;background:rgba(15,23,42,.55);}
    .panel{position:relative;max-width:900px;width:min(92vw,900px);max-height:86vh;border-radius:12px;background:#fff;box-shadow:0 30px 80px rgba(0,0,0,.35);display:flex;flex-direction:column;overflow:hidden;}
    .panel .hd{padding:14px 16px;border-bottom:1px solid #eef2ff;font-weight:900;display:flex;align-items:center;justify-content:space-between;}
    .panel .bd{padding:14px 16px;overflow:auto;}
    .panel .ft{padding:12px 16px;border-top:1px solid #eef2ff;text-align:right;}
    .x{background:none;border:none;font-size:22px;cursor:pointer;color:#6b7280;}
    .plansGrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;}
    .plan{border:1px solid #e0e6ff;border-radius:12px;padding:12px;box-shadow:0 2px 8px rgba(10,31,97,.05);display:flex;flex-direction:column;gap:8px;}
    .plan .ttl{font-weight:900;color:#0f172a;display:flex;gap:8px;align-items:center;}
    .plan .cta{text-align:right;}
    .toast{position:fixed;top:18px;right:18px;background:#23308f;color:#fff;padding:10px 14px;border-radius:10px;font-weight:800;box-shadow:0 10px 28px rgba(0,0,0,.25);z-index:1000002;}
    .card.inactive .header{background:linear-gradient(135deg,#9aa4b2,#b3bac6);color:#fff;}
    .card.inactive .value{color:#6b7280;}
    .card.inactive .dates{background:#f3f4f6;border-color:#e5e7eb;color:#6b7280;}
    .card.inactive .dates strong{color:#374151;}
    .card.inactive .btn.copy,.card.inactive .btn.buy{background:#c5cbd6!important;color:#fff!important;cursor:not-allowed;pointer-events:none;opacity:.7;}
    .card.inactive .btn.view{border-color:#d1d5db;color:#6b7280;}
  \`;}

  svg(){return{
    copy:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="11" height="11" rx="2" stroke="#fff" stroke-width="1.6"/><rect x="4" y="4" width="11" height="11" rx="2" stroke="#fff" stroke-width="1.6"/></svg>',
    server:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="6" rx="2" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="14" width="18" height="6" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="8" cy="7" r="1" fill="currentColor"/><circle cx="8" cy="17" r="1" fill="currentColor"/></svg>',
    cart:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6h15l-1.5 9h-12L6 6Zm0 0L5 3H2" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="20" r="1" fill="#fff"/><circle cx="18" cy="20" r="1" fill="#fff"/></svg>'
  };}

  html(){return\`
    <div class="wrap">
      <div class="container">
        <div class="title"><h3>Special Offers & Coupons</h3><p>Save big with our exclusive discount codes!</p></div>
        <div id="n"></div>
        <div id="loading" class="notice">Loading amazing offers…</div>
        <div id="active" style="display:none"><div class="grid" id="activeGrid"></div></div>
        <div id="inactive" style="display:none"><h5 style="text-align:center;margin:16px 0;color:#6b778d">Expired / Inactive Offers</h5><div class="grid" id="inactiveGrid"></div></div>
      </div>
    </div>
    <div id="buyModal" class="modal" aria-hidden="true">
      <div class="backdrop"></div>
      <div class="panel" role="dialog" aria-modal="true">
        <div class="hd"><span>Proceed to Checkout</span><button class="x" data-close>&times;</button></div>
        <div class="bd"><p><strong>Plan:</strong> <span id="pmPlan"></span></p><p><strong>Coupon Code:</strong> <span id="pmCode" style="font-weight:900;color:#13509b"></span></p></div>
        <div class="ft"><a id="pmGo" class="btn copy" style="width:auto;">Proceed</a><button class="btn view" data-close>Close</button></div>
      </div>
    </div>
    <div id="plansModal" class="modal" aria-hidden="true">
      <div class="backdrop"></div>
      <div class="panel" role="dialog" aria-modal="true">
        <div class="hd"><span>Applicable Products & Services</span><button class="x" data-close>&times;</button></div>
        <div class="bd" id="plansBody"></div>
        <div class="ft"><button class="btn view" data-close>Close</button></div>
      </div>
    </div>
  \`;}

  renderSkeleton(){
    this.root.innerHTML = '<style>'+this.css()+'</style>'+this.html();
    this.root.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',()=>this.closeModals()));
    this.root.querySelectorAll('.backdrop').forEach(el=>el.addEventListener('click',()=>this.closeModals()));
    this._escHandler = (e)=>{ if(e.key==='Escape') this.closeModals(); };
    document.addEventListener('keydown', this._escHandler);
  }

  disconnectedCallback(){
    document.removeEventListener('keydown', this._escHandler);
    this.toggleScrollLock(false);
  }

  async fetchData(){
    try{
      const r = await fetch(this.api,{headers:{'X-API-Token':this.token}});
      if(!r.ok) throw new Error('HTTP '+r.status);
      const d = await r.json();
      this.root.getElementById('loading').style.display='none';
      if(!d.success){ this.notice('Failed to load coupons.','error'); return; }
      if(d.active_now?.length){
        this.renderList(d.active_now,this.root.getElementById('activeGrid'),true);
        this.root.getElementById('active').style.display='block';
      } else {
        this.notice('No active coupons available.','info');
      }
      if(d.inactive_or_expired?.length){
        this.renderList(d.inactive_or_expired,this.root.getElementById('inactiveGrid'),false);
        this.root.getElementById('inactive').style.display='block';
      }
    }catch(e){
      this.root.getElementById('loading').style.display='none';
      this.notice('Error: '+e.message,'error');
    }
  }

  notice(msg, kind='info'){
    this.root.getElementById('n').innerHTML =
      '<div class="notice '+(kind==='error'?'error':'')+'">'+this.esc(msg)+'</div>';
  }

  esc(t){ const d=document.createElement('div'); d.textContent=t??''; return d.innerHTML; }

  renderList(list, mount, active){
    mount.innerHTML = list.map((c,i)=>this.card(c,i,active)).join('');
    mount.querySelectorAll('[data-copy]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const code=btn.dataset.copy;
        navigator.clipboard.writeText(code);
        this.toast('Copied: '+code);
      });
    });
    mount.querySelectorAll('[data-view]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        const idx=+btn.dataset.index;
        this.openPlans(list[idx]);
      });
    });
    mount.querySelectorAll('[data-buy]').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        this.openBuy(btn.dataset.name, btn.dataset.code, btn.dataset.buy);
      });
    });
  }

  card(c,i,active){
    const showView = c.applies_all || (c.applies && c.applies.length);
    return '<div class="card '+(active?'':'inactive')+'">'+
      '<div class="header"><h3 class="code">'+this.esc(c.code)+'</h3></div>'+
      '<div class="body"><div class="value">'+this.esc(c.value_text)+'</div><div class="dates"><strong>Expires:</strong> '+this.esc(c.expiry_date)+'</div></div>'+
      '<div class="footer">'+
        (active?'<button class="btn copy" data-copy="'+this.esc(c.code)+'">'+this.svg().copy+' Copy Coupon</button>':'')+
        '<div class="actions">'+
          (showView?'<a href="#" class="btn view" data-view data-index="'+i+'">View Products</a>':'')+
          (active && c.applies_all && c.buy_all_url?'<a href="#" class="btn buy" data-buy="'+this.esc(c.buy_all_url)+'" data-name="All Products" data-code="'+this.esc(c.code)+'">Proceed</a>':'')+
        '</div></div></div>';
  }

  openBuy(plan, code, url){
    this.closeModals();
    this.toggleScrollLock(true);
    this.root.getElementById('pmPlan').textContent = plan || '';
    this.root.getElementById('pmCode').textContent = code || '';
    this.root.getElementById('pmGo').setAttribute('href', url || '#');
    this.root.getElementById('buyModal').classList.add('open');
  }

  openPlans(coupon){
    this.closeModals();
    this.toggleScrollLock(true);
    const body = this.root.getElementById('plansBody');
    let top='';
    if(coupon.applies_all && coupon.buy_all_url){
      top='<div class="notice" style="display:flex;justify-content:space-between;align-items:center;gap:10px;"><span>Coupon applies to all products.</span><a href="#" class="btn copy" style="width:auto;" data-buy="'+this.esc(coupon.buy_all_url)+'" data-name="All Products" data-code="'+this.esc(coupon.code)+'">Proceed</a></div>';
    }
    const plans = Array.isArray(coupon.applies) ? coupon.applies : [];
    const cards = plans.map(p=>
      '<div class="plan"><div class="ttl">'+this.svg().server+'<span>'+this.esc(p.name)+'</span></div><div class="cta"><a href="#" class="btn copy" style="width:auto;" data-buy="'+this.esc(p.buy_url)+'" data-name="'+this.esc(p.name)+'" data-code="'+this.esc(coupon.code)+'">'+this.svg().cart+' Proceed</a></div></div>'
    ).join('');
    body.innerHTML = top + '<div class="plansGrid">'+(cards || '<div class="notice">No specific products listed.</div>')+'</div>';
    body.querySelectorAll('[data-buy]').forEach(btn=>{
      btn.addEventListener('click',(e)=>{
        e.preventDefault();
        this.openBuy(btn.dataset.name, btn.dataset.code, btn.dataset.buy);
      });
    });
    this.root.getElementById('plansModal').classList.add('open');
  }

  closeModals(){
    this.root.getElementById('buyModal').classList.remove('open');
    this.root.getElementById('plansModal').classList.remove('open');
    this.toggleScrollLock(false);
  }

  toggleScrollLock(on){
    try{
      const b=document.body, h=document.documentElement;
      if(on){ b.style.overflow='hidden'; h.style.overflow='hidden'; }
      else { b.style.overflow=''; h.style.overflow=''; }
    }catch(_){}
  }

  toast(msg){
    const t = document.createElement('div');
    t.className='toast';
    t.textContent=msg;
    this.root.appendChild(t);
    setTimeout(()=> t.remove(), 1800);
  }
}
if(!customElements.get('skyofrz-offers')){
  customElements.define('skyofrz-offers', SkyofrzOffers);
}
      `}</Script>
    </PageShell>
  );
}
