import axios from 'axios';

const url = 'http://localhost:3003/books';

export const getBooks = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`); // http://localhost:3003/books/

}

export const addBook = async (book) => {
    return await axios.post(url, book);
}

export const editBook = async (id, book) => {
    return await axios.put(`${url}/${id}`, book);
}

export const deleteBook = async (id) => {
    return await axios.delete(`${url}/${id}`);
}
