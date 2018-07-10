---
layout: post
title: Rekontruksi IRGSH (2)
date: 2017-05-07 00:01:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

# DRAFT

Tulisan kali ini mengupas tentang irgsh-web, salah satu dari 3 komponen utama IRGSH. Sebelum menuju kesana, mari kita petakan alur kerja pengembangan distribusi BlankOn secara keseluruhan. 

<img src="/assets/BlankOn-dev workflow.png">

1. (1) Infra menyiapkan repropro dan layanan repository. Reprepro sudah di-update ke Sid.
1. (2) Pemaket memasukkan paket ke IRGSH.
1. (3) Paket dibangun oleh IRGSH.
1. (4) Paket jadi dikirim ke ke irgsh-web/taskinit
1. (5) Paket jadi dikirim ke irgsh-repo.
1. (6) Paket jadi disuntik ke reprepro oleh irgsh-repo.
1. (7) Infra menjahit berkas ISO dan menyiapkan layanan untuk mengunduh ISO.
1. (8) Jaminan Kualitas menguji berkas ISO.

## Persiapan

Tulisan berseri ini dirancang untuk membangun ekosistem IRGSH di satu mesin dan telah dicoba di mesin dengan spesifikasi CPU 2 core, RAM 2GB, ruang penyimpanan 30GB dan sistem operasi Debian Jessie. Untuk mengupdate reprepro ke Sid (1), perlu ruang penyimpanan minimal 200GB. Kita akan coba bangun irgsh-web dulu. Reprepro akan dibuat saat membangun irgsh-repo, namun tidak disync ke Sid.

Pada mesin uji coba kita, akan ada 3 pengguna yang mewakili masing-masing komponen irgsh, yaitu `irgsh-web`, `irgsh-node` dan `irgsh-repo`.

## irgsh-web

### Membangun irgsh-web

1. Pasang paket-paket yang diperlukan
- `sudo apt-get update`
- `sudo apt-get install -y -qqq make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils sudo python python-pip python-dev python-debian dpkg-dev rabbitmq-server git-core nginx libpq-dev git vim net-tools postgresql`
1. Buat pengguna baru dengan nama pengguna `irgsh-web` kemudian masuk sebagai pengguna tersebut.
1. Siapkan Python 2.6.x dengan menggunakan `pyenv`
- `curl -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash`
- Tambahkan potongan kode ini di `~/.bashrc` :
```
export PATH="/home/irgsh-web/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```
- `source ~/.bashrc`
- `pyenv install 2.6.6`
1. `cd /home/irgsh-web`

1. Kloning repo `irgsh-web` dan `python-irgsh`
- `git clone git://github.com/BlankOn/python-irgsh.git`
- `git clone git://github.com/BlankOn/irgsh-web.git`
1. Buat symlink untuk `python-irgsh` :
- `cd irgsh-web`
- `ln -s ../python-irgsh/irgsh`
1. Bangun, `./build.sh`. Jika berhasil, di `./bin` akan ada berkas `django` yang siap digunakan untuk menjalankan `irgsh-web`.

### Mempersiapkan sertifikat

Sertifikat-sertifikat ini nantinya akan digunakan sebagai otentikasi antara taskinit dan pekerjanya.

#### Inisialisasi CA

Jika sudah ada CA (Certificate Authority), buat sertifikat baru untuk komponen irgsh-web. Jika belum ada, berikut cara menginisalisasi CA baru dan membuat sertifikat turunan.

1. Masuk ke `/home/irgsh-web/irgsh-web/certs/`
1. Inisialisasi CA, `./scripts/ca.pl -newcert`. Anda akan diminta passphrase dan beberapa informasi sertifikat.
1. Siapkan direktori untuk manajemen sertifikat, `./scripts/prepare.sh`

#### Membuat sertifikat turunan untuk irgsh-web

1. `./scripts/new-cert.sh irgsh-web`, Anda akan dimintai passphrase CA untuk menandatangani sertifikat baru tersebut
1. Sertifikat keluaran untuk irgsh-web terletak di `/home/irgsh-web/irgsh-web/certs/irgsh-web/`.

### Basis data


### Aku.boi


### Konfigurasi


