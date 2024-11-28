import TestimonialSlider from "./testimonialsSlider";

const Testimonials = async () => {
    async function getHomepageData(segment) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/homepage?populate[${segment}][populate]=testimonial.image`,      { cache: 'no-store' } // Ensures no caching for SSR, can be removed if caching is preferred
        );
      
        const data = await res.json();
        return data?.data?.attributes?.[segment] || [];
      }
      const allData = await getHomepageData('default');
  
      // Define visuliserSection with a default empty array to avoid 'undefined' errors
      const testimonialData = allData.length
        ? allData.filter((section) => section.__component === 'sections.testimonials')
        : [];

        const testimonials = testimonialData[0];

   
    return (
       <TestimonialSlider testimonial={testimonials} />
    );
}

export default Testimonials;