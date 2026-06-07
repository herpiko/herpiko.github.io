---
draft: true
title: "EXT3-fs: sdaX couldn''t mount because of unsupported optional features (240)"
date: 2012-04-15 16:55:59Z
categories:
  - linux-opensource
  - slackware
tags:
  - boot
  - ext3
  - filesystem
  - lilo
  - slackware
  - unsupported optional feature
---
Pesan galat ini muncul di awal booting, tetapi bisa diabaikan dan masih bisa masuk sistem. Tapi tidak enak juga melihat pesan galat seperti itu setiap booting. Saya temukan solusinya di sini : [http://www.linuxquestions.org/questions/slackware-14/couldnt-mount-because-of-unsupported-optional-features-240-a-843675/](http://www.linuxquestions.org/questions/slackware-14/couldnt-mount-because-of-unsupported-optional-features-240-a-843675/).

Hal ini terjadi karena kernel mendahulukan ext2 dan ext3 sebelum ext4. Tambahkan rootfstype=ext4 di baris append di /etc/lilo.conf

[code]append="quiet vt.default_utf8=0 rootfstype=ext4"[/code]

Kemudian tulis konfigurasi lilo ke MBR.

[code]sudo lilo[/code]
