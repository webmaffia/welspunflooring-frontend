// budgetapi.js
export async function fetchProductSpecifications() {
    try {
      const response = await fetch(
        'https://staging-cms.welspunflooring.com//api/product-specifications?populate[category][populate]=product&populate[details][populate]=slider.image'
      );
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching product specifications:", error);
      return [];
    }
  }
  