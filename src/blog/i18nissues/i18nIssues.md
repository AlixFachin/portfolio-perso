---
title: Work in progress - Internationalization in Gatsby
tags: gatsby, i18n, questions
slug: i18n-gatsby-progress
date: 2022-05-11
thumb: ../bookReviews/reading_book.jpg
description: My questions and hurdles regarding using i18n with Gatsby
---

# Summary

This post is a bit special as it sums-up my current progress (or rather lack thereof) is making this site using internationalizion. (or i18n between friends).

# Packages used, References

## Link to public repo

The GitHub for this site is the following:
<https://github.com/AlixFachin/portfolio-perso>

## Extract of package.json

```js
{
    "gatsby": "^4.13.1",
    "gatsby-plugin-react-i18next": "^1.2.3",
    "i18next": "^21.6.15",
    "i18next-browser-languagedetector": "^6.1.4",
    "i18next-resources-to-backend": "^1.0.0",
    "react-i18next": "^11.16.5",

}
```

# The Objective(s)

I would like the site to be in two languages, English and Japanese.

- The main "home" page has a language switcher to choose btw displayed language.
- All the buttons, menus and static stuff is translated and managed through `i18next`
- The content is actually duplicated: one `.md` file for English, one `.md` file for Japanese.
- I translate content even more slowly than I produce content, so the system should be able to handle content only available in one language
- As a start, content queries (i.e. the project summary / blog post summary at the top) should return only the content in the current language
- Ideally the content should be accessed with a localized path, e.g. `/en/projects/xyz` or `/ja/projects/xyz`
- I don't especially want to set the language to an automated language switcher. People should be able to switch.

## The issues

## First Steps

I chose to work with `i18-next` because of the versatility (Most likely I will work with this system again in the future).
I didn't want to use the official package of `gatsby-react-plugin-18next`, as I didn't want to increase complexity too much and import a package if it is not needed.

### Where I arrived

- I managed to load two locales on the home page, with various namespaces.
- I have a component called `i18.jsx` which is imported by various other pages (language switcher component, main `index.js` file)
- The JSON localization files are all loaded in memory during site init with the following code:

```js
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`../locales/${language}/${namespace}.json`)
        .then(resources => {
          callback(null, resources)
        })
        .catch(error => {
          console.log("Error during loading of translation files")
          console.error(error)
          callback(error, null)
        })
    })
  )
```

I tried to import static files as they were used but I remember that between the `Suspense` feature and the question "but where are static files once the site is built?", I didn't manage to go very far with this idea.

- When you click on the language switcher (English / Japanese), the language actually changes

So all in all, the home page works!
But then I want to have dynamic routes for the content in English or in Japanese, i.e. `/en/all-blogposts` for the blog roll of blogs in English and `/ja/all-blogposts` for the blogroll of posts in Japanese - and likewise for project. Ideally as well a `/en/posts/post-xyz-slug` given that two different languages would share the same slug for a given post (so `/posts/post-xyz-slug` would not work).

I tried to mess with the `gatsby-node.js` given that (AFAIK) that's where the dynamic routes are created / setup - but no success. I always ended up with "page does not exist" and didn't figure out why the page was not created.
(On top of this, I needed to import again the `i18n` object in the `gatsby-node.js` file, which feels strange, given that this code is ran on the server at build time, so I need to use the `require` instead of the `import` syntax, but as long as it works!)

So I decided to...

### Use the `gatsby-plugin-react-i18next` to create dynamic localized routes

And this broke the home page.
So now (the latest version on GitHub, as of May 11th), I have:

- The Home page doesn't find the actual translation anymore (displaying the `Hero.hero_welcome` JSON object key instead of the actual translation)
- An error in the console (related to this):

```
No translations were found in "locales" key for "/".
You need to add a graphql query to every page like this:

export const query = graphql`
  query($language: String!) {
    locales: allLocale(language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
```

As I paste this query into `index.js`, no errors seems to be raised, the site automatically redirects to `/en/` path.
However I get a 404 when I manually type the `/ja/` path in the address bar.
Likewise, I get a 404 when I request manually the `/ja/all-blogposts/` or `/en/all-blogposts`.
It seems that the Gatsby plugin in charge of allocating the routes to a given locale is not working properly.

So the following questions remains:

- How are the routes created by the Gatsby plugin and how to set those up properly?
- If I need to add a GraphQL query on each page route, how would this GraphQL query interface with already existing query? (e.g. query to find all the blog posts etc.)? Where does the language parameter come from?
- Do I still need to load the `i18n` component or is it handled now by the Gatsby plugin?

Now that my other project is behind me, I'll keep working on this and post regular updates...
