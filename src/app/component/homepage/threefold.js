// components/EmiSection.js

"use client"
import React, { useState,useEffect } from 'react';

const emiItems = [
  {
    img: 'images/emi/img-1.webp',
    title: 'Budget Calculator',
    description: 'Design your ideal floor, tailored to your style and Budget-Friendly Needs.',
    linkText: 'Calculate Now',
    linkHref: '/budget-calculator', // Add your link here
  },
  // {
  //   img: 'images/emi/img-2.webp',
  //   title: 'The Floor Finder',
  //   description: 'Help us help you with the right kind of solution for your need',
  //   linkText: 'GET STARTED',
  //   linkHref: '#', // Add your link here
  // },
  {
    img: 'images/emi/img-3.webp',
    title: 'Book an Expert Consultation',
    description: 'Get expert advice on the best-suited product for your space',
    linkText: 'BOOK NOW',
    linkHref: '#', // Add your link here
  },
];

const EmiSection = () => {
  useEffect(() => {
    const handleChatClick = () => {
      const chatBox = document.querySelector(".sticky_chat");
      if (chatBox) {
        chatBox.click();
      }
    };
  
    // Get elements by class name
    const elements = document.getElementsByClassName("triggerChat");
  
    // Attach event listeners to each element
    Array.from(elements).forEach((element) => {
      element.addEventListener("click", handleChatClick);
    });
  
    // Cleanup event listeners when component unmounts
    return () => {
      Array.from(elements).forEach((element) => {
        element.removeEventListener("click", handleChatClick);
      });
    };
  }, []);
    const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="emi emi_two_items" data-section="emi">
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
          <a
  href={item.linkHref}
  className={`view_link cursor_cta purpleBg2 ${item.linkHref.includes('#') ? 'triggerChat' : ''}`}
>
  {/* Link content here */}


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
