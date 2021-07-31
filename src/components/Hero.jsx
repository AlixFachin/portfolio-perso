import React, { useState, useEffect } from 'react'
// import Fade from 'react-reveal/Fade'
import "../styles/hero.css"
// import VisibilitySensor from 'react-visibility-sensor';

export default function Hero() {

  // const [isHeroVisible, setisHeroVisible] = useState(false)

  useEffect(() => {
    window.particlesJS.load('particles-js','/particlesconfig.json');
    console.log('Particle JS loaded...')
  }, [])

  return (
    <div id="hero">
      {/* <VisibilitySensor onChange={ (newVisibility) => setisHeroVisible(newVisibility)  }>
        <Fade left opposite delay={300} duration={1200}  > */}
          <h1>Hi there! My name is <span className="hero-emphasis">Alix Fachin</span></h1>
          <h1>and welcome to my portfolio website</h1>
        {/* </Fade>
      </VisibilitySensor> */}
      <div id="particles-js">
      </div>
    </div>
  )
}
