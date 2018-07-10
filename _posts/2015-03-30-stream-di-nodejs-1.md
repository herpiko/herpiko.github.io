---
layout: post
title: Stream di NodeJS (1)
date: 2015-03-30 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---


Saya baru beberapa bulan bermain-main dengan NodeJS, namun baru belakangan dapat pencerahan mengenai apa dan bagaimana sih stream itu. Jadi mari saya tulis di sini supaya :

- Saya lupa dan kemudian cepat ingat
- Yang belum paham jadi cepat paham


Misal kita punya dua ember : ember A dan ember B. Ember A posisinya lebih tinggi satu meter dari ember B, dan berjarak satu meter juga.

<pre>
Ilustrasi

| A |
|___|



       | B |
       |___|
</pre>
Ember A memiliki isi seliter air. Ember B kosong. Jika kita ingin ember B juga berisi setengah liter air, maka

``var b = a;``

Sampai di sini, urusan selesai.

Etapi bagaimana misalnya jika Ember A itu sifatnya berkelanjutan, airnya dapat bertambah sewaktu-waktu dan kita ingin ember B langsung menerima airnya juga?

####Stream
Mari kita coba pakai selang air.
<pre>
Ilustrasi

| A |
|___|
	 \
      \
       \
       | B |
       |___|
</pre>


Ember A disebut *source* atau *readable stream*. Disebut *readable* karena isinya (air) dapat diambil (dalam konteks data, dapat dibaca). Ember B disebut *destination* atau *writable stream*. Disebut *writable* karena wadahnya dapat diisi (dalam konteks data, dapat ditulisi. Selangnya adalah perumpamaan dari ``pipe``.

Anggap saja segelas air itu seperti sekelompok data. Jika ember A diisi seliter air, airnya akan mengalir dan mengisi ember B.

``readableStreamA.pipe(writableStreamB);``

Selain *readable* dan *writable*, sebuah stream juga bisa bersifat keduanya, atau *duplex*. Misal kita punya ember C, yang sifatnya *duplex*, dapat ditulisi sekaligus dibaca. Kita taruh ember C di tengah-tengah kedua ember tadi.

<pre>
Ilustrasi

| A |
|___|
	 \
      \
       \
       | C |
       |___|
            \
             \
              \
               | B |
               |___|
</pre>

Air yang masuk ke ember A mengalir terus sampai ember B.

``readableStreamA.pipe(duplexC).pipe(writableStreamB);``

Karena saya sedang mengurangi begadang, ya sampai di sini dulu. Mudahan nanti bisa menulis kelanjutannya, yaitu mengenai *event* dalam stream NodeJS.




