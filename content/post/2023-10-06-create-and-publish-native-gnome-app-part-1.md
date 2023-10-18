---
title: Create Your First Native GNOME App and Publish to Ubuntu Software - Part 1
date:   2023-07-23 00:00:00Z
categories:
  - Tech
tags:
  - GNOME
---

# Introduction

This blog series are intended to be a follow up of my tech talk in UbuCon Asia 2023 (LOUCA 2023). The articles will be divided into 4 parts:

- Preparation
- Ideation
- Development
- Publish

If you happen to attend my talk in UbuCon Asia 2023, then you may expect that I repeat the same thing here. Don't worry, I've added a lot more contexts in my writing in detailed manner.

# Preparation

Before you starting, you need to install few softwares. Some of them are ready to use after install, some other requires adjustment to make it work. At some point you will have to pick a choice. This tutorial is using Ubuntu 22.04 LTS. If you are using different system, please adjust accordingly.

## 1. FlatPak

Supposedly, this blog series will ended with packaging the app into a Snap package then publishing it to Snapcraft, but Flatpak become important here to support your development tool chain. To install Flatpak in Ubuntu, simply run,

```bash
sudo apt install flatpak
```

Then restart your computer.

## 2. GNOME Builder

GNOME Builder is an IDE (Integrated Development Environment) for crafting software in Linux environment. Unlike other advanced IDE like Android Studio, Eclipse, JetBrains, etc, GNOME Builder is a lot simpler. So simple that, if you have experience with these advanced IDE, you may found that GNOME Builder is not satisfying since it has less features. But fear not, the simplicity of the GNOME Builder will not hold you back from writing a beautiful GNOME native app.

You can install GNOME Builder from Ubuntu repository or Flatpak but it's recommended to install from Ubuntu repository (version 42) because it's compatible with the latest version of Cambalache.

```bash
sudo apt install gnome-builder
```



### The target system of the GNOME Builder

By default, GNOME Builder will target your host system. If your system is using GNOME 40, then it will target GNOME 40 as well and using the existing SDK and Platform. If you want to target more modern system, let's say 45, then this is where Flatpak come in handy. You can just install a different target here. Let's say that you want to target GNOME 43, so be it.

```bash
flatpak install org.gnome.Platform/x86_64/43
flatpak install org.gnome.Sdk/x86_64/43
```

The GNOME 43 SDK and Platform will appear in the GNOME Builder build target option.

## 3. The UI Designer: Glade vs Cambalache

There are two ways to build UI for GNOME application: 1.) By using the GTK binding library to invoke the UI component, 2.) By using a separate XML file to define the UI components. The first option is okay to create a simple GUI app. But if you plan to create an app that is not so simple, the XML is the way. An UI designer software will help us to work with this XML file(s).

Glade is the most rock-solid UI designer for GTK. Previously I always using Glade but unfortunately, Glade is not actively maintained anymore. It only supports GTK3 whereas the modern systems nowadays are already move on to GTK4.

On the other hand, Cambalache is the successor of Glade by the same author. It support GTK4 but based on my experience, the feature is not that rich yet and a bit buggy.

Then why GNOME Builder developer has not developing an integrated UI designer built in? They already have this thought, we have to patiently wait and support them.

The last choice is that you have to write the XML file manually by hand.

My recommendation is to use the latest version of Cambalache. If it fails to meet your need, then you have to modify the XML file manually. At least, Cambalache will help you to design the base layout and as a reference of the supported GTK components.

You can install Cambalache through Flatpak:

```bash
flatpak install flathub ar.xjuan.Cambalache
```

## 4. Snapcraft

Snap is a package manager from Cannonical and is already built in Ubuntu distribution. To publish app in Snap, you will need another software: Snapcraft. Snapcarft will help you to build and upload your Snap package to Snapcraft.io, and eventulally will be published there.

You can install Snapcraft by using this command,

```bash
sudo snap install snapcraft --classic
```

Snapcraft depends itself on LXD or MultiPass. Both of them are container technologies, like Docker. Snapcarft will build your app in the container and make sure it's an isolated environment. I suggest you to install LXD instead because it's more simple.

```bash
snap install lxd --channel=latest/stable
```

In my first attempt on building the Snap package, it fail because the container could not connect to the internet. If that happen to you, you may need to do a workaround:

```bash
sudo ufw allow in on lxdbr0
sudo ufw route allow in on lxdbr0
sudo ufw route allow out on lxdbr0

lxc network set lxdbr0 ipv6.firewall false
lxc network set lxdbr0 ipv4.firewall false

sudo iptables -I DOCKER-USER -j ACCEPT
```

Then make sure that your LXC container could connect to the internet by run a bare container, sneak into it then ping some domain. If you got some reply, then you are good to go.


## 5. Your favourite programming language*

GNOME Builder support a lot of programming languages. But in the context of creating GUI app, it's recommended to use a programming language that as good support on the GTK binding. The most supported ones are : C, Python, JS, Rust. In this tutorial, I will be using Python because it's the easiest among others and I want this blog series to be lowering be barrier for those who want to learn how to create apps. If you are using different programming language than the one I used here, don't worry. As long as we are using the same SDK version, the function name from the GTK binding library is not that different.

----

# But Why Snap?

I am not in a position to start a fire nor have intention to do that. I may compare them based on my experience but my goal is not to endorsing one. To be fair, I'll write the tutorial for publising app on Flathub as well.

Few of my friends were asking the same question like "Are you serious?" or "Why do you want ot talk about Snap despite its weakness, security flaw or propretary code?". I would not argue with them. Their opinion and argument are most likely technicaly correct.

But if you have a different goal, like "I want to reach as many user as possible" or "I want a lot of people to get benefit from my app", then Snap is worth a shot. Let's think about this. Maybe a mom out there is an Ubuntu user. She is happy with her Ubuntu computer. The thing is, she is not a technology savvy like us. She does not aware about Snap versus Flatpak or open source development like we used to be know. What she know is if she want to use certaint app, she simply open the Ubuntu Software then type the keywoard of the app that she want to use. As simple as that. This beautiful mom is deserved to get access to your app.

Audience matters. Equality matters. Diversity matters. The competition that happen here, Flatpak vs Snap, is good for us. The way Snap integrated to Ubuntu Software, in one of the most popular Linux distribution, is already a major factor on acquiring your users.

Actually, my original reason to include Snap in my talk is to increase the chance of my subbmission being approved by the UbuCon commitee. But along the way when I preparing my talk and playing around with Snapcraft, I learned a lot about Snap and admit that Snap is also playing an important role in the Linux ecosystem and community.

See you in <a href="/post/2023/07/23/create-your-first-native-gnome-app-and-publish-to-ubuntu-software-part-2/">the next part!</a>
