---
draft: true
title: "Cara bodoh koneksi wifi TP-LINK WN322G di Mac OS X Snow Leopard"
date: 2011-08-11 23:00:16Z
categories:
  - linux-opensource
  - mac
tags:
  - bodoh
  - ICS
  - internet
  - mac
  - wifi
---
Saya punya mesin Mac dan sebuah adapter USB wireless TP-LINK WN322G (Atheros ath9k). Adapter wireless ini tidak terdeteksi di Mac. Kext-nya dicari-cari ke ujung dunia tidak ketemu. Nah. Jadi saya punya beberapa opsi yaitu sebagai berikut:

1. Menggunakan komputer atau laptop lain yang punya wifi dan bekerja baik di sistem operasinya, kemudian membagi akses internetnya (Internet Connection Sharing, di Windows atau Linux ini bekerja dengan baik) ke mesin Mac via LAN.

2. Menggunakan VirtualBox/VMware dan memasang Ubuntu. Adapter wireless-nya dipasangkan ke Ubuntu, kemudian dari Ubuntu sharing akses internet ke host (Mac).

3. Menggunakan VirtualBox/VMware dan memasang Ubuntu, adapter wireless-nya dipasangkan ke Ubuntu, kemudian dari Ubuntu sharing akses internet melalui LAN fisik (bridge), kemudian dari LAN pertama disambungkan dengan kabel UTP cross ke LAN kedua.

4. Membeli PCI wifi baru yang kompatibel.

Cara pertama, ini benar-benar merepotkan. Masa harus numpang kayak parasit gitu.

Cara kedua, ini sepertinya sulit diimplementasikan karena perangkat virtual (vmnet1 dan vmnet8 di VMware, begitu juga di VBox), tidak bisa dipasangkan gateway. Keduanya masih bisa diganti IP address-nya dengan mengganti parameter di /Library/Application Support/VMware Fusion/location, networking, vmnet1, dan vmnet8. Kedua ethernet virtual itu bisa digantikan IP-nya mengikuti 10.42.43.xx, yang mana merupakan IP default untuk ICS di Ubuntu. Tapi gateway-nya? Saya tidak menemukan cara, bahkan sampai googling semaput. Ada yang bilang bisa pakai route, tetapi itu tetap tidak berhasil (atau saya yang goblok).

Cara ketiga, it works.

Cara keempat, ah males keluar uang. Nanti tanggal tua gak bisa makan.

Nah, berikut detail cara ketiga. Saya menggunakan VMware Fusion (dan saya akui ini bajakan, termasuk Mac OS X-nya juga >.<). Saya tidak menggunakan VirtualBox karena tidak mendeteksi USB dengan baik di guest OS, USB not recognized kalau di Windows, dan tidak respon lsusb kalau di Linux. Saya menggunakan BlankOn 7 Pattimura dan adapter USB wifi itu langsung dikenali dengan baik. LAN VMware-nya saya setting bridged ke LAN fisik pertama (en0). Setelah berhasil koneksi dengan dunia luar via wifi, saya membagi aksesnya. Caranya bisa dilihat di sini. Nantinya, LAN milik Ubuntu akan mempunyai IP 10.42.43.1 secara default.

Nah, di Mac, di LAN fisik kedua saya isikan IP 10.42.43.2 dan gateway 10.42.43.1. Seharusnya bisa via DHCP tapi entah kenapa itu tidak bekerja.

Lalu saya memotong kabel UTP sepanjang 15cm, pendek bro. Dan RJ45 dicrimping cross. Colok dan tada!

[![](/assets/dsc_0003.png)](http://pikopages.files.wordpress.com/2011/08/dsc_0003.png) Tanpa skrinsut adalah hoax.

[![](/assets/screen-shot-2011-08-22-at-3-19-37-am.png)](http://pikopages.files.wordpress.com/2011/08/screen-shot-2011-08-22-at-3-19-37-am.png)

UPDATE:

Ternyata, bahkan tanpa NIC kedua kita masih bisa konek. Buang NIC kedua dan kabel UTP cross. Hanya dengan menyambung via bridging, LAN fisik kita sudah dianggap sebagai LAN virtual yang mana sudah nyambung inet dari dalam. :)

Begonya saya. (doh)
