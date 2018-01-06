<%--
  Created by IntelliJ IDEA.
  User: 39409
  Date: 2018/1/6
  Time: 22:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>About Us</title>
    <link rel="stylesheet" href="css/all.css"/>
</head>

<body>

<header>
    <h1>THE MAKER BUS</h1>
    <nav>
        <a href="/toIndex.form">HOME</a>
        <a href="/toSearch.form">SEARCH</a>
        <a href="/toBasket.form">BASKET</a>
        <a href="/toLogin.form">LOGIN</a>
        <a href="/toLogout.form">LOGOUT</a>
        <a href="/toHelp.form">HELP</a>
        <a href="/toContact.form">CONTACT US</a>
        <a href="/toAbout.form"  class="current">ABOUT US</a>
    </nav>
</header>

<section id="content">
    <div id="container" class="location">
        <h2>Something About Us</h2>

        <div class="event">
            <img src="img/miao.jpg" alt="Map of San Francisco"/>
            <p>
                <b>帅气的淼淼！</b>
                <br/>phone:</p>
        </div>
        <div class="event">
            <img src="img/haohao.jpg" alt="Map of Texas"/>
            <p>
                <b>可爱的皓皓！</b>
                <br/>phone:</p>
        </div>
        <div class="event">
            <img src="img/zhuzhu.jpg" alt="Map of New York"/>
            <p>
                <b>猪猪橙子涵！</b>
                <br/>phone:</p>
        </div>

    </div>
</section>

<script src="js/jquery-1.11.0.min.js"></script>
<script src="js/jq-load.js"></script>

</body>

</html>
