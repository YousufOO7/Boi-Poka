import PropTypes from 'prop-types';
import bannerImage from '../../assets/image/books.jpg'
const Banner = props => {
    return (
        <div className="hero bg-base-200 min-h-screen my-5">
            <div className="hero-content flex-col lg:flex-row-reverse px-20">
                <img
                    src={bannerImage}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-white mt-5">View The List</button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;