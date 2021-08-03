---

title: RecipeTracks
date: June 10th 2020
tags: Python, Django
github: https://github.com/AlixFachin/RecipeTracks
slug: recipetracks
description: Bilingual recipe collection website in Django
deployedLink: http://afachin.pythonanywhere.com
thumb: ./RecipeTrack_screenshot.png
featuredImg: ./RecipeTrack_screenshot.png
---

## Summary 🧑‍🏫
Website based on Django which allows users to store their own set of recipes, and to record their previous experimentations and notes.

More than a recipe database, this website app is made to keep track of the users experiments as a tool to actually improve one's cooking skills. Recipes should be flexible, according to one's taste and hardware (I am pretty sure that my oven cooks pound cakes in a different time than most of the other ones). Keeping track of all those experiments is the equivalent of handwritten notes on old recipe books!

## Seeing it live! 👍
The app is currently deployed at [Python Anywhere](http://afachin.pythonanywhere.com)

## Features 🛠️
* [User authentication](https://docs.djangoproject.com/en/3.2/topics/auth/) via Django
* Saving recipes in the database with `sqllite` DB
* Users are able to add a "track" to a recipe, which is a personal annotation to the recipe. (For example: I tried to bake the cake 45 minutes but it was too little, I want to try 55 minutes next time). [As an aside, this feedback loop is essential to mastering any skill, cooking being one of them]
* Multi-lingual website thanks to the [i18n](https://docs.djangoproject.com/en/3.2/topics/i18n/) django package

## Tech used 🛠️
* The website uses [Django]() as a framework, and obviously **Python** as a language
* Django templates are "beautified" using [Bootstrap](https://getbootstrap.com/)

## Docker compose file
Included in this repo is a 'docker-compose' file.
This helps setting up the app if you want to run it locally. If you want to run the application locally with Docker, you just need to do the following:
1. Add a `secrets` folder where configuration files will be stored.
1. Add a `.env` configuration file in the `secrets` folder with the Django configuration file (SECRET_KEY and DEBUG)
1. Run `docker compose up --build` in the project root folder. Docker will download the corresponding images and (theoretically) will run everything properly.