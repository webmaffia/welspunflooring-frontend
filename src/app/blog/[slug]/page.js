// BlogDetail.js in app/ directory

import ContactForm from '@/app/component/homepage/contactus';
import Link from 'next/link';

export default async function BlogDetail({ params }) {
    const slug = params.slug;

    // Fetch data directly in the server component
    const response = await fetch(`https://welspun-cms.webmaffia.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
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
                        {/* Sidebar content */}
                    </aside>
                </div>
            </section>
            <ContactForm />
        </div>
    );
}
