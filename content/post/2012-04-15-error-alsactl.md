---
draft: true
title: "Error Alsactl"
date: 2012-04-15 21:00:31Z
categories:
  - how to
  - linux-opensource
  - slackware
tags:
  - alsactl
  - asound.state
  - slackware
---
[code]

/usr/sbin/alsactl: set_control:1328: failed to obtain info for control #1 (No such file or directory)

/usr/sbin/alsactl: set_control:1328: failed to obtain info for control #2 (No such file or directory)

/usr/sbin/alsactl: set_control:1328: failed to obtain info for control #25 (No such file or directory)

/usr/sbin/alsactl: set_control:1328: failed to obtain info for control #26 (No such file or directory)

[/code]

selalu muncul beberapa baris sebelum login. solusi di wiki Archlinux bekerja untuk Slackware

[code]

alsactl -f /var/lib/alsa/asound.state store

[/code]
