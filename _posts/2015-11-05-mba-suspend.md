---
layout: post
title: Solusi Suspend di GNU/Linux Debian (BlankOn) MBA Mid 2013
date: 2015-12-16 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Didorong oleh rasa malu pada diri sendiri melihat orang-orang seperti Pak Rus (masih menggunakan BlankOn untuk mengajar sehari-hari), atau Pak Ahmad Haris (atas nama harga diri) atau Pak MDAMT dan teman-teman BlankOn lainnya, saya berusaha bertobat buat balik ke BlankOn untuk sistem operasi sehari-hari.

Banyak sih orang-orang yang berkontribusi ke proyek X tapi menggunakan Y untuk sehari-hari. Banyak. Atas nama iseng atau kesenangan *heking* dan sebagainya. Tapi tetap saja rasanya saya tidak bisa menjiwai esensi kontribusi bila tidak menggunakannya dalam sehari-hari. Gak bakal tahu masalah sebenarnya bila tidak dipakai sehari-hari.

Salah satu penghalang kemarin (kemudian jadi alasan buat menunda-nunda selama berbulan-bulan) adalah, suspend di MBA tidak jalan mulus. Baik di Zulfiqar maupun si Japra. Setelah bangun dari suspend, kecerahan layar diset ke 0 atau 100 persen dan tidak bisa diubah-ubah lagi. Tapi lebih sering ke 0 alias gelap total. Ini menyebalkan sekali.

Sejak awal sudah ketemu obatnya, https://github.com/patjak/mba6x_bl.

Karena kebiasaan jelek *pengen* serba instant, saya pasang dari berkas .deb-nya yang entah saya dapat dari mana. Tapi tidak bisa dipasang.

Baru saja sesaat sebelum tulisan ini diketik, saya nemu ini, https://github.com/patjak/mba6x_bl/pull/34.

Akhirnya tinggal kloning ulang, ``make``, ``sudo make install``, ``sudo modprobe mba6x_bl``, kelar.

Pelajaran yang didapat, jika menemukan suatu masalah dari perangkat lunak, selain mencari di Google / forum-form, jangan lupa mampir ke *issue tracker* di lumbung git/svn perangkat lunak yang bersangkutan.


