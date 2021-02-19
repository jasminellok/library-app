import { REC_BOOK, REC_ALL_BOOKS } from '../actions/book_actions';

const booksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case REC_BOOK:
            return Object.assign({}, state, { [action.book.id]: action.book })
        case REC_ALL_BOOKS:
            return action.books;
        default:
            return state;
    }
};

export default booksReducer;