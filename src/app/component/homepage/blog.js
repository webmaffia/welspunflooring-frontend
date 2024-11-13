"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BlogSection = ({blogs}) => {
  const [filter, setFilter] = useState("");

  // Ensure blogs contains data, otherwise set defaults
  const blogSection = blogs && blogs.length > 0 ? blogs[0] : null;


  // const blogs = [
  //   {
  //     id: 1,
  //     date: 'May 20, 2024',
  //     readTime: '10 min read',
  //     title: 'Click N Lock Tiles making waves in budget-friendly homes.',
  //     imgSrc: '/images/blogs/blog_home_1.webp',
  //     altText: 'Click N Lock Tiles',
  //     link: '/blog-detail',
  //   },
  //   {
  //     id: 2,
  //     date: 'May 29, 2024',
  //     readTime: '05 min read',
  //     title: 'Setting up your terrace area? Here are 5 tips to create an easy-to-maintain space.',
  //     imgSrc: '/images/blogs/blog_home_2.webp',
  //     altText: 'Setting up your terrace',
  //     link: '/blog-detail',
  //   },
  //   {
  //     id: 3,
  //     date: 'Jun 2, 2024',
  //     readTime: '13 min read',
  //     title: '5 things you didn’t know about carpet tiles.',
  //     imgSrc: '/images/blogs/blog_home_3.webp',
  //     altText: '5 things about carpet tiles',
  //     link: '/blog-detail',
  //   }
  // ];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <section className="blog" data-section="blog">
    <div className="blogs_upper">
        <div className="section_container">
          {blogSection && (
            <>
              <h2 className="diamond diamond_blue">{blogSection.sectionName}</h2>
              <div className="title_container">
                <div className="subtitle_60">
                  {blogSection.sectionHeading.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph.children.map((child, childIndex) => (
                        <span key={childIndex}>{child.text}</span>
                      ))}
                    </p>
                  ))}
                </div>
                <a href="/blog" className="view_link purpleBg">
                  <div className="link_cta">
                    <div className="arrow_bg">
                      <Image
                        src="/images/icons/arrow-2.webp"
                        alt="Arrow"
                        width={20}
                        height={17}
                      />
                    </div>
                    <span>READ ALL</span>
                  </div>
                </a>
              </div>
            </>
          )}
        </div>
        {/* <div className="blog_filter">
          <span>FILTER BY</span>
          <select onChange={handleFilterChange} value={filter}>
            <option value="" disabled defaultValue>
              QUESTIONS ANSWERED
            </option>
            <option value="QUESTIONS ANSWERED 1">QUESTIONS ANSWERED 1</option>
            <option value="QUESTIONS ANSWERED 2">QUESTIONS ANSWERED 2</option>
            <option value="QUESTIONS ANSWERED 3">QUESTIONS ANSWERED 3</option>
            <option value="QUESTIONS ANSWERED 4">QUESTIONS ANSWERED 4</option>
          </select>
        </div> */}
      </div>

      <div className="blogs_container">
        {blogSection.blog.map((blog,index) => (
          <div className="blogs_item cursor_img" key={blog.index}>
            <div className="blogs_img">
              <div className="blog_text">
                <span>{blog.publishDate}</span>
                {/* <span>|</span> */}
                {/* <span>{blog.readTime}</span> */}
              </div>
              
              <Link href={`blog/${blog.url}`}>
                <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${blog?.thumbnail?.data?.attributes?.url}`} 
             
                  alt={blog.altText}
                  width={381}
                  height={381}
                />
              </Link>
            </div>
            <h3 className="blog_title">
            {blog.heading.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph.children.map((child, childIndex) => (
                        <span key={childIndex}>{child.text}</span>
                      ))}
                    </p>
                  ))}
            </h3>
            <Link href={`blog/${blog.url}`} className="view_link cursor_cta purpleBg">
              <div className="link_cta">
                <div className="arrow_bg">
                  <Image
                    src="/images/icons/arrow-2.webp"
                    alt="Arrow"
                    width={20}
                    height={17}
                  />
                </div>
                <span>READ MORE</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="square_box square_box_10"></div>
    </section>
  );
};

export default BlogSection;
