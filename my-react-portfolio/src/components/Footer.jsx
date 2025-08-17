// src/components/Footer.jsx
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const socialUrls = [
    "https://www.linkedin.com/in/snehashis-roy-40691725a",
    "https://github.com/Nielr2004",
    "https://www.facebook.com/profile.php?id=100024985310603",
    "https://www.instagram.com/_.roybabu._"
  ];

  return (
    <footer className="bg-primary text-secondary text-center py-8 px-4">
      <div className="flex justify-center space-x-4 mb-4">
        {socialUrls.map((url, index) => (
          <SocialIcon 
            key={index}
            url={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            bgColor="transparent"
            fgColor="#F1FAEE"
            className="transition-transform duration-300 hover:scale-110"
          />
        ))}
      </div>
      <p className="text-sm opacity-80">© 2025 Snehashis Roy | Debugging life one commit at a time.</p>
    </footer>
  );
};

export default Footer;