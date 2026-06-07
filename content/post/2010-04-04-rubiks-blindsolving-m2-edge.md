---
draft: true
title: "Rubiks Blindfolded Solving dengan metode M2 (Edge)"
date: 2010-04-04 00:00:56Z
categories:
  - pikiran
  - rubik&#039;s cube
  - uncategorized
tags:
  - BLD
  - blindfolded
  - cube
  - M2
  - pochmann
  - rubik
  - rubik&#039;s cube
  - rubikku
---
dipersembahkan untuk cuber indonesia, khususnya keluarga [rubikku](http://rubikku.ning.com).

dear all,

setelah lama berkutat dengan old pochmann (yang sangat mudah dipahami namun membuat pegal jari-jari), akhirnya saya mulai belajar M2, yang membingungkan namun eksekusinya jauh lebih cepat.  sampai saat ini, dengan old pochmann saya masih sub 6 dan  PB saya 4.32.03. akurasi masih sangat rendah, 70 persen DNF. meskipun masih goblok, saya tetap memaksakan diri pahami M2 (belajar dari situsnya [pak stefan](http://www.stefan-pochmann.de/spocc/blindsolving/M2R2/) dan sedikit tambahan dari video tutorial mas wicak, terima kasih untuk keduanya).

sebagai catatan, saya menggunakan oranye di depan dan kuning di atas,  dan untuk corner, saya masih menggunakan old pochmann corner.

dan satu lagi, saya lebih mendahulukan mengeksekusi edge, kemudian corner. jadi  tutorial ini lebih diaplikasikan untuk itu. jika anda punya urutan eksekusi berbeda, anda bisa lihat pilihan berbeda di video mas wicak.

**KONSEP**

perbedaan mendasar dengan old pochmann, adalah M2 tidak menggunakan algo permutasi. sesuai namanya, gerakan utamanya adalah M2. jika anda masih bingung dengan apa itu gerakan M, silakan lihat **[notasi dasar](http://www.cubewhiz.com/notation.html)**.

[*](http://pikopages.files.wordpress.com/2010/03/m2-ilustrasi.jpg)

letak buffer-nya bukan di UR (Up-Right), tetapi di DF (Down-Front) menembak ke UB (Up-Back). dengan setup move, kita akan membawa sasaran ke UB.

**SETUP MOVE**

efek samping dari penggunaan M adalah kita tidak boleh menggunakan gerakan yang mengubah piece-piece di M saat setup move maupun undo setup move selesai dilakukan. silakan lihat daftar.

FR**
DR

BR

UR
U R U' M2  U R' U'

U R2 U' M2 U R2 U'

U R' U' M2 U R U'

R' U R U' M2  U R' U' R

FL

DL

BL

UL
U' L' U M2  U' L U

U' L2 U M2 U' L2 U

U' L U M2 U' L' U

L U' L' U M2  U' L U L'

RU

RF

RD

RB
x' U' R U M2 U' R' U x

x' U' R2 U M2  U' R2 U x

x' U' R' U M2 U' R U x

l U'  R' U M2 U' R U l'

LU

LF

LD

LB
x' U L' U' M2 U L U' x

x' U L2' U' M2  U L2 U' x

x' U L U' M2 U L' U' x

r' U L  U' M2 U L' U' r

sebenarnya tidak perlu menghafal semua di daftar ini, undo setup bisa  dengan intuitif.

secara umum, penggunaan setupmove-M2-undosetupmove hanya digunakan  untuk  piece selain di M. untuk piece yang terletak di M, ada algo  tambahan  lagi (ini salah satu alasan saya menunda-nunda belajar M2 dari  dulu, memahami algo memang menjemukan, tapi kalo udah diluar kepala,  wow.... ndak nyesel dah).

SASARAN PADA M LAYER**

Untuk M layer, ada algo tersendiri. ayo semangat makan algo ini, gampang kok. =))

**FD dan DF = buffer

UF = U2 M' U2 M'

FU = FE  RUR' E' RU'R' F' M2

UB = M2

BU = F' D R' F D' M2 D F' R D' F

BD = M2 D R'U R'U' M' URU' M R D'

DB = M U2 M U2

SASARAN M PADA LANGKAH GENAP**

ini lebih membingungkan lagi (saya butuh waktu agak lama untuk  memahaminya). jika kita melakukan shoot pertama (ganjil), maka saat akan  melakukan (akan, berarti belum dilakukan) shoot kedua (genap), kita  akan mendapati centernya terbalik atas bawah. nah, karena terbalik, maka  saat melakukan shoot piece yang ada di M, kita harus memikirkan letak  kebalikannya dan mengeksekusi algo kebalikannya.

PENGECUALIAN UNTUK UB DAN BU.

kalau belum ngerti, silakan lihat gambar (dari mas wicak). jika, langkahnya genap, algonya harus kita ganti dengan algo yang dipasangkan garis beranak panah tersebut.

[caption id="attachment_979" align="aligncenter" width="223" caption="algo langkah genap"][![](/assets/blah.jpg)](http://pikopages.files.wordpress.com/2010/03/blah.jpg)[/caption]

saya kira, di bagian inilah yang sering membuat saya DNF dengan M2. tapi saya yakin, jika sering-sering latihan, DNF bisa diminimalisir.

**PARITY**

seperti old pochmann, tergantung total cycle. ganjil parity, genap no parity. urutannya adalah, eksekusi edge-eksekusi algo parity (jika parity)-eksekusi corner.

**GANJIL** >>> maka kita akan mengambil  kesimpulan bahwa akan ada parity, yaitu center putih ada di atas dan  kuning ada dibawah, dan sedikit kekacauan lain.

algo parity-nya adalah **U' F2 U M2 U' F2 U***

sudah rapi, tapi hei! UL dan UB tertukar!

karena saya menggunakan old pochmann, anda pasti tahu maksudnya. jika  kita melakukan permutasi corner dalam jumlah ganjil, maka UL dan UB  akan tertukar. posisi yang sekarang dibuat demikian untuk mengatasi  keadaan itu. jadi nanti akan tertukar kembali, karena jika cycle edge  berjumlah ganjil, pastilah corner ganjil.

**GENAP** >>> syukurlah... =))

***nah, selamat bermigrasi ke M2. =))***
