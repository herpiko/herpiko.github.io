---
layout: post
title: Catatan BlankOn Installer
date: 2016-07-05 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Sejak saat saya menawarkan diri untuk ngulik BlankOn Installer awal tahun lalu, ada banyak sekali yang telah saya pelajari. Proyek ini sempat saya tinggalkan selama beberapa bulan, dan saat kembali lagi, saya jadi bingung lagi. Catatan ini dibuat agar memudahkan saat terjun kembali ke proyek ini. Mudah-mudahan juga berguna buat siapa pun yang ingin ikut *ngulik*.

### Backend dan UI

BlankOn Installer terdiri dari dua bagian yang terpisah repositorinya, yaitu :

- `blankon-installer`, memuat kode vala, bash dan UI HTML5 yang sudah siap. Sumber kode ini dapat dikompilasi dengan `./autogen.sh` (tentunya setelah dependensinya terpenuhi) menjadi executable yang dapat dijalankan dari `blankon-installer` dan `blankon-session-installer`.
- `blankon-installer-ui`, memuat kode HTML5 dengan *framework* AngularJS. Kode ini dapat *dikompilasi* oleh `gulp`, *output*-nya diletakkan di direktori `dist`. Isi dari direktori `dist` ini yang akan dibawa ke direktori `system` di sumber kode `blankon-installer`

### Lingkungan pengembangan

Saya menyiapkan 2 buah komputer, salah satunya wajib virtual. Satu digunakan untuk mengetik kode, sistem operasi derivatif Debian yang repositori-nya mengikuti repositori utama BlankOn. BlankOn Installer harus dapat dikompilasi di sini. Satunya lagi adalah mesin virtual (bisa Virtualbox atau Qemu) dimana saya dapat menggonta-ganti dan mengubah periperal dari sistem secara bebas.

### Jahitan

Pengembangan BlankOn Installer terkait erat dengan jahitan-jahitan yang ditelurkan `pabrikcd` BlankOn. Pengujian BlankOn Installer harus dilakukan di atas jahitan-jahitan terbaru. Biasanya dapat ditarik dari http://cdimage.blankonlinux.or.id/blankon/livedvd-harian/current/.

### Siklus pengembangan di lokal

#### Persiapan

- Kloning `blankon-installer`
- Kloning `blankon-installer-ui`
- Kloning `blankon-installer` dari dev.boi, `bzr branch http://dev.blankonlinux.or.id/browser/tambora/blankon-installer blankon-installer-bzr`

Sekarang saya memiliki 3 direktori untuk bekerja

- `blankon-installer`
- `blankon-installer-ui`
- `blankon-installer-bzr`

Yang terakhir hanya berisi sebuah direktori `debian` untuk membantu pemaketan di lokal.

#### Siklus

- Jika ada sesuatu yang perlu dikerjakan yang terkait UI/UX, saya akan melakukannya di `blankon-installer-ui`, kemudian mengujinya dengan `gulp;(cd dist;python -m SimpleHTTPServer)` dan peramban.
- Setelah oke, perubahannya saya *commit* dan simpan di cabang tertentu. Kemudian saya pindah ke `blankon-installer` dan membuat cabang baru.
- Saya menyalin berkas-berkas di bawah `blankon-installer-ui/dist/` ke `system`. Kemudian perubahannya saya *commit*.
- Jika ada yang perlu saya lakukan dengan kode backend-nya, misal di vala atau bash, saya langsung melakukannya di sini, kemudian *commit*.
- Saatnya menguji. Saya perlu mengkompilasi dan memaketkannya. Saya membuat tarball dari cabang kerja saya. `git archive -o ../blankon-installer_X.X.orig.tar.gz`. `X.X` adalah versi.
- Lalu saya pindah ke `blankon-installer-bzr`. Saya membersihkan isi direktori tersebut terlebih dahulu, hanya membiarkan direktori `debian`. `rm -rf !(debian)`.
- Kemudian membongkar tarbal `orig` tadi ke sini. `tar -xvf ../blankon-installer_X.X.orig.tar.gz`
- Kompilasi dan paketkan. `dpkg-buildpackage -rfakeroot`
- Jika lancar dan tidak ada galat, paket *.deb dapat ditemukan di `../`
- Paket ini yang akan saya bawa ke sebuah sistem *live* dari jahitan terbaru. Pada sistem *live* tersebut, paketnya saya pasang manual dengan `dpkg -i`, menimpa installer yang lama. BlankOn Installer siap diuji oleh pengetik kode sendiri.


Pada tulisan selanjutnya, saya akan menjelaskan beberapa hal terkait infrastruktur BlankOn dan detil pengujian installer di mesin fisik maupun mesin virtual.

