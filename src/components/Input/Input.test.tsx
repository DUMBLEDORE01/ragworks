// src/components/Input/Input.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { Input } from "./index";

describe("Input Component", () => {
  it("renders with placeholder text", () => {
    render(<Input placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("accepts user input", () => {
    render(<Input placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text") as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(inputElement.value).toBe("Hello");
  });

  it("calls onChange handler when typing", () => {
    const handleChange = vi.fn();
    render(<Input placeholder="Type here" onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText("Type here");

    fireEvent.change(inputElement, { target: { value: "Test" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
