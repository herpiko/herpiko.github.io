---
title: Create and Publish Your Native GNOME App - Part 3
date:   2023-07-23 00:02:00Z
categories:
  - Tech
tags:
  - GNOME
---

This article is part 3 of my blog series on how to create and build your native GNOME app. If you are missing the previous part, please click here.

In this third part, I will write about the development phase where you will interact with programming language.

## First time launching the GNOME Builder

Once GNOME Builder opened, you will be asked whether you want to open the existing project, open the example project or create a new project from scratch. Please click Create New Project. The wizard will leads you to a simple form where you can tell the Builder about your app. The most important thing here is the Application ID. If you have domain that you owned, it's better to use your domain as your app namespace. For example, I have this blog, aguno.xyz and my app will be named CubeTimer, then the Application ID (according to the freedesktop.org guideliness) will be xyz.aguno.CubeTimer. This application ID will also be used to claim your namespace when your app is talking with D-Bus service.

Then pick your prefered programming language (in this case, Python) and license, then select GNOME Application as template. Once you click "Create Project", you will be redirected to your working environment.

## The anatomy of GNOME Builder

Basically, the GNOME Builder UI is divided into 5 parts:

### 1. The top bar buttons

This your main command control. You can switch the surface mode, add new file, build and run (or configure the build), search and at the end of the top bar, you have GNOME Builder main menu.

### 2. The side pane

The side pane consist of the Project Tree, build status and the TODO list. In this area, most of the time you will focus on the Project Tree, especially the Files.

### 3. The text editor

This is the bigest part that occupy the UI. If you try to click on a file in the Project Tree (e.g. xyz.aguno.CubeTime), the file will be opened in this area. This is where you write the code. It does not have fancy feature like other advanced IDE but at least (if you are a Vim user) it supports Vim key binding.

### 4. The bottom pane

The bottom pane are accessible by a button in the top bar. By default it will open a terminal emulator. It also has logger (for debugging) and search feature.

## The most important files in the Project Tree > Files

In this tutorial, mainly you will be editing these three files:

### 1. src/main.py

### 2. src/window.py

### 3. src/window.ui

## Working with Cambalache and creating the basic layout

Lorem ipsum

## Connecting an event from a component to a function

Lorem ipsum

## Crafting the complete layout of the CubeTimer

Lorem ipsum

## Wiring up the code

Lorem ipsum
