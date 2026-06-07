---
draft: true
title: "2011.08.19 arch linux installation media"
date: 2011-08-27 15:00:04Z
categories:
  - uncategorized
---
telat sih. silakan diunduh di situs resmi arch.

btw, jika kita mencoba menginstall dengan arch installer yang lama dan mencentang semua paket, akan ada dependensi yang konflik dan tidak bisa diselesaikan, yaitu tiacx dan coolog. solusinya adalah menghapus paket tiacx dan menghapus semua gcc (berikut beberapa gcc bahasa lain) kemudian menghapus coolog. baru deh bisa pacman -Syu.
