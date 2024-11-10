// src/app/fetchData.js

export async function getHomepageData(segment) {
    try {
      const res = await fetch(`https://welspun-cms.webmaffia.com/api/homepage?populate[${segment}][populate]=slide.slideImage,slide.slideBg,slide.slideMobileBg,slide.image,slide.productSlug,slide.brochurePdf,space.image,images.images,testimonial.posterImage,testimonial.image,image,partnerLogo.images,partnerLogo.mobileImages,content.images,content.mobileImages,blog.thumbnail,heading`, {
        cache: 'no-store',
      });
      
      if (!res.ok) {
        console.error(`Failed to fetch homepage data: ${res.statusText}`);
        return [];
      }
  
      const data = await res.json();
      return data?.data?.attributes?.[segment] || [];
    } catch (error) {
      console.error("Error fetching homepage data:", error);
      return [];
    }
  }
  
  export async function getHomepageContentData(segment) {
    try {
      const res = await fetch(`https://welspun-cms.webmaffia.com/api/homepage?populate[${segment}][populate]=*`, {
        cache: 'no-store',
      });
      
      if (!res.ok) {
        console.error(`Failed to fetch homepage content data: ${res.statusText}`);
        return [];
      }
  
      const data = await res.json();
      return data?.data?.attributes?.[segment] || [];
    } catch (error) {
      console.error("Error fetching homepage content data:", error);
      return [];
    }
  }
  