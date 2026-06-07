---
draft: true
title: "oprek modem DT8 di ubuntu lucid"
date: 2010-11-02 23:59:25Z
categories:
  - linux-opensource
tags:
  - 05c6:0015
  - 3G
  - DT 8
  - GSM
  - linux
  - lucid
  - modem
  - oprek
  - sakis3g
  - telkomsel flash
  - ubuntu
---
alkisah, seorang teman dari seorang teman bernama mas isat datang bawa netbook acerone dan bilang modem GSM 3G (advan dt8 telkomsel flash) ndak mau konek, bahkan tidak terdeteksi di ubuntu lucidnya. mas isat ini teman dari mas ook (mas ook itu siapa ya? o yang itu).

pendek kata, dari sore sampai malam saya gagal oprekin. dengan merasa kalah dan malu berat,  saya bilang, agar modemnya saya bawa pulang karena masih penasaran kenapa ndak bisa dan supaya besok datang lagi.

di komputer lab di rumah, langsung saya resize partisi buat install lucid. dari googling, cara yang saya gunakan adalah sebagai berikut :

install wvdial dan usb-modeswitch

sudo apt-get install wvdial usb-modeswitch

habis itu coloki modem. buka terminal dan :

lsusb

modem itu terdeteksi sebagai 05c6:2000

sebenarnya, 2000 itu identifikasi untuk storage zeroCD. bagi yang belum tahu, zeroCD itu ruang untuk file bawaan driver. misal untuk modem ini, kita akan temukan drive/partisi khusus dari sana, yang isinya file autorun dan instaler driver (untuk windows). nah, kita musti eject storage ini agar gantian yang teridentifikasi adalah modemnya.

tunggu 2-3 detik terus jalankan lsusb lagi

modem itu terdeteksi sebagai 05c6:0015

nah, ini dia identifikasi yang benar. err, kalau tidak salah sih, fungsi usb-modeswitch itu buat menukar identifikasinya dari storage ke modem, jadi tanpa perlu eject. tapi saya coba kok ndak mau ya?

langkah selanjutnya meload drivernya ke kernel

modprobe usbserial -vendor 0x05c6 -product 0x0015

NB : sebaiknya mengetik ulang perintah ini dibanding copy paste, karena perintahnya kadang tidak jalan.

yak! cek applet network managernya. broadband connetctionnya muncul. selamat bermodem ria!

eee tapi itu netbook memang suck, tetep ndak mau. di coba di rumah bisa, di situ ndak bisa. bagi yang masih gagal, silaken lari ke sini sambil angkat bendera putih. dan berhubung saya juga gagal :

http://sakis3g.org

unduh paketnya di sana. bisa dalam bentuk source maupun binary. jalankan. interfacenya cukup mudah dipahami. saat mau meload driver, pilih opsi kedua (option_module kernel). isi apn, user, pass providernya. konek! bahkan kita bisa buat shortcutnya di desktop. sakis3g jalan sempurna di netbook mas isat.

sakis3g adalah all-in-one script untuk deteksi dan konek modem 3G, dengan catatan, koneksnya tidak menggunakan network manager sistem kita. kalau kita ingin menggunakan network manager, hentikan langkah setelah memilih opsi load driver ke kernel.

yah, sekian.
