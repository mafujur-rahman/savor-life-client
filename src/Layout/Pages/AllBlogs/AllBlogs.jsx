import { useContext, useEffect, useState } from "react";
import Select from "react-dropdown-select";
import AllBlog from "./AllBlog";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthProvider";

const AllBlogs = () => {
    const [inputCategory, setInputCategory] = useState(null);
    const [searchTitle, setSearchTitle] = useState("");
    const [blogs, setBlogs] = useState([]);
    const {user} = useContext(AuthContext)
    const options = [
        { value: 'travel', label: 'Travel' },
        { value: 'food', label: 'Food' },
        { value: 'sports', label: 'Sports' },
    ];

    // Fetch all blogs from the API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://savor-life-server-side.vercel.app/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    // Filter blogs based on selected category
    const filteredBlogs = inputCategory ? blogs.filter(blog => blog.category === inputCategory) : blogs;

    // Filter blogs based on search title
    const searchedBlogs = searchTitle ? filteredBlogs.filter(blog => blog.title.toLowerCase().includes(searchTitle.toLowerCase())) : filteredBlogs;

    // Filter user's blogs
    const userBlogs = searchedBlogs.filter(blog => blog.email === user.email);

    const handleCategoryChange = (values) => {
        const selectedValue = values.length > 0 ? values[0].value : null;
        setInputCategory(selectedValue);
    };

    const handleSearchChange = (event) => {
        setSearchTitle(event.target.value);
    };

    return (
        <div className="bg-[#ddd0b0] p-16">
            <h2 className="text-3xl md:text-4xl font-bold md:font-extrabold mb-8 text-center">Your Blogs</h2>
            <div className=" mb-4 md:flex justify-center gap-5">
                <div className="form-control w-fit bg-[#ddd0b0] text-center mb-4">
                    <Select
                        className='input bg-gray-100'
                        options={options}
                        value={inputCategory ? [{ value: inputCategory, label: inputCategory }] : null}
                        onChange={handleCategoryChange}
                        placeholder="Select Category"
                    />
                </div>
                <div className="form-control w-fit bg-[#ddd0b0] text-center">
                    <input
                        className="input bg-gray-100"
                        type="text"
                        value={searchTitle}
                        onChange={handleSearchChange}
                        placeholder="Search by Title"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-fit mx-auto">
                {
                    userBlogs.map(blog => <AllBlog key={blog._id} blog={blog}></AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;
