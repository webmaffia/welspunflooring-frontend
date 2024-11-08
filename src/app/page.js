// app/page.js (or wherever your Home component is located)

import Banner from "./component/banner";
import CaseStudySwiper from "./component/homepage/caseStudy";
import PartnerSection from "./component/homepage/partners";
import ProductsSection from "./component/homepage/products";
import SpacesSection from "./component/homepage/spaceSection";
import SustainabilitySection from "./component/homepage/sustainability";
import TestimonialSection from "./component/homepage/testimonials";
import EmiSection from "./component/homepage/threefold";
import VideoGuide from "./component/homepage/videoGuide";
import Visualiser from "./component/homepage/visulaiser";

import Header from "./component/layout/header";
import InspirationSection from "./component/homepage/inspiration";
import TrendingSection from "./component/homepage/trend";
import BlogSection from "./component/homepage/blog";
import ContactSection from "./component/homepage/contactus";




async function getHomepageData(segment) {
  const res = await fetch(`https://welspun-cms.webmaffia.com/api/homepage?populate[${segment}][populate]=slide.slideImage,slide.slideBg,slide.slideMobileBg,slide.image,slide.explore,slide.brochure,space.image,images.images,testimonial.posterImage,testimonial.image,image,partnerLogo.images,partnerLogo.mobileImages,content.images,content.mobileImages,blog.thumbnail,heading`, {
    cache: 'no-store', // Ensures no caching for SSR, can be removed if caching is preferred
  });
  
  const data = await res.json();
  return data?.data?.attributes?.[segment] || [];
}

async function getHomepageContentData(segment) {
  const res = await fetch(`https://welspun-cms.webmaffia.com/api/homepage?populate[${segment}][populate]=*`, {
    cache: 'no-store', // Ensures no caching for SSR, can be removed if caching is preferred
  });
  
  const data = await res.json();
  return data?.data?.attributes?.[segment] || [];
}

export default async function Home({}) {


  const allData = await getHomepageData('default');
  const allContentData = await getHomepageContentData('default')




  const changeToB2b = () => {
    alert('hi')
    getHomepageData('b2b')
    
  }



  // Filter out the banner section
  const bannerSection = allData.filter((section) => section.__component === 'sections.banner');
  const slides = bannerSection.length > 0 ? bannerSection[0].slide : [];

  const productsSection = allData.filter((section) => section.__component === 'sections.product');
  const productsContent = allContentData.filter((section) => section.__component === 'sections.product');

  const spaceSection = allData.filter((section) => section.__component === 'sections.spaces');
  const visuliserSection = allData.filter((section) => section.__component === 'sections.visualiser');

  const blogdata = allData.filter((section) => section.__component === 'sections.blog-section');
 












  

  return (
    <>
    
        <Header changeToB2b={changeToB2b} />
        <main className="wrapper">

        {slides.length > 0 ? <Banner bannerData={slides} /> : <p>No slides available</p>}
        
         <ProductsSection productData={productsContent} productImage={productsSection} />
         <SpacesSection spaceData={spaceSection} />
         <VideoGuide />
         <Visualiser  visuliserData={visuliserSection}/>
         <SustainabilitySection />
         <CaseStudySwiper />
         <TestimonialSection />
         <PartnerSection />
         <EmiSection />
         <InspirationSection />
         <TrendingSection />
         <BlogSection blogs={blogdata} />
         <ContactSection />
        </main>

   
      
    </>

  );
}
