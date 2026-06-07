---
draft: true
title: "mengatur sendiri resolusi layar di ubuntu"
date: 2010-11-08 01:15:12Z
categories:
  - how to
  - linux-opensource
tags:
  - cvt
  - how to
  - layar
  - linux
  - resolusi
  - resolution
  - ubuntu
  - X
  - xorg.conf
  - xrandr
---
kemarin saya ketemuan sama komputer desktop dengan VGA SIS, pakai lucid dan resolusinya tidak proposional, mentok 800x600. berhubung tidak sedang koneksi internet untuk unduh driver, kita bisa mengakalinya, dengan xrandr, cvt, dan berkas konfigurasi X, xorg.conf. secara default, xrandr dan cvt sudah terinstall di ubuntu.

pertama-tama, musti diperkirakan dulu resolusi yang tepat. misalnya, kita sudah tahu bahwa komputer/laptop ini resolusinya yang paling pas adalah 1368x768 (misalnya). kita bisa coba langsung dengan xrandr.

kita musti cek konfigurasi resolusi dengan cvt untuk resolusi 1368x768 pixel.

*$cvt 1368 768*

*Modeline "1368x768_60.00" 85.25 1368 1440 1576 1784 768 771 781 798 -hzync +vsync*

setelah itu, kita tambahkan resolusi ini ke dalam xrandr. perhatikan pada "1368x768_60.00", hapus refresh ratenya, menjadi  "1368x768"

*$xrandr --newmode "1368x768" 85.25 1368 1440 1576 1784 768 771 781 798 -hzync +vsync*

*$xrandr --addmode VGA 1368x768*

*$xrandr --output VGA --mode 1368x768*

jika gagal, coba ganti VGA dengan VGA1. yak, apakah resolusinya sudah tepat? sudah cukup lega, tetapi bila kita merestart komputer atau X servernya, resolusi ini akan kembali hilang. jadi, kalau mau paten, kita masukan saja langsung ke xorg.conf. secara default, xorg.conf di ubuntu tidak ada atau kosong. kita bisa membuat X menggunakan file konfigurasi xorg.conf. caranya :

restart komputer, saat masih di pilihan grub, pilih recovery mode atau bisa juga tambahkan parameter single. masuk ke shell root, ketikkan password bila diminta.

*$X --configure*

perintah ini digunakan untuk menulis konfigurasi X ke sebuah file bernama xorg.conf. file ini muncul ditempat anda berada (cek dengan pwd). pindahkan berkas xorg.conf ini ke /etc/X11/, timpa bila ada berkas yang sama di sana. buka dengan editor kesukaan anda.

nah, di bawah *Section "Monitor",* paling bawah tepat sebelum* EndSection, *tambahkan konfigurasi dari cvt, ingat, baris refresh rate dihapus.

*Modeline "1368x768_60.00" 85.25 1368 1440 1576 1784 768 771 781 798  -hzync +vsync*

penulisan berkas xorg.conf tidak boleh asal, baris modeline ini harus satu tab ke samping sejajar dengan baris di atasnya, kalau ngasal ngetik dijamin ndak respon. simpan. jika tidak ada kendala yang berarti (amin), begitu restart dan masuk X, resolusinya langsung jreng, tada!
