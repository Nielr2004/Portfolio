import React from 'react';
import '../style.css';
import ParticlesBackground from './ParticlesBackground';
import InteractiveCard from './InteractiveCard'; // 1. Import the new component

const Home = () => {
  const textToType = "I CRAFT DELIGHTFUL WEB EXPERIENCES.";

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticlesBackground />
      <div className="home-main-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="home-left">
          <h1>{textToType}</h1>
          <p>
            I specialize in bringing creative visions to life through elegant and efficient code, ensuring a seamless and engaging user experience.
          </p>
          <a href="#contact" className="button">
            GET IN TOUCH
          </a>
        </div>
        <div className="home-right">
          {/* 2. Replace the old image/sphere with the new component */}
          <InteractiveCard />
        </div>
      </div>
    </section>
  );
};

export default Home;