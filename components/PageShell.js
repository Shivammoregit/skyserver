import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SitePreloader from "@/components/SitePreloader";
import Breadcrumb from "@/components/Breadcrumb";

export default function PageShell({ breadcrumb, children }) {
  return (
    <>
      <SiteHeader />
      <SitePreloader />
      {breadcrumb && <Breadcrumb current={breadcrumb} />}
      {children}
      <SiteFooter />
    </>
  );
}
