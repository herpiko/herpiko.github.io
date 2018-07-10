---
layout: post
title: Ngoprek Plymouth
date: 2015-02-14 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Saya sedang ngoprek plymouth. Skrip untuk mengolah animasinya benar-benar menarik. Tapi yang bikin frustasi adalah saat mengujinya. Ada 3 cara menguji plymouth :

- Pakai komputer *beneran*
- Pakai komputer virtual
- Pakai plugin X11 (paling cepat sekaligus menyebalkan)

Cara ketiga benar-benar cepat. Sunting kode, jalankan, sunting kode, jalankan. Langsung tampil, tapi ada kalanya bikin X *kres*. Ini yang bikin pusing.

Jadi langkah aman saya dari awal sampai akhir adalah :

- pasang ```plymouth-x11``` dan ```plymouth-theme-script```
- menyunting berkas plymouth-thme-script
- mengganti pilihan plymouth ke tema script :
```update-alternatives --config default.plymouth```
- jalankan plymouth daemon : ```plymouthd```
- cek apakah plymouth daemon sudah berjalan dengan benar : ```plymouth --ping```, ```echo $?```. Angka 0 berarti semua baik-baik saja.
- jalankan plymouth : ```plymouth show-splash```
- setiap selesai menyunting berkas, bisa dimuat ulang dengan ```plymouth --quit ; plymouthd ; plymouth show-splash;```
- Kalau sudah selesai, perbaiki nama, paketin.
- tertib

Referensi :

- https://joekuan.wordpress.com/2010/08/05/plymouth-create-your-own-splash-screen-with-scrolling-boot-messages/
- http://brej.org/blog/?cat=16
