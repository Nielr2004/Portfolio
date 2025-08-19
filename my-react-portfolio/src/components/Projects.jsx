// src/components/Projects.jsx
import React from 'react';
import Card from './Card'; // 1. Import the new Card component
import styled from 'styled-components';

// Create a styled grid for the projects
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Projects = () => {
  const projectData = [
    {
      href: "https://github.com/notorious0631/Fast-Track.git",
      icon: "fas fa-user-lock",
      title: "Face Track+",
      description: "Smart attendance using OpenCV, Tkinter and Arduino",
      aosDelay: "100"
    },
    {
      href: "https://github.com/Nielr2004/Portfolio.git",
      icon: "fas fa-laptop-code",
      title: "This Portfolio",
      description: "A modern, animated portfolio built with React",
      aosDelay: "200"
    },
    {
      icon: "fas fa-chart-bar",
      title: "Netflix Data Visualization",
      description: "Power BI dashboard for Netflix movie/series analysis",
      aosDelay: "300"
    },
    {
      href: "https://github.com/Nielr2004/Basic-handgesture-volume-control.git",
      icon: "fas fa-hand-paper",
      title: "Hands-on volume rocker",
      description: "Python script for a finger tracking volume rocker",
      aosDelay: "400"
    },
    {
      href: "https://github.com/Nielr2004/Movie-review-website.git",
      icon: "fas fa-film",
      title: "ViewVerse",
      description: "A movie/series review and watchlist website (in progress)",
      aosDelay: "500"
    }
  ];

  return (
    <section id="projects">
      <h2 className="skills-title">Projects</h2>
      <ProjectGrid>
        {projectData.map((project, index) => (
          <Card 
            key={index}
            href={project.href}
            icon={project.icon}
            title={project.title}
            description={project.description}
            aosDelay={project.aosDelay}
          />
        ))}
      </ProjectGrid>
    </section>
  );
};

export default Projects;