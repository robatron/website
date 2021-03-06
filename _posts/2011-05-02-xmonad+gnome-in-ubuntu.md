---
layout: post
title:  Xmonad + GNOME in Ubuntu
tags:   how-to linux

summary: >
    Dislike the Unity shell in Ubuntu? Like tiling window managers? Here's how
    to replace GNOME's default window manager with the Xmonad dynamically-
    tiling window manager to create a slick GNOME/Xmonad hybrid in Ubuntu 11.04
    (and possibly later versions).

cover_img_filename:
    https://lh5.googleusercontent.com/-XYXWyrfQNPk/Tb4Htcs9mLI/AAAAAAAACZ8/AcXqaLkziPE/s144/Screenshot.png

soft_published: true
---

Dislike the [Unity shell][unity] in Ubuntu? Like [tiling window
managers][twm]? Here's how to replace GNOME's
[default window manager][defaultwm] with the [Xmonad][xmonad]
dynamically-tiling window manager to create a slick GNOME/Xmonad hybrid in
Ubuntu 11.04 (and possibly later versions).

[unity]:http://en.wikipedia.org/wiki/Unity_(desktop_environment)
[twm]:http://en.wikipedia.org/wiki/Tiling_window_manager
[defaultwm]:http://en.wikipedia.org/wiki/Metacity
[xmonad]:http://xmonad.org

# Install Xmonad

First, install xmonad from the repositories with [APT][]. This will install
Xmonad and all of it's [Haskell][]-related dependencies. (*Warning:* This can
sometimes be quite a bit of stuff, i.e., 60-300 MiB.)

[APT]:http://en.wikipedia.org/wiki/Advanced_Packaging_Tool
[Haskell]:http://en.wikipedia.org/wiki/Haskell_%28programming_language%29

<pre class='prettyprint'>
    sudo apt-get install xmonad
</pre>

# Edit the default Xmonad GNOME session

Now we'll need to edit Xmonad's GNOME session to include GNOME stuff, e.g., the
gnome panels, the [Nautilus file manager][nautilus], etc. Open
`/usr/share/gnome-sessions/xmonad.session` and make it look something like
this:

[nautilus]:http://live.gnome.org/Nautilus

<pre class='prettyprint'>
    [GNOME Session]
    Name=Xmonad
    Required=windowmanager;panel;filemanager;
    Required-windowmanager=xmonad
    Required-panel=gnome-panel
    Required-filemanager=nautilus
    DefaultApps=gnome-settings-daemon;
</pre>

# Create a new X session

Now let's add a new X session entry for our GNOME/Xmonad hybrid. Copy
`/usr/share/xsessions/xmonad.desktop` to
`/usr/share/xsessions/xmonad-gnome.desktop` and make it look something like
this:

<pre class='prettyprint'>
    [Desktop Entry]
    Encoding=UTF-8
    Name=GNOME/xmonad hybrid of amazingness
    Comment=GNOME + XMonad tiling window manager
    Exec=gnome-session --session=xmonad
    Icon=xmonad.png
    Type=XSession
</pre>

# Configure Xmonad

Lastly, we'll need to configure Xmonad itself to work with GNOME. Create a
configuration file at `~/.xmonad/xmonad.hs` and make it look like this:

<pre class='prettyprint lang-hs'>
    import XMonad
    import XMonad.Config.Gnome

    main = xmonad gnomeConfig
</pre>

*Note:* If you want to customize your config file, you'll need to extend the
gnomeConfig structure. If you've never programmed in Haskell before, I suggest
reading [a quick intro to Haskell][hintro] first. Here's how my Xmonad config
looks:

[hintro]:http://www.haskell.org/haskellwiki/Xmonad/Config_archive#Quick_Introductions_to_Haskell

<pre class='prettyprint lang-hs'>
    import XMonad
    import XMonad.Config.Gnome

    -- Declare config preferences
    config_terminal = "terminator"      -- Default terminal to run
    config_focusFollowsMouse :: Bool    -- Have focus not follow mouse
    config_focusFollowsMouse = False

    -- Run xmonad with the specified conifguration
    main = xmonad myConfig

    -- Use the gnomeConfig, but change a couple things
    myConfig = gnomeConfig {
        terminal = config_terminal,
        focusFollowsMouse = config_focusFollowsMouse
    }
</pre>

# References

- [Haskell wiki: Using Xmonad in GNOME](http://www.haskell.org/haskellwiki/Xmonad/Using_xmonad_in_Gnome#Ubuntu_Natty)
- [Haskell wiki: Xmonad config archive](http://www.haskell.org/haskellwiki/Xmonad/Config_archive)
