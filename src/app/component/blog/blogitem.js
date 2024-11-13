"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// BlogList Component to hold multiple BlogListItems
export default function BlogList({ blogs }) {
  const [visibleCount, setVisibleCount] = useState(4); // Start with 4 blogs

  const loadMoreBlogs = () => {
    setVisibleCount(prevCount => prevCount + 4); // Load 4 more blogs each time
  };

  return (
    <div className="blog_trends">
      <div className="blog_trend_box">
        {blogs.slice(0, visibleCount).map((item, index) => (
          <div className="blog_trend_item" key={index}>
            <div className="trend_box">
              <div className="blog_text">
                <span>{item.attributes.publishDate}</span>
              </div>
              <div className="trends">{item.attributes.blog_category?.data?.attributes?.name}</div>
            </div>
            <Link href={`blog/${item.attributes.slug}`}>
            <Image 
              src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.attributes.featuredImage?.data?.attributes?.url}`}
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
                    <Image 
                      src="/images/icons/arrow-2.webp" 
                      alt="Arrow icon" 
                      width={20} 
                      height={17} 
                    />
                  </div>
                  <span>READ ARTICLE</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Load More button */}
      {visibleCount < blogs.length && (
        


<div className="view_blog">
<button onClick={loadMoreBlogs}>
  <div className="view_link blackBrd">
    <div className="link_cta">
      <div className="arrow_bg">
        <Image 
          src="/images/icons/arrow-2.webp" 
          alt="Arrow icon" 
          width={20} 
          height={17} 
        />
      </div>
      <span>VIEW MORE</span>
    </div>
  </div>
</button>
</div>
      )}

      {/* View All link */}
    
    </div>
  );
}
