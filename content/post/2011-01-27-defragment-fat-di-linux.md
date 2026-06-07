---
draft: true
title: "defragment fat di linux"
date: 2011-01-27 04:05:10Z
categories:
  - linux-opensource
  - pikiran
tags:
  - defragment
  - defragment di linux
  - fat
  - filesystem
  - format
  - hello!
  - linux
  - MMC
  - partisi
  - postaday2011
---
sejauh saya googling sana sini sampai kesandung, saya belum temukan tool untuk defragment partisi fat di linux. yeah, ada partition logic tapi saya kira itu livecd. di filesystem varian unix tidak ada istilah defragment karena konsepnya berbeda dengan ntfs/fat, dan itu saya kurang ngerti.

nah, belajar dari pengalaman sebelumnya, ada cara untuk defragment di fat. mungkin ini bukan defragment tapi konsepnya sama, yaitu mengisi kekosongan dan merapikan file2.

karena yang saya perlukan untuk didefrag adalah sebuah MMC yang hanya berukuran 512MB, ini mudah. caranya adalah, kita mennyalin semua isi partisi tersebut ke folder di partisi lain, lalu memformat partisi fat dengan gparted, kemudian menyalin kembali isi partisi MMC ke tempat semula.

mudah dan simpel, tapi tidak efisien untuk partisi yang berukuran besar. :)
