---
draft: true
title: "Lucid Fail : driver wireless broadcom tidak otomatis terinstall (emachine)"
date: 2010-05-02 02:47:57Z
categories:
  - linux-opensource
  - uncategorized
tags:
  - broadcom
  - fail
  - linux
  - lucid
  - ubuntu
  - wireless
---
29 april dirilis, langsung donglot, install, sempurna. lalu saya coba install di sebuah emachine punya teman (cepul). sempurna, kecuali satu. driver wireless tidak bisa. padahal ini kan broadcom! jah! :(

mau donglot driver? bagaimana konek inet kalau waerles ndak bisa? (selain dengan UTP LAN dan akses broadband).

saya yakin drivernya ada di dalam CD live lucid, hanya saja tidak terinstall dengan otomatis. jika anda mengalamai masalah ini, jangan khawatir. :)

asumsi saya, lucid sudah terinstall, fresh. masukan CD-nya, kemudian buka synaptic, buka setingan bagian repositori. lalu centangkan repo dari CD instalasi, hilangkan centang dari server repo lain. OK. kemudian reload.

system > administration > hardware driver. seharusnya di jendela ini, drivernya terdeteksi, biasanya dua. pilih yang STA. active. driver akan diunduh dari CD.

beres deh. :D

btw, saat saya buka help ubuntu, slogannya masih 'linux for human being'. padahal kan sudah diganti ke 'lightware'. :)
