import React, { createContext, useContext } from "react";

type AuthContextType = {
  isLogged: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  isLogged: true,
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
