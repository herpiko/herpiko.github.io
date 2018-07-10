---
layout: post
title: Catatan Pemaket BlankOn (1)
date: 2015-03-03 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Terlebih dahulu, penuhi [beberapa syarat](http://dev.blankonlinux.or.id/wiki/Pemaket/PanduanPembuatanPaketMotu).

0. Seduh kopi.
1. ```bzr branch https://dev.blankon.id/browser/tambora/blankon-installer```
2. ```dpkg-checkbuilddeps```
3. Pasang paket dependensi.
4. Ngoprek.
5. Naikkan versi, catat perubahan : ```dch -i```
6. Bangun! ```dpkg-buildpackage -rfakeroot```
7. Uji sambil ngopi.


