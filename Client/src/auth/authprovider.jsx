import { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  username: string;
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  username: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (name: string) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};