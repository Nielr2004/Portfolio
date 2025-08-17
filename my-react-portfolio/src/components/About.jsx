import React from 'react';
import profileImage from '../assets/images/niel2.jpg'; // Your profile image

const About = () => {
  return (
    <section id="about" data-aos="fade-up" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bebas uppercase tracking-wider text-primary text-center mb-10">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <img 
              src={profileImage} 
              alt="Snehashis Roy" 
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-4 border-highlight
                         transition-transform duration-300 hover:scale-105 hover:rotate-3"
            />
          </div>
          <div className="text-center md:text-left text-primary/90">
            <p className="text-lg mb-4">
              Hey, I'm Snehashis Roy — a CSE student brewing code and creativity at The Assam Kaziranga University.
              I love building smart and elegant solutions, whether it’s crafting APIs with Flask, designing clean UIs,
              analyzing data with Python, or training a curious little AI model.
            </p>
            <p className="text-lg">
              When I’m not debugging with coffee in hand ☕, I’m busy connecting logic with design — because I believe
              tech should be both intelligent and beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;