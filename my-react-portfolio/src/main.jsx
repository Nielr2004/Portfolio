// src/main.jsx (or src/App.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css'; // Your main CSS file
// Your component file (e.g., App.jsx or Home.jsx)

// ... other imports ...
import ParticlesBackground from './components/ParticlesBackground'; // Adjust path as needed
// ...
// Import AOS CSS
import 'aos/dist/aos.css'; // The AOS CSS styles for animations

// Import AOS library
import AOS from 'aos';

// Initialize AOS
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add `aos-animate` on scroll, instead of `data-aos` properties
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000 with step 50ms
  duration: 1000, // values from 0 to 3000 with step 50ms
  easing: 'ease-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - YES, for most portfolio elements
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);