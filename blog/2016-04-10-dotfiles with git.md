---
title: dotfiles with git
date: 2016-04-10 8:51:00
tags: [code, git, dotfiles]
---

Tools are really important. They are the connection between the maker and what the maker is making. Craftsmen can spend a lifetime honing them just as they do their craft.

The configuration files on a computer with a `.` in front of them---aptly named *dotfiles*---are my tools. Refined line by line, hour by hour, in pursuit of workflow nirvana.

When I first discovered [dotfiles](http://dotfiles.github.io), I was immediately sold on the idea:

> Backup, restore, and sync the prefs and settings for your toolbox. [^1]

The concept would allow me to bring my tools anywhere.

Zach Holman's [dotfiles](https://github.com/holman/dotfiles) seemed like a great place to start, but, despite their really nice organization, symbolic links and set up scripts introduced too much friction.

After further investigation, I found Kyle Fuller's [*Organising dotfiles in a git repository*](https://fuller.li/posts/organising-dotfiles-in-a-git-repository/) and this nugget:

> Git allows you to separate the work tree and the git dir via environment variables or arguments to the git command.

Separating the work tree and git directory make dotfiles "easily manageable via the git command," which is what I wanted to do.

Onward to the tutorial!

#### Starting off

First the code, then the explanation.

``` shell
$ git init --bare $HOME/.dotfiles
$ alias home="git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME"
$ home config --local status.showUntrackedFiles no
$ echo "alias config='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'" >> $HOME/.zshrc
```

1. Creates a new [bare git repository](http://www.saintsjd.com/2011/01/what-is-a-bare-git-repository/) in the `~/.dotfiles` directory
2. Sets `home` as the alias for `~/.dotfiles` instead of using `git`
3. Hides untracked files so `git status` output is manageable
4. Adds `home` alias to `.zshrc` (might be `.bashrc` for you)

#### Create versions with git

Now, just use `home` instead of `git`.

``` shell
$ home status
A .gitconfig
M .zshrc
$ home add .gitconfig
$ home commit -m "Add gitconfig"
$ home add .zshrc
$ home commit -m "Add zshrc"
$ home push
```

#### Wrapping up

I recommend pushing your local dotfiles repo to [GitHub](https://github.com) so you can clone it when you configure a new computer.

``` shell
$ alias home="git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME"
$ home init .dotfiles
$ home remote add origin https://github.com/tmm/dotfiles
$ home fetch
$ home checkout master
```

---

### Notes

[My dotfiles](https://github.com/tmm/dotfiles) on GitHub.

[^1]: GitHub [unofficial guide to dotfiles](http://dotfiles.github.io)