// import { act } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useAuth } from "./AuthContext";

describe("useAuth hook", () => {
  it("should toggle values", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.isLogged).toBe(false);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.isLogged).toBe(true);
  });
});
