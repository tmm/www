---
title: Exploring My Life with Pandas
date: 2016-05-14 19:46:00
---

Since April 2014, I have used [Reporter](http://www.reporter-app.com) to collect data about my life---capturing everything from location to sleep quality to how often I am in front of a screen.

A while back, I wrote a [post about my data collection process](/blog/2014/08/02/in-107-days-i've-collected-500-reports-about-my-life/), but haven't done anything since. And now I have over 3.2k reports spanning 745 days.

Inspired by [Nicholas Felton's talk at ICA Boston](https://www.icaboston.org/events/aiga-ica-present-nicholas-felton) this past week, I decided to start wrangling with the data so I could:

1. Practice using [Pandas](http://pandas.pydata.org)
2. And explore what *quantified Tom* looks like [^1]

Charts and code follow.

#### Set Up

After importing my Reporter CSV export into a Pandas `DataFrame` and cleaning it up, I was left with 20 columns. (Which I later renamed to make them easier to work with.)

Timestamp of Report (GMT)|Timestamp of Report (Local Time)
Latitude|Longitude
Weather|Number of Photos Added
Ambient Audio (dB)|Ambient Audio Description
Number of Steps|What did you learn today?
Where are you?|What are you doing?
Who are you with?|How did you sleep?
How many pages did you read tonight?|Are you in front of a screen?
What book are you reading?|Did you exercise today?
What are you thinking about?|Are you wearing your retainer?

They span multiple data types from categorical to numeric, and most everything in between.

#### *Feel* the Data

One of my typical first steps is to plot the data to get a *feel* for it. Are there any obvious trends I can quickly identify?

So that's what I did.

*Did a ton of walking from July to October, traveling around India.*

```python
# Steps Per Day
df2 = df[['local_time','num_steps', 'year']].dropna()
table = df2.pivot_table('num_steps', index='local_time', columns='year', aggfunc=np.sum)
table.plot()
```

![Steps Per Day](/blog/assets/2016/2/1.png)

*Also, took a lot of pictures in India. The big spike---the Taj Mahal.*

```python
# Photos Taken Per Day
df2 = df[['local_time','num_photos', 'year']].dropna()
table = df2.pivot_table('num_photos', index='local_time', columns='year', aggfunc=np.sum)
table.plot()
```

![Photos Taken Per Day](/blog/assets/2016/2/2.png)

*I read less than I use to.*

```python
# Nightly Pages Read
df2 = df[['local_time','num_pages', 'year']].dropna()
table = df2.pivot_table('num_pages', index='local_time', columns='year', aggfunc=np.sum)
table.plot()
```

![Nightly Pages Read](/blog/assets/2016/2/3.png)

Intrigued by the last graph, I decided to dive deeper into my nightly reading habit.

#### Page After Page

I try to read every night before I go to sleep. It relaxes me so I fall asleep faster. Why have I read less lately though?

I can probably guess why, but let's see if the proof is in the data pudding.

First, we zoom in on 2015: `df2[df2['year'] == 2015]`.

![Nightly Pages Read (2015)](/blog/assets/2016/2/4.png)

Now it doesn't look as bad.

Three hundred sixteen nights of reading with a modest 10.17 pages a night average. There are tons of zeros though. (Looking at you, August and September.)

Let's zoom in *even* further, and see what I was reading then.

```python
# Nightly Pages Read (July to October 2015)
df2 = df[['local_time', 'num_pages', 'book']].dropna()
df2 = df2.ix['07-2015':'10-2015']
df2 = df2.pivot(index='local_time', columns='book', values='num_pages')
df2.plot()
```

![Nightly Pages Read (July to October 2015)](/blog/assets/2016/2/5.png)

From July to October, I read zero pages 52 days. And that doesn't even include the five days in late-September, where I didn't record any data at all.

I guess [*The Man Who Smiled*](https://www.goodreads.com/book/show/39792.The_Man_Who_Smiled) and [*All The Light We Cannot See*](https://www.goodreads.com/book/show/18143977-all-the-light-we-cannot-see) were boring novels then. False! The data might not capture it, but I enjoyed both of them.

There *has* to be other factor(s) involved!

#### Correlations Between Pages Read & Other Things

Using the Pandas `df.corr()` method, I calculated the [Pearson correlation](https://en.wikipedia.org/wiki/Pearson_product-moment_correlation_coefficient) for number of pages read against step count, time of day, ambient audio (in dB), and number of photos taken.

My hypothesis was that pages read was somewhat *strongly*, inversely correlated with the other factors. Intuitively, it makes sense---the later you go to sleep, more you are walking around outside, etc, the less likely you will read more pages at night.

Perhaps because you are more tired.

However, the closest I got to a *strong* correlation was pages read versus step count. (Pages read versus photos taken was the second highest.)

_|Pages Read|Step Count
Pages Read|1|**-0.237353**
Step Count|**-0.237353**|1

Unfortuntately, I don't think there is a satisfying *quantitative* answer here. Or at least not with the data I have.

Qualitatively though, I think it was because I was in India having the time of my life with my friends.

And that's good enough for me.

---

### Notes

Tweet [@{{ site.twitter }}](https://twitter.com/{{ site.twitter }}) if you want to play around with my data or code.

[^1]: This is sort of terrifying.