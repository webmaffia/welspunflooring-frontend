// components/HeroBlog.js

import Image from 'next/image';
import Link from 'next/link';

export default function HeroBlog({blogs}) {
   const blog = blogs[0]
  return (
    <div className="blog_room">
      <div className="room_container">
        <div className="blog_text">
          <span>{blog.attributes.publishDate}</span>
          {/* <span>|</span>
          <span>10 min read</span> */}
        </div>
        <Link href={`blog/${blog.attributes.slug}`}>
        <h2 className="subtitle_50">
         {blog.attributes.Title}
        </h2>
        </Link>
        <div className="sub_list_container">
          {/* <div className="trends">Trends</div> */}
          <p>
            {blog.attributes.shortSummary}
          </p>
        </div>
        <Link href={`blog/${blog.attributes.slug}`}>
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
      <Link href={`blog/${blog.attributes.slug}`}>
      <Image 
       src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${blog.attributes.featuredImage.data.attributes.url}`}
        alt="Blog Room" 
        className="blog_room_img" 
        width={771} 
        height={518} 
      />
      </Link>
    </div>
  );
}
