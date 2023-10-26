import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({
  isLogged: true,
  setIsLogged: () => null,
});

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
