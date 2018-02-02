---
title: Custom Domains with Github Pages, CloudFlare
date: 2014-07-27 15:00:00
---

People pay a lot of money to web hosts and DNS Providers.

Instead of spending another cent on your web hosting company of choice, why not make the switch to Github Pages and CloudFlare? You can host `n` number of static web pages for free WITH your custom domain name.

Yes. It costs only $00.00 per year.

Tell me more, you might say.

To which I reply: “Read onward my friend!”

### What will I learn?

Here’s the outline of what you will learn. If you have any trouble, tweet me [@tomfme](https://twitter.com/tomfme) or shoot me an [email](mailto:tom@meagher.co). I’ll respond (although maybe not instantaneously) and we’ll get you up and running.

1. Create a GitHub Pages site for your username
2. Use CloudFlare DNS
3. Set up a custom domain
4. Drop your current web host & save money

Alright, let’s get started!

### Configuring Github Pages

Maybe you have never heard of GitHub or are not familiar with GitHub Pages. No problem—you can [create an account here](https://github.com/join) and [read more about GitHub here](https://github.com/about). GitHub Pages are public webpages freely hosted and easily published through GitHub. Start building your personal site below.

#### 1. [Create a new repository](https://github.com/new) named `username`.github.io

![create a new repo](/blog/assets/2014/01/01.png)

#### 1b. Clone the repository in terminal, GitHub for Windows, or GitHub for Mac.

(If you know about this great! Otherwise, feel free to move on to step 2.)

#### 2. Create (& commit) an index.html file in your username.github.io repo

![create an index file](/blog/assets/2014/01/02.png)

#### 3. Fire up your favorite browser to: username.github.io and see the results!

Now that you are getting a hang of GitHub Pages, we’ll add your custom domain name to your site.

#### 4. Add a CNAME file to your username.github.io repo

This should be your custom domain. Mine is `meagher.co`.

![cname](/blog/assets/2014/01/03.png)

Now we will move onto CloudFlare to configure our supercharged DNS! If you have any questions contact me [here](https://twitter.com/tomfme) and [here](mailto:tom@meagher.co). Let’s go!

### Supercharging with CloudFlare

You know the routine! [Sign up here](https://www.cloudflare.com/a/sign-up) and [read more about CloudFlare here](https://www.cloudflare.com/overview). CloudFlare “protects and accelerates any website online.” Plus its free, quality DNS for your new GitHub Pages site!

#### 1. Add a your custom domain

![custom domain](/blog/assets/2014/01/04.png)

#### 2. Create a `CNAME` record pointing to your `username`.github.io site

![create a cname](/blog/assets/2014/01/05.png)

#### 3. Your result should look something like this

(where `tmm == your username`). If it does not, add the records so they match what you see.

![dns settings](/blog/assets/2014/01/06.png)

#### 4. FINALLY, you’ll want to transfer your DNS to CloudFlare.

I use Namecheap as my domain name registrar so you’ll want to do the same thing for yours. Go to the “Transfer DNS” option of your registrar’s site and replace the DNS Servers with the ones from CloudFlare.

![transfer dns](/blog/assets/2014/01/07.png)

Your name servers should look similar: name.ns.cloudflare.com

#### 5. Wait for the changes to propagate.
Your custom domain should now direct to your GitHub Pages site! Free web hosting, only pay for your domain!

### Wrapping Up

That just about does it. Hope you were able to learn something new or at least save a few bucks. Contact me if you need help or have questions. Check out my [tmm.github.io](https://github.com/tmm/tmm.github.io) repo to see GitHub Pages in action.