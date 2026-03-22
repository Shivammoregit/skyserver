<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Deerhost Template">
    <meta name="keywords" content="Deerhost, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Privay Policy| SkyServer Cloud Technologies Cloud Technologies</title>
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
                        <span>Privay Policy</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Hosting Section Begin -->
  

    <section class="privacy-policy-section spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <h3>Privacy Policy</h3>
                </div>
                <div class="privacy-policy-content">
                    <p><strong>Overview</strong></p>
                    <p>At SkyServer Cloud Technologies (“SkyServer Cloud Technologies”), we value and respect the privacy of our customers. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website SkyServer Cloud Technologies.in and use our services. We are committed to protecting your privacy and ensuring the security of your personal information.</p>
                    
                    <p><strong>Information We Collect</strong></p>
                    <p>When you sign up for our services or visit our website, we may collect the following types of information:</p>
                    <ul>
                        <li><strong>Personal Information:</strong> We may collect your name, email address, contact number, home address, and payment details (credit or debit card information and PayPal) to provide our services and facilitate transactions.</li>
                        <li><strong>Support Information:</strong> If you contact our support team for assistance, we may collect information about your operating system, browser software, and other details necessary to resolve your query effectively.</li>
                        <li><strong>Website Usage Information:</strong> We may collect information about your visit to our website, such as your IP address, browser version, location, screen resolution, and operating system. This data helps us improve our website’s functionality and tailor it to suit your preferences.</li>
                    </ul>
                    
                    <p><strong>How We Use Your Information</strong></p>
                    <ul>
                        <li><strong>Providing Services:</strong> We use your information to process payments, deliver our services, and provide customer support.</li>
                        <li><strong>Communication:</strong> We may contact you to share important updates, special offers, promotions, or general announcements related to our services. You can opt out of receiving such emails at any time by following the instructions provided.</li>
                        <li><strong>Service Improvement:</strong> We analyze website usage information to enhance our services, customize your browsing experience, and target our marketing efforts more effectively.</li>
                    </ul>
                    
                    <p><strong>Information Sharing and Disclosure</strong></p>
                    <p>We collect information from our website visitors using Google Analytics. We use this information to better design our website and services. This information is never shared with any third party. We do not link aggregate user data with personally identifiable information.</p>
                    
                    <p><strong>Cookies</strong></p>
                    <p>We may use cookies on our website to enhance your browsing experience. Cookies are small text files stored on your computer that help us track your preferences and improve the functionality of our site. You can adjust your browser settings to refuse cookies, although this may affect your ability to access certain features of our website.</p>
                    
                    <p><strong>Security</strong></p>
                    <p>We employ industry-standard security measures to protect your personal information from unauthorized access, loss, misuse, alteration, or destruction. We use SSL encryption to safeguard your information during transmission and implement stringent security protocols to ensure its safe storage.</p>
                    
                    <p><strong>Changes to the Privacy Policy</strong></p>
                    <p>We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your personal information.</p>
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