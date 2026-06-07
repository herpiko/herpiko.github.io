---
draft: true
title: "Hack Wireless Billing Hotspot dengan MacChanger di BlankOn"
date: 2009-05-25 05:57:29Z
categories:
  - linux-opensource
  - pikiran
tags:
  - hack billing hotspot
  - hack wireless
  - ngoprek
---
Satu hal, saya bukan heker (meski judul postingnya 'hack', 'hack', 'hack') tapi cuma orang yang mencoba belajar.

Korban : Warnet milik Badan Perpustakaan Daerah NTB, access point "warintek1", 00:22:6B:54:04:F2.

(saya sengaja terang-terangan supaya admin warinteknya kalo baca ini jadi nyadar dan perbaiki jaringannya supaya lebih aman).

Pelaku : Anggota Badan Perpustakaan sendiri, nama disensor (kode etik pers)

BB (barang bukti) pelaku : mekbuk+blankon, dvd repo ubuntu (buat nginstal2 aplikasi tambahan), cd backtrack, dan kopi baru seduh.

Senjata spesifik : aircrack-ng + macchanger

Kisahnya begini. Di tempat saya ada banyak AP yang berkeliaran. Hanya satu yang terbuka dan bisa akses internet, yaitu milik tetangga sebelah. Sayang, jadwalnya nggak tentu jadi bikin kesel dan boring. Nah, di sebelah tempat saya, berdiri gedung besar milik Perpustakaan Provinsi. Ada dua Access Point dari gedung tersebut. Setelah sedikit survey, saya tahu kalau dua AP itu terhalang sekitar dua sampai tiga tembok ke tempat saya berada, tapi sinyalnya cukup buat chipset atheros ini. Awalnya, dua AP ini diproteksi, satu dengan WEP, satu dengan WPA. Saya sudah coba-coba dengan aircrack, di WEP mekbuk saya malah heng. Kalo WPA, proses brute attack lama sekali selesainya, duluan batere habis.

Setelah beberapa minggu, tiba-tiba secara mengejutkan, proteksi WEP-nya hilang dan konsepnya berganti wujud menjadi "Billing hotspot". Waw... Rupanya si admin warintek mencoba berganti teknik, dari enkripsi WEP menjadi redirect via web.

Maksudnya begini. Kita bisa saja konek dan tersambung ke share foldernya, siapapun yang mencoba pasti bisa karena memang tidak diprotek. Tapi ketika buka halaman web dengan web browser manapun, halaman akan dialihkan ke server hotspot. Yaitu sebuah halaman login dengan user dan password. Toeng!

Pada kasus ini, halaman dialihkan ke http://192.168.3.1/iblogin.php--blablablabla-<mac_address>. Mac addressnya tentu saja terisi mac address saya. Berikut skrinsutnya, saya coba buka google.

*

Hebat deh... saya menduga pasti pakai apache... coba http://192.168.3.1/

![](/assets/itworks1.png)

Itu adalah tulisan khas server apache. It works! It works! Joget pisang.

Setelah mondar-mandir, ternyata ketemu, mac address saya tercatat di sana. 00-1B-63-08-62-4D

![](/assets/mac.png)

Saya mencoba nama2 direktori-direktori di bawah /var/www yang mungkin. Ternyata dapat, yaitu http://192.168.3.1/billing/. Isinya adalah form login untuk kustomisasi billing hotspot.

![](/assets/login.png)

Hmmm, dia bilang... 'melindungi password anda dari brute attack'... lumayan...

Saya coba-coba user passwdnya sampe boring semaput, kagak ketemu. teknik bodoh ini saya tinggalkan.

Analisis (alah..) : karena mac address saya dicatat di address bar ketika buka google.com, saya kira 'token' (istilah saya untuk semacam kredensial pengenal) ada di mac address, bukan di cookies login di web browser. Artinya, hotspot ini menggunakan mac filtering. Hanya mac address yang pernah sah konek ke sana atau yang didaftarkan yang bisa melewati proteksi billing. Jadi, saya harus mencoba konek dengan mac address yang 'pernah' konek ke AP ini.

Nah, bagaimana mendapatkan mac address ini?

TOENG! aircrack-ng!. Aplikasi hebat ini bisa menampilkan semua mac address client maupun access point, dan menunjukkan siapa sedang berhubungan dengan siapa. Pakai Backtrack3 Final, atau install aircrack

sudo apt-get install aircrack-ng*

Sebagai contoh, saya pakai bactrack

ketik :

*airmon-ng start wifi0*

(wifi0 bisa diganti dengan device wireless anda yang sesuai, bisa wlan0 atau ath0)

Saya kira maksud perintah ini adalah menjalankan kloning monitor, dan kita dapatkan ath1 (monitor mode enable)

*airodump-ng ath1*

perintah ini untuk memonitor sinyal wireless di sekeliling kita.

*

Toeng! Got it!

![](/assets/airodump.png)

Penjelasan :

Yang tertulis di kolom BSSID di bagian atas adalah mac address Access Point yang tersedia di sekeliling anda. kolom BSSID di bagian bawah adalah mac address Access Point yang sedang konek dengan klien. Nah, kliennya itu ada di sampingnya, yaitu di kolom STATION.

Kita jadi tahu bahwa leptop yang sedang konek dengan hotspot warintek1 (00:22:6B:54:04:F2) adalah 00-1B-63-08-62-4D (ini punya saya) dan 00:21:00:94:5A:09 (ini klien yang jadi korban). Catat maknyus..

Sekarang giliran macchanger beraksi. Install dulu kalo belum diinstall.

sudo apt-get install macchanger*

Saatnya menyamar....

![](/assets/macchanger.png)

Voila! Sekarang ID(pengenal) leptop saya sudah berubah dari yang semula menjadi 00:21:00:94:5a:09, yaitu mac address milik leptop yang sudah dikenal oleh access point. Secara logika, kalau saya coba konek, maka pemilik mac address tadi akan terputus, bila dia coba konek, saya akan terputus. Tidak efektif memang, tapi saat si klien korban sudah boring dan pulang, giliran saya yang ngenet. Joget pisang...

Coba disable wireless, kemudian aktifkan lagi. Lalu coba konek. mungkin gagal untuk beberapa kali (ini kalau pemilik mac address masih di tempat), coba terus sampai akhirnya bisa. Terus buka halaman gogel.

![](/assets/google.png)

Tadaaaaaaaaaaaaaaa! Billing hotspot sudah tersingkir, dadah. Toeng! Toeng!
