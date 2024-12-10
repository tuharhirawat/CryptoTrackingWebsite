import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="WebName">
          Crypto Tracker
        </div>
        <div className="navbar-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/pricing" className="nav-link">Pricing</NavLink>
          <NavLink to="/news" className="nav-link">News</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          
        </div>
        <div className="navbar-buttons">
        <NavLink to="/signin"><button className="signin-btn">Sign In</button></NavLink>
        <NavLink to="/signup"><button className="signup-btn">Sign Up</button></NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
