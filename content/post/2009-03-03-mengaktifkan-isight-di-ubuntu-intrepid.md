---
draft: true
title: "Mengaktifkan iSight di Ubuntu Intrepid"
date: 2009-03-03 01:50:55Z
categories:
  - linux-opensource
  - mac
tags:
  - apple
  - isight
  - mac
  - macbook
  - ubuntu
---
Mungkin komputer terbaik di dunia adalah produk Apple (hehehe...mentang2 pakek Mac). Sudah jadi rahasia umum produk Apple selalu menetapkan standar sendiri yang berbeda dengan vendor hardware maupun software lain. Lihat saja sebuah Macbook atau Powerbook. Anda tidak akan melihat yang namanya 'BIOS'. Aneh sekali kan, komputer tanpa bios? Hardware di mesin mac juga dikhususkan untuk mac os, meski beberapa bisa untuk os lain. Nah, ini ada sedikit info cara mengaktifkan isight, webcam bawaan macbook, sistem operasi Linux Ubuntu. Sampai matipun tidak akan ketemu driver khusus untuk windows atau linux, kecuali mengambil file driver asli isight di Mac OSX, dan driver ini untungnya sudah disediakan di internet. Kalau punya Mac OSX, mungkin tidak terlalu sulit, bagaimana kalau tidak punya Mac OSX? Seperti saya....

Ok. Pertama donlot dulu drivernya :

http://download232.mediafire.com/ysx20cdde2yg/81xtkqyttjt/AppleUSBVideoSupport

Install isight-firmware.

apt-get install isight-firmware-tools

Jika isight-firmware tools sudah terinstall, copy file AppleUSBVideoSupport ke /lib/firmware/

jalankan

ift-extract -a /lib/firmware/AppleUSBVideoSupport

kita akan melihat baris-baris ini :

** Message: Found Mac OS X.4 intel driver

** Message: Firmware extracted successfully in /lib/firmware/isight.fw

** Message: Apply patch 0 : Fix video control interface descriptor

** Message: Apply patch 1 : Fix video streaming interface descriptor

** Message: Apply patch 2 : Fix video streaming device qualifier

** Message: Firmware patched successfully

Sejauh ini Anda boleh jingkrak2. shutdown ubuntu (bukan restart) lalu nyalakan kembali

install dan jalankan cheese

apt-get install cheese

Wajah bloon Anda akan nongol di layar. Jangan sampe kena narsis syndrom tingkat 5.
