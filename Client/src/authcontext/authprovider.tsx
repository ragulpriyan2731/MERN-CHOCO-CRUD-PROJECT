// stores token & implement ligin and logout

import {useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./authcontext";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{token,isLoggedIn: token !==null,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
}

