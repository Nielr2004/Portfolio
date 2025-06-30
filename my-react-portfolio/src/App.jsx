import React, { useEffect } from 'react';
// Your component file (e.g., App.jsx or Home.jsx)

import ParticlesBackground from './components/ParticlesBackground'; // Adjust path as needed
// ...
import './style.css'; // Import your main CSS file
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        if (window.scrollY > 30) {
          homeSection.classList.add('blur');
        } else {
          homeSection.classList.remove('blur');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="grain"></div>
      {/* <div className="blur-overlay" id="blurLayer"></div> Removed as it's not used in your CSS */}

      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;