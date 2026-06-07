---
draft: true
title: "Squid Proxy + Mikrotik"
date: 2012-01-31 07:05:13Z
categories:
  - how to
  - linux-opensource
  - networking
tags:
  - cache
  - jaringan
  - mikrotik
  - networking
  - proxy
  - squid
---
I have installed a cache proxy to centos server and works with good TCP_HIT. i'm using centos 5.x. proxy took the data that we request from browsing activities and save it as cache. the second request will take from this cache, that means the connection uses full bandwith on the local network. we got two thing, reduce bandwith consumtion from the ISP and increase the speed. squid has other feature such as redirect, blocking, etc.

on this case, the proxy's IP set to 192.168.168.12, the same level to client computers.

install squid package from repository.

[code]yum -y install[/code]

edit /etc/squid/squid.conf

change/add some.

[code]#change the proxy port to 3128 and set as transparent. The transparent parameter means, this proxy can be used over the IP with port redirect.

 http_port 3128 transparent

 #add the hostname

 visible_hostname proxyserver

 #the TCP_HIT quantities depends on the refresh pattern parameter.

 refresh_pattern ^ftp:        1440    20%    10080

 refresh_pattern ^gopher:        1440    0%    1440

 refresh_pattern ^http:        720    90%    432000

 refresh_pattern -i (/cgi-bin/|\?) 0    0%    0

 refresh_pattern (Release|Package(.gz)*)$    0    20%    2880

 refresh_pattern -i \.(gif|png|jpg|jpeg|ico)$ 10080 90% 43200 override-expire ignore-no-cache ignore-private

 refresh_pattern -i \.(iso|avi|wav|mp3|mp4|mpeg|mpg|swf|flv|x-flv)$ 43200 90% 432000 override-expire ignore-no-cache ignore-private

 refresh_pattern -i \.(deb|rpm|exe|ram|bin|pdf|ppt|doc|tiff)$ 10080 90% 43200 override-expire ignore-no-cache ignore-private

 refresh_pattern -i \.(zip|gz|arj|lha|lzh|tar|tgz|cab|rar)$ 10080 95% 43200 override-expire ignore-no-cache ignore-private

 refresh_pattern -i \.(html|htm|css|js|php|asp|aspx|cgi) 1440 40% 40320

 refresh_pattern .        0    20%    4320[/code]

save the file. then, create a swap directory

[code]/usr/sbin/squid -z #swap[/code]

Check squid configuration. If there is an output, something wrong with squid.config, otherwise, all's ok.

[code]/usr/sbin/squid -k parse[/code]

start squid service

[code]/etc/rc.d/init.d/squid start[/code]

use chkconfig to set squid to load on boot.

[code]/sbin/chkconfig squid on[/code]

now, configure browser's proxy to IP port 3128. open some static webpages and check log file.

[code]tail /var/log/squid/access.log[/code]

if success, the webpage will loaded and squid will generate TCP_MISS to the logfile. we need to check again. give attention to logfile. clear the browser cache or use other computer to load the same pages. if TCP_HIT appears on the log, then your squid server is working fine. TCP_MISS means the data is not exist on cache and proxy server will load it from the internet. You will get TCP_HIT when data is exists and client load it from cache. the more you get TCP_IP, the more browsing speed increased for lots of data.

this is not yet complete. we need to enable the proxy server on router and setup it to redirect to 192.168.168.12:3128 using parent-proxy parameter.

[code]set enabled=yes src-address=0.0.0.0 port=3328 parent-proxy=192.168.168.12 parent-proxy-port=3128[/code]

then, add a nat rule to force all request to router's proxy (port 3328). strike the command bellow.

[code]chain=dstnat action=redirect to-ports=3328 protocol=tcp src-address=!192.168.168.12 dst-port=80[/code]

voila. :)

NB : ini tulisan pertama dengan bahasa inggris. saya harap banyak yang salah dan seseorang memberitahu sehingga saya bisa belajar dari itu.
