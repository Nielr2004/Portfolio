import React from 'react';
import '../style.css';
import niel5Image from '../assets/images/Design.jpg';
import Header from './Header'; // Import the simplified Header

const Home = () => {
  const textToType = "I CRAFT DELIGHTFUL WEB EXPERIENCES.";

  return (
    <section id="home-new"> {/* Use a new ID to avoid style conflicts */}
      <div className="home-container">
        {/* Left Panel (Glassmorphism) */}
        <div className="left-panel">
          <nav className="vertical-nav">
            <Header /> {/* Use the simplified Header for nav links */}
          </nav>
          <img src={niel5Image} alt="Design Showcase" className="panel-image" />
        </div>

        {/* Right Panel (Main Content) */}
        <div className="right-panel">
          <div className="main-content">
            <h1>{textToType}</h1>
            <p>
              I specialize in bringing creative visions to life through elegant and efficient code, ensuring a seamless and engaging user experience.
            </p>
            <a href="#contact" className="button">
              CHAT ?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;