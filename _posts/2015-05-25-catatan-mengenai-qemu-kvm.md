---
layout: post
title: Catatan mengenai qemu-kvm
date: 2015-05-15 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

#####Siapkan
Pasang ```libvirt``` dan ```qemu```.
<pre>
sudo apt-get install libvirt qemu
</pre>
#####Buat berkas harddisk
<pre>
qemu-img create hda.img 10G # buat hdd virtual ukuran 10GB, kosong
</pre>
#####Opsi qemu
<pre>
-m 2048  # RAM
-cdrom img.iso # berkas ISO
-hda hda.img # hdd virtual
-hdb hdb.img # hdd virtual kedua
-boot d # booting ke hdd
-boot c # booting ke cdrom
-enable-kvm # aktifkan kvm
-vnc :1 # akses via vnc
</pre>

<pre>
vncviewer :1 # akses vnc
</pre>

#####Komunikasi

Jika ingin berkomunikasi dengan host, gunakan IP 10.0.2.2.

Masuk ke monitor mode : ```Ctrl ``` + ```Alt``` + ```2```

https://en.wikibooks.org/wiki/QEMU/Monitor#sendkey_keys

####Simulasi perangkat USB

Cari informasi ``vendorId`` dan ``deviceId`` dari perangkat USB.
<pre>
lsusb
</pre>
Tambahkan di opsi qemu
<pre>
-usb -device usb-host,vendorid=0x0a5c,productid=0x4500
</pre>
Masuk ke monitor mode
<pre>
info usbhost
</pre>
Dari informasi yang muncul, tambahkan berdasarkan kode hexa yang muncul di perangkat yang diinginkan
<pre>
usb_add host:1234:5678
</pre>
