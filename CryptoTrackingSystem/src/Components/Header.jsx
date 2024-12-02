import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1><b>Crypto Tracker</b></h1>
      <nav className="button">
        <div className="v1"></div>
        <input type="text" placeholder="Search for cryptocurrency..." />
        <button type="button">SEARCH</button>
      </nav>
    </header>
  );
};

export default Header;
