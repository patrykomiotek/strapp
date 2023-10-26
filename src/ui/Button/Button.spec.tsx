import React from "react";
import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button component", () => {
  it.skip("should fire handler", async () => {
    // import { axe } from 'jest-axe';
    // const { container } = render(<Button>Click me</Button>);
    // const result = await axe(container);
    // expect(result).toHaveNoViolations();
    // fireEvent.click(screen.getByRole("button"));
    // expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("should fire handler", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("should have label", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });
  it("should render correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
