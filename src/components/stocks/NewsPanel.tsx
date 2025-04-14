import React, { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  source: string;
  url: string;
  publishedAt: string;
}

interface StockListProps {
  apiUrl: string;
  token: string;
  ticker: string;
}

const NewsPanel: React.FC<StockListProps> = ( { apiUrl, token, ticker } ) => {
  const [news, setNews] = useState<NewsItem[] | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${apiUrl}/stock-news`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ticker }),
        });
  
        if (!response.ok) throw new Error("Erro ao buscar as notícias");
  
        const data = await response.json();
        if (data.success) {
          console.log(data.news);
          setNews(data.news.slice(0, 10));
        } else {
          throw new Error("Falha ao carregar notícias");
        }
      } catch (err) {
        console.error((err as Error).message);
      }
    };

    if (ticker) {
      fetchNews();
    }
  }, [ticker]);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg overflow-y-auto text-xs">
      <h2 className="font-semibold mb-2 text-xs">📰 Notícias</h2>
      {ticker && (
        <p className="text-xs text-gray-400 mb-2">Últimas sobre {ticker}</p>
      )}
      {news ? (
        <ul className="space-y-2">
          {news.map((n, idx) => (
            <li key={idx}>
              <a
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {n.title}
              </a>
              <p className="text-xs text-gray-400">{n.source} | {new Date(n.publishedAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-gray-400">Selecione uma ação para ver notícias.</p>
      )}
    </div>
  );
};

export default NewsPanel;