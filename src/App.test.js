import { render, screen } from "@testing-library/react";
import App from "./App";

test("water your plants", () => {
  render(<App />);
  const headerElement = screen.getByText(/water your plants home/i);
  expect(headerElement).toBeTruthy();
});
