---
title: Kaji-Buntan
date: May 20th 2022
tags: React.js, Next.js, MUI
github: https://github.com/kaji-buntan-project/kaji-buntan
slug: kaji-buntan
description: hackathon made with Code for Japan and NHK
deployedLink: https://kajibuntan.com
thumb: ./kaji-buntan-thumb.png
featuredImg: ./kyle-arcilla-9PO1tMtT_QA-unsplash.jpg
---

# Kaji-Buntan

## Overview

This project was made during a two-month long "hackathon" organized by [Code For Japan](https://www.code4japan.org/en) and the NHK.
The result was featured in a TV program broadcasted on the NHK.
At the beginning, the objective was to develop an app related to education and related challenges.
The team was driven by [Ayumi Igarashi](https://sites.google.com/site/eigarashayumi/home), assistan professor at the National Institute of Informatics. I was one of the three web-developers involved with the actual application.
We all coded the application on our spare time, during the course of a month or so.

## Principle

- The application aims to put into practice an algorithm of "fair" distribution of household chores. The actual mathematical definition of "fair" is pretty complicated, but let's say for now that it means that it optimizes the degree of "pain" felt by each individual.
  Each individual has then to enter the time it takes for them to complete each task, then how much "pain"/"joy" is felt doing the task. (I like cooking, so spending one hour cooking will be less bad for me than if my partner hates cooking but, say, doesn't mind doing the dishes).
- If you are interested in the algorithm determining the "fair share" of chores, don't hesitate to read [Igarashi-san's paper](https://www.ijcai.org/proceedings/2019/0008.pdf)!
- At the beginning I explored using _Firebase_ to save the task distribution and weights, and for authentication. It ended up being a bit too ambitious for the scope of the progress - and for research purposes we needed users to be able to fill in data without having to actually log in or create a login.

## Tech stack used

- The site is developed in `React.js` under a `Next.js` platform, using the `Material UI` library.
- The site is deployed on `Netlify`

## Photo credit

Photo by [Kyle Arcilla](https://unsplash.com/@kylearcilla?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/chores?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
