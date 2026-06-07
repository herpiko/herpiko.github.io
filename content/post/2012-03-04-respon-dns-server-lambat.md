---
draft: true
title: "respon dns server lambat?"
date: 2012-03-04 00:13:11Z
categories:
  - uncategorized
---
saya sudah menemukan 2 kasus untuk DNS server di jaringan lokal.

pertama karena masalah IPV6 terutama di versi lawas Bind. balasan ping ke domain bahkan sampai ribuan ms. disable IPV6 baik di konfigurasi network maupun named/bind. di versi lama (<0.9.2) ini dikenali sebagai bug, mengupdate bind adalah ide yang baik. (just googling it, saya tulis di sini sebagai catatan penting. maaf kalau setengah2 :D )

kedua karena IP dns tidak tepat di sisi klien. balasan ping cepat, namun direspon sangat lama untuk permintaan pertama. dari sini kita bisa menebak bahwa dnsnya dobel, pencarian domain dibawa keliling dulu sebelum mencapai IP DNS buatan kita. misal di kasus saya, menggunakan Blankon Pattimura yang membawa dns nawala sebagai default. edit berkas /etc/resolv.conf, hapus IP DNS lama atau ganti urutan IP DNSnya, letakkan IP DNS buatan kita sebagai yang pertama.
