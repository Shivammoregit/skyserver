import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: { absolute: "Unlimited Hosting Policy | SkyServer Cloud Technologies" },
  description:
    "Read SkyServer Cloud Technologies Unlimited Hosting Policy. Understand what unlimited means for disk space, bandwidth, and website plans.",
  alternates: { canonical: "https://skyserver.in/unlimited-hosting-policy" }
};

export default function UnlimitedHostingPolicyPage() {
  return (
    <PageShell breadcrumb="Unlimited Hosting Policy">
      <section className="unlimited-hosting-policy-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>Unlimited Hosting Policy</h3>
              </div>
              <div className="unlimited-hosting-policy-content">
                <p>
                  <strong>What &ldquo;Unlimited&rdquo; Means</strong>
                </p>
                <p>
                  Unlimited Disk Space/Bandwidth/Website Plans: This means that we do not set a limit on the amount of
                  bandwidth, websites, or disk space you may use in the normal operation of a personal or small business
                  website, provided it complies with this Agreement. However, if your service usage or content presents
                  a risk to the stability, performance, or uptime of our servers, data storage, networking, or other
                  infrastructure, you may be required to upgrade to a VPS, or we may take action to restrict the
                  resources your website is utilizing.
                </p>

                <p>
                  <strong>What &ldquo;Unlimited&rdquo; DOES NOT Mean</strong>
                </p>
                <p>
                  SkyServer Cloud Technologies employs complex mechanisms to protect its hosting subscribers and systems
                  from abuse. Our &ldquo;Unlimited&rdquo; hosting offering is not intended for single or few hosting
                  subscribers to unfairly or adversely impact the experience of other hosting subscribers. SkyServer
                  Cloud Technologies provides a shared hosting service, meaning multiple websites share resources on the
                  same server. This service is designed to meet the typical needs of small and medium-sized businesses
                  worldwide and is NOT intended to support the sustained demand of large enterprises or non-typical
                  applications better suited to a VPS or a dedicated server.
                </p>

                <p>
                  <strong>Unlimited Hosting Space; Excessive SQL Database Usage</strong>
                </p>
                <p>
                  SkyServer Cloud Technologies does not set specific limits on disk space for hosting subscribers, nor
                  does it charge additional fees based on increased storage use, provided the storage use complies with
                  these Terms. However, our service is designed to host websites, not to provide unlimited hosting for
                  online storage, videos, images, audio, games, installers, executable files, backups, or archiving of
                  electronic files. Accounts with a database size exceeding 1 GB may negatively affect server
                  performance. Subscribers can create multiple databases, but each database should not exceed 1 GB.
                </p>

                <p>
                  <strong>Unlimited File Transfer</strong>
                </p>
                <p>
                  SkyServer Cloud Technologies does not impose limits on the amount of visitor traffic a website can
                  receive or on the amount of content a subscriber can upload in a given month, nor do we charge
                  additional fees for increased bandwidth usage, as long as it complies with these Terms. However, we
                  reserve the right to limit processor time, bandwidth, processes, or memory if necessary to prevent
                  negatively impacting other subscribers.
                </p>

                <p>
                  <strong>Unacceptable Resource Usage</strong>
                </p>
                <ul>
                  <li>Running cron entries at intervals of less than fifteen (5) minutes.</li>
                  <li>Running any MySQL queries for longer than thirty (30) seconds.</li>
                  <li>
                    Using more than twenty-five percent (25%) of our system resources for longer than ninety (90) seconds
                    at a time. Excessive use may result from activities such as CGI scripts, FTP, PHP, HTTP, etc.
                  </li>
                  <li>
                    Mailbox size should not exceed 5 GB per mailbox, with a combined mailbox size per domain not
                    exceeding 50 GB.
                  </li>
                </ul>

                <p>
                  Refer to our{" "}
                  <Link href="/terms" target="_blank">
                    Terms of Service
                  </Link>
                  ,{" "}
                  <Link href="/refund" target="_blank">
                    Refund Policy
                  </Link>
                  , and{" "}
                  <Link href="/privacy" target="_blank">
                    Privacy Policy
                  </Link>{" "}
                  for further details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
