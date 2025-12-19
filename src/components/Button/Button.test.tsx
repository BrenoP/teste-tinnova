import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should render text passing as children", () => {
    render(<Button disabled={false}>Salvar</Button>);

    expect(screen.getByText("Salvar")).toBeInTheDocument();
  });

  it("should be disabled when prop disabled is true", () => {
    render(<Button disabled={true}>Salvar</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("should be enabled when prop disabled is false", () => {
    render(<Button disabled={false}>Salvar</Button>);

    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();
  });
});
