const { addBooksHandler } = require("./handler/addBooks.js");
const { getAllBooksHandler } = require("./handler/allBooks.js");
const { deleteBookByIdHandler } = require("./handler/deleteBooks.js");
const { editBookByIdHandler } = require("./handler/editBooks.js");
const { getBookByIdHandler } = require("./handler/idBooks.js");

const routes = [
    {
       method: 'POST',
       path: '/books',
       handler: addBooksHandler,
    },

    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },

    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,
    },

    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler,
    },

    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,
    }
]

module.exports= routes;