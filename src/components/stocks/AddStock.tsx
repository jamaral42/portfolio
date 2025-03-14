import React, { useState } from "react";

interface AddStockProps {
  onAdd: (symbol: string, amount: number) => void;
}

const AddStock: React.FC<AddStockProps> = ({ onAdd }) => {
  const [symbol, setSymbol] = useState("");
  const [amount, setAmount] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symbol.trim()) return;
    onAdd(symbol.toUpperCase(), amount);
    setSymbol("");
    setAmount(1);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Stock Symbol (e.g., AAPL)"
        className="border p-2 rounded w-40"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        min={1}
        className="border p-2 rounded w-20"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add</button>
    </form>
  );
};

export default AddStock;
