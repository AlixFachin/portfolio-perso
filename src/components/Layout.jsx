import React from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="content-layout">
      <Navbar />
      <main className="content">
        { children }
        <Footer />
      </main>
    </div>
  )
}
