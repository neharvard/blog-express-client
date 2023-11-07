// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const RecentBlog = () => {
//     const [recentBlogs, setRecentBlogs] = useState([]);

//     useEffect(() => {
//         // Fetch recent blogs from your backend
//         // Make sure to create an API route on the server for fetching recent blogs.
//         fetch('http://localhost:5000/recent-blogs')
//             .then((response) => response.json())
//             .then((data) => {
//                 // Sort blogs by timestamp in descending order (latest first)
//                 const sortedBlogs = data.sort((a, b) => b.timestamp - a.timestamp);
//                 setRecentBlogs(sortedBlogs);
//             })
//             .catch((error) => console.error('Error:', error));
//     }, []);

//     // Function to add a blog to the wishlist
//     // const addToWishlist = (blogId) => {
//     // You can implement the logic to add the blog to the wishlist here.
//     // Send a request to your server to store the blog in the user's wishlist.
//     // Update the API route on the server accordingly.
//     // };

//     return (
//         <div className='mt-12  grid grid-cols-1 md:grid-cols-2 gap-7 max-w-screen-xl mx-auto py-5 my-10'>
//             <h2>Recent Blogs</h2>
//             <div className="card bg-base-100 shadow-xl mb-16 ">
//                 {/* <figure><img className="w-[500px] h-[350px]" src={product.photo} alt="Shoes" /></figure> */}
//                 <div className="card-body">
//                     {
//                         recentBlogs.map((blog) => (
//                             <div key={blog._id}>
//                                 <img src={blog.photo} alt={blog.title} />
//                                 <h3 className='text-2xl font-bold mb-6 mt-4'>{blog.title}</h3>
//                                 <p className='mb-3'>{blog.descriptionShort}</p>
//                                 <p className='font-semibold mb-3'>Category: {blog.category}</p>
//                                 <div className="flex gap-5">
//                                     <button><Link
//                                         //to={`/brand/${product._id}`}
//                                         // to={`/brand/${product.brandName}/${product._id}`}
//                                         className="btn btn-accent font-bold">Details</Link>
//                                     </button>
//                                     <button><Link
//                                         // to={`/brand/${product.brandName}/${product._id}/update`}
//                                         className="btn btn-info font-bold">Wishlist</Link>
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RecentBlog;
















import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecentBlog = () => {
    const [recentBlogs, setRecentBlogs] = useState([]);

    useEffect(() => {
        // Fetch recent blogs from your backend
        // Make sure to create an API route on the server for fetching recent blogs.
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
    // const addToWishlist = (blogId) => {
    // You can implement the logic to add the blog to the wishlist here.
    // Send a request to your server to store the blog in the user's wishlist.
    // Update the API route on the server accordingly.
    // };

    return (
        <div className="mt-16 max-w-screen-xl mx-auto px-4 py-5">
            <h2 className="text-5xl text-center font-bold mb-6">Recent Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {recentBlogs.slice(0, 6).map((blog) => (
                    <div key={blog._id} className="card bg-base-100 shadow-xl ">
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
                                <button>
                                    <Link to="/wishlist" className="btn btn-info font-bold">
                                        Wishlist
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

export default RecentBlog;

