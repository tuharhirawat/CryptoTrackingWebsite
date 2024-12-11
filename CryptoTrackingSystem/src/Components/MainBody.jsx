import React, { useState, useEffect } from "react";
import axios from "axios";
import './Main.css';


function Main() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [data, setData] = useState([]); 
  const [result, setResult] = useState(null); 

  useEffect(() => {
    axios
      .get("http://localhost:3000/Node_Airdrops")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

 
  const handleSearch = () => {
    const found = data.find(
      (item) => item.name.toLowerCase() === searchQuery.toLowerCase()
    );
    setResult(found || "No results found!");
  };

  return (
    <div className="main-container">
      {/* Search Section */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for cryptocurrency..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" className="search-button" onClick={handleSearch}>
          SEARCH
        </button>
      </div>

      {/* Result Section */}
      <div className="result-container">
        {result && (
          <div className="result">
            {typeof result === "string" ? (
              <p>{result}</p>
            ) : (
              <>
                <h3>{result.name}</h3>
                <p>{result.desc}</p>
                <p>Funding: ${result.funding}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;