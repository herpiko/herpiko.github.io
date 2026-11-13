---
title: "A Steam Machine Alternative: M920X + i7 9700 + RX 7400 Low Profile"
date: 2026-07-05 00:00:00Z
slug: a-steam-machine-alternative-m920x-i7-9700-rx-7400-low-profile
categories:
  - Tech
tags:
  - Linux
  - Gaming
---

Just want to share my journey of building a Steam Machine for the family. My wife and I have invested heavily in Steam games over the past six years, so we decided it was finally time to build a couch "console". Some people seem to be building their own Steam Machine lately, so here's ours.

![](/images/family-steam-machine-1.webp)

We already had the hardware: a M920x. The missing piece was the GPU. The obvious choices were an NVIDIA RTX 3050 Low Profile or an AMD RX 6400/6500 Low Profile. Then this RX 7400 suddenly showed up on marketplace, and I grabbed it fast for $197 in my country.

In Windows 11, it turns out it can not run AAA games like FC26 and Assassin's Creed Origins. The system would suddenly shut down after launching them. My initial guess was that the 135 W power adapter was the culprit. The CPU is an i7-9700, which can draw well over 100 W on its own peak.

Surprisingly, the system handled games like Stray without any issues. That made me think the GPU wasn't the problem. So I decided to order a 230 W power adapter to see if the system could finally handle more demanding AAA titles without shutting down.

Unfortunately, it still crashed even with the 230 watt power adapter. At that point, I felt incredibly stupid. I had just spent more money, only to end up with exactly the same problem.

The only difference was that the game lasted a little longer before it crashed. Then, I decided to start logging the system with HWiNFO to see exactly what was happening with the power consumption. We can see that 230 W PSU should be able to handle this.

![](/images/family-steam-machine-3.png)

I was still running Windows 11 because I wanted to play FC26 too. So I wiped the system and installed Bazzite instead. And the crashes were gone. It turns out Windows or the AMD Windows driver was the cause. I don't know which one is the real culprit.

![](/images/family-steam-machine-2.webp)

Now I can play HZD smoothly without issues.

![](/images/family-steam-machine-4.webp)

As for FC26, I'll just stream it from my gaming PC. The original goal was to build a couch console for the family. Since we don't have HDMI-CEC support, I use ADB commands to control the TV directly from the console instead.

The final spec:

- Lenovo Tiny M920X with copper cooling
- Intel i7 9700 (non-T)
- AMD RX 7400 low profile
- 1TB SSD
- 16GB RAM
- 230 watt Lenovo adapter
- OS: Bazzite

It runs all games at stable 1080p 60fps, the graphics configuration is depending on the games.

The only missing piece now is waking the system with just the controller. Once that's working, the whole experience will feel just like a real console. But that's a project for another tinkering session. :D

This post was originally shared on [r/sffpc](https://www.reddit.com/r/sffpc/comments/1unzq6j/).
