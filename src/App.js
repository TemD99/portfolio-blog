// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import Projects from './pages/PortfolioList';
import Edu from './pages/Education';
import DataScienceProject1 from './pages/DataScienceProject1';
import DataScienceProject2 from './pages/DataScienceProject2';
import DataScienceProject3 from './pages/DataScienceProject3';
import FaceCraft from './pages/ComputerVisionProject1.js';
//import DataScienceProject3 from './components/DataScienceProject3';
import './index.css'; // Global styles

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Edu />} />
          <Route path="/data-science-1" element={<DataScienceProject1 />} />
          <Route path="/data-science-2" element={<DataScienceProject2 />} />
          <Route path="/data-science-3" element={<DataScienceProject3 />} />
          <Route path="/facecraft" element={<FaceCraft />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
