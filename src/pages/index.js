import React from "react";
import Hero from "../components/Hero.jsx"
import Footer from "../components/Footer.jsx"
import ShortBio from "../components/ShortBio.jsx"
import ProjectSummary from "../components/ProjectSummary.jsx"
import BlogSummary from "../components/BlogSummary.jsx"
import ContactMe from "../components/ContactMe.jsx"
import SEO from "../components/SEO.jsx"

export default function Home() {
  return (
    <div id="mainContainer">
      <SEO title="Alix Fachin website portfolio" />
      <Hero />
      <ShortBio />
      <BlogSummary />
      <ProjectSummary />
      <ContactMe />
      <Footer />
    </div>
  )
}
