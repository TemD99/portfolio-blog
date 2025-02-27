// src/components/projects/WebDevProject_2.js
import React from 'react';

const WebDevProject2 = () => {
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
        <h2 style={{ margin: 0 }}>Portfolio Website</h2>
        <a
          href="https://github.com/TemD99/Portfolio"
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
          <h3>Description</h3>
          <p>
            <strong>Portfolio Website – A Comprehensive Showcase and Interactive Hub</strong>
            <br />
            This portfolio website is my full-stack platform designed to highlight the diverse projects and technical expertise I’ve developed over the years. I built it with React for an engaging frontend, integrated React Router for smooth navigation, and styled it with a modern dark theme to reflect my aesthetic. The site includes dedicated pages for each project, a dynamic blog, and sections for education and contact—all crafted to give visitors an in-depth look at my work and my approach to solving real-world problems.
          </p>
          
          <h3>Key Features:</h3>
          <ul>
            <li>
              <strong>Dynamic Project Showcase:</strong> Organized into clear categories for easy browsing.
            </li>
            <li>
              <strong>Interactive Project Pages:</strong> Each project has its own detailed page with rich media, detailed descriptions, and external links.
            </li>
            <li>
              <strong>Seamless Navigation:</strong> Smooth, client-side transitions between Home, Portfolio, Blog, Education, and Contact sections.
            </li>
            <li>
              <strong>Responsive & Modern Design:</strong> A sleek dark theme with consistent typography and interactive elements that look great on any device.
            </li>
            <li>
              <strong>Easy Content Management:</strong> Updating projects is simple, keeping my code clean and content fresh.
            </li>
            <li>
              <strong>Personal Branding:</strong> It’s not just an online resume—it’s a visual representation of my technical skills and innovative approach.
            </li>
          </ul>
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
          {/* Video Demo Card */}
          <div className="dark-section">
            <h3>Video Demo</h3>
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '8px',
              }}
            >
              <iframe
                title="Portfolio Website Demo"
                src="https://youtu.be/6r5IxJESe50"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Frameworks & Libraries Card */}
          <div className="dark-section frameworks-section">
            <h3 style={{ marginBottom: '1rem' }}>🛠️ Frameworks & Libraries Used</h3>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Frontend (React)</strong>
              <ul>
                <li>React.js</li>
                <li>React Router</li>
                <li>CSS (Custom Styling)</li>
              </ul>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Build Tools</strong>
              <ul>
                <li>Create React App</li>
                <li>npm</li>
              </ul>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Version Control</strong>
              <ul>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevProject2;
