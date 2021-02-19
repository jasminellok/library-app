export const fetchAuthor = (id) => {
    return $.ajax({
        method: 'GET',
        url: `authors/${id}`
    })
};

export const fetchAllAuthors = () => {
    return $.ajax({
        method: 'GET',
        url: 'authors'
    })
};
