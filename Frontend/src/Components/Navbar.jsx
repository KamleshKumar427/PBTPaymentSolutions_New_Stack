import React from 'react';
import './Navbar.css';
import { FaSearch, FaPowerOff, FaLanguage } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="../public/images/logo.png" alt="OBL Logo" className="logo" />
      </div>
      <div className="navbar-menu">

        
        <div className="menu-item">
          <FaLanguage size={25} />
            &nbsp;
            &nbsp;
          <select className="dropdown">
            <option value="id">English (United States)</option>
            <option value="name">French</option>
            <option value="email">German</option>
          </select>
        </div>

        <div className="menu-item">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="navbar-user">
        <span className="user-name">Merchant Panel</span>
        <button className="logout-button">
          <FaPowerOff />
        </button>
      </div>
    </div>
  );
};

export default NavBar;