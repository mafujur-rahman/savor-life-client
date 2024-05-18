import { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedBlogsPage = () => {
    const [topBlogs, setTopBlogs] = useState([]);

    useEffect(() => {
        const fetchTopBlogs = async () => {
            try {
                // Fetch top 10 blogs from the API
                const response = await axios.get('http://localhost:5000/top-blogs');
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
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Serial Number
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Blog Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Blog Owner
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Blog Owner Profile Picture
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {topBlogs.map((blog, index) => (
                                <tr key={blog._id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {blog.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {blog.ownerName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <img className='w-10 h-10 rounded-full' src={blog.ownerPhoto} alt="Profile" />
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
