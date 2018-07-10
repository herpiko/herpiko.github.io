---
layout: post
title: Menyelamatkan Aku
date: 2017-03-26 00:01:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Alkisah (tapi ini nyata lho), harddisk [rani](http://rani.blankonlinux.or.id/) nyaris tewas dan badsector-nya sudah lumayan. Kondisi ini berimbas ke beberapa layanan BlankOn, salah satu dan yang terpenting adalah [Aku](https://aku.blankonlinux.or.id/), <del>bukan kamuuu</del>. Aku adalah layanan single sign on (SSO) untuk layanan-layanan BlankOn yang lain. Contohnya, dengan satu akun, kita bisa masuk ke panduan.boi maupun dev.boi. Sumber kode Aku dapat dikunjungi [di sini](https://github.com/blankon/aku).

<img src="/assets/menyelamatkan-aku-0.png">

Saweran harddisk dibuka, Tim Infrastruktur bergegas mengamankan data-data, Menejer Rilis berkelana ke timur membawa harddisk baru untuk rani.

Tim riset kebagian berkas sqlite3 dari aku.boi yang jika dicek integritasnya dapat pesan galat,

```
$ sqlite3 aku.db "PRAGMA integrity_check"
Error: database disk image is malformed
```

Lumayan bikin berdebar karena irgsh, dev.boi dan panduan.boi (mungkin ada yang lain lagi) bergantung ke aku untuk otentikasi pengguna.

Basis data ini masih bisa diselamatkan, dengan men-dump apa saja yang masih bisa dibaca.

```
$ sqlite3 aku.db
sqlite> .mode insert
sqlite> .output dump.sql 
sqlite> .dump
sqlite> .exit
```

Kita dapat dump.sql-nya, pada kasus ini, masih berisi data pengguna sebelum kesehatan harddisk rani disadari oleh para pengembang. Intip-intip, ada nama-nama pendekar lama di sini :)

<img src="/assets/menyelamatkan-aku-1.jpeg">

Sekarang [aku.boi](https://aku.blankonlinux.or.id/) sudah dapat diakses kembali. Jika Anda tidak berhasil login dengan akun Anda, maka bisa diambil kesimpulan bahwa Anda mendaftar ke aku.boi setelah harddisk rani mulai tidak sehat. Silakan mendaftar ulang kembali.

Referensi :

- [https://www.sqlite.org/pragma.html#pragma_integrity_check](https://www.sqlite.org/pragma.html#pragma_integrity_check)
- [https://sqlite.org/cli.html](https://sqlite.org/cli.html)
- [https://www.guru99.com/sqlite-tutorial.html](https://www.guru99.com/sqlite-tutorial.html)

