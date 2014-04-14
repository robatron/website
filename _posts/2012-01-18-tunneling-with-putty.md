---
layout: post
title:  Tunneling with PuTTY
tags:   netsec software linux windows

summary: >
    Tunneling is the process of encapsulating one kind of network
    traffic (the payload) inside of another kind of network traffic (the
    container). The resulting traffic would look just like the container
    traffic to an outside observer.

cover_img:
    full:       ssh-tunnel-whiteboard-diagram.jpg
    thumbnail:  ssh-tunnel-whiteboard-diagram-thumbnail.jpg

soft_published: true
---

_**Disclaimer:** This article is intended for informational/educational
purposes only. I do not advocate or condone illegal/unethical behavior, and
assume no responsibility or liability for any consequences resulting from the
use of the information below._

{% include blog-post-img.html filename=page.cover_img.full %}

[Tunneling][wp-tunneling] is the process of encapsulating one kind of network
traffic (the [payload][]) inside of another kind of network traffic (the
container). The resulting traffic would look just like the container traffic to
an outside observer.

[payload]: http://en.wikipedia.org/wiki/Payload_(computing)
[wp-tunneling]: http://en.wikipedia.org/wiki/Tunneling_protocol

A common type of network tunnel is the *[SSH][] tunnel*, which can be used to
transfer network traffic through untrusted zones in a secure way. With an SSH
tunnel, each [packet][] of the payload traffic is wrapped inside an
[encrypted][encrypt] SSH packet.

[ssh]: http://en.wikipedia.org/wiki/Secure_Shell
[packet]: http://en.wikipedia.org/wiki/Network_packet
[encrypt]: http://en.wikipedia.org/wiki/Encryption

# SSH tunnel usage examples

## Secure your Internet traffic at the coffee shop

Let's say you would like to transfer your personal email or Internet browsing
traffic through an untrusted zone like a public WiFi network. You could
create an encrypted SSH tunnel from your computer to a trusted network to
ensure your traffic stays secure.

(See poorly-drawn whiteboard diagram above)

## Circumvent firewalls and web filters

{% include blog-post-img.html filename="sshtunnel.png" %}

Firewalls and web filters block access to websites and other Internet services,
usually for the purpose of squelching content and services deemed inappropriate
by the individuals, organizations, or governments controlling them. The problem
is, these systems also prevent access to useful and important content and
services. This can result in anything from minor annoyances like being
blocked from [Wikipedia][wp] at school or work, to a government censoring
political events.

[wp]: http://en.wikipedia.org

{% include blog-post-img.html filename="website-blocked-for-gay-interest.jpg" %}

# Creating an SSH tunnel with PuTTY

Here's a guide on how to create an SSH tunnel with PuTTY. This
guide makes the following assumptions:

- You have a Windows machine and administrative access
- You have SSH access to a trusted server
- The network you are tunnelling through allows SSH traffic


## Install PuTTY on your computer

Download and install PuTTY from its [download page][putty-download].

[putty-download]: http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html

## Test the connection to your SSH server

Run PuTTY and make sure you can connect to your SSH server from the network
you're trying to tunnel through.

{% include blog-post-img.html filename="putty-main.png" %}

## Set up PuTTY as a local proxy

Once you're sure you can connect to your SSH server normally, you can set PuTTY
to act like a local [SOCKS proxy][socks], and tunnel all of your system's
traffic to your SSH server.

[socks]: http://en.wikipedia.org/wiki/SOCKS

1. Under *connection*, expand *SSH*, and click on *Tunnels*
1. Enter a local *source port* to run the proxy on, e.g., `8888`, and
choose *Dynamic* for the *Destination*
1. Click *add*

{% include blog-post-img.html filename="putty-tunnel.png" %}

**Note:** It's probably a good idea to save this configuration as a session
so you don't have to configure it each time.

## Configure Windows to connect through the proxy

Next, we'll need to configure Windows to connect through the local proxy you
just created.

1. Open *Internet Options* from the *Control Panel*
1. Click on the *Connections* tab, and then the *LAN settings* button
1. Check the box *Use a proxy server for your LAN* and enter `localhost` for
the *Address* and the port number you chose in the last step, e.g., `8888` in
the *Port* field
1. Click *OK* and *OK* again

{% include blog-post-img.html filename="lan-settings.png" %}

**Note:** Alternatively, you could set up individual programs to use the proxy
instead of your whole system.

## Log in and connect

That's it! Just log into your SSH server like normal, and the tunnel should
open up. Now you're browsing with <del>portals</del> tunnels.

{% include blog-post-img.html filename="ssh-tunnel-together.jpg" %}
