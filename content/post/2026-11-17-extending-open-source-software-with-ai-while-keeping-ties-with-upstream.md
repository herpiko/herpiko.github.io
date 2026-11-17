---
title: "Extending Open Source Software with AI While Keeping Ties with Upstream"
date: 2026-11-17 00:00:00Z
categories:
  - Tech
tags:
  - AI
  - Linux
---

While maintaining BlankOn Linux for years, I used to patch upstream software in favor of:

1. Bug fixes
2. Rebranding
3. Extending some features / functionalities

Bug fixes are usually already handled by our upstream (Debian Sid), and we rarely patch the software by ourselves. Rebranding tends to be easy too because the strings that need to be rebranded usually stay the same in the same file / line number for a long time. Both are maintained via Debian patches using quilt. But extending features / functionalities is another level of effort.

These patching efforts are important to deliver the best experience for our users.

However, we tend not to send the patches upstream for several reasons, such as:

* It may no longer be maintained (which happened with LiveCaptions, which I will tell you about later).
* Our patches do not fit into upstream's goals.

Now, in the AI era, we have another reason: upstream may not accept AI-generated patches easily. Open source projects have diverse stances against AI, from the most loosening to the most strict. The spectrum is quite interesting.

My personal stance here is that I still want to explore the capabilities of AI, especially the SOTA ones, but on the other side, I want to respect upstreams. I would not do something like forking Asahi Linux and then badmouthing the maintainer because they wouldn't accept AI contributions. I think that's not how open source works, or at least how it used to work. AI is now challenging many aspects of open source culture and traditions, and we can see this in many clashes, conflicts, and dramas around the internet.

These patching efforts are important to deliver the best experience for our users.

Then I forked LiveCaptions because it had been unmaintained for 2 years. LiveCaptions is very essential to my daily life because I am hard of hearing. On macOS, I depend on the Live Caption feature from macOS, but on my Linux laptop, I need an equivalent.

The default model from LiveCaptions is not good enough, and I want to hook up / try some other models that have better accuracy and can detect Bahasa Indonesia as well. I also want to add more control over how it works, and to show an indicator of voices / sound frequency so I would know if someone is speaking and I may expect some transcription text to be shown in the window.

{{< figure src="/images/livecaptions-leap-16-1-release-party.webp" caption="My patched version of LiveCaptions performing at the hybrid openSUSE Leap 16.1 Release Party held in Yogyakarta." >}}

But what if LiveCaptions were well maintained? Would they receive my AI-generated patches? Would they be too tired to handle too many PRs from PR hunters?

The new case comes from BlankOn Linux itself. When I was attempting GNOME translation work and stumbled upon Bazaar, I found it so perfect for replacing GNOME Software. The only shortfall is that it does not handle distro package management. It only works with Flathub.

{{< figure src="/images/bazaar-blankon-sinambung.webp" caption="Bazaar on BlankOn Linux Sinambung, simple yet powerful." >}}

Adding that functionality would not be a small patch that could be reviewed, but rather some hundred lines of code, and of course, at that time and with my current resources (effort, time, and money), it would be AI-generated code. I am not sure if it would align with the upstream goal (to be a store for Flathub only). Even if I could convince the maintainers to grow it into something like GNOME Software, I am not sure they would accept my AI-generated code. Whatever the reason, I will try to respect upstream.

So, before entering the prompt, I made an experimental plan that might be reusable for future projects / patches. The AI would do the patches, and the process would be reproducible. It seems that this does not make sense because LLMs are actually black boxes, and you may get different results on the next retry.

That's where I came to construct the harness for AI patching. I prepared a directory that could be treated as "patches". It contains 4 files and one directory:

### API.md

This file will specify the upstream metadata, such as the repository URL, version, dependencies used by the software, and the features and / or internal APIs that the patches interact with or modify.

Anything related to the API will be specified in this file.

When we reapply the patch over a new version of the upstream codebase, the API changes will be checked against the notes we have in this file to ensure stability and let the AI know what to do regarding the changes from the upstream.

### DIFF.md

This file will specify which files and line numbers were changed to support the extension of features / functionality that we want.

This file may have references to files under the `patches` directory.

### TEST.md

This one will define automated tests to make sure that the changes we make here can be tested. This is important to reduce the risk of regression.

### PLAN.md

This is where we glue everything together, including our goal statements regarding the upstream codebase.

### patches directory

This directory contains our patches, usually files that could be reused to support the work of AI, such as code snippets of the patches or test files.

## Important Things To Consider

If we use the patched version of the software for ourselves only, we don't need to worry about anything upstream. But if we happen to redistribute the software to other people, we need to consider a few things:

1. Rebranding - Rebranding is not a bad thing. It's a step to diversify the identity of the software because it has been changed a lot. Not doing any rebranding will make people think that the features we added actually come from upstream, which is very misleading.
2. Bug report - We need to make a statement or be explicit about where people can report their bug findings. Not doing so will redirect every report (including the ones related to our patches) to upstream, which will cause trouble for the upstream maintainers.
3. Attribution - We should credit the upstream properly, following the license (if any).

## Introducing Warsi (Experimental)

Warsi is a modified Bazaar that support Debian APT package management. The name come from "Warung Aplikasi", a store-like app that developed by cengkaruk and tuanpembual circa 2014-2015.

You can install it from our development repository here: https://arsip-dev.blankonlinux.id/sinambung/pool/main/w/warsi/

- The AI patches: https://github.com/blankOn/bazaar-ai-patches
- Bazaar patched code: https://github.com/blankOn/bazaar
- Debian packagin specification: https://github.com/blankon-packages/bazaar

{{< figure src="/images/warsi-library-system-updates.webp" caption="Warsi was checking the updates of the Debian APT package management">}}

{{< figure src="/images/warsi-install-deb-package.webp" caption="Warsi was performing Deb installer feature">}}

## Benchmark

If the patches can survive multiple re-implementations using different AI models with high score of consistencies, then I will consider this experiment to be going well and I may deliver Warsi to the next BlankOn Linux Sinambung updates.

Benchmark plan and result TO BE WRITTEN.
