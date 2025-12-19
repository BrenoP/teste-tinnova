import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Title from "./Title";

describe("Title component", () => {
  it("should render children text", () => {
    render(<Title>Lista de usuários</Title>);

    expect(
      screen.getByText("Lista de usuários")
    ).toBeInTheDocument();
  });
});
