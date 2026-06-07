---
draft: true
title: "iPod Nano 4G hangs on boot."
date: 2012-04-15 16:49:17Z
categories:
  - mac
  - uncategorized
tags:
  - apple
  - disk mode
  - hang
  - ipod
  - logo
  - restore
---
Malam ini saya tepok jidat karena salah memperlakukan iPod kesayangan (nano 4G). iPod ini baru balik dari pinjaman dan tidak bisa dideteksi oleh iTunes, baik di Mac maupun di Windows, malah iTunes-nya freeze. Partisinya masih terbaca, saya mencoba memformatnya dan gagal, akibatnya fatal, hasilnya seperti judul tulisan ini.

Solusi pertama jika iPod nano saya bermasalah adalah menekan tombol menu dan ok selama sekitar 6-7 detik. Proses ini disebut reboot. Solusi kedua? Saya belum tahu solusi kedua sampai masalah ini terjadi. Saya pernah mencoba Diagnosis Mode dengan menahan tombol ok dan rew setelah logo apple muncul saat boot. Ternyata ada referensi lain : [http://support.apple.com/kb/HT1363](http://support.apple.com/kb/HT1363). Kombinasi tombol lain yaitu ok dan play sesaat setelah reboot. iPod akan masuk ke disk mode.

[![](/assets/2.png)](https://pikopages.files.wordpress.com/2012/04/2.png)

Setelah masuk ke disk mode, bisa terdeteksi oleh iTunes dan tinggal merestore sistem iPod.

[![](/assets/untitled.png)](https://pikopages.files.wordpress.com/2012/04/untitled.png)

[![](/assets/untitled1.png)](https://pikopages.files.wordpress.com/2012/04/untitled1.png)

[![](/assets/untitled3.png)](https://pikopages.files.wordpress.com/2012/04/untitled3.png)

iPod tidak akan bisa booting jika file system untuk data bukan primary FAT32.  Jangan gunakan Gparted, entah mengapa membuat iPod tidak bisa booting.

[code]sudo fdisk /dev/sdb

d (hapus semua partisi)

1 (nomor partisi yang dipilih)

n (buat partisi baru)

p (pilih partisi primary)

enter (dari sektor pertama)

enter (sampai sektor terakhir)

w (tulis tabel partisi baru ke iPod)

q (keluar)

[/code]

tinggal format

[code]mkfs.vfat -F 32 -n "iPod" /dev/sdb1[/code]
