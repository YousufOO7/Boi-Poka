import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getToLocalStore, getToWishStoredLocal } from '../../Utility/AddToLocal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Book/Book';

const BookList = props => {
    const allBooks = useLoaderData();
    const [readBook, setReadBook] = useState([]);
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedReadList = getToLocalStore();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadBook(readBookList);
    }, [])

    useEffect( () => {
        const storedWishList = getToWishStoredLocal();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishToBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));
        setWishList(wishToBookList);
    },[])
    return (
        <div>
            <h2 className="text-4xl">this is book list: {readBook.length}</h2>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish to read</Tab>
                </TabList>

                <TabPanel>
                    {
                        readBook.map(book => <Book book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishList.map(book => <Book book={book}></Book>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

BookList.propTypes = {
    props: PropTypes
};

export default BookList;