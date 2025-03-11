// src/components/Cards.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Set the CSS variables on the root so body::before can read them
      document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
      document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
    };

    // Listen on the whole window instead of just #cards
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <>
      <div id="cards">
      <Link  to={`/projects`}>
      <div className="card">
  {/* Shine effect layer */}
  <div className="shine"></div>

  {/* Existing background image layer */}
  <div
    className="card-background"
    style={{ backgroundImage: 'url(/images/projects.webp)' }}
  ></div>

  <div className="card-content">
    <div className="card-image">
      <i className="fa-duotone fa-apartment"></i>
    </div>
    <div className="card-info-wrapper">
      <div className="card-info">
        <i className="fa-duotone fa-apartment"></i>
        <div className="card-info-title">
          <h3>- P R O J E C T S -</h3>
        </div>
      </div>
    </div>
  </div>
</div>
</Link>

<Link  to={`/blogs`}>
<div className="card">
  {/* Shine effect layer */}
  <div className="shine"></div>

  {/* Existing background image layer */}
  <div
    className="card-background"
    style={{ backgroundImage: 'url(/images/blog.webp)' }}
  ></div>

  <div className="card-content">
    <div className="card-image">
      <i className="fa-duotone fa-apartment"></i>
    </div>
    <div className="card-info-wrapper">
      <div className="card-info">
        <i className="fa-duotone fa-apartment"></i>
        <div className="card-info-title">
          <h3>- B L O G -</h3>
        </div>
      </div>
    </div>
  </div>
</div>
</Link>

<Link  to={`/education`}>
<div className="card">
  {/* Shine effect layer */}
  <div className="shine"></div>

  {/* Existing background image layer */}
  <div
    className="card-background"
    style={{ backgroundImage: 'url(/images/edu.webp)' }}
  ></div>

  <div className="card-content">
    <div className="card-image">
      <i className="fa-duotone fa-apartment"></i>
    </div>
    <div className="card-info-wrapper">
      <div className="card-info">
        <i className="fa-duotone fa-apartment"></i>
        <div className="card-info-title">
          <h3>- E D U C A T I O N -</h3>
        </div>
      </div>
    </div>
  </div>
</div>
</Link>

        {/* Repeat for other cards, changing the image URL as needed */}
      </div>
      <a id="source-link" className="link" href="https://linear.app/features" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-link"></i>
        <span className="roboto-mono">Source</span>
      </a>
      <a id="youtube-link" className="link" href="https://youtu.be/htGfnF1zN4g" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-youtube"></i>
        <span>5 min Tutorial</span>
      </a>
    </>
  );
};

export default Cards;
