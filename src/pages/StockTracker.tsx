import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_FINNHUB_API_KEY;
const BASE_URL = "https://finnhub.io/api/v1";

interface Stock {
  symbol: string;
  amount: number;
}

interface Prices {
  [key: string]: number;
}

interface NewsArticle {
  headline: string;
  url: string;
}

const StockTracker: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([
    { symbol: "AAPL", amount: 10 },
    { symbol: "GOOGL", amount: 5 },
  ]);
  const [prices, setPrices] = useState<Prices>({});
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchStockPrices = async () => {
      const newPrices: Prices = {};
      for (const stock of stocks) {
        try {
          const response = await axios.get(
            `${BASE_URL}/quote?symbol=${stock.symbol}&token=${API_KEY}`
          );
          newPrices[stock.symbol] = response.data.c;
        } catch (error) {
          console.error("Error fetching stock data:", error);
        }
      }
      setPrices(newPrices);
    };

    const fetchStockNews = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/news?category=general&token=${API_KEY}`
        );
        setNews(response.data.slice(0, 5)); // Get the latest 5 news articles
      } catch (error) {
        console.error("Error fetching stock news:", error);
      }
    };

    fetchStockPrices();
    fetchStockNews();
  }, [stocks]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Stock Tracker</h1>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol} className="mb-2">
            {stock.symbol}: {prices[stock.symbol] ? `$${prices[stock.symbol]}` : "Loading..."} ({stock.amount} shares)
          </li>
        ))}
      </ul>
      <h2 className="text-xl font-bold mt-6">Latest News</h2>
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

export default StockTracker;
