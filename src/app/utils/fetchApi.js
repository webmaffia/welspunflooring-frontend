

export const fetchFromStrapi = async (endpoint) => {
    const baseUrl = 'https://welspun-cms.webmaffia.com/api/';
    const url = `${baseUrl}${endpoint}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data from Strapi: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  