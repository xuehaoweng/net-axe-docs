---
title: 功能验证
date: 2022-10-11 16:13:08
permalink: /pages/755ff3/
categories:
  - pages
  - article
tags:
  - 
---

# 1. 网络设备
- 设备资产录入
- 设备关联管理账户
- 设备webssh验证
- 设备编辑和页面查询
- 设备采集方案新建和关联
- 任务列表

## 1.0 资产录入
### 1.0.1 单条设备录入
```shell
      资产录入按钮

      资产信息填写

      需要勾选数据采集为是--提供给后续信息采集任务调用

```

![单条设备前端录入](https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/单条设备录入.1d4q40px0hpc.webp)

### 1.0.2 EXCEL表格导入
```shell


      下载导入模板,依据模板信息进行设备信息填写,注意,U位不要填写相同

      导入会自动返回导入结果成功与否,请注意导入后结果提示

      导入成功会自动更新CMDB资源列表

```
如下资产录入表格
![EXCEL表格导入](https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/表格导入.5dhgi9jd9hs0.webp)

## 1.1 关联管理账户
### 1.1.1 新建设备管理账户
```shell

先到后台server_ip:9999/admin/   (后续维护迁移到web前端)

01.SSH账户    ssh账户用作页面webssh

02.Netconf账户 Netconf账户用作信息采集

到网络设备页面,展开设备行-选择关联账户按钮-勾选设备账户做设备账户关联

账户信息查询二级密码验证    netaxe_second

```
![新增管理账户](https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/新增管理账户.5hk2kl3svf80.webp)

### 1.1.2 设备关联账户

![设备关联账户](https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/设备关联账户.61uh6qnm1kc0.webp)


## 1.2 WEBSSH验证

```shell

点击设备行 WEBSSH按钮

会自动跳转到WEBSSH页面, 如下验证是否登录成功

```

登录设备成功如下:

![Webssh](https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/netaxe-webssh.4kz2iemmclu0.webp)

## 1.3 设备编辑和页面查询验证
```shell
设备录入后,编辑和查询验证
```
## 1.4 设备信息采集方案

### 1.4.1 新建采集方案
```shell
自动化目录/采集方案
附录常见厂商采集方案集合

```

附录链接 [常见厂商标准采集方案集合](https://netaxe.github.io/pages/44ef73/)

### 1.4.2 关联采集方案

```shell
选中需要关联的行首选择框,点击右上角关联采集

```
![设备关联采集方案](https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/设备关联采集.6n1ytmwam100.webp)

其他编辑皆可验证,至此设备已经关联账户且关联采集方案,即可下发定时任务进行信息采集


## 1.5. 任务列表验证
```shell
需要勾选任务函数collect_device_main
队列选择default
Crontab调度选择(需要先在调度管理进行新建,格式等同于linux  crontab job)


如果想要立马看到任务运行结果,点击任务行尾运行按钮即可

验证数据存储结果

server_ip:27018 Automation目录下(账号密码在databases目录下docker-compose.yml中)

验证任务状态flower

server_ip:5555 (admin/netaxeadmin)


```
![新建定时任务](https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/新建定时任务.7mfoj6k7nkw.webp)

## 1.6 采集数据验证mongo+mysql

![mongo](https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/mongo.2m0tc9t24ie0.webp)