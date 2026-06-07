---
draft: true
title: "debmirror"
date: 2011-11-22 12:48:52Z
categories:
  - linux-opensource
---
skrip debmirror yang saya gunakan untuk menyedot repository ubuntu oneiric dari kambing.ui.ac.id. gpgkeyring ubuntu tetap bisa dipasang dan digunakan di debian, tinggal cari *.deb-nya yang sesuai rilis.

[sourcecode]

export GNUPGHOME=/home/piko/mirrorkeyring

arch=i386

section=main,restricted,universe,multiverse

release=oneiric,oneiric-updates,oneiric-security

server=archive.ubuntu.com

inPath=ubuntu

proto=http

outPath=/repository/repo/ubuntu/

debmirror       -a $arch \

                --no-source \

                -s $section \

                -h $server \

                -d $release \

                -r $inPath \

                --progress \

                -e $proto \

                $outPath

[/sourcecode]
