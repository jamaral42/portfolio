import React, { useState } from "react";
import Header from "../components/stocks/Header";
import LoginPopup from "../components/stocks/LoginPopup";

const StockTracker: React.FC = () => {
  const url = import.meta.env.VITE_DATABASE_URL;
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token")); 

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {showLogin && <LoginPopup setShowLogin={setShowLogin} setToken={setToken} url={url} />}

      {/* Pass only setShowLogin */}
      <Header setShowLogin={setShowLogin} token={token} setToken={setToken} />

      <div className="flex flex-col mt-42">
        <div className="h-12 bg-stock-primary"></div>
        <div className="h-12 bg-stock-accent"></div>
        <div className="h-12 bg-stock-secondary"></div>
        <div className="h-12 bg-stock-success"></div>
        <div className="h-12 bg-stock-danger"></div>
        <div className="h-12 bg-stock-warning"></div>
        <div className="h-12 bg-stock-background"></div>
        <div className="h-12 bg-stock-card"></div>
        <div className="h-12 bg-stock-border"></div>
      </div>
    </div>
  );
};


export default StockTracker;
