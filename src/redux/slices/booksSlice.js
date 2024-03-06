import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
        },
        // можно и иначе (но кода много)
        // const index = state.findIndex(book) => book.id === action.payload)
        // if (index !== -1) {
        //     state.splice(index, 1)
        //     // splice - удаляет (1) элемент начиная с
        //     // определенного индекса
        // }
        // }
        toggleFavorite: (state, action) => {
            // return state.map((book) =>
            // book.id === action.payload
            //         ? { ...book, isFavorite: !book.isFavorite }
            //         : book
            // );
            // можно и иначе
            state.forEach((book) => {
                if (book.id === action.payload) {
                    book.isFavorite = !book.isFavorite;
                }
            });
        },
    },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
export const selectBooks = (state) => state.books;
export default booksSlice.reducer;
