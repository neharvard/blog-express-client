import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const CategoryData = () => {
    const [blogs, setBlogs] = useState([]);
    const pathname = window.location.pathname;
    // const category = pathname.split('/').pop(); // Extracting category from the URL
    const category = decodeURIComponent(pathname.split('/').pop());
    console.log(" CategoryData", category)

    const fetchBlogs = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/blogs-by-category/${category}`);
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, [category]);

    return (
        <div className="mt-12 max-w-screen-xl mx-auto px-4 py-5">
            {/* <h1>This is category data</h1> */}
            <h1 className="text-5xl text-center font-bold mb-16">Category: {category}</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-28">
            {blogs.map((blog) => (
             <div key={blog._id} className="card bg-base-100 shadow-xl">
                <img src={blog.photo} alt={blog.title} className="h-64 object-cover w-full" />
                <div className="card-body">
                    <h3 className="text-2xl font-bold mb-3">{blog.title}</h3>
                    <p className="">{blog.descriptionShort}</p>
                    <div className="flex gap-3">
                        <button>
                            <Link to={`/blog/${blog._id}`} className="btn btn-accent font-bold">
                                Details
                            </Link>
                        </button>
                    </div>
                </div>
            </div> 
            ))}
            </div>
        </div>
    );
};

export default CategoryData;
