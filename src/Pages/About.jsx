// About.js
import React from 'react';
import './About.css'; // Optionally, you can add styling for the About page

const About = () => {
  return (
    <div className="about-container">
      <h2>About Crypto Tracker</h2>
      <p>
        Welcome to **Crypto Tracker**, your one-stop solution for tracking and managing cryptocurrencies. 
        Whether you are a seasoned investor or a beginner in the crypto world, Crypto Tracker makes it 
        easy to keep track of the latest prices, trends, and market data for your favorite cryptocurrencies.
      </p>

      <h3>Features:</h3>
      <ul>
        <li>Track real-time cryptocurrency prices</li>
        <li>Monitor price trends and fluctuations</li>
        <li>Simple and user-friendly interface</li>
        <li>Secure sign-up and login for personalized experience</li>
      </ul>

      <p>
        Stay ahead in the world of cryptocurrencies with Crypto Tracker. 
        Start tracking and making informed investment decisions today!
      </p>
    </div>
  );
};

export default About;
