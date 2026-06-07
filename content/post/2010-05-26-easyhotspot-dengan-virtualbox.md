---
draft: true
title: "easyhotspot dengan virtualbox : solusi murah dan tepat untuk billing hotspot"
date: 2010-05-26 18:54:16Z
categories:
  - how to
  - linux-opensource
  - uncategorized
tags:
  - easyhotspot
  - free
  - hotspot
  - internet
  - linux
  - mikrotik
  - ubuntu
  - virtualbox
  - wireless
---
halo kawan.

kemarin saya lompat dari kursi saking senangnya mendapati easyhotspot bekerja dengan baik. apa itu easyhotspot? easyhotspot adalah sistem billing yang dibuat untuk keperluan hotspotan (itu lho, yang kalau mau ngenet hotspotan harus login dulu di browser, baru bisa ngenet). sebelumnya, ditawarkan untuk menggunakan mikrotik (sebuah OS router berbasis linux), sayangnya, harga jasa dan lisensinya sangat mahal. saat itu ditawarkan 1.6 juta. blah, ada cara untuk menghemat.

setelah googling untuk cari alternatif, saya temukan easyhotspot. [silakan kemari.](http://easyhotspot.inov.asia) easyhotspot ini adalah paduan dari chillispot (captive portal), radius, apache, mysql dan lainnya, anda bisa menginstallnya di sistem operasi linux, dan bisa juga menginstall dengan distro linux easyhotspot (dari ubuntu) yang sudah siap pakai. saya menggunakan distro easyhotspot siap pakai.

nah, kendalanya, rasanya sayang sekali menambah satu komputer untuk dijadikan server billing hotspot ini, maka saya mencobanya secara virtual di atas PC bersistem operasi Windos. pertama saya coba dengan vmware tapi gagal, dan kedua dengan virtualbox, dan masih gagal. :P

tapi ujung-ujungnya berhasil kok. :)

**kondisi**

berikut kondisi saya :

- sebuah komputer server bililing warnet biasa pake windos, prosesor dan ram mencukupi untuk menjalankan OS virtual dengan vmware maupun virtualbox.
- sebuah modem (koneksi speedy) dan access point yang jadi satu (bawaan paket speedy, tp-link w8101g). bisa juga dengan modem dan AP terpisah.

jadi, tutorial ini mengikuti kondisi di atas, yaitu untuk modem ASDL.

**install** **dan konfigurasi**

install eashotspot di virtualbox (instalasinya sama persis seperti instalasi ubuntu, silakan merujuk ke tutorial instalasi ubuntu), tambahkan dua kartu jaringan.

- NIC 1 = nantinya di ubuntu menjadi eth0, pada virtualbox, atur sebagai NAT.
- NIC 2 - nantinya di ubuntu menjadi eth1, pada virtualbox, atur sebagai bridged.

nah, jika anda memperhatikan, saat virtualbox di install, ada network tambahan di windows anda, yaitu virtualbox-host-only (control panel > network). klik kanan> properties. ganti IP addressnya menjadi IP yang sah di jaringan nyata anda, dan jangan lupa gateway-nya juga (IP modem).

kembali ke ubuntu (asumsi sudah terinstall). klik network manager > edit connection. pilih eth1, dan atur IP-nya agar sama persis dengan virtualbox-host-only. eth0-nya biarkan pakai DHCP. restart network.

sekarang, aturlah agar DHCP di Access Pointnya dimatikan. kenapa dimatikan? awalnya saya juga bertanya-tanya. ternyata, pengurusan dhcp dialihkan ke kartu jaringan virtua kedua (eth1), nanti si ubuntu yang ngasih IP buat yang minta konek.

**testing**

anda bisa testing langsung pakai laptop, atau jika tidak ada laptop, pakai komputer biasa juga bisa (atur IPnya otomatis). kalau sudah konek, buka command line dan ketikan "ipconfig", tanpa tanda ketik. jika di samping DNS suffix ada tulisan key.chillispot.info, berarti memang sudah benar. secara default, IPnya akan mengikuti 192.168.182.x.

bukalah browser dan masuk ke google.com. halaman akan dialihkan ke sebuah halaman login warna putih, akan ada tulisan easyhotspot login (anda bisa mengubah tampilan login ini sesuai selera anda). jika sampai di sini, selamat. :)

**easyhotspot - dead simple opensource hotspot management system

**

sekarang, mari bermain sebentar dengan ubuntu virtual. jalankan browser, buka http://localhost/easyhotspot. akan muncul halaman login. masukkan user : admin, password : admin123. anda bisa menggantinya nanti.

setelah masuk, kita bisa mengkonfigurasi easyhotspot, antara lain pengaturan postpaid, paket hotspot, chillispot (sebaiknya pengaturan chillispot dibiarkan default), dan pengaturan user. tampilan antar mukanya cukup mudah untuk dimengerti, karenanya saya tidak menjelaskan dengan detail.

buatlah dan atur akun user biasa (nantinya sebagai operator). user dan password hotspot loginnya bisa di-generate dengan akun ini.

jika sudah dapatkan user dan password hotspot login, silakan dicoba. :D

tanpa skrinsut adalah hoax. :D

[caption id="attachment_1101" align="alignnone" width="570" caption="easyhotspot"][![](/assets/easyhotspot.jpg)](http://pikopages.files.wordpress.com/2010/05/easyhotspot.jpg)[/caption]

untuk informasi lebih lanjut mengenai easyhotspot silakan merujuk ke [situs resminya](http://easyhotspot.inov.asia).
