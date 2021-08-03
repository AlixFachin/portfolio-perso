---
title: About Recursive Algorithms
tags: Algorithms
slug: about-recursion
date: May 7th, 2021
thumb: ./ludde-lorentz.jpg
description: Generic review of recursive algorithms and advice to design such algorithms
---

> A thousand mile trip begins with a single step

| ![infinite staircase](./ludde-lorentz.jpg) |
|--|
| _Photo by [Ludde Lorentz](https://unsplash.com/@luddelorentz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_ |
  

Before diving into it, just a bit of background: I heard about recursive algorithms more than 20 years ago, in an applied maths lesson. With time and practice I found the way of thinking in recursion relatively natural - but looking around articles about recursion and YouTube videos I found plenty of information about call stacks etc, but something crucial was missing everywhere I looked: the general principle of recursion. In this article we will not look at code snippets, because the goal is to understand the general thought process, to ultimately help people coming up with recursive algorithms.
> Why recursion when you could use a for loop?

When you have to write down an algorithm, the initial idea very often comes first with a for loop. It is intuitive, maybe because you can clearly visualize the flow that the program will follow.
However, for some problems, it is difficult to see and plan your algorithm properly because you don't know the whole universe, and/or it is difficult to plan for everything.

## Example1: Compounded interest rates

For example, imagine you have a savings account which you cannot access for 10 years, and every Jan 1st the bank credits you 4% of the balance as of Dec 31st. How would you compute the account balance at any given year?
The first possibility would be to try and figure out a formula which enables you to compute the balance according to the date.
But more intuitively, if you know the balance of the previous year, it is easy to figure out the new balance:

`Balance(n+1)=Balance(n)*(1+0.04)`

The above expression is recursive, so writing down the function computing the account balance with a recursive algorithm will be easier.

## Example 2: Dog tail

![dog tail structure](./DogTail.png)

Imagine that you want to model the way a dog tail moves (in 2D). You can model the dog tail as a sequence of points representing each vertebrae, and the angle of each vertebra, and assume each vertebra of equal length l.
We can try to figure out the generic formula to compute the exact (X,Y) position of each vertebra, or we can just infer the position of one point according to the previous point. (trigger warning: it will involve some trigonometry. ouch.).
We have then x2=x1+cos(a)*l, and y2=y1+sin(a)*l.
We defined the coordinates of one point according to the previous one (which in turn is calculated from the previous one, etc…). This is typically a case where recursion is simpler than the iterative process.

![angle and trigonometry formula](./DetailedPoint.png)


## Example 3: Internal company communication
Let's look at an imaginary big company, with several departments (marketing, R&D, engineering, operations, HR, accounting, …). The CEO has an important message to send to all employees. They have two possibilities: A) Sending the message to each employee's individual e-mail address (that's the iterative version), or B) send the message to all department heads, asking them to tell the message to each team manager, who in turn need to tell the message to all the team members. (that's the recursive version). In this case the CEO doesn't need to know exactly how or when the message will be delivered by each department head, they just need to be confident that the message will be distributed.

## Putting it together
So instead of trying to have a global view and solve the whole problem, adopting a recursive viewpoint is focusing on a slightly smaller issue easier to control and imagine.
A basic version of a recursive algorithm would be the following:
If I assume the problem is solved at step n, how do I skip to step n+1?
In other words, instead of thinking about the whole solution, you just need to think about solving the jump from n to n+1, and you're in business.
For example:
With a sorted array of length n and an element x, what are the steps required to combine them into a sorted array of length (n+1)? [hint: One solution could be to compare x to other elements of the array until you find its right place, i.e. the element where array(i) ≤ x ≤ array(i+1), with the proper testing for corner cases)]
If you need to apply a function to each element of an array of size n, and you already applied the function to all elements of size (n-1), you just need to apply the function to the last element, and you got your solution for all the array.
Removing all duplicates from an array: If you have an array of length n-1 without any duplicates and an element x, you have to test if x is inside the small array. If x is present, no need to add it. If x is not present, add it to the array.

In some cases, the recursion is more complicated than just skipping from n to n+1, but the principle is similar:
If I have two sorted arrays of size n/2, how do I "merge" them to get a sorted array of size n? (Assuming n is even - if n is odd you have to assume one array of size n/2 and one array of size n/2+1).

## ome mention about initial cases
One thing is missing from a rigorous algorithm definition: initial cases. A recursive algorithm is made out of two pieces: Steps required to "jump" between n and n+1, and initial values.
Initial values are the steps required to "stop" the recursion calls and initiate problem-solving. To put it in other words, they are special values of n where you already know the solution, where you don't need to call the function recursively.
For example, if the problem is "sorting an array of size (n)", you may not know how to do it for all values of n. You decide to express the algorithm in a recursive way: "If I know how to do it for an array of size n-1, and I do the following steps with an additional element x, then I know how to do it for an array of size n". But, you know how to sort an empty array, right? (there is nothing to do). Likewise, you can figure out how to sort an array with only one element.
Setting up the initial cases will have your program effectively solve the problem for some cases, then with the "recursive jump" solving the problem for all cases. But if you forget the initial cases, your program risk to end up in infinite loops (woops).

# In Conclusion
I hope that this article has shed some light on the actual thought process to come up with the recursive algorithm: thinking about the transition from smaller sub-problems to a bigger one, instead of trying to solve with one fell swoop. This may feel like magic at the beginning, because it is not obvious how the problem is actually solved - but the code is generally much more readable this way!