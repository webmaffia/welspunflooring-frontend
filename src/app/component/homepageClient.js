"use client"; // Client-side component

import { useEffect, useState } from "react";
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

export default function HomePageClient({ data, contentData,shouldHideSection }) {
  const [allData, setAllData] = useState(data || []);
  const [allContentData, setAllContentData] = useState(contentData || []);
  const [imageLoading, setImageLoading] = useState(true); // Loading state for image

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
      {imageLoading && (
        <section data-section="loading_section" className="loading_section">
          <div className="loading_container">
            <div className="loader">
              <img src="/images/welspun.webp" className="loading_welspun" alt="Loading..." width="1920" height="323" />
              <div className="loader_content">
                <div className="loader_text">
                  LOADING
                  <span className="dot-one"> .</span>
                  <span className="dot-two"> .</span>
                  <span className="dot-three"> .</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {slides.length > 0 && <Banner bannerData={slides} onImageLoad={handleImageLoad} shouldHideSection={shouldHideSection} />}
      <ProductsSection productData={productsContent} productImage={productsSection} />
      <SpacesSection spaceData={spaceSection} />
      <VideoGuide videoGuide={videoGuide}/>
      <SustainabilitySection />
      <TestimonialSection testimonial={testimonialData} />
      {partnerSection.length > 0 && <PartnerSection partnerData={partnerSection[0]} />}
      <EmiSection threeFold={threeFold} />
      <InspirationSection inspirationSection={inspirationSection} />
      <TrendingSection />
      <BlogSection blogs={blogdata} />
      <ContactForm />
    </main>
  );
}
