// npm install react-redux@8.1.2 @reduxjs/toolkit@1.9.5
import BookList from './BookList/BookList';
import BookForm from './BookForm/BookForm';
import Filter from './Filter/Filter';

import './App.css';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Book Library App</h1>
            </header>
            <main className="app-main">
                <div className="app-left-column">
                    <BookForm />
                </div>
                <div className="app-right-column">
                    <Filter />
                    <BookList />
                </div>
            </main>
        </div>
    );
}

export default App;
