---
draft: true
title: "jam kerja main facebook?"
date: 2012-01-16 16:27:53Z
categories:
  - blog
  - kehidupan
  - linux-opensource
tags:
  - bind
  - facebook
  - fb
  - social media
---
sedikit proyek kecil. kalau coba2 buka facebook di kantor -->

[![](/assets/screenshot-at-2012-01-16-213909.png)](http://pikopages.files.wordpress.com/2012/01/screenshot-at-2012-01-16-213909.png)

sebuah server diaktifkan untuk http sekaligus DNS server (BIND) dengan domain facebook.com dan di mikrotik dibuat script terjadwal untuk mengganti DNS tersebut. :P

update : kecuali bagian script terjadwal di mikrotik yang mengatur pergantian DNS, cara ini cocok untuk blokir permanen. penggantian DNS di mikrotik tidak langsung berpengaruh ke komputer klien. browser masih menyimpan dan menggunakan cache lama.
