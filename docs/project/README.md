# 人事管理系统

## 项目介绍
本项目是基于 ruoyi-vue 框架开发的人事管理系统，旨在帮助企业高效地管理人力资源，提高工作效率，减少管理风险。


## 运行环境要求
### 1. JDK 1.8+
### 2. Maven 3.0+
### 3. Node.js 10.0+
### 4. MySQL 5.7+
### 5. redis

## 项目功能介绍

## 登录
<img :src="$withBase('/img/login.png')">

## 项目首页
位于vue-ui view下的index.vue,属于静态路由,可以自己根据自己需求进行更改,右上角自带的个人信息,以及github和文档信息
<img :src="$withBase('/img/6.png')">

## 自定义开发菜单
由ruoyi-vue 代码生成器实现,其他功能同ruoyi-vue功能相同,单表crud,具有如下功能;
### 1. 数据展示加分页
### 2. 多级条件筛选
### 3. driver弹出添加数据
### 4. excel导出
### 5. 批量删除
<br/>

## 员工管理
### 信息管理菜单
对员工的基本信息进行管理
<img :src="$withBase('/img/1.png')">

## 招聘管理
### 职位信息管理
一个公司有哪些职位,对于这些职位信息进行管理
<img :src="$withBase('/img/2.png')">

### 职位信息管理
对公司的简历申请进行管理
<img :src="$withBase('/img/4.png')">

### 职位信息管理
对面试进度进行管理,由于需要多表查询,对若依的单表crud进行了一些更改
<img :src="$withBase('/img/5.png')">

## 其他功能
其他的菜单功能同ruoyi-vue功能一样,由于是二次开发并没有修改原来一些系统配置,使用权限管理可以控制动态路由,更多详情见 <a href="http://doc.ruoyi.vip/">若依官网</a>


## 项目github 地址
<a href="https://github.com/SnowyWu/personnel-admin" alt="点击进入">https://github.com/SnowyWu/personnel-admin</a>

## 项目运行
1. 使用git clone 或者zip下载文件到本地,如下图文件
<img :src="$withBase('/img/7.png')">

2. 创建数据库并且运行sql文件
<img :src="$withBase('/img/8.png')">

3. 修改application-dataSource配置,改成自己的数据库名称和账号密码
<img :src="$withBase('/img/9.png')">

4. 进入ruoyi-ui目录下载依赖

```cmd
cd ruoyi-ui

npm install or cnpm install  
```
最后推荐使用idea打开本项目运行后端,单独用vscode打开vue-ui,打开redis服务就能运行此项目了

