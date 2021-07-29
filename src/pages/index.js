import React from "react";
import Hero from "../components/Hero.jsx"
import Footer from "../components/Footer.jsx"
import ShortBio from "../components/ShortBio.jsx"
import ProjectSummary from "../components/ProjectSummary.jsx"

export default function Home() {
  return (
    <div id="mainContainer">
      <Hero />
      <ShortBio />
      <ProjectSummary />
      <Footer />
    </div>
  )
}
