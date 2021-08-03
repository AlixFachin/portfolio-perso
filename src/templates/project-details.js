import React from 'react'
import Layout from '../components/Layout.jsx'
import "../styles/ProjectDetails.css"
import SEO from "../components/SEO.jsx"
import { graphql } from "gatsby"

export default function ProjectDetails( { data, location }) {
  const { html } = data.markdownRemark;
  const { title, tags, deployedLink } = data.markdownRemark.frontmatter;
  
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
        description={"Alix Fachin coding project: " + data.markdownRemark.frontmatter.description} 
        image={ data.markdownRemark.frontmatter.thumb? data.markdownRemark.frontmatter.thumb.childImageSharp.resize : "" }
        pageUrl={location.href} />
      <article className="project-details">
        <h1 className="projectTitle">{title}</h1>
        {displayTagsWithBadges(tags)}
        { deployedLink ? <p>Deployed at: <a href={deployedLink}>{deployedLink}</a> </p> : "" }
        <div className="project-body" dangerouslySetInnerHTML={ { __html: html }  } />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query GetProjectFromSlug($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        date
        slug
        tags
        title
        description
        deployedLink
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