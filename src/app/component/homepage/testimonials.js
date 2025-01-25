// components/TestimonialSection.js
"use client";
import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles

const staticVideos = [
  {
    videoSrc: "https://www.youtube.com/embed/7mGkB7T3JWU?enablejsapi=1&rel=0&modestbranding=1",
    name: "Adnan",
    description: "Senior IT Consultant, SAPT Delhi",
    isVideo: true,
  },
  {
    videoSrc: "https://www.youtube.com/embed/6ZyJwFoJBHw?enablejsapi=1&rel=0&modestbranding=1",
    name: "Mr. Sudhakar Manne",
    description: "Hyderabad City",
    isVideo: true,
  },
  {
    videoSrc: "https://www.youtube.com/embed/IIogdF5ZHh4?enablejsapi=1&rel=0&modestbranding=1",
    name: "Maria D'Silva",
    description: "Principal, Infant Jesus School, Pune",
    isVideo: true,
  },
];

const TestimonialSection = ({ testimonial, pathname }) => {
  const [testimonialSwiper, setTestimonialSwiper] = useState(null);
  const testimonials = testimonial[0];

  // Conditionally remove YouTube videos when pathname is "/b2b"
  const combinedTestimonials = pathname === "/b2b" 
    ? testimonials.testimonial // Show only dynamic testimonials on "/b2b"
    : [...staticVideos, ...testimonials.testimonial]; // Show all on other routes

  useEffect(() => {
    // Function to pause YouTube videos when Swiper changes slides
    const pauseVideos = () => {
      document.querySelectorAll(".youtube-video iframe").forEach((iframe) => {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      });
    };

    // Attach event listener for Swiper changes
    if (testimonialSwiper) {
      testimonialSwiper.on("slideChange", pauseVideos);
    }

    return () => {
      if (testimonialSwiper) {
        testimonialSwiper.off("slideChange", pauseVideos);
      }
    };
  }, [testimonialSwiper]);

  // **Fixing description rendering**
  const getDescriptionText = (description) => {
    if (typeof description === "string") {
      return description; // Static video descriptions (already text)
    } else if (Array.isArray(description)) {
      // Dynamic testimonials with nested text objects
      return description
        .map((item) =>
          item.children.map((child) => child.text).join(" ")
        )
        .join(" ");
    }
    return "No description available"; // Fallback
  };

  return (
    <section className="testimonial_section video_section cursor_img" data-section="testimonial_section">
      <a href="/testimonials" className="view_link cursor_cta purpleBg">
        <div className="link_cta">
          <div className="arrow_bg">
            <img src="images/icons/arrow-2.webp" alt="" width="20" height="17" />
          </div>
          <span>READ ALL</span>
        </div>
      </a>
      <div className="products_container">
        <div className="section_container">
          <h2 className="diamond diamond_blue">{testimonials.sectionName}</h2>
          <div className="title_container">
            <div className="subtitle_60">What people say</div>
          </div>
        </div>
        <div className="swiper_container">
          <Swiper
            className="testimonial"
            loop={true}
            speed={1400}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={setTestimonialSwiper}
            modules={[Navigation, Pagination, Thumbs]}
            simulateTouch={false}
          >
            {combinedTestimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="video_player">
                  {item.isVideo ? (
                    // **YouTube Video without Poster (Only if pathname is NOT "/b2b")**
                    <div className="youtube-video homeYoutube">
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.videoSrc}
                        title={item.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    // **Dynamic Image Testimonial**
                    <img
                      src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.image.data.attributes.url}`}
                      alt={item.testimonialName}
                      className="poster"
                      width="1023"
                      height="661"
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            className="testimonial2 swiper_bg"
            loop={true}
            slidesPerView={1}
            spaceBetween={100}
            speed={1400}
            thumbs={{ swiper: testimonialSwiper }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
            modules={[Navigation, Thumbs]}
            simulateTouch={false}
          >
            <div className="swiper-tool">
              <div className="swiper_button">
                <div className="swiper-prev swiper_arrow">
                  <img src="images/icons/arrow.webp" alt="Previous" width="28" height="13" />
                </div>
                <div className="swiper-next swiper_arrow">
                  <img src="images/icons/arrow.webp" alt="Next" width="28" height="13" />
                </div>
              </div>
            </div>
            {combinedTestimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <p>{getDescriptionText(item.description)}</p>
                <h3 className="subtitle_50">{item.name || item.testimonialName}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <img src="/images/icons/inverted.webp" alt="" className="inverted_img" width="389" height="289" />
      <div className="square_box square_box_8"></div>
    </section>
  );
};

export default TestimonialSection;
