---
layout: post
title: Install Old Python on Debian Jessie
date: 2016-07-01 04:01:07.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

My partner and me, new comers at BlankOn project, still struggling with ``irgsh``, which stand for ``Insinyur Robot Gedek Sarjana Hukum``. I'm really curious, how the most important sub project on BlankOn named like no other. ``irgsh`` is a package automation that rebrand and build packages for BlankOn Linux distribution.

The first line of code has been commited since 6 years ago, crafted with Python 2.6. We are planning to deploy new instance of ``irgsh`` on new machine. Before that, we should have a Python 2.6 installed (in this case, Python version 2.6.6). After hours of digging on Google Search result, Stackoverflow and so on, I succeeded install old Python 2.6 on Debian Jessie with the following steps :

### Use pythonbrew

https://github.com/utahta/pythonbrew

- ``curl -kL http://xrl.us/pythonbrewinstall > pythonbrewinstall.sh``
- ``chmod a+x pythonbrewinstall.sh``
- ``./pythonbrewinstall.sh``
- Follow the ``pythonbrew`` instruction. We need to inject some lines to our ``~/.bashrc``

### Patch the dead link

If you tried to install a version of Python now, you will get failed because of some dead link in the pythonbrew script. I found this patch https://github.com/pybank/pythonbrew/pull/7/files which did not merged to the pythonbrew's upstream repository.

Open ``~/.pythonbrew/etc/config.cfg`` with your favorite editor and change ``http://python-distribute.org/distribute_setup.py`` to ``https://bitbucket.org/tarek/distribute/raw/default/distribute_setup.py``.

### Install dependencies

You need this following package :

- ``sudo apt-get install openssl libcrypt-openssl-rsa-perl libssl-dev libbz2-dev libpython-dbg ncurses-dev libsqlite3-dev``

Some of above packages are required specifically by ``irgsh-node``, like the SSL libraries.

### Install Python version 2.6.6 for the first time

- ``pythonbrew install 2.6.6``

Whether you succeeded or not, let ignore it for now. If succeeded, we have a Python that does not support HTTPS (``irgsh-node`` needed it). Since we already have the source (``~/.pythonbrew/pythons/dist/``), remove the binary.

- ``rm rf ~/.pythonbrew/pythons/Python-2.6.6``

### Add SSL support

- Edit ``~/.pythonbrew/pythons/dist/Python-2.6.6/Modules/Setup.dist``, uncomment lines that related to SSL.

### Install again

- ``pythonbrew install --configure="--with-zlib" 2.6.6``

### Virtualenv

- ``pythonbrew`` does not provide ``virtualenv``, instead, there is ``pythonbrew venv`` for managing virtualenv. It is actually a ``virtualenv`` but wrapped by ``pythonbrew``. Please look at ``pythonbrew``'s README.md for further reading.



## UPDATE

You should use ``https://github.com/yyuu/pyenv`` instead of ``pythonbrew``. More simple, less bugs. (doh)
