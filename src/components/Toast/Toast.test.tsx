import { describe, it, expect, vi } from "vitest";
import { showToast } from "./Toast";
import { toast } from "react-toastify";

// Mock do react-toastify
vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
    warning: vi.fn(),
  },
}));

describe("showToast", () => {
  it("should call toast.success with correct message", () => {
    showToast({
      type: "success",
      message: "Sucesso!",
    });

    expect(toast.success).toHaveBeenCalledWith("Sucesso!");
  });

  it("should call toast.error with correct message", () => {
    showToast({
      type: "error",
      message: "Erro!",
    });

    expect(toast.error).toHaveBeenCalledWith("Erro!");
  });

  it("should call toast.info with correct message", () => {
    showToast({
      type: "info",
      message: "Info!",
    });

    expect(toast.info).toHaveBeenCalledWith("Info!");
  });

  it("should call toast.warning with correct message", () => {
    showToast({
      type: "warning",
      message: "Aviso!",
    });

    expect(toast.warning).toHaveBeenCalledWith("Aviso!");
  });
});
