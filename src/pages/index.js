import React, { Suspense } from "react";
import Hero from "../components/Hero.jsx"
import Footer from "../components/Footer.jsx"
import ShortBio from "../components/ShortBio.jsx"
import ProjectSummary from "../components/ProjectSummary.jsx"
import BlogSummary from "../components/BlogSummary.jsx"
import ContactMe from "../components/ContactMe.jsx"
import SEO from "../components/SEO.jsx"
import Spinner from "../components/Spinner.jsx";

import { graphql } from "gatsby";

import '../components/I18n'

export default function Home({ data }) {
  return (
    <div id="mainContainer">
      <SEO title="Alix Fachin website portfolio" />
      <Suspense fallback={<Spinner />}>
        <Hero />
        <ShortBio />
        <BlogSummary />
        <ProjectSummary />
        <ContactMe />
      <Footer />
      </Suspense>
    </div>
  )
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language }}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
