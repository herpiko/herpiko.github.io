---
draft: true
title: "debian squeeze + WN322G v3 (atheros)"
date: 2011-03-24 21:16:16Z
categories:
  - linux-opensource
tags:
  - ath9k
  - ath9k_htc
  - atheros
  - compat-wireless
  - debian
  - debian squeeze
  - driver
  - linux
  - madwifi
  - squeeze
  - wireless
  - WN322G
---
yak, setelah seminggu lebih mondar-mandir akhirnya bisa juga. ternyata bukan dari paket firmware-atheros maupun madwifi (yang mana saya kira sudah discontinued mungkin).

tapi langsung dari wireless.kernel.org. unduh paket compat-wireless terakhir.

[code]

tar -zxvf compat*

cd compat*

make

sudo make install

[/code]

make-nya memang lama banget. setelah make install selesai, tinggal modprobe module-nya. ath9k ada 4 tapi saya ndak tau yang mana, yang jelas saya aktifkan semua module ini satu-satu, setelah selesai eh tau-tau network-manager sudah connected via wifi. agar diload saat booting, saya menuliskannya ke /etc/modules, semuanya.

 

[code]

ath9k

ath9k_htc

ath9k_hw

ath9k_common

[/code]

kalau dilihat dari driver yang pernah saya pasang di ubuntu, itu adalah ath9k_htc, ya mungkin itu.

selesai. :-)
