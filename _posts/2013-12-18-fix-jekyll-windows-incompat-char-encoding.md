---
layout:     post
title:      'Jekyll on Windows: Fix "Incompatible Character Encodings" Liquid Exception'
tags:       jekyll windows liquid ruby
---
In the process of building my new Jekyll-based site, I ran into the following
Liquid exception while trying to build for the first time on Windows:

    Liquid Exception: incompatible character encodings: UTF-8 and IBM437 in _layouts/default.html


I discovered you can set `encoding: UTF-8` in your Jekyll `_config.yml` to fix
this issue.


References
----------
- [octopress GitHub issue #413](https://github.com/imathis/octopress/issues/413)
- ["Solving UTF problem with Jekyll on Windows"](http://joseoncode.com/2011/11/27/solving-utf-problem-with-jekyll-on-windows/)
