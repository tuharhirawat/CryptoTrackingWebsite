import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="WebName">
          Crypto Tracker
        </div>
        <div className="navbar-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/portfolio" className="nav-link">Portfolio</a>
          <a href="/assets" className="nav-link">Assets</a>
          <a href="/learn" className="nav-link">Learn</a>
          <a href="/pricing" className="nav-link">Pricing</a>
        </div>
        <div className="navbar-buttons">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
