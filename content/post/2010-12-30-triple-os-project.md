---
draft: true
title: "triple OS project"
date: 2010-12-30 04:22:31Z
categories:
  - uncategorized
---
cuma catatan saja.

1. tabel partisinya adalah MBR, bukan GUID atau GTD. bagi tiga partisi primary, sisanya silakan extended biar bisa banyak logical. utamakan backup data. mac akan diinstall di partisi pertama.

2. install windows di partisi kedua atau ketiga. anggap saja kedua.

3. install linux di partisi ketiga, dengan catatan bootloader (baik itu lilo maupun grub) diinstall di partisi, bukan MBR.

4. install mac di partisi pertama, dengan menggunakan bootloader chameleon.

5. chameleon akan mendeteksi sistem operasi lain dan menempatkan mac sebagai default. memilih linux berarti masuk ke grub, bukan langsung booting linux.

6. jika ingin menambah sistem operasi lagi di partisi logical, silakan asal jangan sentuh MBR. misal akan menginstall linux lain, pasang bootloadernya di partisi yang bersangkutan dan chameleon akan mendeteksinya.

btw, saya kecewa berat sama SAW VII. darah palsu yang kentara, plot yang kurang nonjok, dan seolah tidak ada yang istimewa, padahal ini kan rilis terakhir. blah.
