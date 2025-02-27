// src/components/Education.js
import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <div className="dark-section" id="education">
      <h2>Education</h2>
      <div className="education-card">
        <h3>Bachelor of Science: Computer Science, Artificial Intelligence</h3>
        <p>Full Sail University – Winter Park, FL</p>
        <h4>Relevant Coursework</h4>
        <ul>
          <li>Probability</li>
          <li>Machine Learning</li>
          <li>Deep Learning &amp; Natural Language Processing</li>
          <li>Data Visualization and Modeling</li>
          <li>Security in Artificial Intelligence</li>
          <li>Database Management (SQL)</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
