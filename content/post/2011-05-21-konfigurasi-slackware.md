---
draft: true
title: "konfigurasi slackware"
date: 2011-05-21 18:27:01Z
categories:
  - linux-opensource
  - tong sampah
tags:
  - linux
  - samba
---
awal bulan kemarin saya memasang slackware. orang bilang masang slackware itu susah. ndak juga. yang susah itu kalau mau pasang paket dan berjibaku dengan dependensi, dan itu merupakan tantangan.

awalnya saya pikir juga begitu, pasang slackware ribet, mungkin mirip2 arch. ternyata tidak. kalau teliti baca, pastilah sukses. dan pada saat pasang tidak ada progress barnya, jadi kita tidak bisa kira2 kapan instalasinya selesai. tapi cepat kok. 15 menit kelar.

jadi, apa yang saya lakukan setelah slackware terpasang?

1. konfigurasi layar.

saya membuat konfigurasi xorg.conf dengan xorgsetup, dijalankan di CLI mode dan tidak ada server X yang jalan. (init3)

2. runlevel ke login grafis

ubah runlevel agar langsung masuk ke login grafis begitu booting. edit file /etc/inittab

pada baris d:3:initdefault:, ganti angka 3 ke 4.

3. user dan host

adduser, dan ganti nama darkstar. ganti di /etc/hosts

4. network

gunakan netconfig pada root mode.

5. konfigurasi samba.

ubah permission untuk eksekusi di /etc/rc.d/rc.samba

edit konfigurasi /etc/samba/smb.conf. saya menggunakan konfigurasi di bawah ini untuk membatasi akses ke sharing file dengan menggunakan user password dari smbpasswd. niatnya sih, supaya bisa nyimpen2 file (terutama film) sewaktu2 di server, mumpung hddnya kosong 200gb. gunakan smbpasswd untuk membuat password user yang bersangkutan.

[global]

workgroup = SLACKWARE_FILESERVER

server string = %h server (Samba, Slackware)

log file = /var/log/samba/%m.log

log level = 2

max log size = 0

security = user

encrypt passwords = yes

smb passwd file = /etc/samba/smbpasswd

dns proxy = no

client lanman auth = yes

lanman auth = yes

[pikofiles]

path = /home/piko/share

public = yes

guest ok = yes

browsable = yes

writable = yes

printable = no

create mask = 0777

force user = piko

create mode = 0664

directory mode = 0775

yah, selesai sudah. sampai di sini slackbox saya sudah siap pakai, tinggal dioprek sesuka hati. :)

oya saya lebih suka pakai xfce jadi tetek bengek kde tidak dibahas di sini.
