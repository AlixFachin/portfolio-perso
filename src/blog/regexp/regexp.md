---
title: Some Regexp work
tags: javaScript, regexp
slug: regexp-and-linter
date: 2022-01-10
thumb: ./nerdy-equations.jpg
description: Having some fun with regexp to lint some riot files
---

![Very complicated stuff](./nerdy-equations.jpg)
_Photo by [Dan-Cristian Pădureț](https://unsplash.com/@dancristianp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText") on [Unsplash](https://unsplash.com/s/photos/formula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
\_

# Summary

Let's imagine that you are in a situation where your company at work doesn't use `eslint` and doesn't have any short-term plans to install it.
What do you do?
Well, one thing you _could_ do is to try and program by yourself something close enough to eslint.
This is what I did (definitely some type-II fun) and the result is at the following address: <https://github.com/AlixFachin/myriotlinter>

## How does it work

This is a `node` executable file, so you just need to type:

```
node riotlinter.js <riot-filename>
```

## About riot.js files

[Riot.js](https://riot.js.org) is a lightweight JavaScript front-end framework.
`Riot` makes me think a bit about an ancestor of Svelte (i.e. the user doesn't download Riot, but Riot is an actual compiler from `xyz.riot` towards HTML files).
Riot files are made from three blocks:

- An HTML block at the top
- A CSS block afterwards, between the `<style>` and `</style>` tags
- A JavaScript block, which can be surrounded by `<script>` and `</script>` tags, or just without any tags. (Although recent versions or Riot recommend surrounding your code with script tags).

## What I learned in the process

- [Do not try to parse HTML with RegExp!](https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/)
- JavaScript instructions around RegExp
- How to build RegExp (spoiler alert: _one step at a time_)

For this post we will only look at a quick introduction regarding `RegExp`. Have a look at the following posts for more information regarding regexp!

## Quick introduction regarding RegExp

A regular expression describes a potential word pattern.
For example, `/(\s=\S|\S=\s|\s=\s)/`.
This string describes conditions under which a string matches a pattern or not.
At its most basic, we have:

- The pattern matches if the string contains a fixed string: `/hello/` will match with all strings containing the word 'hello'.
- One more complicated step is when we authorize a character repeating an unknown number of times. `/he+llo/` will match with 'hello', but as well 'heeeeeello'. The `+` stands for _the character (or group) before must be present at least once_.
- Similar to above is the '*' which stands for *the character (or group) before must be present zero times or more*. So `/he*llo/` will match 'hello', 'hllo', 'heeeeeello'.
- If we want to match a few character repeating, we can use parenthesis to surround a group. For example, `/In the mountain you can hear an( echo)+/` will match 'In the mountain you can hear an echo', but as well 'In the mountain you can hear an echo echo echo echo`.

Then you can have:

- Matching not a specific character but a group of characters:
  - `[a-Z]` will match every character between `a` and `Z`.
  - `\s` will match any character which is whitespace. `\S` will match characters which are not whitespace
  - `.` will match any character except a new line (`\n`)
- Matching according to characters before or after the main pattern
  - `(?<x)pattern` will match if the pattern is after the pattern X
  - `(?<!x)pattern` will match if the pattern is _not_ after the pattern x
  - `pattern(?x)` will match if the pattern is followed by x
  - `pattern(?!x)` will match if the pattern is not followed by x
- Matching the pattern according to the position in the string
  - `^pattern` will match if the pattern is at the beginning of the string
  - `pattern$` will match if the pattern is at the end of the string

## Some Examples?

| Regular Expression | Meaning?                                                    |
| ------------------ | ----------------------------------------------------------- |
| `/===/`            | Matches when there is a triple equal sign in the file       |
| `/\s=\s/`          | Equal sign surrounded by two white spaces                   |
| `/\s=\S/`          | Equal sign with white space before and non-whitespace after |

## Your turn?

How would you write:

- A regular expression which matches if there is no space after an opening curly bracket: `{abc` would match, but `{ abc` would not trigger
- A regular expression which matches if there are parenthesis around an indentifier before an arrow function? So that ` (a) =>` would match but `a =>` wouldn't match

Answers in the next blog post!

As usual, Mozilla has a very good tutorial on this so if you are stuck feel free to have a look at:
[MDN Guide about regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

See you next time! 😎
