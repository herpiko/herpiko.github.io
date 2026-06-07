---
draft: true
title: "Skema Papan Ketik Colemak Permanen di Slackware"
date: 2012-03-22 23:52:09Z
categories:
  - linux-opensource
tags:
  - colemak
  - linux
  - planet-slackware
---
Saya menemukan bahwa Colemak didukung di XFCE pada Slackware 13.37. Tetapi ketika pindah ke mode terminal/tty, saya mendapatkan QWERTY lagi.

[Halaman di colemak.org ](http://colemak.com/wiki/index.php?title=Unix)menjelaskan caranya :

Silakan unduh berkas keymap colemak.

Ekstrak dan pindah ke direktori hasil ekstrak.

Ketik dan jalankan : setxkbmap us; xmodmap xmodmap/xmodmap.colemak && xset r 66

Atau cara kedua : letakkan berkas colemak.iso15.kmap di /usr/share/kbd/keymaps dan jalankan loadkeys /usr/share/kbd/keymaps/colemak.iso15.kmap

Tetapi itu tidak permanen, setiap login kembali mesti menjalankan lagi. Saya mempertimbangkan penerapan colemak yang lebih luas, yang bahkan login console pun pakai colemak. Saya dapatkan petunjuk ini [di sini.](http://www.linuxquestions.org/questions/slackware-14/how-to-change-the-keyboard-layout-for-the-entire-system-930785/)

Pastikan berkas colemak.iso15.kmap sudah ada di /usr/share/kbd/keymaps. Kemudian edit berkas /etc/rc.d/rc.keymaps dengan hak root.

[code]

# !/bin/sh

# Load the keyboard map. More maps are in /usr/share/kbd/keymaps.

if [ -x /usr/bin/loadkeys ]; then

 /usr/bin/loadkeys colemak.iso15.kmap

fi

[/code]

Ubah permission agar bisa dieksekusi.

[code]#chmod a+x /etc/rc.d/rc.keymaps[/code]

Reboot dan dapatkan sistem full-colemak. Err, tapi ketika masih di bootloader, baik lilo maupun grub, apalagi BIOS, kita tetap pakai QWERTY.
