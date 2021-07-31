import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import "../styles/BlogSummary.css"
import Fade from 'react-reveal/Fade'

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
      <Fade top={true} delay={100} duration={800} ><h2>Recent Articles</h2> </Fade>
      <div className="blog-posts-list">
        {
          data.allMarkdownRemark.nodes.map( (post, idx) => (
            <Fade left={ (idx %2 === 0)} right={(idx%2 !== 0)} duration={800} key={post.frontmatter.title}>
              <div className="post-thumb">
                <h3>{ post.frontmatter.title}</h3>
                <p> { post.excerpt} </p>
              </div>
            </Fade>
          ))
        }
      </div>
    </div>
  )
}
