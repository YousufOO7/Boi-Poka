import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = props => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text-6xl font-bold text-center">Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5'>
                {
                    books.map(book => <Book key={books.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

Books.propTypes = {
    props: PropTypes
};

export default Books;