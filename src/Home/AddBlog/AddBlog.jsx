
import { useState } from 'react';
import Swal from 'sweetalert2';

const AddBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        photo: '',
        category: '',
        descriptionShort: '',
        descriptionLong: '',
    });

    const handleAddBlog = async (event) => {
        event.preventDefault();

        // Send data to the server
        try {
            const response = await fetch('http://localhost:5000/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Blog Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
                setFormData({
                    title: '',
                    photo: '',
                    category: '',
                    descriptionShort: '',
                    descriptionLong: '',
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="mt-14 text-center justify-items-center">
            <h2 className="text-3xl font-extrabold mb-6 text-center">Add Blog</h2>
            <form onSubmit={handleAddBlog} className="bg-[#F4F3F0] p-4 mx-auto max-w-md">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name="photo"
                        value={formData.photo}
                        onChange={handleInputChange}
                        placeholder="Photo URL"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="select select-bordered w-full"
                    >
                        <option value="">Select a category</option>
                        <option value="Technology">Technology</option>
                        <option value="Travel">Travel</option>
                        <option value="Health">Health</option>
                        <option value="Food">Food and Cooking</option>
                        <option value="Development">Personal Development</option>
                        <option value="Career">Career Advice</option>
                        <option value="Fashion">Fashion and Style</option>
                        <option value="Book">Book Reviews</option>
                        <option value="Art">Art and Creativity</option>
                        {/* Add more category options here */}
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <input
                        type="text"
                        name="descriptionShort"
                        value={formData.descriptionShort}
                        onChange={handleInputChange}
                        placeholder="Short description"
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Long description</span>
                    </label>
                    <textarea
                        name="descriptionLong"
                        value={formData.descriptionLong}
                        onChange={handleInputChange}
                        placeholder="Long description"
                        className="textarea textarea-bordered w-full mb-5"
                    ></textarea>
                </div>
                <input
                    type="submit"
                    value="Add Blog"
                    className="btn btn-outline btn-primary w-full"
                />
            </form>
        </div>
    );
};

export default AddBlog;
