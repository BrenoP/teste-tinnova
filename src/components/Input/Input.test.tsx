import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Input from "./Input";

describe("Input component", () => {
  it("should render input with label", () => {
    render(<Input placeholder="Nome" />);

    const input = screen.getByLabelText("Nome");
    expect(input).toBeInTheDocument();
  });

  it("should render input with correct type", () => {
    render(<Input placeholder="Senha" type="password" />);

    const input = screen.getByLabelText("Senha");
    expect(input).toHaveAttribute("type", "password");
  });

  it("should show error message when onError is true", () => {
    render(
      <Input
        placeholder="Email"
        onError
        errorMessage="Email inválido"
      />
    );

    expect(screen.getByText("Email inválido")).toBeInTheDocument();
  });
});
