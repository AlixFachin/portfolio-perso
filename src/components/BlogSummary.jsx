import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import "../styles/BlogSummary.css"
import Fade from 'react-reveal/Fade'
import { GatsbyImage } from "gatsby-plugin-image"

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
            description
            thumb {
            childImageSharp {
              gatsbyImageData(width:200)
              }
           }
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
          data.allMarkdownRemark.nodes.map( (post, idx) => {
            
            return (
            <div className="post-and-thumb-container" key={`post-container-${idx}`}>
              <Fade left duration={800} key={`post-thumb-${idx}`}>
                <GatsbyImage image={post.frontmatter.thumb.childImageSharp.gatsbyImageData}  />
              </Fade>
              <Fade right duration={800} key={`post-summary-${idx}`}>
                <Link to={`/posts/${post.frontmatter.slug}`}>
                  <div className="post-summary">
                    <h3>{ post.frontmatter.title}</h3>
                    <p> { post.frontmatter.description} </p>
                  </div>
                </Link>
              </Fade>
            </div>);
          })
        }
      </div>
    </div>
  )
}
