import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleWishlist = ({wishlist}) => {

    const { wishlistId, title, category, shortDescription, img } = wishlist;

    return (
        <div className="max-w-xl mx-auto">
            <div className="bg-[#1C4C5C] text-white mb-8 w-full shadow-xl rounded-lg overflow-hidden">
                <img src={img} className="w-full h-auto" alt={title} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="mb-2">{shortDescription}</p>
                    <p className="mb-2">Category: {category}</p>
                    <div className="flex justify-end">
                        <Link to={`/details/${wishlistId}`} className="btn bg-[#e4bb55] text-[#0e191b] border-none mr-2">Details</Link>
                        <button  className="btn bg-red-700 text-white border-none">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
SingleWishlist.propTypes = {
    wishlist: PropTypes.object.isRequired
}
export default SingleWishlist;