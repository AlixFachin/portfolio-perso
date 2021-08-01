import React from 'react'
import Layout from '../components/Layout.jsx'
import "../styles/ProjectDetails.css"
import { graphql } from "gatsby"

export default function ProjectDetails( { data }) {
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
        deployedLink
      }
    }
  }
`;