---
layout: post
title: Time Range Conflict Mapping
date: 2016-09-28 12:00:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

I've been working on apps that has heavily usage of fullcalendar library. One of the feature is checking timerange conflict. This is a complete time range conflict mapping I used :

```
/**
 *  new       :            |-----------------------|
 *  existing  : |---------------------|
 */
(x.start.valueOf() < y.end.valueOf() &&
x.start.valueOf() > y.start.valueOf()) ||
/**
 *  new       : |-----------------------|
 *  existing  :            |---------------------|
 */
(x.end.valueOf() > y.start.valueOf() &&
x.end.valueOf() < y.end.valueOf()) ||
/**
 *  new       :     |-------------|
 *  existing  : |---------------------|
 */
(x.start.valueOf() > y.start.valueOf() &&
x.end.valueOf() < y.end.valueOf()) ||
/**
 *  new       : |---------------------|
 *  existing  :     |-------------|
 */
(x.start.valueOf() < y.start.valueOf() &&
x.end.valueOf() > y.end.valueOf()) ||
/**
 *  new       : |-------------|
 *  existing  : |---------------------|
 */
(x.start.valueOf() == y.start.valueOf() &&
x.end.valueOf() < y.end.valueOf()) ||
/**
 *  new       : |---------------------|
 *  existing  : |-------------|
 */
(x.start.valueOf() == y.start.valueOf() &&
x.end.valueOf() > y.end.valueOf()) ||
/**
 *  new       :         |-------------|
 *  existing  : |---------------------|
 */
(x.start.valueOf() > y.start.valueOf() &&
x.end.valueOf() == y.end.valueOf()) ||
/**
 *  new       : |---------------------|
 *  existing  :         |-------------|
 */
(x.start.valueOf() < y.start.valueOf() &&
x.end.valueOf() == y.end.valueOf()) ||
/**
 *  new       : |---------------------|
 *  existing  : |---------------------|
 */
(x.start.valueOf() == y.start.valueOf() &&
x.end.valueOf() == y.end.valueOf())
```

I still thinking for creating small js lib for timerange conflict checking (extending the MomentJS, maybe) and joining the ocean of JS libs, the hell that we hate already in JS communities.
