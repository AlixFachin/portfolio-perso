import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import "../styles/hero.css"
import { Link as ScrollLink} from 'react-scroll'

export default function Hero() {

  useEffect(() => {
    window.particlesJS.load('particles-js','/particlesconfig.json');
    console.log('Particle JS loaded...')
  }, [])

  return (
    <div id="hero">
      {/* <VisibilitySensor onChange={ (newVisibility) => setisHeroVisible(newVisibility)  }>
        <Fade left opposite delay={300} duration={1200}  > */}
      <h1>Hi there! My name is </h1>
      <h1><span className="hero-emphasis">Alix Fachin</span></h1>
      <h1>Welcome to my portfolio website!</h1>
        {/* </Fade>
      </VisibilitySensor> */}
      <Fade delay={400} duration={1200}>
      <div className="section-scroll">
        <ScrollLink to="blog-summary-container" smooth duration={1000}>
          <h2 className="link">Blog Posts</h2>
        </ScrollLink>
        <ScrollLink to="project-summary-container" smooth duration={1000}>
          <h2 className="link">Projects</h2>
        </ScrollLink>
      </div>
      </Fade>
      <div id="particles-js">
      </div>
    </div>
  )
}
