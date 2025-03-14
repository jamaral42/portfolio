import React, { useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
const BASE_URL = "https://finnhub.io/api/v1";

interface NewsArticle {
  headline: string;
  url: string;
}

const StockNews: React.FC = () => {
  const [symbol, setSymbol] = useState("");
  const [news, setNews] = useState<NewsArticle[]>([]);

  const fetchStockNews = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/company-news?symbol=${symbol}&token=${API_KEY}`);
      setNews(response.data.slice(0, 5));
    } catch (error) {
      console.error("Error fetching stock news:", error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Stock News</h2>
      <input
        type="text"
        placeholder="Enter Symbol"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value.toUpperCase())}
        className="border p-2 mr-2"
      />
      <button className="bg-green-500 text-white p-2" onClick={fetchStockNews}>
        Search
      </button>
      <ul>
        {news.map((article, index) => (
          <li key={index} className="mt-2">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {article.headline}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockNews;