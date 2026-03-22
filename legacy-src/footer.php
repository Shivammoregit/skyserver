<style>
footer {
  background: #333;
  color: #fff;
  text-decoration: none;
}

footer a {
  color: #fff;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

/* === Go To Top Button === */
#goTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, #007bff, #00bfff);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  z-index: 9999;
}

#goTop img {
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1); /* make white */
  transition: transform 0.4s ease;
}

#goTop:hover {
  transform: translateY(-6px);
  background: linear-gradient(135deg, #00bfff, #007bff);
}

#goTop:hover img {
  transform: translateY(-6px);
}

#goTop.show {
  opacity: 1;
  visibility: visible;
}
</style>

<footer class="footer-section">
  <div class="footer__top" style="display: none;">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="footer__top-call">
            <h5>Need Help? WhatsApp us</h5>
            <h2>+91-7509683151</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="footer__top-auth">
            <h5>Join Now And Enjoy Super Fast Hosting</h5>
            <a href="https://skyserver.in/client/login" class="primary-btn">Log in</a>
            <a href="https://skyserver.in/client/register.php" class="primary-btn sign-up">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer__text set-bg" style="background-color: black;padding-top: 50px;margin-top: -65px;">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="footer__text-about">
            <div class="footer__logo">
              <a href="./index.php"><img src="./logo.png" alt="" style="width: 200px; height: auto; filter: invert(100%);"></a>
            </div>
            <p>SkyServer Cloud Technologies offers India's top cPanel web hosting with secure services, managed WordPress hosting, and free SSL. Enjoy expert support, advanced infrastructure, and affordable plans for optimal website performance and security.</p>
            <div class="footer__social">
              <a href="https://in.linkedin.com/company/skyserver"><i class="fa fa-linkedin"></i></a>
              <a href="https://www.instagram.com/skyserver.in/"><i class="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="footer__text-widget">
            <h5>Company</h5>
            <ul>
              <li><a href="./about.php">About Us</a></li>
              <li><a href="https://status.skyserver.in" target="_blank">Server Status</a></li>
              <li><a href="./disclaimer.php">Disclaimer Policy</a></li>
              <li><a href="./refund.php">Refund Policy</a></li>
              <li><a href="./terms.php">Terms of Services</a></li>
              <li><a href="./privacy.php">Privacy Policy</a></li>
              <li><a href="./unlimited-hosting-policy.php">Unlimited Hosting Policy</a></li>
              <li><a href="./abuse.php">Abuse & Unethical Use Policy</a></li>

            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="footer__text-widget">
            <h5>Services</h5>
            <ul>
              <li><a href="./hosting.php">Shared Hosting</a></li>
              <li><a href="./wordpress.php">WordPress Hosting</a></li>
              <li><a href="./business.php">Business Hosting</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=917509683151&amp;text=Hello+Team+SkyServer.">Custom Hosting</a></li>
              <li><a href="https://skyserver.in/client/cart.php?a=add&amp;domain=register">Register New Domain</a></li>
              <li><a href="https://skyserver.in/client/order.php?domainaction=transfer">Transfer Domain</a></li>
              <li><a href="./whois.php">Domain WHOIS Lookup</a></li>
              <li><a href="./pages/cheap-web-hosting-india">Cheap Web Hosting</a></li>

            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="footer__text-widget">
            <h5>Contact Us</h5>
            <ul class="footer__widget-info">
              <li><span class="fa fa-map-marker"></span> BT-1, Bio Technology Park, Sitapura, Jaipur, 302022</li>
              <li><span class="fa fa-mobile"></span> +91-7509683151</li>
              <li><span class="fa fa-headphones"></span> support@skyserver.in</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Shared Hosting Card with ./img/shape.png Background -->
      <div class="footer-middle" 
        style="
          background-color: #2c2891; 
          border-radius: 15px; 
          background-image: url('./img/shape.png'); 
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center; 
          padding: 20px; 
          color: white;
        ">
        <div class="container-fluid">
          <div class="reg-bar text-md-left text-center">
            <div class="d-lg-flex align-items-center justify-content-between">
              <div class="text">
                <h4 class="title-4" style="font-size: 1.5rem; font-weight: bold; margin-bottom: 10px; color: white;">
                  Shared Hosting prices starting<br>from ₹49 only.
                </h4>
              </div>
              <div class="buttons mt-lg-0 mt-3">
                <a href="./hosting.php" 
                   class="btn btn-fill-primary shadow-off text-uppercase font-500" 
                   style="background-color: #007bff; color: white; border-radius: 5px; padding: 10px 20px;">
                   Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container-fluid">
          <div class="content d-flex align-items-start mb-2" style="margin-top: 10px;padding-top: 20px;">
            <div class="copyright mr-lg-5">
              <p class="para-3">© 2024-<script>document.write(new Date().getFullYear());</script> SkyServer Cloud Technologies, All Rights Reserved.</p>
            </div>
          </div>
          <div class="content d-lg-flex align-items-end flex-wrap">
            <p class="para-3">By using this site, you signify that you agree to be bound by these <a href="terms.php">Universal Terms of Service</a>.</p>
            <div class="signature ml-auto mt-lg-0 mt-1">
              <p class="para-3">Powered by <a href="https://hdmedianetwork.in">HD Media Network</a></p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
</footer>

<!-- 🚀 Go to Top Button using Rocket Image -->
<button id="goTop" title="Go to Top">
  <img src="https://freesvg.org/img/black-and-white-rocket.png" alt="Rocket Go Top">
</button>

<!-- Js Plugins -->
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.slicknav.js"></script>

<script>
// === Go To Top Button Logic ===
const goTop = document.getElementById("goTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTop.classList.add("show");
  } else {
    goTop.classList.remove("show");
  }
});

goTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
</script>

 