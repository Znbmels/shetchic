import React, { useState, useEffect } from 'react';

const AddBookForm = ({ onAdd, onUpdate, editingBook }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setYear(editingBook.year);
      setPublisher(editingBook.publisher);
      setAuthor(editingBook.author);
    } else {
      setTitle('');
      setYear('');
      setPublisher('');
      setAuthor('');
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, year, publisher, author };
    if (editingBook) {
      onUpdate({ ...book, id: editingBook.id });
    } else {
      onAdd(book);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название книги"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Год издания"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Издательство"
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Автор"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">{editingBook ? 'Обновить' : 'Добавить'}</button>
    </form>
  );
};

export default AddBookForm;