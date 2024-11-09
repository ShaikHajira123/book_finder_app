// src/redux/reducers/bookReducer.ts

import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  Book,
  BookActionTypes,
} from '../actions/actions_books';

export interface BookState {
  loading: boolean;
  books: Book[];
  error: string;
}

const initialState: BookState = {
  loading: false,
  books: [],
  error: '',
};

const bookReducer = (
  state = initialState,
  action: BookActionTypes
): BookState => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return { ...state, loading: true };
    case FETCH_BOOKS_SUCCESS:
      return { loading: false, books: action.payload, error: '' };
    case FETCH_BOOKS_FAILURE:
      return { loading: false, books: [], error: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
