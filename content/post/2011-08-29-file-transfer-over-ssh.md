---
draft: true
title: "file transfer over ssh"
date: 2011-08-29 03:20:29Z
categories:
  - how to
  - linux-opensource
tags:
  - jaringan
  - komputer
  - linux
  - scp
  - ssh
  - transfer file over ssh
---
namanya scp dan biasanya sudah dipaketkan di sebagian besar distribusi.

mentrasfer berkas dari komputer remot ke komputer lokal

scp user@hostname:/path/ /path/

user adalah user ssh di komputer remote, hostname adalah hostname atau ip yang digunakan komputer remote. path pertama dalah path di komputer remote. path kedua adalah path di komputer lokal, bisa juga didefinisikan dengan titik (path dimana kita sedang bekerja di komputer lokal, yang sama dengan pwd) atau ~/ (folder home kita)

scp -r user@hostname:/path/ /path/

penambahan parameter -r agar bisa menyalin folder. jika tidak, scp akan menampilkan pesan kesalahan untuk transaksi folder.

scp file.txt user@hostname:/path/

mengunggah berkas file.txt ke komputer remote.

scp user@hostname:/path/ user@hostname2:/path

transfer file di antara dua komputer remote.
