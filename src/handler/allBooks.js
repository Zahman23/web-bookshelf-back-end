const books = require ('../bookshelf');

const getAllBooksHandler = (request, h) => {
    const {name, reading, finished} = request.query;
    let filterBooks = books;

    if(name !== undefined) {
        filterBooks = filterBooks.filter(book => book.name.toLowerCase().include(name.toLowerCase()));
    }
    if(reading !== undefined){
        filterBooks = filterBooks.filter(book => book.reading === !!Number(reading));
    }
    if(finished !== undefined){
        filterBooks = filterBooks.filter(book => book.finished === !!Number(finished));
    }

    const response = h.response({
        status: 'success',
        data: {
            books: filterBooks.map((book) => ({
                id: book.id,
                name: book.name,
                publisher: book.publisher,
            })),
        },
    });
    response.code(200);
    return response
}

module.exports= {getAllBooksHandler}