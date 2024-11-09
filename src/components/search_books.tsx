// src/components/Search.tsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/actions/actions_books';
import '../App.css';

const Search: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchBooks(title));
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
