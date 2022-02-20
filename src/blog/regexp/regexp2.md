---
title: JavaScript RegExp cheat sheet
tags: javaScript, regexp
slug: regexp-cheatsheet
date: 2022-02-19
thumb: ./nerdy-equations.jpg
description: JavaScrip RegExp sheet
---

![Complicated equations on a blackboard](./nerdy-equations.jpg)
_Photo by [Dan-Cristian Pădureț](https://unsplash.com/@dancristianp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText") on [Unsplash](https://unsplash.com/s/photos/formula?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
\_

# Summary

Here is a quick cheatsheet that I use to remind me of the main features of the `regexp` classes.
(This document being meant to be printed / PDF-ed, I will make as little commentary as possible)

# Character types/classes

| Symbol | Meaning?                                                              |
| ------ | --------------------------------------------------------------------- |
| `.`    | Matches any character, _except newline_                               |
| `\d`   | Matches any **d**igit, i.e. [0-9]                                     |
| `\D`   | Matches anything which is _not_ a digit                               |
| `\w`   | Matches any alphanumeric character, and underscore. (So [A-Za-z0-9_]) |
| `\w`   | Matches any character which is not an alphanumeric character          |
| `\s`   | Matches any whitespace character (space, tag, line feed)              |
| `\t`   | Matches an horizontal tab                                             |

## Assertions, i.e. tests

| Symbol    | Meaning?                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------- |
| `^`       | Matches the beginning of an input (or immediately after line break in multiline mode)                         |
| `$`       | Matches the end of input (or immediately before linebreak in multiline mode)                                  |
| `\b`      | Matches a word boundary. This is not a character per se, just the indication of word break                    |
| `\B`      | Matches a non-word boundary                                                                                   |
| `x(?=y)`  | Matches x only if it followed by y. Ex: `<(?==)` matches the character `<` in `<=` but not `<`                |
| `x(?!=y)` | Matches x only if it is not followed by y. Ex: `<(?!=)` matches `<` but not `<=`                              |
| `(?<=y)x` | Matches x only if x is preceded by y. Ex: `(?<==)>` matches the `>` in `=>`                                   |
| `(?<!y)x` | Matches x only if x is preceded by y. Ex: `(?<!=)>` doesn't match the `>` in `=>` but does match a simple `>` |

## Group and Ranges

| Symbol     | Meaning?                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------- |
| `x \| y`   | Matches x or y. Example: `or \| and` will match `or` and `and`, but will not match `o`       |
| `[xyz]`    | Matches each of the characters in the square brackets, not their concatenation               |
| `[^xyz]`   | Matches any character not part of the sample                                                 |
| `(x)`      | Matches x and remember the match, in a "group". (See functions below)                        |
| `(name:x)` | Matches x and remember the match, in a "group", under the name "name". (See functions below) |

## Most used functions

| Function                                     | Memo                                                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `regexpObj.test(stringParam)`                | returns true or false, whether `stringParam` contains a match for `regexpObj`                     |
| `stringParam.search(regexpObj)`              | returns the index of the first match, or -1 if not found                                          |
| `stringParam.matchAll(regexpObj)`            | returns an iterator of all the matches. (Can be used with `for ... of` or with a spread operator) |
| `stringParam.replaceAll(regexpObj, string2)` | returns a new string where all matches of `regexpObj` have been replaced by `string2`             |

See you next time! 😎
