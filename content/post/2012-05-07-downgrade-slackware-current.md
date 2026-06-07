---
draft: true
title: "Downgrade Slackware Current"
date: 2012-05-07 23:12:04Z
categories:
  - linux-opensource
  - slackware
tags:
  - downgrade
  - linux
  - planet-slackware
  - slackware
  - slackware-current
---
Konsekuensi menggunakan Slackware Current adalah paket bleeding edge dan belum tentu stabil. Seperti yang terjadi hari ini, setelah menjalankan slackpkg upgrade-all, (kalau tidak salah ingat beberapa paket berkaitan dengan X) keyboard dan mouse tidak berfungsi sama sekali. Saya tentunya punya waktu cari solusinya, tapi kalau butuh solusi cepat karena komputer mau dipakai buat kerja?

Balik ke topik. Slackware bisa didowngrade bila kita punya repository lokal lengkap sebelumnya. Saya selalu pakai [skrip dari Eric](http://www.slackware.com/~alien/tools/mirror-slackware-current.sh) ketimbang langsung pakai slackpkg (yah, hari ini lupa, langsung slackpkg) dengan tujuan repositori tersebut bisa saya gunakan untuk PC di rumah yang notabene tidak punya akses internet. Beruntunglah karena siklus ini. Tinggal arahkan mirror slackpkg ke repository lokal. Slackpkg akan memberitahu bahwa repositori yang akan digunakan sekarang lebih lawas dari pada yang sebelumnya, tekan Y karena kita memang menggunakan repository yang lebih lawas.

Memang tidak ada perintah slackpkg downgrade-all, tapi slackpkg upgrade-all tetap akan men-downgrade paket yang versinya berbeda. Dan slackware current pun balik ke masa lalu. :)
