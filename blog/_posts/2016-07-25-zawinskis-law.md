---
title: "Zawinski’s Law"
date: 2016-07-25 19:22:00
---

Why is it that (most) every technology company on the planet tries to create their own email system? It's crazy, and pretty amazing!

(Your queue to check out the table below.)

Email Service/System | Company
--- | ---
Gmail | Google
iCloud Mail | Apple
[WorkMail](https://aws.amazon.com/workmail/) | Amazon
Hotmail, Outlook, Exchange | Microsoft
Yahoo Mail | Yahoo
InMail | LinkedIn
AOL Mail | AOL
Facebook Messenger | Facebook
Twitter DM | Twitter
... | ...

Those companies alone account for billions in market cap. And the list keeps going.

Oh, so you don't think Facebook Messenger and Twitter DM are email systems? Let's re-write that sentence, substituting the *definition of email* for *email*. Facebook Messenger and Twitter DM are "methods of exchanging digital messages between computer users." Looks like it passed the definition test!

All kidding aside, most of the companies you read above did not start out in the electronic mail business. Many probably never intended to. So why did they? Besides asking the product managers, let's think through this.

Email is sticky.

So sticky that you probably checked it sometime before reading this. Perhaps 30 minutes ago. If not, you definitely did today. You might even be one of those people that scrolls through email in bed or when you go to the bathroom. (I assure you, that's not as disgusting as people that have 1,000+ unread emails sitting in their inbox.)

Because it's so sticky it constantly brings back users. In case you missed the Internet over the last few years, users are so hot right now. Their eyeballs and data are great for things like ads (thanks, Google). If that wasn't a big enough reason, email is the Internet's form of identity. You know the drill: *please enter your email address and password to log in*.

Users, data, and identity management seem like an intoxicating combination for why you would jump into the email game. That said, we are also excluding the most obvious reason—companies pay a lot of money for email.

With those very plausible sounding reasons in mind, we turn to the name of this post, "Zawinski's Law." You guessed it! It's actually a law:

> Every program attempts to expand until it can read email. Those programs which cannot so expand are replaced by ones which can.[^1]

Albeit a somewhat loose interpretation, these companies create email systems because they *have* to. Their software engineers do it to themselves. It might start out innocently as, "let's just send the user a notification/reminder/alert/message," but quickly it becomes the user needs to "customize the message text," "view/organize messages" (inbox), "search messages", etc.[^2]

Just as email is sticky for users, it's also sticky for companies that provide it. Many join the email business and never leave it.

***

### Notes

I first discovered Zawiski's Law in Gabriel Weinberg's delightful *[Mental Models I Find Repeatedly Useful](https://medium.com/@yegg/mental-models-i-find-repeatedly-useful-936f1cc405d#.1lxyolll0)*.

[^1]: [Zawinski's Law on Wikipedia](https://en.wikipedia.org/wiki/Jamie_Zawinski#Principles)

[^2]: Paul Buchheit started Gmail as a [search engine for email](http://time.com/43263/gmail-10th-anniversary/).
