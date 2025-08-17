import React from 'react';
// Import all your skill icons
import illustratorSvg from '../assets/icons/illustrator.svg';
import powerbiSvg from '../assets/icons/powerbi.png';
import CSvg from '../assets/icons/c.png';
import cssSvg from '../assets/icons/css3.png';
import figmaSvg from '../assets/icons/figma.png';
import htmlSvg from '../assets/icons/html5.png';
import javaSvg from '../assets/icons/java.png';
import jsSvg from '../assets/icons/javascript.png';
import mongodbSvg from '../assets/icons/mongodb.png';
import nodeSvg from '../assets/icons/node.png';
import phpSvg from '../assets/icons/php.png';
import pythonSvg from '../assets/icons/python.png';
import reactSvg from '../assets/icons/react.png';
import sqlSvg from '../assets/icons/mysql.png';
import flaskSvg from '../assets/icons/flask.png';
import gitSvg from '../assets/icons/git.png';
import githubSvg from '../assets/icons/github.png';
import aiSvg from '../assets/icons/ai.png';
import dataSvg from '../assets/icons/data.png';

// Define the skills data array
const skillsData = [
  { img: htmlSvg, text: 'HTML5' },
  { img: cssSvg, text: 'CSS3' },
  { img: jsSvg, text: 'JavaScript' },
  { img: reactSvg, text: 'React' },
  { img: nodeSvg, text: 'Node.js' },
  { img: pythonSvg, text: 'Python' },
  { img: flaskSvg, text: 'Flask' },
  { img: javaSvg, text: 'Java' },
  { img: sqlSvg, text: 'MySQL' },
  { img: mongodbSvg, text: 'MongoDB' },
  { img: gitSvg, text: 'Git' },
  { img: githubSvg, text: 'GitHub' },
  { img: figmaSvg, text: 'Figma' },
  { img: illustratorSvg, text: 'Illustrator' },
  { img: powerbiSvg, text: 'Power BI' },
  { img: aiSvg, text: 'AI/ML' },
  { img: dataSvg, text: 'Data Analysis' },
  { img: CSvg, text: 'C' },
  { img: phpSvg, text: 'PHP' },
];

const Skills = () => {
  // Duplicate the array for a seamless marquee loop
  const marqueeSkills = [...skillsData, ...skillsData];

  return (
    <section id="skills" data-aos="fade-up" className="py-20 overflow-x-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bebas uppercase tracking-wider text-primary">Technologies I Use</h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full py-8 bg-white/40 backdrop-blur-md border-y border-white/30">
        <div className="mx-auto w-full overflow-hidden">
          <div className="animate-marquee flex">
            {marqueeSkills.map((skill, index) => (
              <div key={index} className="flex-shrink-0 w-28 h-28 mx-4 flex flex-col items-center justify-center bg-white/50 rounded-2xl shadow-md
                                          transition-transform duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-lg hover:shadow-accent/20">
                <img src={skill.img} alt={`${skill.text} icon`} className="h-10 w-10 mb-2 object-contain" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{skill.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Below Marquee */}
      <div data-aos="fade-up" className="max-w-4xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bebas uppercase tracking-wider text-primary text-center mb-12">My Core Competencies</h2>
        
        <div className="space-y-10">
          {/* Frontend Category */}
          <div>
            <h3 className="text-2xl font-bebas tracking-wider text-primary mb-4 text-left">💻 Frontend & UI/UX</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">🌐 Website Development (HTML, CSS, JS, React)</div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">🎨 UI/UX Design with Figma</div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">🖌️ Graphic Design & Illustration</div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">📱 Responsive Web Design</div>
            </div>
          </div>

          {/* Backend Category */}
          <div>
            <h3 className="text-2xl font-bebas tracking-wider text-primary mb-4 text-left">⚙️ Backend & DevOps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">🛠️ Git & GitHub Workflow</div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">🗃️ MySQL & MongoDB</div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">🔧 Flask Backend Development</div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">⚡ Node.js Fundamentals</div>
            </div>
          </div>

          {/* Data Category */}
          <div>
            <h3 className="text-2xl font-bebas tracking-wider text-primary mb-4 text-left">📊 Data & Machine Learning</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">📈 Data Analysis (Pandas, NumPy)</div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">🤖 Machine Learning Projects</div>
              <div className="bg-white/40 backdrop-blur-sm p-4 rounded-lg font-semibold text-primary/90 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-2 hover:shadow-md hover:shadow-accent/10">📉 Power BI Visualization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;