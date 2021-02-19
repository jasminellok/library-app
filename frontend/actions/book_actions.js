import * as Util from '../util/book_util';

export const REC_BOOK = 'REC_BOOK';
export const REC_ALL_BOOKS = 'REC_ALL_BOOKS';


const recAllBooks = (books) => {
    return {
        books,
        type: REC_ALL_BOOKS
    }
}

const recBook = (book) => {
    return {
        book,
        type: REC_BOOK
    }
}



export const fetchAllBooks = () => dispatch => {
    return Util.fetchAllBooks()
        .then((books) => dispatch(recAllBooks(books)));
}

export const fetchBook = (bookdId) => dispatch => {
    return Util.fetchBook(bookdId)
        .then((book) => dispatch(recBook(book)));
}
