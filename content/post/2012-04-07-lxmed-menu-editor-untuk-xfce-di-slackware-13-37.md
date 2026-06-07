---
draft: true
title: "LXmed : Menu Editor untuk XFCE di Slackware 13.37"
date: 2012-04-07 01:39:33Z
categories:
  - linux-opensource
  - slackware
tags:
  - linux
  - lxmed
  - menu editor
  - planet-slackware
  - slackware
  - xfce
---
Saat masih pakai arch, saya menggunakan openbox dan nyaman dengan obmenuconfig. Bagaimana dengan XFCE di slackware (64 multilib)? Yep, LXmed adalah piranti lunak untuk menyunting menu pada LXDE, sebuah desktop manager yang lebih ringan dari pada XFCE, dan juga bekerja untuk XFCE. Silakan unduh paketnya di http://lxmed.sourceforge.net/

Ekstrak dan jalankan ./install.sh. mudah dan cepat, tetapi tidak berhenti sampai di sini. Kita membutuhkan gksu dan jre untuk bisa menjalankan lxmed. jre bisa diinstall dari dvd slackware, terletak di source/l/jre. Umm, yeah, normalnya pasang jre dulu. hehe. Sementara paket gksu (sesuaikan versi slackware dan arsitektur) bisa ditemukan di belantara internet dengan mudah, google always be our friend.

Bangun paket dengan slackbuild.

[code]sudo ./jre.Slackbuild[/code]

paket akan terbentuk di /tmp/

[code]sudo installpkg /tmp/jre-6u27-x86_64-1.txz[/code]

jalankan lxmed dari xfcemenu>settings>main menu editor. kita akan mendapati lxmed tidak bekerja karena pengembang lxmed menganaktirikan Slackware.

cari dimana binary lxmed.

[code]which lxmed[/code]

kita akan tahu bahwa ternyata itu bukan berkas binary, melainkan shell script, dengan melihat dalemannya.

[code]#!/bin/bash

# discovered distro; Debian by default

DISTRO='Debian'

# distro names

DEBIAN='Debian'

SUSE='SuSe'

REDHAT='RedHat'

MANDRAKE='Mandrake'[/code]

Slackware tidak ada, hahaha. dan di baris akhir :

[code]if [ "${DISTRO}" = "${SUSE}" ];

then

 gnomesu --command "java -jar /opt/lxmed/LXMenuEditor.jar"

else

 gksu --message "Please enter password to run lxmed in fully operational mode:" 'java -jar /opt/lxmed/LXMenuEditor.jar'

fi[/code]

Nyatanya perintah gksu tersebut tidak jalan di Slackware. hapus saja semua barisnya dan masukkan satu baris berikut

[code]java -jar /opt/lxmed/LXMenuEditor.jar[/code]

Simpan dan jalankan di terminal

[code]sudo lxmed[/code]

Sebuah jendela aplikasi java akan muncul, itulah lxmed. Sampai di sini semua sudah bekerja dengan baik. Tinggal langkah terakhir, edit menu settings>main menu editor. ganti command 'lxmed' menjadi 'gksu lxmed'. tanpa tanda petik.

Sekarang kita bisa mengakses lxmed dari menu xfce dan gksu bekerja untuk menanyakan password root. :)

no pict = hoax :P

[![](/assets/lxmed.png)](https://pikopages.files.wordpress.com/2012/04/lxmed.png)
