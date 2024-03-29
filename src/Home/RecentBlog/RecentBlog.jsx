
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Pages/Providers/AuthProvider';

const RecentBlog = () => {
    const { user } = useContext(AuthContext);
    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recent-blogs')
            .then((response) => response.json())
            .then((data) => {
                // Sort blogs by timestamp in descending order (latest first)
                const sortedBlogs = data.sort((a, b) => b.timestamp - a.timestamp);
                setRecentBlogs(sortedBlogs);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    // Function to add a blog to the wishlist
    const addToWishlist = async (blogId) => {
        try {
            const response = await fetch(`http://localhost:5000/wishlist/${blogId}`, {
                method: 'POST',
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Blog added to the wishlist',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="mt-28 max-w-screen-xl mx-auto px-4 py-5">
            <h2 className="text-5xl text-center font-bold mb-16">Recent Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {recentBlogs.length === 0 ? (
                    // Display loading skeletons while data is being fetched
                    Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl">
                            <Skeleton height={360} />
                            <div className="card-body">
                                <Skeleton height={20} width={150} />
                                <Skeleton height={80} />
                                <Skeleton height={20} width={100} />
                                <div className="flex gap-3">
                                    <Skeleton height={30} width={80} />
                                    <Skeleton height={30} width={80} />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    // Display actual blog content once data is loaded
                    recentBlogs.slice(0, 6).map((blog) => (
                        <div key={blog._id} className="card bg-base-100 shadow-xl">
                            <img src={blog.photo} alt={blog.title} className="h-64 object-cover w-full" />
                            <div className="card-body">
                                <h3 className="text-2xl font-bold mb-3">{blog.title}</h3>
                                <p className="">{blog.descriptionShort}</p>
                                <p className="font-semibold mb-1">Category: {blog.category}</p>
                                <div className="flex gap-3">
                                    <button>
                                        <Link to={`/blog/${blog._id}`} className="btn btn-accent font-bold">
                                            Details
                                        </Link>
                                    </button>
                                    <button onClick={() => addToWishlist(blog._id)}>
                                        <Link to=" " className="btn btn-info font-bold">
                                            Wishlist
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RecentBlog;
