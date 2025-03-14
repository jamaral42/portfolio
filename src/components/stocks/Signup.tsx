import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    
    // Store credentials in localStorage (Mock authentication)
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Account created successfully!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
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
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
