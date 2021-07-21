import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("changes the tab when clicked", async () => {
  render(<App />);

  expect(screen.getByText("Tab 0 selected")).toBeInTheDocument();

  const acceptsTab = screen.getAllByText(/accepts marketing/i)[0];
  expect(acceptsTab).toBeInTheDocument();

  fireEvent.click(acceptsTab);

  expect(screen.getByText("Tab 1 selected")).toBeInTheDocument();
});
