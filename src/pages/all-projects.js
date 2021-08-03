import React from "react";
import Layout from "../components/Layout.jsx"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/all-projects.css"

export default function allProjectsPage( {data}) {
  
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
      <h1>All Projects</h1>
      <div className="all-projects-grid">
          { data.allMarkdownRemark.nodes.map( (project, idx) => (
            <div className="project-thumb" key={`project-thumb-${idx}`}>
              <Link to={"/projects/" + project.frontmatter.slug} >
                <h3>{ project.frontmatter.title }</h3>
              </Link>
              { displayTagsWithBadges(project.frontmatter.tags)}
              <GatsbyImage 
                image={ project.frontmatter.thumb ? project.frontmatter.thumb.childImageSharp.gatsbyImageData : data.file.childImageSharp.gatsbyImageData} 
                alt={ project.frontmatter.title + " thumb" } 
              />
              <p className="project-thumb-extract">
                { project.frontmatter.description }
              </p>
              <div className="project-button-row">
                <Link to={"/projects/" + project.frontmatter.slug} ><span>Description</span></Link>
                <a href={project.frontmatter.github} alt="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
                <a href={project.frontmatter.deployedLink} alt="Deployment link">Live</a>
              </div>
            </div>
          ) )
        }        
      </div>
    </Layout>
  )
}

export const query=graphql`
query MyQuery {
  allMarkdownRemark(filter: {fields: {collection: {eq: "projects"}}}) {
    nodes {
      frontmatter {
        date
        deployedLink
        description
        slug
        github
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
  file(name: {eq: "fallback-picture-unsplash"}){
    childImageSharp {
      gatsbyImageData(width:200)
    }
  }
}
`;