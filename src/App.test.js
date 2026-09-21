import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio app shell", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
});
