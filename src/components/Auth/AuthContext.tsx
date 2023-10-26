import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
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

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
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
