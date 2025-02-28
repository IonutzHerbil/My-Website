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
    <div className="projects-container">
      <div className="projects-sidebar">
        <h1>Interactive Projects</h1>
        <div className="project-list">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              className={`project-tab ${activeProject.id === project.id ? 'active' : ''}`}
              onClick={() => setActiveProject(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </button>
          ))}
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h2>{activeProject.title}</h2>
          <p>{activeProject.description}</p>
        </div>
        
        <div className="project-display">
          <activeProject.component />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;