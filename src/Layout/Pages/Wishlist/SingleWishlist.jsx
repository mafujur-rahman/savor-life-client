import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleWishlist = ({wishlist, onRemove}) => {
    const {_id, wishlistId, title, category, shortDescription, img } = wishlist;

    const handleRemove = (_id) =>{
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://savor-life-server-side.vercel.app/wishlist-items/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Removed!",
                                text: "Your wishlist has been removed.",
                                icon: "success"
                            });
                            onRemove(_id);
                        }
                    })
            }
        });
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
                        <Link to={`/details/${wishlistId}`} className="btn bg-[#e4bb55] text-[#0e191b] border-none mr-2">Details</Link>
                        <button onClick={() => handleRemove(_id)} className="btn bg-red-700 text-white border-none">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleWishlist.propTypes = {
    wishlist: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default SingleWishlist;
