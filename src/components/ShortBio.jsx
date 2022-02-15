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

  function displayTagsWithBadges(tagsString) {
    const tagArray = tagsString.split(",");
    return (
      <div className="tagList">
        { tagArray.map((tag, idx) => (
            <Fade duration={600} delay={200+idx*100} key={tag.trim()} >
              <div className="tag" data-tag={tag.trim()} >
                {tag.trim()}
              </div>
            </Fade>
          ))
        }      
      </div>);
  }

  return (
    <div className="self-introduction">
      <Fade top duration={800}><h2>ABOUT ME</h2></Fade>
      <div className="bio-container">
        <Fade left duration={800} delay={200}>  
        <div className="image-placeholder"> 
           
          <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="my pic" />

        </div> 
        </Fade>
        <Fade right duration={800} delay={200}>
        <div className="bio-text">
          <p> After graduating from college majoring in applied maths and computer science (ENSIMAG), I worked in finance, trading equity derivatives in Asia and in New York for about 10 years. </p>
          <p> After leaving finance and coming back to Japan in 2012, I worked as a manager in a property management company in Niseko. During this time, I coded on the side, experimenting with Swift and Ruby. 
             In 2021 I decided to go back to software development full-time and subscribed to an intensive coding bootcamp. </p>
          <p> Since September 2021 I work full-time for <a href="https://mil.movie" target="_blank">MIL</a>, a Japanese start-up, as a full-stack software engineer</p>
          <p> I am fluent in French and English, and I am using Japanese everyday at work to communicate, read and write documentation </p>
        </div>
        </Fade>
      </div>
      <div className="skillSetList">
        <h3>Experienced with</h3>
        { displayTagsWithBadges("JavaScript, React.js, Riot.js, Node.js, Sequelize, Python, Django, Git, Go, Docker, GraphQL")}
      </div>
    </div>
  )
}
