// src/components/projects/DataScienceProject1.js
import React from 'react';
import '../components/DataScienceProject1.css';  // Adjust the path as needed

const DataScienceProject1 = () => {
  return (
    <div className="project-container">
      {/* Header: Title & GitHub Link */}
      <header className="project-header">
        <h2 className="project-title">Spell Pricing Analysis</h2>
        <a
          href="https://github.com/TemD99/Spell-Pricing-Analysis"
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
            This project involves advanced analytics and machine learning techniques.
            Explore the analysis paper below to learn more about the methodologies and findings.
          </p>

          <section className="project-pdf-section">
            <h3 className="section-title">Analysis</h3>
            <div className="pdf-viewer">
              <iframe
                title="Research Paper Viewer"
                src={`${process.env.PUBLIC_URL}/pdfs/FF1_Data_Processing_Report.pdf`}
              ></iframe>
            </div>
          </section>
        </div>

        {/* Right Column: Frameworks & Libraries */}
        <aside className="project-sidebar">
          <div className="frameworks-card">
            <h3 className="section-title">🛠️ Frameworks & Libraries</h3>
            <ul className="frameworks-list">
              <li>Python</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
              <li>Seaborn</li>
              <li>Scikit-learn</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DataScienceProject1;
