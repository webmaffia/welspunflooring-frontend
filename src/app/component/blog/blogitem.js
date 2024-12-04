"use client";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogListItem({ blogs }) {
  const searchParams = useSearchParams();

  const blogsPerPage = 4; // Display 4 blogs per page
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get the current page from the query parameter or default to 1
  const currentPage = parseInt(searchParams.get('page')) || 1;

  // Sort blogs by publishDate in descending order
  const sortedBlogs = blogs.sort((a, b) => new Date(b.attributes.publishDate) - new Date(a.attributes.publishDate));

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;

  // Get the blogs for the current page
  const currentBlogs = sortedBlogs.slice(startIndex, endIndex);

  // Generate the range of page numbers to display
  const getPageNumbers = () => {
    const pages = [];

    // Always include the first page
    pages.push(1);

    if (totalPages <= 5) {
      for (let i = 2; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

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

      {/* SEO-Friendly Pagination */}
      <div className="pagination_controls">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            {pageNumbers.map((page, index) => (
              <li
                key={index}
                className={`pagination_item ${
                  page === currentPage ? "active" : ""
                } ${page === "..." ? "dots" : ""}`}
              >
                {page === "..." ? (
                  <span>...</span>
                ) : (
                  <Link
                    href={`?page=${page}`}
                    className={`page_link ${page === currentPage ? "active" : ""}`}
                  >
                    {page}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
