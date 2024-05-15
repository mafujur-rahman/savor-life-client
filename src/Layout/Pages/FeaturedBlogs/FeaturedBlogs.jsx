import { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedBlogsPage = () => {
    const [topBlogs, setTopBlogs] = useState([]);

    useEffect(() => {
        const fetchTopBlogs = async () => {
            try {
                // Fetch top 10 blogs from the API
                const response = await axios.get('https://savor-life-server-side.vercel.app/top-blogs');
                setTopBlogs(response.data);
            } catch (error) {
                console.error('Error fetching top blogs:', error);
            }
        };

        fetchTopBlogs();
    }, []);

    return (
        <div className='bg-gray-200 p-4 md:p-16'>
            <div className='mx-auto container'>
                <h2 className="text-3xl md:text-4xl font-bold md:font-extrabold mb-8 text-center">Featured Blogs</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-800">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="border border-gray-800 px-4 py-2">Serial Number</th>
                                <th className="border border-gray-800 px-4 py-2">Blog Title</th>
                                <th className="border border-gray-800 px-4 py-2">Blog Owner</th>
                                <th className="border border-gray-800 px-4 py-2">Blog Owner Profile Picture</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {topBlogs.map((blog, index) => (
                                <tr key={blog._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                                    <td className="border border-gray-800 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-800 px-4 py-2">{blog.title}</td>
                                    <td className="border border-gray-800 px-4 py-2">{blog.ownerName}</td>
                                    <td className="border border-gray-800 px-4 py-2">
                                        <img className='w-10 h-10 rounded-full ' src={blog.ownerPhoto} alt="Profile" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlogsPage;
