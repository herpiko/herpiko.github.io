---
layout: post
title: Yang Saya Oprek dalam Dua Bulan Ini
date: 2014-12-26 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---
 bulan sejak tulisan terakhir, saya menyia-nyiakan blog ini rupanya. Nah, mari saya tulis sesuatu.

Mestinya, setelah ngoprek, saya menulis/mendokumentasikan. Tapi ini benar-benar sulit dilakukan. Saya akan menulis sepintas-sepinas apa yang saya oprek selama dua bulan ini :

#####Javascript

Setelah dulu nyaman di PHP, kemudian pindah ke Python karena ~~diolok-olok~~ dibujuk Deni Marswandi, sekarang sibuk main js.

Berbeda dengan kebanyakan bahasa pemograman, Js itu async, jika ada 3 baris kode yang sejajar, maka ketiga-tiganya dijalankan bersamaan. Tidak ada yang menjamin baris pertama selesai terlebih dahulu. Ini benar-benar memusingkan sekaligus menantang.

Pada NodeJs, cara bergantung pada kelas lain : `var foo = require("bar");`

NodeJs juga punya manajer paket yang namanya `npm`, sama kerennya dengan `pip` atau `compose`.

##### Callback dan callbackhell

<pre>
var foo = function(callback){
	console.log("Halo!");
    var x = "Selamat pagi!";
    callback(x)
});
var bar = function(y){
	console.log(y);
});
foo(bar);
</pre>

Aneh, ya? Hasilnya,

<pre>
Halo!
Selamat pagi!
</pre>

Sebelumnya saat menyelami JQuery, ini terlihat biasa-biasa saja. Tapi saat dipakai di belakang (backend), rasanya aneh sekali!

Kalau pengen sync, kadang-kadang jadi tidak terkendali,

<pre>
foo(function(){
	bar(function(){
    	foo1(function(){
        	bar2(function(){
            	foo3(function(){
                	bar3(functino(){
                    	console.log("stop!");
                    });
                });
            });
        });
    });
});
</pre>

Inilah yang disebut callbackhell. Kodenya jadi jorok sekali. :P

Masalah ini bisa ditangani misalnya oleh promises.

#####AngularJs
Saat masih main JQuery, saya malas sekali tengok-tengok AngularJs. Apaan sih? Katanya punya cara berbeda dalam menangani DOM. Dengar saja sudah bikin mual. Tapi sebenarnya ini keren banget.

Tombol submit hanya akan muncul apa bila input teks diisi.

<pre>
<input type="text" ng-model="name">
<input type="submit" ng-show="name">
</pre>
UPDATE : Karena ghost (blog) saya belum bisa tangani syntax html di dalam markdown, jadinya terlihat begitu deh. Pokoknya seperti ini http://tempel.blankon.in/679235.txt

Sederhana sekali bukan? Ketimbang pakai JQuery jadi berapa baris? Dan kerennya lagi, AngularJs memungkinkan kita bikin aplikasi komplit dengan MVC pattern hanya dalam 1 laman html!

#####Git dan Github
Dulu siklus saya cuma `git add --all` dan `git commit -m "foo"` doang. Tapi sebenarnya git jauh lebih berguna dari itu saja.

######Mencabangkan
`git checkout -b cabangbaru`

######Dorong cabang baru ke github
`git push -u origin cabangbaru`

######Perbarui git lokal dengan upstream
Tentukan upstream
`git remote add upstream alamatgitupstream`

Gabungkan dengan lokal
`git checkout master`
`git merge upstream/master`

Dorong ke github sendiri
`github push origin master`

Menggabungkan commit sekaligus rebase
`github rebase -i cabangrebase`

`pick` untuk ditetapkan sebagai commit, ganti dengan `squash` bila ingin dilebur ke commi di atasnya.

PR adalah istilah untuk pull request, yang artinya kita mendorong perubahan kode kita ke upstream. Ini adalah bentuk kontribusi.

#####Test Unit

Dulu saya belum kenal yang namanya test-driven. Di framework populer mana pun sebenarnya ada. Dengan unit test, kita bisa menguji API yang kita bikin tanpa harus menguji coba UI-nya. Kan capek kalau musti buka browesr, klik-klak-klik, ngisi form, terus ngulang lagi dengan nilai yang berbeda.

Dengan unit test, semua ini di otomatisasi.

#####MongoDB
Ini yang paling aneh dan bikin geli. Database NoSQL! Database tapi tidak pakai tabel. Bagi yang belum pernah dengar dan kuat main di SQL mungkin rada "Hah?".

Databasenya berbasis objek, formatnya macam JSON.
<pre>
{
	Nama : "Herpiko",
    Kelas : "III",
    Sekolah : "Sekolah Dasar"
    Nilai : {
    	Matematika : "0",
        Bahasa Indonesia : "0",
        Main kelereng : "9"
    }
}
</pre>

Aneh sekali, bukan? Tapi ini cocok sekali dengan Js, keduanya dapat dipertemukan dengan mesra.

#####Gearman
Gearman sebenarnya anagram dari Manager, berfungsi sebagai server queue. API Gearman bisa dipakai di banyak bahasa, jadi fleksibel banget. Di depan bisa pakai bahasa X, workernya di belakang bisa pakai bahasa Y.

#####Apa lagi ya
Entahlah.

Satu hal yang paling penting yang saya pelajari baru-baru ini adalah cara kita menangani hal baru. Bolehlah kita terengah-engah mengejar teknologi baru yang bermunculan bak jamur di musim penghujan, merasa tidak kuat dan putus asa, tapi jangan berhenti. Jangan berhenti sama sekali. Kunyah saja. Tidak ada yang sia-sia di sini :D

Nanti kalau ada waktu luang saya mau coba mainan Ruby n Rails.
