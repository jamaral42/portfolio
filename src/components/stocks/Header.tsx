import React from "react";

interface HeaderProps {
  setShowLogin: (showLogin: boolean) => void;
  token: string | null;
  setToken: (token: string | null) => void;
}

const Header: React.FC<HeaderProps> = ({ setShowLogin, token, setToken }) => {

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <header className="w-full bg-stock-primary shadow-lg p-6 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-white tracking-tight">Stock Tracker</h1>

      {token ? 
        <button 
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-stock-secondary transition-colors cursor-pointer" 
          onClick= {() => handleLogout()}
        >
          Logout
        </button>
        :
        <button 
          className="bg-stock-accent text-white py-2 px-4 rounded hover:bg-stock-secondary transition-colors cursor-pointer"
          onClick={() => setShowLogin(true)} 
        >
          Login
        </button>
      }
    </header>
  );
};

export default Header;
