---
draft: true
title: "koneksi wireless via terminal"
date: 2011-06-12 14:23:14Z
categories:
  - uncategorized
tags:
  - command line
  - interface
  - iwconfig
  - iwlist
  - linux
  - network
  - scan
  - terminal
  - wireless
  - wlan
---
yak, kemarin baru nyoba, ditulis sebagai arsip pengingat.

pastikan interfacenya aktif :ifconfig wlan0 up

pindai sinyal di sekitar kita : iwlist wlan0 scan

pilih access point : iwconfig wlan0 essid "namaAP"

minta ip dari dhcp server : dhclient wlan0

ketik ifconfig untuk melihat apakah interface sudah benar-benar mendapatkan IP address.
