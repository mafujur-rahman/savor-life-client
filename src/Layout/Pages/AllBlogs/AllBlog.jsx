import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllBlog = ({ blog }) => {
    const { _id, title, category, shortDescription, img } = blog;

    const handleWishlist = () => {
        const newWishlist = { _id, img, title, shortDescription, category };
        // send data to the server
        fetch('http://localhost:5000/wishlist-items', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newWishlist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="max-w-xl mx-auto">
            <div className="bg-[#1C4C5C] text-white mb-8 w-full shadow-xl rounded-lg overflow-hidden">
                <img src={img} className="w-full h-auto" alt={title} />
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="mb-2">{shortDescription}</p>
                    <p className="mb-2">Category: {category}</p>
                    <div className="flex justify-end">
                        <Link to={`/details/${_id}`} className="btn bg-[#e4bb55] text-[#0e191b] border-none mr-2">Details</Link>
                        <button onClick={handleWishlist} className="btn bg-[#e4bb55] text-[#0e191b] border-none">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllBlog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default AllBlog;
