// src/components/stocks/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-stock-primary shadow-lg p-6 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-white tracking-tight">Stock Tracker</h1>
      <nav className="flex items-center gap-6">
        <a href="#" className="text-stock-secondary hover:text-white transition-colors">Home</a>
        <a href="#" className="text-stock-secondary hover:text-white transition-colors">Dashboard</a>
        <a href="#" className="text-stock-secondary hover:text-white transition-colors">About</a>
      </nav>
    </header>
  );
};

export default Header;
