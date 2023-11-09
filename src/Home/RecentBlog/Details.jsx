
import { useEffect, useState, useContext } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../Pages/Providers/AuthProvider";

const Details = () => {
    const [blogDetails, setBlogDetails] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { _id } = useParams();
    const { user } = useContext(AuthContext);

    const { name, photo } = useParams();

    console.log('detail pohoto: ', name, photo);

    useEffect(() => {
        fetch(`https://assignment-11-server-gules.vercel.app/blog/${_id}`)
            .then((response) => response.json())
            .then((data) => {
                setBlogDetails(data);
            });
        // Fetch comments for the specific blog
        fetch(`https://assignment-11-server-gules.vercel.app/comments/${_id}`)
            .then((response) => response.json())
            .then((data) => {
                setComments(data);
            });
    }, [_id]);

    const isBlogOwner = blogDetails && user && blogDetails.email === user.email;

    const handleSubmitComment = () => {
        if (!isBlogOwner) {
            // Check if the user is not the blog owner before submitting the comment
            fetch(`https://assignment-11-server-gules.vercel.app/comment/${_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userEmail: user.email,
                    text: newComment,

                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        // Refresh the comments after successfully adding a new comment
                        fetch(`https://assignment-11-server-gules.vercel.app/comments/${_id}`)
                            .then((response) => response.json())
                            .then((data) => {
                                setComments(data);
                            });
                        // Clear the comment input field
                        setNewComment("");
                    } else {
                        // Handle the error
                        console.error('Failed to add a comment');
                    }
                });
        }
    };



    return (
        <div>
            {blogDetails && (
                <div className="mt-20 mx-auto ml-7">
                    <h2 className="text-4xl font-serif text-teal-400 text-center mb-12">
                        {blogDetails.title}
                    </h2>
                    <figure>
                        <img
                            className="w-[1100px] h-[600px] ml-32 mb-12"
                            src={blogDetails.photo}
                            alt="Blog"
                        />
                    </figure>
                    <div className="col-span-3 mb-7 text-xl">
                        <p>{blogDetails.descriptionShort}</p>
                        <p className="mt-5 ">
                            <span className="font-semibold">Long Description:</span>{" "}
                            {blogDetails.descriptionLong}
                        </p>
                    </div>
                    <p className="font-semibold mt-5 text-base">
                        Category: {blogDetails.category}
                    </p>
                    {isBlogOwner && (
                        <button>
                            <Link to={`/blog/${blogDetails._id}/updateBlog`}
                                className="btn btn-accent mt-7 mb-5">
                                Update the blog content
                            </Link>
                        </button>
                    )}
                    <div>
                        {isBlogOwner ? (
                            <p>You can't comment on your own blog.</p>
                        ) : (
                            <div>
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Write a comment..."
                                    rows="4"
                                    className="w-full border p-2 rounded-md mb-4"
                                />
                                <button onClick={handleSubmitComment} className="btn btn-primary">
                                    Submit Comment
                                </button>
                            </div>
                        )}
                        <div className="mt-5">
                            <h3 className="text-2xl text-center font-bold mt-12 mb-7">Comments Section</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

                                {
                                    comments.map((comment) => (
                                        <div key={_id} className="card bg-base-400 shadow-xl ">
                                            {/* <img src={blog.photo} alt={blog.title} className="h-64 object-cover w-full" /> */}
                                            <div className="card-body">
                                                <p>{comment.text}</p>
                                                <p className="text-sm font-semibold">{comment.userEmail}</p>
                                                {/* Add the user profile picture here if available */}
                                            </div>
                                        </div>
                                    ))}

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
