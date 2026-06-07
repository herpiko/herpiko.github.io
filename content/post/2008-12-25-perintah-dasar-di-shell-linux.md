---
draft: true
title: "Perintah Dasar di Shell Linux"
date: 2008-12-25 12:09:05Z
categories:
  - linux-opensource
---
Untuk generasi sekarang (kebanyakan), menggunakan Windows tidak harus bisa menggunakan DOS (Disk Operating System, bukan Denial of Service), yang hampir ditinggalkan. Kesan orang tentang : 'Wah, kuno', 'Susah', 'Apaan tuh?'. Kita memang tidak perlu mempelajari DOS kecuali bagi advanced user. Ilmu itu kan bebas.**
Bagaimana dengan Linux. Linux ada DOS-nya nggak? Ada dong, lingkungan prompt di Linux namanya shell. Dan satu hal yang perlu diingat, kebanyakan kasus, menggunakan Linux adalah mutlak menguasai perintah-perintah shell. Kalau Linux anda diinstall di PC (bukan server) maka anda sendirilah root atau administratornya. Mutlak bagi administrator Linux untuk mengenal perintah dasar Shell. Karena kalau systemnya bermasalah, administrator (anda sendiri) harus bertanggung jawab membereskan. Di sini letak keasyikannya, kita akan meninggalkan GUI (general user interface) untuk sementara waktu. Diasumsikan anda sudah menginstal Linux distro apa saja yang sekiranya terinstall paket-paket yang standar. Saya pake Blankon 4 Meuligo sebagai contoh, sebuah distro Linux yang dikembangkan anak negeri (bangga dong!).

Shell dalam Linux ada banyak jenisnya tapi yang paling populer dan sering dijadikan default shell dalam banyak distro adalah Bash (bourne again shell). Jadi, di tutorial ini kita pake Bash. Tinggalkan sepenuhnya mode X anda. Caranya restart lalu edit (kalo pake GRUB) option GRUB, tambahin single, maka kita masuk ke root, masukan password bila diminta. Atau su root, masukin password, kemudian berikan perintah init 1 atau telinit 1. Yah...jadi seperti DOS deh. Atau kalau males meninggalkan GUI, pake konsole atau terminal (cari aja yang iconnya gambar monitor tok).

Cara memberikan perintah dalam Shell

$ command <option> [argumen] <enter>

$ maksudnya menunjukan status user. Kalo anda dalam posisi root, tandanya #.

command diganti dengan nama perintah. Option ya option, biasanya diawali awalan -. Argumen diisi parameter yang akan diproses. Apa bila nama parameter ada spasinya tambahkan kutip satu (') di awal dan akhir parameter.

<enter> maksudnya tekan enter. Jalan deh tu perintah.

*System***

**who : mencari tahu siapa saja yang login**

**anda@localhost:/home/anda$who

root    tty0

anda    tty1

whoami : mencari tahu dengan account siapa anda login**

**anda@localhost:/home/anda$whoami

anda

hostname : melihat nama hostname**

**anda@localhost:/home/anda$hostname

localhost

passwd : mengganti password**

**anda@localhost:/home/anda$passwd

(current) password :

enter new UNIX password :

retype new UNIX pasword :

password succesfully canged

anda@localhost:/home/anda$

Anda tidak akan melihat karakter yang anda ketik, ini salah satu ciri keamanan linux. Jadi hati-hati salah ketik.

su : mengganti user****
Misal anda login sebagai anda, ingin menggunakan root.

anda@localhost:/home/anda$su root

atau

anda@localhost:/home/anda$su

Masukkan password bila diminta. Ini bukti bahwa linux adalah komputer multiuser.

sudo : melakukan perintah atas kuasa root.**

**anda@localhost:/home/anda$sudo rm /root/file_punya_root.txt

Masukkan password root ketika diminta, tekan enter dan perintah akan dieksekusi.

top : melihat proses**

**anda@localhost:/home/anda$top

Lihat aja hasilnya sendiri.

kill : membunuh proses**

**anda@localhost:/home/anda$kill nomorPID

Dapatkan nomor PID dari perintah top.

date : informasi waktu**

**anda@localhost:/home/anda$date

Thu Dec 25 17:16:47 CIT 2008

! : history perintah shell**

**anda@localhost:/home/anda$!

ls

cd

who

ketik !5 jika ingin mengeksekusi perintah kelima sebelumnya dari sekarang.

alias : membuat alias****
Kita bisa mengindonesiakan perintah shell. Lihat contoh.

anda@localhost:/home/anda$alias hapus='rm'

anda@localhost:/home/anda$hapus puisiku.txt

Berikan alias saja untuk melihat daftar alias yang sudah ada. Gunakan unalias untuk menghilangkan alias

*

Pengelolaan Direktori dan File***

**pwd : melihat di direktori mana kita berada.** Kalau kita ada di /home/anda/ maka hasilnya

**$pwd

/home/anda

tapi biasanya tertulis di depan tanda $, misal

anda@localhost:/home/anda$

cd : mengganti direktori**

misal kita mau pindah ke direktori /etc

**anda@localhost:/home/anda$cd /etc

anda@localhost:/etc$

atau kalau direktori yang ingin dituju ada dalam direktori dimana kita berada,langsung saja tulis nama direktorinya, tanpa menulis path yang lengkap. Misal nama direktorinya

anda@localhost:/home/anda$cd pictures

anda@localhost:/home/anda/pictures$

Kalau kita ingin kembali ke direktori home kita sedang kita berada di direktori lain dan kita malas menulis path /home/anda, maka berikan perintah

anda@localhost:/media/sda3$cd ~

cd ~ artinya pindah ke direktori home kita sendiri. ~ ada dibawah tanda escape [esc].

mkdir : membuat direktori**

**anda@localhost:/home/anda$ls

documents/    pictures/    musics/

anda@localhost:/home/anda$mkdir coba

anda@localhost:/home/anda$ls

documents/    pictures/    musics/    /coba

yah, muncul tuh direktori buatan kita.

rmdir : menghapus direktori****
direktorinya harus kosong, kalau tidak tambahkan option -f (force) atau –ignore-fail-on-non-empty

anda@localhost:/home/anda$rmdir pictures

ls : melihat direktori dimana kita berada**

**anda@localhost:/home/anda$ls

document/        pictures/        musics/

peterpan.ogg        doraemon.png

nama yang berakhiran / berarti sebuah direktori. Di beberapa distro direktori biasanya ditulis tebal atau berwarna biru.

Option perintah ls :

-a berarti all, menampilkan semua file dan direktori, termasuk file dan direktori hidden (file dan direktori hidden biasanya diawali titik, misal .rahasia. Secara default tidak terlihat di shell. Ada banyak file hidden di bawah direktori home kita, coba saja telusuri)

-l berarti long, menampilkan isi direktori secara lengkap termasuk permission (hak akses), tanggal pembuatan, pemilik, dan lainnya

-s berarti size, menampilkan isi ditambah informasi ukurannya dalam kilobyte.

-R berarti recursive, menampilkan seluruh isi direktori berikut sub direktorinya.

-d berarti direktori. Menampilkan direktori saja.

cat : melihat isi file****
cat di sini bukan berarti kucing, tapi concatenate. File yang dimaksud di sini hanyalah file txt karena pada zaman purba, file txt merupakan format dokumen paling populer.

Misal anda punya sebuah puisi yang ditulis dalam puisiku.txt dan diletakkan di bawah direktori /home/anda. Kita coba lihat isinya.

anda@localhost:/home/anda$cat puisiku.txt

akulah binatang jalang

dari kumpulan yang terbuang

wah...lupa...

Kalau ingin kembali ke shell, tekan ctrl+d.

Perintah cat juga bisa digunakan untuk melihat dua file sekaligus dengan menggabungkannya. Misal anda punya file bernama passwordroot.txt

anda@localhost:/home/anda$cat puisiku.txt passwordroot.txt

atau menggabungkannya

anda@localhost:/home/anda$cat puisiku.txt passwordroot.txt > gabungan.txt

more : melihat isi file****
less : melihat isi file****
Keduanya sama saja hanya more lebih interaktif karena bisa menggeser halaman ke atas sementara less tidak. Coba sendiri.

touch : membuat file kosong****
format file disini adalah txt. Tak mesti memberi ekstensi .txt karena system akan mengenalnya dengan otomatis

anda@localhost:/home/anda$touch namafile

Bisa juga mendefinisikan tanggal pembuatan file, tambahkan option -t 200805231102 sebelum nama file. Formatnya yyyymmddhhmm (year-month-day-hour-minute).

cp : menyalin file****
cp berarti copy. Caranya :

anda@localhost:/home/anda$cp fileasli filesalinan

mv :mengganti nama file atau direktori**

**anda@localhost:/home/anda$mv puisiku.txt puisi_jelek.txt

mv :memindahkan file atau direktori**

**anda@localhost:/home/anda$mv puisiku.txt  /home/anda/document/puisiku.txt

rm : menghapus file**

**anda@localhost:/home/anda$rm puisiku.txt

remove puisiku.txt? <tekan y>

anda@localhost:/home/anda$

find : mencari file**

anda@localhost:/home/anda$find /home/anda/ -name puisiku.txt

/home/anda/ maksudnya area pencarian dilakukan di bawah direktori tersebut

-name maksudnya dicari berdasarkan nama puisiku.txt.

Cukup deh sampai di sini. Sebenarnya perintahnya banyak sekali tapi cuma segini aja yang saya inget.  Kalau ingin mengetahui lebih lanjut tentang sebuah perintah, ketik 'namaperintah –help'. Kalau ada yang salah, mohon komplain. Semoga berguna.
