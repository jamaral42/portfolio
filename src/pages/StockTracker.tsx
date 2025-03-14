import React, { useState, useEffect } from "react";

const StockTracker: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle Signup
  const handleSignup = () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Signup successful! Please log in.");
    setIsSignup(false);
  };

  // Handle Login
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("token", "mock-jwt-token");
      setIsLoggedIn(true);
      setShowModal(false);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Log In Button (Appears when not logged in) */}
      {!isLoggedIn && (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => setShowModal(true)}
        >
          Log In
        </button>
      )}

      {/* Modal for Login/Signup */}
      {showModal && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            {/* Close button (top-right) */}
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              ❌
            </button>

            <h2 className="text-xl font-bold mb-4">{isSignup ? "Sign Up" : "Log In"}</h2>

            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 mb-2 border rounded" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-2 mb-4 border rounded" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />

            <button 
              className="w-full bg-blue-500 text-white px-4 py-2 rounded mb-2"
              onClick={isSignup ? handleSignup : handleLogin}
            >
              {isSignup ? "Sign Up" : "Log In"}
            </button>

            <p className="text-sm text-center cursor-pointer text-blue-600" onClick={() => setIsSignup(!isSignup)}>
              {isSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
            </p>
          </div>
        </div>
      )}

      {/* Stock Tracker Content (Hidden until login) */}
      {isLoggedIn ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Stock Tracker</h1>
          <p>Welcome to your stock tracking dashboard.</p>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Please log in to access stock tracking features.</p>
      )}
    </div>
  );
};

export default StockTracker;
