"use client"
import { useState } from 'react';

const ProductFAQ = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
        {product.attributes.faq.faqList.map((item, index) => (
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
              <div className= {`accordion_content ${activeIndex === index ? 'active' : ''}`}>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFAQ;
