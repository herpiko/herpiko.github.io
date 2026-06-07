---
draft: true
title: "mengatasi gagal mount di desktop slackware (setelah debian, lagi-lagi)"
date: 2011-06-12 19:45:05Z
categories:
  - uncategorized
tags:
  - freedesktop
  - HAL
  - kde
  - linux
  - mount
  - open source
  - removable storage
---
ah, serasa debian dan slackware sama saja, setelah fresh install tidak bisa mount otomatis dari user biasa (masalah di debian kemarin karena ada entry salah di /etc/fstab).

saya menggunakan slackware 13.37 dan desktop KDE. pada saat mencolokan removable storage, partisi gagal dimount dan di notifikasi ada pesan error yang saya lupa apa lengkapnya, berkaitan dengan HAL.

nah, saya menemukan solusinya di forum arch linux dan bekerja untuk slackware. yang perlu dilakukan adalah mengedit file /etc/dbus-1/system.d/hal.conf, tambahkan user kita di kelompok haldaemon

[code]

<!-- This configuration file specifies the required security policies

 for the HAL to work. -->

<!-- Only root or user hal arch1 can own the HAL service -->

 <policy user="hal">

 <allow own="org.freedesktop.Hal"/>

 </policy>

 <policy user=USERNAME">

 <allow own="org.freedesktop.Hal"/>

 </policy>

 <policy user="root">

 <allow own="org.freedesktop.Hal"/>

 </policy>

[/code]

dan di bawahnya lagi, tambahkan baris-baris berikut :

[code]

<!-- well,...and USERNAME too -->

 <policy user="arch1">

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.CPUFreq"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.DockStation"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.KillSwitch"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.KeyboardBacklight"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.LaptopPanel"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.Leds"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.LightSensor"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.Storage"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.Storage.Removable"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.SystemPowerManagement"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.Volume"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.Volume.Crypto"/>

 <allow send_destination="org.freedesktop.Hal"

 send_interface="org.freedesktop.Hal.Device.WakeOnLan"/>

</policy>

[/code]

baris-baris tersebut bertujuan agar user kita bisa mengakses beberapa service HAL tanpa menjadi root. kode yang di atas agak lucu karena terlihat melanggar aturan yang disebutkan di awal. tapi ah peduli amat yang penting work perfect. :P
