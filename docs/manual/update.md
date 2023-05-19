---
title: 平台升级教程
date: 2022-10-14 11:18:52
---


## 版本更新:

常规更新
```shell
1. 项目根目录git pull

2. 修改项目配置文件

cd /net-axe 项目目录

cp netaxe/netboost/conf_bak.py netaxe/netboost/conf.py

修改项目配置文件,将宿主机的网卡IP配置替换到配置文件中(例如192.168.11.11,根据实际网卡IP配置)

sed -i "s/10.254.2.188/192.168.11.11/g" netaxe/netboost/conf.py

修改微服务apisix内部IP地址,修改为本机网卡IP

vi docker/server/conf/apisix_conf/config.yaml 

两处IP地址均需要修改成宿主机IP


3. cd docker/server 目录
   docker-compose build
   docker-compose down -v  (会清除volumes挂载,需要到9948去重新配置路由)
   docker-compose up -d
```

2022/10/25日升级须知！！！！！

::: warning

因微服务网关更新,数据模型变化较大

已部署过的升级需要尝试如下操作

- 1.  删除各个子应用下的迁移记录
```shell
rm -rf netaxe/apps/int_utilization/migrations/00*.py
rm -rf netaxe/apps/users/migrations/00*.py
rm -rf netaxe/apps/system/migrations/00*.py
rm -rf netaxe/apps/asset/migrations/00*.py
rm -rf netaxe/apps/config_center/migrations/00*.py
rm -rf netaxe/apps/automation/migrations/00*.py

```
- 2.  docker exec -it netaxe-server /bin/bash 进入容器
    
- 3.  执行数据库迁移和初始化
```shell
python3 manage.py makemigrations 
python3 manage.py migrate 

python3 manage.py init_asset # 资产初始化
python3 manage.py init_collect # 采集方案初始化
python3 manage.py init_system_menu # 系统菜单初始化

python3 manage.py createsuperuser # 新建管理员账户，要输入管理员账户和密码

```
- 4.  若上述均不生效 清空数据库
    
::: tip

```shell
删除数据库映射
重启数据库docker-compose
rm -rf docker/databases/init/
rm -rf docker/databases/mysql_data/
docker-composer down -v && docker-compose up -d 
```






