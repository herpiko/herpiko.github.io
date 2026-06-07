---
draft: true
title: "kamus menggunakan dict (python2.x)"
date: 2011-12-20 23:37:43Z
categories:
  - programming
  - uncategorized
tags:
  - programming
  - python
---
cara sebelumnya, saya menggunakan perulangan untuk mencari kata di setiap baris pada berkas id.dict (id.dict adalah berkas kamus, kata pertama adalah sebuah karakter atau kata dalam bahasa indonesia, kata-kata selanjutnya dalam baris yang sama adalah terjemahannya. berkas ini bisa didapatkan dari program gkamus)

bagaimana kalau menggunakan dict? barangkali pencariannya bisa lebih cepat karena tinggal print key (kata) untuk mendapatkan value (terjemahan). tapi sebenarnya lebih lambat, karena mengkonvers sebuah berkas teks kamus ke bentuk dict benar-benar memakan waktu. kali ini juga pakai perulangan untuk membuat dict dari setiap baris berkas.

# !/usr/bin/python2

kamus= {}

for line in open ("id.dict"):

x=line.split()

y=x[0]

z=list(x)

del z[0]

kamus.update({y:z})

kata=raw_input('masukkan kata yang akan diterjemahkan : ')

print kamus[kata]

cara kerjanya, program akan memisahkan setiap baris menjadi list, kemudian memeriksa dan memasukkan kata pertama dari setiap baris di berkas tersebut sebagai key dari kamus={}. dibuat lagi sebuah list dan mengurangi kata pertama, sehingga list kedua ini hanya berisi terjemahan, kemudian list ini dimasukkan sebagai value untuk setiap key.

keluarannya masih berbentuk list. lagi males. :P

kedepannya mungkin saya akan masukkan dict yang baku dan sudah jadi ke dalam berkas program, sehingga tidak memakan waktu untuk membaca dan membuat dict dari awal setiap skrip dijalankan dan berkas id.dict tidak diperlukan lagi. kemudian tentu saja, memperbaiki bentuk keluarannya. dan mungkin menerapkan argument parsing sehingga hasilnya kira-kira sebagai berikut :

./terjemahkan.py pagi

pagi : morning

update :

ternyata pakai cara ini benar-benar lambat dan memakan proses lebih banyak saat menjalankan berkas skrip. :(

skip.
