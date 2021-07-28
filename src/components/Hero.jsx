import React from 'react'
import Fade from 'react-reveal/Fade'
import "../styles/hero.css"

export default function Hero() {
  return (
    <div id="hero">
      <Fade left={true} delay={300} duration={700}>
        <h1>Welcome to the <span className="hero-emphasis">hanayama-dev</span></h1>
        <h1>portfolio website!</h1>
      </Fade>
    </div>
  )
}
