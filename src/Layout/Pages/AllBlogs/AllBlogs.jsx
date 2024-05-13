import { useContext, useState } from "react";
import Select from "react-dropdown-select";
import { useLoaderData } from "react-router-dom";
import AllBlog from "./AllBlog";
import { AuthContext } from "../../../Context/AuthProvider";

const AllBlogs = () => {
    const [inputCategory, setInputCategory] = useState(null);
    const blogs = useLoaderData();
    const { user } = useContext(AuthContext);
    const options = [
        { value: 1, label: 'travel' },
        { value: 2, label: 'food' },
        { value: 3, label: 'sports' },
    ];

    const handleCategoryChange = (values) => {
        const selectedLabel = values.map((option) => option.label)[0]; 
        setInputCategory(selectedLabel);
    };

    // Filter blogs based on selected category
    const filteredBlogs = inputCategory ? blogs.filter(blog => blog.category === inputCategory) : blogs;

    const userBlogs = filteredBlogs.filter(blog => blog.email === user.email);

    return (
        <div className="bg-[#ddd0b0] p-16">
            <h2 className="text-3xl md:text-4xl font-bold md:font-extrabold mb-8 text-center">Your Blogs</h2>
            <div className="text-center">
                <div className="form-control w-fit bg-[#ddd0b0] text-center">
                    <Select
                        className='input'
                        options={options}
                        value={inputCategory ? [{ label: inputCategory }] : null}
                        onChange={handleCategoryChange}
                    />
                </div>
            </div>
            <div>
                {
                    userBlogs.map(blog => <AllBlog key={blog._id} blog={blog}></AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;
