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
    <title>Search Result </title>
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
        <table style="width: 100%;">
            <caption style="text-align: left"><h2>Search Result: java</h2></caption>
            <thead>
            <tr style="text-align: left">
                <th><h3><b>Book Name</b></h3></th>
                <th><h3><b>Prices</b></h3></th>
                <th style="width: 40%"><h3><b>Description</b></h3></th>
            </tr>
            </thead>
            <tbody>
            <tr id="event" style="text-align: left">
                <th ><a id="ca" href="book_4.jsp"><img src="img/book_1.jpg" alt="java"/>java核心技术卷I, [美]Cay S.Horstmann</a></th>
                <th>$20.00</th>
                <th><p>Java领域*有影响力和价值的著作之一，与《Java编程思想》齐名，余年全球畅销不衰，广受好评 根据Java SE 8全面更新，系统全面讲解Java语言的核心概念、语法、重要特性和开发方法，含大量案例，实践性强.</p></th>
            </tr>
            </tbody>
            <tbody>
            <tr id="event" style="text-align: left">
                <th ><a id="ca" href="book_2.jsp"><img src="img/book_2.jpg" alt="java"/>java语言程序设计,[译]梁勇</a></th>
                <th>$17.50</th>
                <th><p>本书是Java语言的经典教材，中文版分为基础篇和进阶篇，主要介绍程序设计基础、面向对象编程、GUI程序设计、数据结构和算法、高级Java程序设计等内容。</p></th>
            </tr>
            </tbody>
            <tbody>
            <tr id="event" style="text-align: left">
                <th ><a id="ca" href="book_3.jsp"><img src="img/book_3.jpg" alt="java"/>Head First Java(中文版),塞若/贝茨</a></th>
                <th>$21.00</th>
                <th><p>Head Frist Java既是完整的对象导向程序设计，又是Java学习的指引。本书从学习Java程序语言的基础知识入手，分别对线程、网络和分布式编程进行了详细的介绍，并通过大量的实例，加强对所学知识的理解和掌握。</p></th>
            </tr>
            </tbody>
            <tbody>
            <tr id="event" style="text-align: left">
                <th ><a id="ca" href="book_4.jsp"><img src="img/book_4.jpg" alt="java"/>Java EE互联网轻量级框架整合开发,杨开振</a></th>
                <th>$26.50</th>
                <th><p>《Java EE互联网轻量级框架整合开发——SSM框架（Spring MVC+Spring+MyBatis）和Redis实现》讲述了SSM框架的技术应用，通过Spring讲解了有关Redis的技术应用，这样更加贴近实际学习和工作的需要。</p></th>
            </tr>
            </tbody>
        </table>
    </div><!-- #container -->
</section><!-- #content -->


<script src="js/jquery-1.11.0.min.js"></script>
<script src="js/example.js"></script>

</body>
</html>