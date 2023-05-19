---
title: 更新日志
date: 2022-09-27 11:35:54
---

```bash
前端  /web
后端  /netaxe
docker容器化 /docker

```

[comment]: <> (# v1.0.4 beta &#40;2022/12/8&#41;)

[comment]: <> (feat: 配置中心更新)

[comment]: <> (- 1、新增地址管理)

[comment]: <> (  - 支持在线地址分配、回收、统计等操作)

[comment]: <> (  - 待更新 定时回收、定时更新)
    

[comment]: <> (```shell)

[comment]: <> (   0. 拉取ipam镜像并配置启动;验证功能ip:38001&#40;ipam服务admin后端&#41;;)
   
[comment]: <> (   1. 地址管理需要先在菜单配置页面配置前端路由;)
   
[comment]: <> (   2. 需要先在ip:9948 apisix配置api网关路由&#40;/ipam/*&#41;;)
   
[comment]: <> (   3. 平台前端验证 ip:8888/ip_manage/ipam)
   
[comment]: <> (```)


# v1.0.6 beta (2023/02/28)

feat:拓扑图更新


# v1.0.5 beta (2023/02/16)

feat: 地址管理更新

- 1、地址管理功能更新

  ![地址管理](https://cdn.staticaly.com/gh/xuehaoweng/netaxe-image@master/image.67ht05xvuvo0.webp)

fix: apisix 不稳定
  
# v1.0.3 beta (2022/11/8)

feat: 配置中心更新

- 1、新增配置下发用模板
- 2、新增 TTP 模板页面
- 3、新增 FSM 模板页面
- 4、新增配置合规性检查页面

```bash
在docker/server下执行
docker exec -it netaxe-server /bin/bash
更新菜单目录
python manage.py init_system_menu
配置中心数据表迁移
python manage.py makemigrations config_center
python manage.py migrate config_center
```

# v1.0.2 beta (2022/10/20)

feat:

- 新增云原生微服务网关
- 新增系统菜单初始化

# v1.0.1 beta (2022/10/13)

feat:

- 新增设备 excel 导入
- 设备账户前端操作
- 设备采集方案
- 设备信息采集任务
- 接口利用率

fix:

- 设备导入 bug

# v1.0.1 (2022/09/15)

feat:

- 设备采集方案
- Celery 异步任务列表
- 任务调度管理

fix:

- webssh 登录失败

# v1.0.0 (2022/09/12)

NetAxe1.0 版本发布,开放 NetAxe 源码仓库

- 1.资产管理
- 2.配置备份(nornir)
- 3.配置差异比较
- 4.webssh
- 5.设备数据的统一采集并统一数据格式(celery 多进程+netmiko)
- 6.设备接口利用率分析
