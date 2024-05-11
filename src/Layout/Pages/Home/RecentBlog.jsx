
import PropTypes from 'prop-types';

const RecentBlog = ({ data }) => {
    const {  img, title, shortDescription } = data;
    return (
        <div className="card w-full md:w-auto lg:w-96 bg-[#fff5dc] rounded-2xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-gray-600'>{shortDescription}</p>
                <div className="card-actions justify-start">
                    <button className="btn bg-[#e4bb55] text-[#0e191b] border-none">Details</button>
                    <button className="btn bg-[#e4bb55] text-[#0e191b] border-none">Wishlist</button>
                </div>
            </div>
        </div>
    );
};
RecentBlog.propTypes = {
    data: PropTypes.object
}
export default RecentBlog;