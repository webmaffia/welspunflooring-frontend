// components/CaseStudySwiper.js
"use client"
import React from 'react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

// Install modules


const caseStudies = [
    {
        title: 'Infant Jesus School',
        image: 'images/case-study/Infant-Jesus-School.webp',
    },
    {
        title: 'SAP India Pvt',
        image: 'images/case-study/SAP-India-Pvt.webp',
    },
    {
        title: 'Stunnerz Car Accessories',
        image: 'images/case-study/Stunnerz-Car-Accessories.webp',
    },
    {
        title: 'Matrubhumi Press',
        image: 'images/case-study/Matrubhumi-Press.webp',
    },
];

const CaseStudySwiper = () => {
    return (
        <section className="case_study" data-section="case_study">
            <div className="diamond_title">
                <h2 className="diamond diamond_white">CASE STUDY</h2>
            </div>
            <div className="case_container">
                <Swiper
                    slidesPerView={2}
                    loop={true}
                    centeredSlides={true}
                    spaceBetween={146}
                    speed={1400}
                    navigation={{
                        prevEl: '.case-prev',
                        nextEl: '.case-next',
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 70,
                        },
                    }}
                >
                    {caseStudies.map((study, index1) => (
                        <SwiperSlide key={index1}>
                            <a href="" className="case_swiper_container">
                                <div className="case_text">{study.title}</div>
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="case_img"
                                    width="906"
                                    height="532"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper_button">
                    <div className="case-prev case_arrow">
                        <img src="images/icons/arrow.webp" alt="" width="28" height="13" />
                    </div>
                    <div className="case-next case_arrow">
                        <img src="images/icons/arrow.webp" alt="" width="28" height="13" />
                    </div>
                </div>
            </div>
            <a href="case-study.php" className="view_link cursor_cta purpleBg2">
                <div className="link_cta">
                    <div className="arrow_bg">
                        <img src="images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>READ ALL</span>
                </div>
            </a>
        </section>
    );
};

export default CaseStudySwiper;
