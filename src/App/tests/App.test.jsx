import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import App from "../App.jsx";

describe("Class listings view", () => {
  test("displays the class listings title", () => {
    render(<App />);
    expect(screen.getByText("Classes in your area")).toBeInTheDocument();
  });

  // test("displays the first piece of data", () => {
  //   render(<App />);
  //   expect(screen.getByText("Alice Jones")).toBeInTheDocument();
  // });
});
