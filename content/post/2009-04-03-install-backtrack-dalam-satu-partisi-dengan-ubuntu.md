---
draft: true
title: "Install Backtrack dalam Satu Partisi dengan Ubuntu"
date: 2009-04-03 17:22:09Z
categories:
  - linux-opensource
tags:
  - backtrack
  - bt3
  - linux-opensource
---
Mungkinkah? Mungkin saja kalau kita mau berpikir sedikit. Saya begitu ingin menginstall ke harddisk supaya tidak perlu repot booting cd  (yang saya duga penggunaan cd mendukung percepatan habisnya baterai laptop) dan bisa langsung berlama-lama main-main dengan hotspot-hotspot. Sedikit basa-basi, pada awalnya saya membuat partisi tersendiri untuk bt3 sebesar satu giga, dan itu benar-benar mengacaukan susunan partisi di harddisk Macbook yang cuma 60GB ini. Saya mempelajari isi file menu.lst dari grub dan slax.cfg di cd distribusi Slax. Ternyata bukan partisinya yang penting, tapi keberadaan file kernelnya (atau apa mungkin, saya nggak ngerti) yang biasanya bernama vmlinuz dan initrid. Kita harus mendefinisikan letaknya dengan benar di mana pun  kumpulan berkas itu berada. Nah, Anda perlu sebuah partisi ubuntu dengan space kosong lebih dari 1GB, karena Backtrack menghabiskan seukuran 1 CD.

Anda perlu install dulu Ubuntu-nya kalau belum install. Tidak mesti Ubuntu sih, yang penting boot loadernya grub, kalo lilo saya kurang paham.

Selanjutnya, booting dengan CD Backtrack, pada saat pemilihan mode boot, tekan tab untuk melihat cheatcode (parameter boot). Catat yang lengkap. Saya memilih yang BT3 Graphics Mode (KDE). Kalau anda suka fluxbox, pilih yang fluxbox.

/boot/vmlinuz vga=0x317 initrd=/boot/initrd.gz ramdisk_size=6666 root=/dev/ram0 rw  autoexec=xconf;kde

Kalau sudah selesai dicatat, restart komputer dan masuk ke ubuntu.

Loginlah sebagai root agar lebih mudah, ketimbang melalui terminal. Copy isi cd backtrack 3 yaitu folder boot dan BT3 ke direktori root ( / ). Tabrakan dong dengan folder boot-nya ubuntu? Rename folder boot Backtrack, misal btboot. Hmm, sekarang isi di bawah / jadi semakin kotor, tak apa. Apakah kita perlu menjalankan bootinst.sh di btboot tersebut sebagaimana menginstall ke flashdisk? Tidak perlu, karena itu tindakan bodoh dan akan menghapus MBR harddisk.

Sekarang, buka file /boot/grub/menu.lst, cari pada baris ini :

title           Ubuntu 8.10 Intrepid Ibex, kernel 2.6.27-7-generic

uuid         xxxxxxxxxxxxxxxxxxxxxxx

kernel          /boot/vmlinuz-2.6.27-7-generic root=xxxxxxxxxxxxxxxxxxx ro quiet splash

initrd          /boot/initrd.img-2.6.27-7-generic

quiet

Salin tulisan ini dan letakkan dua baris di bawahnya. Lalu ganti berdasarkan informasi dari boot parameter Backtrack.

title              Back|Track 3 Final  [ ngoprek  mode ]

kernel          /btboot/vmlinuz root=/dev/ram0 ramdisk_size=6666 rw autoexec=xconf;kde

initrd          /btboot/initrd.gz

Tulisan xxx dst yang saya tulis itu sebenarnya kumpulan acak angka dan huruf sebagai identitas partisi. Anda bisa ganti dengan /dev/sda1 misalnya, dan menghapus baris uuid. Saya melihat bahwa parameter-parameter dikumpulkan di baris kernel, maka saya meletakkan parameter boot backtrack di baris yang sama. Anda lihat kan kesamaannya? vmlinuz-2.6.27-7generic milik ubuntu dan vmlinuz milik slax. Pasti itu sesuatu yang sama. Tulis sesuai letaknya, misal tadi di bawah folder btboot. Demikian juga pada file initrd, backtrack juga punya yang sama namanya. Saya tetap menulis ramdisk_size=6666 karena backtrack ini tetap akan jalan sebagai sebuah livecd.

Sekarang coba restart dan booting melalui pilihan baru tersebut. Anda akan mendapatkan sebuah backtrack live cd sedang berjalan tanpa cd. Kalau gagal misal kernel panic, jangan panik, mungkin Anda salah mengetiknya, periksa kembali. Hal yang sama bisa dilakukan dengan distribusi Slax, ayah dari Backtrack.

Selamat mencoba dan ngoprek dengan bt3!
