// components/EmiSection.js

"use client"
import React, { useState } from 'react';
const emiItems = [
  {
    img: 'images/emi/img-1.webp',
    title: 'Apply for the EMI option',
    description: 'Get some financing help to redo your space',
    linkText: 'APPLY NOW',
    linkHref: '#', // Add your link here
  },
  {
    img: 'images/emi/img-2.webp',
    title: 'The Floor Finder',
    description: 'Help us help you with the right kind of solution for your need',
    linkText: 'GET STARTED',
    linkHref: '#', // Add your link here
  },
  {
    img: 'images/emi/img-3.webp',
    title: 'Book an Expert Consultation',
    description: 'Get expert advice on the best-suited product for your space',
    linkText: 'BOOK NOW',
    linkHref: '#', // Add your link here
  },
];

const EmiSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="emi" data-section="emi">
      {emiItems.map((item, index) => (
        <div key={index}
        className={`emi_container cursor_img ${activeIndex === index ? 'active' : ''}`}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
       >
          <img
            src={item.img}
            alt={item.title}
            className="emi_img"
            width="773"
            height="969"
          />
          <div className="emi_content">
            <h2 className="subtitle_60">{item.title.split('<br />').join(' ')}</h2>
            <p>{item.description}</p>
          </div>
          <a href={item.linkHref} className="view_link cursor_cta purpleBg2">
            <div className="link_cta">
              <div className="arrow_bg">
                <img
                  src="images/icons/arrow-2.webp"
                  alt="Arrow Icon"
                  width="20"
                  height="17"
                />
              </div>
              <span>{item.linkText}</span>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
};

export default EmiSection;
