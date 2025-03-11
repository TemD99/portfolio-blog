// src/components/PortfolioList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Portfolio.css';

const PortfolioList = () => {
  return (
    <div className="dark-section" id="portfolio">
      <div className="portfolio-items">

        {/* Data Science / Machine Learning Section */}
        <div className="portfolio-section">
          <h3 className="portfolio-section-title">Data Science / Machine Learning</h3>
          <div className="portfolio-items-inner">
            <Link to="/data-science-1" className="portfolio-card card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/projects.webp)` }}
              ></div>
              <div className="card-content portfolio-card-content">
                <div className="blog-text-frame">
                  <h3>Spell Price Analysis</h3>
                  <p>A project focused on advanced analytics using machine learning.</p>
                  <ul className="framework-list">
                    <li>Python</li>
                    <li>Pandas</li>
                    <li>Matplotlib</li>
                    <li>Scikit-Learn</li>
                  </ul>
                </div>
                <div className="shine"></div>
              </div>
            </Link>
            <Link to="/data-science-2" className="portfolio-card card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/projects.webp)` }}
              ></div>
              <div className="card-content portfolio-card-content">
                <div className="blog-text-frame">
                  <h3>Data Scrapper</h3>
                  <p>
                    A project focused on scraping AI company data from the Forbes AI 50 list for analysis.
                  </p>
                  <ul className="framework-list">
                    <li>Python</li>
                    <li>BeautifulSoup</li>
                    <li>requests</li>
                    <li>pandas</li>
                    <li>numpy</li>
                    <li>matplotlib</li>
                    <li>seaborn</li>
                  </ul>
                </div>
                <div className="shine"></div>
              </div>
            </Link>
            <Link to="/data-science-3" className="portfolio-card card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/projects.webp)` }}
              ></div>
              <div className="card-content portfolio-card-content">
                <div className="blog-text-frame">
                  <h3>Titanic Survival Prediction</h3>
                  <p>A project analyzing survival rates of Titanic passengers.</p>
                  <ul className="framework-list">
                    <li>Python</li>
                    <li>Scikit-learn</li>
                    <li>pandas</li>
                    <li>numpy</li>
                    <li>matplotlib</li>
                    <li>seaborn</li>
                  </ul>
                </div>
                <div className="shine"></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Computer Vision Section */}
        <div className="portfolio-section">
          <h3 className="portfolio-section-title">Computer Vision</h3>
          <div className="portfolio-items-inner">
            <Link to="/facecraft" className="portfolio-card card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/projects.webp)` }}
              ></div>
              <div className="card-content portfolio-card-content">
                <div className="blog-text-frame">
                  <h3>Face Craft</h3>
                  <p>
                    A computer vision generative AI project that creates unique faces guided by prompting.
                  </p>
                  <ul className="framework-list">
                    <li>Python</li>
                    <li>Tensor Flow</li>
                    <li>Scikit-learn</li>
                    <li>Docker</li>
                    <li>WSL</li>
                    <li>StyleGan 2</li>
                  </ul>
                </div>
                <div className="shine"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
