// BlogDetail.js in app/ directory

import ContactForm from '@/app/component/homepage/contactus';
import Link from 'next/link';

export default async function BlogDetail({ params }) {
    const slug = params.slug;

    // Fetch data directly in the server component
    const response = await fetch(`https://staging-cms.welspunflooring.com//api/blogs?filters[slug][$eq]=${slug}&populate=*`);
    const data = await response.json();
    const blog = data?.data?.[0] || null;

    if (!blog) {
        return (
            <section>
                <h1>Loading...</h1>
            </section>
        );
    }

    const cleanContent = (content) => {
        const domainPath = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;
        return content
            .replace(/<img[^>]+src="\/uploads\/([^"]+)"/g, (match, p1) => {
                return match.replace(`/uploads/${p1}`, `${domainPath}/uploads/${p1}`);
            })
            .replace(/<p>(\s|&nbsp;)*<\/p>/g, ''); // Remove empty paragraphs
    };

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
