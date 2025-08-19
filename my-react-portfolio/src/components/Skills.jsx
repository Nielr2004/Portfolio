import React from 'react';
import Slider from 'react-slick';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section id="skills" data-aos="fade-up">
      <div className="skills-container">
        <h2 className="skills-title">Technologies I Use</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-slide">
                <div className="skill-card">
                  <img src={skill.img} alt={`${skill.text} icon`} className="skill-icon" />
                  <span className="skill-text">{skill.text}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        {/* Core Competencies Section */}
        <div className="core-competencies" data-aos="fade-up">
          <h2 className="skills-title">My Core Competencies</h2>
          <div className="competency-categories">
            {/* Frontend Category */}
            <div className="competency-category">
              <h3>💻 Frontend & UI/UX</h3>
              <div className="competency-grid">
                <div className="competency-card">🌐 Website Development (HTML, CSS, JS, React)</div>
                <div className="competency-card">🎨 UI/UX Design with Figma</div>
                <div className="competency-card">🖌️ Graphic Design & Illustration</div>
                <div className="competency-card">📱 Responsive Web Design</div>
              </div>
            </div>

            {/* Backend Category */}
            <div className="competency-category">
              <h3>⚙️ Backend & DevOps</h3>
              <div className="competency-grid">
                <div className="competency-card">🛠️ Git & GitHub Workflow</div>
                <div className="competency-card">🗃️ MySQL & MongoDB</div>
                <div className="competency-card">🔧 Flask Backend Development</div>
                <div className="competency-card">⚡ Node.js Fundamentals</div>
              </div>
            </div>

            {/* Data Category */}
            <div className="competency-category">
              <h3>📊 Data & Machine Learning</h3>
              <div className="competency-grid">
                <div className="competency-card">📈 Data Analysis (Pandas, NumPy)</div>
                <div className="competency-card">🤖 Machine Learning Projects</div>
                <div className="competency-card">📉 Power BI Visualization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;