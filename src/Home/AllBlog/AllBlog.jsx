
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Pages/Providers/AuthProvider';
// import { FaSistrix } from "react-icons/fa6";;

const AllBlog = () => {
    const { user } = useContext(AuthContext);
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [toastShown, setToastShown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category


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

    // Function to filter blogs based on the search query
    useEffect(() => {
        const query = searchQuery.toLowerCase();
        const matchingBlogs = recentBlogs.filter((blog) =>
            blog.title.toLowerCase().includes(query)
        );
        setFilteredBlogs(matchingBlogs);
    }, [searchQuery, recentBlogs]);

    useEffect(() => {
        // Check if the searchQuery is empty and the toast has been shown
        if (searchQuery === '' && toastShown) {
            // Reset the toastShown state to false
            setToastShown(false);
        }
    }, [searchQuery, toastShown]);

    // Function to handle search
    const handleSearch = () => {
        // Filter blogs based on the search query
        const matchingBlogs = recentBlogs.filter((blog) =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredBlogs(matchingBlogs);

        if (matchingBlogs.length === 0) {
            toast.error('No blogs matching the search query', {
                onClose: () => setToastShown(true),
            });
        }
    };
    // Function to filter blogs based on the selected category
    const filterByCategory = () => {
        if (selectedCategory) {
            const filteredByCategory = recentBlogs.filter((blog) =>
                blog.category === selectedCategory
            );

            setFilteredBlogs(filteredByCategory);
        } else {
            setFilteredBlogs(recentBlogs); // Show all blogs if no category is selected
        }
    };


    return (
        <div className="mt-16 max-w-screen-xl mx-auto px-4 py-5">
            <h2 className="text-5xl text-center font-bold mb-16">All Blogs</h2>
            <div className="flex items-center justify-center mb-24">
                <input type="text"
                    placeholder="Search by title..."
                    className="input input-bordered mr-2 w-3/4 p-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="btn btn-active hover:bg-green-400 h-16"
                    onClick={handleSearch}
                >Search</button>
            </div>

            <ToastContainer />
            <div className="flex mb-4 gap-8 ">
                <div className="w-1/5">
                    <h2 className='font-semibold mb-3'>Filter</h2>
                    <select
                        className="select select-bordered"
                        value={selectedCategory}
                        onClick={filterByCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option  value="">All Categories</option>
                        <option onClick={filterByCategory} value="Technology">Technology</option>
                        <option onClick={filterByCategory} value="Travel">Travel</option>
                        <option onClick={filterByCategory} value="Health">Health</option>
                        <option onClick={filterByCategory} value="Food and Cooking">Food and Cooking</option>
                        <option onClick={filterByCategory} value="Personal Development">Personal Development</option>
                        <option onClick={filterByCategory} value="Career Advice">Career Advice</option>
                        <option onClick={filterByCategory} value="Fashion and Style">Fashion and Style</option>
                        <option onClick={filterByCategory} value="Book Reviews">Book Reviews</option>
                        <option onClick={filterByCategory} value="Art and Creativity">Art and Creativity</option>
                    </select>
                </div>
                <div className='4/5'>
                    {filteredBlogs.length === 0 ? (
                        <div className="text-center text-red-500">
                            {/* No blogs matching the search query. */}
                        </div>
                    ) : (

                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-7">
                            {filteredBlogs.map((blog) => (
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

                            ))}
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default AllBlog;























