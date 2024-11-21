import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, Autoplay } from 'swiper/modules';
import { useState, useRef } from 'react';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';

const ProductsSection = ({ productData, productImage }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const heading = productData[0].heading;
  const slides = productImage[0].slide;

  // Ref for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="products cursor_img" data-section="products">
      <Link href="/products" className="view_link cursor_cta purpleBg">
        <div className="link_cta">
          <div className="arrow_bg">
            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
          </div>
          <span>VIEW ALL</span>
        </div>
      </Link>
      <div className="products_container">
        <div className="left_container">
          <div className="section_container">
            <div className="diamond diamond_blue">{heading.sectionName}</div>
            <div className="title_container">
              <h1 className="subtitle_60">{heading.heading}</h1>
            </div>
          </div>
        </div>

        <div className="right_container">
          <div className="swiper_container">
            {/* Swiper for product images */}
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              speed={1400}
              simulateTouch={false}
              modules={[Thumbs, Autoplay]}
              className="productSwiper trigger_1 swiper-no-swiping"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${slide?.image?.data?.attributes?.url}`}
                    alt=""
                    width="1061"
                    height="971"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Swiper for product descriptions */}
            <Swiper
              loop={true}
              speed={1400}
              spaceBetween={100}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                el: '.swiper_pagination',
                type: 'fraction',
                clickable: true,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              observer={true}
              observeParents={true}
      modules={[Navigation, Pagination, Thumbs, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="productSwiper2 trigger_1 swiper_bg"
            >
              <div className="swiper-tool">
                <div className="swiper_pagination"></div>
                <div className="swiper_button">
                  <div ref={prevRef} className="swiper-prev swiper_arrow">
                    <img src="/images/icons/arrow.webp" alt="" width="28" height="13" />
                  </div>
                  <div ref={nextRef} className="swiper-next swiper_arrow">
                    <img src="/images/icons/arrow.webp" alt="" width="28" height="13" />
                  </div>
                </div>
              </div>

              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <h2 className="subtitle_50">{slide.product}</h2>
                  <div dangerouslySetInnerHTML={{ __html: slide.description }} />
                  <div className="product_cta">
                    <Link href={`/products/${slide.productSlug}`} className="view_link whiteBrd">
                      <div className="link_cta">
                        <div className="arrow_bg">
                          <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                        <span>EXPLORE</span>
                      </div>
                    </Link>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${slide.brochurePdf.data[0].attributes.url}`}
                      className="view_link whiteBrd"
                      target="_blank"
                    >
                      <div className="link_cta">
                        <div className="arrow_bg">
                          <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                        <span>DOWNLOAD <br />BROCHURE</span>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="square_box_2"></div>
    </section>
  );
};

export default ProductsSection;
