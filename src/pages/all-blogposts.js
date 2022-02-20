import React from "react";
import Layout from "../components/Layout.jsx"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/all-blogposts.css"
import SEO from "../components/SEO.jsx"

export default function allBlogPostsPage( {data}) {
  
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
      <SEO title={"Alix Fachin portfolio website - software development blog post roll"} 
        description="Recent blog posts regarding software development. Author: Alix Fachin" />
      <h1>All Blog Posts</h1>
      <div className="all-blogposts-grid">
          { data.allMarkdownRemark.nodes.map( (post, idx) => (
            <div className="blogpost-thumb" key={`post-thumb-${idx}`}>
              <Link to={"/posts/" + post.frontmatter.slug} >
                <h3>{ post.frontmatter.title }</h3>
                { displayTagsWithBadges(post.frontmatter.tags)}
                <GatsbyImage image={post.frontmatter.thumb.childImageSharp.gatsbyImageData} alt={ post.frontmatter.title + " thumb" } />
                <p className="blogpost-thumb-extract">
                  { post.frontmatter.description }
                </p>
              </Link>
            </div>
          ) )
        }        
      </div>
    </Layout>
  )
}

export const query=graphql`
query getAllBlogPosts {
  allMarkdownRemark(
      filter: {
        fields: { collection: {eq: "blog"} },
        frontmatter: { tags: { regex: "/^(?!.*draft).*/" }}
      }
      sort: {fields: frontmatter___date, order:DESC}
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
            gatsbyImageData(width:200)
          }
        }
      }
    }
  }
}
`;