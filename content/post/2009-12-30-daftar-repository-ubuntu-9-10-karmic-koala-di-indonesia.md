---
draft: true
title: "Daftar Repository Ubuntu 9.10 Karmic Koala di Indonesia"
date: 2009-12-30 14:55:57Z
categories:
  - linux-opensource
tags:
  - indonesia
  - linux
  - repo
  - repositori
  - repository
  - ubuntu
---
Bagi anda yang ingin install atau upgrade aplikasi-aplikasi ubuntu 9.10 karmic koala, berikut ini daftar repository lokal yang bisa anda manfaatkan. Atau jangan-jangan anda malah belum upgrade ke ubuntu 9.10 karmic koala ? Buruan.. segera upgrade. Seperti biasanya taruhlah salah satu list alamat repo ini ke **/etc/apt/sources.list**. Jika anda pengguna telkomflash, pilihlah repo dari telkom, akses nya mungkin bisa lebih cepat dibanding kan dengan yang lain.

**mirror.cbn.net.id (OpenIXP)**

1. deb http://ubuntu.cbn.net.id/Ubuntu karmic main restricted universe multiverse**
2. deb http://ubuntu.cbn.net.id/Ubuntu karmic-updates main restricted universe multiverse

3. deb http://ubuntu.cbn.net.id/Ubuntu karmic-security main restricted universe multiverse

4. deb http://ubuntu.cbn.net.id/Ubuntu karmic-backports main restricted universe multiverse

5. deb http://ubuntu.cbn.net.id/Ubuntu karmic-proposed main restricted universe multiverse

kambing.ui.edu (UI, Telkom, Indosat, OpenIXP, INHERENT**

1. deb http://kambing.ui.edu/ubuntu karmic main restricted universe multiverse**
2. deb http://kambing.ui.edu/ubuntu karmic-updates main restricted universe multiverse

3. deb http://kambing.ui.edu/ubuntu karmic-security main restricted universe multiverse

4. deb http://kambing.ui.edu/ubuntu karmic-backports main restricted universe multiverse

5. deb http://kambing.ui.edu/ubuntu karmic-proposed main restricted universe multiverse

www.foss-id.web.id (Telkom)**

1. deb http://dl2.foss-id.web.id/ubuntu karmic main restricted universe multiverse**
2. deb http://dl2.foss-id.web.id/ubuntu karmic-updates main restricted universe multiverse

3. deb http://dl2.foss-id.web.id/ubuntu karmic-security main restricted universe multiverse

4. deb http://dl2.foss-id.web.id/ubuntu karmic-backports main restricted universe multiverse

5. deb http://dl2.foss-id.web.id/ubuntu karmic-proposed main restricted universe multiverse

ftp.itb.ac.id (ITB, INHERENT)**

1. deb ftp://ftp.itb.ac.id/pub/ubuntu karmic main restricted universe multiverse**
2. deb ftp://ftp.itb.ac.id/pub/ubuntu karmic-updates main restricted universe multiverse

3. deb ftp://ftp.itb.ac.id/pub/ubuntu karmic-security main restricted universe multiverse

4. deb ftp://ftp.itb.ac.id/pub/ubuntu karmic-backports main restricted universe multiverse

5. deb ftp://ftp.itb.ac.id/pub/ubuntu karmic-proposed main restricted universe multiverse

indika.net.id (OpenIXP)**

1. deb http://ubuntu.indika.net.id/ karmic main restricted universe multiverse**
2. deb http://ubuntu.indika.net.id/ karmic-updates main restricted universe multiverse

3. deb http://ubuntu.indika.net.id/ karmic-security main restricted universe multiverse

4. deb http://ubuntu.indika.net.id/ karmic-backports main restricted universe multiverse

5. deb http://ubuntu.indika.net.id/ karmic-proposed main restricted universe multiverse

komo.vlsm.org**

1. deb http://komo.vlsm.org/ubuntu karmic main restricted universe multiverse

2. deb http://komo.vlsm.org/ubuntu karmic-updates main restricted universe multiverse

3. deb http://komo.vlsm.org/ubuntu karmic-security main restricted universe multiverse

4. deb http://komo.vlsm.org/ubuntu karmic-backports main restricted universe multiverse

5. deb http://komo.vlsm.org/ubuntu karmic-proposed main restricted universe multiverse

Buat nambahnya bisa pake terminal sbb :

1. buka Application > Accessories > Terminal

2. trus ketikin perintah :

sudo gedit /etc/apt/sources.list

3. semua baris di file sources.list ditambahin # di depannya

4. trus tambahin deh daftar repository di atas yang mau di pake tinggal copy paste ajah

5. trus update daftar repositorynya deh dengan mengetikkan perintah :

sudo apt-get update

Semoga Bermanfaat! ^_^
