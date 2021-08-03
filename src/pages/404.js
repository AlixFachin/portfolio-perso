import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout.jsx"

import "../styles/global.css"

export default function Notfound( {data}) {

  return (
    <Layout>

      <h1>Woops. It seems you are lost</h1>
      <h2>Let's take a quick walk <Link to="/">home</Link> instead</h2>
      <div className="ImageContainer404">
        <StaticImage src="../images/lost-desert-unsplash.jpg" alt="man wandering in desert" objectFit="contain"  />
        <p className="image-caption">
          Photo by <a href="https://unsplash.com/@finding_dan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Finding Dan | Dan Grinwis</a> on <a href="https://unsplash.com/s/photos/lost?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </div>

    </Layout>
  )
}