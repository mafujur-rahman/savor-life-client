import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Comment from "./Comment";

const Details = () => {
    const { user } = useContext(AuthContext);
    const blog = useLoaderData();
    const [comment, setComment] = useState("");

    const { data: comments, isLoading, error } = useQuery({
        queryKey: ['comment'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/comments');
            return res.json();
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    if (!blog) {
        return <div>Loading...</div>;
    }

    const { _id, title, category, shortDescription, longDescription, img, email } = blog;

    const filteredComments = comments.filter(data => data.blogId === _id);

    const handleComment = () => {
        if (user.email !== email) {
            const userName = user.displayName;
            const userImg = user.photoURL;
            const newComment = { blogId: _id, userName, userImg, comment };

            // send data to the server
            fetch('http://localhost:5000/comments', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
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
                .catch(error => {
                    console.error('Error posting comment:', error);
                    Swal.fire({
                        icon: "error",
                        text: "An error occurred while posting the comment",
                    });
                });

                
        } else {
            Swal.fire({
                icon: "error",
                text: "You cannot comment on your own blog",
            });
        }
    };

    const isOwner = user.email === email;

    return (
        <div className="bg-gray-200 min-h-screen py-16 px-4 sm:px-8 lg:px-16">
            <div className="max-w-screen-lg mx-auto rounded-lg overflow-hidden bg-white shadow-lg">
                <div className="hero text-center">
                    <div className="hero-content flex flex-col items-center gap-4 sm:gap-8">
                        <img src={img} alt={title} className="max-w-full h-auto rounded-lg" />
                        <div className="text-center">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h1>
                            <p className="py-4 text-sm sm:text-base lg:text-lg">{shortDescription}</p>
                            <div className="border-b-2 border-[#1C4C5C] w-24 sm:w-32 lg:w-full my-4"></div>
                            <p className="text-base sm:text-lg lg:text-xl mb-4">Full Description: <span className="text-gray-600">{longDescription}</span></p>
                            <p className="text-base sm:text-lg lg:text-xl">Category: <span className="text-gray-600">{category}</span></p>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="textarea mt-4 w-full bg-[#274d5a] text-white"
                                placeholder="Add a comment"
                            ></textarea>
                            <button onClick={handleComment} className="btn bg-[#e4bb55] text-[#0e191b] border-none mt-4">
                                Comment
                            </button>
                            {isOwner && (
                                <Link to={`/update-blog/${_id}`}><button className="btn bg-[#274d5a] text-white border-none ml-4">
                                Update
                            </button></Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 max-w-screen-lg mx-auto">
                <h2 className="text-3xl font-bold">Comments:</h2>
                <div className="bg-yellow-200 p-4">
                    {filteredComments.map(data => (
                        <Comment key={data._id} data={data} />
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default Details;
