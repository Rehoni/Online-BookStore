<%--
  Created by IntelliJ IDEA.
  User: 39409
  Date: 2018/1/6
  Time: 22:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>

<html>

<head>
    <meta charset="UTF-8">
    <title>Login|Register</title>
    <link rel="stylesheet" href="css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="css/contactus.css">
    <link rel="stylesheet" href="css/vendor/main.css">
    <link rel="stylesheet" href="css/all.css"/>
    <!--owl-carousel css-->
    <link rel="stylesheet" href="css/owl-carousel/owl.carousel.css">
    <link rel="stylesheet" href="css/owl-carousel/owl.theme.css">
    <link rel="stylesheet" href="css/owl-carousel/owl.transitions.css">

    <link rel="stylesheet" href="css/vendor/animations.css">
    <link rel="stylesheet" href="css/vendor/font-awesome.min.css">

    <link rel="stylesheet" href="css/vendor/color1.css">
</head>

<body>

<header>
    <h1>THE MAKER BUS</h1>
    <nav>
        <a href="/toIndex.form">HOME</a>
        <a href="/toSearch.form">SEARCH</a>
        <a href="/toBasket.form">BASKET</a>
        <a href="/toLogin.form" class="current">LOGIN</a>
        <a href="/toLogout.form">LOGOUT</a>
        <a href="/toHelp.form">HELP</a>
        <a href="/toContact.form">CONTACT US</a>
        <a href="/toAbout.form">ABOUT US</a>
    </nav>
</header>

<section id="content">
    <div id="container">
        <h2>Here to Login or Register</h2>
        <section id="contact" class="location">
            <form name="sentMessage" id="contactForm" novalidate="">
                <div class="row">
                    <div class="col-xs-12 col-md-10 col-md-offset-1">
                        <div class="form-holder" style="padding-right: 40px;width: 800px;background-color: #3fbb8a;">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Your Name *" id="name" required=""
                                       data-validation-required-message="Please enter your name.">
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Your Email *" id="email"
                                       required="" data-validation-required-message="Please enter your email address.">
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Your Message *" id="message" required=""
                                          data-validation-required-message="Please enter a message."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div id="success"></div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>

    </div>
</section>

<script src="js/jq-load.js"></script>
<!-- jQuery -->
<script src="js/vendor/jquery.js"></script>
<!-- Bootstrap Core JavaScript -->
<script src="js/vendor/bootstrap.min.js"></script>
<!-- Plugin JavaScript -->
<script src="js/vendor/jquery.easing.min.js"></script>
<!-- Contact Form JavaScript -->
<script src="js/vendor/jqBootstrapValidation.js"></script>
<script src="js/vendor/contact_me.js"></script>
<script src="js/vendor/owl.carousel.min.js"></script>
<script src="js/vendor/prettify.js"></script>
<script type="text/javascript" src="js/vendor/css3-animate-it.js"></script>
</body>

</html>