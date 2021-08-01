import React from 'react'
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  return (
    <nav>
      <div className="nav-icon">
        <Link to="/" alt="home"><FontAwesomeIcon icon={faHome} /></Link>
      </div>

      <div className="nav-icon">
        <Link to="/projects" alt="projects"><FontAwesomeIcon icon={faLaptopCode} /></Link>
      </div>

      <div className="nav-icon">
        <Link to="/blog" alt="blog"><FontAwesomeIcon icon={faBookOpen} /></Link>
      </div>
      
    </nav>
  )
}
