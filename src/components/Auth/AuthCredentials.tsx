import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Button } from "../../ui";

export const AuthCredentials = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <h3>Auth credentials</h3>
      <p>Is user logged: {context.isLogged ? "YES" : "NO"}</p>
      <Button onClick={() => context.setIsLogged((value) => !value)}>
        🔄 Toggle
      </Button>
    </div>
  );
};
