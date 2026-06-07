---
draft: true
title: "menambah loop device di debian"
date: 2010-12-09 22:36:12Z
categories:
  - linux-opensource
tags:
  - add device loop
  - debian
  - device loop
  - foss
  - linux
  - menambah device loop
  - mount
---
on progress, migrasi ke debian. jadi saya mengunduh 30 keping CD (baru selesai setengahnya). tapi saat mencoba mount semua file iso tersebut (akan dijadikan sebagai repositori), hanya 8 file yang bisa di-mount. ternyata karena loop device-nya dibatasi segitu. nah?

cari file /etc/modules dan tambahkan

loop max_loop=64

reboot. :)
