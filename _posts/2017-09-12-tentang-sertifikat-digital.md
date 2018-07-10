---
layout: post
title: Kesalahpahaman Seputar Sertifikat Digital/Elektronik
date: 2017-09-12 00:01:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Suatu hari di sebuah kelas, sertifikat elektronik dijelaskan sebagai sertifikat / ijazah / pengakuan yang diterbitkan secara digital oleh (misal) lembaga pendidikan untuk peserta didiknya yang sudah lulus. Ini seperti Anda telah selesai mengikuti seminar dan mendapatkan sertifikat, hanya saja bentuknya digital.  Kesalahpahaman ini sudah sering saya temui, terutama saat berusaha menjelaskan apa itu sertifikat elektronik dan tanda tangan digital. Beban pemerintah untuk memasyarakatkan teknologi ini sepertinya memang berat.

Dalam sudut pandang awam, berkas PDF yang berisi sebuah sertifikasi / pengakuan dapat disebut sebagai sertifikat digital, karena benda itu adalah 'sertifikat' dan bentuknya digital. Namun dalam konteks keamanan informasi, sertifikat digital/elektronik bukanlah seperti itu.

Sertifikat digital/elektronik adalah sertifikat yang diterbitkan oleh badan/lembaga berwenang untuk membantu pertukaran informasi yang aman. Sertifikat ini (dan kuncinya) dapat digunakan untuk melakukan operasi-operasi dasar seperti penandatanganan, verifikasi, enkripsi, dan dekripsi, mengacu pada standar RFC X.509 atau PKI (Public Key Infrastructure / Infrastruktur Kunci Publik). Jika dijelaskan secara menyeluruh, saya belum sanggup dan barangkali tulisan ini akan jadi lebih panjang. Saya akan mencoba menjelaskan beberapa contoh bagaimana sertifikat digital ini dapat mengamankan informasi.

Misal sebuah perusahaan memiliki sertifikat induk dan berperan sebagai penyelenggara sertifikat elektronik untuk lingkup sendiri serta telah menerbitkan sertifikat untuk setiap individu di dalam perusahaan tersebut. Setiap entity (individu maupun organisasi itu sendiri) memiliki 2 benda, yaitu sertifikat (kunci publik) dan kunci (kunci privat). Sertifikat-sertifikat tersebut (bukan kunci privatnya) saling dipertukarkan. Setiap individu tahu tentang / memiliki sertifikat dari setiap individu lain di perusahaan tersebut. Setiap individu juga menggunakan komputer yang di dalamnya tertanam sertifikat induk perusahaan. Mari saya jelaskan bagaimana semua ini bekerja.

Suatu hari, CTO ingin mengirim informasi penting dan rahasia kepada CEO. Informasi tersebut adalah sebuah dokumen PDF dan CTO tidak ingin :

1. Informasi ini dilihat oleh orang yang tidak berhak
2. Informasi ini tiba di tangan yang salah secara tidak sengaja
3. Informasi ini tiba di tangan yang benar namun informasinya salah / telah berubah.

CTO  menggunakan sertifikat dan kunci miliknya untuk menandatangani berkas tersebut. Sekarang, dokumen yang perlu dikirim ada 2 :

- A. Berkas PDF
- B. Berkas tanda tangan dari no. 1

A dan B dapat saling dicocokkan. Jika berkas PDF-nya disunting sedikit saja, tanda tangannya tidak akan cocok. Dengan demikian, CTO sudah mencapai kebutuhannya yang nomor 3. Lalu, CTO mengambil sertifikat milik CEO dan mencocokkan sertifikat tersebut terhadap sertifikat induknya. CTO dapat memastikan bahwa tujuan dari pengiriman informasi ini adalah benar-benar si CEO. Jika sertifikat tersebut tidak diterbitkan oleh sertifikat induk perusahaan atau sudah tidak valid, CTO dapat mengetahuinya. Sampai di sini, CTO sudah dapat memenuhi kebutuhannya yang nomor 2.

Selanjutnya, dengan menggunakan sertifikat milik CEO yang valid, CTO mengenkripsi dokumen A dan B menjadi satu dokumen tunggal (mari kita sebut X). Dokumen X hanya dapat dibuka dengan menggunakan kunci privat milik CEO. Lalu, dokumen X dikirim ke CEO (entah menggunakan surat elektronik atau diserahkan secara langsung dengan USB flashdisk).

Saat dokumen tersebut tiba di komputer CEO, CEO ingin memastikan bahwa :

1. Informasi ini memang ditujukan untuk dirinya
2. Informasi ini memang benar-benar utuh seperti aslinya dan belum pernah dimodifikasi
3. Informasi ini memang benar-benar berasal dari pengirim yang asli

Lalu CEO mendekripsi dokumen X menggunakan kunci privatnya. Jika berhasil terbongkar, maka CEO sudah dapat yakin dengan nomor 1. Setelah terbongkar, isinya ada A dan B. CEO mencocokkan keduanya. Jika cocok, CEO boleh yakin dengan nomor 2. Tanda tangan itu sendiri mengandung sertifikat milik penandatangannya. CEO dapat mengeluarkan sertifikat tersebut dari tanda tangan dan mengecek keabsahannya terhadap sertifikat induk. Jika cocok, maka CEO sudah bisa yakin dengan nomor 3. Akhirnya informasi telah dipertukarkan dengan aman.

Rumit? Sangat. Ribet dan kelihatannya kurang manusiawi, namun ini teknologi yang sejauh ini paling aman dan sudah terstandar dengan baik.

Contoh lain. 

Tanpa kita sadari teknologi sertifikat digital telah kita pakai dalam keseharian dan telah membantu mengamankan informasi pribadi kita. Di internet, ada penyelenggara-penyelenggara yang berhak menerbitkan sertifikat-sertifikat tertentu untuk situs-situs web. Para penyelenggara tersebut sudah dipercaya oleh komunitas internasional. Situs-situs yang paling sering kita kunjungi seperti Facebook menggunakan sertifikat turunan dari salah satu dari mereka.

<img src="/assets/Screen Shot 2017-09-13 at 12.47.53 AM.png">

<img src="/assets/Screen Shot 2017-09-13 at 12.41.58 AM.png">

Saat kita membuka situs Facebook di peramban, isi situs tersebut tiba bersama sertifikatnya. Sertifikat tersebut akan dicek langsung terhadap sertifikat-sertifikat induk yang terdaftar di komputer kita (setiap sistem operasi modern / peramban modern memilikinya), jika cocok dan valid maka peramban membiarkan kita lanjut mengakses situs tersebut. Jika tidak, peramban akan memperingati kita.
 
Saat kita mencoba login dengan mengisi username dan password, data kita dilindungi, yaitu sebelum dikirim ke peladen (server), informasi username dan password tersebut dienkripsi oleh sertifikat milik situs. Begitu tiba di sisi peladen, informasi tersebut dibongkar oleh kunci privat milik situs dan diolah.

Sekarang, merasa aman? Berterimakasihlah kepada teknologi ini dan orang-orang yang berkontribusi di dalamnya. :)

Masih banyak lagi sisi lain sertifikat elektronik, misal enkripsi, infrastruktur, trust, dan lain-lain yang rasanya saya sendiri masih terlalu awam untuk menjelaskan.

Namun, bagaimana misalnya jika kita ingin menerapkan teknologi sertifikat digital ke "sertifikat digital" (selanjutnya mari kita sebut dengan ijazah digital) yang kita bahas di awal tadi? Sangat mungkin, caranya begini. Penyelenggara pendidikan harus memiliki sertifikat digital/elektronik (beserta kuncinya). Saat menerbitkan berkas PDF sebagai ijazah digital, penyelenggara pendidikan dapat menandatangani berkas tersebut secara digital menggunakan kunci privat sebelum diserahkan ke peserta didik. Saat peserta didik ingin mencoba menggunakan ijazah digitalnya untuk melamar pekerjaan di suatu perusahaan, maka perusahaan dapat mengecek keabsahaan ijazah digital tersebut terhadap sertifikat milik penyelenggara pendidikan. Jadi untuk kebutuhan ini, penyelenggara pendidikan tidak perlu menerbitkan sertifikat digital karena sertifikat digital tersebut hanya mengandung informasi entity dan penerbitnya, serta kegunaan dan informasi kriptografi lainnya. Sertifikat tersebut tidak mengandung nilai-nilai capaian peserta didik atau tampil dalam bentuk dokumen PDF yang rapi. Jika ada kesempatan menulis lagi, saya akan menjelaskan bagaimana bentuk sertifikat digital ini dan bagaimana mereka dibuat (Ya, kita dapat membuatnya sendiri jika mau).

Masih kelihatan rumit ya? Tapi, bayangkan tentang dihematnya kertas-kertas dari hutan untuk tidak lagi digunakan mencetak dokumen yang harus ditandatangani dengan menggunakan tangan secara manual. Kertasnya buat cetak novel dan puisi saja. Bayangkan. :D
