"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/swiper-bundle.css';


const SustainabilityPlans = () => {
  return (
    <section data-section="sustainability_plans" className="sustainability_plans">
      <div className="subtitle_8316">Our Plans</div>
      <Swiper
      className='planSwiper'
        slidesPerView={3}
        spaceBetween={200}
        speed={1000}
        navigation={{
          nextEl: ".plan-next",
          prevEl: ".plan-prev",
        }}
        modules={[Navigation]}
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
            spaceBetween: 200,
          },
        }}
      >
        <SwiperSlide>
          <img
            src="/images/sustainability/plans/plan_1.webp"
            alt="Plan 1"
            className="plan_img"
            width="386"
            height="386"
          />
          <div className="plan_title">20%</div>
          <div className="plan_para">Energy mix from renewable sources by 2025</div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/sustainability/plans/plan_2.webp"
            alt="Plan 2"
            className="plan_img"
            width="386"
            height="386"
          />
          <div className="plan_title">100%</div>
          <div className="plan_para">
            Energy from resources with carbon neutrality by 2030 (WIL).
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/sustainability/plans/plan_3.webp"
            alt="Plan 3"
            className="plan_img"
            width="386"
            height="386"
          />
          <div className="plan_title">Tracking</div>
          <div className="plan_para">
            Strict emission regulations across operations with pollution control
            equipment and periodic reporting and tracking
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/sustainability/plans/plan_4.webp"
            alt="Plan 4"
            className="plan_img"
            width="386"
            height="386"
          />
          <div className="plan_title">EVs</div>
          <div className="plan_para">Promoting cleaner and more efficient transportation like EVs.</div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/sustainability/plans/plan_5.webp"
            alt="Plan 5"
            className="plan_img"
            width="386"
            height="386"
          />
          <div className="plan_title">Industries</div>
          <div className="plan_para">
            Local ancillary industries for lowering inward-transport emissions.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/sustainability/plans/plan_6.webp"
            alt="Plan 6"
            className="plan_img"
            width="386"
            height="386"
          />
          <div className="plan_title">SBTi</div>
          <div className="plan_para">
            Adoption of the SBTi framework for creating the GHG reduction blueprint (WIL).
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper_plan">
        <div className="plan-prev plan_arrow">
          <img src="/images/icons/arrow.webp" alt="" width="28" height="13" />
        </div>
        <div className="plan-next plan_arrow">
          <img src="/images/icons/arrow.webp" alt="" width="28" height="13" />
        </div>
      </div>
    </section>
  );
};

export default SustainabilityPlans;
