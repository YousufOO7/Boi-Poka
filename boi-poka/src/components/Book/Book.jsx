import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, category, tags, rating } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div>
            <div className="card card-compact bg-base-100 w-96 border-2 p-6">
                <figure className='bg-slate-200 p-6'>
                    <img
                        className='h-[166px]'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="my-3">
                    <div className='flex  gap-10'>
                        {
                            tags.map(tag => <button className="btn btn-xs text-[#23BE0A]">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title my-3">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed my-2"></div>
                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold'>{category}</p>
                        <div className='flex gap-4'>
                            <button className="font-normal">{rating}</button>
                            <p>⭐</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;