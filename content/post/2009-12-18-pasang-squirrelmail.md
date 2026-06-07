---
draft: true
title: "pasang squirrelmail"
date: 2009-12-18 06:29:01Z
categories:
  - linux-opensource
tags:
  - apache
  - linux-opensource
  - squirrelmail
  - webmail
---
ehem... maaf kalo ini sudah basi. cuma mau sharing. :)

karena penasaran dengan pengelolaan webmail, saya coba-coba menginstall salah satu aplikasi webmail, yakni squirrel si tupai... (bener ndak?)

to the point dah... mula-mula, anda harus punya webserver yang jalan mulus, apache misalnya. langkah pertama, anda harus install paket-paket pendukung : POP3, IMAP, dan SMTP Server. saya mengabaikan hal pertama ini dan mendapatkan squirrelmail tanpa akun. tuh, bloon sekali saiah!

# apt-get install dovecot-common dovecot-imapd dovecot-pop3d postfix \

squirrelmail squirrelmail-decode

kedua, anda harus membuat dovecot mendukung imap server

# vi /etc/dovecot/dovecot.conf

protocols = imap pop3

restart dovecot

# /etc/init.d/dovecot restart

saatnya konfig-konfig (alah...)

# cp /etc/squirrelmail/apache.conf /etc/apache2/conf.d/squirrelmail.conf

sekarang, konfigurasi domain

# /usr/sbin/squirrelmail-configure

2 -> 1 -> domain.id -> R

atau bisa juga masukin manual ke apache2.conf

restart apache!

# /etc/init.d/apache2 restart

webmail sudah bisa diakses!

http://ip-address-server/squirrelmail

biasanya sih http://localhost/squirrelmail

nah, selamat bermain-main dengan squirrelmail!
