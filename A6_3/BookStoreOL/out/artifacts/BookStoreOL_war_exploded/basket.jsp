<%--
  Created by IntelliJ IDEA.
  User: 39409
  Date: 2018/1/6
  Time: 22:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Basket </title>
    <link rel="stylesheet" href="css/all.css"/>
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
        <table style="width: 100%;">
            <caption style="text-align: left"><h2>Your Books in Basket</h2></caption>
            <thead>
            <tr style="text-align: left">
                <th><h3><b>Book Name</b></h3></th>
                <th><h3><b>Number of books</b></h3></th>
                <th style="width: 40%"><h3><b>Marks</b></h3></th>
            </tr>
            </thead>
            <tbody>
            <tr id="event" style="text-align: left">
                <th ><a id="ca" href="book1.jsp"><img src="img/book1.png" alt="围城"/>围城，钱钟书</a></th>
                <th>1</th>
                <th><p>《围城》是钱钟书所著的长篇小说，是中国现代文学史上一部风格独特的讽刺小说。被誉为“新儒林外史”。第一版于1947年由上海晨光出版公司出版。故事主要写抗战初期知识分子的群相。</p></th>
            </tr>
            </tbody>
            <tbody>
            <tr id="event" style="text-align: left">
                <th ><a id="ca" href="book2.jsp"><img src="img/book2.png" alt="撒哈拉的故事"/>撒哈拉的故事，三毛</a></th>
                <th>2</th>
                <th><p>《撒哈拉的故事》是一系列以沙漠为背景的故事。 因为一本地理杂志的吸引，三毛背着行囊走进了荒凉单调的撒哈拉沙漠，在沙漠中寻找感受生活的真善美，书中每个故事都充溢着一种浪漫、浓情的异域情调，字里行间反映着大沙漠独有的地形地貌与风土人情。</p></th>
            </tr>
            </tbody>
            <tbody>
            <tr id="event" style="text-align: left">
                <th ><a id="ca" href="book3.jsp"><img src="img/book3.png" alt="活着"/>活着，余华</a></th>
                <th>2</th>
                <th><p>《活着》是作家余华的代表作之一，讲诉了在大时代背景下，随着内战、三反五反，大跃进，文化大革命等社会变革，徐福贵的人生和家庭不断经受着苦难，到了最后所有亲人都先后离他而去，仅剩下年老的他和一头老牛相依为命。</p></th>
            </tr>
            </tbody>
        </table>
    </div><!-- #container -->
</section><!-- #content -->


<script src="js/jquery-1.11.0.min.js"></script>
<script src="js/example.js"></script>

</body>
</html>