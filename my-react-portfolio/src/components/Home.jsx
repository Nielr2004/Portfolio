import React, { useState, useEffect } from 'react';
import '../style.css'; // Ensure your CSS is imported

// Assuming 'niel 5.png' is located in 'src/assets/'
// If your image is in the 'public' folder, you might use:
// import niel5Image from '/niel 5.png'; // No './' or '../' if from public
// Or if in src/ then:
import niel5Image from '../assets/images/Design.jpg'; // Adjust path if your image is elsewhere


// Define the Typewriter component directly within Home.jsx
const Typewriter = ({ text, typingSpeed = 150, onTypingComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (charIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    } else {
      // Typing is complete
      if (onTypingComplete) {
        onTypingComplete();
      }
      // Optionally stop cursor blinking after typing is complete
      // For now, let's keep it blinking, or you can add a timeout to hide it
    }
  }, [charIndex, text, typingSpeed, onTypingComplete]);

  return (
    <>
      {displayedText}
      {showCursor && <span className="typewriter-cursor"></span>}
    </>
  );
};


const Home = () => {
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);
  const [isBoxActive, setIsBoxActive] = useState(false); // State for box animation

  const textToType = "I craft delightful web experiences.";

  const handleTypingComplete = () => {
    console.log("Typing complete callback fired in Home.");
    setIsTypingCompleted(true);
    // You can add logic here for what happens after typing finishes,
    // e.g., show another element, navigate, etc.
  };

  useEffect(() => {
    // Trigger the box animation when the Home component mounts
    // This will start the blur animation concurrently with the typing.
    setIsBoxActive(true);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section id="home" data-aos="fade-up">
      {/* If you have a 'grain' background effect, add it here if it's not a global element */}
      {/* <div className="grain"></div> */}

      {/* New main content wrapper for side-by-side layout */}
      <div className="home-main-content">
        {/* Left column for the image */}
        <div className="home-left">
          {/* Using the imported image. Adjust path if necessary. */}
          <img src={niel5Image} alt="Inspirational Quote" className="home-quote-image" />
        </div>

        {/* Right column for the typewriter text and paragraph */}
        <div className="home-right">
          <div className="home-text-container">
            {/* New .typewriter-box container */}
            <div className={`typewriter-box ${isBoxActive ? 'active' : ''}`}>
              <h1 className="typewriter">
                <Typewriter
                  text={textToType}
                  typingSpeed={120} // Adjust typing speed as needed
                  onTypingComplete={handleTypingComplete}
                />
              </h1>
            </div>
            <p data-aos="fade-up" data-aos-delay="500">
              I specialize in bringing creative visions to life through elegant and efficient code, ensuring a seamless and engaging user experience.
            </p>
          </div>
        </div>
      </div>

      {/* Button and arrow moved to be directly under #home, after home-main-content */}
      <a href="#contact" className="button" data-aos="fade-up" data-aos-delay="700">
        Chat ?
      </a>
      
    </section>
  );
};

export default Home;