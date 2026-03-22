export const metadata = {
  title: { absolute: "Custom Hosting Solutions in India | SkyServer — Tailored for Your Business" },
  description:
    "Build your own custom hosting plan with SkyServer. Choose CPU, RAM, storage & support options tailored for your business needs in India.",
  alternates: { canonical: "https://skyserver.in/custom" },
  openGraph: {
    title: "Custom Hosting Solutions in India | SkyServer",
    description:
      "Design your own hosting plan — customize CPU, RAM, storage & support with SkyServer. Perfect for startups, developers & enterprises.",
    type: "website",
    url: "https://skyserver.in/custom",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    siteName: "SkyServer Cloud Technologies",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Hosting Solutions | SkyServer",
    description:
      "Create your own hosting setup with SkyServer — flexible CPU, RAM & storage options for any business size.",
    images: ["https://skyserver.in/img/og-banner.jpg"],
    site: "@SkyServerCloud"
  }
};

export default function CustomLayout({ children }) {
  return children;
}
