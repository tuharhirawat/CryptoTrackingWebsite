import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';  

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCryptoNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'cryptocurrency',
            sortBy: 'publishedAt',
            apiKey: '06ef5516cde44ce18d1155439de795d0',
          },
        });

        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError('Error fetching news');
        setLoading(false);
      }
    };

    fetchCryptoNews();
  }, []);

  return (
    <div className="crypto-news-container">
      <h2>Latest Cryptocurrency News</h2>

      {loading && <p>Loading news...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="news-list">
          {news.map((article, index) => (
            <div className="news-item" key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="news-image" />}
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span className="news-source">Source: {article.source.name}</span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
