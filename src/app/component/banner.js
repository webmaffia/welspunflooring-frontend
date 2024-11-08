"use client";
import { useRef, useState } from 'react';
import BannerSwiper from "./banner/bannerSwipper";
import SquareSwiper from "./banner/squareSwipper";

import BannerContent from './homepage/bannerContent';

const Banner = ({bannerData}) => {


 
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return <>
        <section className="banner cursor_img">

        <BannerSwiper setThumbsSwiper={setThumbsSwiper} bannerData={bannerData} />
        <SquareSwiper thumbsSwiper={thumbsSwiper} bannerData={bannerData}/>

        
        <BannerContent bannerData={bannerData} />

        </section>
    </>;
};

export default Banner;
