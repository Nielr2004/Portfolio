import React from 'react';
import '../style.css';
import designImage from '../assets/images/Design.jpg';

const Home = () => {
  const textToType = "I CRAFT DELIGHTFUL WEB EXPERIENCES.";

  return (
    <section id="home-new">
      <div className="home-container">
        <div className="left-panel">
          <img src={designImage} alt="Design Showcase" className="panel-image animate-float" />
        </div>
        <div className="right-panel">
          <div className="main-content">
            <h1>{textToType}</h1>
            <p>
              I specialize in bringing creative visions to life through elegant and efficient code, ensuring a seamless and engaging user experience.
            </p>
            <a href="#contact" className="button">
              CHAT?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;