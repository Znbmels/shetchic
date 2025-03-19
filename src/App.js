import React, { useState } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';

const App = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };


  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
    setEditingBook(null);
  };

  return (
    <div>
      <h1>Каталог книг</h1>
      <BookList books={books} onDelete={deleteBook} onEdit={setEditingBook} />
      <AddBookForm
        onAdd={addBook}
        onUpdate={updateBook}
        editingBook={editingBook}
      />
    </div>
  );
};

export default App;
