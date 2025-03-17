// src/pages/StockTracker.tsx
import React, { useState } from "react";
import Header from "../components/stocks/Header";
import LoginPopup from "../components/stocks/LoginPopup";
import AwaitLogin from "../components/stocks/AwaitLogin";

const StockTracker: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}

      <Header />
      {/* Display user info if logged in */}
      <div className="p-4">
        {user ? <p>Welcome, {user.username}</p> : <AwaitLogin />}
      </div>

      {/* Show login button if user is not logged in */}
      {!user && (
        <button
          onClick={() => setShowLogin(true)}
          className="bg-blue-500 text-white p-2 rounded mt-4 self-center"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default StockTracker;
