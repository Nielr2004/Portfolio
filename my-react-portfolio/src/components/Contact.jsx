import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import creativeArrow from '../assets/images/creative-arrow.png';

const Contact = () => {
  const form = useRef();
  const [localMessage, setLocalMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Access environment variables here
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Use the variables from import.meta.env
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('EmailJS Success:', result.text);
          setLocalMessage('Your message has been sent successfully!');
          setIsError(false);
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Failed:', error.text);
          setLocalMessage('Failed to send message. Please try again later.');
          setIsError(true);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>

      {localMessage && (
        <div className={`flash ${isError ? 'flash-error' : 'flash-success'}`}>
          {localMessage}
        </div>
      )}

      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="user_email"
          placeholder="your@example.com"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : <><i className="fas fa-paper-plane"></i> Send</>}
        </button>
      </form>

      <div className="contact-or">
        <p>— or —</p>
        <p>
          Reach out via social media
          <img src={creativeArrow} alt="Arrow" className="arrow-img" />
        </p>
      </div>

      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/snehashis-roy-40691725a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.facebook.com/profile.php?id=100024985310603" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/_.roybabu._" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://github.com/Nielr2004" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;