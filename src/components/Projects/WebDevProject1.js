// src/components/projects/WebDevProject_1.js
import React from 'react';

const WebDevProject1 = () => {
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
        <h2 style={{ margin: 0 }}>User Activity Tracker</h2>
        <a
          href="https://github.com/TemD99/UserActivityTracker"
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
            <strong>User Activity Tracker - Behavioral Data Analysis Dashboard</strong>
            <br />
            This project is a full-stack web application designed to monitor and analyze digital behavior patterns. Built with React (frontend), FastAPI (backend), and SQLite (database), it collects and visualizes user activity data such as most-used applications, peak usage hours, long session durations, and behavioral trends.
          </p>
          
          <h3>Key Features:</h3>
          <ul>
            <li><strong>Comprehensive Activity Tracking:</strong> Logs active window titles, application usage, and interaction duration.</li>
            <li><strong>Categorization of Activities:</strong> Automatically classifies applications into categories such as Work/Productivity, Entertainment, Social Media, Gaming, and Browsing.</li>
            <li><strong>Idle vs. Active Monitoring:</strong> Tracks user input (keystrokes &amp; mouse clicks) to differentiate active engagement from idle time.</li>
            <li><strong>Data Visualization:</strong> Displays insights through an interactive pie chart that breaks down time spent on each activity.</li>
            <li><strong>Historical Data Filtering:</strong> Users can select specific dates to review past activity trends.</li>
            <li><strong>Automated Data Processing:</strong> The system updates and logs activity data in real time.</li>
            <li><strong>Customizable UI:</strong> Users can adjust text colors and personalize the dashboard experience.</li>
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
                title="User Activity Tracker Demo"
                src="https://youtu.be/nBXtln2TW6g"
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
                <li>Recharts</li>
                <li>Axios</li>
                <li>CSS (Custom Styling)</li>
              </ul>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Backend (FastAPI)</strong>
              <ul>
                <li>FastAPI</li>
                <li>SQLAlchemy</li>
                <li>Uvicorn</li>
              </ul>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Database (SQLite)</strong>
              <ul>
                <li>SQLite</li>
              </ul>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>PowerShell Scripting</strong>
              <ul>
                <li>PSSQLite</li>
                <li>Windows API (user32.dll)</li>
              </ul>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Additional Tools &amp; Technologies</strong>
              <ul>
                <li>Node.js &amp; npm</li>
                <li>Python</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevProject1;
