"use client";
import React, { useState, useEffect } from "react";

const EmiSection = ({ threeFold }) => {
  // Access the section data from threeFold prop
  const emiItems = threeFold[0]?.section || []; // Safely access the section array

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
        <div
          key={index}
          className={`emi_container cursor_img ${activeIndex === index ? "active" : ""}`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {/* Image */}
          <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.image?.data?.attributes?.url}`}
            alt={item.heading[0]?.children[0]?.text} // Use the first heading as the alt text
            className="emi_img"
            width="773"
            height="969"
          />
          
          {/* Content */}
          <div className="emi_content">
            {/* Heading */}
            <h2 className="subtitle_60">
              {item.heading.map((heading, idx) => (
                <span key={idx}>{heading.children[0].text}</span>
              ))}
            </h2>

            {/* Description */}
            <p>
              {item.description.map((desc, idx) => (
                <span key={idx}>{desc.children[0].text}</span>
              ))}
            </p>
          </div>

          {/* CTA Button */}
          {item.cta && item.cta[0] && (
            <a
              href={item.cta[0]?.url || "#"} // Use the URL if available
              className={`view_link cursor_cta purpleBg2 ${
                item.cta[0]?.url ? "" : "triggerChat"
              }`}
            >
              <div className="link_cta">
                <div className="arrow_bg">
                  <img
                    src="images/icons/arrow-2.webp"
                    alt="Arrow Icon"
                    width="20"
                    height="17"
                  />
                </div>
                <span>{item.cta[0]?.text}</span>
              </div>
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default EmiSection;
