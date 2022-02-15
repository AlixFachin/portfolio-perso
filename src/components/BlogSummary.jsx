import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import "../styles/BlogSummary.css"
import Fade from 'react-reveal/Fade'
import { GatsbyImage } from "gatsby-plugin-image"

import { DateTime } from 'luxon';

export default function BlogSummary() {

  const data = useStaticQuery(graphql` {
    allMarkdownRemark(
      filter: {fields: {collection: {eq: "blog"} }, frontmatter: {tags: {regex: "/^(?!.*draft).*/"}}}
      sort: {fields: frontmatter___date, order: DESC}
      limit: 3
    ) {
      nodes {
        frontmatter {
          date
          description
          slug
          tags
          title
          thumb {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
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
            const postDate = DateTime.fromISO(post.frontmatter.date);
            return (
            <div className="post-and-thumb-container" key={`post-container-${idx}`}>
              <Fade left duration={800} key={`post-thumb-${idx}`}>
                <GatsbyImage image={post.frontmatter.thumb.childImageSharp.gatsbyImageData} alt={`thumbnail for ${post.frontmatter.slug}`} />
              </Fade>
              <Fade right duration={800} key={`post-summary-${idx}`}>
                <Link to={`/posts/${post.frontmatter.slug}`}>
                  <div className="post-summary">
                    <h3>{ post.frontmatter.title}</h3>
                    <p> { post.frontmatter.description} </p>
                    <p className="dateBadge"> { postDate.toLocaleString() } </p>
                  </div>
                </Link>
              </Fade>
            </div>);
          })
        }
      </div>
      <Fade bottom delay={600} duration={800} ><Link to={`/all-blogposts`}><h3>All Blog Posts</h3></Link></Fade>
    </div>
  )
}
