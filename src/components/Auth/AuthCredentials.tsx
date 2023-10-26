import React from "react";
import { useAuthContext } from "./AuthContext";
import { Button } from "../../ui";

export const AuthCredentials = () => {
  const context = useAuthContext();

  return (
    <div>
      <h3>Auth credentials</h3>
      <p>Is user logged: {context.isLogged ? "YES" : "NO"}</p>
      <Button onClick={() => context.toggle()}>🔄 Toggle</Button>
    </div>
  );
};
