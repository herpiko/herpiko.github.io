---
draft: true
title: "mengatasi RS-MMC corrupt di N-Gage"
date: 2011-01-24 02:49:08Z
categories:
  - uncategorized
tags:
  - memory card corrupted
  - MMC
  - n-gage
  - postaday2011
  - symbian
---
seharusnya ini ditulis 4-5 tahun lalu. sekarang, mendapatkan MMC sangat sulit di samping standar ini sudah kalah telak dengan standar SD card, yang bisa saya dapatkan hanya RS-MMC (reduce size, berukuran setengah dari MMC), itu pun jarang yang bergaransi, yang berarti kualitasnya kurang dijamin. karena keadaan tersebut, saya terpaksa beli RS-MMC V-GEN 512 MB. yang mana kata orang ukuran 512 adalah yang paling sering bermasalah, apalagi ini MMC murahan, bukan plus.

ternyata, memang bermasalah. sebagai catatan, pertama saya mencobanya di N-Gage QD, saya pikir QD-nya  yang bermasalah. kemudian saya coba di N-Gage original, hal yang sama  terjadi. jadi bisa ditarik kesimpulan bahwa MMC-nya yang bermasalah. jika saya menginstall program yang mengekstrak banyak file dari symbian atau mencopy terlalu banyak file ke MMC dari PC, MMC-nya akan terbaca corrupt. sedangkan untuk penggunaan di PC, RS-MMC ini baik-baik saja. tetapi kalau di ponsel, selalu saja 'memory card corrupted!'.

oke, jika saya googling maka saya akan menemukan solusi format dengan mmcmedic. tapi untuk RS-MMC jelek ini, sama sekali tidak membantu, tetap corrupt. nah, bagaimana caranya agar tetap bisa digunakan?

setelah belasan kali format dan mempelajari sifat-sifatnya, saya bisa mengambil beberapa poin.

- menulis data terlalu banyak ke MMC dari ponsel membuat corrupt.
- sekali corrupt, tidak bisa diperbaiki, mesti format.
- penulisan data pertama setelah format (baik dari n-gage maupun dari PC) tidak menghasilkan corrupt.
- setelah dieject kemudian dimount lagi lalu penulisan data yang kedua kali, akan menghasilkan memory card corrupt.

jadi?

anggaplah kita ingin menginstall segudang aplikasi dan game ke MMC ini. caranya :

- unduh atau siapkan semua aplikasi dan game yang ingin dipasang. usahakan bukan sis maupun blz, tetapi dalam bentuk folder system berikut anak foldernya (apps, libs, etc). jika masih sis atau blz, silakan extract terlebih dahulu.
- format MMC dengan fat (bukan fat32 dan jangan gunakan quick format).
- buat satu folder di PC dan masukkan semua aplikasi dan game ke folder tersebut seolah folder tersebut adalah MMC, yaitu dengan manual copas folder system dari aplikasi. kalau perlu masukkan semua lagu dan file lain yang kira2 dibutuhkan agar nanti tidak perlu mengisi lagi.
- copy isi folder di PC tersebut ke MMC
- eject MMC dan masukkan ke N-Gage. MMC tersebut akan diterima dengan baik dan semua aplikasi diload dengan sempurna.

voila!

jika masih ingin menginstall langsung sis dari ponsel, silakan. di percobaan saya, file2 sis yang berukuran lebih dari 2MB beresiko membuat corrupt lagi. bagaimana dong? lanjut saja. install dan corrupt. lepas MMC dan pasang di PC, backup isinya kemudian format, lalu kembalikan lagi isinya. sis yang diinstall tadi sudah bisa dijalankan. :)

nb : terlalu sering memformat akan memperlambat kinerja MMC.

ralat update, skip semua langkah di atas, yang perlu dilakukan hanyalah men-defragment MMC-nya. solved!

![](/assets/cz01.gif)
