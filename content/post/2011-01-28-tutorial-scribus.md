---
draft: true
title: "Tutorial Scribus"
date: 2011-01-28 16:58:06Z
categories:
  - linux-opensource
tags:
  - design
  - layout design
  - open source
  - scribus
  - wartalinux
---
yoi, ini tulisan lama di wartalinux, sayang sudah tidak aktif. direpost disini untuk arsip. saya bahkan lupa bagaimana lanjutin tutorial ini.

Hmm, dengan apa versi pdf wartalinux dibuat? Infonya sudah nongol di  rubrik paket. Adalah Scribus, sebuah aplikasi publising opensource yang  cukup lengkap. Bukan OpenOffice? Dengan fitur export pdf-nya, OpenOffice  memungkinkan kita membuat file pdf dari dokumen kita tapi sayangnya  banyak kekurangan dan bug yang menyertainya. Maka kembali ke Scribus  yang telah menjadi pilihan tepat. Selain mendukung PDF, Scribus bisa  mengimport file gambar (tentu saja), SVG, Postscript, dan banyak fitur  lainnya.

Scribus menekankan bahwa dirinya bukanlah sebuah ‘word processor’, tidak  mengelompokkan diri dengan aplikasi officesuite lainnya. Tapi Scribus  adalah sebuah ‘page layout’ program. Jika mencari perbandingan di  Windows, mungkin Adobe Pagemaker adalah jawabannya. Apa yang bisa dibuat  dengan Scribus, bisa apa saja tergantung kreatifitas dan imajinasi  pengguna. Bisa kover CD, kartu ucapan, brosur, newsletter, koran, sampai  poster. Pendek kata hasil Scribus adalah untuk diprinting (meski tidak  semua, seperti pdf wartalinux), bukan untuk ditampilkan di website.  Jadi, kita harus memperhatikan resolusi dan juga ketajaman DPI. Dalam  pembuatan dokumen publising semacam ini, anda perlu memperhatikan  hal-hal berikut.

- Penting untuk membuat sketsa layout atau paling tidak anda mempunyai  gambaran untuk itu. Ini akan membantu bagaimana mengatur semua konten  (tulisan, gambar, dan lainnya) dengan baik.

- Kumpulkan file gambar (dengan resolusi sebaiknya minimal 200 DPI) dan  file yang mungkin diimport lainnya dalam satu folder. Dan jangan ubah  letak file atau mengubah namanya sementara file dokumen scribus ini  (berektensi sla) akan dibuka atau diubah kedepannya. Hal ini dikarenakan  Scribus hanya membuat link ke file gambar, tidak seperti CorelDraw yang  memasukkan semuanya dalam filenya sehingga ukurannya lebih besar.

- Tulis lebih dahulu teks-teks yang akan dimasukkan di editor lain dan  kumpulkan dalam satu folder. Cek kesalahan-kesalahan yang terlihat.  Akhirnya kita hanya perlu copy paste ke dalam area kerja scribus.

Kita mulai saja langsung. Diasumsikan anda telah menginstal Scribus dan  aplikasi tersebut dapat berjalan dengan baik di sistem anda.

Misalnya anda akan membuat pdf yang agak serupa dengan wartalinux. Saat  pertama menjalankan Scribus, akan muncul jendela dialog untuk  konfigurasi dokumen publishing baru (atau bisa juga membuka dokumen yang  sudah ada).

![](/assets/gambar1.png)

Atur ukuran, margin, dan lainnya seperlunya. Klik ok dan tibalah di  area kerja Scribus. Beberapa orang mungkin akan frustasi melihat  interface ini; sangat-sangat asing. Adaptasi memang tidak mudah, tapi  juga tidak sulit.

![](/assets/gambar2-besar.png)

Pertama mungkin kita perlu menyusun sketsa dengan garis panduan.  Tarik dengan drag n drop garis ruler yang ada di atas dan kiri ke area  kerja. Untuk menghapusnya, drag kembali ke garis ruler. Bila butuh opsi  properties untuk sebuah objek, tekan F2 dan jendela kecil akan muncul  membantu anda.

Sekarang kita bisa menggambar dasarnya, misal seperti blok warna yang  berbeda pada sampul setiap edisi wartalinux. Ada tiga pilihan untuk  melakukannya. Menggambar dengan vektor di scribus (yang mungkin agak  membingungkan), mengimport file vektor (SVG dan EPS), dan mengimport  file gambar bitmap. Pilihan akhir terlalu tolol karena ukuran file pada  akhirnya (misal diekspor ke PDF) akan membengkak tak karuan. Saya lebih  memilih untuk membuat gambar vektornya dengan inkscape atau editor  vektor lain, baru diimpor di scribus.

Sebelum bereksperimen, ada baiknya berkenalan lebih lanjut dengan alat-alat. Berikut kegunaan Toolbar di Scribus.

![](/assets/toolbar.png)

Select Item > menggunakan kursor normal

Insert Text Frame > membuat frame untuk teks

Kini kita coba menulis teks judul. Klik ikon Insert Text Frame pada  toolbar dan drag di area kerja sebesar area yang akan membatasi teks  tersebut. Ketik sesuatu. Bila ingin mengubah ukuran dan lainnya, silakan  berkomunikasi dengan kotak dialog Properties. Jendela ini lebih dari  cukup untuk mengatur banyak hal.

Kita coba menulis sebuah paragraf. Lakukan hal yang sama seperti membuat  frame judul tersebut. Ketikan sesuatu atau copy dari teks yang sudah  disiapkan. Kita bisa mengatur rata teks, warna, ukuran, dan lainnya di  kotak properties. Kolom juga bisa dibuat dengan mengatur ukuran dan  posisi frame teks.

Insert Image Frame > membuat frame untuk file gambar

Sekarang masukan sebuah file gambar bitmap. Klik ikon Insert Image Frame  dan drag ke area kerja sebesar area yang akan membatasi gambar  tersebut. Bila gambar kebesaran atau tidak pas, anda bisa mengeditnya  dengan GIMP. Klik kanan dan pilih edit images. Perubahan yang dilakukan  akan berdampak pada file yang diimport.

Insert Table > membuat tabel

Setelah mengklik ikonnya, drag di area kerja. Sebelum tabel itu  dibentuk, akan ditanyakan berapa jumlah kolom dan baris. Isikan form dan  klik ok. Ukuran dan jarak bisa diatur dengan mengklik garis-garisnya.

![](/assets/gambar4.png)

Insert Shape > membuat bentuk2 yang telah disediakan Scribus

Klik tanda segitiga di samping ikon untuk memilih bentuk lain.

![](/assets/gambar5.png)

Insert Polygon > membuat bentuk teratur yang jumlah sisinya bisa kita tentukan.

![](/assets/gambar6.png)

Insert Line > membuat garis

.

Insert Bezier Curve > membuat garis yang bisa diatur bentuknya (curve)

. Akan muncul kotak jendela Node yang membantu mengatur kurva yang ingin dibentuk.

![](/assets/gambar7.png)

Insert Freehand Line > menggambar garis dengan bebas.

Rotation > memutar posisi objek

Klik objek lalu klik ikon. Klik dan tahan pada objek untuk memutarnya.

![](/assets/gambar8.png)

Zoom in or Out > kaca pembesar

Linx Text Frame > membuat sebuah tulisan berlanjut di text frame lain.

Bila pernah baca koran atau semacamnya, pasti mengerti bahwa beberapa  kolom yang satu tulisan, saling menyambung dan ukuran mereka selalu  rapi. Kita bisa saja membuat beberapa teks frame terpisah menjadi kolom  yang juga memisahkan tulisannya, tentunya itu agak merepotkan dan  panjang tulisan sulit diatur. Fitur Link Text Frame mengizinkan kita  untuk membuat sebuah teks dalam frame yang terlalu kecil untuknya, akan  bersambung ke frame lain yang telah ditentukan. Spasi antar baris bisa  diatur pada Kotak Properties > Text, lalu ubah angka pada Line  Spacing.

![](/assets/gambar9.png)

Unlink Text Frame > mengembalikan tindakan dari Link Text Frame

Measurement > menampilkan jarak dari kursor yang kita drag di area kerja.

Copy Item Properties > menyamakan aturan sebuah objek ke objek lain.

Eye Dropper > menyamakan warna dari objek lain.

Klik objek yang bersangkutan, lalu klik ikon dan klik warna di area kerja (objek lain) yang ingin ditiru.

Sampai di sini dulu pembahasan kita. Pada edisi selanjutnya, akan  dibahas tentang jendela Properties yang serbaguna, memanipulasi halaman,  membuat link (sebagai file PDF) baik ke halaman lain, maupun ke alamat  internet, dan tip trick lainnya.
