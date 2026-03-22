<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Deerhost Template">
    <meta name="keywords" content="Deerhost, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Unlimited Hosting Policy | SkyServer Cloud Technologies</title>
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
                        <span>Unlimited Hosting Policy</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Hosting Section Begin -->
  

<section class="unlimited-hosting-policy-section spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <h3>Unlimited Hosting Policy</h3>
                </div>
                <div class="unlimited-hosting-policy-content">
                    <!--<p><strong>"Unlimited"</strong> usage policies and definitions apply only to Web Hosting, WordPress Hosting, Cloud Hosting, Linux Reseller Hosting accounts, and Reseller Hosting accounts.</p>-->
                    
                    <p><strong>What "Unlimited" Means</strong></p>
                    <p>Unlimited Disk Space/Bandwidth/Website Plans: This means that we do not set a limit on the amount of bandwidth, websites, or disk space you may use in the normal operation of a personal or small business website, provided it complies with this Agreement. However, if your service usage or content presents a risk to the stability, performance, or uptime of our servers, data storage, networking, or other infrastructure, you may be required to upgrade to a VPS, or we may take action to restrict the resources your website is utilizing.</p>

                    <p><strong>What "Unlimited" DOES NOT Mean</strong></p>
                    <p>SkyServer Cloud Technologies employs complex mechanisms to protect its hosting subscribers and systems from abuse. Our "Unlimited" hosting offering is not intended for single or few hosting subscribers to unfairly or adversely impact the experience of other hosting subscribers. SkyServer Cloud Technologies provides a shared hosting service, meaning multiple websites share resources on the same server. This service is designed to meet the typical needs of small and medium-sized businesses worldwide and is NOT intended to support the sustained demand of large enterprises or non-typical applications better suited to a VPS or a dedicated server. We make every commercially reasonable effort to provide additional resources to subscribers who are using their website(s) in line with these Terms, including moving subscribers to newer and larger shared servers when necessary. However, to ensure a consistent and quality experience for all subscribers, SkyServer Cloud Technologies places automated safeguards to protect against any website growing too quickly and impacting system performance until we can evaluate the site's resource needs.</p>

                    <p><strong>Unlimited Hosting Space; Excessive SQL Database Usage</strong></p>
                    <p>SkyServer Cloud Technologies does not set specific limits on disk space for hosting subscribers, nor does it charge additional fees based on increased storage use, provided the storage use complies with these Terms. However, our service is designed to host websites, not to provide unlimited hosting for online storage, videos, images, audio, games, installers, executable files, backups, or archiving of electronic files, documents, log files, web spider or indexer, IRC, torrent, file sharing, peer-to-peer activities, testing environments, etc. Any such prohibited use will result in the termination of the subscriber's account, with or without notice. Accounts with a database size exceeding 1 GB may negatively affect server performance. We may request database size reduction to ensure proper performance or may disable the subscriber's account, with or without notice. Subscribers can create multiple databases, but each database should not exceed 1 GB.</p>

                    <p><strong>Unlimited File Transfer</strong></p>
                    <p>SkyServer Cloud Technologies does not impose limits on the amount of visitor traffic a website can receive or on the amount of content a subscriber can upload in a given month, nor do we charge additional fees for increased bandwidth usage, as long as it complies with these Terms. In most cases, a subscriber's website will support as much traffic as they can legitimately acquire. However, we reserve the right to limit processor time, bandwidth, processes, or memory if necessary to prevent negatively impacting other subscribers.</p>

                    <!--<p><strong>Reseller Unlimited Plan Policy</strong></p>-->
                    <!--<p>Under SkyServer Cloud Technologies's Reseller Unlimited plan, you can create up to 500 cPanel accounts. If you exceed 500 accounts, additional fees will apply.</p>-->

                    <p><strong>Unacceptable Resource Usage</strong></p>
                    <ul>
                        <li>Running cron entries at intervals of less than fifteen (5) minutes.</li>
                        <li>Running any MySQL queries for longer than thirty (30) seconds.</li>
                        <li>Using more than twenty-five percent (25%) of our system resources for longer than ninety (90) seconds at a time. Excessive use may result from activities such as CGI scripts, FTP, PHP, HTTP, etc.</li>
                        <li>Mailbox size should not exceed 5 GB per mailbox, with a combined mailbox size per domain not exceeding 50 GB.</li>
                    </ul>

                    <p>Refer to our <a href="terms.php" target="_blank">Terms of Service</a>, <a href="refund.php" target="_blank">Refund Policy</a>, and <a href="privacy.php" target="_blank">Privacy Policy</a> for further details.</p>
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