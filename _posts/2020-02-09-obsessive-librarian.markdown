---
layout: post
title:  "Obsessive Librarian"
date:   2020-02-09 00:00:00 +0700
categories: algorithm
---

This is my second attempt to write an algorithm problem for programming challenge. This time it's written in Bahasa Indonesia.

Seorang pustakawan baru saja diterima bekerja di sebuah perpustakaan. Sebelumnya buku-buku di perpustakaan tersebut tidak dikelola dengan baik dan peletakkannya tidak sesuai dengan kategori yang telah distandarkan. Ia ingin mengatur ulang buku-buku tersebut sesuai standar. Karena ia seseorang yang sangat memperhatikan kerapian dan kesempurnaan melebihi kebanyakan orang pada umumnya, selain mengurutkan buku berdasarkan kategori, ia juga ingin mengurutkan tinggi buku. Selain itu ia hanya membolehkan maksimal 2 eksemplar buku yang sama berada di rak, selebihnya disimpan di gudang penyimpanan. Buku yang diprioritaskan untuk dipajang di rak adalah buku yang paling tinggi ukurannya.

### Data soal

Setiap buku dinotasikan dengan string yang bila dipecah terdiri dari 1 karakter pertama yang mewakili kategori buku, 1 karakter kedua yang mewaliki judul buku dan sisa karakter adalah bilangan bulat dari tinggi buku dalam sentimeter. Misalnya, 6B21 artinya buku tersebut berkategori Applied Science (600), judul buku adalah B dan tingginya adalah 21 sentimeter.

Buku diurutkan berdasarkan kategori berikut,

- `6` : Applied Sciences (600)
- `7` : Arts (700)
- `0` : General (000)
- `9` : Geography, History (900)
- `4` : Language (400)
- `8` : Literature (800)
- `1` : Philosophy, Psychology (100)
- `2` : Religion (200)
- `5` : Science, Math (500)
- `3` : Social Sciences (300)

Lalu buku-buku di dalam setiap kategori diurutkan lagi berdasarkan tinggi buku. Yang paling tinggi ditempatkan terlebih dahulu.

Identitas buku diwakili oleh 2 karakter pertama dari notasi buku, yaitu  kategori buku dan judul buku. Bila ada 2 buku yang memiliki tinggi berbeda, namun berjudul sama dan kategori sama, maka itu adalah buku yang beridentitas sama (contoh `6B21` dan `6B13`). Bila ada 2 buku memiliki judul yang sama namun berada di kategori yang berbeda meskipun tingginya sama, maka itu adalah buku yang identitasnya berbeda (contoh `6B21` dan `4B21`).

Inputnya adalah deretan yang dipisah spasi dari notasi buku dengan batasan tinggi buku minimal 13 sentimeter dan maksimal 24 sentimeter, judul buku adalah abjad dari A sampai Z. Output dari program adalah deretan yang dipisah spasi dari notasi buku yang telah diurutkan dan hanya maksimal 2 identitas buku yang sama berada dalam deretan tersebut dengan memprioritaskan buku yang paling tinggi ukurannya 

### Contoh

```
Input 

3A13 5X19 9Y20 2C18 1N20 3N20 1M21 1F14 9A21 3N21 0E13 5G14 8A23 9E22 3N14

Output

0E13 9E22 9A21 9Y20 8A23 1M21 1N20 1F14 2C18 5X19 5G14 3N21 3N20 3A13

```
