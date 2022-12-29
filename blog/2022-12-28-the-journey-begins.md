---
title: The Journey Begins
authors: [masto]
---

I've decided to start a blog. Again, I guess. Once in a while, I get the
urge to do this, and it hasn't stuck with me yet. I'm not sure this one will
last either, because it's prompted more by the urge to play with some new
software than the actual commitment to regularly write something.

<!-- truncate -->

For reasons that may be explained elsewhere later, I put up a [web
site](https://masto.xyz/ChatGPT/) yesterday. In the tedious process of
getting that simple thing online, I realized that 1: I don't think I
have a web site anymore, in the sense of some place to just dump stuff;
and 2: it might be interesting to try out some different ways of setting
up a blog/site and different ways of hosting them. Or it might not be
interesting at all. In either case, I have time off for the holidays and
I like to keep up with stuff, so I'll make this a mini project for the
afternoon regardless of whether or not it's interesting.

I'm writing this now, a few minutes into starting this adventure,
because I want to document the process along the way. Then if I ever get
the blog working, this will be the first post.

## Enough of the intro, let's start doing something

Here's my thought process so far. I have a number of different places I _could_
be hosting things:

- I have an unlimited sites plan with Dreamhost that I've been paying for since
  2006, and I'm not really using it. I can put static content there (obviously),
  and they also have a one-click Wordpress install. They also support PHP and
  CGI with the usual languages, so I could probably install any number of
  blogging/CMS applications. Pros: managed hosting, already paying for it,
  could be up and running in minutes. Cons: a full CMS feels old school, not
  really learning anything new, been there and done that.
- Back in ancient times when LiveJournal was a thing, I got in on one of their
  "pay once for lifetime of whatever their paid offering is" deals, so I have
  that thing lying around unused. Pros: free blogging platform all set up and
  ready to go. Cons: who wants to be on LiveJournal, what's up with the Russians
  anyway, also just not interesting.
- Just Use Squarespace or the like. Pros: don't have to DIY it, probably pretty
  templates. Cons: the whole point is to DIY it, don't want another subscription
  to something I won't use.
- Host it in the house and forward the traffic. I already have the
  infrastructure for some other projects, and I could slap nginx on it in a
  couple of minutes. Pros: fully under my control, no metered
  CPU/storage/transfer, trivial setup. Cons: now I'm maintaning one more thing,
  serving a web site from a home connection is not a great idea, no fault
  tolerance or ability to play with distributed hosting.
- Cloud provider. I've done some stuff with Google Cloud before, and I'd like to
  practice with more of their offerings. I also have a Linode VPS that I
  literally just remembered as I was writing this sentence. Pros: let the SREs
  keep the server running, more opportunity to try out the tech the kids are
  using these days. Cons: some cloud services have big and/or unpredictable
  bills attached, potentially overcomplicated setup (storage buckets, what?),
  may be harder to move.

I spent a lot of time making that list when I knew I probably wanted to
try Google Cloud from the beginning. Sticking it on Dreamhost, Linode,
or my home server would be easy and pretty much standard static web
serving stuff, which makes it less interesting. I've been doing that for
literally decades, so I'd like to see what's new.

One thing I didn't mention in that list: Cloudflare. Ironically, because the
impetus for writing this was that I started looking at Cloudflare Pages' [list
of framework
guides](https://developers.cloudflare.com/pages/framework-guides/), and I
wanted to make notes somewhere. I'm not actually sure whether Pages is an
option, first I need to see what they offer and what the pricing model is. No
time like the present:

## Looking into Cloudflare Pages

Haven't found the pricing yet, but the first thing they describe is about
deployment. Looks like they explicitly support GitHub and GitLab, as well as
tools to deploy manually. I'm not averse to pushing through GitHub.

> Cloudflare Pages is a JAMstack platform for frontend developers to
> collaborate and deploy websites.

I know what some of those words mean. What is a JAMstack? Ok:
<https://jamstack.org>. "Jamstack is an architectural approach that decouples
the web experience layer from data and business logic, improving flexibility,
scalability, performance, and maintainability." Ok. I guess I'm out of date,
this seems to be a trend from 2016. In my defense, working at Google quickly
puts you out of touch with the outside world. Which is one reason I'm doing
this project. I still don't know WTF a JAMstack is, though. Oh, funny. There's
[jamstack.wtf](http://jamstack.wtf). At least that tells me it's "JavaScript,
API, and Markup". How is this different from a single page application?

A little reading later: it's the kids coming up with a new way to refer
to something like a hybrid between an SPA and a static site generator.
Where the frontend makes API calls but it's really important that
absolutely positively everything is static files and you have to rebuild
the whole site to change the content. Ok, fine, whatever. Where was I?
Oh, Cloudflare Pages. Pricing. Shouldn't be so hard. Free tier =
unlimited sites, unlimited bandwidth. The limits seem to be "1 build at
a time" (whatever), "500 builds per month" (can't see that impacting
me), and "100 custom domains per project" (unless I'm misunderstanding
what a domain is, I need exactly 1). So maybe this is a thing I can try
out too.

I also want to look at my options for the software, since that list of
framework guides makes me want to check them all out.

## Software options

I'm not going to catalog everything here. I'm skipping over the ones that are
application development framerworks and focusing on the SSGs or at least
things that make it easy to deploy a blog.

### Docusaurus

The first thing to catch my eye is Docusaurus. Thought I'd skip it because it's
for documentation, but apparently not. Well ok, I guess it is optimized for
documentation. It looks cool though so I still want to try it.

This one kind of blew my mind: I followed the getting started instructions to
install it (one npm command) and was greeted with a message telling me there are
21 security vulnerabilities in the dependencies. I mean, I guess it's good that
npm is tracking these things now. But one would hope that goes along with fixing
them. Ah, Node.

So we're up and running. Coming back here just to say I think if I do have a
SSG, I'm leaning toward the Ah, Node ecosystem rather than Go. No reason really,
just personal biases. Back to completing the tutorial...

## _Time passes..._

I stopped the stream-of-consciousness description of everything I was doing, for
one thing because I was temporarily working on a different computer where I
didn't have access to this document, and also because I was focused on trying to
complete the task. So I'll just summarize here: I ended up deciding on
Docusaurus. I did check out some of the other options, but nothing seemed
particularly compelling. The downside of Docusaurus is that it takes some effort
to not make it look like a documentation site, but the upside is that I realized
I can re-use some of the documentation stuff for project writeups. So maybe it's
not that bad after all.

I managed to figure out Cloudflare Pages, move my DNS over (twice, because I
changed which domain I wanted to use after setting it up the first time), create
the Github repositories, and all the other steps to get this site deployed. If
you can read this, I was successful at putting this post on my new blog.

I don't think I'm going to spend time looking at other ways to host this site,
because Cloudflare Pages is actually pretty awesome. Maybe sometime I'll have
the time to write more about it. But now it's late and I'm done for the day. My
next task is to figure out how to change the styles on this thing and get a
reasonable landing page going.

And now it's late the next day and I've managed to style the blog in a
way I find reasonably acceptable. So here it is: my first post! Now I need to
find time to make more content.
