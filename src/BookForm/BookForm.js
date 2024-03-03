import { useState } from 'react';

import './BookForm.css';

const BookForm = () => {
    const [formDate, setFormDate] = useState({
        title: '',
        author: '',
    });

    const handleSubmit = (e) => {
        // чтобы браузер не выполнял действие по умолчанию
        // (не перенаправлял на новую страницу)
        e.preventDefault();

        if (formDate.title && formDate.author) {
            console.log(formDate.title, formDate.author);
            // очищение полей ввода данных после отправки данных
            setFormDate({ ...formDate, title: '', author: '' });
        }
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
            </form>
        </div>
    );
};
export default BookForm;
