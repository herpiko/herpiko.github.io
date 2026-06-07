---
draft: true
title: "Komunikasi antar User dengan GNU/Linux"
date: 2008-11-26 09:10:39Z
categories:
  - linux-opensource
tags:
  - email
  - free
  - komputer
  - komunikasi
  - linux-opensource
  - opensource
---
note : Mungkin ada beberapa perintah yang tidak dikenal sistem anda, tergantung distronya. Di tutorial ini digunakan damnsmalllinux, freeBSD, dan Knoppix 3.6.
Sorry buat yang udah expert kalau tulisan ini sudah basi. Ditujukan untuk newbie yang punya ketertarikan pada linux seperti snivelus.
Tidak seperti windows yang ditelurkan om bilgate dari redmon, sistem operasi linux selalu hadir dengan kelengkapan, bahkan saat linux masih dalam mode text/prompt, di dalamnya sudah ada program-program hebat yang tidak pernah terpikirkan oleh microsoft. Apa hebatnya DOS? DOS hampir tidak terlalu berguna bila belum ditambahkan program. Hal ini masih diikuti sang adik, serial windows, yang hadir hampir telanjang (maksudnya tidak ada program-program sering kita butuhkan). Program Officer seperti Ms. Office dijual terpisah, jadiah microsoft terkesan pelit. Beda dengan linux yang terbagi-bagi dalam banyak distro. Dalam satu distro, kamu bisa dapatkan banyak program luar biasa yang dikembangkan komunitas. 
Dan dalam distro itu, ada program-program komunikasi yang tidak terpikirkan ada di windows. Sebagaimana dikenal luas, linux adalah operasi sistem multiuser. Bisakah windows menjalankan muliuser? Switch user mungkin jawabannya tapi itu tidak terlalu banyak berguna soalnya kita harus pura-pura logout supaya bisa login di user lain.
Ini contoh dalam damnsmalllinux, distro super mini. Dalam satu sesi desktop, snivelus login sebagai dua user, yaitu dsl (default user) dan root (super user). Pada jendela di belakang, tanda $ berarti kamu login sebagai user yang tergolong user biasa, limited user. Dalam hal ini, nama usernya dsl.
Lalu snivel buka prompt/terminal baru (jendela di depan), di awal baris masih berstatus $, limited user. Jalankan perintah ‘su’ (tanpa tanda petik) diikuti nama user untuk login ke user lain. Karena mau login sebagai root, ditulis su root atau cukup su . Masukan password ketika diminta. Apa yang kamu ketik di form password tidak akan terlihat jadi hati-hati (hal-hal kecil berbau keamanan seperti ini diperhatikan oleh varian unix, kalo windows?). Tekan enter dan snivelus bisa bekerja sebagai root dengan tanda #, misalnya melakukan echo seperti ini.
[![](/assets/1.jpg)](http://pikopages.files.wordpress.com/2008/11/1.jpg)
 
Okeh, kita mulai.
Dalam Linux, komunikasi antar user terbagi menjadi dua, yaitu komunikasi satu arah yang sifatnya tak berbalas semisal pengumuman. Bila yang diberi pengumuman ingin merespon, maka ia membalas dalam konteks lain, bukan dalam komunikasi satu arah. Contoh komunikasi ini dalam perintah linux antara lain motd (message of the day), wall (warning all), dan write. Yang kedua adalah komunikasi dua arah yang sifatnya bisa saling berbalas, contohnya talk (semacam chatting), email, dan write (write termasuk keduanya).
Kita mulai dengan komunikasi satu arah : 
motd
motd adalah tool yang dibuat untuk keperluan kerja root, sebagai pemilik dan pengawas sistem. Pesan motd disampaikan secara otomatis setiap seorang user login ke dalam sistem. Biasanya isi pesan adalah bawaan distro. Root bisa mengganti isi pesan dengan mengedit file /etc/motd dengan vi. Contoh di bawah ini memperlihatkan user root sedang melihat-lihat isi file /etc/motd, contoh diperlihatkan dalam varian unix freeBSD (BerkeleySystemDistribution atau BSD sama saja dengan Linux karena Linux secara tidak langsung adalah sistem yang dikloning Linus dari Unix). Lihat file motd dengan perintah cat.
[![](/assets/2.jpg)](http://pikopages.files.wordpress.com/2008/11/2.jpg)
 
wall
wall berarti warning to all, semacam memberi pengumuman. Wall mengambil pesan dari sebuah file text. Diketik wall namafiletext. 
root# wall pengumuman.txt
Bila tidak ada file text, pesan yang disampaikan adalah yang kita ketik setelah memasukkan perintah wall sampai kita menekan ctrl+d yang berarti berhenti.
[![](/assets/31.jpg)](http://pikopages.files.wordpress.com/2008/11/31.jpg)
 
Biasanya dalam penggunaannya, wall disampaikan ketika sistem akan dimatikan oleh root. User tidak punya kesempatan untuk logout karena akan logout dengan sendirinya.
Dalam pesan tadi, akan disampaikan ke semua user :
 
Broadcast Message form root
 (dev/ttyp1) at 12:22 …
hello. maaf mengganggu, snivel sedang mencoba perintah wall
 
Bila kamu user biasa yang sedang login dan pesan belum juga disampaikan, tekan ctrl+l yang berarti refresh dan pesan akan muncul.
 
write
Kita akan membahas write sebagai komunikasi satu dan dua arah. Untuk menggunakannya, write diketik :
write namapengguna [nomor terminal]
Nomor terminal tidak harus ditulis, kecuali jika user yang dituju sedang login lebih dari satu terminal. Dapatkan info terminal dengan mengetikkan perintah who.
[![](/assets/4.jpg)](http://pikopages.files.wordpress.com/2008/11/4.jpg)
 
Bila sudah dapat, jalankan perintah write
 
root# write dsl tty1
 hello. maaf mengganggu, root sedang mencoba perintah write.
 
User dsl akan menerima pesan :
 
dsl@box$ Message from root on tty2 at 12:24
 hello. maaf mengganggu, root sedang mencoba perintah write.
 
Satu hal yang perlu diingat dalam menggunakan write, option mesg pada kedua user harus dalam keadaan aktif. Ketik mesg y untuk mengaktifkan dan mesg n untuk mematikan. mesg n berarti user sedang tidak ingin menerima pesan dari user lain maka user lain tidak akan bisa memerintahkan write untuk user tersebut. mesg y akan membuka akses untuk saling berkirim pesan.
Untuk mode komunikasi dua arah, perintah write dilakukan secara berkesinambungan dan berbalas, jadi seperti semacam chatting yang agak aneh.
Yah, lanjut ke komunikasi dua arah.
 
talk
Ini adalah program chatting mode text ala linux. Sama seperti write, talk mengharuskan option mesg dalam keadaan aktif
 
#mesg y
#
 
Bedanya dengan write, talk dikhususkan untuk percakapan/chatting beneran, layar akan terbagi menjadi dua. Layar atas untuk user sendiri, dan layar bawah untuk lawan bicara. Pastikan lawan bicara sedang online/login dan status mesg –nya adalah y.
 
root@kopmutertua# talk snivelus
 
maka layar terbagi menjadi dua.
 
hello, snivelus. maaf mengganggu, root sedang mencoba perintah talk.
jangan macam-macam!. ntar namamu saya hapus dari sistem.
______________________________________________________
ada apa, root?
hello juga, root. kapan ya saya bisa dapat passwordmu?
ouch! sorry… ampun.
 
Untuk mengakhiri dan keluar dari percakapan, tekan ctrl+d.
Sekarang kita pindah ke komunikasi dua arah yang lain : 
 
e-mail
Bagaimana cara dapatkan email account di linux? Anehnya, kita tidak perlu yahoo mail atau gmail atau email provider lainnya. Dalam sistem kita sendiri, begitu nama kita didaftarkan, kita sudah punya email sendiri. Nama emailnya adalah [namakita@namahost](mailto:namakita@namahost). misal nama user snivelus dan hostname-nya adalah komputertua, maka nama emailnya menjadi [snivelus@komputertua](mailto:snivelus@komputertua) (snivelus at komputertua). Bagaimana cara login ke email account kita? Oh mudah. Ternyata begitu kita login sebagai user di sistem, kita juga login untuk email account kita. Itulah hebatnya linux. Dan program untuk email? Ada banyak, mutt adalah salah satu yang terpopuler dan kita akan menggunakan mutt sebagai contoh.
snivelus@knoppix$ mutt
Maka kita akan dapatkan layar kerja mutt. 
[![](/assets/5.jpg)](http://pikopages.files.wordpress.com/2008/11/5.jpg)
 
Kita coba kirim email ke user lain : padfoot. Hostname dalam contoh ini adalah virtualmachine
Tekan m untuk mulai mengirim email maka tampilan sedikit berubah di paling bawah. Masukkan alamat email si padfoot, yaitu nama padfoot + @ + hostname.
[![](/assets/6.jpg)](http://pikopages.files.wordpress.com/2008/11/6.jpg)
 
Masukkan subject email, misalnya ‘hello’.
[![](/assets/8.jpg)](http://pikopages.files.wordpress.com/2008/11/8.jpg)
 
Tampilan berubah, menjadi seperti editor vi yang legendaris. Tulis pesan emailnya.
[![](/assets/9.jpg)](http://pikopages.files.wordpress.com/2008/11/9.jpg)
 
Setelah selesai, tekan tombol Esc kemudian :wq. Dalam editor vi, :wq berarti simpan dan keluar.
[![](/assets/10.jpg)](http://pikopages.files.wordpress.com/2008/11/10.jpg)

Tampilan berubah lagi. Tekan Y untuk mengirim email tersebut. KIRIIIIIMMM…!!! 
 
Tulisan Mail sent menunjukkan email sudah dikirim ke si padfoot.
[![](/assets/11.jpg)](http://pikopages.files.wordpress.com/2008/11/11.jpg)
Mari kita lihat bagaiman si padfoot menerima email dari snivelus.
padfoot@virtualmachine$ mutt
[![](/assets/12.jpg)](http://pikopages.files.wordpress.com/2008/11/12.jpg)
Begitu menjalankan mutt, padfoot langsung menerima email yang dikirim si snivel. Yeah, pengiriman email berhasil! Joget pisang…joget pisang…
Demikianlah komunikasi antar user dalam Linux. Adakah yang seperti ini di windows? Snivel menyarankan anda untuk geleng-geleng kepala. So, jangan ragu gunakan linux. Format harddisk dan install linux sekarang. Kalo nggak bisa melepas windows, install dual OS aja, keren kan? Kalo ada yang salah dengan tutorial ini, mohon komplain, soalnya snivel nulisnya sambil tidur (kok bisa?). Oahmmm….
