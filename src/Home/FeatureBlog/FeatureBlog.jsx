import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const FeatureBlog = () => {
    const [topPosts, setTopPosts] = useState([]);

    useEffect(() => {
        // Fetch all recent blogs from the server
        fetch('http://localhost:5000/recent-blogs')
            .then((response) => response.json())
            .then((data) => {
                // Calculate the word count for each blog's long description
                data.forEach((blog) => {
                    blog.wordCount = blog.descriptionLong.split(/\s+/).length;
                });

                // Sort the blogs in descending order by word count
                const sortedBlogs = data.sort((a, b) => b.wordCount - a.wordCount);

                // Select the top 10 posts
                const topPosts = sortedBlogs.slice(0, 10);

                // Assign serial numbers
                topPosts.forEach((post, index) => {
                    post.serialNumber = index + 1;
                });

                setTopPosts(topPosts);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    // Define the columns for the table
    const columns = [
        {
            name: 'Serial Number',
            selector: 'serialNumber',
            sortable: true,
        },
        {
            name: 'Blog Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Blog Owner',
            selector: 'blogOwner',
            sortable: true,
        },
        {
            name: 'Blog Owner Profile Picture',
            cell: (row) => <img src={row.blogOwnerProfilePicture} alt="Profile" />,
        },
    ];

    return (
        <div>
            <h2 className="text-5xl text-center font-bold mb-16 mt-24">Feature Blog</h2>
            <div className=' font-semibold'>
                <DataTable
                    title="Top 10 Posts"
                    columns={columns}
                    data={topPosts}
                    pagination
                    highlightOnHover
                    defaultSortField="serialNumber"
                    defaultSortAsc={true}
                />
            </div>

        </div>
    );
};

export default FeatureBlog;
