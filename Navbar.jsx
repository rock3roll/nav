import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaWpforms, FaBars } from "react-icons/fa";
import "./App.css";

const Navbar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`navbar ${isMinimized ? "nav-closed" : ""}`}>
      <div className="navbar-header">
        {!isMinimized && <div className="logo">Qualcomm</div>}
        <button className="toggle-btn" onClick={() => setIsMinimized(!isMinimized)}>
          <FaBars />
        </button>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-item">
          <FaHome className="nav-icon" />
          {!isMinimized && <span className="nav-text">Home</span>}
        </Link>
        <Link to="/form" className="nav-item">
          <FaWpforms className="nav-icon" />
          {!isMinimized && <span className="nav-text">Form</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
