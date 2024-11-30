// /app/fetchData.js

export async function getHomepageData(segment) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/homepage?populate[${segment}][populate]=slide.slideImage,slide.slideBg,slide.slideMobileBg,slide.image,slide.productSlug,slide.brochurePdf,space.image,images.images,images.mobileImages,testimonial.posterImage,testimonial.image,image,partnerLogo.images,partnerLogo.mobileImages,content.images,content.mobileImages,blog.thumbnail,heading,section,section.image,section.cta,content.mobileImages,video.posterImage`, 
      {
        cache: 'no-cache',
      }
    );
    
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
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/homepage?populate[${segment}][populate]=*`,
      {
        cache: 'force-cache',
      }
    );
    
    
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
