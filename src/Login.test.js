import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login.js";

test("renders the login header"),
  () => {
    render(<Login />);
    const login = screen.screen.getByText(/login to water your plants/i);

    expect(login).toBeTruthy();
  };
