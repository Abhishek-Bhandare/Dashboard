import React from 'react';
import './GoalMenu.css';

const GoalMenu = () => {
  return (
    <div className="goal-menu">
      <h2>Goals</h2>
      <div className="goal-list">
        <div className="goal-item">
          <h4>Popular Dishes</h4>
        </div>
        <div className="goal-item">
          <h4>Menus</h4>
        </div>
      </div>
    </div>
  );
};

export default GoalMenu;
