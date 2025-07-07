import React from 'react';

const Projects = () => {
  return (
    <section id="projects" data-aos="zoom-in">
      <h2>Projects</h2>
      <div className="project-grid">
        <a href="https://github.com/notorious0631/Fast-Track.git" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <i className="fas fa-user-lock fa-2x"></i>
          <h3>Face Track+</h3>
          <p>Smart attendance using OpenCV, Tkinter and Arduino</p>
        </div>
        </a>
        <a href="https://github.com/Nielr2004/Portfolio.git" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <i className="fas fa-laptop-code fa-2x"></i>
          <h3>This Portfolio</h3>
          <p>One-page Flask site with smooth scroll</p>
        </div>
        </a>
        <div className="card">
          <i className="fas fa-chart-bar fa-2x"></i> {/* Added icon for data visualization */}
          <h3>Netflix Data Visualization</h3>
          <p>Power BI dashboard for Netflix movie/series analysis</p>
        </div>
        <a href="https://github.com/Nielr2004/Basic-handgesture-volume-control.git" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <i className="fas fa-hand-paper fa-2x"></i> {/* Added icon for hand tracking */}
          <h3>Hands-on volume rocker</h3>
          <p>Python script for a finger tracking volume rocker</p>
        </div>
        </a>
        <a href="https://github.com/Nielr2004/Movie-review-website.git" target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card">
          <i className="fas fa-hand-paper fa-2x"></i> {/* Added icon for hand tracking */}
          <h3>ViewVerse</h3>
          <p>A movie/series review and watchlist website (in progress)</p>
        </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;