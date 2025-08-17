// src/components/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import creativeArrow from '../assets/images/creative-arrow.png';

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
    <section id="contact" data-aos="fade-up" className="max-w-4xl mx-auto my-20 p-8 md:p-12 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bebas uppercase tracking-wider text-primary text-center mb-8">Contact Me</h2>

      {message && (
        <div className={`p-4 mb-6 rounded-lg text-center ${isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
          {message}
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-primary/20 bg-secondary/50 focus:ring-2 focus:ring-accent focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="your@example.com"
            required
            className="w-full p-3 rounded-lg border border-primary/20 bg-secondary/50 focus:ring-2 focus:ring-accent focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            required
            rows="5"
            className="w-full p-3 rounded-lg border border-primary/20 bg-secondary/50 focus:ring-2 focus:ring-accent focus:border-transparent transition"
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-accent to-highlight text-primary font-bold py-3 px-6 rounded-lg uppercase tracking-wider
                     transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;