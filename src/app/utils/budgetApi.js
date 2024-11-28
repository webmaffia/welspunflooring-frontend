// budgetapi.js
export async function fetchProductSpecifications() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?populate[category][populate]=product&populate[details][populate]=slider.image`
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching product specifications:", error);
      return [];
    }
  }
  