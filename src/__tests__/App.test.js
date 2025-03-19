import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import App from "../App";

test("добавляет и удаляет книгу", () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Название книги"), { target: { value: "Тестовая книга" } });
  fireEvent.change(screen.getByPlaceholderText("Год издания"), { target: { value: "2023" } });
  fireEvent.change(screen.getByPlaceholderText("Издательство"), { target: { value: "Тест" } });
  fireEvent.change(screen.getByPlaceholderText("Автор"), { target: { value: "Автор" } });
  fireEvent.click(screen.getByText("Добавить"));
  expect(screen.getByText("Тестовая книга")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Удалить"));
  expect(screen.queryByText("Тестовая книга")).not.toBeInTheDocument();
});