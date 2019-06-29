---
layout: post
title:  "Siklus Kontribusi Kode ke Proyek Upstream: Mozilla Firefox"
date:   2019-06-28 00:00:00 +0700
categories: open source, code, mozilla, firefox
---

Hai,

Awalnya dimulai pada suatu waktu di penghujung hari Jumat yang agak jenuh, saya mencoba mencari-cari sesuatu yang bisa dikerjakan dan tetiba kepikiran bagaimana sih kalau mau kontribusi kode ke proyek-proyek upstream skala besar seperti kernel Linux, peramban Mozilla Firefox atau Chromium? Mari saya mulai dengan Firefox.

## Harus bisa apa?

*Codebase* Mozilla terdiri dari berbagai macam bahasa pemrograman, mulai dari C, C++, Java, JavaScript, HTML/CSS, Swift, Python dan lainnya. Jika menguasai salah satu dari mereka, lanjut!

##  Tarik, bangun, jalankan

Siapkan ukuran diska yang agak lega dan pastikan akses internet lancar. Saat menarik sumber kode dari lumbung kode Mozilla (`mozilla-central`), ukurannya bisa lebih dari 7GB. Proses kloningnya mudah, cukup mengunduh skrip berikut, <a href="https://hg.mozilla.org/mozilla-central/raw-file/default/python/mozboot/bin/bootstrap.py">https://hg.mozilla.org/mozilla-central/raw-file/default/python/mozboot/bin/bootstrap.py</a> lalu jalankan dengan 

```
$ python bootstrap.py
```

Dan voila! Selain membantu memasangkan perkakas tambahan untuk membangun aplikasi, kita akan diminta untuk menentukan dimana sumber kode akan diletakkan, apakah akan membangun secara penuh (mulai dari *core* sampai *frontend*) atau (*frontend*-nya saja, dan lainnya.

Jika berjalan lancar, kita akan punya perkakas bernama `mach` yang akan membantu proses *build*. Mirip-mirip `make`. `mach` berasal dari bahasa Jerman yang memang berarti *make*.

```
$ du -hs firefox-source
7.5G	firefox-source
$ cd firefox-source
$ ls | grep mach
mach
```

Langsung saja build dengan,


```
$ ./mach build
```

Kalau sukses, jalankan,

```
$ ./mach run
```

<img src="/assets/Screenshot from 2019-06-28 21-42-54.png">

Ikonnya Firefox Nightly! Sampai di titik ini, kita sudah siap sunting kode dan mencoba perubahannya secara langsung di mesin lokal kita.

## Berburu kutu

Cari mereka di sini, <a href="https://bugzilla.mozilla.org/describecomponents.cgi">https://bugzilla.mozilla.org/describecomponents.cgi</a>

<img src="/assets/Screenshot from 2019-06-28 21-00-43.png">

Produk atau komponen yang nampak di sini masih terbagi-bagi lagi. Misalnya Firefox,

<img src="/assets/Screenshot from 2019-06-28 21-05-28.png">

Kalau kita coba buka *Disability Access* (favorit saya), di dalamnya ada ratusan tiket. Yang merah adalah kutu, yang hijau adalah usulan fitur.

<img src="/assets/Screenshot from 2019-06-28 21-07-41.png">

Paling aman sebenarnya, cari apa yang menurut kita kurang di peramban ini dan ingin kita perbaiki. Misal, saya agak kesal dengan kutu yang melibatkan manajemen fokus pada komponen UI di DevTools. Jadi saya coba cari kutu itu. Ternyata ada lalu saya coba reproduksi di lokal. Pastikan kutu yang ingin kita sikat sedang tidak dikerjakan oleh orang lain dengan memperhatikan *assignee* dari tiket terkait. Jika *assignee*-nya `nobody` atau `nobody@mozilla.org`, maka tiket tersebut sedang lowong dan bisa kita comot.

<img src="/assets/Screenshot from 2019-06-28 21-19-07.png">

Jika ingin mengerjakan sesuatu yang *impact*-nya besar, cari tiket-tiket dengan label P1 (yang berarti prioritas). Namun biasanya sebagian besar tiket-tiket P1 sudah ter-*assigned* ke pengembang lain.

Sebelum menyikat kutu, tinggalkan komentar pada tiket terkait kalau kita akan menyikat kutu tersebut.

## Ketik-ketik dorong

Oh iya, Mozilla menggunakan Mercurial untuk *versioning control*-nya. Karena sehari-hari saya menggunakan Git, saya mesti membiasakan diri dulu dan mendapati ternyata tidak terlalu jauh berbeda. Kesimpulannya, saya masih lebih menyukai Git karena kontrol yang lebih luas terhadap sumber kode yang kita kelola.

Setelah ketik-ketik sunting, lakukan *commit* dengan perintah,

```
hg commit -m 'Bug 1548076. Let the devtools gain focus even if the click hits an empty area on UI. r=jdescottes'
```

Mirip kan?

Ada pola tertentu yang mesti kita ikuti saat membuat pesan *commit*:

- `Bug 1548076.` - String ini mewakili nomor tiket yang sedang kita kerjakan
- `Let the devtools gain focus even if the click hits an empty area on UI.` - Pesan *commit*. Saran 7 aturan untuk ini bisa dibaca-baca di <a href="https://chris.beams.io/posts/git-commit/">https://chris.beams.io/posts/git-commit/
</a>
- `r=jdescottes` - `jdescottes` adalah orang yang akan me-*review* *commit* ini.

Di mana mencari para *reviewer*? Nama-nama mereka sudah dikelompokkan di sini, <a href="https://wiki.mozilla.org/Modules/All">https://wiki.mozilla.org/Modules/All</a>. Kita tinggal comot yang sesuai dengan komponen yang sedang kita kerjakan. Misal, karena tiket yang saya ambil terkait dengan DevTools, saya mengambil nama dari <a href="https://wiki.mozilla.org/Modules/All#DevTools">https://wiki.mozilla.org/Modules/All#DevTools</a>.

Setelah melakukan *commit*, kita tidak melakukan *push* seperti di Git, meskipun di Mercurial juga ada *push*. Yang kita lakukan adalah mendorong *diff* dari *patch* kita ke sistem *review* kode Phabricator di infrastrukturnya Mozilla, yaitu <a href="https://phabricator.services.mozilla.com/">https://phabricator.services.mozilla.com/</a>. Mozilla sudah menyediakan perkakas khusus untuk kebutuhan ini, yaitu `moz-phab` (yang mestinya sudah tersedia di sistem kita setelah menjalankan `python bootstrap`). Saat pertama menjalankan moz-phab, kita akan diminta untuk menyetel otentikasi dengan Phabricator. Kalau sudah terotentikasi, mari dorong!

```
$ moz-phab
Submitting 1 commit for review:
479860:7fe3d910ba4c Bug 1548076. Let the devtools gain focus even if the click hits an empty area on UI. r=jdescottes
Submit to Phabricator (YES/No/Always)?
```

*Yes*-in aja dulu. Setelah terdorong, `moz-phab` akan memberikan tautan *diff* yang kita dorong. Contoh *diff* saya, <a href="https://phabricator.services.mozilla.com/D35686">https://phabricator.services.mozilla.com/D35686</a>.

## *Review*

Setelah masuk ke Phabricator, *reviewer* akan melihat *patch* kita dalam antrian mereka. Barangkali ada beberapa komentar atau saran dan kita bisa belajar suatu hal dari mereka. Diskusi di sini bisa jadi berjalan lambat. Waktu yang dibutuhkan dari saya berkomentar di tiket kutu sampai *patch* diterima adalah hampir seminggu. Jadi santai saja.

Bagaimana kalau kita diminta untuk merevisi *diff*? Langsung sunting kode, namun saat *commit*, lakukan dengan,

```
$ hg commit --amend
```

Perintah tersebut akan menggabungkan perubahan yang ada dengan *commit* kita yang sebelumnya. Tinggal dorong lagi dengan `moz-phab submit`. `moz-phab` akan mendeteksi nomor *Differential* kita yang sudah ada di Phabricator.

Jika *reviewer* sudah akur dengan dengan revisi kita, mereka akan mendaratkan *patch* kita. Contoh, <a href="https://hg.mozilla.org/integration/autoland/rev/a22e6caaafe1">https://hg.mozilla.org/integration/autoland/rev/a22e6caaafe1</a>.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Co_OLl4zlYA?controls=0&amp;start=58" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Selamat!

Tinggal diulangi lagi siklus kontribusinya. Selamat berburu!


### Referensi

- <a href="https://wiki.mozilla.org/Contribute">https://hg.mozilla.org/integration/autoland/rev/a22e6caaafe1</a>
