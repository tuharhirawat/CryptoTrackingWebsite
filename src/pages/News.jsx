import React, { useEffect, useState } from 'react';
import './news.css';

// Function to fetch crypto news
// Function to fetch crypto news
const fetchCryptoNews = async () => {
  const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=cryptocurrency&pageNumber=1&pageSize=10&autoCorrect=true`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        // 'X-RapidAPI-Key': 'your_rapidapi_key', // Replace with your actual RapidAPI key
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    return data.value; // Return the news data
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error for handling in the calling function
  }
};


// Main News component
const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchCryptoNews(); // Use the reusable function
        setNews(data);
      } catch (err) {
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="news">
      <h1>Crypto News</h1>
      {loading && <p>Loading news...</p>}
      {error && <p className="error">{error}</p>}
      <div className="news-container">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <p className="source">Source: {item.provider.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
export { fetchCryptoNews }; // Export the function for reuse
