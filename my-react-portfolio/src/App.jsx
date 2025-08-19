// src/App.jsx
import React, { useEffect } from 'react';
import './style.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingNav from './components/FloatingNav';
import PortfolioChatbot from './components/PortfolioChatbot';
import CustomCursor from './components/CustomCursor';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <Home />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
      <PortfolioChatbot />
    </>
  );
}

export default App;