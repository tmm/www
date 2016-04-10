---
title: dotfiles with git
date: 2016-04-10 8:51:00
tags: [dotfiles, code, git]
---

Tools are really important---people spend almost as much time honing them as they do their craft. They are the connection between the maker and what they are making.

When I first discovered dotfiles, I was immediately sold on the idea.

> Backup, restore, and sync the prefs and settings for your toolbox. [^1]

Zach Holman's [dotfiles](https://github.com/holman/dotfiles) seemed like a great place to start, but despite their really nice organization, symbolic links and set up scripts introduced too much friction.

After further investigation, I found Kyle Fuller's [*Organising dotfiles in a git repository*](https://fuller.li/posts/organising-dotfiles-in-a-git-repository/) and this nugget:

> Git allows you to separate the work tree and the git dir via environment variables or arguments to the git command.

Separating the work tree and git directory makes dotfiles "easily manageable via the git command," which is all I ever wanted to do.

Onward to the tutorial!

#### Starting off

First the code, then the explanation.

{% highlight shell %}
$ git init --bare $HOME/.dotfiles
$ alias home='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'
$ home config --local status.showUntrackedFiles no
$ echo "alias config='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'" >> $HOME/.zshrc
{% endhighlight %}

1. Create a new [bare git repository](http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/) in the `~/.dotfiles` directory
2. Set `home` as alias for `~/.dotfiles` instead of using `git`
3. Hide untracked files so the output of `git status` is manageable
4. Add `home` alias to `.zshrc` (might be `.bashrc` for you)

#### The awesomeness of dotfiles + git

Just use `home` instead of `git`.

{% highlight shell %}
$ home status
$ home add .gitconfig
$ home commit -m "Add gitconfig"
$ home add .zshrc
$ home commit -m "Add zshrc"
$ home push
{% endhighlight %}

#### Wrapping up

I recommend committing your local repo to GitHub so you can clone it when you set up a new computer.

{% highlight shell %}
$ home clone https://github.com/tmm/dotfiles
{% endhighlight %}

---

### Notes

[My dotfiles](https://github.com/tmm/dotfiles) on GitHub.

[^1]: GitHub [unofficial guide to dotfiles](http://dotfiles.github.io)