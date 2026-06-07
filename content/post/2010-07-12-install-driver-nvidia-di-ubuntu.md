---
draft: true
title: "nvidia di ubuntu"
date: 2010-07-12 18:27:26Z
categories:
  - linux-opensource
tags:
  - driver
  - nvidia
  - ubuntu
---
sejak jaman gutsi gibon, selesai install selalu saja harus sibuk ngoprek ini itu untuk install vga dan dapatkan resolusi layar yang baik. hardy, intrepid, jaunty, karmic, selalu saja. dan parahnya, setelah berhasil install sukses, saya malah melupakan caranya (karena sibuk main game). selalu terulang, haha. menyebalkan sih, karena monitor saya 17 inchi dan resolusi 1024x768 sama sekali tidak menyenangkan. dan barusan instal lucid lagi, lupa lagi. buntu lagi di driver vga. tidak ada yang dideteksi di hardware driver. terus gimana?

saya pernah denger kalo driver nvidia langsung tocker di lukit, tapi kok ndak ya?

setelah bertapa sambil makan mie ramen (baca : mie rebus instan, sudah berbulan2 ndak makan mie), saya langsung ingat. cara ini saya pakai saat install karmic. mungkin berbeda untuk rilis yang lebih rendah. caranya cuma 2 langkah!

1. install kernel source, syarat : konek repo.

sudo apt-get install linux-kernel

sudo reboot

2. install driver vga. buka system > administration > hardware driver. pilih driver yang recommended. active. reboot.

beres deh. saya tulis di blog ini supaya saya bisa lihat di sini kalo lupa. (maklum pelupa akut, malah mungkin lupa kalo pernah nulis di sini ;-)  )
