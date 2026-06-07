---
draft: true
title: "perang netcut"
date: 2010-07-19 16:58:30Z
categories:
  - how to
  - linux-opensource
tags:
  - easyhotspot
  - hotspot
  - IP address
  - jaringan
  - netcut
  - subnet
  - ubuntu
  - warnet
  - windows
---
bermula ketika saya sedang kerja di warnet lain, di narmada. saya ditugasi maintenance setiap bulannya. saya dipanggil, keluhannya :

- komputernya banyak ngadat & deepfreezenya kebobol > install linux install ulang windows, kloning, ganti versi deepfreeze. fresh. clean.
- ada komputer yang sama sekali ndak konek > ganti konektor RJ45
- banyak yang netcut > bingung euy.

sebagai catatan, baru pertama kali ini saya googling apa itu netcut dan coba programnya (contoh orang kuper windos). kejam. ada antinetcut, antiarp, port monster, tapi semuanya sama sekali tidak memuaskan. tetep saja jaringan jadi lamban. saya tidak mau pasang tool aneh itu di klien.

nah, ceritanya gini, ada orang yang sudah diduga berat sering netcut. setiap datang hotspotan, selalu saja semua jadi putus, ndak bisa ping-pingan apalagi pesbukan browsing. hotspotnya tidak memakai mikrotik, untuk pengamanan, hanya memakai password dari access point dan password ini diganti setiap harinya. so weak.

jadi saya [pasangin easyhotspot](http://pikopages.wordpress.com/2010/05/26/easyhotspot-dengan-virtualbox/). dhcp di access point dimatikan, dialihkan ke ubuntu (easyhotspot). setelah semua selesai. orang itu mencoba konek dan masuk via easyhotspot (pake login). ketika dia jalanin netcut (saya lihat layar), dia cuma temukan 2 buah IP, keduanya adalah IP milik server easyhotspot. hahaha. kapok deh, mau ngapain lu?

eh, ternyata. dia langsung buka network connection dan ganti IP-nya dengan IP sah jaringan nyata yang kira2 tidak dipakai. dia buka netcut lagi dan dapatkan semua IP server dan klien warnet. wadoooh! ndak guna bener dah.

satu-satunya jalan adalah, tidak membolehkan komputer lain (yang hotspotan) mengatur IP address secara manual. itu berarti IP harus dari easyhotspot, IP address yang mau dipakai manual harus sudah dipakai oleh komputer lain. saya harus mengisi penuh IP-nya dari 1-254 atau mengganti subnet untuk 14 atau 30 IP (jadi lebih sedikit mengisi IP lagi, cara memilih subnet silakan pakai [subnet-calculator](http://www.subnet-calculator.com/). saya memilih yang pertama karena mengganti subnet di setiap klien benar2 menyita waktu karena dideepfreeze.

saya memilih server untuk diisi IP-IP tersebut (lebih dari 200 IP). caranya, di jendela pengaturan IP (network connection : klik kanan > properties : TCP/IP > properties), klik advanced, tambahkan semua IP yang tersisa di sana. beres.

pelaku hanya bisa saling netcut dengan hotspoter lain, tidak bisa masuk ke jaringan warnet di dalam.

mungkin ada cara lain (mikrotik mungkin atau apalah), tapi inilah yang kepikir waktu itu. saya masih awam untuk bidang jaringan tapi ini lancar dan bekerja dengan baik.

[![](/assets/hotspot.jpg)](http://pikopages.files.wordpress.com/2010/07/hotspot.jpg)
