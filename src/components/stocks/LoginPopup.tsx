import { useState } from "react";
import { FaXmark, FaEye, FaEyeSlash } from "react-icons/fa6";
import NotificationModal from "../../components/stocks/NotificationModal";

interface LoginPopupProps {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setToken: (token: string | null) => void;
  url: string;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setShowLogin, setToken, url }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [state, setState] = useState<"Login" | "Signup">("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.email || !formData.password) {
      setErrorMessage("Todos os campos são obrigatórios.");
      return;
    }

    state === "Login" ? login() : signup();
  };

  const login = async () => {
    try {
      const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (responseData.success) {
        setToken(responseData.accessToken);
        localStorage.setItem("token", responseData.accessToken);
        setShowLogin(false);
        document.body.style.overflow = 'auto';
      } else {
        setErrorMessage(responseData.error);
      }
    } catch (error) {
      setErrorMessage("Ocorreu um erro durante o login. Tente novamente.");
    }
  };

  const signup = async () => {
    try {
      const response = await fetch(`${url}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (responseData.success) {
        alert(responseData.message);
      } else {
        setErrorMessage(responseData.error);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="px-6 absolute h-full w-full bg-black/40 backdrop-blur-md z-50 flex items-center justify-center">
      <form className="bg-gray-800 w-[366px] p-7 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-2xl font-bold text-gray-200">{state}</h4>
          <FaXmark 
            onClick={() => setShowLogin(false)}
            className="text-xl text-gray-400 cursor-pointer hover:text-red-500 transition-all"
            aria-label="Fechar"
          />
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4 mb-6">

          {state === "Signup" && (
            <input 
              name="username"
              autoComplete="username"
              value={formData.username}
              onChange={changeHandler}
              type="username" 
              placeholder="Username" 
              required 
              className="border border-gray-600 bg-gray-700 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
            />
          )}

          <input 
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={changeHandler}
            type="email" 
            placeholder="Email" 
            required 
            className="border border-gray-600 bg-gray-700 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
          />
          
          {/* Password Field */}
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              autoComplete="current-password"
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={changeHandler}
              required 
              className="border border-gray-600 bg-gray-700 text-white p-3 rounded-lg w-full outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}  
              className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-400 hover:text-gray-200 transition-all"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>   
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg transition-all hover:bg-blue-600 cursor-pointer"
        >
          {state}
        </button>

        {state === "Login" ? (
          <p className="mt-4 text-center text-sm text-gray-300">
            You don't have an account?{" "} 
            <span 
              onClick={() => setShowNotification(true)}
              className="cursor-pointer text-yellow-500 hover:underline"
            >
              Signup
            </span>
          </p>
        ) : (
          <p className="mt-4 text-center text-sm text-gray-300">
             Already have an account?{" "} 
            <span 
              onClick={() => setState("Login")}
              className="cursor-pointer text-yellow-500 hover:underline"
            >
              Login
            </span>
          </p>
        )}
        


      </form>

      {/* Notification Modal */}
      {showNotification && (
        <NotificationModal
          h1="Registo Temporariamente Indisponível"
          h2="De momento, não estamos a aceitar novos utilizadores."
          buttons={[{ text: "Fechar", onClick: () => setShowNotification(false) }]}
        />
      )}
    </div>
  ); 
};

export default LoginPopup;
