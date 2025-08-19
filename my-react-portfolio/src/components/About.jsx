import React from 'react';
import profileImage from '../assets/images/niel2.jpg'; // Your profile image

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img 
              src={profileImage} 
              alt="Snehashis Roy" 
              className="about-profile-image"
            />
          </div>
          <div className="about-text-container">
            <p className="about-description">
              Hello! I'm Snehashis Roy, a Computer Science Engineering student at The Assam Kaziranga University with a passion for building innovative and beautiful web experiences. I thrive at the intersection of logic and design, transforming complex problems into elegant, user-friendly solutions.
            </p>
            <p className="about-description">
              Whether I'm developing a full-stack application, designing a sleek UI, or diving into data, I'm driven by a desire to create technology that is both intelligent and intuitive. I'm always eager to learn and grow, and I'm excited to see where my journey in tech takes me next.
            </p>
            <div className="about-skills">
              <span className="skill-badge">Web Development</span>
              <span className="skill-badge">UI/UX Design</span>
              <span className="skill-badge">Data Analysis</span>
              <span className="skill-badge">AI/ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;