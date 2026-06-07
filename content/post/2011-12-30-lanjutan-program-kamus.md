---
draft: true
title: "lanjutan program kamus"
date: 2011-12-30 01:42:31Z
categories:
  - programming
tags:
  - programming
  - python
---
kode sudah disesuaikan untuk python3, sehingga bisa jalan langsung di kebanyakan OS linux modern.

yoi, saya sudah menemukan cara agar apapun kata yang kita masukkan, indonesia maupun english, otomatis dicarikan. kelihatannya seperti mendeteksi kata, tetapi sebenarnya tidak. melainkan dengan menggabungkan berkas bahasa indonesia dan english ke dalam satu berkas dan pencarian dimulai dari awal sampai akhir, jika tidak ditemukan diberikan pesan 'kata yang dimaksud tidak ditemukan'

ternyata ini mudah, cuma gegara rendahnya tingkat inteligensi dan sedikitnya waktu buat main-main, baru ketemu sekarang.

berikut skrip.

[sourcecode language="python"]

def terjemah(kata):

	hasil='tidakada'

	teks=open('universal.dict','r')

	for line in teks:

		x=line.split()

		y=x[0]

		if y == kata:

			hasil=(line)

	if hasil != 'tidakada':

		print(hasil)

	else:

		print('tidak ada kata yang dimaksud')

inputkata=input('masukan kata : ')

katalowercase=inputkata.lower()

terjemah(katalowercase)

[/sourcecode]

penjelasan :

- berkas universal.dict adalah berkas gabungan bahasa indonesia dan english. dalam setiap baris, kata pertama adalah kosakata, sedangkan kata kedua dan selanjutnya adalah terjemahannya.
- hasil='tidakada' adalah variabel yang membantu menunjukkan kondisi awal bahwa kata yang dimaksud tidak ada.
- berkas dibaca dan diperiksa, setiap baris dibagi ke dalam list dan diperiksa apakah list pertama dari setiap baris adalah kata yang dimaksud. bahasa inggris maupun indonesia semua diperiksa.
- jika sama, maka baris tersebut (kosakata + terjemahan) menggantikan nilai dari variabel hasil dan variabel tersebut ditampilkan. program selesai.
- jika tidak sama, maka akan ditampilkan pesan 'kata yang dimaksud tidak ditemukan'. program selesai.
- karena semua kata dalam berkas universal.dict adalah lowercase, digunakan fungsi lower() mengubah setiap karakter huruf besar menjadi huruf kecil.

nah, kelemahannya, bagaimana kalau ada kosakata bahasa indonesia dan english yang sama? saya belum pikirkan kira-kira kosakata yang mana itu.
