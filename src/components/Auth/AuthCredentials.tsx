import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <h3>Auth credentials</h3>
      <p>Is user logged: {context.isLogged ? "YES" : "NO"}</p>
    </div>
  );
};
