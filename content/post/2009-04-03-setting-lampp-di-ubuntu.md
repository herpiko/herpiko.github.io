---
draft: true
title: "Setting LAMPP di Ubuntu"
date: 2009-04-03 17:27:43Z
categories:
  - linux-opensource
tags:
  - joomla
  - lampp
  - linux-opensource
  - ubuntu
  - web
  - webserver
---
Waktu lagi ngerjain proyek bikin web sekolah (mudahan kelar), Windows ngadat berat, nggak bisa copy file dan buka gambar. Bikin kesel minta ampun. akhirnya saya libas partisi windows tanpa belas kasihan dan langsung di merge ke Ubuntu. bagaimana saya ngerjain web berbasis joomla di ubuntu? Saya sudah install php apache mysql dan tetek bengeknya, tetep nggak bisa. Lalu saya dikasih tahu sama ketua seumur hidup KPLI NTB, mas Amrinz, kalo tutorial webserver tu ada di situs yang dikelolanya, [linuxindo.web.id.](http://linuxindo.web.id) setelah ngenet berjam-jam buat donlot paketnya (maklum, fakir benwit. waa....), akhirnya bisa juga. Tutorial aslinya bahasa inggris, ini sudah saya terjemahin amburadul.

Donlot xampp di http://apachefriends.org. ekstrak di /opt/lampp atau di /root

sudo tar xvzf lampp-xxx.tar.gz /opt

Lakukan di direktori home dengan permission root

mkdir webserver

tar xvzf lampp-xxx.tar.gz

Dan sebagai root buat simbolik link dan letakkan di /opt

ls -s /home/amrinz/website/lampp /opt/lampp

Tetapi menurut saya lebih baik diinstall langsung ke /opt, karena bila memakai link, kadang mysqlnya tidak jalan.

Sekarang kita sudah selesai install xampp

Dapatkan root lalu ketik /opt/lampp/lampp start

Coba di firefox, ketik di address barnya : localhost. kalo nggak bisa, mungkin mode work offline-nya masih aktif, ilangin centangnya di menu file.

Perintah LAMPP

untuk mengakses webserver, anda harus menjalankan secara manual. format perintah xampp/lampp sebagai berikut :

/opt/lampp/lampp <perintah>

contoh untuk menjalankan lampp

/opt/lampp/lampp start

dan untuk berhenti ketik

/opt/lampp/lampp stop

option lain :

startapache        only start apache2

startssl        only start ssl support

startsql        only start mysql

startftp        only start proftp

option pengganti start yang lain : stop,reload,restart,php5,php4,security,phpstatus,backup,panel

MEMBUAT VIRTUAL HOST

Virtual host membuat web kita punya url beneran seperti sudah dibeliin domain komersil, seperti www.smandamataram.com.

caranya edit /opt/lampp/etc/http.conf

Hanya menambah baris ini di baris terakhir

include /home/username/website/extra-httpd.conf

Dan sebagai user biasa, buka gedit dan edit baris ini

<VirtualHos>

ServerName www.smandamataram.com

DocumentRoot /home/padfoot/webserver/ www.smandamataram.com

<Directory /home/padfoot/webserver/ www.smandamataram.com>

AllowOverride All

Options All

</Directory>

</VirtualHost>

Simpan sebagai extra-httpd.conf sebagaimana didefinisikan di httpd.conf

Kita harus punya IP Address untuk ditulis di /etc/hosts file. hanya dengan menambah :

127.0.1.2 www.smandamataram.com

Di ubuntu, Anda bisa menggunakan menu network>system/administrations/network. ganti tabs ke host, klik add, masukkan IP dan servername

Langkah terakhir smandamataram.com folder dibawah /home/padfoot/webserver.

Sekarang Anda bisa menggunakan alamat virtual itu sebagaimana alamat beneran di internet.

Jika ingin menambah virtualhost, hanya mengulangi tiga langkah tadi, memasukan IP, servername, dan direktori webnya.

Selamat mencoba!
