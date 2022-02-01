import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without errors", () => {
  render(<App />);
});

test("renders the login header"),
  () => {
    const { getByText } = render(<App />);
    const header = getByText(/login to water your plants/i);
  };
