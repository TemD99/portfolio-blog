// src/components/PortfolioList.js
import React from 'react';
import '../styles/Portfolio.css';

const PortfolioList = () => {
  return (
    <div className="dark-section" id="portfolio">
      <h2>Portfolio</h2>

      {/* Web Dev Section */}
      <div className="portfolio-section">
        <h3 className="portfolio-section-title">Web Dev</h3>
        <div className="portfolio-items">
          <a href="/web-dev-1" className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>User Activity Tracker</h4>
              <p>A web dashboard application that displays user activity on PC.</p>
              <ul className="framework-list">
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
              </ul>
            </div>
          </a>
          <a href="/web-dev-2" className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>Portfolio Website</h4>
              <p>A project that demonstrates modern web development skills.</p>
              <ul className="framework-list">
                <li>React</li>
                <li>React Router DOM</li>
                <li>Create React App</li>
                <li>React Icons</li>
                <li>CSS with Flexbox</li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      {/* Data Science / Machine Learning */}
      <div className="portfolio-section">
        <h3 className="portfolio-section-title">Data Science / Machine Learning</h3>
        <div className="portfolio-items">
          <a href="/data-science-1" className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>Spell Price Analysis</h4>
              <p>A project focused on advanced analytics using machine learning.</p>
              <ul className="framework-list">
                <li>Python</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>Scikit-Learn</li>
              </ul>
            </div>
          </a>

          <a href="/data-science-2" className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>Data Scrapper</h4>
              <p>A project focused on scraping AI company data from the Forbes AI 50 list for analysis.</p>
              <ul className="framework-list">
                <li>BeautifulSoup</li>
                <li>requests</li>
                <li>pandas</li>
                <li>numpy</li>
                <li>matplotlib</li>
                <li>seaborn</li>
              </ul>
            </div>
          </a>

          <a href="/data-science-3" className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>Titanic Survival Prediction Research</h4>
              <p>A project where I analyze the survival rates of passengers on the Titanic.</p>
              <ul className="framework-list">
                <li>Python</li>
                <li>Scikit-learn</li>
                <li>pandas</li>
                <li>numpy</li>
                <li>matplotlib</li>
                <li>seaborn</li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      {/* Everything Below is "Currently Being Updated" */}
      {/* Computer Vision */}
      <div className="portfolio-section disabled-section">
        <h3 className="portfolio-section-title">Computer Vision</h3>
        <div className="portfolio-items">
          <div className="disabled-overlay">Currently Being Updated</div>
          <a className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>Computer Vision Project</h4>
              <p>A project showcasing image recognition and computer vision techniques.</p>
              <ul className="framework-list">
                <li>OpenCV</li>
                <li>Python</li>
                <li>Keras</li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      {/* AI Section */}
      <div className="portfolio-section disabled-section">
        <h3 className="portfolio-section-title">AI</h3>
        <div className="portfolio-items">
          <div className="disabled-overlay">Currently Being Updated</div>
          <a className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>AI XR Project 1</h4>
              <p>A cool AI/XR project that demonstrates immersive experiences.</p>
              <ul className="framework-list">
                <li>Unity</li>
                <li>C#</li>
                <li>Vuforia</li>
              </ul>
            </div>
          </a>
          <a className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>AI XR Project 2</h4>
              <p>Another innovative project merging AI and XR technologies.</p>
              <ul className="framework-list">
                <li>Unreal Engine</li>
                <li>Blueprints</li>
                <li>ARKit</li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      {/* Software Engineering Section */}
      <div className="portfolio-section disabled-section">
        <h3 className="portfolio-section-title">Software Engineering</h3>
        <div className="portfolio-items">
          <div className="disabled-overlay">Currently Being Updated</div>
          <a className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>AI XR Project 1</h4>
              <p>A cool AI/XR project that demonstrates immersive experiences.</p>
              <ul className="framework-list">
                <li>Unity</li>
                <li>C#</li>
                <li>Vuforia</li>
              </ul>
            </div>
          </a>
          <a className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>AI XR Project 2</h4>
              <p>Another innovative project merging AI and XR technologies.</p>
              <ul className="framework-list">
                <li>Unreal Engine</li>
                <li>Blueprints</li>
                <li>ARKit</li>
              </ul>
            </div>
          </a>
        </div>
      </div>

      {/* XR Section */}
      <div className="portfolio-section disabled-section">
        <h3 className="portfolio-section-title">XR</h3>
        <div className="portfolio-items">
          <div className="disabled-overlay">Currently Being Updated</div>
          <a className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>AI XR Project 1</h4>
              <p>A cool AI/XR project that demonstrates immersive experiences.</p>
              <ul className="framework-list">
                <li>Unity</li>
                <li>C#</li>
                <li>Vuforia</li>
              </ul>
            </div>
          </a>
          <a className="portfolio-card">
            <div className="portfolio-card-content">
              <h4>AI XR Project 2</h4>
              <p>Another innovative project merging AI and XR technologies.</p>
              <ul className="framework-list">
                <li>Unreal Engine</li>
                <li>Blueprints</li>
                <li>ARKit</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
