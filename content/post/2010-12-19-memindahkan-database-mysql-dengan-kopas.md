---
draft: true
title: "memindahkan database mysql dengan kopas"
date: 2010-12-19 23:28:59Z
categories:
  - linux-opensource
  - pikiran
tags:
  - mysql
  - server
---
kondisi : sebuah komputer spesifikasi tinggi milik pemerintah dengan sistem operasi windows 2000 server, di dalamnya terinstall wamp server (windows-apache-mysql-php) dan diatasnya berjalan aplikasi cms milik pemerintah, yaitu pendataan warga keluarga berencana seluruh indonesia, namanya BKKBN. komputer ini bisa diakses via jaringan untuk memasukkan data dari komputer lain. nah, pendek kata, komputer ini rusak, blue screen dan ada pesan error not exist or corrupt blablabla. keren!

nah, bagaimana cara memindahkan cms+databasenya di komputer lain dan jalan lancar? *bisakah langsung copy paste*? saya pikir tidak bisa ngasal begitu, tetapi ternyata bisa. perlu diingat, paket aplikasi yang digunakan di sini adalah wamp, bukan xamp (pakai xamp juga bisa). wamp tidak menyediakan phpmyadmin (meski ada folder bernama phpmyadmin di dalamnya) sehingga bagi saya yang masih awam soal mysql, kesulitan mengexport databasenya. jadi, yang kepikiran di otak saya adalah langsung kopas di komputer lain yang ada apache-mysql-php.

karena pada akhirnya windows 2000 servernya tidak bisa dibooting, saya menggunakan slax via usb dan mengakses harddisknya.

pertama, saya mencari letaknya folder wamp, aplikasi cms-nya pastilah ada di sana berikut databasenya. terletak di C:\wamp\ dan saya salin ke  media lain, misal flashdisk. di komputer lain, saya menyalin wamp di tempat yang sama, yaitu C:\wamp\.

kemudian saya cari file yang bisa dieksekusi untuk menginstall service apache dan mysql. filenya bernama install_service_auto.bat. setelah dijalankan dan selesai, akan ada dua service baru di windows, bisa dilihat dengan klik kanan my computer > manage. cari service. cari apache dan mysql, jalankan kedua service tersebut.

[![](/assets/3.jpg)](http://pikopages.files.wordpress.com/2010/12/3.jpg)[![](/assets/2.jpg)](http://pikopages.files.wordpress.com/2010/12/2.jpg)

sekarang tinggal cek di browser, http://localhost. bisa! :D

cek apakah cms dan databasenya jalan, di sini, cmsnya bernama mdk, http://localhost/mdk/. bisa juga! :D

[![](/assets/5.jpg)](http://pikopages.files.wordpress.com/2010/12/5.jpg)[![](/assets/untitled.jpg)](http://pikopages.files.wordpress.com/2010/12/untitled.jpg)

nah, karena ini aplikasi berbasis web yang cross-platform, saya merencanakan untuk memasang linux sebagai server httpnya, disamping kehandalannya juga tidak mudah kena virus dan rusak. sayangnya, saat saya menawarkan ke orangnya, dia menolak dengan alasan takut tidak bisa mengontrol. tapi dia meminta instal dualboot. syukurlah. *ngupil

btw, saya dapat kopian database, lebih dari seratus ribu data kepala keluarga, lengkap anak pinaknya juga. ehem2 >:) *apasih, gak guna
