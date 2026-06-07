---
draft: true
title: "broadcom 4312 for macosx86"
date: 2010-12-28 01:57:21Z
categories:
  - uncategorized
---
unduh dulu : [https://docs.google.com/leaf?id=0BzPKgqlVcCTaMDc2MmJlMzMtMTIwNC00ODg2LTlhNGQtMTk0Mzg1MGZkYjJh&hl=en](https://docs.google.com/leaf?id=0BzPKgqlVcCTaMDc2MmJlMzMtMTIwNC00ODg2LTlhNGQtMTk0Mzg1MGZkYjJh&hl=en)

sebenarnya ini langsung jalan, tinggal ./bcm43xx_enabler.sh enter enter reboot. tapi ndak mau karena :

AppleAirPortBrcm4311.kext ada di dalam IO80211.kext. pindahin dulu AppleAirPortBrcm4311.kext ke /System/Library/Extensions/

cp /System/Library/Extensions/IO80211.kext/Content/PlugIns/AppleAirPortBrcm4311.kext/ /System/Library/Extensions/AppleAirPortBrcm4311.kext/

ke folder tempat skrip enabler.

./bcm43xx_enabler.sh

ketik path yang baru disalin : /System/Library/Extensions/AppleAirPortBrcm4311.kext/

enter + reboot.

tada!
