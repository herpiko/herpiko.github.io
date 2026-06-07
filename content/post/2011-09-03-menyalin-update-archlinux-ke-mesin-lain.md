---
draft: true
title: "menyalin update archlinux ke mesin lain"
date: 2011-09-03 05:26:33Z
categories:
  - linux-opensource
tags:
  - arch
  - arch linux
  - archlinux
  - linux
  - pacman
  - pacman -Syu
  - update
---
pasti menyebalkan jika harus memelihara dua sistem archlinux selalu terupdate dengan koneksi pas-pasan (sebuah mesin desktop dan sebuah laptop). nah, saya menemukan cara yang praktis, hemat waktu dan bandwith. salah satu mesin terkoneksi internet, misal laptop, jalankan update pacman -Syu sampai selesai. kemudian salinlah /var/cache/pacman/pkg/* ke direktori yang sama ke mesin lain. komputer desktop juga mesti konek internet untuk mengunduh sisa-sisa yang mungkin tertinggal atau baru muncul updatenya. jalankan pacman -Syu dan komputer desktop akan menggunakan paket yang sudah ada di cache tadi dan mengunduh sisanya yang sedikit.

selesai sudah, sekali unduh untuk dua komputer. :)
