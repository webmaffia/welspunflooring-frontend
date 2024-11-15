// blogData.js
export const fetchBlogData = async () => {
    try {
        const response = await fetch("https://staging-cms.welspunflooring.com/api/blogs?populate=*");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return null;
    }
};
