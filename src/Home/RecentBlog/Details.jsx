import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const [blogDetails, setBlogDetails] = useState(null);
    const { _id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/blog/${_id}`)
            .then((response) => response.json())
            .then((data) => {
                setBlogDetails(data);
            });
    }, [_id]);

    return (
        <div>
            {blogDetails && (
                <div className="mt-20 mx-auto ml-7">
                     <h2 className="text-4xl font-serif text-teal-400 text-center mb-12">{blogDetails.title}</h2>
                    <figure>
                        <img className="w-[1100px] h-[600px] ml-32 mb-12" src={blogDetails.photo} alt="Blog" />
                    </figure>
                    <div className="col-span-3 mb-7">
                                               <p>{blogDetails.descriptionShort}</p>
                        <p className="mt-5 "><span className="font-semibold">Long Description:</span> {blogDetails.descriptionLong}</p>
                    </div>
                    <p className="font-semibold mt-5">Category: {blogDetails.category}</p>
                </div>
            )}
        </div>
    );
};

export default Details;
