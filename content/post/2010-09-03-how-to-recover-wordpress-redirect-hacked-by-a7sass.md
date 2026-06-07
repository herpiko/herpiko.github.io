---
draft: true
title: "how to recover wordpress-redirect-hacked-by-a7sass"
date: 2010-09-03 20:31:23Z
categories:
  - kehidupan
  - linux-opensource
  - pikiran
  - tong sampah
tags:
  - A7sass
  - hack
  - hacked
  - hek
  - recovery
  - redirect
  - wordpress
  - wordpress password
---
alkisah, web milik seorang kawan kena hack. screenshoot :

[![](/assets/hek.jpg)](http://pikopages.files.wordpress.com/2010/09/hek.jpg)kondisi :

- webnya pakai wordpress
- halaman dialihkan ke halaman klaim hek blablabla.
- user dan password berubah.

kalau seorang webmaster mungkin langsung tahu penyakitnya dimana. namun berhubung saya ndak ngerti, saya pakai cara saya.

**1.** rename index.php wordpressnya. paling tidak, menyingkirkan halaman klaim hack untuk sementara waktu.

**2.** mengembalikan user dan password wordpress.

saya masuk melalui cpanel dan merubah passwordnya lewat mysql (pakai phpmyadmin). cari di table wp_users. ganti user_login dengan admin dan user_pass dengan password baru (pilih md5). klik go!

mencoba masuk dashboard. berhasil.

**3.** saya ingin tahu apakah file pengalihannya ada di direktori hosting atau link ke luar.

mungkin ada cara cepat lain, tapi berhubung ini cara saya (agak buang-buang waktu), hanya karena ingin tahu. saya membackup semua home directory berikut database mysql, dibawa pulang buat dicoba di komputer sendiri yang tentunya offline. lebih baik membackup mysql lewat phpmyadmin dari pada pakai fasilitas backupwizard cpanel (saya coba backupwizard sering error saat di-import). setelah semua dibangun ulang, saya buka. jika halaman pengalihan itu berbuah 404 not found, berarti file halaman tersebut ada di luar belantara inet, kalau masih muncul, berarti file itu ada di dalam CMS. wow, ternyata muncul!

**4.** berburu bisul.

sayangnya, saya tidak tahu dimana file tersebut (dan awalnya juga tidak tahu cara mencarinya dengan cepat). awalnya, saya membuka file php dan html satu persatu. benar-benar buang2 waktu. eh, teringat sama grep. ^^

isi source halaman redirect tersebut adalah ini :

[sourcecode]**
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html dir="rtl">

<head>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<!-- saved from url=(0025)http://www.google.com/ -->

<!-- BEGIN TEMPLATE: FORUMHOME --><HTML dir=rtl><HEAD><TITLE># ~{ Own3d by

dr.a7sass }~ #</TITLE>

<META http-equiv=Content-Type content="text/html; charset=windows-1256">

<STYLE type=text/css>BODY {

	SCROLLBAR-FACE-COLOR: #000000; SCROLLBAR-HIGHLIGHT-COLOR: #ffffff; SCROLLBAR-SHADOW-COLOR: #000000; SCROLLBAR-3DLIGHT-COLOR: #000000; SCROLLBAR-ARROW-COLOR: #ffffff; SCROLLBAR-TRACK-COLOR: #000000; FONT-FAMILY: Verdana; SCROLLBAR-DARKSHADOW-COLOR: #ffffff

}

.Estilo10 {

	COLOR: #ffffff; FONT-FAMILY: Haettenschweiler

}

.Estilo8 {

	FONT-SIZE: 10px; COLOR: #ffffff; FONT-FAMILY: Haettenschweiler

}

S {

	FONT-FAMILY: Tahoma; TEXT-DECORATION: none

}

.000000 {

	COLOR: #000000

}

.3D0008 {

	COLOR: #3d0008

}

.A90016 {

	COLOR: #a90016

}

.AF0017 {

	COLOR: #af0017

}

.AA0014 {

	COLOR: #aa0014

}

.A80015 {

	COLOR: #a80015

}

.A80016 {

	COLOR: #a80016

}

.A60016 {

	COLOR: #a60016

}

.A40015 {

	COLOR: #a40015

}

.A50016 {

	COLOR: #a50016

}

.A50015 {

	COLOR: #a50015

}

.A20014 {

	COLOR: #a20014

}

.A10014 {

	COLOR: #a10014

}

.A20015 {

	COLOR: #a20015

}

.A00015 {

	COLOR: #a00015

}

.A30417 {

	COLOR: #a30417

}

.A31118 {

	COLOR: #a31118

}

.A61D1B {

	COLOR: #a61d1b

}

.A52118 {

	COLOR: #a52118

}

.A42115 {

	COLOR: #a42115

}

.page

{

	background: #000000;

	color: #ACACAC;

	font: bold 12pt arial,verdana,helvetica,sans-serif;

}

.tborder

{

	background: #000000;

}

.alt1

{

	background: #1D1D1D;

	color: #ACACAC;

}

</STYLE>

<META content="A7sass HaCkEr" name=description>

<META content="MSHTML 6.00.2900.3157" name=GENERATOR></HEAD>

<BODY text=#ffffff bgColor=#000000>

<DIV dir=ltr align=center><SPAN

style="FILTER: blur(add=1,direction=270,strength=30); HEIGHT: 30px">

	<SPAN

style="FILTER: blur(add=1,direction=270,strength=30)">

<DIV align=center>

<TABLE id=table1

style="BORDER-RIGHT: #808080 1px dotted; BORDER-TOP: #808080 1px dotted; BORDER-LEFT: #808080 1px dotted; BORDER-BOTTOM: #808080 1px dotted"

cellPadding=0 width=625 border=0>

  <TBODY>

  <TR>

    <TD>

<body bgcolor="#000000" background="http://xa.yimg.com/kq/groups/37369449/sn/1559609306/name/16.jpg">

          <td valign="top">

          <img border="0" src="http://xa.yimg.com/kq/groups/37369449/sn/664898476/name/3.jpg" width="270" height="385"></td>

          <td>

	<p align="center"><b><font color="#FF0000" size="6" face="Traditional Arabic">

0wn3d By</font></b></p>

<p align="center">

<b>

<font face="Aharoni"><font size="5" color="#FFF8C6">dr.a7sass</font>

<p align="center">

<b>

<font face="Aharoni"><font color="#FFFFFF"><font size="5"></font> <font color="#FFF8C6"><font size="4">^_*</font></font></font>

<p align="center">

  <img height="100" src="http://xa.yimg.com/kq/groups/37369449/sn/1007772901/name/e5s69icvy.jpg" width="180" border="0">

<p align="center">

<span style="font-weight: 700">

<font face="Garamond" size="4" color="#66CCFF">

<font color="#FFFF00">A-7sass@HoTmaiL.CoM</font></a></font></span>

<link rel="alternate" type="text/xml" title="RSS" href="../../../Public/rss.php">

<link rel="stylesheet" href="../../../Public/styles/paper/"  type="text/css">

<script type="text/javascript" src="../../../Public/includes/function.js"></script>

</span></span></div>

	<p align="center"><font face="verdana"><span lang="en-us">

<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="7" height="14">

  <param name="movie" value="http://llevill.persiangig.ir/audio/Era_The_Mass(studiomusic.blogfa.com).swf">

  <param name="quality" value="high">

  <param name="allowScriptAccess" value="always">

  <param name="wmode" value="transparent">

     <embed src="http://llevill.persiangig.ir/audio/Era_The_Mass(studiomusic.blogfa.com).swf" quality="high" type="application/x-shockwave-flash" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" allowscriptaccess="always" width="7" height="14">

</object>

</span></font></p>

<title># Own3d By A7sass HaCkEr # - (Powered By MySmartBB)</title>

[/sourcecode]

hmm, saya ambil string "A7sass" sajalah, tinggal saya grep saja. :)

grep -r A7sass /var/www/situs/

toeng! ternyata letaknya di /var/www/situs/wp-content/themes/sketchpad/index.php

setelah dibuka, ternyata memang itu. saya hapus. kopi index.php dari theme lain ke sini.

sampai di sini, saya rename kembali index.php wordpress-nya.

5.** mengganti tema.

yah, tinggal login ke dashboard, terus ganti tema. beres. atau kalau mau tetap pakai tema itu, tinggal download lagi, terus copy index.html yang original.

setelah saya googling, ternyata banyak juga web yang kena hack sama si A7sass. ah, peduli amat. mission completed.
