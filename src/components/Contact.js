import React from 'react';
import '../styles/Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="dark-section" id="contact">
      <h2>Contact</h2>
      <div className="contact-cards">
        {/* Email Card */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p>Analyticaltem@gmail.com</p>
          <a href="mailto:Analyticaltem@gmail.com" className="button">
            Send Email
          </a>
        </div>

        {/* Phone Card */}
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <p>678-908-3378</p>
          <a href="tel:6789083378" className="button">
            Call Now
          </a>
        </div>

        {/* LinkedIn Card */}
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
      </div>
    </div>
  );
};

export default Contact;
