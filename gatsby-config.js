/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Alix Fachin portfolio',
    description: 'Portfolio website for Alix Fachin - software developer',
    copyright: 'Copyright 2021 - Alix Fachin',
    keywords: 'JavaScript, Developer, Front-end development, Back-end development, portfolio',
    siteUrl: 'https://www.alix-fachin.dev',
    author: '@AlixDev5'
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-highlight-code',
            options: {
              terminal: "carbon",
              theme: "blackboard",
            },
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      }
    },
  ],
}
