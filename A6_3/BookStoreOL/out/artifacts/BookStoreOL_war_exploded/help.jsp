<%--
  Created by IntelliJ IDEA.
  User: 39409
  Date: 2018/1/6
  Time: 22:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>JavaScript &amp; jQuery - Kapitel 8: Ajax &amp; JSON - .load() page 1 of 3</title>
    <link rel="stylesheet" href="css/all.css"/>
</head>
<body>

<header>
    <h1>THE MAKER BUS</h1>
    <nav>
        <a href="/toIndex.form">HOME</a>
        <a href="/toSearch.form">SEARCH</a>
        <a href="/toBasket.form"  >BASKET</a>
        <a href="/toLogin.form">LOGIN</a>
        <a href="/toLogout.form">LOGOUT</a>
        <a href="/toHelp.form" class="current">HELP</a>
        <a href="/toContact.form">CONTACT US</a>
        <a href="/toAbout.form" >ABOUT US</a>
    </nav>
</header>

<section id="content">
    <div id="container">
        <h2>Help && Regulation</h2>

        <div class="third">
            <img src="img/home1.jpg" alt="Quadcopter"/>
            <h2><b>页面说明：</b></h2>
            <p>
                1.Home Page:书籍推荐+热门书籍排行 <br>
                2.Search Page:搜索书籍用的搜索引擎 <br>
                3.Basket Page:用户购物篮界面<br>
                4.Login Page:登陆注册页面<br>
                5.Logout Page:用户注销页面<br>
                6.Help Page:提供使用帮助等相关信息<br>
                7.Contact Us Page:联系我们&反馈信息<br>
                8.About Us Page:关于我们<br>
            </p>
        </div>
        <div class="third">
            <img src="img/home2.jpg" alt="Circuit boards"/>
            <h2><b>网站指南：</b></h2>
            <p>
                1.在主页可以看到书籍推荐和书籍排行<br>
                2.Search可以搜索你想要找的书籍<br>
                3.购买书籍需要先登录<br>
                4.注册的时候信息要注意保密<br>
                5.遇到什么问题可以反馈或者联系我们<br>
            </p>
        </div>
        <div class="third">
            <img src="img/home3.jpg" alt="Wheely thing"/>
            <h2><b>注意事项：</b></h2>
            <p>
                1.本网站仅供学习不用于任何商业用途<br>
                2.本网站不提供任何私人信息<br>
                3.本网站安全性不高请务必保管好密码<br>
                4.以上纯属瞎编的<br>
            </p>
        </div>

    </div>
</section>

<script src="js/jquery-1.11.0.min.js"></script>
<script src="js/jq-load.js"></script>

</body>
</html>