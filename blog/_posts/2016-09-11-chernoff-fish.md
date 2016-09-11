---
title: Visualizing Multivariate Data with Chernoff Fish
date: 2016-09-11 15:32:00
---

Humans are innately bad at understanding high dimensional data. After all, our world only includes *three* dimensions. If you don't believe me---think about what a *four* dimensional sphere looks like. (Then [check out this gif](https://upload.wikimedia.org/wikipedia/en/c/c7/4dSphere01t.gif).)

This dimensional *deficit* impairs our ability to make informed decision about important everyday things, like finance. How you compare two mutual funds---when you look past their rate of return---becomes like comparing two unknown foods by their nutrition facts and ingredients.

> What if you used an already recognizable object seen in nature to describe fund characteristics?

In [*Visualizing Financial Data*](http://www.wiley.com/WileyCDA/WileyTitle/productCd-111890785X.html), Julie Rodriguez and Piotr Kaczmarek explore just that with Chernoff Fish, a variation of [Chernoff faces](https://en.wikipedia.org/wiki/Chernoff_face). Each part of the fish is used to encode different fund traits: pupil size maps to performance, the side and tail fins describe sector exposure, etc.

![Chernoff Fish](/blog/assets/2016/5/fish.png)

I thought the concept was really cool, but it wasn't interactive (yet). I couldn't build my own fish! So I decided to make my own Chernoff Fish generator AND learn how to use [React](https://facebook.github.io/react/) and [D3](https://d3js.org) together.

![Boom](/blog/assets/2016/5/screenshot.png)

You can check out the [final result right here](http://meagher.co/chernoff-fish/)! (I recommend going crazy on the *Randomize* button.)

---

### Notes

All my code is [on GitHub](https://github.com/tmm/chernoff-fish).