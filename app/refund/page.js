import PageShell from "@/components/PageShell";

export const metadata = {
  title: { absolute: "Refund Policy | SkyServer Cloud Technologies" },
  description:
    "Read SkyServer Cloud Technologies Refund Policy. We offer a 7-day refund period for unsatisfied customers with transparent terms.",
  alternates: { canonical: "https://skyserver.in/refund" }
};

export default function RefundPage() {
  return (
    <PageShell breadcrumb="Refund Policy">
      <section className="refund-policy-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>Refund Policy</h3>
              </div>
              <div className="refund-policy-content">
                <p>
                  <strong>Welcome to SkyServer Cloud Technologies!</strong>
                </p>
                <p>
                  We value your satisfaction and aim to provide the best web hosting services. If, for any reason, you
                  are not satisfied with our services, we offer a refund policy to ensure you have a hassle-free
                  experience.
                </p>

                <p>
                  <strong>7-Day Refund Period</strong>
                </p>
                <p>
                  We offer a 7-day refund period from the date of your initial purchase. Within this period, you are
                  eligible for a full refund if you are not satisfied with our services.
                </p>
                <ul>
                  <li>
                    Domain Registration (
                    <strong> Note: Domain Registration Fees are Non-Refundable </strong>)
                  </li>
                </ul>

                <br />
                <p>
                  <strong>Eligibility for a Refund</strong>
                </p>
                <p>
                  To be eligible for a refund within the 7-day period, the following conditions must be met:
                </p>
                <ul>
                  <li>
                    You must request a refund through our support ticket system within 7 days of the initial purchase.
                  </li>
                  <li>
                    Your account must be in good standing, with no violations of our Terms of Service.
                  </li>
                  <li>
                    The reason for the refund request must be related to issues with our hosting service&apos;s
                    performance or reliability.
                  </li>
                  <li>
                    Refund is only applicable to new accounts; once taken, you will not be eligible for another refund.
                  </li>
                </ul>

                <br />
                <p>Please note that the following circumstances do not qualify for a refund:</p>
                <ul>
                  <li>Violation of our Terms of Service.</li>
                  <li>Cancellation of service after the 7-day refund period has expired.</li>
                  <li>Domain registration fees after the initial grace period.</li>
                  <li>Payments made through non-refundable payment methods (e.g., cryptocurrency).</li>
                </ul>

                <p>
                  <strong>Important:</strong> If you register a domain that is offered free with a web hosting plan, you
                  are not eligible for a refund.
                </p>

                <p>
                  <strong>Cancellation</strong>
                </p>
                <p>
                  You can request cancellation whenever you want, but you must be careful about your data.
                </p>

                <p>
                  <strong>How to Request a Refund</strong>
                </p>
                <p>To request a refund within the 7-day period, please follow these steps:</p>
                <ul>
                  <li>Log in to your account on our website.</li>
                  <li>Submit a support ticket through the client portal.</li>
                  <li>In your support ticket, provide details about why you are requesting a refund.</li>
                  <li>Our support team will review your request and process it accordingly.</li>
                </ul>

                <br />
                <p>
                  <strong>Processing Time</strong>
                </p>
                <p>
                  Refund requests will be processed within <strong>[7] business days</strong> from the date of
                  submission. After approval, the refund will be issued to the original payment method used for the
                  purchase.
                </p>

                <p>
                  <strong>Contact Us</strong>
                </p>
                <p>
                  If you have any questions or need further assistance regarding our refund policy, please contact our
                  support team at:
                </p>
                <p>
                  <strong>Email:</strong> support@skyserver.in
                </p>
                <p>
                  <strong>Phone:</strong> +917509683151
                </p>
                <p>
                  <strong>Address:</strong> SkyServer Cloud Technologies, Poornima University Incubation Center
                  (PU-INCENT), Admin-2, Poornima University, Sitapura Extension, Jaipur, Rajasthan 303905 India
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="https://SkyServer.in" target="_blank" rel="noreferrer">
                    https://SkyServer.in
                  </a>
                </p>

                <p>
                  <strong>Last Updated:</strong> 02/12/2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
