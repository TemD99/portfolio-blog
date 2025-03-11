// src/components/projects/DataScienceProject3.js
import React from 'react';
import '../components/DataScienceProject3.css'; // Adjust the path as needed

const DataScienceProject3 = () => {
  return (
    <div className="project-container data-science-project3">
      {/* Header: Title & GitHub Link */}
      <header className="project-header">
        <h2 className="project-title">Titanic Survival Prediction Research</h2>
        <a
          href="https://github.com/TemD99/Titanic-Survival-Prediction"
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-button"
        >
          View on GitHub
        </a>
      </header>

      {/* Main Content: Two Columns */}
      <div className="project-content">
        {/* Left Column: Description & PDF Viewer */}
        <div className="project-description">
          <p>
            For this research project, I analyzed the survival rates of Titanic passengers using machine learning.
            The goal was to explore the dataset, clean up messy data, perform exploratory data analysis (EDA), 
            and build a model to predict passenger survival.
          </p>

          <section className="project-pdf-section">
            <h3 className="section-title">Research Project</h3>
            <div className="pdf-viewer">
              <iframe
                title="Research Paper Viewer"
                src={`${process.env.PUBLIC_URL}/pdfs/Titanic_Research_Paper.pdf`}
              />
            </div>
          </section>
        </div>

        {/* Right Column: Frameworks & Libraries */}
        <aside className="project-sidebar">
          <div className="frameworks-card">
            <h3 className="section-title">🛠️ Frameworks & Libraries</h3>
            <ul className="frameworks-list">
              <li>Python</li>
              <li>Scikit-learn</li>
              <li>pandas</li>
              <li>numpy</li>
              <li>matplotlib</li>
              <li>seaborn</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DataScienceProject3;
