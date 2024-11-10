"use client";
import { useRef, useState } from 'react';
import BannerSwiper from "./banner/bannerSwipper";
import SquareSwiper from "./banner/squareSwipper";

import BannerContent from './homepage/bannerContent';

import { useApi } from '../context/ApiContext';

const Banner = ({bannerData,onImageLoad}) => {
    const { showSquareSwiper } = useApi(); // Access visibility state from context


 
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return <>
        <section className="banner cursor_img">

        <BannerSwiper thumbsSwiper={thumbsSwiper} bannerData={bannerData} onImageLoad={onImageLoad} />
        {showSquareSwiper && <SquareSwiper setThumbsSwiper={setThumbsSwiper} bannerData={bannerData} />}
     <BannerContent bannerData={bannerData} />

        

        </section>
    </>;
};

export default Banner;
