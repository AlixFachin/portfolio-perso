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
        date
        slug
        title
        tags
      }
      excerpt
    }
  }
    }
  `);

  console.log(data);

  return (
    <div id="project-summary-container">
      <h2>Recent Projects</h2>
      <div className="project-window">
        { data.allMarkdownRemark.nodes.map( project => (
            <div className="project-thumb" >
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <h3>{ project.frontmatter.title }</h3>
              </Link>
              <p>{ project.frontmatter.date}</p>
              <p className="project-github-link">
                  <a href={project.frontmatter.github} alt="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
              </p>
              <p className="project-thumb-extract">
                { project.excerpt }
              </p>
            </div>
          ) )
        }        
      </div>

    </div>
  )
}

/*




*/
