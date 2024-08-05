import React from 'react';
import { FaHome, FaChartPie, FaUser, FaCog } from 'react-icons/fa';
import './SideMenu.css';

const SideMenu = () => {
  return (
    <div className="side-menu">
      <div className="logo">🍔</div>
      <nav>
        <ul>
          <li><a href="#"><FaHome /></a></li>
          <li><a href="#"><FaChartPie /></a></li>
          <li><a href="#"><FaUser /></a></li>
          <li><a href="#"><FaCog /></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default SideMenu;
