---
layout: post
title:  "I Spilled Coffee on My Mechanical Keyboard"
date:   2020-05-05 00:00:00 +0700
categories: mechanical keyboard, keyboard, repair, diy
---

My main keyboard was a <a href="http://www.vortexgear.tw/vortex2_2.asp?kind=47&kind2=224&kind3=&kind4=1033">Vortex Core</a>. After my wife keep complaining about the noises (now you know it's the blue one), I bought a Vortex Tab 75 with Cherry brown switches (she approved the new typing sounds). It's just a few weeks before I made an accidental disaster to the keyboard.

I was programming on some stuff while snacking <a href="https://www.google.com/search?q=dua%20kelinci%20mixnut%20toples">Dua Kelinci</a> peanuts. The peanuts are in a small plastic jar on the left of my keyboard. Also, there is a cup of coffee near there. I eat the peanuts by pouring them to my hand, then forwarded the peanuts to my mouth. These actions were done above the keyboard. Then I unconsciously grab the coffee cup and do the same as I thought it's the peanut jar. So I just literally poured my hand with coffee and the fluid flood the keyboard!

What I've done to solve this:

### Go to forums and read some advices

Most of the sources I found were from https://www.reddit.com/r/mechanicalkeyboard/.

### Prepare some stuff

- Screwdriver
- Key puller
- Solder
- Vacuum desoldering pump
- Tin
- Alcohol
- Cotton bud


### Unplug it and/or turn it off

I grab the keyboard fast, unplugged the cable + batteries, then turned it upside down. Even if the keyboard uses a low voltage to operate, circuit short can causes a problem.

### Pull all the keycaps

You need key puller. Full them all carefully.

<img src="/assets/spilled-keyboard.jpg">

### Take apart and dried the board in a night

I put the board on top of a fan and left it for a night to make sure there is no fluid left behind.

<img src="/assets/spilled-keyboard-2.jpg">

### Test it

The next morning, I plugged the keyboard into my computer and tested it. All the keys were worked as intended but some switches went bad. They felt terrible on my fingers. It may be easy for me if I poured plain water instead of coffee. My coffee contained a bit of sugar and it makes a big difference in how the switches feel. Sugar can make your switches sticky. I need to clean up the dried coffee fluid that remains in the switches' housing. The only way to do this is to desolder the switches first.

I identified the bad switches and mark them with a permanent marker then unplugged the keyboard.

### Desolder the bad switches

I carefully desolder the bad switches. A vacuum desoldering pump is a must here. You can't do desoldering properly without this tool. I think this is the hardest part.

<img src="/assets/spilled-keyboard-3.jpg">

### Take apart the switches and clean it with alcohol

I took apart each switch and cleaned it with a small amount of alcohol using the cotton bud. I reassembled the switches' housing and test it immediately to make sure it does not feel sticky again.

<img src="/assets/spilled-keyboard-4.jpg">
<img src="/assets/spilled-keyboard-5.jpg">

### Resolder

I resolder the switches back to the board. For me, resoldering is far much easy than desoldering.

<img src="/assets/spilled-keyboard-6.jpg">

### Test it

I tested all the keys again but with keycap on. You need to test it using keycap to get the accurate feel of the switches. All my switches turned good except the K key switch. It still a bit sticky but it's ok for me.

<img src="/assets/spilled-keyboard-7.jpg">

### Reassembly

I reassembled the keyboard to its original shape. All was well.

<img src="/assets/spilled-keyboard-9.jpg">

## UPDATE: 20200607

Turned out that the sticky K key became worse and it's not ok for me because I used it intensively to navigate in Vim. Instead of fixing this particular one, I decided to replace the entire letter keys with Gateron brown switches. Gateron switches feel smoother than Cherry MX although I can't overcome the difference while fast typing.

Here is a time-lapse video of me replacing the switches,

<iframe width="100%" height="480" src="https://www.youtube-nocookie.com/embed/2FGlTpuUyvc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
