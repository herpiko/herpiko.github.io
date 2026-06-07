---
draft: true
title: "masalah mysql di XAMPP 1.7.3 for mac"
date: 2011-08-06 02:27:02Z
categories:
  - how to
  - linux-opensource
  - mac
tags:
  - apple
  - mac
  - macintosh
  - mysql
  - service
  - webserver
  - xampp
---
berhubung saya sudah menemukan kext yang berjalan sempurna untuk perangkat LAN (Realtek RTL81xx) di mesin macosx86 (yang berarti si safari sudah bisa konek internet, meski terpaksa menjadikan laptop si frxs sebagai router, usb wireless adapter masih belum dikenali), jadi saya berkhianat untuk sementara, meninggalkan linux, berburu perangkat lunak mac bajakan di torrent, ini seperti bermain2 dengan aplikasi2 baru di android atau symbian. dan saya menikmati itu. :P (semoga dosa-dosa saya diampuni, amin)

nah, salah satu yang saya pasang adalah XAMPP for mac versi 1.7.3, meski lawas dan tidak diupdate sejak lama, saya hanya ingin sistem mac ini paling tidak ada webservernya buat main2. setelah unduh dan pasang (hanya drag, so simple), ternyata service mysql tidak bisa dijalankan.

seperti ini xamppcontrol versi mac. (btw dicapture setelah mysql berhasil jalan)[![](/assets/xamppcontrol.jpg)](http://pikopages.files.wordpress.com/2011/08/xamppcontrol.jpg)

kita bisa menjalankan versi CLInya di /Application/XAMPP/xamppfiles/xampp

[code]

$sudo ./xampp startmysql

XAMPP: Starting MySQL.../Applications/XAMPP/xamppfiles/xampp: line 150: /Applications/XAMPP/xamppfiles//bin/mysql.server: No such file or directory

[/code]

benarkah berkas mysql.server tidak ada? mari kita cek.

[![](/assets/mysql-server.png)](http://pikopages.files.wordpress.com/2011/08/mysql-server.png)ternyata adalah sebuah symbolic link.

[![](/assets/symboliclink.jpg)](http://pikopages.files.wordpress.com/2011/08/symboliclink.jpg)meski linkingnya sudah dibuat ulang tetap tidak bisa. nah, kita bisa mengakalinya dengan mengganti parameter di baris ke 150 (lihat pesan error) dan baris ke 259 (untuk stop service) dengan path file yang asli. buka berkas /Application/XAMPP/xamppfiles/xampp dengan penyunting berkas teks. itu adalah file skrip, bukan binari.

[![](/assets/edit.jpg)](http://pikopages.files.wordpress.com/2011/08/edit.jpg)dan coba jalankan lagi service mysql. tada!

![](/assets/berhasil.jpg)start servicenya lewat terminal saja, soalnya program GUInya masih ngikutin symboliclink. kalau sudah ok via terminal, indikatornya jadi hijau juga.
