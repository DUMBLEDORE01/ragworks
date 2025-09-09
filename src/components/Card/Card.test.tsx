// src/components/Card/Card.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { Card, CardHeader, CardBody, CardFooter, CardImage } from "./index";
import { Button } from "../Button";

describe("Card Component", () => {
  it("renders Card with children", () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("renders CardImage correctly", () => {
    render(<CardImage src="https://picsum.photos/200/100" alt="Test Image" />);

    const imgElement = screen.getByAltText("Test Image") as HTMLImageElement;
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toContain("picsum.photos/200/100");
  });

  it("applies custom className to Card and subcomponents", () => {
    render(
      <Card className="custom-card">
        <CardHeader className="custom-header">Header</CardHeader>
        <CardBody className="custom-body">Body</CardBody>
        <CardFooter className="custom-footer">Footer</CardFooter>
      </Card>
    );

    const card = screen.getByText("Header").closest("div");
    expect(card).toHaveClass("custom-card");

    expect(screen.getByText("Header")).toHaveClass("custom-header");
    expect(screen.getByText("Body")).toHaveClass("custom-body");
    expect(screen.getByText("Footer")).toHaveClass("custom-footer");
  });

  it("renders buttons inside CardFooter", () => {
    render(
      <Card>
        <CardFooter>
          <Button>Click Me</Button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("renders complex card with image, header, body, and footer", () => {
    render(
      <Card>
        <CardImage src="https://picsum.photos/300/150" alt="Complex" />
        <CardHeader>Title</CardHeader>
        <CardBody>Description</CardBody>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByAltText("Complex")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });
});
