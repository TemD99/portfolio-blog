// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/GlobalStyles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PortfolioList from './components/PortfolioList';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import Education from './components/Education';
import Contact from './components/Contact';

/* Import your new project pages - ensure these file names and folder names match exactly */
import WebDevProject1 from './components/Projects/WebDevProject1';
import WebDevProject2 from './components/Projects/WebDevProject2';
import AIXRProject1 from './components/Projects/AIXRProject1';
import AIXRProject2 from './components/Projects/AIXRProject2';
import DataScienceProject1 from './components/Projects/DataScienceProject1';
import DataScienceProject2 from './components/Projects/DataScienceProject2';
import DataScienceProject3 from './components/Projects/DataScienceProject3';
import ComputerVisionProject from './components/Projects/ComputerVisionProject1';

function App() {
  return (
    // Set basename to /portfolio if your GitHub Pages is at username.github.io/portfolio
    <Router >
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Existing routes */}
            <Route path="/" element={<Home />} />
            <Route path="/portfolio-projects" element={<PortfolioList />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />

            {/* Project pages */}
            <Route path="/web-dev-1" element={<WebDevProject1 />} />
            <Route path="/web-dev-2" element={<WebDevProject2 />} />
            <Route path="/ai-xr-1" element={<AIXRProject1 />} />
            <Route path="/ai-xr-2" element={<AIXRProject2 />} />
            <Route path="/data-science-1" element={<DataScienceProject1 />} />
            <Route path="/data-science-2" element={<DataScienceProject2 />} />
            <Route path="/data-science-3" element={<DataScienceProject3 />} />
            <Route path="/computer-vision" element={<ComputerVisionProject />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
