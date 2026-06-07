---
draft: true
title: "rekoper tabel partisi"
date: 2011-11-10 01:45:43Z
categories:
  - tong sampah
tags:
  - harddisk
  - partisi
  - partisi hilang
  - partition
  - partition tabel
  - recovery
---
pernah ndak ngalamin partisi hdd kita jadi aneh? saat mau diinstall sistem operasi, installernya (baik linux, mac, maupun windows) mendeteksi bawah hdd itu tidak punya partisi, kosong. padahal kalau booting ke sistem operasi yang sudah ada, partisinya masih ada, lengkap dengan data.

yep, itu bisa diperbaiki hanya dengan memformat ulang salah satu partisi. mumpung masih bisa booting dan bisa dideteksi oleh sistem operasi, gunakan partisi manager (gparted, diskutility, maupun partition magic, semua bisa) dan format salah satu partisi yang ndak penting. kalau semua penting, backup salah satu kemudian format. saya kira itu akan mengembalikan informasi tabel partisi ke MBR. tapi bener kok, di saya masalahnya solved. :)

cara lain yang pernah saya coba dan berhasil, menggunakan tool di CD mini PE/bartPE. saya lupa persis nama toolnya.
