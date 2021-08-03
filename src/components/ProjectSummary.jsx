import React, {useState} from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import "../styles/ProjectSummary.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import VisibilitySensor from 'react-visibility-sensor';
import { GatsbyImage } from "gatsby-plugin-image"


export default function ProjectSummary() {

  const [visibilityState, setVisibilityState] = useState(false)
  const fallback_image_name = "fallback-picture-unsplash";

  const data = useStaticQuery(graphql`
    query GetLatestProjects {
       allMarkdownRemark(filter: {fields: {collection: {eq: "projects"}}}, limit: 3) {
        nodes {
          id
          frontmatter {
            github
            slug
            title
            description
            tags
            deployedLink
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
    <VisibilitySensor partialVisibility  
     onChange={(isVisible) => setVisibilityState(isVisible) } >
    <div id="project-summary-container">
      <Fade top duration={800} when={visibilityState} ><h2>Recent Projects</h2></Fade>
      <div className="project-window">
        { data.allMarkdownRemark.nodes.map( (project, idx) => (
            <Fade duration={800} delay={200*(idx+1)} when={visibilityState} key={project.id}>
            <div className="project-thumb" >
              <Link to={"/projects/" + project.frontmatter.slug} >
                <h3>{ project.frontmatter.title }</h3>
              </Link>
              { displayTagsWithBadges(project.frontmatter.tags)}
              <GatsbyImage 
                image={ project.frontmatter.thumb? project.frontmatter.thumb.childImageSharp.gatsbyImageData : data.file.childImageSharp.gatsbyImageData} 
                alt={ project.frontmatter.title + " thumb" } />
              <p className="project-thumb-extract">
                { project.frontmatter.description }
              </p>
              <div className="project-button-row">
                <Link to={"/projects/" + project.frontmatter.slug} ><span>Description</span></Link>
                <a href={project.frontmatter.github} alt="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
                <a href={project.frontmatter.deployedLink} alt="Deployment link">Live</a>
              </div>
            </div></Fade>
          ) )
        }        
      </div>
      <Fade bottom duration={800} delay={500} when={visibilityState}>
        <Link to={`/all-projects`}><h3>All Projects</h3></Link>
      </Fade>
    </div>
    </VisibilitySensor>
  )
}

/* 




*/
