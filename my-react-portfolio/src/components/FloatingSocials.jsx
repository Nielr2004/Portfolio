// src/components/FloatingSocials.jsx
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const FloatingSocials = () => {
  return (
    <div className="floating-socials">
      <SocialIcon url="https://www.linkedin.com/in/snehashis-roy-40691725a" target="_blank" rel="noopener noreferrer" />
      <SocialIcon url="https://www.facebook.com/profile.php?id=100024985310603" target="_blank" rel="noopener noreferrer" />
      <SocialIcon url="https://www.instagram.com/_.roybabu._" target="_blank" rel="noopener noreferrer" />
      <SocialIcon url="https://github.com/Nielr2004" target="_blank" rel="noopener noreferrer" />
    </div>
  );
};

export default FloatingSocials;