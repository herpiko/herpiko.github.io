---
layout: post
title:  "Vim's Native Multiple Cursors Feature"
date:   2020-05-05 00:00:00 +0700
categories: tech, machine learning
---

Sublime Text was my favourite text editor, I've been following it since its early days. The feature I most liked and can't live without is the multiple cursors selection. Sublime Text lets you to select and edit string on multiple place at once based on pattern that you defined. I think it was a pain killer feature. The thing where I always want to go back to Vim. The day I found this repository (https://github.com/terryma/vim-multiple-cursors), I switched back to Vim. `vim-multiple-cursors` is easy and intuitive as Sublime Text's althought it has a bit differential. But nowdays `vim-multiple-cursors` has been broken, especially on the latest Vim release.

I were wondering there is a way to do the same things with Vim's internal command. Tada yada thanks to https://vim.fandom.com/wiki/Vim_Tips_Wiki. Not very intuitive as Sublime Text's or `vim-multiple-cursors` but it works as intended. Actually it is not a **multiple cursors** thing, still and all it achieved the same as multiple cursors feature. It's more like a multiple replay.

### Vertical multiple replay
<script id="asciicast-9DU2lx30Nttte0ogeMZ5K95jD" src="https://asciinema.org/a/9DU2lx30Nttte0ogeMZ5K95jD.js" async></script> 
- `Ctrl+v` to vertical select your lines, use `jj` to expand your selection.
- Hit `Shift+i` then type the string you want to insert.
- Pres `Escape`, the inserted text will be appears on all lines.

### Multiple replay by pattern
<script id="asciicast-cuXZtaASt72IBDk6zK13iGgrS" src="https://asciinema.org/a/cuXZtaASt72IBDk6zK13iGgrS.js" async></script>
- Search your string with `/stringyouwanttomark`
- Type `cgn` then type the new string.
- Hit `Ctrl-c` to exit to visual mode.
- Press `.` to replay it to the next one.


Update:

This repo showed up in `vim-multiple-cursors`'s issues (https://github.com/mg979/vim-visual-multi) and it works good too but I think I do stay on native Vim command so I don't have to rely on my dotfiles for this feature.
