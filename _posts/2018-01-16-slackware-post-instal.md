---
layout: post
title: My Slackware Post Install Guide for Thinkpad X200/X220 Laptop
date: 2018-01-16 00:01:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---


There are times where I flushed the Slackware partition for another purpose. Especially when I have to hack on BlankOn project. I always want to reinstall Slackware, and reinstall and reinstall again. It's tiring. So, this is my fast post install guide for my Slackware setup to get the machine work-ready. This applied for Slackware 14.2.

# Pre-installation

```
dd if=slackware-14.2-install-dvd.iso of=/dev/sdX

```

# Installation

I just exclude `kde*` packages since I use XFCE4 instead.

# Post-installation

## wicd

`wicd` is a network manager that just works. It is located in `/extra/wicd/` in the ISO image.

```
# installpkg pkgname.txz
```

## Colemak keyboard

No need to download Colemak kmap file from Colemak.com. Colemak layout is already installed in the system. Just put the line :

```
# echo "loadkeys /usr/share/kbd/keymaps/i386/colemak/en-latin9.map.gz" >> /etc/rc.d/rc.local
```

If you use XFCE4, add this command line to startup applications :

```
setxkbmap us -variant colemak
```

## Trackpoint

One line to rule them all :

```
# cat /etc/udev/rules.d/10-trackpoint.rules
ACTION=="add", SUBSYSTEM=="input", ATTR{name}=="TPPS/2 IBM TrackPoint", ATTR{device/sensitivity}="250", ATTR{device/press_to_select}="1"
```
Nay, it needs more for scrolling page. Trackpoint should not be called `trackpoint` if it doesn't work together with the middle blue button.

```
# cat /etc/X11/xorg.conf.d/20-thinkpad.conf
Section "InputClass"
	Identifier	"Trackpoint Wheel Emulation"
	MatchProduct	"TPPS/2 IBM TrackPoint|DualPoint Stick|Synaptics Inc. Composite TouchPad / TrackPoint|ThinkPad USB Keyboard with TrackPoint|USB Trackpoint pointing device|Composite TouchPad / TrackPoint"
	MatchDevicePath	"/dev/input/event*"
	Option		"EmulateWheel"		"true"
	Option		"EmulateWheelButton"	"2"
	Option		"Emulate3Buttons"	"false"
	Option		"XAxisMapping"		"6 7"
	Option		"YAxisMapping"		"4 5"
EndSection
```

## User and groups

```
adduser herpiko
```

Make sure the user has the required groups, in case you forgot to add when creating new user.

```
# groups herpiko
herpiko : users lp wheel floppy audio video cdrom plugdev power netdev scanner
```

How to add a grup,

```
# usermod -a -G power herpiko
# usermod -a -G wheel herpiko
```

Add the user to sudoers and some commands to support suspend.

```
herpiko ALL=(ALL) ALL
herpiko ALL=(ALL) NOPASSWD:/usr/sbin/pm-suspend-hybrid
herpiko ALL=(ALL) NOPASSWD:/usr/bin/xfce4-power-manager
```

## Power and Suspend

Now you can do `sudo /usr/bin/xfce4-power-manager` without password. Suspend and other power settings are disabled in normal user, even if the user are in `power` group. Disable `Power Manager` related item in Settings > Startup, then add new item, `Power manager by sudo` with the command `sudo /usr/bin/xfce4-power-manager`. Then reboot. Now you shoud can do suspend flawlessly.

But only for the first suspend, in second suspend attempt the computer will be crashed. Sorry. The culprit is TXT feature in the BIOS of X200 (see in Security section). Disable it. 

## Escape key on X200

I depend my life on Vim heavily. There is alternative like `Ctrl + [` but I just love striking the Esc key. Thinkpad X200 has a trolling-layout on its keyboard. Lets fix this with :

```
$ echo 'xmodmap -e "keycode 67 = Escape"' >> ~/.bashrc
```



## Slackbuild and sbopkg

Please consult to https://www.sbopkg.org/downloads.php

## Docker

You need to install some packages from Sbopkg :

- google-go-lang

Run this, `/etc/etc/profile.d/go.sh`, then install another package from Sbopkg :

- containerd

Then install this prebuild packages (from my Dropbox folder) : https://www.dropbox.com/sh/ki8nngtzjh2v6ay/AADFfvA0iX1lMkFRY9mJZHRIa?dl=0

Add the `docker` group, then add the group to current user

```
# groupadd docker
# usermod -a -G docker herpiko
```

Reboot, run `dockerd` as root then you can use `docker` as non-root user. 

## Internet Browser

Just install the blazingly fast Firefox Quantum (>57).

