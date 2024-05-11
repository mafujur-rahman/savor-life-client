import { useQuery } from "@tanstack/react-query";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/blogs');
            return res.json();
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log("Data:", data); // Debugging statement

    return (
        <div className=" bg-[#ddd0b0] p-20">
            <h2 className="text-4xl font-extrabold text-center">Recent Blogs</h2>
            <p className="my-5 text-gray-600 text-center">Dive in to explore the newest additions to our blog and stay informed about the latest developments in your areas of interest.</p>
            <div className="mx-auto container w-fit my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {data?.map(data => <RecentBlog key={data._id} data={data} />)}
            </div>
        </div>
    );
};

export default RecentBlogs;
