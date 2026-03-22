import Script from "next/script";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://skyserver.in"),
  title: "SkyServer"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="48x48" href="/img/ico.png" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/elegant-icons.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/slicknav.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Script async src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" strategy="afterInteractive" />
        <Script src="https://www.google.com/recaptcha/enterprise.js?render=6LdBgEosAAAAAAIeuYzVExNImWOJzXMZms4yBQ1o" strategy="afterInteractive" />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1205442074864302');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            alt=""
            height="1"
            src="https://www.facebook.com/tr?id=1205442074864302&ev=PageView&noscript=1"
            style={{ display: "none" }}
            width="1"
          />
        </noscript>
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        if (typeof c[a] !== "function") {
          c[a] = function(){ (c[a].q = c[a].q || []).push(arguments); };
        }
        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "urjkdonn8s");`}
        </Script>
        <Script id="tawk" strategy="afterInteractive">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/69050ebbf27fe5194da9dbb0/1j8ts3453';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZNDBHEY9YN" strategy="afterInteractive" />
        <Script id="gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ZNDBHEY9YN');`}
        </Script>
        {children}
        <Script src="/js/jquery-3.3.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
