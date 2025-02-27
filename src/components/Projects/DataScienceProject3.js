// src/components/projects/DataScienceProject1.js
import React from 'react';
const DataScienceProject1 = () => {
  return (
    <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '0rem' }}>
      {/* Title & GitHub Link at the Top */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0rem',
        }}
      >
        <h2 style={{ margin: 0 }}> Titanic Survival Prediction Research</h2>
        <a
          href="https://github.com/TemD99/Titanic-Survival-Prediction"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          View on GitHub
        </a>
      </section>

      {/* Main Content: Two Columns Side by Side */}
      <div style={{ display: 'flex', gap: '0rem', marginBottom: '2rem' }}>
        {/* Left Column: Description */}
        <div className="dark-section" style={{ flex: 2 }}>
        <p>
        For this research project, I wanted to analyze the survival rates of passengers on the Titanic using machine learning. The goal was to explore the dataset, clean up any messy data, perform exploratory data analysis (EDA), and then build a model to predict whether a passenger survived or not. 
      </p>

      {/* PDF Viewer Section */}
      <section style={{ marginTop: '2rem' }}>
        <h3>Research project</h3>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '50vh', /* or any preferred height */
            border: '1px solid #444',
            borderRadius: '8px',
            overflow: 'hidden',
            marginTop: '1rem'
          }}
        >
          <iframe
            title="Research Paper Viewer"
            src="/pdfs/Titanic_Research_Paper.pdf"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      </section>
        </div>

        {/* Right Column: Video Demo on Top, Frameworks Below */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0rem',
            width: '300px',
            flexShrink: 0,
          }}
        >
          {/* Frameworks & Libraries Card */}
          <div className="dark-section frameworks-section">
            <h3 style={{ marginBottom: '1rem' }}>🛠️ Frameworks & Libraries</h3>
            <div style={{ marginBottom: '1rem' }}>
              <ul>
              <li>Python </li>
                <li>Scikit-learn  </li>
                <li>pandas  </li>
                <li>numpy  </li>
                <li>matplotlib </li>
                <li>seaborn  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceProject1;
