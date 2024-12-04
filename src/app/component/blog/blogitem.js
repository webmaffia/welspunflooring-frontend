"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// BlogList Component to hold multiple BlogListItems
export default function BlogListItem({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1); // Start with page 1
  const blogsPerPage = 4; // Display 4 blogs per page

  // Sort blogs by publishDate in descending order
  const sortedBlogs = blogs.sort((a, b) => new Date(b.attributes.publishDate) - new Date(a.attributes.publishDate));

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  // Get the blogs for the current page
  const currentBlogs = sortedBlogs.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage);

  return (
    <div className="blog_trends">
      <div className="blog_trend_box">
        {currentBlogs.map((item, index) => {
          const imageUrl =
            item?.attributes?.featuredImage?.data?.attributes?.url
              ? `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.attributes.featuredImage.data.attributes.url}`
              : '/Images-un-available.png';

          return (
            <div className="blog_trend_item" key={index}>
              <div className="trend_box">
                <div className="blog_text">
                  <span>{item.attributes.publishDate}</span>
                </div>
                <div className="trends">{item.attributes.blog_category?.data?.attributes?.name}</div>
              </div>
              <Link href={`blog/${item.attributes.slug}`}>
                <Image
                  src={imageUrl}
                  alt="Blog featured image"
                  className="blog_list_img"
                  width={602}
                  height={549}
                />
              </Link>
              <Link href={`blog/${item.attributes.slug}`}>
                <h2 className="subtitle_30">{item.attributes.Title}</h2>
              </Link>
              <p>{item.attributes.shortSummary}</p>
              <Link href={`blog/${item.attributes.slug}`}>
                <div className="view_link purpleBg">
                  <div className="link_cta">
                    <div className="arrow_bg">
                      <Image src="/images/icons/arrow-2.webp" alt="Arrow icon" width={20} height={17} />
                    </div>
                    <span>READ ARTICLE</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="pagination_controls">
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage((prev) => prev - 1)} className="pagination_button">
            Previous
          </button>
        )}
        <span className="pagination_info">
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <button onClick={() => setCurrentPage((prev) => prev + 1)} className="pagination_button">
            Next
          </button>
        )}
      </div>
    </div>
  );
}
