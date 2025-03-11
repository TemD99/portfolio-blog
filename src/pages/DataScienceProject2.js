// src/components/projects/DataScienceProject2.js
import React from 'react';
import '../components/DataScienceProject2.css'; // Adjust path as needed

const DataScienceProject2 = () => {
  return (
    <div className="project-container data-scrapper-container">
      {/* Header: Title & GitHub Link */}
      <header className="project-header">
        <h2 className="project-title">Data Scrapper Project</h2>
        <a
          href="https://github.com/TemD99/Data-Analysis-Data-Scrapper"
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
            This research project allowed me to apply web scraping, data cleaning, 
            and visualization techniques to a real-world dataset. By analyzing AI companies, 
            I was able to gain insights into investment trends and employment patterns within 
            the industry. The project highlighted how data science techniques can be used 
            to extract meaningful insights from raw data.
          </p>

          {/* PDF Viewer Section */}
          <section className="project-pdf-section">
            <h3 className="section-title">Data Scrapper</h3>
            <div className="pdf-viewer">
              <iframe
                title="Research Paper Viewer"
                src={`${process.env.PUBLIC_URL}/pdfs/AI_Companies_Research_Project_with_Images.pdf`}
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
              <li>BeautifulSoup</li>
              <li>requests</li>
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

export default DataScienceProject2;
