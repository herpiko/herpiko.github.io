---
layout: post
title:  "Quarantine PC Build"
date:   2020-04-10 00:00:00 +0700
categories: personal computer, pc, build
---


My wife has an old wish: a gaming platform to play both old games (e.g. Heroes of Annihilated Empires) and new games (e.g. The Witcher 3). I’ve  setup a trial version VMWare Fusion on her Macbook Air to let her playing HoAE there but that old game does not run smoothly under VMWare DirectX 11 driver. Our Nintendo 3DS is not with us for now and our old Xbox 360 has been dead for a while (but the controllers still run well). On the other hand, self-quarantine easily gets us bored.

We already considered to buy a new gaming console but after some researches we reached a conclusion. It's still cheaper to gaming on PC platfrom instead of console.

So I thought about building a budget PC gaming for her during this coronavirus quarantine period. PC Master Race subreddit call this Quarantine Build. The PC is mainly for my wife but sometimes I can use it. My goals are:

- The budget should be less than 8 million rupiahs.
- It should be able to play recent games (low setting is no problem for us)
- It can support my job occasionally (huge RAM capacity, faster storage, minimum of 4 core processors for compiling purpose).

Let’s dive into the detail.

### CPU and GPU: Ryzen 5 3400G with Radeon RX Vega 11 Graphics

<img src="/assets/ryzen53400g.jpg" width="450">

After doing research on CPU and GPU, I decided to pick a Ryzen processor with iGPU. Radeon name still sounds great for me. If I bought a discrete GPU it'll add at least another 4 millions to the budget. I'll not make it. The CPU has 4 cores with 8 threads and 3.7Ghz base frequency. Some reviews said that this iGPU can run The Witcher 3 smoothly on low or medium settings. Should be ok for her. The CPU package provides stock CPU cooler named Wraith Spire.

Its price was almost at the same level as Ryzen 5 2500X (same core, thread and frequency), but with integrated GPU. The CPU has a 3 years warranty from EMD.

### Motherboard: ASUS Prime A320M-K

<img src="/assets/quarantine_build_motherboard.jpg" width="450">

ASUS said this motherboard has an overclocking feature. It’s conflicted with the fact that A320 chipset is not capable of OC. The recommended motherboards for 4500 series Ryzen are the A450, A550, and the X series chipsets. Some motherboard vendor updated their A320 motherboard to support the recent processors. This is a risky bet. If I got the outdated BIOS version, my build will not turn on correctly and show no display at all. At worst, I’ll have to:

- find another old processor like Atlhon 200GE or
- submit a request to AMD to send me a bootkit (also an Athlon 200GE) or
- return the motherboard to the retailer and ask them to update the BIOS first.

The last one is not so convincing. I took the bet anyway and be prepared for bad luck.

The motherboard has a 3 years warranty as well.

### RAM: 32GB V-Gen Platinum DDR 4 2666Mhz (2x16GB)

<img src="/assets/quarantine_build_ram.jpg" width="450">

I want to play with k8s and be able to open hundreds of tabs on Firefox. My original plan is to buy a single 16GB RAM then add another 16GB several month later. But after seeing rupiah position going bad recently, I decided to pick 2 sticks at once instead. It will be 32GB RAM with dual channel activated. The processor supports up to 2933MHz and the motherboard supports it up to 3200Mhz. I see no cheap 2933Mhz at the market place and grab a pair of 2666Mhz RAM.

My first choice is the Klevv Bolt series but they are out of stocks everywhere. I got VGEN instead. This V-Gen RAM has no heatsink, just like the Klevv Value series. At least it’s black, matched with the mainboard.

### Storage: Intel SSD 660P 512GB NVMe 2280 PCIe Gen 3 x4

<img src="/assets/quarantine_build_nvme.jpg" width="450">

My portable computer (X1 Carbon Gen 3) is fast enough with its NVME storage and I want NMVE SSD too in this build. At first Samsung EVO 970 is on my list but then this will not be a budget build. So I choose Intel 660p series for half of the price of Samsung EVO 970.

### Power Supply Unit

<img src="/assets/quarantine_build_psu.jpg" width="450">

I do care about PSU after a plurker gave a piece of advice so I pick a Cooler Master MWE 450W, an 80 plus PSU. Cheap enough but it has decent cable socket configuration, like 8 pins cable to power CPU and could handle most of the midrange graphic cards for future upgrade. The cables are in black color. I’ve no intent for overclocking, 450 watts should be enough.

### Case: Micro ATX aigo darkFlash DLM22 Titanium

<img src="/assets/quarantine_build_case.jpg" width="450">

It’s a cheap minimalist but elegant case. Until now I don’t know if PC case has evolved to having the PSU on the bottom instead of the top.

### Fans

Cheap fans with blue LED. I expected a modern fan with 3 pins small socket but I got otherwise. But that’s not a problem since the PSU has plenty of standard 4 pins unused.

### Precaution on coronavirus

I cleaned then quarantined all the arrived packages for hours before opening them.

### Building

Just like the old days, PC building is always fun.

<img src="/assets/quarantine_build_boot_up.png" width="450">

After some digging, it turned out that this motherboard has X370 chipset instead of A320! No wonder if it has overclocking feature in the BIOS. The motherboard recognizes the Ryzen 5 3400G with no issue.

<img src="/assets/quarantine_build_bios.jpg" width="450">

The bad part is the motherboard has some defects: it does not recognize the LAN port and the third PCIe lane. After all this coronavirus is over, I’ll look after the warranty.

<img src="/assets/quarantine_build_finished.jpg" width="450">

Honestly, I was surprised by how the PC component has evolved since I was not following it for years.

### Future Upgrade Plan

The motherboard has wide support for new Ryzen CPUs. My plan is after a year or more, I want to upgrade the CPU to non-APU with eight cores or more (maybe a zen 3 generation) and add a good graphic card (a GPU that equals with NVidia 1660 Ti or 2060).

### PC Building in the past

I used to be a PC person. My first PC (actually it's my dad's PC) was an Intel 486. In 2015 I gave up my PC to my friend (a Pentium IV, 3.06GHz with hyperthreading and 4GB RAM) then moved to a bigger city. Since then my life depends on a portable computer/laptop. My PC was considered old at that time. PSU cables used to be yellow and red. PSU was placed on the top instead of the bottom. Cable management? There was no room on the back of the motherboard, you supposed to ties the cable manually. Even the best cable management was not neat enough for today’s standard. Boards are green, so are the RAM sticks. Graphic cards were used to be fanless. If it has a fan, it’s a small fan. Fans are loud compared to today’s fans that have a modern bearing. I have a small LCD screen but I preferred the CRT screen. Long live the CRT. PC cases were strong and heavy. It has front slots for CD/DVD ROMs and a floppy disk. BIOS user interface used to be plain just like the ncursed based UI, blue and white pixels.

<img src="/assets/pc_build_old_2.png" width="450">

I used to play with various operating systems, included Hackintosh.

<img src="/assets/pc_build_old_3.png" width="450">

The motherboard was placed on the table just like that.

<img src="/assets/pc_build_old_1.png" width="450">

Once I got a case, there was an apple sticker as I was dreaming of owning a Mac computer.

### Conclusion

If you're planning to build a PC, take a look at https://pcpartpicker.com/. It'll help you to find the compatibility information and also the estimated watt needed for your build. Do not forget take some precautions while handling the packages and components. Wash your hand frequently.

### Update: 2020/04/19

It was an early birthday present from my wife. It's a bit silly to have two-but-not-scalable GPUs in one system but I'm happy with them. The Ryzen GPU can be used as spare if this discrete GPU gone wrong. At the time of this writing, 1660Ti is the latest GTX of NVidia. It has Turing architecture but without ray tracing feature (RTX). Any AAA games run well.

### Update: 2020/04/29

#### My Dream PC

So I thought about what if I got a huge amount of cash to build my dream PC. Then it should be consist of:

- Motherboard: ASUS ROG Strix AMD AM4 X570 Mini-ITX
- CPU: Ryzen 9 3950X (3.5 GHz,105 Watt,64M L3 Cache,16 Cores)
- GPU: AMD Radeon 5700 XT
- HSF: Noctua NH-D15
- RAM: G.Skill Trident Z RGB 32GB (16gb x 2) 3200mhz
- Storage 1: Samsung 970 EVO NVMe M.2 SSD 500GB
- Storage 2: Samsung 860 Pro 2TB x 2 (RAID 1/Mirroring)
- PSU: Corsair CX650M 650 Watt 80+ Bronze
- Monitor: Dell UltraSharp 25 inch U2518D x 2 
- Keyboard: Ultimate Hacking Keyboard Blue Switch with trackpad module.
- Mouse: Logitech G304
- Case: NZXT H200 - Mini-ITX
