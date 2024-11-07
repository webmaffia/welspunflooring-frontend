"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SpacesSection = ({spaceData}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const heading = spaceData[0].heading
  const spaces = spaceData[0].space

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };



  return (
    <section className={`space ${activeIndex !== null ? 'active' : ''}`} data-section="space">
      <div className="section_container">
        <h2 className="diamond diamond_white">{heading.sectionName}</h2>
        <div className="title_container">
          <div className="subtitle_80">{heading.heading}</div>
        </div>
      </div>

      <div className="square_box_3"></div>
      <div className="square_box_4"></div>

      <div className="view_link purpleBg">
        <div className="link_cta">
          <div className="arrow_bg">
            <Image src="/images/icons/arrow-2.webp" alt="Arrow" width={20} height={17} />
          </div>
          <span>VIEW ALL</span>
        </div>
      </div>

      {spaces.map((space, index) => (
        <Link 
          href="" 
          key={index} 
          className={`space_img img-${index + 1} ${activeIndex === index ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Image 
          
          src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${space.image.data.attributes.url}`}
           alt={space.alt} width={index === 3 ? 289 : 651} height={651} />
          <span className="space_title">{space.name}</span>
        </Link>
      ))}
    </section>
  );
};

export default SpacesSection;
