// lib/fetchDealers.js

export async function fetchDealers() {
    try {
      const response = await fetch("https://welspun-cms.webmaffia.com/api/dealers");
      
      if (!response.ok) {
        throw new Error("Failed to fetch dealer data");
      }
      
      const data = await response.json();
      return data.data; // Return only the dealers array
    } catch (error) {
      console.error("Error fetching dealers:", error);
      return [];
    }
  }
  