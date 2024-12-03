import React from "react";

function Main() {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for cryptocurrency..."
        />
        <button type="button" className="search-button">SEARCH</button>
      </div>
    </>
  );
}

export default Main;