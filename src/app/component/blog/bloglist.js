
import HeroBlog from "./hero";
import BlogListItem from "./blogitem";


export default function BlogList({blogs,heroBlog}) {
  

    if (!blogs) {
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
        );  // Loading state while blogs are being fetched
    }

    return (
        <section data-section="listing_container" className="listing_container">
            <div className="listing-contents">
                <div id="all_blog" className="tab_content active">
                    <div className="blog_list_container">
                        <HeroBlog blogs={heroBlog} />  {/* Pass the filtered hero blogs */}
                        <BlogListItem blogs={blogs} />  {/* Pass all blogs to BlogListItem */}
                    </div>
                </div>
            </div>
        </section>
    );
}
