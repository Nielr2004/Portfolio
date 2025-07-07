// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure this path is correct relative to main.jsx
import './style.css'; // Ensure this path is correct relative to main.jsx

// Import AOS CSS
import 'aos/dist/aos.css'; // Ensure 'aos' is installed and this path is correct

// Import AOS library
import AOS from 'aos'; // Ensure 'aos' is installed

// Initialize AOS (Moved here for global initialization, but can also be in App.jsx's useEffect)
AOS.init({
  // Global settings:
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  delay: 0,
  duration: 1000,
  easing: 'ease-out',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
