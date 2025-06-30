import React from 'react';
// Import SVG icons
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


const skillsData = [
  { className: 'c', img: CSvg, text: 'C', title: 'Systems and low-level stuff!' },
  { className: 'css', img: cssSvg, text: 'CSS3', title: 'I make it pretty 💅' },
  { className: 'figma',img: figmaSvg, text: 'Figma', title: 'UI/UX playground' },
  { className: 'html', img: htmlSvg, text: 'HTML5', title: 'The skeleton of the web' },
  { className: 'illustrator', img: illustratorSvg, text: 'Illustrator', title: 'Vector art wizard ✏️' },
  { className: 'java', img: javaSvg, text: 'Java', title: 'Object-oriented everything' },
  { className: 'js', img: jsSvg, text: 'JavaScript', title: 'Making the web interactive' },
  { className: 'mysql', img: sqlSvg, text: 'MySQL', title: 'Structured data lover' },
  { className: 'python', img: pythonSvg, text: 'Python', title: 'Versatile & elegant 🐍' },
  { className: 'ai', img: aiSvg, text: 'AI/ML', title: 'Smarter machines every day' },
  { className: 'data', img: dataSvg, text: 'Data Analysis', title: 'Charts, insights, and numbers' },
  { className: 'powerbi', img: powerbiSvg, icon: null, text: 'Power BI', title: 'Dashboarding Ninja 📊' },
  { className: 'react', img: reactSvg, text: 'React', title: 'Frontend magic' },
  { className: 'flask', img: flaskSvg, text: 'Flask', title: 'Backend magic' },
  { classname: 'git', img: gitSvg, icon: null, text: 'Git', title: 'Version control wizard' },
  { classname: 'github', img: githubSvg, icon: null, text: 'GitHub', title: 'Collaboration hub' },
  { classname: 'node', img: nodeSvg, text: 'Node.js', title: 'Server-side magic' },
  { classname: 'php', img: phpSvg, text: 'PHP', title: 'Server-side magic' },
  { classname: 'mongodb', img: mongodbSvg, text: 'MongoDB', title: 'Database wizard' },
];

const Skills = () => {
  return (
    <section id="skills" data-aos="fade-up">
      <h2>Technologies I Use</h2>
      <div className="marquee-container">
        <div className="marquee-track">
          {Array(2).fill(skillsData).flat().map((skill, index) => (
            <div className={`icon-badge ${skill.className}`} title={skill.title} key={index}>
              {skill.icon && <i className={skill.icon}></i>}
              {skill.img && <img src={skill.img} alt={skill.text} />}
              <span>{skill.text}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="skills-below" data-aos="fade-up">
        <h2>Skills I'm Practicing</h2>

        <div className="skills-category">
          <h3>💻 Frontend & UI/UX</h3>
          <div className="skills-grid">
            <div>🌐 Website Development (HTML, CSS, JS, Flask)</div>
            <div>🎨 UI/UX Design with Figma</div>
            <div>🖌️ Graphic Design & Illustration</div>
            <div>📱 Responsive Layouts</div>
          </div>
        </div>

        <div className="skills-category">
          <h3>⚙️ Backend & DevOps</h3>
          <div className="skills-grid">
            <div>🛠️ Git & GitHub Workflow</div>
            <div>🗃️ MySQL & MongoDB</div>
            <div>🔧 Flask Backend Development</div>
          </div>
        </div>

        <div className="skills-category">
          <h3>📊 Data & Machine Learning</h3>
          <div className="skills-grid">
            <div>📈 Data Analysis (Pandas, NumPy)</div>
            <div>🤖 Machine Learning Projects</div>
            <div>📉 Power BI Visualization</div>
          </div>
        </div>

        <div className="skills-category">
          <h3>🧠 Soft Skills</h3>
          <div className="skills-grid">
            <div>🧩 Problem Solving & Logic Building</div>
            <div>🗣️ Communication Skills</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;