---
draft: true
title: "memeriksa status baterai melalui terminal"
date: 2011-08-27 15:06:11Z
categories:
  - uncategorized
tags:
  - acpi
  - battery
  - battery check
  - command line
  - linux
  - terminal
---
ya, saya sedang menginstall arch dan membutuhkan waktu lama untuk mengupdate paketnya. kurang bijak kalau laptop dicharger terus menerus. nah, kita bisa memeriksa status baterai melalui terminal, yaitu dengan acpi. pasang dulu acpi dengan paket manajer bawaan. tapi biasanya sistem yang sudah ada GUI-nya sudah mengikutkan acpi.

$acpi

Battery 0 : Discharging, 89%, rate information unavailable

sebenarnya baris rate information unavailable itu berisi estimasi waktu hidup baterai kita. cuma itu baterai saya kurang beres. :)
