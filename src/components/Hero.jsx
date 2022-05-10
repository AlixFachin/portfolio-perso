import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import "../styles/hero.css"
import { Link as ScrollLink} from 'react-scroll'

import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Hero() {

  useEffect(() => {
    window.particlesJS.load('particles-js','/particlesconfig.json');
    console.log('Particle JS loaded...')
  }, [])

  const { t } = useTranslation();
  
  //<Trans i18nKey={'hero_1'}><h1>Hi there! My name is </h1></Trans>
  return (
    <div id="hero">
      {/* <VisibilitySensor onChange={ (newVisibility) => setisHeroVisible(newVisibility)  }>
        <Fade left opposite delay={300} duration={1200}  > */}
      <h1><span className="hero-emphasis">Alix Fachin</span></h1>
      <h1>{ t('Hero.hero_welcome')}</h1>
        {/* </Fade>
      </VisibilitySensor> */}
      <Fade delay={400} duration={1200}>
      <div className="section-scroll">
        <ScrollLink to="blog-summary-container" smooth duration={1000}>
          <h2 className="link">{t('Hero.BlogPosts')}</h2>
        </ScrollLink>
        <ScrollLink to="project-summary-container" smooth duration={1000}>
          <h2 className="link">{t('Hero.Projects')}</h2>
        </ScrollLink>
        <LanguageSwitcher mode="hero" />
      </div>
      </Fade>
      <div id="particles-js">
      </div>
    </div>
  )
}
