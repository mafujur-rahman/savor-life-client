import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllBlog = ({blog}) => {
    const { _id, title, category, shortDescription, img, } = blog;

    const handleWishlist =() =>{

        const newWishlist = {_id,  img, title, shortDescription, category}
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
        <div>
            <div className="card card-side bg-[#1C4C5C] text-white mb-8 w-full shadow-xl mx-auto container">
                <figure><img src={img} className="w-40 h-40 pl-8 " /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{shortDescription}</p>
                    <p>Category: {category}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn bg-[#e4bb55] text-[#0e191b] border-none">Details</button></Link>
                    <button onClick={() =>handleWishlist(_id)} className="btn bg-[#e4bb55] text-[#0e191b] border-none">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
AllBlog.propTypes = {
    blog: PropTypes.object
}
export default AllBlog;