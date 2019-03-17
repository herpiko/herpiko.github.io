---
layout: post
title:  "ffmpeg Scene Detection"
date:   2019-03-17 00:00:00 +0700
categories: lifehack, cctv
---

In the beginning of 2019, I rent a comfortable room near my office so I could just do a walk to reach the office and meet my coworkers. What I don't know early and the host didn't tell is that someone that has bad records and strange behaviours stays here, a floor away up on me. Then something happened. Some underwears are missing (not just mine) and there is no CCTV placed on the rooftop where these underwears dried under sun. There is an area that covered by CCTV and could lead me to the conclusion whose are going to the rooftop in the specific times but since an underwear is cheap, I don't mind it. Then my friend's camera bag gone missing too and I can't help myself anymore to take an action.

So, I bought a 64GB USB flashdisk, backup the entire CCTV video record of three days in a single dump and began to analyzing these videos. What I didn't expect before is, it really takes time. You may play these videos and fast forwarding them but a lot of frames (and perhaps some of them are important) will be skipped. Another way to detect if someone moving around on specific time range is to watch the object that has high probability to be moved (even if it moved a bit, an inch) if someone move around. A doormat is good example and in my videos, there is one. Still, many frames will be skipped if I fast-forward them. On the other hand, a lot of times will be neded to analyze them without frame skipping.

<img src="/assets/doormat.jpg" alt="Doormat">

ffmpeg can automate this task. Thanks to <a href="https://stackoverflow.com/questions/35675529/using-ffmpeg-how-to-do-a-scene-change-detection-with-timecode">StackOverflow </a>. I'm using ffmpeg version 3.2.4 where the specific command from these link above still can be running. You may compile and install it manually, grab the tarball from <a href="https://www.videohelp.com/software/ffmpeg/old-versions">here</a>.

ffmpeg has internal filters like select and showinfo. What we will do is filtering the frames that has scene detection score more than a value that ranged from 0.0 to 1.0. We can set this value manually. The showinfo help to add more info into ffmpeg verbose output, like pts timestamp so we can see when the scene happened. Even, we can generate the thumbnails of these detected scene to a directory.

```
$ tree
.
├── 2019-03-05
│   ├── 2019-03-05-0600.avi
│   ├── 2019-03-05-0700.avi
│   ├── 2019-03-05-0800.avi
│   ├── 2019-03-05-0900.avi
│   ├── 2019-03-05-1000.avi
│   ├── 2019-03-05-1100.avi
│   ├── 2019-03-05-1200.avi
│   ├── 2019-03-05-1300.avi
│   ├── 2019-03-05-1400.avi
│   ├── 2019-03-05-1500.avi
│   ├── 2019-03-05-1600.avi
│   ├── 2019-03-05-1700.avi
│   ├── 2019-03-05-1800.avi
│   ├── 2019-03-05-1900.avi
│   ├── 2019-03-05-2000.avi
│   └── 2019-03-05-2100.avi
├── 2019-03-06
│   ├── 2019-03-06_0600.avi
│   ├── 2019-03-06_0700.avi
│   ├── 2019-03-06_0800.avi
│   ├── 2019-03-06_0900.avi
│   ├── 2019-03-06_1000.avi
│   ├── 2019-03-06_1100.avi
│   ├── 2019-03-06_1200.avi
│   ├── 2019-03-06_1300.avi
│   ├── 2019-03-06_1400.avi
│   ├── 2019-03-06_1600.avi
│   ├── 2019-03-06_1700.avi
│   ├── 2019-03-06_1800.avi
│   ├── 2019-03-06_1900.avi
│   ├── 2019-03-06_2000.avi
│   ├── 2019-03-06_2100.avi
│   ├── 2019-03-06_2200.avi
│   └── 2019-03-06_2300.avi
└── 2019-03-07
    ├── 2019-03-07_0600.avi
    ├── 2019-03-07_0700.avi
    ├── 2019-03-07_0800.avi
    ├── 2019-03-07_0900.avi
    ├── 2019-03-07_1000.avi
    ├── 2019-03-07_1100.avi
    ├── 2019-03-07_1200.avi
    ├── 2019-03-07_1300.avi
    ├── 2019-03-07_1400.avi
    ├── 2019-03-07_1500.avi
    ├── 2019-03-07_1600.avi
    └── 2019-03-07_1700.avi

3 directories, 45 files
```

I renamed and sorted the videos to such structures to make it more readable and can be automated using scripts.

Before doing a scene detection to the entire videos, I've to test it and see what is the scene detection value that fit my need. I cut a video that contains someone moving around and tested the ffmpeg command against it.

```
$ ffmpeg -i 2019-03-06_0700.avi -ss 00:04:20 -t 00:00:20 -async 1 2019-03-06_0700-cut.avi
```

The command above will cut `2019-03-06_0700.avi` started from `00:04:20` for 20 second (`00:00:20`) and write the frames to `2019-03-06_0700-cut.avi`


```
$ mkdir -p frames && ffmpeg -i 2019-03-06_0700-cut.avi -vf "select='gt(scene,0.02)',showinfo" -vsync 0 frames/%05d.jpg -f null /dev/null 2> ffout.log
```

It will creates `frames` dir then filtering the frames that contains scene detection score greater than 0.02 and save the thumbnail of related frames to `frames` directory.  `0.02` score fits my case. You may need to adjust your own score, depending to your own videos (lightning change from the sun can affect this). `showinfo` will add more information to the log, like timestamp. The verbose log will be written to `ffout.log`.

<img src="/assets/Screenshot from 2019-03-17 21-21-55.png" alt="Detected scene frames">

If you don't want to open the thumbnail images of the detected scenes, you can just read the timestamp from the log.

<img src="/assets/Screenshot from 2019-03-17 21-26-23.png">

UPDATE:
I found the proof and report it to the host and let them make a decision over this case. Also I make my own decision : to move out from that place and find another place to live in.
