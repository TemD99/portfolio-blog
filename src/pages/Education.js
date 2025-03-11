// src/components/Education.js
import React from 'react';
import '../components/Education.css';

const Education = () => {
  return (
    <div className="dark-section education-page" id="education">
   <h3 className="portfolio-section-title">Education</h3>
      <div className="education-cards">
        <div className="education-card">
          <div className="education-card-content">
            <h3>AWS Certified Machine Learning Specialty</h3>
            <p className="status">Currently Pursuing</p>
          </div>
        </div>

        <div className="education-card">
          <div className="education-card-content">
            <h3>Bachelor of Science: Computer Science, Artificial Intelligence</h3>
            <p>Full Sail University – Winter Park, FL</p>
            <h4>Relevant Coursework</h4>
            <ul>
              <li>Probability</li>
              <li>Machine Learning</li>
              <li>Computer Vision</li>
              <li>Deep Learning &amp; Natural Language Processing</li>
              <li>Data Visualization and Modeling</li>
              <li>Security in Artificial Intelligence</li>
              <li>Database Management (SQL)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
