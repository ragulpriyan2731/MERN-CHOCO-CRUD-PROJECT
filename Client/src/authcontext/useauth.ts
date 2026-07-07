// reads the context

import { useContext } from "react";
import { AuthContext} from "./authcontext";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}

// AuthContext.ts → Defines what authentication data and functions are available.
// AuthProvider.tsx → Provides the actual values (token, login, logout, isLoggedIn).
// useAuth.ts → Lets any component access those values with useAuth().