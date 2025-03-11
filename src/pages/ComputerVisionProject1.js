// src/components/projects/ComputerVisionProject.js
import React from 'react';
import '../components/ComputerVisionProject1.css';

const ComputerVisionProject = () => {
  return (
    <div className="project-container computer-vision-project">
      {/* Header: Title & GitHub Link */}
      <header className="project-header">
        <h2 className="project-title">FaceCraft</h2>
        <a
          href="https://github.com/TemD99/FaceCraft"
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-button"
        >
          View on GitHub
        </a>
      </header>

      {/* Main Content: Two Columns */}
      <div className="project-content">
        {/* Left Column: Description */}
        <div className="project-description">
          <h3 className="section-title">Description</h3>
          <p>
            <strong>Project Overview:</strong>
            <br />
            FaceCraft is an innovative application that leverages artificial intelligence to generate realistic human faces.
            This technology serves as a cost-effective alternative to traditional photoshoots, catering to sectors like marketing,
            design, synthetic data generation and more. By enabling seamless customization of visual content, FaceCraft allows
            brands to tailor images to specific demographics and personal preferences, thereby enhancing audience engagement.
          </p>
          <h3 className="section-title">Key Features</h3>
          <ul>
            <li>
              <strong>AI-Driven Face Generation:</strong> Utilizes advanced AI models to create lifelike human faces, eliminating
              the need for expensive, time-consuming photoshoots.
            </li>
            <li>
              <strong>Customizable Visual Content:</strong> Allows users to adjust facial features, expressions, and other attributes
              to align with brand identity and target audience preferences.
            </li>
            <li>
              <strong>Diverse Demographic Representation:</strong> Supports the creation of faces representing various ages,
              ethnicities, and genders, ensuring inclusive and relatable visual content.
            </li>
          </ul>
        </div>

        {/* Right Column: Video Demos & Frameworks */}
        <aside className="project-sidebar">
          <div className="video-demo">
            <h3 className="section-title">Project Presentation</h3>
            <div className="video-wrapper">
              <iframe
                title="Project Presentation Demo"
                src="https://www.youtube.com/embed/8s-3pJOGOhI?start=573"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="video-demo">
            <h3 className="section-title">Additional Demo</h3>
            <div className="video-wrapper">
              <iframe
                title="Additional Demo"
                src="https://www.youtube.com/embed/DD87WxzXex8"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="frameworks-card">
            <h3 className="section-title">🛠️ Frameworks & Libraries Used</h3>
            <ul className="frameworks-list">
              <li>Python</li>
              <li>Tensor Flow</li>
              <li>Pytorch</li>
              <li>Scikit-learn</li>
              <li>Docker</li>
              <li>WSL (Linux)</li>
              <li>StyleGan 2</li>
              <li>Hugging Face</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ComputerVisionProject;
