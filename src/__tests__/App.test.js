import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("показывает начальное значение счетчика", () => {
  render(<App />);
  const counterText = screen.getByText(/Schetchic: 0/i);
  expect(counterText).toBeInTheDocument();
});

test("увеличивает значение при клике на +++", () => {
  render(<App />);
  const buttonPlus = screen.getByText("+++");
  fireEvent.click(buttonPlus);
  expect(screen.getByText(/Schetchic: 1/i)).toBeInTheDocument();
});

test("уменьшает значение при клике на ---", () => {
  render(<App />);
  const buttonMinus = screen.getByText("---");
  fireEvent.click(buttonMinus);
  expect(screen.getByText(/Schetchic: -1/i)).toBeInTheDocument();
});
