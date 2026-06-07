---
draft: true
title: "booting mac via grub dan mount rw partisi hfs"
date: 2011-03-27 01:06:18Z
categories:
  - linux-opensource
  - mac
tags:
  - fsck
  - grub
  - hackintosh
  - hfs
  - hfsplus
  - mac
  - mac OS X 86
  - macintosh
  - macosx86
  - mount
  - read
  - rw
  - write
---
btw, grub debian juga bisa ngedetek mac sepertihalnya ubuntu, dan bobroknya juga sama = mac-nya tetep ndak bisa dibooting. *ngapain detek kalau ndak bisa dibooting?

di grub.cfg, baris entry mac yang panjang itu tinggal diganti :

*menuentry "macosx" {*

*insmod hfsplus*

*set root=(hd0,X)*

*multiboot /boot*

*}*

X = lokasi partisi mac

untuk mount rw partisi mac, hfsnya harus non journal. kalau sudah terlanjur ya di-disable. install paket hfsprogs, hfsutils, dan hfsplus. tinggal jalankan.

*sudo mount -o force /dev/sdaX /media/mac*

kalau masih gagal jalankan

*sudo fsck.hfsplus -f /dev/sdaX*

dan ulangi mount-nya.

tada!
