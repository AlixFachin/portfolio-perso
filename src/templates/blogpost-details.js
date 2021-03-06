import React from 'react'
import Layout from '../components/Layout.jsx'
import "../styles/BlogPostDetails.css"
import { graphql } from "gatsby"
import SEO from "../components/SEO.jsx"

export default function BlogPostDetails( { data, location }) {
  const { html } = data.markdownRemark;
  const { title, tags } = data.markdownRemark.frontmatter;
  
  function displayTagsWithBadges(tagsString) {
    const tagArray = tagsString.split(",");
    return (
      <div className="tagList">
        { tagArray.map(tag => (
            <div className="tag" data-tag={tag.trim()} key={tag.trim()}>
              {tag.trim()}
            </div>
          ))
        }      
      </div>);
  }

  return (
    <Layout>
      <SEO title={title}
        description= {"Alix Fachin's blog: " + data.markdownRemark.frontmatter.description }
        image={ data.markdownRemark.frontmatter.thumb? data.markdownRemark.frontmatter.thumb.childImageSharp.resize : "" }
        pageUrl={location.href}
      />
      <article className="blogpost-details">
        <h1 className="blogpostTitle">{title}</h1>
        {displayTagsWithBadges(tags)}
        <div className="blogpost-body" dangerouslySetInnerHTML={ { __html: html }  } />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetBlogPostFromSlug($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        date
        slug
        tags
        title
        description
        thumb {
          childImageSharp {
            resize(width:1200) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`;