"use client";
import { useRef, useState } from 'react';
import BannerSwiper from "./banner/bannerSwipper";
import SquareSwiper from "./banner/squareSwipper";

import BannerContent from './homepage/bannerContent';

import { useApi } from '../context/ApiContext';
import Link from 'next/link';

const Banner = ({bannerData,onImageLoad}) => {
    const { showSquareSwiper } = useApi(); // Access visibility state from context


 
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return <>
        <section className="banner cursor_img">

        <BannerSwiper thumbsSwiper={thumbsSwiper} bannerData={bannerData} onImageLoad={onImageLoad} />
        {showSquareSwiper && <SquareSwiper setThumbsSwiper={setThumbsSwiper} bannerData={bannerData} />}
     <BannerContent bannerData={bannerData} />

        
     <Link href="/applications" class="view_link cursor_cta purpleBg2">
    <div class="link_cta">
      <div class="arrow_bg">
        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
      </div>
      <span>EXPLORE</span>
    </div>
  </Link>
  <div class="square_box square_box_1">
  </div>
        </section>
    </>;
};

export default Banner;
