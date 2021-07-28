import React from 'react'
import "../styles/ShortBio.css"

/* About Component 
  This component will display a quick summary / self introduction
  Structure: CSS Grid with one column with picture, and two other columns for text
*/

export default function ShortBio() {
  return (
    <div className="self-introduction">
      <h2>ABOUT ME</h2>
      <div className="bio-container">
        <div className="image-placeholder"> </div>
        <div className="bio-text">
          <p> After graduating from a computer science university in France (ENSIMAG), I worked in finance, trading equity derivatives in Asia and in New York for about 10 years. </p>
          <p> After this for family reasons we settled in Hokkaido where I worked as a manager in a property management company in Niseko. During this time, I always coded on the side, trying new languages like Swift or Ruby. When the COVID crisis hit, I decided to use this opportunity to refresh my IT skills, so I subscribed to an intensive coding bootcamp in Tokyo. I am ready now to do what I excel and work as a software engineer again. </p>
          <p>I am comfortable using JavaScript and Python, learning some more technologies related to back-end like Go and Docker. </p>
        </div>
      </div>
    </div>
  )
}
