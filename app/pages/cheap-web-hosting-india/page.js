import PricingWidget from "@/components/PricingWidget";
import CheapHostingContent from "./CheapHostingContent";
import Header from "@/components/SiteHeader";
import Footer from "@/components/SiteFooter";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Cheap Web Hosting India | Affordable cPanel Hosting – SkyServer",
  description: "Cheap web hosting in India with cPanel, LiteSpeed, SSD storage, free SSL and 99.9% uptime. SkyServer offers affordable hosting plans with fast speed and 24/7 Indian support.",
  keywords: "cheap web hosting india, affordable web hosting india, low cost hosting india, budget hosting india, cheap cpanel hosting india, best cheap hosting india",
  alternates: {
    canonical: "https://skyserver.in/pages/cheap-web-hosting-india",
  },
  openGraph: {
    title: "Cheap Web Hosting India | SkyServer",
    description: "Affordable and reliable cheap web hosting in India with cPanel, SSD servers, free SSL and 24/7 support.",
    url: "https://skyserver.in/pages/cheap-web-hosting-india",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    type: "website",
    siteName: "SkyServer Cloud Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Web Hosting India | SkyServer",
    description: "Best cheap web hosting in India with SSD storage, cPanel and 24/7 support.",
    images: ["https://skyserver.in/img/og-banner.jpg"],
  }
};

export default function CheapWebHostingIndiaPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://skyserver.in/#localbusiness",
    "name": "SkyServer Cloud Technologies",
    "url": "https://skyserver.in",
    "logo": "https://skyserver.in/img/og-banner.jpg",
    "image": "https://skyserver.in/img/og-banner.jpg",
    "description": "Cheap web hosting provider in India offering affordable cloud and shared hosting with free SSL, SSD storage, cPanel and 24/7 support.",
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
      "@type": "Country",
      "name": "India"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://skyserver.in/pages/cheap-web-hosting#product",
    "name": "Cheap Web Hosting in India",
    "image": ["https://skyserver.in/img/og-banner.jpg"],
    "description": "Cheap web hosting in India starting at ₹49/month with cPanel, free SSL, SSD storage, LiteSpeed server and 24/7 expert support.",
    "brand": {
      "@type": "Brand",
      "name": "SkyServer"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Verified Hosting Customer"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "21916"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://skyserver.in/pages/cheap-web-hosting-india",
      "priceCurrency": "INR",
      "price": "49",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "SkyServer Cloud Technologies",
        "url": "https://skyserver.in"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://skyserver.in/pages/cheap-web-hosting-india#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Cheap web hosting ka price kya hai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkyServer ka cheap web hosting plan sirf ₹49/month se start hota hai jisme free SSL, cPanel, SSD storage aur 24/7 support milta hai."
        }
      },
      {
        "@type": "Question",
        "name": "Kya cheap hosting reliable hoti hai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Haan, SkyServer ki cheap web hosting LiteSpeed servers, SSD storage aur 99.9% uptime ke saath fully reliable hai."
        }
      },
      {
        "@type": "Question",
        "name": "Cheap web hosting beginners ke liye sahi hai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bilkul. Cheap web hosting beginners, bloggers aur small businesses ke liye best option hai kyunki ye budget-friendly aur easy to manage hoti hai."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <CheapHostingContent />
        <section style={{ backgroundColor: "#f8f9fa", padding: "60px 0" }}>
          <div className="container">
            <PricingWidget />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
