---
layout: post
title: Membangun APT-Web v2
date: 2015-10-30 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

##### Apa ini?

APT-Web adalah aplikasi web yang membantu menyediakan tautan unduh untuk paket-paket aplikasi berbasis *.deb dari distribusi yang telah ditentukan. APT-Web sangat berguna untuk pengguna yang mengalami kesulitan akses internet namun memerlukan paket-paket tertentu untuk dipasang di komputernya.

Contoh kasusnya seperti ini :

Ary tinggal di desa yang tidak memiliki akses internet dari Telkom. Akses internet via GSM (3G, HSDPA) juga tidak bisa diandalkan karena tempat tinggal Ary dikelilingi oleh pohon kelapa yang tinggi. Ary memiliki sebuah PC yang terpasang sistem operasi Ubuntu 15.10. Suatu hari Ary ingin menggunakan aplikasi Krita namun tidak dapat memasang langsung dari lumbung Ubuntu karena terkendala akses Internet.

Karena suatu kebutuhan, Ary pergi ke kota dan menyempatkan diri mampir ke warung internet. Di sana Ary membuka situs APT-Web, mengetik ``krita`` di kolom pencarian dan APT-Web akan memberikan Ary tautan unduh paket *deb. untuk aplikasi Krita, lengkap dengan paket ketergantungannya.

######Catatan

Berbeda dengan versi sebelumnya, Pak Fajran telah menulis ulang APT-Web versi 2 dengan Go dan Angular. Versi pertama (menggunakan PHP) bisa dilirik di https://github.com/fajran/apt-web/tree/v1.

##### Kebutuhan

- Mesin dengan sistem operasi yang kompatibel dengan Debian dan bisa menjalankan ``apt-get``.
- ``go``
- ``git``
- Berkas ``status`` dari sistem operasi *fresh install* yang menjadi target. Misal, targetnya adalah Ubuntu 15.10 32 bit dan 64 bit, maka sistem operasi target tersebut perlu dipasang terlebih dahulu di suatu tempat, kemudian berkas ``status``-nya diambil dari ``/var/lib/dpkg/status``.

##### Bangun

- Targetnya, kita akan membangun APT-Web dengan target sistem operasi Ubuntu 15.10 32 bit dan 64 bit.
- Asumsinya sistem menggunakan Debian dan sudah terpasang ``go`` dan ``git``. Jika belum, dapat dipasang dari lumbung resmi Debian.
- Kloning lumbung APT-Web,
<pre>
$ git clone https://github.com/fajran/apt-web.git
</pre>
- Masuk ke direktori APT-Web,
<pre>
$ cd apt-web
</pre>
- Sunting berkas ``config.json``.

<pre>
{
  "apt-get": "/usr/bin/apt-get",
  "apt-cache": "/usr/bin/apt-cache",

  "dist-dir": "virtuals/",
  "dist-list": [
    {"name": "Ubuntu 14.04 Desktop amd64",
     "path": "ubuntu-14.04-desktop-amd64",
     "arch": "amd64"}
  ],

  "repo-base-url": "http://archive.ubuntu.com/ubuntu",
  "repo-list": [
    {"name": "Kambing UI",
     "url": "http://kambing.ui.ac.id/ubuntu"}
  ]
}
</pre>

Berkas ini perlu disunting, yaitu bagian ``dist-list`` diganti ke Ubuntu 15.10, tambah arsitektur 32 bit, dan tambahkan lumbung milik UGM. Sunting menjadi seperti berikut :

<pre>
{
  "apt-get": "/usr/bin/apt-get",
  "apt-cache": "/usr/bin/apt-cache",

  "dist-dir": "virtuals/",
  "dist-list": [
    {"name": "Ubuntu 15.10 Desktop amd64",
     "path": "ubuntu-15.10-desktop-amd64",
     "arch": "amd64"},
    {"name": "Ubuntu 15.10 Desktop i386",
     "path": "ubuntu-15.10-desktop-i386",
     "arch": "i386"},
  ],

  "repo-base-url": "http://archive.ubuntu.com/ubuntu",
  "repo-list": [
    {"name": "Kambing UI",
     "url": "http://kambing.ui.ac.id/ubuntu"},
    {"name": "UGM",
     "url": "http://repo.ugm.ac.id/ubuntu"}
  ]
}
</pre>
- Masuk ke direktori ``virtuals``,
<pre>
$ cd virtuals
</pre>
- Salin direktori ``base`` ke direktori baru dengan nama sesuai dengan *path* yang kita sunting di atas, yaitu ``ubuntu-15.10-desktop-i386`` dan ``ubuntu-15.10-desktop-amd64``.
<pre>
$ cp -vR base ubuntu-15.10-desktop-i386
$ cp -vR base ubuntu-15.10-desktop-amd64
</pre>
- Kita coba mengatur untuk 64 bit terlebih dahulu.

<pre>
$ cd ubuntu-15.10-desktop-amd64
</pre>
- Sunting berkas ``apt.conf``, ganti arsitekturnya, sehingga berkas konfigurasi tersebut menjadi seperti :
<pre>
APT {
        Get {
                Download-Only   "true";
        };
        Architecture "amd64";
};

Dir {
        State "./dir/apt" {
                Status  "./status";
        };
        Cache "./dir/cache" {
                Archives        "./dir/archives";
        };
        Etc "./dir/etc" {
                SourceList      "./sources.list";
        };
};
</pre>
- Kemudian sunting berkas ``sources.list``, ganti isinya dengan :
<pre>
deb http://archive.ubuntu.com/ubuntu/ willy main restricted universe multiverse
</pre>
- Salin berkas ``status`` yang sebelumnya sudah disiapkan ke direktori sekarang. Timpa saja berkas yang sudah ada.
- Perbarui katalog apt dengan menggunakan konfigurasi ``apt.conf``,
<pre>
$ apt-get -c apt.conf update
</pre>
- Kita telah menyunting berkas ``apt.conf``, ``sources.list``, dan mengganti berkas ``status``, kemudian memperbarui katalog apt. Ulangi langkah ini untuk 32 bit di direktori ``ubuntu-15.10-desktop-amd64``


##### Jalankan

<pre>$ go run src/aptweb/cmd/apt-web/main.go</pre>

Dengan konfigurasi bawaan, APT-Web akan berjalan di *port* 8080

<img src="https://images.plurk.com/10IHMLNtNzKLILfqsrAzkg.jpg">
