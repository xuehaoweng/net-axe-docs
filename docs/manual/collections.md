---
title: 常见厂商标准采集方案集合
date: 2022-10-13 16:31:18
permalink: /pages/44ef73/
categories:
  - pages
  - article
tags:
  - 
---

## 1. 华三 NETCONF 标准采集 (netconf 方法) 仅netconf采集

```shell
colleciton_arp_list

colleciton_interface_list

colleciton_lagg_list

collection_device_PhysicalEntities

collection_device_base

collection_ipv4address_list

collection_ipv6address_list

collection_irf_info

collection_lldp_info

collection_mac_over_evpn

collection_mac_unicasttable

collection_vrrp_info

patch_version

netconfig_get_config

netconf_get_schema
```

## 2.华三二层接入采集(netconf方法) 仅netconf采集

```shell
colleciton_arp_list

colleciton_interface_list

colleciton_lagg_list

collection_device_PhysicalEntities

collection_ipv4address_list

collection_ipv6address_list

collection_irf_info

collection_lldp_info

collection_mac_unicasttable

patch_version
```

## 3. 华三V5系列交换机标准采集(CMD命令) 仅命令采集

```shell
display ip interface

display arp

display mac-address

display link-aggregation verbose

display interface brief

display lldp neighbor-information

display device manuinfo

display version

display irf
```

## 4.华为CE系列交换机 (netconf方法) 仅netconf采集
```shell
colleciton_arp_list

colleciton_moduleinfo

colleciton_stack

colleciton_system_info

colleciton_trunk_lacp

collection_intf_ipv4v6

collection_lldp_ip

collection_mac_bd

collection_mac_table

collection_mac_vxlan

collection_mac_vxlan_control
```

## 5.华为S系列交换机标准采集(CMD命令)(仅命令采集)
```shell
display interface

display arp

display mac-address

display lldp neighbor

display device manufacture-info

display stack
```

## 6.Cisco

```shell
show interfaces

show ip arp

show mac-address-table

show version

show lldp neighbors detail

show cdp neighbors detail

```