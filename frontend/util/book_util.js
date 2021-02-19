export const fetchBook = (id) => {
    return $.ajax({
        method: 'GET',
        url: `books/${id}`
    })
};

export const fetchAllBooks = () => {
    return $.ajax({
        method: 'GET',
        url: 'books'
    })
};
