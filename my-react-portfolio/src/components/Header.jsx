import React from 'react';
// Assuming resume.pdf is now in src/assets/resume.pdf
import resumePdf from '../assets/resume.pdf';

// Import your logo image. Adjust the path based on where you put your logo.
import siteLogo from '../assets/images/home_logo.png'; // <-- Adjust this path if your logo is elsewhere, e.g., '../assets/images/your-logo.png'

const Header = () => {
  return (
    <nav>
      {/* Container for the logo on the extreme left */}
      <div className="nav-left">
        <a href="#home" className="logo-link">
          <img src={siteLogo} alt="Your Website Name Logo" className="nav-logo" />
          {/* Optional: Add site name text next to the logo */}
          {/* <span className="site-name">YourSiteName</span> */}
        </a>
      </div>

      {/* Existing navigation links */}
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href={resumePdf} download="Snehashis_Roy_Resume.pdf">CV</a></li>
      </ul>
    </nav>
  );
};

export default Header;