// lib/fetchBlogData.js

export async function fetchBlogData() {
    const apiUrl = 'https://welspun-cms.webmaffia.com/api/blogs?populate=*';
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch blog data');
      }
  
      const blogData = await response.json();
      const data = blogData.data

      return data;
    } catch (error) {
      console.error('Error fetching blog data:', error);
      return { error: error.message }; // return an error message if something goes wrong
    }
  }
  