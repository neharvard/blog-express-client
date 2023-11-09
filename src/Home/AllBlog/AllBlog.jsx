
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { AuthContext } from '../../Pages/Providers/AuthProvider';

const AllBlog = () => {
    const { user } = useContext(AuthContext);
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [toastShown, setToastShown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment-11-server-gules.vercel.app/recent-blogs')
            .then((response) => response.json())
            .then((data) => {
                const sortedBlogs = data.sort((a, b) => b.timestamp - a.timestamp);
                setRecentBlogs(sortedBlogs);
            })
            .catch((error) => console.error('Error:', error))
            .finally(() => setLoading(false)); // Set loading to false when data fetching is complete
    }, []);

    // Function to add a blog to the wishlist
    const addToWishlist = async (blogId) => {
        try {
            const response = await fetch(`https://assignment-11-server-gules.vercel.app/wishlist/${blogId}`, {
                method: 'POST',
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Blog added to the wishlist');
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
            toast.error('No blogs matching the search query');
            setToastShown(true);
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
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="input input-bordered mr-2 w-3/4 p-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="btn btn-active hover:bg-green-400 h-16"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            <ToastContainer />
            <SkeletonTheme color="#b91c1c" highlightColor="#f97316"> 
                <div className="flex mb-4 gap-8 ">
                    <div className="w-1/5">
                        <h2 className="font-semibold mb-3">Filter</h2>
                        <select
                            className="select select-bordered"
                            value={selectedCategory}
                            onClick={filterByCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">All Categories</option>
                            <option value="Technology">Technology</option>
                            <option value="Travel">Travel</option>
                            <option value="Health">Health</option>
                            <option value="Food and Cooking">Food and Cooking</option>
                            <option value="Personal Development">Personal Development</option>
                            <option value="Career Advice">Career Advice</option>
                            <option value="Fashion and Style">Fashion and Style</option>
                            <option value="Book Reviews">Book Reviews</option>
                            <option value="Art and Creativity">Art and Creativity</option>
                        </select>
                    </div>
                    <div className="4/5">
                        {loading ? (
                            // Display skeletons while data is being fetched
                            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-7">
                                {[1, 2, 3, 4].map((index) => (
                                    <div key={index} className="card bg-base-100 shadow-xl">
                                        <Skeleton height={256} />
                                        <div className="card-body">
                                            <h3 className="text-2xl font-bold mb-3">
                                                <Skeleton />
                                            </h3>
                                            <p className="">
                                                <Skeleton count={3} />
                                            </p>
                                            <p className="font-semibold mb-1">
                                                <Skeleton />
                                            </p>
                                            <div className="flex gap-3">
                                                <button>
                                                    <Skeleton width={100} />
                                                </button>
                                                <button>
                                                    <Skeleton width={100} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Display blogs when data fetching is complete
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
            </SkeletonTheme>
        </div>
    );
};

export default AllBlog;
























