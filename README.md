# Online-BookStore

（我的vscode更新之后没有Git版本控制了！）

数据库第六次作业——网上书店系统<br/>
emmm第五次因为事多选做懒癌人皮就鸽了<br/>
database homework_6 for online bookstore<br/>

这里贴一个超贴心的csdn博客<br/>
关于javaweb-intelliJ2017-maven的一个教程<br/>
省略很多填坑的地方吧<br/>
http://blog.csdn.net/love_forver/article/details/78434937<br/>

喔写文档的时候发现一个有趣的东西<br/>
就是数据库设计的时候需要考虑到**数据备份和恢复的功能**<br/>
这是一个十分关键的点啊突然发现，之前都没有考虑到<br/>
那么该如何做呢？<br/>
放个链接先mark一下<br/>
http://blog.csdn.net/u013754060/article/details/50885804http://blog.csdn.net/u013754060/article/details/50885804<br/>

除此之外，**并发控制**也是一个关键点！<br/>
**系统维护**
**系统部署**
**查询性能**

## mark一下

1. 各个网站的跳转关联还有点问题，等全部实现应该就好了 √
2. 搜索结果页面——怎么考虑设计 **就按购物篮这样设计**
3. 购物篮展示信息的时候，html里是纵向排列，是否可行，是否要改成横向排列
4. 登陆注册的页面，找回密码之类的 均采用contactus这样子设计
5. 帮助页面补全文字和图片 √
6. contactus的页面布局有问题，额头高了
7. aboutus，**homepage**的页面改进
8. **单个书籍详细信息页面设计**

## 开发遇到的问题

1. mapper文件中 import org.apache.ibatis.annotations.Param; 在maven项目中无法导入<br/>
    好的在maven里添加了mybatis这个包的依赖。
    这里提供maven的包依赖查询网站：http://mvnrepository.com/
2. vscode出现了一点问题：视图窗口只有资源管理器
    解决方案：在查看中点其他视图能够看到诸如源代码管理等视图，左键这个按钮图标能保持在活动视图切换器上
