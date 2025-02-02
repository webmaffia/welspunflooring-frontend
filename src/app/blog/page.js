import BlogList from "../component/blog/bloglist";
import { fetchBlogData } from "../utils/blogData";
import { Suspense } from "react";
export async function generateMetadata() {
  return {
    title: "Blog | Welspun Flooring",
    description: "Give commercial flooring a much needed revamp with the bright and colourful design patterns from Welspun Flooring.",
  }
}

export default async function blogListingPage() {
  const data = await fetchBlogData();
    const heroBlog = data?.data?.filter(blog => blog.attributes.hero === true) || [];
  return (
    <div className="product_wrapper">
      <section class="banner inner_banner">
    <picture>
        <source media="(max-width:540px)" srcset="/images/blog_inner/listing/banner_mob.webp" />
        <img src="/images/blog_inner/listing/banner.webp" alt="" width="1920" height="472" />
    </picture>
    <div class="inner_content">
        <h1 class="banner_heading">What make spaces <br />stand out?</h1>
        <div class="banner_sub_heading">Ideas, tips, trends and more!</div>
    </div>
</section>
<Suspense fallback={<div>Loading...</div>}>
<BlogList blogs={data?.data || []} heroBlog={heroBlog} /> {/* Pass all blogs to BlogListItem */}
          </Suspense>

	</div>


  );
}
