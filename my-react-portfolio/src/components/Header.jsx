import React from 'react';
import resumePdf from '../assets/resume.pdf';

const Header = () => {
  // We'll move the <nav> element to the Home component
  // This component will now just render the list items
  return (
    <ul>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href={resumePdf} download="Snehashis_Roy_Resume.pdf">CV</a></li>
    </ul>
  );
};

export default Header;