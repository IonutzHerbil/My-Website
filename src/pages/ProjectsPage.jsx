import React, { useState } from 'react';
import ImageRecognition from '../components/projects/ImageRecognition';
import WeatherApp from '../components/projects/WeatherApp';
import CalculatorApp from '../components/projects/CalculatorApp';
import '../styles/ProjectsPage.css';

const PROJECTS = [
  {
    id: 'image-recognition',
    title: 'Doodle Classifier',
    description: 'Draw something and let AI recognize your doodle!',
    component: ImageRecognition
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast',
    description: 'Get real-time weather information for any city.',
    component: WeatherApp
  },
  {
    id: 'calculator-app',
    title: 'Calculator',
    description: 'A simple and functional calculator.',
    component: CalculatorApp
  }
];

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  return (
    <div className="projects-page">
      {/* Projects Header */}
      <div className="projects-header">
        <div className="container">
          <div className="projects-header-content">
            <h1 className="projects-title">Interactive Projects</h1>
            <p className="projects-subtitle">
              Explore my interactive projects and experiments. Each one showcases different technologies and creative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Navigation */}
      <div className="projects-nav">
        <div className="container">
          <div className="projects-nav-list">
            {PROJECTS.map((project, index) => (
              <button
                key={project.id}
                className={`project-nav-item ${activeProject.id === project.id ? 'active' : ''}`}
                onClick={() => setActiveProject(project)}
              >
                <div className="project-nav-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="project-nav-content">
                  <h3 className="project-nav-title">{project.title}</h3>
                  <p className="project-nav-description">{project.description}</p>
                </div>
                <div className="project-nav-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Active Project Display */}
      <div className="project-showcase">
        <div className="container">
          <div className="project-showcase-header">
            <div className="project-showcase-meta">
              <span className="project-showcase-number">
                {String(PROJECTS.findIndex(p => p.id === activeProject.id) + 1).padStart(2, '0')}
              </span>
              <div className="project-showcase-info">
                <h2 className="project-showcase-title">{activeProject.title}</h2>
                <p className="project-showcase-description">{activeProject.description}</p>
              </div>
            </div>
          </div>
          
          <div className="project-showcase-content">
            <activeProject.component />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;