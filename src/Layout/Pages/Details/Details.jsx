import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Comment from "./Comment";

const Details = () => {
    const { user } = useContext(AuthContext);
    const blog = useLoaderData();
    const [comment, setComment] = useState(""); 


    const { data, isLoading, error } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/comments');
            return res.json();
        }
    });
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log("Data:", data);

    if (!blog) {
        return <div>Loading...</div>;
    }

    const { _id, title, category, shortDescription, longDescription, img, email } = blog;

    const filteredComments = data.filter(data => data._id == _id);



    const handleComment = () => {


        if (user.email !== email) {
            const userName = user.displayName;
            const userImg = user.photoURL;
            const newComment = { _id, userName, userImg, comment }
            console.log(newComment);
            // send data to the server
            fetch('http://localhost:5000/comments', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newComment)
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
        } else {
            Swal.fire({
                icon: "error",
                text: "You cannot comment on your own blog",
            });
        }
    };

    return (
        <div className="bg-[#ddd0b0] p-16">
            <div className="mx-auto container rounded-2xl lg:border-2 lg:border-[#1C4C5C] w-fit">
                <div className="hero text-center">
                    <div className="hero-content flex-col  gap-20">
                        <img src={img} alt={title} className="max-w-sm h-auto rounded-lg " />
                        <div>
                            <h1 className="text-5xl font-bold ">{title}</h1>
                            <p className="py-6">{shortDescription}</p>
                            <p className="border-dotted border-b-2 border-[#1C4C5C] mb-4"></p>
                            <p className="border-dotted border-b-2 border-[#1C4C5C] my-4"></p>
                            <p>
                                <span className="text-xl font-medium">Full Description:</span>{" "}
                                <span className="text-gray-600">{longDescription}</span>
                            </p>
                            <p>
                                <span className="text-xl font-medium">Category:</span>{" "}
                                <span className="text-gray-600">{category}</span>
                            </p>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="textarea mt-4 w-full bg-[#274d5a] text-white"
                                placeholder="Add a comment"
                            ></textarea>
                            <button onClick={handleComment} className="btn bg-[#e4bb55] text-[#0e191b] border-none">
                                Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-14 container mx-auto ">
                <h2 className="text-3xl font-bold">Comments:</h2>
                <div className="h-fit w-fit bg-[#fff5dc]">
                    {filteredComments.map(data => (
                        <Comment key={data._id} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Details;
