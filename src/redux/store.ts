// src/redux/store.ts

import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducer from './reducers/reducers_books.ts';

const store = createStore(
  bookReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
