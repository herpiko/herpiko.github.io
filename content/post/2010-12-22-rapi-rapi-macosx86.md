---
draft: true
title: "rapi-rapi macosx86"
date: 2010-12-22 18:06:59Z
categories:
  - mac
  - tong sampah
tags:
  - hackintosh
  - macintosh
  - macosx
  - osx86
---
**resolusi layar**

nah, ini wajib. karena vga onboard saya tidak support qe ci, resolusi mentok 1024-768. tapi sebenarnya macosx dukung vesa. vesa bisa resolusi berapa saja asal rasio 4:3**. **nah, berhubung monitor butut saya (mesti dipukul2 biar warna yang muncul bener, kapan meledaknya ya?) rasionya 4:3 14 inchi, 1280x1024 adalah resolusi yang tepat.

lihat di /Library/Preferences/SystemConfiguration/com.apple.Boot.plist

tambahkan

<string>graphic mode=1280x1024x32</string>

reboot dan tada!

**ntfs readwrite**

secara default, kita bisa mount ntfs tapi tidak bisa menulis di atasnya. macosx itu varian unix kan? apakah punya fstab? tentu punya :)

tapi setelah saya coba menambahkan di-fstab, partisi ntfsnya selalu error dan check disk. kenapa ya? perkiraan saya, macosx shutdown tanpa un-mount partisi ntfs. liatlah, begitu klik shutdown 2 detik langsung mati. des!

solusi lain? [http://ntfsmounter.com/](http://ntfsmounter.com/) bisa unmount sebelum matikan sistem.

**aplikasi**

ini sudah dosa masang bajakan. jadi diatasnya musti yang bebas. openoffice.org, gimp, inkscape, ketiganya ada versi mac-nya lho, dan bekerja sempurna.

kebanyakan saya cuma muter itunes dan duduk bengong di depan layar. ekslusip!
