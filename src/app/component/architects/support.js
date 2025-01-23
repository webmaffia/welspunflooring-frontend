"use client";
import React, { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

const Support = () => {
  useEffect(() => {
    // Function to set equal height
    const setEqualHeight = () => {
      const boxes = document.querySelectorAll(".assistance_box");
      let maxHeight = 0;

      // Reset heights to auto before recalculating
      boxes.forEach(box => {
        box.style.height = "auto";
      });

      // Find max height
      boxes.forEach(box => {
        if (box.offsetHeight > maxHeight) {
          maxHeight = box.offsetHeight;
        }
      });

      // Apply max height to all boxes
      boxes.forEach(box => {
        box.style.height = `${maxHeight}px`;
      });
    };

    // Run on mount and on window resize
    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", setEqualHeight);
    };
  }, []);

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

  return (
    <section data-section="assistance" className="assistance ad_assistance">
      <div className="diamond_title">
        <h2 className="diamond diamond_blue">SUPPORT & SERVICES</h2>
      </div>
      <div className="assistance_container">
        {/* Assistance Box 1 */}
        <div className="assistance_box">
          <Image 
            src="/images/product_list/vector/img-1.webp"
            alt=""
            className="assist_img"
            width={146}
            height={151}
          />
          <h3 className="subtitle_40">On-site consultation <br /> & advisory</h3>
          <p className="para box_para">
            Looking for something specific for your <br />
            project? Reach out to us and we'll help <br />
            you find the right flooring solution.
          </p>
          <Link href="#" className="view_link purpleBg triggerChat">
            <div className="link_cta">
              <div className="arrow_bg">
                <Image 
                  src="/images/icons/arrow-2.webp"
                  alt=""
                  width={20}
                  height={17}
                />
              </div>
              <span>BOOK NOW</span>
            </div>
          </Link>
        </div>
        
        {/* Assistance Box 2 */}
        <div className="assistance_box">
          <Image 
            src="/images/product_list/vector/img-2.webp"
            alt=""
            className="assist_img"
            width={146}
            height={151}
          />
          <h3 className="subtitle_40">Request for <br /> Product Samples</h3>
          <p className="para box_para">
            We're happy to send out samples of our <br />
            flooring products for you to experience. If <br />
            you are looking for specific products, do <br />
            let us know about them.
          </p>
          <Link href="#" className="view_link purpleBg triggerChat">
            <div className="link_cta">
              <div className="arrow_bg">
                <Image 
                  src="/images/icons/arrow-2.webp"
                  alt=""
                  width={20}
                  height={17}
                />
              </div>
              <span>REQUEST SAMPLE</span>
            </div>
          </Link>
        </div>
        
        {/* Assistance Box 3 */}
        <div className="assistance_box">
          <Image 
            src="/images/product_list/vector/img-4.webp"
            alt=""
            className="assist_img"
            width={146}
            height={151}
          />
          <h3 className="subtitle_40">Request for On-site <br /> Sampling Services</h3>
          <p className="para box_para">
            It's not only about quality products but also <br />
            about precision installation. If you want us <br />
            to demonstrate the application process to <br />
            see the end result, we're pleased to take on <br />
            the request.
          </p>
          <Link href="#" className="view_link purpleBg triggerChat">
            <div className="link_cta">
              <div className="arrow_bg">
                <Image 
                  src="/images/icons/arrow-2.webp"
                  alt=""
                  width={20}
                  height={17}
                />
              </div>
              <span>BOOK NOW</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Support;
