import React from 'react'
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link></li>
        <li> <Link to="/projects">Projects</Link></li>
        <li> <Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  )
}
