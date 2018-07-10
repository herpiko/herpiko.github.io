---
layout: post
title: Playing with Initramfs
date: 2015-08-08 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Both Virtualbox and Qemu has strange behaviour when we append ``break=mount`` parameter to GRUB, as we want to enter an initramfs shell. They give us a blank black screen. I have tried this in newest Virtualbox version, but still no luck.

Fortunately, Qemu has flexible workaround for this.
<pre>
kvm -m 1024 -hda testing.vdi
</pre>

In this virtual system, we need to export the kernel and initrd file from the disk image which you play with.

<pre>
scp /boot/vmlinuz* hostUser@10.0.2.2:~/initramfs_playground
scp /boot/initrd* hostUser@10.0.2.2:~/initramfs_playground
</pre>

Shut down the virtual machine and re-run qemu with this parameter.

<pre>
kvm -m 1500 -hda /path/to/testing.vdi -kernel /path/to/vmlinuz -initrd /path/to/initrd.img -append "break=mount"
</pre>

Qemu allows us to include a kernel and a initrd/initramfs from outside the disk image. ``-append`` is equal to kernel parameter in GRUB. And voila!

And now what? Wait for next blog post about how to extract, modify and compress an initramfs image.

