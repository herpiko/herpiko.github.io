---
draft: true
title: "Otak-atik Artwork BlankOn"
date: 2009-06-03 16:33:06Z
categories:
  - linux-opensource
tags:
  - BlankOn
  - gdm theme
  - GPL
  - ikon
  - indonesia
  - linux-opensource
  - modifikasi
  - tema blankon
  - ubuntu
  - usplash blankon
  - utak-atik
---
Saya baru mengerti sekarang dan merasakan betul apa itu arti free dalam filosofi GNU/Linux. Benar-benar menyenangkan. Saya melakukan sendiri : memodifikasi karya orang lain yang berlisensi GPL. Meski hanya sedikit coding dan sebagian besar mengolah gambar, saya senang bisa memodifikasi dan mendistribusikan kembali dengan 'legal'. Ini hanya intro.

Meski saya pakai blankon, orang lain akan menyangka saya sedang pakai ubuntu. Ya, saya sedang mencoba membohongi diri sendiri. Mulai dari ikon sampai usplash, saya menggunakan artwork ubuntu asli. Why? Apakah rasa ke-indonesia-an saya kurang?

Tidak, meski kelihatan begitu. Saya sebenarnya kagum dengan artwork BlankOn Meuligo, terutama tema gulali-hitam di versi minimalis dan juga gambar usplash. Hanya saja, saya kurang suka warna-warna yang mencolok. Saya lebih suka hal-hal yang tidak menarik perhatian, yang menurut orang lain bodoh tetapi begitu berarti buat saya.

Tapi akhirnya, saya mencoba untuk merasa bangga menggunakan BlankOn. nah, saya mencoba mengutak-atik alias memodifikasi artwork BlankOn agar sesuai dengan selera saya. Saya menyediakan link donlotnya, siapa tahu selera anda cocok dengan saya. Berikut skrinsut-nya.

![](/assets/usplash-blankon-abu1.png)

Yang di atas ini adalah usplash versi versi abu... donglot [di sini](http://piko.esc-webhosting.co.cc/files/paket-blankon-abu/blankon-abu-usplash-standar.tar.gz) untuk layar rasio 4:3 dan satu lagi [di sini](http://piko.esc-webhosting.co.cc/files/paket-blankon-abu/blankon-abu-usplash-widescreen.tar.gz) untuk wide screen.

Usplash ini diambil dari gambar usplash meuligo. Saya mendonlot source-nya dalam bentuk svg di dev.blankonlinux.or.id lalu mengeditnya. Saya suka tekstur kanvasnya yang dibuat dengan gimp. Saya menghilangkan codename meuligo agar terlihat universal, jadi tidak perlu ganti-ganti lagi kalau naik versi ke nanggar.

![](/assets/usplash-peta-wide.png)

Yang di atas ini usplash versi peta, saya lebih suka pake ini. Lebih indonesia... donglot [di sini](http://piko.esc-webhosting.co.cc/files/paket-blankon-abu/usplash-peta.so). untuk sementara hanya bisa buat layar widescreen, kalo layar biasa, letak petanya masih mencong ke kiri (masih beta :(  )

Usplash? ya, yang jadi progres bar adalah peta indonesia. ngerti kan? Tapi sayang saya kesulitan buat latar belakangnya lebih bercorak... Tapi saya pikir ini lebih bagus dari yang pertama...

Cara pasang yang repot : dengan hak root Anda harus mengkopi file blankon-abu.so ke /usr/lib/usplash/. lalu membuat link-nya ke /etc/alternative/usplash-artwork.so. kemudian membuat link lagi dari file link barusan ke /usr/lib/usplash/usplash-artwork.so. kemudian coba reboot.

Cara pasang yang mudah : install startup manager. Jalankan 'sudo apt-get install startup-manager' (tanpa tanda petik) untuk menginstall jika belum diinstall. Lalu buka System > Administration > Startup-Manager. Masukkan password bila diminta. Klik tab Appearance, pilih manage usplash theme. Tambah file blankon-abu.so. Klik close, kemudian pilih blankon-abu.so sebagai usplash default. Klik close untuk menerapkan. Kemudian coba reboot.

![](/assets/blankon-login.png)

Yang di atas ini GDM theme buat login. donglot [di sini](http://piko.esc-webhosting.co.cc/files/paket-blankon-abu/blankon-abu-gdm-standar.tar.gz) untuk layar standar, dan [di sini](http://piko.esc-webhosting.co.cc/files/paket-blankon-abu/blankon-abu-gdm-widescreen.tar.gz) untuk layar wide.

GDM Theme, diambil dari gdmtheme blueswirl yang disediakan di repository ubuntu. Saya hanya mengganti latar belakang aslinya dengan gambar usplash tadi, tulisan GNOME Desktop menjadi Linux Book (maksudnya gantiin macbook saya, hehehe), logo gnome menjadi logo blankon hitam. Saya rasa itu sudah cukup keren. Jadi, usplash yang pertama dan gdm sama dong? Ya, mengikuti opensuse (opensuse mencoba membuat proses dari booting sampai loading desktop manager hingga desktopnya sebagai satu progress bar, tapi selalu diganggu ketika X dijalankan, yaitu muncul screen hitam sebentar).

Cara pasang, ekstrak filenya di suatu tempat. Anda akan mendapatkan folder gdm-blankon-abu. Buka terminal dan jalankan 'sudo nautilus' (tanpa tanda petik). Masukkan password bila diminta. Lalu kopi folder tadi ke /usr/share/gdm/themes/. Ubah permission folder beserta isinya sampai subfoldernya agar bisa dibaca semua user. Buka System > Administration > Login Window, gdm-blankon-abu akan muncul di sana. Pilih dan coba logout untuk melihat.

Wallpaper diambil dari gambar latar gdm. gak banyak diedit, supaya serasi saja :D . donglot [abu-standar.png](http://piko.esc-webhosting.co.cc/files/paket-blankon-abu/abu-standar.png) untuk layar standar dan [abu-widescreen.png](http://piko.esc-webhosting.co.cc/files/paket-blankon-abu/abu-widescreen.png) untuk widescreen.

![](/assets/desktop-theme-abu.png)

ini temanya, aslinya dari gulali-hitam, donglot [di sini.](http://piko.esc-webhosting.co.cc/files/paket-blankon-abu/blankon-abu-tema.tar.gz)

Gulali-hitam modifikasi, hehehe.... Sebenarnya saya berencana mengedit tema ubuntu-studio yang lumayan keren, tapi saya juga menginginkan motif batik di gulali-hitam. Saya mengubah warna batiknya menjadi abu, juga motif batik yang biasa muncul di toolbar.

Cara pasang, klik kanan di desktop dan pilih Change Desktop Background. Pilih tab Theme. Lalu buka nautilus dengan window unmaximize (jendela tidak memenuhi layar). lalu drag filenya ke kotak putih di tab theme. Klik ok atau close bila diminta konfirmasi. Klik Customize, cari dan pilih tema blankon-abu di Controls dan Window Border. Catatan : tema ini akan tersimpan di /home/namauser/.themes/ bukan di /usr/share/themes/.

Kemungkinan sekali temanya tidak akan berjalan baik pada aplikasi-aplikasi dengan hak root seperti synaptic dan lainnya. Untuk mengatasinya, jalankan 'sudo nautilus', kopi folder temanya ke /usr/share/themes/ dan ubah permissionnya agar bisa dibaca semua user. Jadi aplikasi-aplikasi dengan hak root akan menerapkan tema ini, demikian juga user yang lain.

![](/assets/gambar-layar.png)

Ikon-nya donglot [di sini.](http://piko.esc-webhosting.co.cc/files/paket-blankon-abu/blankon-abu-icon.tar.gz)

Ikon menggunakan ikon rae yang keren. Terutama saya suka ikon foldernya. Saya berusaha mengubah semua yang hijau menjadi abu-abu. Menu-menu utama di menu Applications yang berbentuk kotak-kotak hijau dengan sudut bundar saya ganti dengan ikon standar gnome.

Cara pasangnya sama seperti memasang tema. Anda perlu men-drag-nya ke tab theme, lalu cari di Customize lalu di tab Icons. Kalau Anda ingin ikon ini berlaku universal, kopi ke /usr/share/icons/ dan ubah permissionnya agar bisa dibaca semua user.

Apalagi ya? Saya rasa saya perlu menyemprot si macbook dengan pilox abu-abu agar serasi. :)

Maaf saja kalau saya tidak menyediakan paketnya dalam bentuk deb karena saya masih dalam tahap belajar.
