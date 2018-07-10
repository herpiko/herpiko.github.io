---
layout: post
title: The Professionals [ Spoiler Alert ] dan HSM
date: 2016-12-28 00:01:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

<img src="/assets/2016-12-28-theprofessionals.jpg">

Karena cukup puas dengan Headshot (meskipun tidak sebagus seri The Raid), saya beranggapan bahwa film laga Indonesia sudah membaik dan memutuskan untuk lanjut menonton The Professionals. Saya tertarik terutama karena trailernya memperlihatkan aksi tim yang direncanakan dengan rapi dan ada scene meretas komputer. Jadi penasaran, mereka ngapain aja.

Namun ternyata tidak sesuai ekspektasi. Saya tidak akan mengulas tentang kualitas film dan plotnya, hanya sisi teknis mengenai "dongle". Peringatan : paragraf di bawah ini mengandung spoiler.

Dua tokoh sentral di sini adalah Abi dan Reza. Keduanya telah membangun perusahaan namun karena skandal perusahaan, Abi dikorbankan dan dipenjara. Setelah bebas, Abi membentuk tim untuk membalaskan dendamnya, yaitu dengan mendapatkan data-data perusahaan yang dilindungi Reza untuk diserahkan ke kepolisian. Nah, data tersebut dilindungi oleh "dongle".

Yang dimaksud dengan dongle di film ini adalah <a href="https://en.wikipedia.org/wiki/Hardware_security_module" target="_blank">HSM (Hardware Security Module)</a>, yang digunakan untuk menyimpan kunci privat dari pasangan kunci yang ada. Pada praktiknya, kunci privat bisa digunakan untuk membuka sebuah sistem tertentu atau data yang terenkripsi oleh pasangan kunci publiknya. Bentuk HSM bermacam-macam, ada yang berbentuk seperti mesin server sampai ukuran kecil seperti USB Flashdisk.

Saat tim Abi mendapatkan dongle yang pertama, mereka mestinya bisa mengenali bahwa itu hanya flashdisk biasa, karena vendor HSM berbeda dengan vendor USB Flashdisk kebanyakan, misalnya <a href="https://github.com/OpenSC/OpenSC/wiki/Supported-hardware-%28smart-cards-and-USB-tokens%29" target="_blank">daftar vendor yang didukung oleh pustaka OpenSC</a>.

Saya sudah curiga sejak Reza pegang-pegang iPhone 6 setelah mengamankan dongle-nya. Sebelumnya, beberapa scene film menunjukkan bahwa Reza sangat konsisten dengan ponsel lamanya (iPhone 4) dan selalu membawa-bawa. Namun menyimpan kunci privat ke sistem lain (ponsel pintar, di filesystem) tidak sama dengan menyimpan kunci privat di HSM.

Begitu tim Abi mendapatkan dongle, tidak semudah itu menggunakannya untuk membuka sistem atau enkripsi, karena HSM dilindungi PIN sebagaimana kunci privat dilindungi passphrase.

Anggaplah tim Abi sudah mendapatkan PIN-nya sejak memasang kamera pengintai dan mengawasi ketikan Reza di Macbook-nya. Namun saat dani diminta mengembalikan data dan Dani bilang ia perlu dongle, saya rasa ini tidak tepat.

Pada praktiknya, jika menggunakan HSM, maka kunci privat disimpan di suatu tempat yang aman, untuk jaga-jaga jika HSM hilang atau rusak. Bisa disimpan sebagai HSM cadangan maupun disimpan di tempat tertentu sebagai berkas sistem. Misalnya, saya menyimpan kunci privat SSH di suatu tempat dan jika saya kehilangan komputer jinjing, saya masih bisa mendapatkan akses ke server-server yang saya gunakan untuk bekerja, yaitu dengan kunci privat yang dicadangkan tersebut.

Jadi, meskipun donglenya sudah dicuri oleh Abi, Reza masih bisa menyuruh Dani membuat HSM lain dengan alinan kunci privat yang sudah diamankan. Jika Dani tidak menyimpan kunci privat cadangan maka IQ-nya yang 130-an perlu dipertanyakan.

Dan apa yang diminta Reza ke Dani sebenarnya tidak masuk akal. Apa yang mau dikembalikan? Data yang terdekripsi dan sudah disalin ke media lain dalam keadaan daring tidak mungkin ditarik kembali. Dalam kasus ini, data sudah disalin oleh Abi ke USB Flashdisk untuk diserahkan ke kepolisian.

 Saya memberi nilai 4/10.
