# Online-BookStore

数据库第六次作业——网上书店系统<br/>
emmm第五次因为事多选做懒癌人皮就鸽了<br/>
database homework_5 for online bookstore<br/>

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

## 开发遇到的问题

1.mapper文件中 import org.apache.ibatis.annotations.Param; 在maven项目中无法导入<br/>
