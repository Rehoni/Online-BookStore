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
    <title>JavaEE互联网轻量级框架整合开发 杨开振</title>
    <link rel="stylesheet" href="css/all.css"/>
    <link rel="stylesheet" href="css/style.css" media="screen" type="text/css">
</head>
<body>

<header>
    <h1>THE MAKER BUS</h1>
    <nav>
        <a href="/toIndex.form">HOME</a>
        <a href="/toSearch.form">SEARCH</a>
        <a href="/toBasket.form"  class="current">BASKET</a>
        <a href="/toLogin.form">LOGIN</a>
        <a href="/toLogout.form">LOGOUT</a>
        <a href="/toHelp.form">HELP</a>
        <a href="/toContact.form">CONTACT US</a>
        <a href="/toAbout.form" >ABOUT US</a>
    </nav>
</header>

<section id="content">
    <div id="container">
        <h2>Book Details Description</h2>

        <div class="third" style="width: 50%;margin-top: 10%;">
            <div >
                <img src="img/book_4.jpg" alt="Java EE互联网轻量级框架整合开发,杨开振"/>
            </div>
        </div>
        <div class="third" style="width: 50%;text-align: left;margin-top: 60px;">
            <div id="details"><p style="font-size: 2.0em;color: #000;font-weight: bold;">《JavaEE互联网轻量级框架整合开发》,杨开振</p></div>
            <div><p style="font-size: 2.0em;color: #000;font-weight: bold;">&nbsp$26.50</p></div>
            <div style="margin-top: 30px;margin-bottom: 30px;padding: 0px 20px;">
                <a class="btn btn-large btn-red" href="#"><b>直接购买</b></a>
                <a class="btn btn-large btn-orange" href="basket.jsp"><b>加入购物车</b></a>
            </div>
            <div style="color: #000;">
                <p>
                    《Java EE互联网轻量级框架整合开发——SSM框架（Spring MVC+Spring+MyBatis）和Redis实现》讲述了SSM框架的技术应用，通过Spring讲解了有关Redis的技术应用，这样更加贴近实际学习和工作的需要。
                </p>
                <p> 《Java EE互联网轻量级框架整合开发——SSM框架（Spring MVC+Spring+MyBatis）和Redis实现》主要分为6个部分，第1部分对Java互联网的框架和主要涉及的模式做初步简介；第2部分讲述MyBatis技术；第3部分讲述Spring基础（包括IoC、AOP和数据库应用），重点讲解Spring数据库事务应用，以满足互联网企业的应用要求；第4部分，讲述Spring MVC框架；第5部分，通过Spring技术的应用，讲解Redis技术；第6部分，讲解SSM+Redis实践应用，通过互联网高并发如抢票、抢红包等场景，使用全注解的方式讲解SSM框架的整合，以及高并发与锁的应用和系统性能优化。
                </p>
            </div>

        </div>

    </div><!-- #container -->
</section><!-- #content -->


<script src="js/jquery-1.11.0.min.js"></script>
<script src="js/example.js"></script>

</body>
</html>