import React from 'react'
import "../styles/ShortBio.css"
import { GatsbyImage } from "gatsby-plugin-image"
import Fade from 'react-reveal/Fade'
import { graphql, useStaticQuery } from "gatsby"

/* About Component 
  This component will display a quick summary / self introduction
  Structure: CSS Grid with one column with picture, and two other columns for text
*/

export default function ShortBio() {

  const data = useStaticQuery(graphql`
    query getPicturePath {
    file(relativePath: {eq: "PhotoID.jpg"}) {
      id
      childImageSharp {
        gatsbyImageData(width:250)
      }
    }
  }
  `)

  return (
    <div className="self-introduction">
      <Fade top duration={800} delay={200}><h2>ABOUT ME</h2></Fade>
      <div className="bio-container">
        <Fade left duration={800} delay={200}>  
        <div className="image-placeholder"> 
           
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="my pic" />

        </div> 
        </Fade>
        <Fade right duration={800} delay={200}>
        <div className="bio-text">
          <p> After graduating from a computer science university in France (ENSIMAG), I worked in finance, trading equity derivatives in Asia and in New York for about 10 years. </p>
          <p> After this for family reasons we settled in Hokkaido where I worked as a manager in a property management company in Niseko. During this time, I always coded on the side, trying new languages like Swift or Ruby. When the COVID crisis hit, I decided to use this opportunity to refresh my IT skills, so I subscribed to an intensive coding bootcamp in Tokyo. I am ready now to do what I excel and work as a software engineer again. </p>
          <p>I am comfortable using JavaScript and Python, learning some more technologies related to back-end like Go and Docker. </p>
        </div>
        </Fade>
      </div>
    </div>
  )
}
