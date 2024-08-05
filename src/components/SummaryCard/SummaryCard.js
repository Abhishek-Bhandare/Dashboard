import React from 'react';
import './SummaryCard.css';

const SummaryCard = ({ title, value, icon, growth }) => {
  return (
    <div className="summary-card">
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{value}</p>
        <span className={`growth ${growth >= 0 ? 'positive' : 'negative'}`}>
          {growth >= 0 ? '+' : ''}{growth}%
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;
