
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Pages/Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateBlog = () => {
    // const { user } = useContext(AuthContext);
    // console.log('AddBlog email: ', user.email);

    const blog = useLoaderData();
    console.log('fetch data: ', blog);

    const { _id, title,photo,email,category,descriptionShort,descriptionLong,timestamp } = blog;
    console.log("update blog: ", _id, title, photo,email,category,descriptionShort,descriptionLong,timestamp);


    // const [formData, setFormData] = useState({
    //     title: '',
    //     photo: '',
    //     category: '',
    //     email: user.email,
    //     descriptionShort: '',
    //     descriptionLong: '',
    // });

    const handleUpdateBlog = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const category = form.category.value;
        // const email = form.email.value;
        const descriptionShort = form.descriptionShort.value;
        const descriptionLong = form.descriptionLong.value;

        const updatedBlog = { _id, title, photo,category,descriptionShort,descriptionLong}
        console.log('Updated: ', updatedBlog);

       // Send data to the server
       fetch(`https://assignment-11-server-gules.vercel.app/blog/${_id}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedBlog )
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success!',
                text: 'Blog Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              form.reset();
        }
        
    })
}

    return (
        <div className="mt-14 text-center justify-items-center">
            <h2 className="text-3xl font-extrabold mb-6 text-center">Update The Blog</h2>
            <form onSubmit={handleUpdateBlog} className="bg-[#F4F3F0] p-4 mx-auto max-w-md">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        // value={formData.title}
                        // onChange={handleInputChange}
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
                        // value={formData.photo}
                        // onChange={handleInputChange}
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
                        // value={formData.category}
                        // onChange={handleInputChange}
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
                        // value={formData.descriptionShort}
                        // onChange={handleInputChange}
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
                        // defaultValue={descriptionLong}
                        // value={formData.descriptionLong}
                        // onChange={handleInputChange}
                        placeholder="Long description"
                        className="textarea textarea-bordered w-full mb-5"
                    ></textarea>
                </div>
                <input
                    type="submit"
                    value="Update Blog"
                    className="btn btn-outline btn-primary w-full"
                />
            </form>
        </div>
    );
};

export default UpdateBlog;