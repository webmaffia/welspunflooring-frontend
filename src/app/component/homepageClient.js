"use client"; // Mark this component as a client component

import { useApi } from "../context/ApiContext";
import { useEffect, useState } from "react";
import { getHomepageData, getHomepageContentData } from "../fetchData"; // Adjust the import path accordingly

import Banner from './banner';
import ProductsSection from './homepage/products';
import SpacesSection from './homepage/spaceSection';
import VideoGuide from './homepage/videoGuide';
import SustainabilitySection from './homepage/sustainability';
import CaseStudySwiper from './homepage/caseStudy';
import TestimonialSection from './homepage/testimonials';
import PartnerSection from './homepage/partners';
import EmiSection from './homepage/threefold';
import InspirationSection from './homepage/inspiration';
import TrendingSection from './homepage/trend';
import BlogSection from './homepage/blog';
import ContactForm from './homepage/contactus';
import Visualiser from './homepage/visulaiser';

export default function HomePageClient() {
  const { apiUrl } = useApi(); // Get the apiUrl from context
  const [allData, setAllData] = useState([]);
  const [allContentData, setAllContentData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for fetching
  const [imageLoading, setImageLoading] = useState(true); // Loading state for image

  // Fetch data based on the selected apiUrl
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true); // Start loading
        const data = await getHomepageData(apiUrl || 'default'); // Default to 'default' if apiUrl is not available
        const contentData = await getHomepageContentData(apiUrl || 'default');
        
        setAllData(data); // Set the main data
        setAllContentData(contentData); // Set the content data
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }
    loadData();
  }, [apiUrl]); // Re-fetch when apiUrl changes

  // Filter sections
  const bannerSection = allData.filter((section) => section.__component === "sections.banner");
  const slides = bannerSection.length > 0 ? bannerSection[0].slide : [];

  const productsSection = allData.filter((section) => section.__component === "sections.product");
  const productsContent = allContentData.filter((section) => section.__component === "sections.product");

  const spaceSection = allData.filter((section) => section.__component === "sections.spaces");
  const visuliserSection = allData.filter((section) => section.__component === "sections.visualiser");

  const blogdata = allData.filter((section) => section.__component === "sections.blog-section");

  const handleImageLoad = () => {
    setImageLoading(false); // Hide the loader once the image is loaded
  };

  if (loading) {
    return <section data-section="loading_section" className="loading_section">
    <div className="loading_container">
        <div className="loader">
            <img src="/images/welspun.webp" alt="" className="loading_welspun" width="1920" height="323" />
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
</section>; // Show loading text if fetching
  }

  return (
    <main className="wrapper">
      {imageLoading && <section data-section="loading_section" className="loading_section">
    <div className="loading_container">
        <div className="loader">
            <img src="/images/welspun.webp" alt="" className="loading_welspun" width="1920" height="323" />
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
</section>} {/* Show loader until image is loaded */}
      
      {slides.length > 0 ? (
        <Banner bannerData={slides} onImageLoad={handleImageLoad} />
      ) : (
        <p>No slides available</p>
      )}

      <ProductsSection productData={productsContent} productImage={productsSection} />
      <SpacesSection spaceData={spaceSection} />
      <VideoGuide />
      <Visualiser visuliserData={visuliserSection} />
      <SustainabilitySection />
      <CaseStudySwiper />
      <TestimonialSection />
      <PartnerSection />
      <EmiSection />
      <InspirationSection />
      <TrendingSection />
      <BlogSection blogs={blogdata} />
      <ContactForm />
    </main>
  );
}
