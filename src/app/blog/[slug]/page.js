"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ContactForm from '@/app/component/homepage/contactus';
import Image from 'next/image'; // Importing Image from Next.js
import Link from 'next/link';

export default function BlogDetail() {
    const params = useParams();
    const slug = params.slug;
    const [blog, setBlog] = useState(null);
    useEffect(() => {
        const handleChatClick = () => {
          const chatBox = document.querySelector(".sticky_chat");
          if (chatBox) {
            chatBox.click();
          }
        };
      
        // Get elements by class name
        const elements = document.getElementsByClassName("triggerChat");
      
        // Attach event listeners to each element
        Array.from(elements).forEach((element) => {
          element.addEventListener("click", handleChatClick);
        });
      
        // Cleanup event listeners when component unmounts
        return () => {
          Array.from(elements).forEach((element) => {
            element.removeEventListener("click", handleChatClick);
          });
        };
      }, []);

    useEffect(() => {
        if (slug) {
            const fetchBlog = async () => {
                try {
                    const response = await fetch(`
                        https://welspun-cms.webmaffia.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
                    const data = await response.json();
                    setBlog(data?.data?.[0] || null);
                } catch (error) {
                    console.error("Error fetching blog:", error);
                }
            };

            fetchBlog();
        }
    }, [slug]);

    // Function to clean content by removing empty paragraphs
    const cleanContent = (content) => {
        return content.replace(/<p>(\s|&nbsp;)*<\/p>/g, '');
    };

    if (!blog) {
        return   <section data-section="loading_section" className="loading_section">
        <div className="loading_container">
          <div className="loader">
            <img src="/images/welspun.webp" alt="" className="loading_welspun" width="1920" height="323" />
            <div className="loader_content">
              <div className="loader_text">
                LOADING
                <span className="dot-one"> .</span>
                <span className="dot-two"> .</span>
                <span className="dot-three"> .</span>
              </div>
            </div>
          </div>
        </div>
      </section>;
    }

    return (
        <div className="product_wrapper">
            <section data-section="blog_detail" className="blog_detail">
                <div className="blog_detail_container">
                    <div className="detail_content">
                        <h1>{blog.attributes.Title}</h1>
                        <div className="trend_box">
                            <div className="detail_text">
                                <span>{blog.attributes.publishDate}</span>
                            </div>
                            <div className="trends">{blog.attributes.blog_category.data.attributes.name}</div>
                        </div>

                        {/* Render each block */}
                        {blog.attributes.blocks.map((block) => {
                            switch (block.__component) {
                                case "blogs.full-image":
                                    // Checking if block.image and block.image.data are defined before accessing
                                    if (block.image?.data?.attributes?.url) {
                                        const imageUrl = block.image.data.attributes.url;
                                        return (
                                            <div key={block.id} className="full-image">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${imageUrl}`}
                                                    alt={block.image.data.attributes.name || "Blog Image"}
                                                    width={750}
                                                    height={379}
                                                    layout="intrinsic"
                                                />
                                            </div>
                                        );
                                    }
                                    return null;

                                case "blogs.media":
                                    // Checking if block.image and block.image.data are defined before accessing
                                    if (block.image?.data?.attributes?.url) {
                                        const mediaUrl = block.image.data.attributes.url;
                                        return (
                                            <div key={block.id} className="media">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${mediaUrl}`}
                                                    alt={block.image.data.attributes.name || "Media Image"}
                                                    width={750}
                                                    height={379}
                                                    layout="intrinsic"
                                                />
                                            </div>
                                        );
                                    }
                                    return null;

                                case "blogs.rich-text":
                                    // Rendering rich text content
                                    return (
                                        <div
                                            key={block.id}
                                            className="rich-text"
                                            dangerouslySetInnerHTML={{ __html: cleanContent(block.content) }}
                                        />
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                    <aside>
            <div class="blog_solution">
                <div class="subtitle_35">
                    Solutions that <br />
                    make a lasting <br />
                    impression
                </div>
                <p>Step Up your floor & <br />wall designs</p>
                <Link href="/products" class="view_link whiteBrd">
                    <div class="link_cta">
                        <div class="arrow_bg">
                            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                        <span>EXPLORE</span>
                    </div>
                </Link>
            </div>
            <div class="aside_explore">
                <img src="/images/blog_inner/detail/aside_explore.webp" alt="" class="aside_explore_img" width="363" height="515" />
                <div class="explore_content">
                    <div class="subtitle_35">
                        Transform <br />
                        your space with <br />
                        Click-N-Lock Tiles <br />
                        Just within 24 <br />
                        Hours*
                    </div>
                    <Link href="/products/click-and-lock-wood" class="view_link whiteBrd">
                        <div class="link_cta">
                            <div class="arrow_bg">
                                <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                            </div>
                            <span>EXPLORE</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="blog_useful">
                <div class="useful_title">Useful Links</div>
                {/* <div class="useful_link">
                    <a href="" class="diamond diamond_blue">The Floor Finder</a>
                </div> */}
                {/* <div class="useful_link">
                    <a href="" class="diamond diamond_blue">Visualise your room with A1</a>
                </div> */}
                {/* <div class="useful_link ">
                    <Link href="#" class="diamond diamond_blue triggerChat">Book an Consult</Link>
                </div> */}
                <div class="useful_link">
                    <Link href="/locate-dealer" class="diamond diamond_blue">Locate Dealer</Link>
                </div>
                {/* <div class="useful_link">
                    <a href="" class="diamond diamond_blue">Order a Sample Box</a>
                </div> */}
                <div class="useful_link">
                    <Link href="/budget-calculator" class="diamond diamond_blue">Budget Calculator</Link>
                </div>
            </div>
        </aside>
                </div>
            </section>
            <ContactForm />
        </div>
    );
}
