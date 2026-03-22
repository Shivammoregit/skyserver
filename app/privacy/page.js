import PageShell from "@/components/PageShell";

export const metadata = {
  title: { absolute: "Privacy Policy | SkyServer Cloud Technologies" },
  description:
    "Read SkyServer Cloud Technologies Privacy Policy. Learn how we collect, use, disclose, and safeguard your personal information.",
  alternates: { canonical: "https://skyserver.in/privacy" }
};

export default function PrivacyPage() {
  return (
    <PageShell breadcrumb="Privacy Policy">
      <section className="privacy-policy-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>Privacy Policy</h3>
              </div>
              <div className="privacy-policy-content">
                <p>
                  <strong>Overview</strong>
                </p>
                <p>
                  At SkyServer Cloud Technologies (&ldquo;SkyServer Cloud Technologies&rdquo;), we value and respect the
                  privacy of our customers. This Privacy Policy outlines how we collect, use, disclose, and safeguard
                  your personal information when you visit our website SkyServer Cloud Technologies.in and use our
                  services. We are committed to protecting your privacy and ensuring the security of your personal
                  information.
                </p>

                <p>
                  <strong>Information We Collect</strong>
                </p>
                <p>
                  When you sign up for our services or visit our website, we may collect the following types of
                  information:
                </p>
                <ul>
                  <li>
                    <strong>Personal Information:</strong> We may collect your name, email address, contact number, home
                    address, and payment details (credit or debit card information and PayPal) to provide our services
                    and facilitate transactions.
                  </li>
                  <li>
                    <strong>Support Information:</strong> If you contact our support team for assistance, we may collect
                    information about your operating system, browser software, and other details necessary to resolve
                    your query effectively.
                  </li>
                  <li>
                    <strong>Website Usage Information:</strong> We may collect information about your visit to our
                    website, such as your IP address, browser version, location, screen resolution, and operating system.
                    This data helps us improve our website&apos;s functionality and tailor it to suit your preferences.
                  </li>
                </ul>

                <p>
                  <strong>How We Use Your Information</strong>
                </p>
                <ul>
                  <li>
                    <strong>Providing Services:</strong> We use your information to process payments, deliver our
                    services, and provide customer support.
                  </li>
                  <li>
                    <strong>Communication:</strong> We may contact you to share important updates, special offers,
                    promotions, or general announcements related to our services. You can opt out of receiving such
                    emails at any time by following the instructions provided.
                  </li>
                  <li>
                    <strong>Service Improvement:</strong> We analyze website usage information to enhance our services,
                    customize your browsing experience, and target our marketing efforts more effectively.
                  </li>
                </ul>

                <p>
                  <strong>Information Sharing and Disclosure</strong>
                </p>
                <p>
                  We collect information from our website visitors using Google Analytics. We use this information to
                  better design our website and services. This information is never shared with any third party. We do
                  not link aggregate user data with personally identifiable information.
                </p>

                <p>
                  <strong>Cookies</strong>
                </p>
                <p>
                  We may use cookies on our website to enhance your browsing experience. Cookies are small text files
                  stored on your computer that help us track your preferences and improve the functionality of our site.
                  You can adjust your browser settings to refuse cookies, although this may affect your ability to access
                  certain features of our website.
                </p>

                <p>
                  <strong>Security</strong>
                </p>
                <p>
                  We employ industry-standard security measures to protect your personal information from unauthorized
                  access, loss, misuse, alteration, or destruction. We use SSL encryption to safeguard your information
                  during transmission and implement stringent security protocols to ensure its safe storage.
                </p>

                <p>
                  <strong>Changes to the Privacy Policy</strong>
                </p>
                <p>
                  We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective
                  immediately upon posting the revised policy on our website. We encourage you to review this policy
                  periodically to stay informed about how we collect, use, and protect your personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
