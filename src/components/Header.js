import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio-projects">Portfolio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
