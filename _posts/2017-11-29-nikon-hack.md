---
layout: post
title: Small Hack to Fix DSLR Nikon D5000 Shutter Issue
date: 2017-11-29 00:01:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Disclaimer : any actions or activities that related to the content of this post is solely your own responsibility.

I've heard a common issue among Nikon photographers with their DSLR (D90, D80, D5000) and this happened to mine too : the shutter become weak and could not control the diafragma properly. In fact, this is a common issue on DSLR camera generally. The power to control moving parts has a limited lifespan.  Mine is a Nikon D5000 which was purchased in 2011. I've loaned the camera frequently to anyone who want to learn photography, for free. The consequence is I can not take care of it the way I want. Anytime the camera being returned, the shutter count always increased drastically. Then the shutter became weak. Unfortunately, the camera repair shop said that the spare part for this issue is hard to find, especially for D5000. They said they'll contact me if the thing became available, but they didn't.

The camera was supposed to be unusable three years ago, but I fixed it instead. I learned how the camera works. Which part that makes the most load for the shutter? Take a photograph with the full apperture, the result always darker as the camera can not push the diafragma lever accurately. I took the lens off and push the lever manually by finger.  It feels heavy. Lets expand the camera lifespan.

What you need :

- A lens with manual control of aperture.

Your camera will :

- not works with metering feature. Scary? No, it's fun. It'll push yourself to get used on guessing the camera settings (shutter speed, ISO, aperture) accurately, depending on current environment and lighting.
- not works with any mode unless `M` (manual).
- generates image files with empty apperture value in the EXIF metadata.

Still tolerable, isn't?

### Remove the diafragma lever

This is the hard part of the hack and need to be done carefully. Camera lens is a complex product. You need to take apart the lens, rembering the sequence of your actions, remove the lever, then assemble it again according the sequence. The idea is to decrease the load of shutter. We take care the apperture setting manually and lets the shutter handle the other moving parts like mirror and sensor scene. It's also important to disassemble your lens in a quiet room with no moving wind from AC or fan. We need to prevent the dust and you may use a masker too.

<img src="/assets/nikon-hack-0.jpg">

<img src="/assets/nikon-hack-1.jpg">

### Cover the lens connector on camera body with a tape.

You need to measure the size of the connector and cut a small tape with the same size. Use a tape with good adhesiveness. This need to be done because we need to make the camera thinks that the attached lens is an old lens with no connector and can be used only on `M` mode. If your manual lens has no connector, then there is no need to do this.

<img src="/assets/nikon-hack-2.jpg">


### Change the focusing screen (optional)

I've no intend to use automatic focus anymore. The camera has included a focusing indicator in the viewfinder, but I need another guide to help focusing. You can search on the online shop with keyword `focusing screen`. Find the one that has focusing indicator on the screen. It may looks old-fashioned, but it still cool and greatly usable.

<img src="/assets/nikon-hack-3.jpg">

### How to use

Set your camera to `A` mode. In this mode, a focusing indicator will be appeared in viewfinder to help you focusing on the object.

<img src="/assets/nikon-hack-4.jpg">

Your camera will noticed that the `Lens not attached`. Don't worry since it has been expected. We have blocked the lens connector, allright?

<img src="/assets/nikon-hack-5.jpg">

If the indicator doesn't seem balanced, adjust the focus until it get balanced.

<img src="/assets/nikon-hack-6.jpg">

<img src="/assets/nikon-hack-7.jpg">

You may change other settings like shutter speed, ISO, etc. Once the object get focused, change the mode quickly to `M` and take the picture.

<img src="/assets/nikon-hack-8.jpg">

The focusing indicator will disappeared on `M` mode. That is why you need to switch back to other mode if you want to take another picture, just to using the focusing indicator feature.

It's simple, three steps to take a picture :

- Turn to `A` mode
- Set the camera setting and focusing the object with the help of focusing indicator
- Once it get focused, turn to `M` mode quickly and take the picture.

