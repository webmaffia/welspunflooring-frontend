import BlogList from "../component/blog/bloglist";
import { fetchBlogData } from "../utils/blogData";



export default async function blogListingPage() {
  const data = await fetchBlogData();
    const heroBlog = data?.data?.filter(blog => blog.attributes.hero === true) || [];
  return (
    <div class="product_wrapper">
<BlogList blogs={data?.data || []} heroBlog={heroBlog} />
	</div>


  );
}
