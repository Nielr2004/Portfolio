import React, { useState } from 'react';
// Assuming resume.pdf is now in src/assets/resume.pdf
import resumePdf from '../assets/resume.pdf';

// Import your logo image. Adjust the path based on where you put your logo.
import siteLogo from '../assets/images/home_logo.png'; // <-- Adjust this path if your logo is elsewhere, e.g., '../assets/images/your-logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? 'open' : ''}> {/* Add 'open' class when menu is open */}
      {/* Container for the logo on the extreme left */}
      <div className="nav-left">
        <a href="#home" className="logo-link">
          <img src={siteLogo} alt="Your Website Name Logo" className="nav-logo" />
          {/* Optional: Add site name text next to the logo */}
          {/* <span className="site-name">YourSiteName</span> */}
        </a>
      </div>

      {/* Hamburger Menu Toggle */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Existing navigation links */}
      <ul className={isOpen ? 'active' : ''}> {/* Add 'active' class when menu is open */}
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <li><a href={resumePdf} download="Snehashis_Roy_Resume.pdf" onClick={toggleMenu}>CV</a></li>
      </ul>
    </nav>
  );
};

export default Header;
