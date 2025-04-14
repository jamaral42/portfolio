import { useContext, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext";
import { FaXmark, FaEye, FaEyeSlash } from "react-icons/fa6";
import NotificationModal from "../NotificationModal";

interface LoginPopupProps {
  setShowLogin: (show: boolean) => void;
  initialState: "Login" | "Sign Up";
}

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface ResponseData {
  success: boolean;
  accessToken?: string;
  refreshToken?: string;
  error?: string;
}

export default function LoginPopup({ setShowLogin, initialState }: LoginPopupProps) {
  const { url, setToken, setRefreshToken } = useContext(UserContext)!;
  const [state, setState] = useState<"Login" | "Sign Up">(initialState);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (showForgotPassword) {
      handleForgotPasswordSubmit(e);
    } else if (state === "Sign Up" && !isChecked) {
      setErrorMessage("Por favor, aceite os Termos e Condições.");
    } else {
      state === "Login" ? login() : signup();
    }
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

      const responseData: ResponseData = await response.json();
      console.log(responseData);

      if (responseData.success && responseData.accessToken && responseData.refreshToken) {
        setToken(responseData.accessToken);
        setRefreshToken(responseData.refreshToken);
        localStorage.setItem("token", responseData.accessToken);
        localStorage.setItem("refreshToken", responseData.refreshToken);  

        setShowLogin(false);
        document.body.style.overflow = 'auto';
        navigate("/");
      } else {
        setErrorMessage(responseData.error || "Login failed.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login. Please try again.");
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

      const responseData: ResponseData = await response.json();

      if (responseData.success) {
        setShowNotification(true);
      } else {
        setErrorMessage(responseData.error || "Signup failed.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setErrorMessage("An error occurred during signup. Please try again.");
    }
  };

  const handleForgotPasswordSubmit = (e: FormEvent) => {
    // You can implement the forgot password logic here
    e.preventDefault();
    console.log("Forgot password submission triggered");
    setErrorMessage("A password reset feature will be added soon.");
  };

  return (
    <div className="px-6 absolute h-full w-full bg-black/40 backdrop-blur-md z-50 flex items-center justify-center">
      <form className="bg-white w-[366px] p-7 rounded-lg shadow-md" onSubmit={handleFormSubmit}>
        <div className="flex justify-between items-center mb-4">
  
          <h4 className="text-2xl font-bold">
            { showForgotPassword ? "Recuperar Password" : state === "Login" ? "Iniciar Sessão" : "Registar" }
          </h4>
          <FaXmark 
            onClick={() => { 
              setShowLogin(false); 
              document.body.style.overflow = 'auto'; // Restore scrolling on close
            }} 
            className="text-xl text-gray-600 cursor-pointer hover:text-red-500 transition-all"
          />
        </div>
    
        <div className="flex flex-col gap-4 mb-6">

          {state === "Sign Up" && !showForgotPassword && (
            <input 
              type="text" 
              autoComplete="username"
              name="username"
              value={formData.username}
              onChange={changeHandler}          
              placeholder="Nome" 
              required 
              className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-secondary" 
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
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-secondary" 
          />

          {!showForgotPassword && (
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              autoComplete="current-password"
              name="password"
              placeholder="Password" 
              value={formData.password}
              onChange={changeHandler}
              required 
              className="border border-gray-300 p-3 rounded-lg w-full outline-none focus:ring-2 focus:ring-secondary"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}  
              className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600 hover:text-gray-800 transition-all"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          )}

        </div>

        {errorMessage && (
          <p className="text-red-600 text-sm mb-4">{errorMessage}</p>
        )}

        <button 
          type="submit"
          className="w-full btn-secondary p-3 rounded-lg transition-all"
        >
          { showForgotPassword ? "Recuperar Password" : state === "Sign Up" ? "Registar" : "Iniciar Sessão"}
        </button>
        
        
        { !showForgotPassword && state === "Sign Up" ? (
          <>
            <div className="flex items-start gap-2 mt-4">
              <input 
                type="checkbox" 
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)} 
                className="mt-1"
              />
              <p className="text-sm text-black">
                Ao continuar concorda com os nossos  
                <a href="/termos-condicoes" className="text-highlight hover:underline"> Termos e Condições</a> e 
                <a href="/politica-privacidade" className="text-highlight hover:underline"> Política de Privacidade</a>
              </p>
            </div>  

            <p className="mt-4 text-center text-sm text-black">
              Já tem conta?{" "} 
              <span 
                onClick={() => { setState("Login"); setErrorMessage(null); } }
                className="cursor-pointer text-highlight hover:underline"
              >
                Iniciar Sessão
              </span>
            </p>
          </>
        ) : !showForgotPassword && (
          <>
            <p className="mt-4 text-center text-sm text-black">
              Ainda não tem conta?{" "} 
              <span 
                onClick={() => { setState("Sign Up"); setErrorMessage(null); } }
                className="cursor-pointer text-highlight hover:underline"
              >
                Registar
              </span>
            </p>

            <p className="mt-4 text-center text-sm text-black">
              Esqueceu a password?{" "} 
              <span 
                  onClick={() => { 
                    setShowForgotPassword(true); 
                    setErrorMessage(null); 
                  }}
                  className="cursor-pointer text-highlight hover:underline"
              >
                Recuperar Password
              </span>
            </p>
          </>
        )}

      </form>

      {/* Notification Section */}
      {showNotification && !showForgotPassword && (
        <NotificationModal
          h1="Obrigado pelo registo!"
          h2="Por favor verifique o seu email para ativar a sua conta."
          buttons={[
            {
              text: "Fechar",
              onClick: () => { 
                setShowNotification(false); 
                setShowLogin(false); 
                navigate("/"); 
              },
            },
          ]}
        />
      ) || ( showNotification && showForgotPassword && (
        <NotificationModal
          h1="Email enviado com sucesso"
          h2="Por favor verifique o seu email para recuperar a sua password."
          buttons={[
            {
              text: "Fechar",
              onClick: () => { 
                setShowForgotPassword(false);
                setShowNotification(false); 
                setShowLogin(false); 
                navigate("/"); 
              },
            },
          ]}
        />
      ))}
    </div>
  );
}
