---
layout: post
title: Catatan BlankOn Installer (3)
date: 2016-07-29 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

This is last paragraph from previous post :

> My current work still having double passphrase checking (which is annoying) on the boot process : on the GRUB and initramfs. It didn't happens on the previous year and I have no clue yet (sitl regret about missing documentation).

So I've been struggling for a week and successfully to manage a working encrypted system with only one passphrase checking. There are some notes about double passphrase checking :

- An UEFI system should use GPT partition table and has one EFI partition, otherwise (Legacy BIOS), if the disk use GPT, there should be a BIOS_GRUP partition.
- These special partition above ARE NOT a `boot` partition, contrary with my though before. On the previous scenario, the `/boot` are in root partition (in LVM : `/dev/mapper/root`) which is encrypted. That is why BIOS need the passphrase to access the `/boot` path.
- So, I managed to separate the `/boot`. Now, the disk layout is like :
  - `/dev/sda1` as EFI partition (not encrypted)
  - `/dev/sda2` as boot partition (not encrypted)
  - `/dev/sda3` as LVM (included root and swap, encrypted on LVM level)
