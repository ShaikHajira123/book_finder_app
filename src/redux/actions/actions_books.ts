import axios from 'axios';
import { Dispatch } from 'redux';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
}

export interface FetchBooksRequestAction {
  type: typeof FETCH_BOOKS_REQUEST;
}

export interface FetchBooksSuccessAction {
  type: typeof FETCH_BOOKS_SUCCESS;
  payload: Book[];
}

export interface FetchBooksFailureAction {
  type: typeof FETCH_BOOKS_FAILURE;
  payload: string;
}

export type BookActionTypes =
  | FetchBooksRequestAction
  | FetchBooksSuccessAction
  | FetchBooksFailureAction;

export const fetchBooksRequest = (): FetchBooksRequestAction => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (books: Book[]): FetchBooksSuccessAction => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = (error: string): FetchBooksFailureAction => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const fetchBooks = (title: string) => {
  return async (dispatch: Dispatch<BookActionTypes>) => {
    dispatch(fetchBooksRequest());
    try {
      let response: any = [];
      if (title.trim()) {
        response = await axios.get(
          `https://openlibrary.org/search.json?title=${title}`
        );
      }
      dispatch(fetchBooksSuccess(response?.data?.docs ?? []));
    } catch (error) {
      dispatch(fetchBooksFailure(error.message));
    }
  };
};
