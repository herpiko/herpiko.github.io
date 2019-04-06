---
layout: post
title:  "Rewriting The IRGSH"
date:   2019-04-05 00:00:00 +0700
categories: irgsh, blankon, project, open source, linux
---

The reasons behind my decision to rewrite IRGSH are ranged from personal motivation to BlankOn project direction.

After Uluwatu released, a hard disk died in one of BlankOn development server. Unfortunately, the machine is the important one. The hard disk contains IRGSH, the backbone of BlankOn Linux development. The fortunate side is this happened after Uluwatu released. A year before this incident, Estu and I have tried to put IRGSH into production from scratch and it is really hard to do so. IRGSH was written in Python 2.6.x and it depends on some old and deprecated libraries. Even one of them (in a specific version, respectively) is no longer exist on the internet. A real dependency hell. It's hard to deploy IRGSH in a modern operating system and it keeps alynne.blankonlinux.or.id from a system upgrade. The IRGSH was also very modular but combining them into a working distributed cluster takes time and quite steep learning curve. We still need to prepare a lot of things before doing that. Pbuilder needs to be configured and setup. Which also true for the repository. No easy way. Even, there is a dedicated page on our wiki for "IRGSH troubleshooting".

I want to make IRGSH simpler and easier than this. I want it to be test-proof, robust and has the clear error message. I want to make it a development ready in one enter key strike. Surely, I can't achieve these by patching the existing codebase. I picked Golang (and maybe Rust for the CLI component) for its portable compiled binary. A running IRGSH should depend only on basic utility tools in Linux, not to some library files that may be deprecated in the near future. All the new IRGSH components now gathered in one repository for easier maintenance but it may be split if it got too big and complex.

IRGSH has serve us for years. The oldest message that mentions IRGSH in our mailing list is dated back in 2008, the year I joined the community. It might have been written earlier than that. At that time, I have no idea about how a GNU/Linux distribution created and maintained. My active contribution started in 2012 as an artwork team member and I started to obtaining the knowledge about that, bit by bit. I continued to patch and rewrite the frontend of the BlankOn installer in 2015 (although the result was far from perfect) then I knew the inner working of how a GNU/Linux operating system installed to a filesystem. When IRGSH was completely broke in the early days of Uluwatu development, Estu and tried to learn about the IRGSH components, how it works and how to spin it up back to production then we knew how a package build and realized how important the IRGSH is for us. Thanks to the BlankOn hackers who authored IRGSH. I also contributed into the investigation of an incident related to Tambora repository back in 2017 (despite we still don't know why it happened and the full recovery is not successfully achieved) then I knew how a Debian repository works, how to maintain it and how to break it (you shall not!). It’s a long journey and now I have got a partial idea about how BlankOn Linux created and maintained.

How about the documentation? It exists but not complete. If someone visited the BlankOn wiki, he/she still doesn’t know how to create a derived distribution from Debian from A to Z.

Writing code is fun, but writing documentation is not fun and pretty hard.

I want everyone who uses the new IRGSH can learn from the tool itself. The tool should not hide the learning process. To achieve such goal, while rewriting the IRGSH, the documentation must be written in a detailed manner.

That is why I designed the new IRGSH log is not only printed the verbose log from the respective task, but also the description/explanation of what it is doing and what to be expected from it. Apart from IRGSH's own documentation, complete documentation will also be committed to BlankOn Dev wiki. So, the fear of the team losing their learning process by using the new IRGSH is not relevant.

What to expect from this new IRGSH? By using the new IRGSH, I hope the BlankOn team could shift their focus to other than the complexity of creating and maintaining a GNU/Linux distribution. We supposed to have more fun and quality time on our package quality, R & D, and community development.

Why not using the existing solution for BlankOn, like Open Build Service? The purpose of IRGSH is almost similar to OBS, but we are not that generic and we focus on one repository to support the ISO image build process. OBS is for distributing software to various platforms and architectures. IRGSH is for automating the package build for one distribution.

Wait, the definition has changed since I'm planning to include PabrikCD as IRGSH component. IRGSH now is an all-in-one tool to create and maintain Debian-derived GNU/Linux distribution: from packaging to a repository, from ISO build to release management. Please check here for the code repository, https://github.com/blankon/irgsh-go.

Patches, suggestions, and comments are welcome!

