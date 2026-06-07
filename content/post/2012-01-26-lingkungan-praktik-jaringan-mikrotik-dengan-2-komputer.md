---
draft: true
title: "Lingkungan Praktik Jaringan Mikrotik dengan 2 Komputer"
date: 2012-01-26 10:02:57Z
categories:
  - how to
  - linux-opensource
tags:
  - jaringan
  - mikrotik
  - router
  - virtual
  - virtualbox
---
perangkat virtualisasi seperti virtualbox atau vmware sangat membantu dalam banyak hal. mari kita bermain-main sedikit.

jadi kondisinya begini.

- saya tidak punya routerboard

- saya hanya punya 2 komputer yang tidak kuat menjalankan vmware/virtualbox banyak2. sebuah PC-mac gadungan dan netbook berisi archlinux. asumsinya, setiap komputer hanya kuat menjalankan 1 OS virtual.

topologi yang ingin saya terapkan hanya routing sederhana dari 2 lingkungan berbeda, yang berarti membutuhkan minimal 3 komputer. 1 sebagai router, 1 sebagai komputer kelompok IP x, 1 lagi sebagai komputer kelompok IP y. sebenarnya, jika dipaksakan, komputer saya masih bisa dipasang 3 OS virtual dan jalan simultan. tapi sangat berat memang, lagi pula mempraktikkan sambil bermain bayang2 (karena perangkat mikrotik tidak benar-benar ada) lumayan bikin pusing. tentu saja tidak sulit mengubah PC biasa menjadi router, tapi yang saya maksud di sini, mikrotiknya virtual, tetapi port-port UTP-nya nyata, bisa kita sentuh dan OS host berikut data tidak terganggu.

mengapa tidak menginstall mikrotik secara native?

- karena ini komputer pribadi untuk keperluan sehari-hari, sebuah netbook dengan 1 port UTP dan 3 port USB.

- jika install native, hanya ada 1 port UTP, sementara USB2UTP tidak dikenal di mikrotik

dalam kasus ini, saya ingin punya sebuah 'routerboard' dengan 4 port, itu setara RB750 dengan performa yang lebih baik, menggunakan routerOS 5.xx trial 24 jam. sebenarnya, untuk belajar, versi routerOS ini tidak terlalu merepotkan dengan limit waktunya. bisa diakali dengan backup konfigurasi. sesering mungkin backup sistem dan unduh berkasnya. jika lewat batas waktu hanya perlu 3 langkah kecil. install ulang > konfigurasi IP salah satu interface > upload dan restore berkas backup. dan semua kembali seperti sebelumnya.

yang dibutuhkan untuk routerboard rakitan ini selain komputer adalah 2 atau 3 buah USB2UTP, jumlah tergantung kebutuhan.

[![](/assets/csc_0159.jpg)](http://pikopages.files.wordpress.com/2012/01/csc_0159.jpg)

pastikan semua USB2UTP bekerja dan semua interface di-up, tetapi tutup semua koneksi. saya menggunakan arch linux, dan networkmanager bawaan gnome tidak bekerja normal dengan mode bridge di virtualbox. matikan daemon networkmanager dan gunakan netcfg. buat 4 berkas di /etc/network.d/, salah satunya misal bernama bridge0 yang isinya :

[code]INTERFACE="br0"

 CONNECTION="bridge"

 DESCRIPTION="Virtualbox Bridge"

 PRE_UP="ip link set dev eth0 promisc on"

 BRIDGE_INTERFACES="eth0"

 IP="no"[/code]

untuk berkas selanjutnya, ikuti penomoran, berkas bridge1 untuk eth1, bridge2 untuk eth2. kemudian aktifkan semuanya.

[code]sudo netcfg bridge0[/code]

dan seterusnya. ini bertujuan menjembatani interface virtual langsung ke perangkat kerasnya.

buka virtualbox dan pilih mode bridge untuk jaringannya. Adapter network 1 dengan bridge0 dan seterusnya. setelah routerOS terpasang, kita akan mendapati semua interface mikrotik siap.

[code]/interface print[/code]

[![](/assets/screenshot-at-2012-01-26-082020.png)](http://pikopages.files.wordpress.com/2012/01/screenshot-at-2012-01-26-082020.png)

yep, mikrotik siap digunakan dan anda bisa memperlakukan setiap port sebagai 'routerboard' sudah ada, bagaimana dengan lingkungan jaringan untuk routing? anda butuh 1 komputer lagi dengan 2 port UTP plus kabel2 UTP yang pendek dan menerapkan konsep yang sama. komputer host sebagai komputer kelompok IP x menggunakan eth0, sedangkan komputer guest (bridge ke eth1) sebagai komputer kelompok IP y. host dan guest tidak berhubungan langsung, melainkan melalu port mikrotik. tinggal diatur routingnya.

[![](/assets/screen-shot-2012-01-25-at-11-57-25-pm.png)](http://pikopages.files.wordpress.com/2012/01/screen-shot-2012-01-25-at-11-57-25-pm.png)

yup, hanya dengan 2 komputer, kita punya mikrotik setengah nyata dan lingkungan jaringan kecil untuk praktek. :)
