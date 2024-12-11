import "./AirdropSearch.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AirdropSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAirdrops, setFilteredAirdrops] = useState([]);
  const [message, setMessage] = useState('');
  const [airdropData, setAirdropData] = useState([]);

  // Fetch data from server on component mount
  useEffect(() => {
    axios
      .get('http://localhost:3000/Node-Airdrops')
      .then((response) => {
        setAirdropData(response.data['Node-Airdrops']); // Adjust to match your server's response
      })
      .catch((error) => {
        console.error('Error fetching airdrop data:', error);
        setMessage('Failed to fetch airdrop data.');
      });
  }, []);

  // Handle input change and filter suggestions
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter airdrops by partial match
    if (value.trim() === '') {
      setFilteredAirdrops([]);
      setMessage('Type the name of the project you want to search');
      return;
    }

    const filtered = airdropData.filter((item) =>
      item.AirdropName.toLowerCase().includes(value)
    );

    setFilteredAirdrops(filtered);
    setMessage(filtered.length === 0 ? 'No results found' : '');
  };

  // Handle search button click
  const handleSearchClick = () => {
    const trimmedTerm = searchTerm.trim();

    if (trimmedTerm === '') {
      setMessage('Type the name of the project you want to search');
      setFilteredAirdrops([]);
    } else {
      const foundAirdrop = airdropData.find(
        (item) => item.AirdropName.toLowerCase() === trimmedTerm
      );

      if (foundAirdrop) {
        setFilteredAirdrops([foundAirdrop]);
        setMessage('');
      } else {
        setFilteredAirdrops([]);
        setMessage('No results found');
      }
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (airdrop) => {
    setSearchTerm(airdrop.AirdropName);
    setFilteredAirdrops([airdrop]);
    setMessage('');
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for airdrop project..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="button" className="search-button" onClick={handleSearchClick}>
        SEARCH
      </button>

      {/* Display Suggestions */}
      {filteredAirdrops.length > 0 && searchTerm.trim() !== '' && (
        <ul className="suggestions-list">
          {filteredAirdrops.map((airdrop, index) => (
            <li key={index} onClick={() => handleSuggestionClick(airdrop)}>
              {airdrop.AirdropName}
            </li>
          ))}
        </ul>
      )}

      {/* No Results / Message */}
      {message && <p className="no-results">{message}</p>}

      {/* Display Selected Airdrop Details */}
      {filteredAirdrops.length === 1 && (
        <div className="project-details">
          <h3>{filteredAirdrops[0].AirdropName}</h3>
          <p><strong>Description:</strong> {filteredAirdrops[0].Description}</p>
          <p><strong>Status:</strong> {filteredAirdrops[0].AirdropStatus}</p>
          <p><strong>Referral Program:</strong> {filteredAirdrops[0].ReferralProgram}</p>
          <p><strong>Social Media Requirement:</strong> {filteredAirdrops[0].SocialMediaRequirement}</p>
          <a href={filteredAirdrops[0].AirdropWebsite} target="_blank" rel="noopener noreferrer">Join Airdrop</a>
        </div>
      )}
    </div>
  );
};

export default AirdropSearch;
