---
layout: post
title: git checkout --detach
date: 2015-04-10 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Coba perhatikan alur git berikut ini :

1. `git fetch upstream`
2. `git checkout upstream/master`
3. `hack hack hack`
4. `git add --all`
5. `git commit -m "first hack"`
6. `git checkout upstream/other branch`
7. `hack hack hack`

Nah, apakah bisa balik ke "first hack"? Bisa!

Jadi selama ini saya sering kecolongan setelah langkah ke 6, mengira commit "first hack" sudah musnah dan akhirnya mengetik ulang. Tapi sebenarnya tidak.

Kuncinya, kita belum kehilangan *command history* di *shell* saat commit. *Scroll* ke atas dan cari hash commit-nya. Biasanya tertulis persis setelah perintah commit dijalankan. Misal :

`[detached HEAD 6c630a4] first hack`

Kemudian checkout dengan opsi --detach

`git checkout --detach 6c630a4`

Tada! Jangan lupa diamankan ke *branch* baru.

Terima kasih untuk pak @dotovr. Dan selamat ulang tahun ke sepuluh untuk `git`-nya pak Linus. Panjang umur!

