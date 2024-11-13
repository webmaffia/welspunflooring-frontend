// blogData.js

export async function fetchBlogData(slug) {
    try {
        const response = await fetch(`https://welspun-cms.webmaffia.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
        const data = await response.json();
        return data?.data?.[0] || null;
    } catch (error) {
        console.error("Error fetching blog data:", error);
        return null;
    }
}
