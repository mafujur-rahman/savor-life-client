import axios from "axios";
import SingleWishlist from "./SingleWishlist";
import { useEffect, useState } from "react";



const Wishlist = () => {
    const [wishlists, setWishlists] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/wishlist-items');
                setWishlists(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    // Filter user's wishlist
    const userWishlists = wishlists.filter(wishlist => wishlist.email == wishlists.email);

    return (
        <div className="bg-[#ddd0b0] p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-fit mx-auto">
                {
                    userWishlists.map(wishlist => <SingleWishlist key={wishlist._id} wishlist={wishlist}></SingleWishlist>)
                }
            </div>
        </div>
    );
};

export default Wishlist;