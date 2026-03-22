import PageShell from "@/components/PageShell";

export const metadata = {
  title: { absolute: "About SkyServer Cloud Technologies | India's Trusted Web Hosting Company" },
  description:
    "Learn about SkyServer Cloud Technologies — India's trusted provider of secure, fast, and affordable cPanel hosting, VPS servers, domain registration, and cloud solutions with 99.9% uptime and expert 24/7 support.",
  alternates: { canonical: "https://skyserver.in/about" }
};

export default function AboutPage() {
  return (
    <PageShell breadcrumb="About Us">
      <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about__img">
                <img alt="SkyServer Server Infrastructure" src="/img/hero/server.png" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__text">
                <div className="section-title">
                  <h3> Welcome to SkyServer</h3>
                </div>
                <p>
                  SkyServer provides India&apos;s best cPanel web hosting solutions, featuring secure hosting services,
                  managed WordPress hosting, and free SSL certificates. Benefit from expert support, ensuring optimal
                  website performance and security with our advanced infrastructure. Explore tailored, affordable
                  hosting plans at SkyServer.
                </p>
                <div className="about__achievement">
                  <div className="about__achieve__item">
                    <span className="fa fa-user-o" />
                    <h4 className="achieve-counter">1800</h4>
                    <p>Clients</p>
                  </div>
                  <div className="about__achieve__item">
                    <span className="fa fa-edit" />
                    <h4 className="achieve-counter">800</h4>
                    <p>Domains</p>
                  </div>
                  <div className="about__achieve__item">
                    <span className="fa fa-clone" />
                    <h4 className="achieve-counter">8</h4>
                    <p>Server</p>
                  </div>
                  <div className="about__achieve__item">
                    <span className="fa fa-cog" />
                    <h4 className="achieve-counter">1500</h4>
                    <p>Installs</p>
                  </div>
                </div>
                <a className="primary-btn" href="https://skyserver.in/client/login">
                  Get started now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>Our Hosting Features</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature__item">
                <span className="fa fa-wordpress" />
                <h5>Managed Wordpress</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature__item">
                <span className="fa fa-bolt" />
                <h5>LiteSpeed Server</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature__item">
                <span className="fa fa-server" />
                <h5>Fast Load Time</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature__item">
                <span className="fa fa-cloud-upload" />
                <h5>400+ Software</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature__item">
                <span className="fa fa-fire" />
                <h5>Unlimited Bandwidth</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature__item">
                <span className="fa fa-database" />
                <h5>JetBackup</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature__item">
                <span className="fa fa-globe" />
                <h5>Free SSL Certificate</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature__item">
                <span className="fa fa-shield" />
                <h5>Imunify 360 Protected</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="feature__item">
                <span className="fa fa-headphones" />
                <h5>Free support</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>Our Clients say</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="testimonial__slider owl-carousel">
              <div className="col-lg-4">
                <div className="testimonial__item">
                  <h5>Aman Kumar</h5>
                  <p>customer satisfaction is really good. support team responded me even late night.</p>
                  <div className="testimonial__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial__item">
                  <h5>Chandni Upadhyay</h5>
                  <p>Very good service</p>
                  <div className="testimonial__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial__item">
                  <h5>Manish Kumar</h5>
                  <p>Amazing hosting service and the support.</p>
                  <div className="testimonial__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
