import PageShell from "@/components/PageShell";

export const metadata = {
  title: { absolute: "Contact | SkyServer" },
  description:
    "Contact SkyServer Cloud Technologies for support, sales, or any hosting-related questions. Reach us via WhatsApp, email, or visit our office in Jaipur.",
  alternates: { canonical: "https://skyserver.in/contact" }
};

export default function ContactPage() {
  return (
    <PageShell breadcrumb="Contact">
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 15, padding: "0 15px" }}>
        <div
          style={{
            background: "#f1f7ff",
            borderLeft: "5px solid #007bff",
            padding: "18px 20px",
            borderRadius: 10,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            maxWidth: 950,
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 15
          }}
        >
          <img
            alt="WhatsApp"
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            style={{ width: 38, height: 38 }}
          />
          <div style={{ lineHeight: 1.4 }}>
            <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#003d80" }}>Need Instant Support?</h4>
            <p style={{ margin: 0, fontSize: 15, color: "#2a2a2a" }}>
              Message us on WhatsApp — <strong>7509683151</strong>. Usually reply within <strong>5 minutes</strong>.
            </p>
          </div>

          <a
            href="https://wa.me/917509683151?text=Hi%20SkyServer%20Team"
            rel="noreferrer"
            style={{
              marginLeft: "auto",
              background: "#25D366",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 6,
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block"
            }}
            target="_blank"
          >
            Chat Now
          </a>
        </div>
      </div>

      <section className="contact-section spad" style={{ paddingTop: 55 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact__text">
                <h3>Contact info</h3>
                <ul>
                  <li>
                    <span className="fa fa-map-marker" />
                    <h5>Address</h5>
                    <p>BT-1, Bio Technology Park, Sitapura, Jaipur, 302022</p>
                  </li>
                  <li>
                    <span className="fa fa-mobile" />
                    <h5>WhatsApp No.</h5>
                    <p>+91-7509683151</p>
                  </li>
                  <li>
                    <span className="fa fa-headphones" />
                    <h5>Mail-Id</h5>
                    <p>support@skyserver.in</p>
                  </li>
                </ul>
                <div className="contact__social">
                  <a className="twitter" href="https://in.linkedin.com/company/skyserver" rel="noreferrer" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a className="instagram" href="https://www.instagram.com/skyserver.in/" rel="noreferrer" target="_blank">
                    <i className="fa fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="map">
                <iframe
                  allowFullScreen
                  aria-hidden="false"
                  height="515"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.45656346295576!2d75.87773566863115!3d26.778969693733256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9398c5310e7%3A0xe52715c3df9839cf!2sSkyServer!5e0!3m2!1sen!2sin!4v1721910173055!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  tabIndex="0"
                  title="SkyServer Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
