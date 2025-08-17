// src/components/FloatingSocials.jsx
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const FloatingSocials = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
      <SocialIcon 
        url="https://www.linkedin.com/in/snehashis-roy-40691725a" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ height: 40, width: 40 }}
        className="transition-transform duration-300 hover:scale-110"
      />
      <SocialIcon 
        url="https://github.com/Nielr2004" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ height: 40, width: 40 }}
        className="transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
};

export default FloatingSocials;