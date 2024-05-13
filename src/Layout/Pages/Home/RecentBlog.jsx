
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const RecentBlog = ({ data }) => {
    const {_id,  img, title, shortDescription, category} = data;

    const handleWishlist =() =>{

        const newWishlist = {wishlistId: _id,  img, title, shortDescription, category}
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
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Successfully add a new comment",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }

    return (
        <div className="card w-full md:w-auto lg:w-96 bg-[#fff5dc] rounded-2xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-gray-600'>{shortDescription}</p>
                <div className="card-actions justify-start">
                    <Link to={`/details/${_id}`}><button className="btn bg-[#e4bb55] text-[#0e191b] border-none">Details</button></Link>
                    <button onClick={() =>handleWishlist(_id)} className="btn bg-[#e4bb55] text-[#0e191b] border-none">Wishlist</button>
                </div>
            </div>
        </div>
    );
};
RecentBlog.propTypes = {
    data: PropTypes.object
}
export default RecentBlog;