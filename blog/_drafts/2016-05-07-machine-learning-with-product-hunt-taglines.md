---
title: Machine Learning with Product Hunt Taglines
date: 2016-05-07 15:35:00
excerpt: Using structure-based analysis to compare taglines, and make predictions.
---

Product Hunt *surfaces the best new products, every day*.

If you have never been on the site---go [check it out](https://producthunt.com). Now. This will be more relevant to you after, and you might even find your next favorite thing.

---

XXX days ago (November 24, 2013), Product Hunt launched with it's first two posts[^1]: XXX and XXX. Each with a (relatively) measly XXX and XXX upvotes. Who knew what would happen next?

Jump ahead to today, May 4, 2016, Product Hunt has swelled to XXX posts with a total XXX upvotes and XXX comments.

Not only is it a place for:

> product-loving enthusiasts to share and geek out about the latest mobile apps, websites, hardware projects, and tech creations.

But Product Hunt has also become the best way (IMO) to get press, users, and reach an engaged audience---XXX enthusiasts---from anywhere in the world. Getting featured is a boon for any product.

#### Wait, why?

No one knows *exactly* why certain products perform before better than others on Product Hunt. There are too many factors.

Upvotes, comments, clicks, and time posted are the more obvious ones. But there are other latent factors, like [@rrhoover](https://twitter.com/rrhoover) tweeting about the product.

Instead of trying to reverse engineer the ranking algorithm, we will use Product Hunt data to explore trends, and attempt to make predictions using *machine learning*.

#### Taglines: 60 characters to make a mark

Because product taglines are the primary descriptor users see on the homepage, it is likely that a tagline determines whether or not a post is opened.

<!-- Image of posts on Product Hunt homepage -->

*Ceteris paribus[^2]*, the more *interesting* the tagline, the more *likely* a post will be opened. Opening a post is a gateway to other activity, like upvotes and comments.

Since Product Hunt does not make their open rates publically available, we must operate under two assumptions:

1. Products with more upvotes and comments have more *interesting* taglines
2. Users primarily interact with posts based on their taglines
 
Rather than perform subjective, word-based analysis, we will use structure-based analysis to compare tagline attributes (length, polarity, number of negative words, etc).

Posing the follow conjecture, let's dive in!

> Product tagline appeal is an indicator of performance.

(Feel free to follow along with the [code on GitHub](https://github.com/tmm/experiments).)

---

### 1. Define performance and interesting tagline criteria

High performance is greater than the average number of upvotes.

Here are some high performing taglines ...

Here are some low performing taglines ...

### 2. Calculate structure-based attributes

Length, polarity, sentiment

### 3. Machine Learning

Training, testing, errors

### 4. Visualization

Pretty charts

---

### Notes

[^1]: Originally, Product Hunt started as an email list. XXX and XXX were the first *web* posts.

[^2]: With all other factors or things remaining the same