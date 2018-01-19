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
    <title>围城 钱钟书 </title>
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
                <img src="img/book1.png" alt="围城"/>
            </div>
        </div>
        <div class="third" style="width: 50%;text-align: left;margin-top: 60px;">
            <div id="details"><p style="font-size: 2.5em;color: #000;font-weight: bold;">《围城》, 钱钟书</p></div>
            <div><p style="font-size: 2.0em;color: #000;font-weight: bold;">&nbsp$16.20</p></div>
            <div style="margin-top: 30px;margin-bottom: 30px;padding: 0px 20px;">
                <a class="btn btn-large btn-red" href="#"><b>直接购买</b></a>
                <a class="btn btn-large btn-orange" href="basket.jsp"><b>加入购物车</b></a>
            </div>
            <div style="color: #000;">
                <p>
                    《围城》是钱钟书所著的长篇小说，是中国现代文学史上一部风格独特的讽刺小说。被誉为“新儒林外史”。第一版于1947年由上海晨光出版公司出版。故事主要写抗战初期知识分子的群相。
                </p>
                <p>围城故事发生于1920到1940年代。主角方鸿渐是个从中国南方乡绅家庭走出的青年人，迫于家庭压力与同乡周家女子订亲。但在其上大学期间，周氏患病早亡。准岳父周先生被方所写的唁电感动，资助他出国求学。
                    方鸿渐在欧洲游学期间，不理学业。为了给家人一个交待，方于毕业前购买了虚构的“克莱登大学”的博士学位证书，并随海外学成的学生回国。在船上与留学生鲍小姐相识并热恋，但被鲍小姐欺骗感情。同时也遇见了大学同学苏文纨。
                </p>
            </div>

        </div>

    </div><!-- #container -->
</section><!-- #content -->


<script src="js/jquery-1.11.0.min.js"></script>
<script src="js/example.js"></script>

</body>
</html>