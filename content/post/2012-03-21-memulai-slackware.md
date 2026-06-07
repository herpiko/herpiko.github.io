---
draft: true
title: "Memulai Slackware"
date: 2012-03-21 00:40:15Z
categories:
  - uncategorized
---
halo.

Sebenarnya, kadang-kadang saat saya menggunakan perangkat lunak terbuka, saya memaksakan diri. Memaksakan diri di sini dalam artian berusaha terbiasa dengan fitur paling minim dan jelek yang bisa diatur oleh sistem, saya tidak berleha-leha dengan KDE atau GNOME, tapi menggunakan openbox. Lebih memilih alternatif terminal ketimbang GUI, misal mc pengganti file manager dan filezilla(ftp), atau cmus sebagai pemutar musik pengganti amarok atau audacious. Memang terbukti ampuh untuk memigrasikan kebiasaan. 6 bulan belakangan ini, saya hidup full GNU/Linux, termasuk penggunaan filesystem ext3 untuk data (/home). Lupakan tulisan saya mengapa NTFS lebih baik dan aman untuk penyimpanan data (dari sisi recoverable). Atau menggunakan Colemak ketimbang QWERTY, disamping saya selalu suka dengan sesuatu yang bukan mainstream. Merepotkan? Susah? Tidak, justru menyenangkan dan saya tidak menyesal sudah menghabiskan banyak waktu dengan semua itu.

Di PC, saya mengunakan Mac. Oke, itu memang ilegal tetapi saya tidak bisa menahan diri dengan yang satu ini. Di komputer jinjing, saya menggunakan Arch Linux (sebagai default), Windows 8 Consumer Preview (mumpung lisensinya sah :P), dan terakhir yang baru saja dipasang, Slackware. Saya hanya menggunakan Slackware untuk server apache, proxy, dan dns dengan konfigurasi standar. Sebenarnya saya sudah mulai mencoba Slackware pertama kalinya lebih dari 2 tahun yang lalu, tapi ujung-ujungnya saya tidak kuat menghadapi distribusi super-merepotkan ini (saya belum coba gentoo). Saya memang pernah bilang Arch juga merepotkan, namun tidak sekejam Slackware. Wiki arch sangatlah lengkap dan jelas. Kalau Slackware mesti lebih banyak googling, lebih banyak cangkir kopi, terutama mengenai dependensi. :P

Kenapa Slackware? Tentu tidak relevan menggunakan kelebihan (yang saya dengar dari orang lain) sebagai alasan karena saya sendiri belum mencoba lebih dalam. Sejujurnya, alasannya karena saya pikir Slackware itu keren. Dilihat dari namanya saja sudah menunjukkan karisma. Dan Blek juga pakai jaket Slackware Saya pikir bodoh kelihatannya menggunakan jaket Slackware atau menempel stiker Slackware tetapi tidak menggunakan Slackware. Alasan kedua, saya ingin belajar lebih banyak. Misi akhir, saya ingin mengunakan Slackware sebagai distribusi utama sehari-hari. Ah, saya merasa terlambat melakukan hal ini. *merasa tua

Berbagi home folder

Nah, karena saya masih menggukan Arch untuk keperluan mendesak buat kerja (selama urusan di Slackware belum rampung, misal saya belum pasang libreoffice), saya menginginkan menggunakan nama user dan direktori yang sama. Misal, user 'piko', dengan direktori home 'piko'.

Saya membuat user 'piko' dengan UID dan GID yang sama dengan Arch, sehingga masalah kepemilikan berkas dan direktori beres. Nah, saya bilang beres, memang beres untuk penggunaan di console/terminal.

Bagaimana kalau menggunakan server X? Masalah mulai muncul karena hampir setiap aplikasi yang berjalan di atas X menyimpan berkas dan direktori tersembunyi (hidden) yang berisi konfigurasi di direktori user. Terutama .serverauth yang menyimpan catatan nomor proses yang berbeda setiap kali dijalankan. Saya sih tidak masalah kalau konfigurasinya saling timpa, malah senang karena tidak perlu lagi repot-repot menyesuaikan. Seolah-olah sinkron. Tema, ikon, dan lainnya bisa dilengkapi. Mungkin bisa bermasalah jika versi paketnya beda jauh, barangkali aturan konfigurasinya berbeda dan malah error.

Kembali ke .serverauth tadi. error yang muncul jika menjalankan startx :

xauth: file /home/pdft/.serverauth.23425 doest not exist

Setiap saya mencoba kembali, angka di serverauth berubah secara teratur, bertambah 30. misal dari angka di atas, menjadi serverauth.

23455. Jika saya menjalakan perintah lain, misal menjalankan ls atau membuka berkas dengan vi, kemudian menjalankan startx lagi, angka di

serverauth bertambah lebih banyak lagi. Kemudian saya mencoba menghitung berapa angka yang diperlukan untuk menjalankan touch .serverauth.xxxxx dan memprediksi angka yang akan muncul. Seringkali saya beruntung dan akhirnya slackware masuk X.

Tetapi ketika balik ke arch, masalah yang sama terulang lagi. saya harus memprediksi angka .serverauth.xxxxx. Jika berhasil maka ketika reboot

ke slackware, masalah ini kembali muncul.

Saya menyerah karena memang direktori home yang dibagi pakai itu tidak baik untuk sistem. Saya menggunakan cara yang umum, yaitu data disimpan di direktori yang bisa diakses bersama di kedua distribusi. Agar lebih rapi, saya menyimpan data di /home/data kemudian membaginya dalam kategori-kategori besar (seperti Documents, Downloads, Music, etc) kemudian membuat softlink dari direktori-direktori tersebut ke masing-masing direktori pengguna.

Beres. Dan lumayan rapi. :)

Ngomong-ngomong, saya mulai memperhatikan EYD untuk blogging, terutama huruf besar kecil. Abaikan kata pertama dari paragraf ini. :)

UPDATE : Ya ampun saya bahkan lupa bahwa saya pernah menulis tentang memulai Slackware. (doh).  Dulu masih belum konsisten, hehe.

[http://pikopages.wordpress.com/2011/05/21/konfigurasi-slackware/](http://pikopages.wordpress.com/2011/05/21/konfigurasi-slackware/)
