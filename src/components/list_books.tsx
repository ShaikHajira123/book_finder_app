// src/components/BookList.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { BookState, Book } from '../redux/reducers/reducers_books';

const BookList: React.FC = () => {
  const { books, loading, error } = useSelector((state: BookState) => state);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {books.map((book: Book) => (
        <div
          key={book.key}
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            margin: '10px',
          }}
        >
          <h2>{book.title}</h2>
          {book.author_name && <p>Author: {book.author_name.join(', ')}</p>}
          {book.cover_i && (
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              style={{ width: '100px' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BookList;
