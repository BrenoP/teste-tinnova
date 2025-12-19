import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("deve renderizar o texto passado como children", () => {
    render(<Button disabled={false}>Salvar</Button>);

    expect(screen.getByText("Salvar")).toBeInTheDocument();
  });

  it("deve estar desabilitado quando a prop disabled for true", () => {
    render(<Button disabled={true}>Salvar</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("deve estar habilitado quando a prop disabled for false", () => {
    render(<Button disabled={false}>Salvar</Button>);

    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();
  });
});
