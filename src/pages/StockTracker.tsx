// src/pages/StockTracker.tsx
import React, { useState } from "react";
import Header from "../components/stocks/Header";
import LoginPopup from "../components/stocks/LoginPopup";

const StockTracker: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}

      <Header />



    </div>
  );
};

export default StockTracker;
