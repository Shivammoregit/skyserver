import LegacyPageClient from "@/components/LegacyPageClient";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SitePreloader from "@/components/SitePreloader";

export default function LegacyShell({ contentHtml, scripts = [] }) {
  return (
    <>
      <SiteHeader />
      <SitePreloader />
      <LegacyPageClient html={contentHtml} scripts={scripts} />
      <SiteFooter />
    </>
  );
}
