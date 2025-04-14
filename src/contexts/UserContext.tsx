import { createContext, useState, useEffect, ReactNode } from 'react';

interface UserContextType {
  url: string;
  token: string;
  setToken: (token: string) => void;
  refreshToken: string;
  setRefreshToken: (token: string) => void;
  logout: () => void;
  isTokenExpired: () => boolean;
  refreshAccessToken: () => Promise<string | null>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextProviderProps {
  children: ReactNode;
}

export default function UserContextProvider({ children }: UserContextProviderProps) {
  const url = import.meta.env.VITE_DATABASE_URL as string;
  const [token, setToken] = useState<string>(localStorage.getItem("token") || '');
  const [refreshToken, setRefreshToken] = useState<string>(localStorage.getItem("refreshToken") || '');

  const parseJwt = (token: string): { exp: number } | null => {
    try {
															
      const [, payload] = token.split('.');
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const decodedPayload = JSON.parse(atob(base64));

      return decodedPayload;
    } catch {
      return null;
    }
  };

  const isTokenExpired = (): boolean => {
													 
    if (!token) return true;

    const decoded = parseJwt(token);

    if (!decoded) return true;

    return decoded.exp < Date.now() / 1000;
  };

  const refreshAccessToken = async (): Promise<string | null> => {
    const storedRefreshToken = localStorage.getItem("refreshToken");
  
    if (!storedRefreshToken) {
      logout();
      return null;
    }

    try {
      const response = await fetch(`${url}/refresh-token`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ refreshToken: storedRefreshToken })
      });

      const data = await response.json();
  
      if (data.success && data.newToken) {
        setToken(data.newToken);
        localStorage.setItem("token", data.newToken);
        return data.newToken;
      } else {
        logout();
        return null;
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
      logout();
      return null;
    }
  };

  const logout = (): void => {
    setToken('');
    setRefreshToken('');
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    const checkToken = async () => {
      if (!token || isTokenExpired()) {
        await refreshAccessToken();
      }
    };
  
    checkToken();
  }, [token]);
  
  
  return (
    <UserContext.Provider 
      value={{ 
        url,
        token,
        setToken,
        refreshToken,
        setRefreshToken,
        logout,
        isTokenExpired,
        refreshAccessToken
      }}
	 >
      {children}
    </UserContext.Provider>
  );
}
