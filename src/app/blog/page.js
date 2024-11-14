import BlogList from "../component/blog/bloglist";
import { fetchBlogData } from "../utils/blogData";



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
<BlogList blogs={data?.data || []} heroBlog={heroBlog} />
	</div>


  );
}
