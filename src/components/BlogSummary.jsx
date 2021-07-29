import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import "../styles/BlogSummary.css"

export default function BlogSummary() {

  const data = useStaticQuery(graphql`
    query GetLatestBlogPosts {
       allMarkdownRemark(filter: {fields: {collection: {eq: "blog"}}}, limit: 3) {
        nodes {
          id
          frontmatter {
            slug
            title
            tags
            date
          }
          excerpt
        }
      }
    }
  `);

  return (
    <div id="blog-summary-container">
      <h2>Recent Articles</h2>
      <div className="blog-posts-list">
        {
          data.allMarkdownRemark.nodes.map( post => (
            <div className="post-thumb">
              <h3>{ post.frontmatter.title}</h3>
              <p> { post.excerpt} </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
