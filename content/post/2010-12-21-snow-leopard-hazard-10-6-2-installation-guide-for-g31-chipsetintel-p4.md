---
draft: true
title: "snow leopard hazard 10.6.2 installation guide for G31 chipset / intel P4 /"
date: 2010-12-21 23:39:45Z
categories:
  - how to
  - uncategorized
---
**IF YOU LIKE MAC, PLEASE BUY IT.**

setelah 3 hari berjuang dan akhirnya berhasil, barulah saya berani tulis postingan. berikut laporannya.

spesifikasi : intel PIV 3.00Ghz HT (SSE2), 1GB RAM DDR2, ECS G31 chipset motherboard (ICH7 family), VGA onboard intel GMA3100, ICH7 hdaudio, realtek LAN, 320GB WD HDD SATA, lite-on DVD-RW PATA.

1. persiapan. saya menggunakan SL-hazard, silakan unduh menggunakan torrent. [klik di sini](http://leohazard.com/Download/Snow_Leopard_Client_Server_10.6.2_SSE2_SSE3_Intel_AMD_by_Hazard.torrent.zip). agar aman, sebaiknya backup dulu data anda. sisakan partisi primary kosong di tempat pertama.

2. gunakan default setting bios kemudian nonaktifkan ACPI, booting DVD SL-hazard dengan option -v cpus=1

3. booting DVDnya dengan menggunakan option -s. verbose mode, agar kita bisa lihat jika terjadi kesalahan, kernel, panic, maupun hang.

4. syukurlah jika berhasil masuk GUI. jalankan disk utility dan format partisi primary pertama dengan mac extended journal. erase di sini berarti format. tutup jendela disk utility jika sudah selesai.

5. partisi siap install akan muncul. saat akan menginstall, klik dulu customize.

6. centangkan paket2 berikut : combo update, kernel legacy, chameleon bootloader (salah satu).

7. install. skip checking media. restart jika sudah selesai.

8. keluarkan DVD. jika berhasil masuk ke bootloader, coba booting dengan verbose mode. syukurlah jika langsung berhasil masuk desktop, kalau kernel panic, anda akan lihat penyebabnya adalah appletymcedriver.

9. jika kernel panic, restart dan booting dengan option -s. setelah masuk terminal, mounting partisi root agar bisa ditulisi.

mount -uw /

hapus kext tymcedriver

rm -f /system/library/extensions/*appletymcedriver*

restart

reboot

9. selamat menikmati snow leopard dengan semua perangkat berjalan sempurna kecuali vga.

kenapa vga tidak bisa? karena belum ada yang membuat driver kext untuk GMA3100 (GMA3100 =/= GMAX3100, jadi jangan centangkan saat customize install).

bisa jadi beda kasus dan lebih banyak error kalau anda yang mencoba. hackintosh tidak cocok di PC anda jika anda mudah putus asa. :)
