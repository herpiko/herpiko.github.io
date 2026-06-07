---
draft: true
title: "noexec on fstab"
date: 2012-03-01 19:06:10Z
categories:
  - uncategorized
tags:
  - ck
  - compilation
  - kernel
  - patch
---
kompail kernel lagi plus patch dari con kolivas. tapi nemu error.

[code]patching file drivers/cpufreq/cpufreq.c

 patching file drivers/cpufreq/cpufreq_ondemand.c

 patching file drivers/cpufreq/cpufreq_conservative.c

 ==> Running make mrproper to clean source tree

 ==> Running make prepare for you to enable patched options of your choosing

 HOSTCC scripts/basic/fixdep

 /bin/sh: scripts/basic/fixdep: Permission denied

 make[2]: *** [scripts/basic/fixdep] Error 1

 make[1]: *** [scripts_basic] Error 2

 make: *** No rule to make target `include/config/auto.conf', needed by `include/config/kernel.release'. Stop.

 ==> ERROR: A failure occurred in build().

 Aborting...[/code]

ternyata sumber permasalahannya ada di parameter pengkait partisi /home di fstab (direktori kerja kompilasi ada di dalam /home). hapus noexec atau pakai parameter default.
