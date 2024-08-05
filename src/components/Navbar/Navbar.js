import React from 'react';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
// import avatar from '../../assets/avatar.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-icons">
        <FaEnvelope className="icon" />
        <FaBell className="icon" />
        <img src="" alt="User" className="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
