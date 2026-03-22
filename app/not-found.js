import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageShell>
      <Breadcrumb title="404" crumbs={[{ label: "404" }]} />
      
      <section className="section-404 spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text__404" style={{ textAlign: "center", padding: "50px 0" }}>
                <img src="/img/404.png" alt="404 Not Found" style={{ marginBottom: "30px", maxWidth: "100%" }} />
                <h3 style={{ fontSize: "30px", fontWeight: "700", marginBottom: "15px", color: "#111" }}>Opps!! This page Could Not Be Found!</h3>
                <p style={{ color: "#444", fontSize: "16px", marginBottom: "30px" }}>Sorry but the page you are looking for does not exist, has been removed or name changed</p>
                <Link href="/" className="site-btn">Go To Homepage</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
