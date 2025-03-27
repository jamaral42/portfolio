import React, { useState } from "react";
import Header from "../components/stocks/Header";
import LoginPopup from "../components/stocks/LoginPopup";
import AwaitLogin from "../components/stocks/AwaitLogin";

import AddStock from "../components/stocks/StockAdd";
import StockList from "../components/stocks/StockList";
import NewsPanel from "../components/stocks/NewsPanel";

const StockTracker: React.FC = () => {
  const url = import.meta.env.VITE_DATABASE_URL;
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token")); 
  const [newsTicker, setNewsTicker] = useState("");
  
  return (
    <div className="h-screen flex flex-col bg-stock-primary">
      {showLogin && <LoginPopup setShowLogin={setShowLogin} setToken={setToken} url={url} />}
      <Header setShowLogin={setShowLogin} token={token} setToken={setToken} />
      
      {!token ? <AwaitLogin /> : 
        <div className="grid grid-cols-4 gap-4 p-4">

          <div className="col-span-3 rounded-2xl bg-stock-card p-8">
            <StockList apiUrl={url} token={token} setNewsTicker={setNewsTicker} />
          </div>

          <div>
            <AddStock apiUrl={url} token={token} />
            <NewsPanel apiUrl={url} token={token} ticker={newsTicker} />
          </div>

        </div>
      }
      

    </div>
  );
};


export default StockTracker;
