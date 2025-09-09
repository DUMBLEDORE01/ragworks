// src/components/Modal/Modal.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi, afterEach } from "vitest";
import { Modal } from "./index";

describe("Modal Component", () => {
  const onCloseMock = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={onCloseMock}>
        <p>Modal Content</p>
      </Modal>
    );
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("renders when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <p>Modal Content</p>
      </Modal>
    );
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} title="Test Modal">
        <p>Modal Content</p>
      </Modal>
    );
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} title="Close Test">
        <p>Modal Content</p>
      </Modal>
    );
    const closeButton = screen.getByText("×");
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("renders children properly", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div data-testid="child-div">Child Content</div>
      </Modal>
    );
    expect(screen.getByTestId("child-div")).toBeInTheDocument();
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("applies size variant correctly", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} size="lg">
        <p>Modal Content</p>
      </Modal>
    );
    const modalElement = screen.getByText("Modal Content").closest("div");
    expect(modalElement).toHaveClass("max-w-lg");
  });
});
