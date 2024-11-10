import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const bannerData = [
  { 
    image: "assets/images/home_banner/banner/Home.webp", 
    mobileImage: "assets/images/home_banner/mob_banner/Home-mob.webp" 
  },
  { 
    image: "assets/images/home_banner/banner/Office-banner.webp", 
    mobileImage: "assets/images/home_banner/mob_banner/Home-mob.webp" 
  },
  { 
    image: "assets/images/home_banner/banner/Healthcare.webp", 
    mobileImage: "assets/images/home_banner/mob_banner/Home-mob.webp" 
  },
  { 
    image: "assets/images/home_banner/banner/Hospitality.webp", 
    mobileImage: "assets/images/home_banner/mob_banner/Home-mob.webp" 
  },
  { 
    image: "assets/images/home_banner/banner/Gym.webp", 
    mobileImage: "assets/images/home_banner/mob_banner/Home-mob.webp" 
  },
  { 
    image: "assets/images/home_banner/banner/Cinema-Hall.webp", 
    mobileImage: "assets/images/home_banner/mob_banner/Home-mob.webp" 
  },
  { 
    image: "assets/images/home_banner/banner/Government.webp", 
    mobileImage: "assets/images/home_banner/mob_banner/Home-mob.webp" 
  },
  { 
    image: "assets/images/home_banner/banner/Events.webp", 
    mobileImage: "assets/images/home_banner/mob_banner/Home-mob.webp" 
  }
];

const squareBannerData = [
  { image: "assets/images/home_banner/small_img/Home-s.webp" },
  { image: "assets/images/home_banner/small_img/Office-s.webp" },
  { image: "assets/images/home_banner/small_img/Health-s.webp" },
  { image: "assets/images/home_banner/small_img/Hospitality-s.webp" },
  { image: "assets/images/home_banner/small_img/Gym-s.webp" },
  { image: "assets/images/home_banner/small_img/Cinema-s.webp" },
  { image: "assets/images/home_banner/small_img/Government-s.webp" },
  { image: "assets/images/home_banner/small_img/Events-s.webp" }
];

const contentData = [
  "Home floor & wall designs",
  "Branding and aesthetics at offices",
  "The look & feel of healthcare & wellness spaces",
  "The experience of unwinding in luxury",
  "Pack a punch",
  "The glamor quotient in cinema halls",
  "There are classics to contemporary designs",
  "Convenience and ease at events & exhibitions"
];

const BannerSwiperComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Initialize the bannerSwiper first
    const bannerSwiper = new Swiper(".bannerSwiper", {
      loop: true,
      speed: 1400,
      effect: "fade",
      on: {
        slideChange: () => {
          setActiveIndex(bannerSwiper.realIndex);
        }
      }
    });

    // Initialize squareSwiper after bannerSwiper
    const squareSwiper = new Swiper(".squareSwiper", {
      effect: "cards",
      grabCursor: true,
      loop: true,
      speed: 2000,
      thumbs: {
        swiper: bannerSwiper
      }
    });

    // Initialize contentSwiper after squareSwiper
    new Swiper(".contentSwiper", {
      loop: true,
      slidesPerView: 1,
      speed: 1400,
      thumbs: {
        swiper: squareSwiper
      }
    });

    // Cleanup function to destroy Swipers when the component is unmounted
    return () => {
      bannerSwiper.destroy();
      squareSwiper.destroy();
    };
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <section className="banner cursor_img">
      <div dir="rtl" className="swiper bannerSwiper swiper-no-swiping">
        <div className="swiper-wrapper">
          {bannerData.map((item, index) => (
            <div key={index} className="swiper-slide">
              <picture>
                <source
                  media="(max-width:540px)"
                  srcSet={item.mobileImage}
                />
                <img src={item.image} alt="" width="1920" height="1073" />
              </picture>
            </div>
          ))}
        </div>
      </div>
      <div className="square_banner">
        <div className="swiper squareSwiper swiper-no-swiping">
          <div className="swiper-wrapper">
            {squareBannerData.map((item, index) => (
              <div key={index} className="swiper-slide">
                <img src={item.image} alt="" width="553" height="554" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="nav_banner">
        <ul>
          {bannerData.map((_, index) => (
            <li
              key={index}
              className={index === activeIndex ? "active" : ""}
            >
              {contentData[index]}
            </li>
          ))}
        </ul>
      </div>
      <div className="banner_content">
        <div className="banner_heading">Step Up</div>
        <div className="swiper contentSwiper">
          <div className="swiper-wrapper">
            {contentData.map((text, index) => (
              <div key={index} className="swiper-slide">
                <h2 className="banner_sub_heading">{text}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a href="#" className="view_link cursor_cta purpleBg2">
        <div className="link_cta">
          <div className="arrow_bg">
            <img
              src="assets/images/icons/arrow-2.webp"
              alt=""
              width="20"
              height="17"
            />
          </div>
          <span>EXPLORE</span>
        </div>
      </a>
      <div className="square_box square_box_1"></div>
    </section>
  );
};

export default BannerSwiperComponent;
