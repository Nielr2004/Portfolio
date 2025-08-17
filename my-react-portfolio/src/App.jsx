// src/App.jsx
import React, { useEffect } from 'react';
import './style.css';
// import Header from './components/Header'; // No longer needed here
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioChatbot from './components/PortfolioChatbot';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <div className="grain"></div>
      {/* <Header /> was removed as it's now inside the Home component */}
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <PortfolioChatbot />
    </>
  );
}

export default App;