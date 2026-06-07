---
draft: true
title: "koneksi vpn di debian squeeze"
date: 2011-06-20 22:39:55Z
categories:
  - how to
  - linux-opensource
tags:
  - debian
  - linux
  - network-manager-pptp
  - open source
  - peer to peer
  - pptp
  - virtual private network
  - vpn
  - vpnclient
---
saya memerlukan vpnclient di debian untuk koneksi ke kantor. jadi bisa nitip2 donglot seabrek hanya dari koneksi 30kbps di rumah. :P

sudo apt-get install network-manager-pptp network-manager-pptp-gnome

edit connection > vpn > add.

[![](/assets/2.png)](http://pikopages.files.wordpress.com/2011/06/2.png)

berikan nama koneksi. isikan ip publik tujuan vpn berikut user name dan password. btw, available to all users-nya jangan dicentang. entah kenapa itu menyebabkan gagal konek. NT domain biarkan kosong dan ipv4 biarkan otomatis.

[![](/assets/4.png)](http://pikopages.files.wordpress.com/2011/06/4.png)

jika berhasil konek akan ada gambar gembok kecil di ikon network.

[![](/assets/1.png)](http://pikopages.files.wordpress.com/2011/06/1.png)
