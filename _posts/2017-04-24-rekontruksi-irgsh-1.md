---
layout: post
title: Rekontruksi IRGSH (1)
date: 2017-04-24 00:01:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Sebelum memulai tulisan berseri ini, saya ingin mengucapkan terima kasih ke para pengembang BlankOn, terutama senior dan pensiunan, pak Aftian dan pak MHY. Tanpa mereka, kami tidak tahu IRGSH mau diapakan lagi. Terima kasih! Terima kasih juga untuk teman-teman pengembang generasi baru, terutama tim Infra, tim Pemaket dan tim Riset.

Kisah dimulai setelah Tambora rilis, dimana beberapa pengembang kunci memilih pensiun. Keputusan ini sangat penting karena terkait erat dengan regenerasi. Dan apa yang ditinggalkan untuk generasi penerus sangat menarik. Mesin-mesin, layanan-layanan yang perlu dipetakan ulang, dan lainnya. Namun yang paling menarik dan salah satu yang terpenting untuk kelangsungan distribusi BlankOn Linux adalah IRGSH.

Apa itu IRGSH? Dibangun oleh pak MDAMT, pak Fajran, pak Somat dan pengembang-pengembang lain, IRGSH adalah salah satu karya penting di komunitas BlankOn. IRGSH adalah perkakas yang membantu pengembang (khususnya tim pemaket) untuk meng-otomatisasi pembangunan paket-paket sampai masuk ke lumbung paket dan siap dikonsumsi. Jadi pemaket tinggal menyetor sumber kode dari paket tertentu, IRGSH akan mengolah dan membangunnya untuk arsitektur-arsitektur yang ditentukan. Jika sukses, paketnya akan tersedia di lumbung paket. IRGSH terdiri dari 3 komponen utama :

- `irgsh-web` ([github.com/blankon/irgsh-web](github.com/blankon/irgsh-web))<br>Antar muka web yang diakses oleh pemaket dan pengelola tugas-tugas yang akan diserahkan ke pekerjanya
- `irgsh-node` ([github.com/blankon/irgsh-node](github.com/blankon/irgsh-node))<br>Salah satu pekerja irgsh (builder), membangun paket-paket dengan arsitektur tertentu. Satu ekosistem IRGSH bisa memiliki beberapa builder.
- `irgsh-repo` ([github.com/blankon/irgsh-repo](github.com/blankon/irgsh-repo))<br>Salah satu pekerja irgsh (repository), menerima paket yang sudah dibangun dan memasukkannya ke lumbung paket.

Sisanya dibantu oleh perkakas lain seperti reprepro, pbuilder, chroot dan lainnya. Secara garis besar, alur kerja IRGSH adalah sebagai berikut :

<img src="/assets/irgsh-workflow.jpg">

Lalu, kepanjangan IRGSH apa? Disadur dari [thread lama di milis BlankOn-dev](https://groups.google.com/forum/#!searchin/blankon-dev/irgsh$20nama%7Csort:relevance/blankon-dev/yvceclWjSw8/uegzjGGPEOAJ) :

```
Sender: mohammad.damt@gmail.com
Received: by 10.223.103.133 with SMTP id k5mr4079075fao.23.1245567549549; Sat,
        20 Jun 2009 23:59:09 -0700 (PDT)
Date: Sun, 21 Jun 2009 13:59:09 +0700
Message-ID: <f5c139650906202359t535e9e62r95916d746c0961cf@mail.gmail.com>
Subject: Re: [BlankOn-dev] Latar belakang nama yeyen, robot gedek
From: Mohammad Anwari <mdamt@mnots.eu>
To: BlankOn-dev@googlegroups.com
Content-Type: text/plain; charset=ISO-8859-1
Content-Transfer-Encoding: 7bit


2009/6/18, Akhmat Safrudin <akhmat.safrudin@gmail.com>:
>  mau bertanya, kalo latar belakang nama irgsh (robot gedek) yeyen (server pengembangan)

irgsh:
Dulu hanya berupa pabrik paket. Karena robot, mau dinamakan apa
ingatnya pak Robot Gedek, terdakwa kasus kriminal bertahun-tahun lalu:

http://id.wikipedia.org/wiki/Robot_Gedek

Kemudian robot ini berupa skrip shell, jadi harus diberi nama berkasnya:

robot-gedek.sh

Tapi karena dari nama di atas ternyata mengandung gelar kesarjanaan
(.sh), maka supaya komplet maka dikasih gelar Insinyur honoris causa,
jadi:

ir-robot-gedek.sh

Karena kepanjangan, maka disingkat jadi irgsh. Demikiang.

```

Nah, ada apa dengan IRGSH? Dokumentasi IRGSH tidak lengkap. IRGSH ditulis dengan Python 2.6.x, perlu sedikit penyesuain untuk bisa hidup di mesin modern. Konfigurasi IRGSH cukup rumit dan tidak ada pengembang baru yang benar-benar memahami IRGSH. Setelah insiden harddisk rani.boi yang rusak, IRGSH di production tidak lagi bekerja dengan benar. Untuk bisa menjadi generasi penerus, kami harus menguasai apa-apa yang diwariskan oleh pengembang lama. Jadi kami punya misi : harus bisa membangun IRGSH dari nol dan menguasainya. Usaha ini sudah saya mulai sejak September 2016, berkutat dengan buildout di Python 2.6. Bahkan lebih jauh lagi, kami ingin IRGSH dibungkus dalam Docker dan Docker image-nya tersedia untuk siap pakai.

Ada wacana-wacana untuk melepaskan IRGSH. Ada Open Build Service dan lainnya, bahkan ada ide soal JDG (Jenkins Debian Glue). Tapi hei, ini BlankOn dimana kami mesti sebisa mungkin mendorong diri kami sendiri untuk mandiri, gunakan apa yang kita bikin. Rekontruksi IRGSH sudah masuk ke milestone bulan Maret namun target tersebut tidak tercapai. Di April ini, kami pacu kembali dan sudah ada beberapa kabar baik.

Banyak hal-hal baru yang saya pelajari sejak bermain dengan IRGSH, tentang sistem terdistribusi, queue, isolasi sistem dan lainnya. Tertarik juga? Mari, [https://github.com/BlankOn/Uluwatu/blob/master/TEAM.md](https://github.com/BlankOn/Uluwatu/blob/master/TEAM.md).

Nah, hal-hal yang berbau teknis akan dimulai pada bagian kedua. :D
