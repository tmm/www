---
title: Mute.vc Launch
date: 2020-01-15
path: /mute-vc/
published: true
description: I launched a product for muting investors on Twitter. People talked about it.
---

Yesterday, I launched a quick hack I did over the holiday break: [Mute.vc](https://mute.vc). It's a simple web app where you can individually or bulk mute/unmute investors so you don't have to see their tweets.

I [posted it](https://news.ycombinator.com/item?id=22044945) on Show HN, and in half an hour or so it hit the front page. Right away, traffic spiked. I was mostly unproductive for rest of the day replying to comments, refreshing the analytics, and riding the wave.

Not sure why, but at some point after bouncing around between #11-17 for a few hours, the post dropped to #45. Maybe because some people started talking about politics in the comments (think mute.politics). At that point, with traffic dying, I thought it was over.

Surprise! It wasn't.

On a whim I DMed [@vcstarterkit](https://twitter.com/vcstarterkit). They tweeted it out. And traffic took off again!

https://twitter.com/vcstarterkit/status/1217241074155962368

Some other big accounts sent out tweets, which helped even more. Notably [@KristyT](https://twitter.com/KristyT/status/1217255843273461760), but unfortunately [her tweet](https://twitter.com/KristyT/status/1217255843273461760) has since been deleted. Overall, I was surprised at how well Twitter performed given I had no plan for it. Big thanks to [everyone that tweeted something](https://twitter.com/search?q=mute.vc%20since%3A2020-01-13%20until%3A2020-01-18).

Launch aside, what was the motivation for [Mute.vc](https://mute.vc)? First, to be super clear, VC is important and necessary.[^1] What's not super important or necessary is the thought leadership and platitudes a lot of investors tweet out.

I get why they do it — to differentiate themselves/build their brand, they miss being operators, public discussion/thinking aloud, and many other reasons — but it was tiresome, especially when I was trying to build things. The problem wasn't who I followed.[^2] Rather it was all the VC content that kept surfacing in my feed via retweets, favorites of people I follow, and recommended tweets.

I was tired of having so many [ideas in my mind](http://paulgraham.com/top.html) about voice apps, the future of work, no/low code, crypto, ISAs, etc.[^3]

After noodling a bit more, I [posted the idea](https://www.are.na/block/5698385) to my [Random Public Ideas](https://www.are.na/tom-meagher/random-public-ideas) [Are.na](https://www.are.na/) channel, and people seemed to like it. I was encouraged. I joked about it with a friend later that week and realized it would be a fun, quick hack to work on. Much to my delight the [mute.vc](https://mute.vc) domain was available so I got to work.

I spent a week building everything out and another week polishing until it was time to post. It was all worth it for testimonials like this:

https://twitter.com/peterme/status/1217264622266277888

Overall, I learned a lot from the launch. My biggest takeaway is to "show, not tell" when it comes to a product landing page. While above average (I think), my design described what the product did with only text! Confused or curious visitors would have benefited from an interactive demo, or at least a screenshot, of the product.

Anyway, it was fun. Now, onward to the next thing!

—

Some quick closing notes: I didn't go into implementation details in this post. You can check out the [code](https://github.com/tmm/mute.vc) on GitHub. Also, I didn't talk about the launch day stats either. Here are some quick figures as of 1/18/20:

-   89,467 total mutes (across 200 VCs)[^4]
-   10k page views (3.6k from Twitter, 2.4k from Hacker News)
-   2,551 attempted auths
-   715 successful unique auths (a.k.a users)
-   A bunch of unsuccessful auths (people churning at Twitter oauth step)
-   1,634 toggles to dark mode
-   21 new Twitter followers

For the most up-to-date stats, check out the monthly live analytics at [mute.vc/stats](https://mute.vc/stats).

Edit 1/16/20: Mentioned in [The Verge](https://www.theverge.com/interface/2020/1/16/21067483/chris-evans-starting-point-vanity-project-captain-america-democracy)

Edit 1/20/20: Hunted on [Product Hunt](https://www.producthunt.com/posts/mute-vc) and tweeted by [@DHH](https://twitter.com/dhh/status/1219302297928224768).

[^1]: That said, there are a non-trivial number of bad investors that I'm sure are lovely people personally, but professionally, are not. They treat founders poorly, promote their own agendas/companies without disclosure, etc. all while pulling down [absurdly large management fees](https://hbr.org/2014/08/venture-capitalists-get-paid-well-to-lose-money). (Watch [Chamath's lashing](https://www.cnbc.com/2018/10/10/start-up-economy-is-a-ponzi-scheme-says-chamath-palihapitiya.html) if you want to rage.)

[^2]: Maybe it is a little bit who I follow. I like following people in tech. VC Twitter overlaps significantly with Tech Twitter.

[^3]: These are all fine. Just not interested right now.

[^4]: Due to Twitter's rate limit and speed at which I wanted to launch, I only added 200 investors to the [list](https://twitter.com/awkweb/lists/investors). The investors were randomly selected based on who I knew and simple searches. If you are on the list and want to be removed, I'm happy to do so.
