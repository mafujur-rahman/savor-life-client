import { useQuery } from "@tanstack/react-query";
import RecentBlog from "./RecentBlog";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const RecentBlogs = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs');
            return res.json();
        }
    });

    if (isLoading) return <div className=" mx-auto container"><Skeleton />
    <Skeleton count={5} /> </div>;
    if (error) return <div>Something went wrong</div>;

    console.log("Data:", data); 

    return (
        <div className=" bg-[#ddd0b0] p-20">
            <h2 className="text-3xl md:text-4xl font-bold md:font-extrabold text-center">Recent Blogs</h2>
            <p className="my-5 text-gray-600 text-center">Dive in to explore the newest additions to our blog and stay informed about the latest developments in your areas of interest.</p>
            <div className="mx-auto container w-fit my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {data?.map(data => <RecentBlog key={data._id} data={data} />)}
            </div>
        </div>
    );
};

export default RecentBlogs;
