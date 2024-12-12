import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/signin');
  };

  return (
    <div className="dashboard-container">
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <ul>
            <li>
              <Link to="/userprofile">User Profile</Link>
            </li>
            <li>
              <Link to="/airdrop">Airdrops</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/pricing">Crypto Price</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="main-content">
        <button className="hamburger-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          &#9776;
        </button>
        <div className="dashboard-header">
          <h1>Dashboard</h1>
        </div>
        <div className="content">
          {/* Main content will go here */}
          <h2>Welcome to your Dashboard!</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
