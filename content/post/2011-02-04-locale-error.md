---
draft: true
title: "locale error"
date: 2011-02-04 18:27:25Z
categories:
  - how to
  - linux-opensource
  - uncategorized
tags:
  - postaday2011
---
ada suatu ketika terminal saya jadi agak menjengkelkan. saya biasa menggunakan tab untuk operasi terminal yang efektif. nah, kali ini muncul error setelah menekan tombol tab : warning: setlocale: LC_CTYPE: blabla en_US.UTF-8

saya lupa lengkapnya pesan error tersebut karena sudah berhasil dipecahkan. caranya :

$ sudo locale-gen en_US.UTF-8$ sudo update-locale LANG=en_US.UTF-8

habis itu reboot. tada!
