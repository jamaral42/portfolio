import React, { useEffect, useState } from "react";

interface Stock {
  logo_url: string;
  ticker: string;
  name: string;
  industry: string;
  quantity: number;
  current_price: number;
  high_price: number;
  low_price: number;
  open_price: number;
  previous_close: number;
  date: string;
}

interface StockListProps {
  apiUrl: string;
  token: string;
  setNewsTicker: (ticker: string) => void;
}

const StockList: React.FC<StockListProps> = ({ apiUrl, token, setNewsTicker }) => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sortColumn, setSortColumn] = useState<keyof Stock | "variation" | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch(`${apiUrl}/stocks`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data.success) {
          if (data.result && data.result.length > 0) {
            setStocks(data.result);
            setError(null);
          } else {
            setStocks([]);
            setError("Nenhuma ação encontrada.");
          }
        } else {
          setError(data.error || "Falha ao carregar ações.");
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
    const interval = setInterval(fetchStocks, 60000);

    return () => clearInterval(interval);
  }, [apiUrl, token]);

  const sortStocks = (column: keyof Stock | "variation") => {
    const newOrder =
      sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(newOrder);

    setStocks((prevStocks) =>
      [...prevStocks].sort((a, b) => {
        let valA: number | string, valB: number | string;

        if (column === "variation") {
          const prevCloseA = Number(a.previous_close) || 1;
          const prevCloseB = Number(b.previous_close) || 1;
          valA = ((Number(a.current_price) - prevCloseA) / prevCloseA) * 100;
          valB = ((Number(b.current_price) - prevCloseB) / prevCloseB) * 100;
        } else {
          valA = typeof a[column] === "string" ? a[column] : Number(a[column]) || 0;
          valB = typeof b[column] === "string" ? b[column] : Number(b[column]) || 0;
        }

        return newOrder === "asc"
          ? valA > valB
            ? 1
            : -1
          : valA < valB
          ? 1
          : -1;
      })
    );
  };

  if (loading) return <p className="p-4 text-center text-gray-500">Carregando...</p>;
  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">📈 Minhas Ações</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-white border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              {[
                { key: "logo_url", label: "" }, // Logo Column
                { key: "ticker", label: "Ticker" },
                { key: "name", label: "Nome" },
                { key: "industry", label: "Indústria" },
                { key: "quantity", label: "Qtd" },
                { key: "current_price", label: "Preço Atual" },
                { key: "high_price", label: "Máx." },
                { key: "low_price", label: "Mín." },
                { key: "open_price", label: "Abertura" },
                { key: "previous_close", label: "Fecho" },
              ].map(({ key, label }) => (
                <th
                  key={key}
                  className="p-2 cursor-pointer text-left hover:bg-gray-700 transition"
                  onClick={() => key !== "logo_url" && sortStocks(key as keyof Stock)}
                >
                  {label}{" "}
                  {sortColumn === key && sortOrder === "asc"
                    ? "↑"
                    : sortColumn === key
                    ? "↓"
                    : ""}
                </th>
              ))}
              <th
                className="p-2 cursor-pointer text-left hover:bg-gray-700 transition"
                onClick={() => sortStocks("variation")}
              >
                Variação{" "}
                {sortColumn === "variation" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th className="p-2 text-center">Notícias</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => {
              const diff = stock.current_price - stock.previous_close;
              const diffPercentage = ((diff / stock.previous_close) * 100).toFixed(2);

              return (
                <tr
                  key={stock.ticker}
                  className="border-b border-gray-700 hover:bg-gray-800 transition"
                >
                  {/* Logo Image */}
                  <td className="p-2">
                    <img
                      src={stock.logo_url}
                      alt={stock.name}
                      className="w-8 h-8 rounded-full"
                    />
                  </td>
                  <td className="p-2">{stock.ticker}</td>
                  <td className="p-2">{stock.name}</td>
                  <td className="p-2">{stock.industry}</td>
                  <td className="p-2 text-center">{stock.quantity}</td>
                  <td className="p-2 text-center">{Number(stock.current_price || 0).toFixed(2)}</td>
                  <td className="p-2 text-center">{Number(stock.high_price || 0).toFixed(2)}</td>
                  <td className="p-2 text-center">{Number(stock.low_price || 0).toFixed(2)}</td>
                  <td className="p-2 text-center">{Number(stock.open_price || 0).toFixed(2)}</td>
                  <td className="p-2 text-center">{Number(stock.previous_close || 0).toFixed(2)}</td>

                  {/* Difference Column */}
                  <td
                    className={`p-2 text-center font-semibold ${
                      diff >= 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {diff.toFixed(2)} ({diffPercentage}%)
                  </td>
                  {/* News Button */}
                  <td className="p-2 text-center">
                    <button
                      onClick={() => setNewsTicker(stock.ticker)}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-lg"
                    >
                      📰 Ver Notícias
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockList;
