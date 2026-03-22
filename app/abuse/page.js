import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: { absolute: "Abuse & Unethical Use Policy | SkyServer Cloud Technologies" },
  description:
    "Abuse & Unethical Use Policy of SkyServer Cloud Technologies. Any illegal or unethical usage of hosting, VPS or domain services will result in immediate suspension or termination.",
  alternates: { canonical: "https://skyserver.in/abuse" }
};

export default function AbusePage() {
  return (
    <PageShell breadcrumb="Abuse & Unethical Use Policy">
      <style>{`
        .policy-header { text-align: center; margin-bottom: 40px; }
        .policy-header h1 { font-weight: 800; font-size: 30px; color: #0f172a; }
        .policy-header p { max-width: 900px; margin: 12px auto 0; color: #64748b; font-size: 16px; line-height: 1.6; }
        .policy-card { background: #ffffff; border-radius: 14px; padding: 32px; box-shadow: 0 10px 28px rgba(0,0,0,0.06); height: 100%; transition: all 0.3s ease; }
        .policy-card:hover { transform: translateY(-5px); }
        .policy-icon { width: 56px; height: 56px; background: #f1f5f9; color: #1e40af; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 18px; }
        .policy-card h5 { font-weight: 700; margin-bottom: 12px; color: #0f172a; }
        .policy-card p, .policy-card li { color: #475569; font-size: 15px; line-height: 1.6; }
        .policy-list { padding-left: 18px; }
        .enforcement-box { margin-top: 50px; }
        .abuse-email { background: #f8fafc; border-left: 4px solid #1e40af; padding: 20px; border-radius: 8px; margin-top: 20px; }
        .abuse-email a { font-weight: 700; color: #1e40af; }
      `}</style>

      <section className="spad">
        <div className="container">
          <div className="policy-header">
            <h1>Abuse &amp; Unethical Use Policy</h1>
            <p>
              SkyServer Cloud Technologies provides domain registration, web hosting, VPS, cloud servers, and related
              services strictly for lawful and ethical purposes. Any misuse of our services is a direct violation of this
              policy and applicable laws.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="policy-card">
                <div className="policy-icon">
                  <i className="fa fa-check" />
                </div>
                <h5>Permitted Use</h5>
                <p>
                  SkyServer services may only be used for legitimate websites, applications, and business operations
                  that comply with all applicable Indian laws, international regulations, and third-party policies.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="policy-card">
                <div className="policy-icon">
                  <i className="fa fa-ban" />
                </div>
                <h5>Prohibited &amp; Unethical Activities</h5>
                <ul className="policy-list">
                  <li>Spam, phishing, or unsolicited bulk messaging</li>
                  <li>Hacking, brute-force attacks, DDoS or exploitation attempts</li>
                  <li>Malware, ransomware, spyware or virus distribution</li>
                  <li>Fraud, scams, impersonation or deceptive practices</li>
                  <li>Copyright infringement, piracy or illegal downloads</li>
                  <li>Hosting content that is illegal, abusive or harmful</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <div className="policy-card">
                <div className="policy-icon">
                  <i className="fa fa-gavel" />
                </div>
                <h5>Client Responsibility &amp; Liability</h5>
                <p>
                  The client is solely responsible for all data, content, software, and activities performed using
                  SkyServer services. SkyServer Cloud Technologies bears no responsibility or liability for any actions
                  carried out by the client.
                </p>
              </div>
            </div>
          </div>

          <div className="row enforcement-box">
            <div className="col-lg-12">
              <div className="policy-card">
                <h5>Monitoring, Suspension &amp; Termination</h5>
                <p>
                  If any abuse, misuse, legal complaint, or policy violation is reported or detected, SkyServer Cloud
                  Technologies reserves the unconditional right to immediately suspend or permanently terminate the
                  service without prior notice.
                </p>
                <p>
                  Services suspended or terminated due to abuse or unethical usage are not eligible for any refund or
                  compensation.
                </p>

                <div className="abuse-email">
                  <strong>Report Abuse</strong>
                  <br />
                  <a href="mailto:abuse@skyserver.in">abuse@skyserver.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
