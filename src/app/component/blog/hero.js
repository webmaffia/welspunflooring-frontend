"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function HeroBlog({ blogs }) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1; // Default to 1 if no page query exists

  // Only render the HeroBlog on the first page
  if (currentPage !== 1) {
    return null;
  }

  // Display the first blog in the HeroBlog
  const blog = blogs[0];

  return (
    <div className="blog_room">
      <div className="room_container">
        <div className="blog_text">
          <span>{blog.attributes.publishDate}</span>
        </div>
        <Link href={`blog/${blog.attributes.slug}`}>
          <h2 className="subtitle_50">{blog.attributes.Title}</h2>
        </Link>
        <div className="sub_list_container">
          <p>{blog.attributes.shortSummary}</p>
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
          src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${blog?.attributes?.featuredImage?.data?.attributes?.url}`}
          alt="Blog Room"
          className="blog_room_img"
          width={771}
          height={518}
        />
      </Link>
    </div>
  );
}
