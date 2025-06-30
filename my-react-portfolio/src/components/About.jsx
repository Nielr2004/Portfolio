import React from 'react';
import profileImage from '../assets/images/niel2.jpg'; // Import the profile image

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div className="about-container">
        <img src={profileImage} alt="Snehashis Roy" />
        <div className="about-content">
          <p>
            Hey, I'm Snehashis Roy — a CSE student brewing code and creativity at The Assam Kaziranga University.
            I love building smart and elegant solutions, whether it’s crafting APIs with Flask, designing clean UIs,
            analyzing data with Python, or training a curious little AI model.<br /><br />
            When I’m not debugging with coffee in hand ☕, I’m busy connecting logic with design — because I believe
            tech should be both intelligent and beautiful.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;