import axios from "axios";
import { useEffect, useState } from "react";
import SingleWishlist from "./SingleWishlist";

const Wishlist = () => {
    const [wishlists, setWishlists] = useState([]);

    useEffect(() => {
        const fetchWishlists = async () => {
            try {
                const response = await axios.get('http://localhost:5000/wishlist-items');
                setWishlists(response.data);
            } catch (error) {
                console.error('Error fetching wishlists:', error);
            }
        };

        fetchWishlists();
    }, []);

    // Function to remove wishlist item from state
    const removeWishlistItem = (idToRemove) => {
        setWishlists(wishlists.filter(item => item._id !== idToRemove));
    };

    return (
        <div className="bg-[#ddd0b0] p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-fit mx-auto">
                {wishlists.map(wishlist => (
                    <SingleWishlist
                        key={wishlist._id}
                        wishlist={wishlist}
                        onRemove={removeWishlistItem} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
