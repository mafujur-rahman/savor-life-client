import {  useContext, useState } from 'react';
import Select from 'react-dropdown-select';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthProvider';


const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [category, setCategory] = useState(null);
    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const {user} = useContext(AuthContext)

    const options = [
        { value: 1, label: 'travel' },
        { value: 2, label: 'food' },
        { value: 3, label: 'sports' },
    ];

    const resetForm = () => {
        setTitle('');
        setImg('');
        setCategory(null);
        setShortDescription('');
        setLongDescription('');
    };

      // Function to check if all required fields are filled
      const areAllFieldsFilled = () => {
        return title.trim() !== '' && 
               img.trim() !== '' && 
               category !== null &&
               shortDescription.trim() !== '' &&
               longDescription.trim() !== '';
    };

    const handleAddBlog = () => {
        const newBlog = { img, title, shortDescription, longDescription, category, email: user.email, ownerName: user.displayName, ownerPhoto: user.photoURL };
        // console.log(newBlog);

        // send data to the server
        fetch('http://localhost:5000/blogs',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBlog)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Successfully add a new blog",
                    showConfirmButton: false,
                    timer: 1500
                    
                  });
                  resetForm()
            }
        })
    };



    const handleCategoryChange = (values) => {
        const selectedLabel = values.map((option) => option.label)[0]; 
        setCategory(selectedLabel);
    };

    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url('/blog-image.jpg')`}}>
                <div className="hero-content flex-col">
                    <h3 className="text-4xl font-bold text-[#000000] mb-2">Add a new blog</h3>
                    <div className="card shrink-0 w-full md:w-[400px] shadow-2xl">
                        <form onSubmit={(e) => e.preventDefault()} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter blog title"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
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
                                    placeholder="Enter image url"
                                    name="photo"
                                    value={img}
                                    onChange={(e) => setImg(e.target.value)}
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <Select
                                    className='input'
                                    options={options}
                                    value={category}
                                    onChange={handleCategoryChange}
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
                                    value={shortDescription}
                                    onChange={(e) => setShortDescription(e.target.value)}
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
                                    value={longDescription}
                                    onChange={(e) => setLongDescription(e.target.value)}
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control">
                            <button 
                                    className={`btn bg-[#e4bb55] text-[#0e191b] border-none ${areAllFieldsFilled() ? '' : 'opacity-50 cursor-not-allowed'}`} 
                                    onClick={handleAddBlog}
                                    disabled={!areAllFieldsFilled()}
                                >
                                    Add Blog
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;