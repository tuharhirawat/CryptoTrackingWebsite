import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="WebName">Crypto Tracker</div>
          <div className="navbar-links">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/airdrop">Airdrop</NavLink>
              </li>
              <li>
                <NavLink to="/pricing">Crypto Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/news">News</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-buttons">
            <NavLink to="/signup" className="signin-btn">Sign Up</NavLink>
            <NavLink to="/signin" className="signup-btn">Sign In</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
