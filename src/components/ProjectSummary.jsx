import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import "../styles/ProjectSummary.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function ProjectSummary() {

  const data = useStaticQuery(graphql`
    query GetLatestProjects {
       allMarkdownRemark(filter: {fields: {collection: {eq: "projects"}}}) {
    nodes {
      id
      frontmatter {
        github
        slug
        title
        description
        tags
        deployedLink
      }
    }
  }
    }
  `);

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
    <div id="project-summary-container">
      <h2>Recent Projects</h2>
      <div className="project-window">
        { data.allMarkdownRemark.nodes.map( project => (
            <div className="project-thumb" key={project.id}>
              <Link to={"/projects/" + project.frontmatter.slug} >
                <h3>{ project.frontmatter.title }</h3>
              </Link>
              { displayTagsWithBadges(project.frontmatter.tags)}
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

    </div>
  )
}

/* 




*/
