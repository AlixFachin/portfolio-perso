import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  const data = useStaticQuery(graphql`
      query SiteInfo {
      site(siteMetadata: {}) {
        siteMetadata {
          description
          title
          copyright
        }
      }
    }
  `);

  const { copyright } = data.site.siteMetadata;

  return (
    <footer>
      <div className="social-links-row">
        <a href="https://www.linkedin.com/in/alix-fachin/" alt="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/AlixFachin" alt="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://twitter.com/AlixDev5" alt="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
      <hr />
      <p className="footer-disclaimer"> { copyright } </p>
      <p className="footer-disclaimer">
        Realized with love, sweat and coffee (maybe in a different order) using <a href="https://www.gatsbyjs.com">Gatsby.js</a>
      </p>
    </footer>
  )
}

