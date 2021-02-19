import {combineReducers} from 'redux';
import authorsReducer from './authors_reducers';
import booksReducer from './books_reducer';

const entitiesReducer = combineReducers({
    authors: authorsReducer,
    books: booksReducer 
});

export default entitiesReducer;