// src/App.tsx

import React from 'react';
import Search from './components/search_books';
import BookList from './components/list_books';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Book Finder</h1>
      <Search />
      <BookList />
    </div>
  );
};

export default App;
