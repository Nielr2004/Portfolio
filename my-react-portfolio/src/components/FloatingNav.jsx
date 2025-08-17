import React from 'react';
import resumePdf from '../assets/resume.pdf';
import { SocialIcon } from 'react-social-icons';

const navLinks = [
  { href: '#projects', title: 'Projects', icon: 'fas fa-briefcase' },
  { href: '#skills', title: 'Skills', icon: 'fas fa-cogs' },
  { href: '#contact', title: 'Contact', icon: 'fas fa-envelope' },
  { href: resumePdf, title: 'CV', icon: 'fas fa-file-alt', download: true },
];

const socialLinks = [
  "https://www.linkedin.com/in/snehashis-roy-40691725a",
  "https://github.com/Nielr2004",
  "https://www.facebook.com/profile.php?id=100024985310603",
  "https://www.instagram.com/_.roybabu._"
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
                fgColor="var(--color-primary)"
                style={{ height: 40, width: 40 }}
                className="social-icon"
             />
           </li>
        ))}
      </ul>
    </nav>
  );
};

export default FloatingNav;