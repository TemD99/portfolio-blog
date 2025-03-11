// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [showContact, setShowContact] = useState(false);

  const toggleContact = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="text-content">
          <p className="Name">
            - T E M I T A Y O    S H O R U N K E -
          </p>
          <p className="job-title">
            A I  -  B U S I N E S S  -  A N A L Y S T
          </p>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blogs">Blog</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li className="contact-nav-item" onClick={toggleContact}>
            Contact
          </li>
        </ul>
      </nav>
      {showContact && (
        <div className="contact-dropdown">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>Analyticaltem@gmail.com</p>
            <a href="mailto:Analyticaltem@gmail.com" className="button">
              Send Email
            </a>
          </div>
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>678-908-3378</p>
            <a href="tel:6789083378" className="button">
              Call Now
            </a>
          </div>
          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <p>Temitayo Shorunke</p>
            <a
              href="https://www.linkedin.com/in/temitayo-shorunke-a520991b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Visit Profile
            </a>
          </div>
          <div className="contact-card">
            <FaGithub className="contact-icon" />
            <h3>GitHub</h3>
            <p>TemD99</p>
            <a
              href="https://github.com/TemD99"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Visit Profile
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
