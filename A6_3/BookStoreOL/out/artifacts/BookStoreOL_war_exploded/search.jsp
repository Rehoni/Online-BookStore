<%--
  Created by IntelliJ IDEA.
  User: 39409
  Date: 2018/1/6
  Time: 21:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Search Page
    </title>
    <link rel="stylesheet" href="css/all.css"/>
    <link rel="stylesheet" href="css/search.css">
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
        <a href="/toAbout.form">ABOUT US</a>
    </nav>
</header>

<section id="content">
    <div id="container">
        <h2>Search Books</h2>
        <div id="search">
            <form action="" method="get">
                <input type="text" name="search_text" id="search_text" placeholder="Search Your Books">
                <input type="button" name="search_button" id="search_button">
            </form>
        </div>

    </div>
</section>

<script src="js/jquery-1.11.0.min.js"></script>
<script src="js/jq-load.js"></script>

</body>

</html>
