import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  const { debug } = render(
    <MemoryRouter initialEntries={["/", "/about"]}>
      <App />
    </MemoryRouter>
  );
  fireEvent.click(screen.getByText(/contact/i));
  // expect(screen.getByText("")).toBeInTheDocument();
  // const linkElement = screen.getByText(/start app/i);
  expect(screen.getByText(/contact header/i)).toBeInTheDocument();
  debug();
});
