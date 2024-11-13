"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ContactForm from '@/app/component/homepage/contactus';
import Image from 'next/image';
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
      
        const elements = document.getElementsByClassName("triggerChat");
        Array.from(elements).forEach((element) => {
            element.addEventListener("click", handleChatClick);
        });
      
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
                    const response = await fetch(`https://welspun-cms.webmaffia.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
                    const data = await response.json();
                    setBlog(data?.data?.[0] || null);
                } catch (error) {
                    console.error("Error fetching blog:", error);
                }
            };
            fetchBlog();
        }
    }, [slug]);

    const cleanContent = (content) => {
        const domainPath = process.env.NEXT_PUBLIC_IMAGE_DOMAIN; 
        return content
            .replace(/<img[^>]+src="\/uploads\/([^"]+)"/g, (match, p1) => {
                return match.replace(`/uploads/${p1}`, `${domainPath}/uploads/${p1}`);
            })
            .replace(/<p>(\s|&nbsp;)*<\/p>/g, ''); 
    };

    if (!blog) {
        return (
            <section data-section="loading_section" className="loading_section">
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
            </section>
        );
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

                        {blog.attributes.blocks.map((block) => {
                            switch (block.__component) {
                                case "blogs.rich-text":
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
                        <div className="blog_solution">
                            <div className="subtitle_35">
                                Solutions that <br />
                                make a lasting <br />
                                impression
                            </div>
                            <p>Step Up your floor & <br />wall designs</p>
                            <Link href="/products" className="view_link whiteBrd">
                                <div className="link_cta">
                                    <div className="arrow_bg">
                                        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                                    </div>
                                    <span>EXPLORE</span>
                                </div>
                            </Link>
                        </div>
                        <div className="aside_explore">
                            <img src="/images/blog_inner/detail/aside_explore.webp" alt="" className="aside_explore_img" width="363" height="515" />
                            <div className="explore_content">
                                <div className="subtitle_35">
                                    Transform <br />
                                    your space with <br />
                                    Click-N-Lock Tiles <br />
                                    Just within 24 <br />
                                    Hours*
                                </div>
                                <Link href="/products/click-and-lock-wood" className="view_link whiteBrd">
                                    <div className="link_cta">
                                        <div className="arrow_bg">
                                            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                                        </div>
                                        <span>EXPLORE</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="blog_useful">
                            <div className="useful_title">Useful Links</div>
                            <div className="useful_link">
                                <Link href="/locate-dealer" className="diamond diamond_blue">Locate Dealer</Link>
                            </div>
                            <div className="useful_link">
                                <Link href="/budget-calculator" className="diamond diamond_blue">Budget Calculator</Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
            <ContactForm />
        </div>
    );
}
