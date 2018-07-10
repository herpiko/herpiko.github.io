---
layout: post
title: Mengapa Lebih Baik Menyimpan Waktu dalam UTC
date: 2015-03-25 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

UTC adalah Coordinated Universal Time. [Singkatannya kurang tepat ya, eh](http://www.timeanddate.com/time/utc-abbreviation.html)? UTC menjadi standar dunia dalam penetapan waktu secara universal, bukan zona waktu.

####Bukan UTC

Sekarang kamu ada di Bogor, menginput data suatu kejadian yang terjadi di Bogor (WIB) dalam informasi waktu seperti berikut :

``2 Agustus 1992 Jam 05:00``

Kemudian, data tersebut dibuka di Sulawesi, yang muncul adalah

``2 Agustus 1992 Jam 05:00``

Seharusnya direpresentasikan dalam WITA sebagai

``2 Agustus 1992 Jam 06:00``

Akhirnya tidak ada acuan dalam menggeser zona waktu ini.

####Dalam UTC

Sekarang kamu ada di Bogor, menginput data suatu kejadian yang terjadi di Bogor (WIB) dalam informasi waktu seperti berikut :

``2 Agustus 1992 Jam 05:00``

Sebelum disimpan ke dalam basis data, informasi tersebut dikonversi ke UTC dengan pustaka tertentu (GMT+0700, dikurangi 7 jam), akhirnya tersimpan sebagai :

``1 Agustus 1992 Jam 22:00``

Kemudian, data tersebut dibuka di Sulawesi.Dengan pustaka tertentu, data tersebut di konversi lagi ke zona waktu Sulawesi, yaitu WITA, akhirnya direpresentasikan dalam WITA (GMT+0800, ditambah 8 jam) menjadi :

``2 Agustus 1992 Jam 06:00``

####Saat kapan digunakan?

Penyimpanan informasi waktu dalam UTC tidak selalu harus digunakan, misal pada perangkat lunak yang digunakan secara lokal saja. Tetapi lebih baik diterapkan sejak dini karena siapa sangka skalabilitasnya bertambah menjadi lintas zona waktu atau sudah menjadi aplikasi daring.

####Pustaka

Contoh pustaka yang asyik digunakan untuk bermain-main dengan waktu (dalam javascript) adalah [moment.js](http://momentjs.com/). API-nya lengkap sekali.

``moment()`` akan menghasilkan objek dengan informasi waktu sekarang dan sesuai timezone perangkatnya.

``moment().format()`` akan menghasilkan keluarannya dalam UTC.
