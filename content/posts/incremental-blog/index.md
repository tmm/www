---
title: Incrementally Building A Blog
date: 2020-01-23
path: /incremental-blog/
published: true
description: Focus on writing. Only add new features when you need them. (You don’t need pagination until you write more posts than can fit on a page.)
---

It's important to [write on your own website](https://bradfrost.com/blog/post/write-on-your-own-website). It helps with building your personal brand, controlling your content, and [many other things](https://indieweb.org/why). But what's the best way to build a website to write on?

All at once? No. Piece by piece? Closer. In increments? Bingo!

Fundamentally, this is not a big discovery. Most contemporary product development processes encourage breaking projects into smaller chunks. It makes sense to approach a personal blog the same way: Build one increment after the other.

Unfortunately, for past blogs, I always tried adding everything at once. I felt like I needed comments, tags, an RSS feed, etc. in order to start writing. All of these features are pretty simple individual tasks, but collectively they suck the joy out of writing.

My goal was to spend more time writing and less time coding.

The concept of "incrementally building a blog" gave me permission to not build anything until I stubbed my toe while writing, publishing, or reading a post.[^1] It empowered me to worry less about the packaging of my ideas and focus more on how I communicated them.

Practically, how does this process work? First, I write a post in [Markdown](https://www.markdownguide.org). Then, I add it to my local blog site and see how it "looks." If the post renders incorrectly, I'll add the simplest fix needed to hit "publish."

Code snippets are a good example of a lurking stubbed toe. None of my posts contain inline code or code blocks yet. Eventually some probably will. Until they do, there's no reason to spend time adding support for syntax highlighting or other code-related features.

Another happy side effect of building my blog in increments is it encourages me to write more. There are features I want to add (search, tagging, an archive), but don't make sense for a blog with only a few posts. There's no utility in pagination unless I write more posts than fit on a page.

Currently this process works well. I anticipate it will continue. It also
protects me from rushing to add a shiny feature I see on another blog.

[^1]: I finally put a name to this idea when I saw [Frank](https://frankchimero.com) and [Jonnie](https://destroytoday.com)'s blogs. Both are redesigning their blogs publicly by [documenting](https://frankchimero.com/blog/2019/redesign) [changes](https://destroytoday.com/blog/hello-world).
