import HomeContent from "./HomeContent";
import Header from "@/components/SiteHeader";
import Footer from "@/components/SiteFooter";

export const metadata = {
  title: "SkyServer | Best cPanel Hosting in India - Fast, Secure & Affordable",
  description: "SkyServer offers fast, secure, and affordable cPanel hosting in India with SSD servers, free SSL, 99.9% uptime, and expert 24/7 technical support. India's trusted hosting provider for websites, WordPress, and eCommerce.",
  keywords: "skyserver, web hosting India, cPanel hosting, domain registration, SSL certificates, WordPress hosting, LiteSpeed server, cloud hosting, VPS hosting, reseller hosting, shared hosting, affordable hosting, secure hosting, 24/7 support",
  alternates: {
    canonical: "https://skyserver.in/",
  },
  openGraph: {
    title: "SkyServer | Best cPanel Hosting in India",
    description: "Get blazing-fast and secure web hosting with SkyServer – India's trusted hosting provider with SSD servers, free SSL, and 99.9% uptime guarantee.",
    url: "https://skyserver.in/",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    type: "website",
    siteName: "SkyServer Cloud Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyServer | Best cPanel Hosting in India",
    description: "Fast, secure & affordable cPanel hosting in India with 24/7 support and SSD servers.",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    creator: "@SkyServerCloud"
  }
};

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SkyServer Cloud Technologies",
    "alternateName": "SkyServer",
    "url": "https://skyserver.in/",
    "logo": "https://skyserver.in/logo.png",
    "image": "https://skyserver.in/img/og-banner.jpg",
    "description": "SkyServer Cloud Technologies provides fast, secure, and affordable cPanel hosting in India with SSD servers, free SSL, and 24/7 expert support.",
    "email": "support@skyserver.in",
    "telephone": "+91-7509683151",
    "sameAs": [
      "https://www.facebook.com/people/SkyServer/61558557917588/",
      "https://www.instagram.com/skyserver.in",
      "https://www.linkedin.com/company/skyserver",
      "https://www.trustpilot.com/review/skyserver.in",
      "https://g.page/r/Cc85mN_DFSflEAI/review"
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SkyServer Cloud Technologies",
    "url": "https://skyserver.in/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://skyserver.in/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ITService"],
    "@id": "https://skyserver.in/#localbusiness",
    "name": "SkyServer Cloud Technologies",
    "url": "https://skyserver.in/",
    "image": "https://skyserver.in/img/og-banner.jpg",
    "telephone": "+91-7509683151",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jaipur",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302001",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Header />
      <main>
        <HomeContent />
      </main>
      <Footer />
    </>
  );
}
