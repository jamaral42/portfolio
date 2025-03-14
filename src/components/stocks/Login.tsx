import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("token", "mock-jwt-token"); // Store mock token
      navigate("/"); // Redirect to StockTracker
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <input 
        type="email" 
        placeholder="Email" 
        className="mb-2 p-2 border rounded" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="mb-4 p-2 border rounded" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};

export default Login;
