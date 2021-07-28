import React from 'react'
import Fade from 'react-reveal/Fade'
import "../styles/hero.css"

export default function Hero() {
  return (
    <div id="hero">
      <Fade left={true} delay={300} duration={1000}>
        <h1>Welcome to the <span className="hero-emphasis">hanayama-dev</span> website!</h1>
      </Fade>
    </div>
  )
}
