import React, { useState } from "react";
import "./AirdropSearch.css";

const AirdropSearch = () => {
  const dummyData = [
    {
      id: 1,
      AirdropName: "BlockMesh Network Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://app.blockmesh.xyz/register",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description:
        "Join the BlockMesh Network and receive free airdrop tokens. Participate by registering with your invite code, completing social media tasks, and referring friends to earn additional rewards.",
    },
    {
      id: 2,
      AirdropName: "NodePay Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://app.nodepay.ai/register",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description:
        "Participate in the NodePay Airdrop by registering through the invite link, completing social media tasks, and referring others to earn additional rewards. Get free tokens and be part of the NodePay ecosystem.",
    },
    {
      id: 3,
      AirdropName: "Pipe Network Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://pipecdn.app/signup",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description:
        "Join the NodePay Airdrop by signing up via the referral link, completing social media requirements, and inviting friends to earn rewards. Gain free tokens and expand your NodePay network.",
    },
    {
      id: 4,
      AirdropName: "OasisAI Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://r.distribute.ai/godhawkeye",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description:
        "Take part in the OasisAI Airdrop by signing up through the referral link, completing social media tasks, and referring others to earn tokens. Join OasisAI to unlock rewards and grow your network.",
    },
    {
      id: 5,
      AirdropName: "KaisarNetwork Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://zero.kaisar.io/register",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description:
        "Participate in the KaisarNetwork Airdrop by registering through the referral link, completing social media tasks, and referring friends. Unlock free tokens and enhance your participation in the KaisarNetwork community.",
    },
    // Add more dummy data if needed
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAirdrops, setFilteredAirdrops] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Handle input change and provide suggestions
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setSearchTerm(value);

    if (value === "") {
      setSuggestions([]);
      setFilteredAirdrops([]);
      return;
    }

    const matches = dummyData.filter((airdrop) =>
      airdrop.AirdropName.toLowerCase().includes(value)
    );

    setSuggestions(matches);
  };

  // Handle search button click
  const handleSearchClick = () => {
    const matches = dummyData.filter((airdrop) =>
      airdrop.AirdropName.toLowerCase().includes(searchTerm)
    );

    setFilteredAirdrops(matches);
    setSuggestions([]); // Clear suggestions after search
  };

  // Handle suggestion click
  const handleSuggestionClick = (airdrop) => {
    setSearchTerm(airdrop.AirdropName);
    setFilteredAirdrops([airdrop]);
    setSuggestions([]);
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
      <button
        type="button"
        className="search-button"
        onClick={handleSearchClick}
      >
        SEARCH
      </button>

      {/* Display Suggestions */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((airdrop) => (
            <li
              key={airdrop.id}
              onClick={() => handleSuggestionClick(airdrop)}
            >
              {airdrop.AirdropName}
            </li>
          ))}
        </ul>
      )}

      {/* Display Filtered Airdrop Details */}
      {filteredAirdrops.length > 0 && (
        <div className="results-container">
          {filteredAirdrops.map((airdrop) => (
            <div key={airdrop.id} className="project-details">
              <h3>{airdrop.AirdropName}</h3>
              <p>
                <strong>Description:</strong> {airdrop.Description}
              </p>
              <p>
                <strong>Status:</strong> {airdrop.AirdropStatus}
              </p>
              <p>
                <strong>Referral Program:</strong> {airdrop.ReferralProgram}
              </p>
              <p>
                <strong>Social Media Requirement:</strong> {airdrop.SocialMediaRequirement}
              </p>
              <a
                href={airdrop.AirdropWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Airdrop
              </a>
            </div>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {filteredAirdrops.length === 0 && searchTerm !== "" && (
        <p className="no-results">No results found</p>
      )}
    </div>
  );
};

export default AirdropSearch;