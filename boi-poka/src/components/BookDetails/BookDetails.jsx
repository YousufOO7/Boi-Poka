import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToWishListLocal } from '../../Utility/AddToLocal';

const BookDetails = props => {
    const { bookId } = useParams();
    const data = useLoaderData();

    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, bookName, author, image, category, tags, rating, review, totalPages, publisher, yearOfPublishing } = book;



    const markRead = id => {
        addToStoredReadList(id);
    }

    const wishToAdd = id => {
        addToWishListLocal(id);
    }

    return (
        <div>
            <div className="hero  min-h-screen mb-5">
                <div className="hero-content flex-col lg:flex-row px-10">
                    <img
                        src={image}
                        className="max-w-md bg-base-200 rounded-2xl mr-10 h-[600px] p-10" />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6">By: {author}</p>
                        <div className="border-t-2 border my-2"></div>
                        <p>Fiction {category}</p>
                        <div className="border-t-2 border my-2"></div>
                        <p className='my-3'><b>Review:</b> {review}</p>
                        <div className='flex  gap-10'>
                            {
                                tags.map(tag => <button className="btn btn-xs text-[#23BE0A]">{tag}</button>)
                            }
                        </div>
                        <div className="border-t-2 border my-2"></div>
                        <p>Number of page: <b>{totalPages}</b></p>
                        <p>Publisher: <b>{publisher}</b></p>
                        <p>Year of publishing: <b>{yearOfPublishing}</b></p>
                        <p>Rating: <b>{rating}</b></p>  
                        <div className='flex gap-5 mt-5'>
                        <button 
                        onClick={() => markRead(bookId)}
                        className="btn btn-outline btn-accent">Read</button>    
                        <button 
                        onClick={() => wishToAdd(id)}
                        className="btn bg-[#23BE0A] text-white">Wish To List</button>    
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

BookDetails.propTypes = {
    props: PropTypes
};

export default BookDetails;