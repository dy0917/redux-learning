// Set up your root reducer here...
import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers'
import cart from './cartReducers';
import {loginReducer} from './loginReducers';

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  cart,
  token: loginReducer,
});
