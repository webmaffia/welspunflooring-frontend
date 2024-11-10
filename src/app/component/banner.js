"use client";
import { useRef, useState } from 'react';
import BannerSwiper from "./banner/bannerSwipper";
import SquareSwiper from "./banner/squareSwipper";

import BannerContent from './homepage/bannerContent';

const Banner = ({bannerData,onImageLoad}) => {


 
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return <>
        <section className="banner cursor_img">

        <BannerSwiper thumbsSwiper={thumbsSwiper} bannerData={bannerData} onImageLoad={onImageLoad} />
        <SquareSwiper setThumbsSwiper={setThumbsSwiper}   bannerData={bannerData}/>

        
        <BannerContent bannerData={bannerData} />

        

        </section>
    </>;
};

export default Banner;
