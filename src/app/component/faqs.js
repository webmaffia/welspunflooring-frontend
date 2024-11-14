"use client"
import Image from 'next/image';
import { useState } from 'react';

const ProductFAQ = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4); // Initially show only 4 items

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const loadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4); // Increase visible items by 4 each time
  };

  return (
    <section data-section="product_faq" className="product_faq">
      <div className="section_container">
        <h2 className="diamond diamond_blue">
          {product.attributes.faq.sectionName}
        </h2>
        <div className="title_container">
          <div className="subtitle_45">
            {product.attributes.faq.heading.map((item, index) => (
              <div key={index}>
                {item.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product_accordion">
        {product.attributes.faq.faqList.slice(0, visibleItems).map((item, index) => (
          <div className="accordion_item" key={index}>
            <div
              data-number={index + 1}
              className="accordion_header"
              onClick={() => toggleAccordion(index)}
            >
              <div className="accordion_title">
                {item.heading}
              </div>
              <div className={`accordion_icon ${activeIndex === index ? 'active' : ''}`}>
                <span></span>
              </div>
            </div>
            {activeIndex === index && (
              <div className={`accordion_content ${activeIndex === index ? 'active' : ''}`}>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            )}
          </div>
        ))}

{visibleItems < product.attributes.faq.faqList.length && (
   <div className='viewMoreParent'>
       <button onClick={loadMore}>
        <div className="view_link blackBrd">
          <div className="link_cta">
            <div className="arrow_bg">
              
              <Image 
                src="/images/icons/arrow-2.webp" 
                alt="Arrow icon" 
                width={20} 
                height={17} 
              />
            </div>
            <span>VIEW MORE</span>
          </div>
        </div>
      </button>
   </div>
     
      )}
      </div>
     
    </section>
  );
};

export default ProductFAQ;
