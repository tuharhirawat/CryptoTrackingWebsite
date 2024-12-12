import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cryptopricing.css'; 

const CoinPricing = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState(''); 
  const [suggestions, setSuggestions] = useState([]);

  const fetchCoinSuggestions = async (searchQuery) => {
    if (!searchQuery) {
      setSuggestions([]);
      return ;
    }

    setLoading(true);
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/search', {
        params: { query: searchQuery },
      });
      setSuggestions(response.data.coins.slice(0, 5)); 
      setLoading(false);
    } catch (err) {
      setError('Error fetching suggestions');
      setLoading(false);
    }
  };

  const fetchCoinDetails = async (coinId) => {
    if (!coinId) return;

    setLoading(true);
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: coinId,
        },
      });
      setCoins(response.data);
      setSuggestions([]); 
      setLoading(false);
    } catch (err) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    fetchCoinSuggestions(searchQuery);
  };

  const handleSuggestionClick = (coinId) => {
    setQuery('');
    fetchCoinDetails(coinId);
  };

  return (
    <div className="coin-pricing-container">
      <h2>Cryptocurrency Prices</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a cryptocurrency..."
          value={query}
          onChange={handleInputChange}
          className="search-box"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((coin) => (
              <li key={coin.id} onClick={() => handleSuggestionClick(coin.id)}>
                {coin.name} ({coin.symbol.toUpperCase()})
              </li>
            ))}
          </ul>
        )}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && coins.length > 0 && (
        <table className="coin-pricing-table">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price (USD)</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.name}</td>
                <td>${coin.current_price.toFixed(4)}</td>
                <td
                  className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td>${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoinPricing;
