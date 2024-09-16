import "@testing-library/jest-dom";
import GreeterComponent from "./greeter-component";
import { render, fireEvent } from "@testing-library/react";

test("GreeterComponent - should display greet message", () => {
  // Arrange
  const { getByText } = render(<GreeterComponent />);

  // Act
  const btn = getByText("Greet");
  fireEvent.click(btn);

  // Assert
  const div = getByText("Hi there!");
  expect(div).toBeInTheDocument();
});
