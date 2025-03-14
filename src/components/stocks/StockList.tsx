import React from "react";

interface StockListProps {
  stocks: { symbol: string; amount: number }[];
  prices: { [key: string]: number };
  onDelete: (symbol: string) => void;
}

const StockList: React.FC<StockListProps> = ({ stocks, prices, onDelete }) => {
  return (
    <div>
      {stocks.length === 0 ? (
        <p>No stocks added yet.</p>
      ) : (
        <ul className="border p-4 rounded">
          {stocks.map((stock) => (
            <li key={stock.symbol} className="flex justify-between items-center border-b py-2">
              <span className="font-semibold">{stock.symbol} ({stock.amount})</span>
              <span className="text-gray-600">${prices[stock.symbol] || "Loading..."}</span>
              <button onClick={() => onDelete(stock.symbol)} className="bg-red-500 text-white p-1 rounded">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockList;
