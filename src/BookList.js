import React from 'react';

const BookList = ({ books, onDelete, onEdit }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> ({book.year}) - {book.publisher}, {book.author}
          <button onClick={() => onEdit(book)}>Редактировать</button>
          <button onClick={() => onDelete(book.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;