---
layout: post
title: Catatan BlankOn Installer (2)
date: 2016-07-15 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Last year I was doing a pretty challenging project in short time, two weeks, precisely. KodeKreatif team and I was creating BlankOn remaster that included customized BlankOn Installer that support LUKS encryption over LVM. The most interesting and hard part was injecting bluetooth support to initramfs. The goal was the user would be able to decrypt their computer using a smartwatch, upon the initramfs. Here is the result :

https://www.youtube.com/watch?v=sqoH7i_KpBM

After the project was completed, I didn't wrote any documentation. This week, I was doing the same again, except the bluetooth part. And guest what. I was filled with fear of having no documentation that I wrote myself, no iso image of the previous project. I must start from stratch again. One of the biggest regret. Documentation is important!

So, here are some important notes of the project :

### Encryption method

There are some encryption methods that could be used. Archlinux wiki has complete overview documentation about this issue [ https://wiki.archlinux.org/index.php/Dm-crypt/Encrypting_an_entire_system ]. The method I choose was encrypting root partition and store the key to swap partition. Both are in a LVM partition.

Prepare two main partitions, a boot partition (since the lvm created on GPT partition table, a small BIOS_GRUB (or EFI if it was an EFI system) flagged partition is required) and the rest is an empty parition. Consider this simple script.

```
#!/bin/bash

TARGET=$1
BOOT=$2

mkfs.vfat $BOOT

lvm pvcreate -ff -y $TARGET
lvm vgcreate -y lvm $TARGET
lvm lvcreate -y -L 4G -n swap lvm
lvm lvcreate -y -l 100%FREE -n root lvm
#badblocks -c 10240 -s -w -t random -v /dev/lvm/root
cat $ROOTFS/tmp/pass | cryptsetup luksFormat -c aes-xts-plain64 -s 512 -h sha512 /dev/lvm/root
cat $ROOTFS/tmp/pass | cryptsetup luksOpen /dev/lvm/root root
/lib/cryptsetup/scripts/decrypt_derived root > /tmp/derived
cat $ROOTFS/tmp/pass | cryptsetup luksAddKey /dev/lvm/swap /tmp/derived

mkfs.ext4 /dev/mapper/root
```

### The hook

Since the initramfs will handle the decryption process, some cryptsetup binary should be exists in initramfs environtment. I was using `/usr/share/initramfs-tools/hooks/cryptroot`, make some hardcoded changes in the file to force and put it to `/etc/initramfs-tools/hooks/cryptroot`. In fact, if the `update-initramfs` was given with `CRYPTSETUP=y` envar, this hook will be triggrered automatically. But it didn't works well in my case, I will inspect it later.

The most important part of the code was this :

```
copy_exec /sbin/cryptsetup
copy_exec /sbin/dmsetup
copy_exec /lib/cryptsetup/askpass

```


The last BlankOn Installer's code as included this encryption part, feel free to look up and contribute back.

### To do

My current work still having double passphrase checking (which is annoying) on the boot process : on the GRUB and initramfs. It didn't happens on the previous year and I have no clue yet (sitl regret about missing documentation).

If there is a progress on the future, I will update this post or wrote new post instead. Happy hacking!
