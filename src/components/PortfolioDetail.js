import React from 'react';
import { useParams } from 'react-router-dom';
import portfolioData from '../data/portfolioData';

const PortfolioDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);

  const project = portfolioData.find((p) => p.id === projectId);

  if (!project) {
    return <div className="dark-section">Project not found.</div>;
  }

  return (
    <div className="dark-section">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Additional details, frameworks, etc. */}
    </div>
  );
};

export default PortfolioDetail;
