import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AuthCredentials } from "./AuthCredentials";
import { AuthProvider } from "./AuthContext";

describe("AuthCredentials component", () => {
  it("should toggle values", () => {
    const { debug } = render(
      <AuthProvider>
        <AuthCredentials />
      </AuthProvider>
    );
    expect(screen.getByText(/is user logged: no/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/is user logged: yes/i)).toBeInTheDocument();
  });
});
