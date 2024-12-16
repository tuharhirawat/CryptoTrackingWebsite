import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pricing.css';  

const CoinPricing = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    
    const fetchCoinPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd', 
            ids: 'bitcoin,ethereum,ripple,cardano,polkadot,litecoin,binancecoin,solana,dogecoin,uniswap,monero,stellar,vechain,tron',  // Add more coins here
          },
        });

        setCoins(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchCoinPrices();
  }, []);

  return (
    <div className="coin-pricing-container">
      <h2>Cryptocurrency Prices</h2>

      {loading && <p>Loading prices...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
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
                <td>${coin.current_price.toFixed(2)}</td>
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







































