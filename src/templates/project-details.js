import React from 'react'
import Layout from '../components/Layout.jsx'
import "../styles/ProjectDetails.css"
import { graphql } from "gatsby"

export default function ProjectDetails( { data }) {
  const { html } = data.markdownRemark;
  const { title, tags } = data.markdownRemark.frontmatter;
  

  return (
    <Layout>
      <article className="project-details">
        <h2>{title}</h2>
        <h3>{tags}</h3>
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
      }
    }
  }
`;