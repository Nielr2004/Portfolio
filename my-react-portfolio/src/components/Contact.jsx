import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setMessage('Your message has been sent successfully!');
          setIsError(false);
          form.current.reset();
        },
        (error) => {
          setMessage('Failed to send message. Please try again later.');
          setIsError(true);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" data-aos="fade-up">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        {message && (
          <div className={`form-message ${isError ? 'error' : 'success'}`}>
            {message}
          </div>
        )}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="button"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;