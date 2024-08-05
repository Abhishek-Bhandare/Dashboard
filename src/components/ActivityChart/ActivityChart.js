import React from 'react';
import './ActivityChart.css';

const ActivityChart = () => {
  return (
    <div className="activity-chart">
      <h2>Activity</h2>
      <div className="chart">
        <div className="bar" style={{ height: '60%' }}></div>
        <div className="bar" style={{ height: '50%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
        <div className="bar" style={{ height: '80%' }}></div>
        <div className="bar" style={{ height: '30%' }}></div>
        <div className="bar" style={{ height: '90%' }}></div>
        <div className="bar" style={{ height: '40%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
        <div className="bar" style={{ height: '60%' }}></div>
        <div className="bar" style={{ height: '80%' }}></div>
      </div>
    </div>
  );
};

export default ActivityChart;
