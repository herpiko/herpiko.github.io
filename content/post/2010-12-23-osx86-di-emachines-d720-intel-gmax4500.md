---
draft: true
title: "osx86 di emachines D720 (intel GMAX4500)"
date: 2010-12-23 21:32:28Z
categories:
  - mac
tags:
  - emachines
  - emachines D720
  - GMAX4500
  - hakcintosh
  - mac
  - macintosh
  - osx86
  - snow leopard
---
sukses lagi. gunakan snow leopard hazard. booting dvd dengan option -v cpus=1

saat custom install pilih legacy kernel dan chameleon (bootloadernya salah satu). setelah selesai installasi akan ada kernel panic.

solusi : hapus semua kext yang tidak diperlukan.

booting macosx dengan option -s (single user)

mount -uw /

mv *GMAX3100* ..

kenapa mv bukan rm? agar nanti kelak bisa dipakai lagi, bekap gitu.

asumsi sudah masuk desktop macosx, . unduh chameleon khusus : [http://www.multiupload.com/DQ49G457JL](http://www.multiupload.com/DQ49G457JL) , lalu pasang.

sudo -s

cd /xxx/ChameleonMR2/

cp boot /

reboot

edit /library/preferences/systemconfiguration/com.apple.boot.plist

tambahkandi bawah flag.

<key>Graphic Mode</key>

<string>1280x800x32</string>

tada! fully working macosx snow leopard (except qe ci and wireless)!

NB : belum ada driver kext untuk GMAX4500. cara disini hanya untuk mendapatkan native resolusi layar yang ideal. semua driver jalan kecuali wireless.

update : [wireless sudah bisa](http://pikopages.wordpress.com/2010/12/28/broadcom-4312-for-macosx86/)
