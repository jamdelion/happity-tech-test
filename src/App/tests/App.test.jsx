import { render, screen, within } from "@testing-library/react";
import React from "react";
import { describe, expect, test, vi } from "vitest";
import App from "../App.jsx";

describe("Class listings view", () => {
  test("displays the class listings title", () => {
    render(<App />);
    expect(screen.getByText("Classes in your area")).toBeInTheDocument();
  });

  test("displays the first piece of data", () => {
    render(<App />);
    expect(screen.getByText("Baby Sensory Play")).toBeInTheDocument();
    expect(screen.getByText("Little Learners")).toBeInTheDocument();
    expect(screen.getByText("Toddler Time Center")).toBeInTheDocument();
    expect(
      screen.getByText("15 Baby Lane, Anytown, AB1 2CD")
    ).toBeInTheDocument();
  });

  test("calculates the next date of the class based on today's date", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-07-11").getTime());
    render(<App />);
    const firstClassListing = screen.getByTestId("Baby Sensory Play");
    expect(
      within(firstClassListing).getByText("Next on: 2025-07-14")
    ).toBeInTheDocument();
    vi.useRealTimers();
  });

  test.todo("can filter by class category", () => {
    const selectInput = screen.getByLabelText("Filter by category:");
    expect(selectInput).toHaveValue("All");
    // user chooses option
    // expect UI to render only classes with that category option
  });
});
