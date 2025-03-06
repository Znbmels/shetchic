import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Добавляем этот импорт
import App from "../App"; 

test("Отображается заголовок и начальный баланс", () => {
  render(<App />);
  expect(screen.getByText(/Личный бюджет/i)).toBeInTheDocument();
  expect(screen.getByText(/Баланс: 0.00₸/i)).toBeInTheDocument();
});
