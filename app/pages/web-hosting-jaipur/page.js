import PricingWidget from "@/components/PricingWidget";
import JaipurHostingContent from "./JaipurHostingContent";
import Header from "@/components/SiteHeader";
import Footer from "@/components/SiteFooter";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Web Hosting in Jaipur | Affordable Cloud & cPanel Hosting – SkyServer",
  description: "Best web hosting in Jaipur with cPanel, cloud hosting, SSD storage, free SSL and 99.9% uptime. SkyServer offers affordable hosting plans with fast speed and 24/7 local support in Jaipur, Rajasthan.",
  keywords: "web hosting in jaipur, hosting in jaipur, cloud hosting in jaipur, jaipur web hosting, cheap hosting jaipur, cpanel hosting jaipur, best hosting jaipur rajasthan, website hosting jaipur, jaipur hosting services, affordable hosting jaipur",
  alternates: {
    canonical: "https://skyserver.in/pages/web-hosting-jaipur",
  },
  openGraph: {
    title: "Web Hosting in Jaipur | SkyServer",
    description: "Affordable and reliable web hosting in Jaipur with cPanel, cloud hosting, SSD servers, free SSL and 24/7 local support.",
    url: "https://skyserver.in/pages/web-hosting-jaipur",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    type: "website",
    siteName: "SkyServer Cloud Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Hosting in Jaipur | SkyServer",
    description: "Best web hosting and cloud hosting in Jaipur with SSD storage, cPanel and 24/7 support.",
    images: ["https://skyserver.in/img/og-banner.jpg"],
  }
};

export default function WebHostingJaipurPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://skyserver.in/#localbusiness",
    "name": "SkyServer Cloud Technologies",
    "url": "https://skyserver.in",
    "logo": "https://skyserver.in/img/og-banner.jpg",
    "image": "https://skyserver.in/img/og-banner.jpg",
    "description": "Affordable web hosting and cloud hosting services in Jaipur with cPanel, free SSL, SSD storage, and 24/7 local support.",
    "telephone": "+91-7509683151",
    "priceRange": "₹49 - ₹999",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.9124",
      "longitude": "75.7873"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": {
      "@type": "City",
      "name": "Jaipur"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "21916",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Verified Customer"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://skyserver.in/pages/web-hosting-jaipur#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Web hosting in Jaipur ki cost kitni hai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkyServer mein web hosting ₹49/month se start hoti hai with free SSL, cPanel, SSD storage aur 24/7 support."
        }
      },
      {
        "@type": "Question",
        "name": "Kya aap Jaipur mein local support dete ho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Haan, SkyServer Jaipur ke customers ko 24/7 Hindi aur English mein technical support provide karta hai."
        }
      },
      {
        "@type": "Question",
        "name": "Cloud hosting aur shared hosting mein kya difference hai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloud hosting zyada scalable aur high-performance hoti hai jabki shared hosting beginners ke liye budget-friendly option hai."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <JaipurHostingContent />
        <section style={{ backgroundColor: "#fff", padding: "60px 0" }}>
          <div className="container">
             <div className="section-title text-center">
              <h2>Choose Your Plan</h2>
            </div>
            <PricingWidget />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
