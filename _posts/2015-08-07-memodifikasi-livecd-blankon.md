---
layout: post
title: Memodifikasi LiveCD BlankOn
date: 2015-08-07 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

#####Persiapan alat tempur

<pre>
sudo aptitude install squashfs-tools genisoimage
</pre>

#####Symlink genisoimage

<pre>
sudo ln -s /usr/bin/genisoimage /usr/bin/mkisofs
</pre>

#####Buat area kerja

<pre>
mkdir ~/livecdtmp
mv berkas.iso ~/livecdtmp
cd ~/livecdtmp
</pre>

#####Kaitkan berkas ISO Live CD
<pre>
mkdir mnt
sudo mount -o loop berkas.iso mnt
</pre>
Jika gagal mengkaitkan berkas ISO dengan pesan galat ```Unknown error -1```, pastikan modul ```loop``` sudah dimuat oleh sistem.
<pre>
modprobe loop
</pre>

#####Ekstrak isi citra ISO
<pre>
mkdir extract-cd
sudo rsync --exclude=/live/filesystem.squashfs -a mnt/ extract-cd
</pre>

#####Ekstrak SquashFS
<pre>
sudo unsquashfs mnt/live/filesystem.squashfs
sudo mv squashfs-root edit
</pre>

#####Kustom
Sampai langkah ini, anda dapat memodifikasi Live CD (misal menambahkan berkas). Direktori untuk kustom ada di dalam direktori edit/

#####Chroot
Untuk modifikasi yang terkait erat dengan sistem (misal menambahkan paket), Anda perlu masuk ke dalam sistem yang sudah diekstrak tersebut, dengan ```chroot```.

<pre>
sudo mount --bind /dev/ edit/dev
sudo chroot edit
mount -t proc none /proc
mount -t sysfs none /sys
mount -t devpts none /dev/pts
</pre>

Anda bisa mulai menambah dan mengurangi paket.

Jika Anda berniat menghapus direktori ```edit```, pastikan Anda melepas kaitan yang tadi, dengan urutan yang terbalik.

Untuk menghindari masalah ``locale`` dan dapat mengimpor kunci GPG :

<pre>
export HOME=/root
export LC_ALL=C
</pre>

#####Kompres SquashFs
<pre>
sudo mksquashfs edit extract-cd/live/filesystem.squashfs
</pre>

#####Perbarui berkas filesystem.size
<pre>
sudo su
printf $(sudo du -sx --block-size=1 edit | cut -f1) > extract-cd/live/filesystem.size
exit
</pre>

#####Buat kembali berkas ISO
<pre>
cd extract-cd
sudo mkisofs -o ../modifikasi.iso -b boot/grub/eltorito.img -c boot.catalog -no-emul-boot -boot-load-size 4 -boot-info-table -R -J -v -T -eltorito-alt-boot .
</pre>

#####Selesai

Silakan ujicoba citra ISO yang sudah Anda buat
<pre>
cd ../
qemu -cdrom modifikasi.iso -boot d -m 1G
</pre>

######Kredit :
@dotovr

http://pendekar.blankon.in/~dotovr/custom_live_cd_blankon.dotovr


