---
layout: post
title: Ngeblog dengan Ghost di Heroku, Gratis!
date: 2014-10-30 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Halo,

Pada tulisan ini, saya "meng-Indonesia-kan" panduan yang tertulis di tautan berikut :

http://blog.johnny.io/how-to-get-ghost-running-on-heroku-for-free/

Tulisan ini akan memandu anda bagaimana membangun blog berbasis Ghost dan menumpangkannya di Heroku. Gratis!

####Apa itu Ghost?

Tidak seperti platform blogging pada umumnya, Ghost bukan berbasis PHP, melainkan Node.Js. Node.Js adalah platform untuk membangun aplikasi real time, asynchronous, event-driven, menggunakan bahasa Javascript dan *engine* Javascript v8 dari Google Chrome.

Ghost sangat keren, dirancang untuk ngeblog, tidak yang lain. Salah satu fitur unggulannya adalah menulis secara *live preview* dengan Markdown.

{<1>}![](https://images.plurk.com/6NLecTWVnD4BppGNKkPNHb.jpg)

####Dan apa pula itu Heroku?
Heroku adalah web hosting berbasis cloud. Setiap aplikasi yang dikembangkan di Heroku berjalan di atas satu atau lebih dyno. Dyno adalah sebutan Heroku untuk unit virtual yang mem-*bekingi* aplikasi, mirip dengan gear di Openshift. Sebuah dyno mempengaruhi banyak hal, baik itu CPU, memory, maupun trafik. Akun gratis di Heroku mengizinkan penggunaan 1 dyno untuk setiap aplikasi.

####Kebutuhan

Di praktik ini saya menggunakan Ubuntu 14.04. Karena perintah-perintah node pada umumnya sama meski beda sistem operasi, silakan menyesuaikan.

Anda perlu hal-hal berikut ini :

* Akun Heroku
* Heroku Toolbelt
* NodeJs dan Npm
* Git
* Versi terakhir dari Ghost

Minimal, anda memiliki pengetahuan dasar mengenai git.

> ####Disklaimer

> Sebelum anda melanjutkan, anda perlu tahu kekurangan dari cara ini :

> * Akun gratis di Heroku hanya menyediakan 1 dyno. 1 dyno tidak cukup kuat untuk menahan trafik yang terlalu tinggi. Jika nantinya blog anda terlalu popluer dan butuh trafik lebih, pertimbangkan membeli beberapa dyno lagi.
* Heroku hanya menerima tumpangan berkas yang bersifat statis, yaitu kode anda dan berkas-berkas statis lainnya. Selain itu bersifat sementara (temporary). Jika ingin mengunggah gambar, unggahlah di tempat lain seperti imgur (tapi ingat, imgur diblok Kominfo), atau lainnya, kemudian tinggal menautkan URL gambar.

####Ghost di komputer lokal

Ada dua cara mengunduh Ghost : melalui Npm atau mengunduh langsung. Jika melalui Npm, ghost akan terpasang di ./node-modules/ghost/

`$ npm instal ghost`

atau

`$ wget https://ghost.org/zip/ghost-0.5.3.zip`

Kemudian

`$ cd ghost/
$ npm install --production`

Jalankan ghost :

`$ npm start`

Sampai di sini, anda dapat mengecek blog baru anda di peramban dengan alamat localhost:2368.

####Menumpangkan Ghost di Heroku

Masih di direktori ghost, anda perlu membuat sebuah berkas yang akan menjelaskan ke Heroku, lingkungan seperti apa yang anda butuhkan. Berkas ini dinamai Procfile.

`$ touch Procfile`

Karena Ghost membutuhkan lingkungan Node.Js, baris pertamanya isikan :

`web: NODE_ENV=production node index.js  `


Transmisi data dari komputer lokal ke Heroku menggunakan Git. Mari buat repository git anda untuk ghost.

`$ git init
$ git add --all
$ git commit -m "first commit"
`

Silakan login ke Heroku dengan perkakas Heroku Toolbelts.

`$ heroku login`

Anda akan dimintai akun email dan password Heroku. Setelah berhasil login, namai apps anda di Heroku.

`$ heroku create namanda-ghost`

Kemudian anda perlu menyunting berkas config.js, pada bagian

`production : {...`

Ada 3 parameter yang perlu diperhatikan :

* url : isikan dengan url herokuapp.com anda
* host : '0.0.0.0'
* port : process.env.PORT

Lihat contoh potongan kode di bawah ini.

    production: {
            url: 'https://namaanda-ghost.herokuapp.com',
        mail: {},
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },

        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: process.env.PORT
        }
    },



Kemudian unggah kode anda :

`$ git push heroku master`

Sampai di sini, anda dapat mengecek blog ghost anda yang sudah mengudara di internet dengan alamat namaanda-ghost.herokuapp.com

####Menggunakan PostgreSQL sebagai basis data
Secara bawaan, Ghost menggunakan SQLite sebagai basis data. Dan seperti yang sudah dijelaskan sebelumnya, tumpangan di Heroku hanya menerima berkas yang sifatnya statis. Jadi, bagaimanapun data diinput / modifikasi, nanti tetap balik seperti semula. Kita harus memindahkan basis datanya ke luar.

Heroku menyediakan PostgreSQL untuk basis datanya, gratis. Mari manfaatkan.

Masih di direktori yang sama,

`$ heroku addons:add heroku-postgresql:dev`

Anda akan mendapatkan keluaran semacam :

`Attached as HEROKU_POSTGRESQL_XXX_URL`

Catat string XXX karena akan digunakan di perintah selanjutnya,

`$ heroku pg:promote HEROKU_POSTGRESQL_XXX`

Sekarang kita perlu meminta detail basis data dari Heroku untuk disisipkan ke config.js.

`$ heroku config`

Outputnya seperti di bawah ini (hanya contoh) :

HEROKU_POSTGRESQL_VIOLET_URL: postgres://dbmxyhuxgh:Nqf20t9tDDrstfVdbupA1araNw@ec2-54-83-204-78.compute-1.amazonaws.com:5432/dclkggan2qs8c8

Dari informasti tersebut, berikut keterangannya :

* user :dbmxyhuxgh
* password : Nqf20t9tDDrstfVdbupA1araNw
* host : ec2-54-83-204-78.compute-1.amazonaws.com
* port : 5432
* database : dclkggan2qs8c8

Sunting berkas config.js dan ganti bagian database di production menjadi seperti berikut :

        database: {
            client: 'postgres',
            connection: {
                host     : 'host',
                user     : 'user',
                password : 'passwd',
                database : 'database',
                charset  : 'utf8'
            }
        },

Isikan host, user, passwd, dan database dengan informasi yang diperoleh sebelumnya.

Sekarang kita perlu menyunting berkas lain, package.json, untuk menambahkan dependensi ke postgress. Tambahkan pg persis di bawah mysql (versi saat tulisan ini dipublish adalah 3.6.2). Jangan lupa tanda koma di akhir baris "mysql":"... .

    "validator": "3.4.0",
    "xml": "0.0.12",
    "mysql": "2.1.1",
    "pg": "3.6.2"

Simpan kode anda. Kemudian unggah.

`$ git add --all
$ git commit -m "change db to postgres"
$ git push heroku master`

Cek lagi blog anda yang sudah kembali mengudara dengan basis data postgres. Cobalah menulis sesuatu. :)

{<2>}![](https://images.plurk.com/3J0bpg3yVTSJwjIHrNoddc.jpg)

#####Kalau ada galat?

Jika ada galat seperti di bawah ini :

{<3>}![](https://images.plurk.com/3mRqUKVdA0blhcD5Wxnkoe.jpg)

Anda dapat mengecek log-nya dengan perintah,

`$ heroku logs`
