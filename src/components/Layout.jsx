import React from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import '../styles/global.css'

/* Syntax highlighting */
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

export default function Layout({ children }) {
  deckDeckGoHighlightElement();
  
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
