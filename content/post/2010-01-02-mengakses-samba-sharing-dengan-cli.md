---
draft: true
title: "mengakses Samba dengan CLI"
date: 2010-01-02 18:32:44Z
categories:
  - linux-opensource
tags:
  - cifs
  - command line
  - command line interface
  - copas
  - jaringan
  - linux
  - network
  - samba
  - sharing
  - terminal
---
kisah berawal ketika saya menginstal ubuntu karmic di mesin vmware yang berjalan di atas komputer server billing warnet dengan os windos. jaringan guest-host sudah berjalan baik. sharing file dan akses internet juga lancar. nah, gnome tu cukup  berat juga di mesin vmware, meski ram-nya sudah tak kasih 512. jadi, saya memilih mengganti ke xfce yang agak ringan. sayangnya, file manager defaultnya (thunar) tidak bisa mengakses samba. pada nautilus ada akses ke network, sedangkan di thunar tidak ada. bodoh sekali rasanya menjalankan nautilus di xfce. saya butuh yang ringan! dan rasanya malas install thunar-plugin.

ok,  saya punya terminal. jadi, yang saya pikir adalah saya perlu mengakses shared folder windows (host) melalui command line. saya googling dan temukan banyak petunjuk. berikut ini adalah salah satunya dari forum ubuntu.

sebelumnya, pastikan samba dan mount.cifs sudah terinstall. jalankan mount.cifs untuk memastikan.

pada windows, share sebuah folder dan beri nama. dalam kasus saya, saya men-share Shared Documents dan memberinya nama Server-Doc. IP windos komputer saya ini adalah 192.168.131.1.

di linux, buat sebuah folder sebagai mount point. misal, saya buat di bawah direktori home saya : /home/piko/Server-Doc/. IP linux di mesin vmware ini adalah 192.168.131.131.

format perintahnya adalah

sudo mount.cifs //target/folder-share .../mountpoint

jadi, saya mengetiknya begini.

sudo mount.cifs //192.168.131.1/Server-Doc  /home/piko/Server-Doc

sekarang coba lihat isinya.

cd /home/piko/Server-Doc/  | ls

nah, kelihatan dia... :)

[caption id="attachment_584" align="aligncenter" width="300" caption="klik untuk perbesar"][![](/assets/mountcifs.jpg)](http://pikopages.files.wordpress.com/2010/01/mountcifs.jpg)[/caption]
