import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Pages/Providers/AuthProvider';

const Wishlist = () => {

    const { user } = useContext(AuthContext);
    const [wishlistBlogs, setWishlistBlogs] = useState([]);

    console.log('wishlist email: ', user.email);

    const url = `https://assignment-11-server-gules.vercel.app/wishlist-blogs?email=${user.email}`;

    useEffect(() => {
        // Fetch wishlist blogs from your backend
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setWishlistBlogs(data);
            })
            .catch((error) => console.error('Error:', error));
    }, [url]);

    // Function to remove a blog from the wishlist
    const removeFromWishlist = async (blogId) => {
        try {
            const response = await fetch(`https://assignment-11-server-gules.vercel.app/remove-from-wishlist/${blogId}`, {
                method: 'POST',
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Blog removed from the wishlist',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });

                // Update the wishlistBlogs state to reflect the changes
                setWishlistBlogs((prevWishlistBlogs) =>
                    prevWishlistBlogs.filter((blog) => blog._id !== blogId)
                );
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="mt-16 max-w-screen-xl mx-auto px-4 py-5">
            <h2 className="text-5xl text-center font-bold mb-6">Wishlist Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {wishlistBlogs.map((blog) => (
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
                                <button onClick={() => removeFromWishlist(blog._id)}>
                                    <Link to=" " className="btn btn-info font-bold">
                                        Remove
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

export default Wishlist;
