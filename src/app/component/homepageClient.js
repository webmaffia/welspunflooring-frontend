"use client"; // Client-side component

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import { getHomepageData, getHomepageContentData } from "../fetchData";

import Banner from "./banner";
import ProductsSection from "./homepage/products";
import SpacesSection from "./homepage/spaceSection";
import VideoGuide from "./homepage/videoGuide";
import SustainabilitySection from "./homepage/sustainability";
import CaseStudySwiper from "./homepage/caseStudy";
import TestimonialSection from "./homepage/testimonials";
import PartnerSection from "./homepage/partners";
import EmiSection from "./homepage/threefold";
import InspirationSection from "./homepage/inspiration";
import TrendingSection from "./homepage/trend";
import BlogSection from "./homepage/blog";
import ContactForm from "./homepage/contactus";
import Visualiser from "./homepage/visulaiser";
import AboutOwner from "./homeowners/aboutowners";
import ClickTiles from "./homeowners/tabs";
import FeatureProjects from "./b2b/featureproject";
import FeatureClient from "./b2b/featureclient";
import FeaturePaving from "./b2b/care";
import B2BProject from "./b2b/b2bproject";
import B2BSustainableTabs from "./b2b/b2btabs";
import AssistanceSection from "./assistance";
import ProductFeature from "./feature";
import GlobalFeature from "./homeowners/globalfeatures";
import ArchitectsProjects from "./architects/architectsprojects";
import ArchitectsProducts from "./architects/architectsproducts";
import Support from "./architects/support";
import AdClub from "./architects/adclub";
import InspiroForm from "./architects/inspiroform";
import VideoGuideGoogle from "./homepage/videoGuideGoogle";

export default function HomePageClient({ data, contentData, shouldHideSection }) {
  const pathname = usePathname(); // Get the current URL path
  const [allData, setAllData] = useState(data || []);
  const [allContentData, setAllContentData] = useState(contentData || []);
  const [imageLoading, setImageLoading] = useState(true);

  // Handle image loading
  const handleImageLoad = () => setImageLoading(false);

  useEffect(() => {
    // Disable body overflow while images are loading
    document.body.style.overflow = imageLoading ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [imageLoading]);

  // Filter sections
  const bannerSection = allData.filter((section) => section.__component === "sections.banner");
  const slides = bannerSection.length > 0 ? bannerSection[0].slide : [];

  const productsSection = allData.filter((section) => section.__component === "sections.product");
  const productsContent = allContentData.filter((section) => section.__component === "sections.product");

  const spaceSection = allData.filter((section) => section.__component === "sections.spaces");
  const visuliserSection = allData.filter((section) => section.__component === "sections.visualiser");

  const testimonialData = allData.filter((section) => section.__component === "sections.testimonials");
  const inspirationSection = allData.filter((section) => section.__component === "sections.inspiration");
  const blogdata = allData.filter((section) => section.__component === "sections.blog-section");

  const partnerSection = allData.filter((section) => section.__component === "sections.partners");
  const threeFold = allData.filter((section) => section.__component === "sections.three-fold");

  const videoGuide = allData.filter((section) => section.__component === "sections.video-guide");

  return (
    <main className="wrapper">
      {slides.length > 0 && <Banner bannerData={slides} onImageLoad={handleImageLoad} shouldHideSection={shouldHideSection} />}

      {/* Conditionally render AboutOwner if pathname is /homeowners */}
      {pathname === "/homeowners" && <AboutOwner />}

      {pathname === "/homeowners" && <ClickTiles />}
      {pathname === "/homeowners" && <GlobalFeature slug="click-and-lock-wood" />}

      
      
      {pathname === "/b2b" && <FeatureProjects />}
      {pathname === "/b2b" && <FeatureClient />}
  
      
    
    


      {pathname === "/architects-and-interior-designers" && <ArchitectsProjects />}
      {/* {pathname === "/architects-and-interior-designers" && <ArchitectsProducts />} */}
      {pathname === "/architects-and-interior-designers" && <B2BProject />}
      {pathname === "/architects-and-interior-designers" && <Support />}
      {pathname === "/architects-and-interior-designers" && <AdClub />}
      {pathname === "/architects-and-interior-designers" && <InspiroForm />}

      





  
      {(pathname === "/b2b" || pathname === "/") && (
  <ProductsSection productData={productsContent} productImage={productsSection} />
)}

      
      <SpacesSection spaceData={spaceSection} />
      {pathname === "/b2b" && <FeaturePaving />}
      {pathname === "/b2b" && <B2BProject />}
    
      {pathname === "/b2b" && <VideoGuideGoogle videoGuide={videoGuide} pathname={pathname} />}
      {pathname === "/" && <VideoGuide videoGuide={videoGuide} pathname={pathname} />}
      {pathname === "/architects-and-interior-designers" && <VideoGuide videoGuide={videoGuide} pathname={pathname} />}
      
      {pathname === "/b2b" && <B2BSustainableTabs />}
      {pathname !== "/b2b" &&    <SustainabilitySection />}
   
      {pathname !== "/b2b" && <TestimonialSection testimonial={testimonialData} pathname={pathname} />}
      
      {/* {partnerSection.length > 0 && <PartnerSection partnerData={partnerSection[0]} />} */}
         {pathname === "/b2b" && <PartnerSection partnerData={partnerSection[0]} />}
     
      {pathname !== "/b2b" &&  <EmiSection threeFold={threeFold} />}
      <InspirationSection inspirationSection={inspirationSection} />
      <TrendingSection />
      {pathname === "/b2b" && <AssistanceSection pathname={pathname} />}
      <BlogSection blogs={blogdata} pathname={pathname} />
      <ContactForm />
    </main>
  );
}
