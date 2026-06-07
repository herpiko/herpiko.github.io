---
draft: true
title: "sinkron waktu di mikrotik dengan NTP"
date: 2011-12-20 10:06:41Z
categories:
  - how to
  - linux-opensource
  - uncategorized
---
awalnya dari blokir fb dan socmed lain di kantor, tapi setiap mati lampu, jamnya ter-reset dan jadwal blokir fb jadi kacau. rekan kantor pada senyum kembang-kembang buka facebook. gobloknya saya ndak googling dulu, langsung bongkar mikrotiknya buat liat2 siapa tahu ada baterai jamnya (semacam baterai bios di PC), ternyata tidak. UPS juga tidak bisa bertahan lebih lama dari yang diharapkan.

solusinya, pengaturan waktu di mikrotik bisa diatur agar sinkron dengan server NTP. dalam hal ini, saya menggunakan server NTP dari LIPI : ntp.kim.lipi.go.id

berikut definisi NTP dari situs LIPI :

Secara umum, Network Time Protocol (NTP) adalah protocol untuk meng-sinkron-kan sistem waktu (clock) pada komputer terhadap sumber yang akurat, melalui jaringan intranet atau internet. Terdapat beberapa situs NTP "Stratum 1" (situs NTP dengan sumber waktu dari atomic clock) and "Stratum 2" (situs NTP dengan sumber waktu dari situs NTP lain, dengan sedikit penurunan tingkat akurasi) yang dapat digunakan oleh publik.

Dalam aplikasinya, sebaiknya jaringan mempunyai satu (atau lebih) NTP server lokal (Stratum 2 atau 3) untuk semua work-station, yang di-sinkron-kan terhadap NTP server di luar jaringan. Konfigurasi ini lebih menjamin korelasi antar sistem-sistem yang terkait dalam jaringan yang bersangkutan.

di mikrotik, pergi ke system > NTP client. akan muncul jendela pengaturan NTP client. pilih mode unicast dan isikan primary NTP server dengan ntp.kim.lipi.go.id yang nantinya akan berubah secara otomatis menjadi alamat IP. klik OK.

[![](/assets/ntpclient.png)](http://pikopages.files.wordpress.com/2011/12/ntpclient.png)

waktu dan jam di mikrotik akan mengikuti waktu yang diberikan oleh NTP server tersebut, jangan lupa pilih timzone yang benar. sekarang, meski mikrotik mati hidup karena listrik, waktu tetap akan sinkron otomatis begitu koneksi internet tersambung.

[![](/assets/mikrotikclock.png)](http://pikopages.files.wordpress.com/2011/12/mikrotikclock.png)
