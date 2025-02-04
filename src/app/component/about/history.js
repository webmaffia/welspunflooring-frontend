// Import required modules
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';




const AboutHistory = () => {
  // Timeline data array
  const timelineData = [
    {
        number: "01",
        icon: "/images/about/timeline/icons/1985.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_1985.webp",
        year: "1985",
        content: "Palghar saw its first Polyester Yarn Machine. The journey as Welspun Winilon Silk Mills Private Limited began in India."
    },
    {
        number: "02",
        icon: "/images/about/timeline/icons/1991.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_1991.webp",
        year: "1991",
        content: "Manufacturing capacity was upgraded from 2,200 MT to 3,500 MT."
    },
    {
        number: "03",
        icon: "/images/about/timeline/icons/1994.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_1994.webp",
        year: "1994",
        content: "New speciality polyester filament yarn facility started at Silvassa with 14,500 MT capacity."
    },
    {
        number: "04",
        icon: "/images/about/timeline/icons/1996.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_1996.webp",
        year: "1996",
        content: "Welspun India Ltd. became the 4th largest exporter of terry towels to Europe & USA."
    },
    {
        number: "05",
        icon: "/images/about/timeline/icons/1997.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_1997.webp",
        year: "1997",
        content: "Step towards diversification, SAW pipes manufacturing unit in Dahej. Welspun Gujarat Stahl Rohren Ltd. was born."
    },
    {
        number: "06",
        icon: "/images/about/timeline/icons/2001.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_2001.webp",
        year: "2001",
        content: "Prestigious joint venture with Eupec Pipe Coatings GmbH for coating pipes at Dahej. In 2005 merged with Welspun Gujarat Stahl Rohren Ltd. (now Welspun Corp Ltd.)."
    },
    {
        number: "07",
        icon: "/images/about/timeline/icons/2004.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_2004.webp",
        year: "2004",
        content: "After the devastating 2001 earthquake, we built Welspun City in Anjar, an oasis in the Rann of Kutch, in a record 9 months to help the locals."
    },
    {
        number: "08",
        icon: "/images/about/timeline/icons/2007.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_2007.webp",
        year: "2007",
        content: "Establishment of a state-of the-art Plate and Coil Plant in Anjar, Gujarat."
    },
    {
        number: "09",
        icon: "/images/about/timeline/icons/2009.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_2009.webp",
        year: "2009",
        content: "Welspun's 1st line Pipes unit was established in the USA."
    },
    {
        number: "10",
        icon: "/images/about/timeline/icons/2010.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_2010.webp",
        year: "2010",
        content: "Welspun Renewables was established to fuel the growing potential of renewable power in India."
    },
    {
        number: "11",
        icon: "/images/about/timeline/icons/2015.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_2015.webp",
        year: "2015",
        content: "Welspun Leadership Group met in Mumbai to chalk out the roadmap for Welspun 2.0."
    },
    {
        number: "12",
        icon: "/images/about/timeline/icons/2018.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_2018.webp",
        year: "2018",
        content: "Commissioning of India's first 14 lane green expressway inaugurated by Narendra Modi (PM- India)."
    },
    {
        number: "13",
        icon: "/images/about/timeline/icons/2019.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_2019.webp",
        year: "2019",
        content: "Welspun Group further diversifies with Welspun One Logistics Parks (WOLP), an Industrial real estate."
    },
    {
        number: "14",
        icon: "/images/about/timeline/icons/2020.svg",
        ellipseImage: "/images/about/timeline/ellipse/ellipse_2020.webp",
        year: "2020",
        content: "Welspun diversified into the Flooring sector with a manufacturing facility spread over 300 acres in Hyderabad."
    }

    // Continue for any additional timeline items
];

  

  return (
    <section data-section="about_history" className="about_history">
      <div className="section_container">
        <h2 className="diamond diamond_blue">ABOUT WELSPUN FLOORING</h2>
        <div className="title_container">
          <div className="history_para">
          Welspun World is a US$ 5 billion company and is one of India's fastest-growing conglomerates, with a strong presence in textiles and flooring solutions worldwide.
            {/* Add more description here as needed */}
          </div>
        </div>
      </div>

      <div className="swiper historySwiper">
        <img
          src="/images/about/timeline/border.webp"
          alt=""
          className="arrow_history"
          width="1920"
          height="17"
        />


<Swiper
  className="historySwiper"
  loop={true}
  speed={1400}
  initialSlide={0}
  pagination={{
    clickable: true,
    el: '.swiper-pagination',
  }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  modules={[Pagination, Autoplay]}
  slidesPerView={3}
  spaceBetween={160}
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  }}
 
>
  {timelineData.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="swiper-slide">
        <div className="timeline_item">
          <div className="timeline_number">{item.number}</div>
          <div className="timeline_content">
            <img
              src={item.icon}
              alt={`Icon for ${item.year}`}
              className="timeline_icon"
              width="109"
              height="109"
            />
            <div className="content">
              <p className="timeline_para">{item.content}</p>
              <div className="timeline_year">{item.year}</div>
            </div>
            <div className="ellipse_image">
              <img
                src={item.ellipseImage}
                alt={`Ellipse for ${item.year}`}
                width="221"
                height="221"
              />
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
};

export default AboutHistory;
