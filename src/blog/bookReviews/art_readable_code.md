---
title: The Art of Readable Code - review
tags: book, review
slug: art-readable-code
date: 2022-02-13
thumb: ./reading_book.jpg
description: Review of the book "The Art of Readable Code"
---

![Reading a book](./reading_book.jpg)

Photo by [Alice Hampson](https://unsplash.com/@alice_hampson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText") on [Unsplash](https://unsplash.com/s/photos/learning-books?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

# Summary 🔖

The other day my manager recommended me the following book, in order to strengthen my coding skills: ["The Art of Readable Code"](https://www.oreilly.com/library/view/the-art-of/9781449318482/).
I am coding for a long time, but no one really had to review my code, so I ended up getting some bad habits and sometimes generating code which is tough to read.

# The Book Content 📙

This book do not explain you algorithms or a specific language. It focuses instead on good practices which are valid for (almost) all modern languages. (_Note_: I know only a few modern languages, so I cannot verify this claim.).
It is separated into a few different parts:

- Surface-level improvements (variable names, code aesthetics, ...)
- Simplifying loops and logic
- Reorganizing code
- Other Topics (Writing tests, run-through of complex example)

# What I remembered from this book 🤔

Before reading this book, I thought that arguments about code styling were pretty useless and a waste of time, kind of "is spinach better than broccoli?".
This book's examples showed me that following some patterns do improve readability. Other patterns do degrade readability, which I didn't really realize before.
I will remember that:

- When seeing some statements logically related, group them and add a comment before
- Try to keep classes / functions at being responsible of one thing at a time
- Eliminating variables where they don't add much insight (e.g. used only once). Add some in other places where they improve readability
- Test for edge cases early and exit with `return`, `break` or `continue`. (Which for some reason I found "dirty" before).

But most importantly of all, now I will add another pass after writing my code, and I will know what to look for.
Before my code writing was: `think -> code -> test -> fix -> submit`, while from now on I will be able to add another pass of `refactor/simplify`. Knowing what to look for during this phase will hopefully improve readability

# A few points to note 🖐️

Everything is not perfect, and there are still some points I find could have been better in this book:

- This book is not language specific, but it is still better to know the basics of `JavaScript` and `C++` to understand the examples. If you don't understand the languages you will miss some points and subtleties...
- Some advice is pretty generic, and end up being more subjective than anything else.
- In particular, the naming of variables and functions end up being pretty specific. I am not a native English speaker, neither are my co-workers, so this ends up being a point of discussion pretty often. (As an aside, I needed a bit of time to understand that when Japanese people of my company say 'neck', they mean 'bottleneck' and other non intuitive abbreviations...)

# Final advice 👏

All in all, this is a book pretty easy to read which contains some gems and some useful examples. I still have doubts about some topics (e.g. naming variables and functions) which still end up containing a hefty dose of objectivity. This book can still be helpful in avoiding big mistakes, rather than trying to get the perfect code.

Let's see in a few months if I read some parts again, to make sure that the content is well digested!

Here is the link one more time: ["The Art of Readable Code"](https://www.oreilly.com/library/view/the-art-of/9781449318482/).
