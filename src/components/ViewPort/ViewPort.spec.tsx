jest.mock("../../hooks/useViewPort", () => ({
  useViewPort: jest.fn(),
}));

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ViewPort } from "./ViewPort";
import { useViewPort } from "../../hooks/useViewPort";

// TS
const mockedUseViewPort = useViewPort as jest.Mock;

describe("ViewPort component", () => {
  it("should render component with default hook values", () => {
    mockedUseViewPort.mockImplementationOnce(() => ({ x: 1024, y: 768 }));
    render(<ViewPort />);
    expect(screen.getByText(/X: 1024, Y: 768/i)).toBeInTheDocument();
  });
  it("should render component with mocked values", () => {
    mockedUseViewPort.mockImplementationOnce(() => ({ x: 10, y: 7 }));
    const { debug, rerender } = render(<ViewPort />);
    // debug();
    expect(screen.getByText(/X: 10, Y: 7/i)).toBeInTheDocument();
    mockedUseViewPort.mockImplementationOnce(() => ({ x: 22, y: 16 }));

    rerender(<ViewPort />);
    expect(screen.getByText(/X: 22, Y: 16/i)).toBeInTheDocument();
    debug();
  });
});
