import { combineReducers } from 'redux';

import bookList from '../data/books';

const initialState = bookList;
console.log(initialState);

const ActiveBook = (state = null, action) => {
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload
  }
  return state;

}




const rootReducer = combineReducers({
  books: initialState,
  activeBook: ActiveBook,
});

export default rootReducer;
