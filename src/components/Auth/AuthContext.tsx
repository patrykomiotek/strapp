import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  isLogged: boolean;
  toggle: () => void;
  logout: () => void;
  login: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context) {
    return context;
  }
  throw new Error(
    "Oh no! Component should be placed inside AuthContextProvider"
  );
};

export const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const toggle = () => setIsLogged((value) => !value);
  const logout = () => setIsLogged(false);
  const login = () => setIsLogged(true);

  return { isLogged, toggle, login, logout };
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// AuthContext.Consumer <--
// AuthContext.Provider
// AuthContext.displayName

// const User = () => {
//   const context = useContext(AuthContext);
//   context; //
// };

{
  /* <AuthContext.Provider value={}>
  <User />
</AuthContext.Provider> */
}

{
  /* <User /> */
}
