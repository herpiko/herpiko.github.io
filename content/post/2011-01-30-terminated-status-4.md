---
draft: true
title: "terminated status 4"
date: 2011-01-30 17:31:40Z
categories:
  - uncategorized
tags:
  - file system
  - fsck
  - linux
  - postaday2011
  - terminated status 4
---
oke, solusinya adalah menjalankan fsck. hasil mencari sana sini, jawabannya sederhana, fsck, itu saja. nah, kalau masalahnya tetap tidak terselesaikan?

ternyata ada hal lain. bios-nya tereset dan otomatis pengaturan waktunya kembali ke jaman jadul, jadi sistem operasi kebingungan karena mengenali tanggal terakhir penulisan ke partisi, adalah tanggal di masa depan.

yak, atur waktu di bios dan kembali jalankan fsck. done! :D
