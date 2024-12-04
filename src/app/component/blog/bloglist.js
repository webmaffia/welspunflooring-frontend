
import HeroBlog from "./hero";
import BlogListItem from "./blogitem";
// import { Suspense } from "react";
// import { useSearchParams } from "next/navigation";

export default function BlogList({ blogs, heroBlog }) {
  // const searchParams = useSearchParams();
  // const currentPage = parseInt(searchParams.get("page")) || 1; // Default to 1 if no page query exists

  if (!blogs) {
    return (
      <section data-section="loading_section" className="loading_section">
        <div className="loading_container">
          <div className="loader">
            <img
              src="/images/welspun.webp"
              alt="Loading"
              className="loading_welspun"
              width="1920"
              height="323"
            />
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
    <section data-section="listing_container" className="listing_container">
      <div className="listing-contents">
        <div id="all_blog" className="tab_content active">
          <div className="blog_list_container">
            {/* Render HeroBlog only on the first page */}
           <HeroBlog blogs={heroBlog} />

            {/* <Suspense fallback={<div>Loading...</div>}> */}
              <BlogListItem blogs={blogs} /> {/* Pass all blogs to BlogListItem */}
            {/* </Suspense> */}
          </div>
        </div>
      </div>
    </section>
  );
}
