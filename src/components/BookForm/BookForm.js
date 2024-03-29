import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/slices/booksSlice';
import createBookWithId from '../../utils/createBookWithId';
import bookDate from '../../data/books.json';
import './BookForm.css';

const BookForm = () => {
    const [formDate, setFormDate] = useState({
        title: '',
        author: '',
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        // чтобы браузер не выполнял действие по умолчанию
        // (не перенаправлял на новую страницу)
        e.preventDefault();

        if (formDate.title && formDate.author) {
            let title = formDate.title;
            let author = formDate.author;
            const book = createBookWithId({ title, author });
            dispatch(addBook(book));
            // очищение полей ввода данных после отправки данных
            setFormDate({ ...formDate, title: '', author: '' });
        }
    };
    // Добавление случайно выбранной книги из файла
    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * bookDate.length);
        const randomBook = bookDate[randomIndex];
        const randomBookWithId = createBookWithId(randomBook);
        dispatch(addBook(randomBookWithId));
    };
    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={formDate.title}
                        onChange={(e) =>
                            setFormDate({ ...formDate, title: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        value={formDate.author}
                        onChange={(e) =>
                            setFormDate({ ...formDate, author: e.target.value })
                        }
                    />
                </div>
                <button type="submit">Add Book</button>
                <button type="button" onClick={() => handleAddRandomBook()}>
                    Add Random
                </button>
            </form>
        </div>
    );
};
export default BookForm;
