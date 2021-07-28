import React from "react";
import Layout from "../components/Layout"
import  * as styles from '../styles/home.module.css'
import Hero from "../components/Hero.jsx"
import Footer from "../components/Footer.jsx"
import ShortBio from "../components/ShortBio.jsx"

export default function Home() {
  return (
    <div id="mainContainer">
      <Hero />
      <ShortBio />
      <Footer />
    </div>
  )
}
