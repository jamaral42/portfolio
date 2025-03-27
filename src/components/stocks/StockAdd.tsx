import React, { useState } from "react";

interface AddStockProps {
  apiUrl: string,
  token: string
}

const StockAdd: React.FC<AddStockProps> = ({ apiUrl, token }) => {
  const [symbol, setSymbol] = useState("");
  const [amount, setAmount] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    console.log(apiUrl, token, symbol, amount);
    const addStock = async () => {
      try {
        const response = await fetch(`${apiUrl}/add-stock`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ticker: symbol, quantity: amount }),
        });
    
        const data = await response.json();
    
        if (!response.ok) {
          console.error("Server Error Response:", data);
          throw new Error(data.error || "Failed to add stock.");
        }
    
        alert(data.message);
      } catch (error) {
        console.error("Error adding stock:", error);
        alert("Error adding stock. Please try again.");
      }
    };
    

    e.preventDefault();
    if (!symbol.trim()) return;
    addStock();
    setSymbol("");
    setAmount(1);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2 ">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Stock Symbol"
        className="border p-2 rounded w-40 bg-stock-background "
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        min={1}
        className="border p-2 rounded w-20 bg-stock-background"
      />
      <button type="submit" className="bg-stock-accent text-white p-2 rounded">Add</button>
    </form>
  );
};

export default StockAdd;
