"use client"

import { useState, useEffect } from 'react';
import HeroBlog from "./hero";
import BlogListItem from "./blogitem";

export default function BlogList() {
    const [blogs, setBlogs] = useState(null);  // State to store all blogs
    const [heroBlog, setHeroBlog] = useState([]);  // State to store hero blogs

    // Fetch blogs data from API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("https://welspun-cms.webmaffia.com/api/blogs?populate=*");
                const data = await response.json();
                setBlogs(data);  // Set all blogs
                setHeroBlog(data?.data?.filter(blog => blog.attributes.hero === true) || []);  // Filter hero blogs
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    if (!blogs) {
        return <p>Loading...</p>;  // Loading state while blogs are being fetched
    }
    console.log(blogs)

    return (
        <section data-section="listing_container" className="listing_container">
            <div className="listing-contents">
                <div id="all_blog" className="tab_content active">
                    <div className="blog_list_container">
                        <HeroBlog blogs={heroBlog} />  {/* Pass the filtered hero blogs */}
                        <BlogListItem blogs={blogs?.data || []} />  {/* Pass all blogs to BlogListItem */}
                    </div>
                </div>
            </div>
        </section>
    );
}
