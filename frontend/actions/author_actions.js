import * as ApiUtil from '../util/author_util';

export const REC_AUTHOR = 'REC_AUTHOR';
export const REC_ALL_AUTHORS = 'REC_ALL_AUTHORS';


const recAllAuthors = (authors) => {
    return {
        authors,
        type: REC_ALL_AUTHORS
    }
}

const recAuthor = (author) => {
    return {
        author,
        type: REC_AUTHOR
    }
}



export const fetchAllAuthors = () => dispatch => {
    return ApiUtil.fetchAllAuthors()
        .then((authors) => dispatch(recAllAuthors(authors)));
}

export const fetchAuthor = (authordId) => dispatch => {
    return ApiUtil.fetchBoard(authordId)
        .then((author) => dispatch(recAuthor(author)));
}
