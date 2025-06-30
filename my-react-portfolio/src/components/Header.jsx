import React from 'react';
// Assuming resume.pdf is now in src/assets/resume.pdf
import resumePdf from '../assets/resume.pdf';

const Header = () => {
  return (
    <nav>
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