
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBlog = () => {
    const blog = useLoaderData();
    const {_id, img, title, category, shortDescription, longDescription} = blog;

    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const img = form.image.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const updatedBlog = {title,img,category,shortDescription,longDescription}
        console.log(updatedBlog);

        // send to the server
        fetch(`https://savor-life-server-side.vercel.app/blogs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        icon: "success",
                        title: "Update the spot",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url('/blog-image.jpg')` }}>
                <div className="hero-content flex-col">
                    <h3 className="text-4xl font-bold text-[#000000] mb-2">Update Blog</h3>
                    <div className="card shrink-0 w-full md:w-[400px] shadow-2xl">
                        <form onSubmit={handleUpdate} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter blog title"
                                    name="title"
                                    defaultValue={title}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={img}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    defaultValue={category}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Blog short description"
                                    name="shortDescription"
                                    defaultValue={shortDescription}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Long Description</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Blog long description"
                                    name="longDescription"
                                    defaultValue={longDescription}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                               <button className="btn bg-[#274d5a] text-white border-none "> Update Blog</button>
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;