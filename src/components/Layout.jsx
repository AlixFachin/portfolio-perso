import React from 'react'
import Navbar from "./Navbar"
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div classname="content">
        { children }
      </div>
      <footer> 
        { /* Social media accounts and copyright */ }
        ©️ 2021 Alix Fachin - Made with sweat and coffee with Gatsby.js
      </footer>
    </div>
  )
}
