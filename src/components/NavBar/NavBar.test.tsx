import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar component", () => {
  it("should render navigation links", () => {
    render(
      <MemoryRouter initialEntries={["/list"]}>
        <NavBar />
      </MemoryRouter>
    );

    expect(screen.getByText("Lista")).toBeInTheDocument();
    expect(screen.getByText("Registros")).toBeInTheDocument();
  });

  it("should apply active class to list when route is /list", () => {
    render(
      <MemoryRouter initialEntries={["/list"]}>
        <NavBar />
      </MemoryRouter>
    );

    const listaLink = screen.getByText("Lista");
    const registrosLink = screen.getByText("Registros");

    expect(listaLink).toHaveClass("active");
    expect(registrosLink).not.toHaveClass("active");
  });

  it("should apply active class to register when route is /register", () => {
    render(
      <MemoryRouter initialEntries={["/register"]}>
        <NavBar />
      </MemoryRouter>
    );

    const listaLink = screen.getByText("Lista");
    const registrosLink = screen.getByText("Registros");

    expect(registrosLink).toHaveClass("active");
    expect(listaLink).not.toHaveClass("active");
  });
});
