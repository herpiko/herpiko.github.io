---
draft: true
title: "bash sebagai shell default di BSD"
date: 2011-08-31 04:36:16Z
categories:
  - uncategorized
tags:
  - bash
  - bsd
  - ports
  - shell
  - unix
---
cari port bash
* #echo /usr/ports/*/*bash**
 dari hasilnya kita pindah ke direktori port bash dan pasang
 *#cd /usr/ports/shells/bash*
 *#make install clean*
 cari dimana bash berada
 *#whereis bash*
 set bash sebagai shell default
 *#chsh -s /usr/local/bin/bash namauser*

silakan logout dan login kembali. :)
