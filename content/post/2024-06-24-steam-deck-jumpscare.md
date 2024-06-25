---
title: Steam Deck Jumpscare
date:   2024-06-24 00:00:00Z
categories:
  - Tech
  - Random
tags:
  - Steam Deck
---

### Notes

- A good prank is one that is light-hearted, harmless, and designed to amuse rather than to cause harm or distress. Please pick a suitable victim. Jumpscare could be dangerous for individuals with heart conditions or other health issues. In extreme cases, it could potentially trigger a cardiac event.
- Please protect your Steam Deck with a rugged case like JSAUX ModCase (https://jsaux.com/products/modcase-for-steam-deck-pc0104) in case the victim suddenly throw it.
- Please make sure your victim and the Steam Deck is in safe position. Victim laying in bed while playing games is better than in sit or standing position. Imagine the victim throwing the device. At least there is a huge chance that the device is still on the bed instead of hitting the floor.
- Let the victim play for a while, lure them into the game, make him/her forget about the reality for once.
- Disclaimer: I am not responsible for anything. If you are following this guide, this is solely at your own risk.


<img src="https://camo.githubusercontent.com/c0a7bbc3a17e2aecfc514ea0397d1c3241dd4676ac0a2506fdb9657fb36aa6e6/68747470733a2f2f692e7974696d672e636f6d2f76692f524e6f48635745387462512f6d617872657364656661756c742e6a7067"/>

Image source: https://github.com/Henry12116/hackee-jumpscare

### The trick

The initial idea is to utilize X11 Forwarding feature from SSH daemon to launch an image viewer remotely on the Steam Deck.

Edit your `/etc/ssh/sshd_config`. Look for this line then change the value from `no` to `yes`
```
X11Forwarding yes
```

Start the SSH daemon
```
$ sudo systemctl start sshd
```

Setup your password for Steam Deck
```
$ passwd
```

Find out your Steam Deck IP address
```
$ ip a
```

SSH into your device
```
$ ssh -X deck@YOURDECKIP
```

Export the main display:
```
(deck@steamdeck ~)$ export DISPLAY=:0
```

I was strugling to find an image viewer that fit the requirement below:
- Lightweight and fast, the image should be rendered immeadiately and simultaneously with the window decorator.
- The window decoration is customizable, I want it open in full window/full screen.
- Not depend on huge and bloated library like Qt or GTK.

Modern Qt apps have issue with X11 forwarding.
```
(deck@steamdeck ~)$ gwenview
qt.qpa.xcb: could not connect to display
qt.qpa.plugin: Could not load the Qt platform plugin "xcb" in "" even though it was found.
This application failed to start because no Qt platform plugin could be initialized. Reinstalling the application may fix this problem.

Available platform plugins are: eglfs, linuxfb, minimal, minimalegl, offscreen, vnc, wayland-egl, wayland, wayland-xcomposite-egl, wayland-xcomposite-glx, xcb.

Aborted (core dumped)
```

GTK apps are not reliable either.
```
(deck@steamdeck ~)$ org.gnome.Loupe
F: Not sharing "/esp" with sandbox: Ignoring blocking autofs path "/esp"

(loupe:2): Gtk-WARNING **: 23:09:00.913: Failed to open display
```

However, Steam-related binaries are fine with X11 forwarding. When I typed `steam` then press tab key, a lot of steam-* executable binaries appears. One of them is super interesting.

```
(deck@steamdeck ~)$ steam-http-loader -h
usage: steam-http-loader [-h] uri

Launch a link in the steam browser.

positional arguments:
  uri

options:
  -h, --help  show this help message and exit
(deck@steamdeck ~)$
```

This is what I need precisely! Let's pull the trigger.
```
(deck@steamdeck ~)$ steam-http-loader https://camo.githubusercontent.com/c0a7bbc3a17e2aecfc514ea0397d1c3241dd4676ac0a2506fdb9657fb36aa6e6/68747470733a2f2f692e7974696d672e636f6d2f76692f524e6f48635745387462512f6d617872657364656661756c742e6a7067
```

This works both in Gaming mode and Desktop mode.

I believe the Chromium Embbeded Framework (CEF) that used by Steam for its browser engine is capable to play video file as well. You may want to prepare the jumpscare content properly by using video with sound. Just make sure the file size is small so it could be loaded fast.

My first and last victim is my wife. Sorry, dear.

