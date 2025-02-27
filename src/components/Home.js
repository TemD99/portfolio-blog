// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Temitayo Shorunke</h1>
      <p className="home-subtitle">
        AI/XR | Data Science | Machine Learning | Computer Vision | FullStack Web Developer
      </p>
      <hr className="divider" />

      {/* Intro Section */}
      <section className="home-section">
        <h2>Hello World!</h2>
        <p>
          I have a passion for AI, machine learning, and XR, merging cutting-edge
          technologies to create immersive and innovative solutions.
        </p>
        <p>
          Join me on my journey as I explore advanced algorithms, AI model
          optimizations, and seamless user experiences in virtual spaces.
        </p>
      </section>

      {/* Skills & Tools Section */}
      <section className="home-section">
        <h2>Skills &amp; Tools</h2>
        <ul>
          <li>Python (Machine Learning, Data Analytics)</li>
          <li>C# (Unity, XR Development)</li>
          <li>JavaScript (React, Node.js)</li>
          <li>SQL &amp; NoSQL Databases</li>
          <li>AWS (EC2, S3, Lambda)</li>
          <li>Git &amp; GitHub</li>
          <li>Project Management</li>
          <li>Linux, WSL</li>
        </ul>
      </section>

    </div>
  );
};

export default Home;
