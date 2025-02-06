import { render, screen, waitFor } from "@testing-library/react";
import CatGrid from "./CatGrid";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("CatGrid", () => {
  test("should display the heading 'CATS'", () => {
    // Arrange
    render(<CatGrid />);
    // Act
    const title = screen.getByText("CATS");
    // Assert
    expect(title).toBeInTheDocument();
  });

  test("should display loading spinner on load", () => {
    // Arrange
    render(<CatGrid />);

    // Act
    // Assert
    const img = screen.getByAltText("Loading Spinner");
    expect(img).toBeInTheDocument();
  });

  test("should display a checkbox for 'Light Theme:'", () => {
    render(<CatGrid />);
    const img = screen.getByText("Light Theme:");
    expect(img).toBeInTheDocument();
  });

  test("should display a button that says 'MORE CATS'", () => {
    render(<CatGrid />);
    const button = screen.getByRole("button", { name: "MORE CATS!" });
    expect(button).toBeInTheDocument();
  });

  test("should display 5 images of cats on load", async () => {
    render(<CatGrid />);

    await waitFor(
      () => {
        expect(screen.getByAltText("IMG_4")).toBeInTheDocument();
      },
      {
        timeout: 5000,
      }
    );
  });

  test("MORE CATS BUTTON should load 5 more cat images", async () => {
    render(<CatGrid />);

    const button = screen.getByRole("button", { name: "MORE CATS!" });
    await userEvent.click(button);

    await waitFor(
      () => {
        expect(screen.getByAltText("IMG_9")).toBeInTheDocument();
      },
      {
        timeout: 5000,
      }
    );
  });
});
