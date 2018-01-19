<%--
  Created by IntelliJ IDEA.
  User: 39409
  Date: 2018/1/19
  Time: 17:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Search result </title>
    <link rel="stylesheet" href="css/all.css"/>
</head>
<body>

<header>
    <h1>THE MAKER BUS</h1>
    <nav>
        <a href="/toIndex.form">HOME</a>
        <a href="/toSearch.form" class="current">SEARCH</a>
        <a href="/toBasket.form">BASKET</a>
        <a href="/toLogin.form">LOGIN</a>
        <a href="/toLogout.form">LOGOUT</a>
        <a href="/toHelp.form">HELP</a>
        <a href="/toContact.form">CONTACT US</a>
        <a href="/toAbout.form" >ABOUT US</a>
    </nav>
</header>

<section id="content">
    <div id="container">
        <h2>Search result: </h2>

        <div class="third">
            <div id="event">
                <a id="ca" href="ca.html"><img src="img/map-ca.png" alt="San Francisco"/>San Francisco, CA</a>
                <a id="tx" href="tx.html"><img src="img/map-tx.png" alt="Austin, TX"/>Austin, TX</a>
                <a id="ny" href="ny.html"><img src="img/map-ny.png" alt="New York, NY"/>New York, NY</a>
            </div>
        </div>
        <div class="third">
            <div id="details">Quatities</div>
        </div>
        <div class="third">
            <div>marks</div>
            <div id="sessions">
                <p>Wähle eine Veranstaltung aus der Liste hier links.</p>
            </div>
        </div>

    </div><!-- #container -->
</section><!-- #content -->


<script src="js/jquery-1.11.0.min.js"></script>
<script src="js/example.js"></script>

</body>
</html>