// utils/fetchBlogs.js

export const fetchAllBlogs = async () => {
  try {
      const response = await fetch("https://staging-cms.welspunflooring.com//api/blogs?populate=*");
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error fetching all blogs:", error);
      return null;
  }
};

export const fetchBlogBySlug = async (slug) => {
  try {
      const response = await fetch(`https://staging-cms.welspunflooring.com//api/blogs?filters[slug][$eq]=${slug}&populate[blocks][populate]=image`);
      const data = await response.json();
      return data?.data?.[0] || null;
  } catch (error) {
      console.error("Error fetching blog by slug:", error);
      return null;
  }
};
