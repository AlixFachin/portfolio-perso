import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, image: metaImage, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null

return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}

      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: `website`,
        },
        {
          property: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          property: 'twitter:title',
          content: title,
        },
        {
          property: 'twitter:description',
          content: metaDescription,
        },
      ]
      .concat( metaImage? [
        {
          property: "og:image",
          content: image,
        },
        {
          property: "og:image:width",
          content: metaImage.width,
        },
        {
          property: "og:image:height",
          content: metaImage.height,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ] : [
        {
          name: "twitter:card",
          content: "summary",
        },
      ]).concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO