// src/components/FloatingNav.jsx
import React from 'react';
import resumePdf from '../assets/resume.pdf';
import { SocialIcon } from 'react-social-icons';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

const navLinks = [
  { href: '#home', title: 'Home', icon: 'fas fa-home' },
  { href: '#about', title: 'About', icon: 'fas fa-user' },
  { href: '#projects', title: 'Projects', icon: 'fas fa-briefcase' },
  { href: '#skills', title: 'Skills', icon: 'fas fa-cogs' },
  { href: '#contact', title: 'Contact', icon: 'fas fa-envelope' },
  { href: resumePdf, title: 'CV', icon: 'fas fa-file-alt', download: true },
];

const socialLinks = [
  "https://www.linkedin.com/in/snehashis-roy-40691725a",
  "https://github.com/Nielr2004",
];

const FloatingNav = () => {
  return (
    <nav className="floating-nav">
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              download={link.download ? "Snehashis_Roy_Resume.pdf" : null}
              title={link.title}
            >
              <i className={link.icon}></i>
              <span>{link.title}</span>
            </a>
          </li>
        ))}
        <div className="divider"></div>
        {socialLinks.map((url, index) => (
           <li key={index}>
             <SocialIcon
                url={url}
                target="_blank"
                rel="noopener noreferrer"
                bgColor="transparent"
                fgColor="var(--color-text)"
                style={{ height: 40, width: 40 }}
                className="social-icon"
             />
           </li>
        ))}
        <div className="divider"></div>
        <li>
          <ThemeToggle /> {/* Add the ThemeToggle component here */}
        </li>
      </ul>
    </nav>
  );
};

export default FloatingNav;