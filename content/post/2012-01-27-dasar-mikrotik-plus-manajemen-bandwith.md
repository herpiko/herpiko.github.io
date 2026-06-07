---
draft: true
title: "Dasar Mikrotik Plus Manajemen Bandwith"
date: 2012-01-27 02:09:34Z
categories:
  - networking
tags:
  - bandwith management
  - jaringan
  - mikrotik
  - networking
  - router
  - routing
---
ditulis sebagai catatan pengingat. asumsi, menggunakan modem speedy (192.168.1.1) dan jaringan lokal 192.168.10.xx. salah satu client yang diatur bandwithnya adalah 192.168.10.2

1. Menambahkan password

[code]$/password

 old password:

 new password:*****

 retype password:******[/code]

2. Memberi nama pada interface

[code]/interface set 0 name=speedy

 /interface set 1 name=local[/code]

3. Memberi nama hostname

[code]/system identity set name=routermikrotik[/code]

4. Set IP Address

[code]/ip address add interface=speedy address 192.168.1.2 netmask 255.255.255.0

 /ip address add interface=local address 192.168.10.1 netmask 255.255.255.0[/code]

5.Set Gateway

[code]/ip route add gateway=192.168.1.1[/code]

6. Set NAT

[code]/ip firewall nat add chain=srcnat action=masquerade out-interface=speedy[/code]

7. DNS server

[code]/ip dns set primary-dns=8.8.8.8 allow-remoterequests=yes[/code]

8. Manajemen Bandwith

[code]/ip firewall mangle add chain=prerouting src-address=192.168.10.2 dst-address=0.0.0.0/0 action=mark-connection new-connection-mark=client01-con passthrough=yes

 /ip firewall mangle add chain=prerouting action=mark-packet new-packet-mark=client01 passthrough=yes connection-mark=client01-con

 /queue tree add name=client01-up parent=speedy packet-mark=client01 limit-at=64k max-limit=512k

 /queue tree add name=client01-down parent=local packet-mark=client01 limit-at=64k max-limit=512k[/code]

4 perintah diatas diulang untuk alamat IP lain dengan penyesuaian.
