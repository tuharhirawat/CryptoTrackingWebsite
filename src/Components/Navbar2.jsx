import React from 'react'
import {NavLink, Link } from "react-router-dom";


function Navbar2() {

    const handleLogout = () => {
        return ("Logged out successfully!");
      };

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
              <button onClick={handleLogout()}>
                <NavLink to="/" className="logout-btn">Logout</NavLink>
              </button>
            </div>
          </nav>
        </>
      );
  
    };    

export default Navbar2