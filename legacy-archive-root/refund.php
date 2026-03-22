<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Deerhost Template">
    <meta name="keywords" content="Deerhost, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Refund Policy | SkyServer Cloud Technologies</title>
    <link rel="icon" type="image/png" sizes="48x48" href="img/ico.png">


    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900&display=swap"
        rel="stylesheet">

    <!-- Css Styles -->
    <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="css/elegant-icons.css" type="text/css">
    <link rel="stylesheet" href="css/flaticon.css" type="text/css">
    <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css">
    <link rel="stylesheet" href="css/slicknav.min.css" type="text/css">
    <link rel="stylesheet" href="css/style.css" type="text/css">
</head>

<body>
    <!-- Page Preloder -->
    <div id="preloder">
        <div class="loader"></div>
    </div>

    <!-- Offcanvas Menu Begin -->
   
    <!-- Offcanvas Menu End -->

    <!-- Header Section Begin -->
<?php include 'header.php'; ?>    <!-- Header End -->

    <!-- Breadcrumb Begin -->
    <div class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__option">
                        <a href="./index.php"><span class="fa fa-home"></span> Home</a>
                        <span>Refund Policy</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Hosting Section Begin -->
  

<section class="refund-policy-section spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <h3>Refund Policy</h3>
                </div>
                <div class="refund-policy-content">
                    <p><strong>Welcome to SkyServer Cloud Technologies!</strong></p>
                    <p>We value your satisfaction and aim to provide the best web hosting services. If, for any reason, you are not satisfied with our services, we offer a refund policy to ensure you have a hassle-free experience.</p>
                    
                    <p><strong>7-Day Refund Period</strong></p>
                    <p>We offer a 7-day refund period from the date of your initial purchase. Within this period, you are eligible for a full refund if you are not satisfied with our services.</p>
                    <ul>
                     
                        <li>Domain Registration (<strong> Note: Domain Registration Fees are Non-Refundable </strong>)</li>
                    </ul>
<br>
                    <p><strong>Eligibility for a Refund</strong></p>
                    <p>To be eligible for a refund within the 7-day period, the following conditions must be met:</p>
                    <ul>
                        <li>You must request a refund through our support ticket system within 7 days of the initial purchase.</li>
                        <li>Your account must be in good standing, with no violations of our Terms of Service.</li>
                        <li>The reason for the refund request must be related to issues with our hosting service's performance or reliability.</li>
                        <li>Refund is only applicable to new accounts; once taken, you will not be eligible for another refund.</li>
                    </ul>
<br>
                    <p>Please note that the following circumstances do not qualify for a refund:</p>
                    <ul>
                        <li>Violation of our Terms of Service.</li>
                        <li>Cancellation of service after the 7-day refund period has expired.</li>
                        <li>Domain registration fees after the initial grace period.</li>
                        <li>Payments made through non-refundable payment methods (e.g., cryptocurrency).</li>
                    </ul>

                    <p><strong>Important:</strong> If you register a domain that is offered free with a web hosting plan, you are not eligible for a refund.</p>
                    <!--<p><strong>No Refund:</strong> Refunds will not be available for Linux Reseller Hosting.</p>-->

                    <p><strong>Cancellation</strong></p>
                    <p>You can request cancellation whenever you want, but you must be careful about your data.</p>

                    <p><strong>How to Request a Refund</strong></p>
                    <p>To request a refund within the 7-day period, please follow these steps:</p>
                    <ul>
                        <li>Log in to your account on our website.</li>
                        <li>Submit a support ticket through the client portal.</li>
                        <li>In your support ticket, provide details about why you are requesting a refund.</li>
                        <li>Our support team will review your request and process it accordingly.</li>
                    </ul>
                    
<br>
                    <p><strong>Processing Time</strong></p>
                    <p>Refund requests will be processed within <strong>[7] business days</strong> from the date of submission. After approval, the refund will be issued to the original payment method used for the purchase.</p>

                    <p><strong>Contact Us</strong></p>
                    <p>If you have any questions or need further assistance regarding our refund policy, please contact our support team at:</p>
                    <p><strong>Email:</strong> support@skyserver.in</p>
                    <p><strong>Phone:</strong> +917509683151</p>
                    <p><strong>Address:</strong> SkyServer Cloud Technologies, Poornima University Incubation Center
(PU-INCENT), Admin-2, Poornima University, Sitapura Extension, Jaipur, Rajasthan 303905 India</p>
                    <p><strong>Website:</strong> <a href="https://SkyServer.in" target="_blank">https://SkyServer.in</a></p>

                    <p><strong>Last Updated:</strong> 02/12/2024</p>
                </div>
            </div>
        </div>
    </div>
</section>


    
  

 

 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
    <!-- Hosting Section End -->

    <!-- Question Section Begin -->
  
    <!-- Contact Form End -->

    <script>
        function checkData(event) {
            // Prevent the form from submitting by default
            event.preventDefault();
            let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            let form = document.getElementById('sendForm');
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let website = document.getElementById('website').value;
            let question = document.getElementById('question').value;

            if(name == "" || email == "" || website == "" || question == ""){
                alert('Data is Missing');
            } else if(!email.match(validRegex)){
                alert('Invalid Email');
            } else {
                // form.action = "sendMail.php";
                form.submit();
            }

        }


    </script>
    <!-- Question Section End -->

    <!-- Footer Section Begin -->
  <?php include 'footer.php'; ?>    <!-- Footer Section End -->

    <!-- Js Plugins -->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.slicknav.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>