"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useApi } from "@/app/context/ApiContext";

const Menu = ({ closeMenu }) => {
  const { setApiUrl, toggleComponentsVisibility } = useApi();
  const router = useRouter(); // Initialize router

  useEffect(() => {
    // Ensure the element exists before adding the event listener
    const bookConsultantBtn = document.getElementById("bookConsultant");
    if (bookConsultantBtn) {
      bookConsultantBtn.addEventListener("click", () => {
        const chatBox = document.querySelector(".sticky_chat");
        if (chatBox) {
          chatBox.click();
        }
      });
    }

    // Cleanup event listener when component unmounts
    return () => {
      if (bookConsultantBtn) {
        bookConsultantBtn.removeEventListener("click", () => {
          const chatBox = document.querySelector(".sticky_chat");
          if (chatBox) {
            chatBox.click();
          }
        });
      }
    };
  }, []); // Empty dependency array to run only once after the initial render


  useEffect(() => {
    // Ensure the element exists before adding the event listener
    const orderSampleBox = document.getElementById("orderSampleBox");
    if (orderSampleBox) {
      orderSampleBox.addEventListener("click", () => {
        const chatBox = document.querySelector(".sticky_chat");
        if (chatBox) {
          chatBox.click();
        }
      });
    }

    // Cleanup event listener when component unmounts
    return () => {
      if (orderSampleBox) {
        orderSampleBox.removeEventListener("click", () => {
          const chatBox = document.querySelector(".sticky_chat");
          if (chatBox) {
            chatBox.click();
          }
        });
      }
    };
  }, []); // Empty dependency array to run only once after the initial render

  // const handleMenuClick = (newUrl) => {
  //   setApiUrl(newUrl); // Update API URL in context
  //   router.push("/"); // Navigate to home or the target page to ensure updates
  //   closeMenu(); // Close menu after selection
  //   toggleComponentsVisibility(false);
  // };
  // const handleDefaultClick = (newUrl) => {
  //   setApiUrl(newUrl); // Update API URL in context
  //   router.push("/"); // Navigate to home or the target page to ensure updates
  //   closeMenu(); // Close menu after selection
  //   toggleComponentsVisibility(true);
  // };

  return (
    <div className="menu">
      <ul className="upper_menu">
        <li className="menu_item">
          <ul className="dFlex">
            <li>
              <Link href="/homeowners" className="border_link" onClick={closeMenu}>
                HOMEOWNERS
              </Link>
            </li>
            <li>
              <Link href="/b2b" className="border_link" onClick={closeMenu}>
                B2B
              </Link>
            </li>
            <li>
              <Link href="/architects-and-interior-designers" className="border_link" onClick={closeMenu}>
                ARCHITECTS & INTERIOR DESIGNERS
              </Link>
            </li>
          </ul>
        </li>
        <li className="logo_img">
          <Link href="/" onClick={closeMenu}>
            <Image src="/images/Logo.png" alt="Logo" width={162} height={62} />
          </Link>
        </li>
        <li className="menu_item">
          <ul className="dFlex">
        
           
            {/* <li className="opacity0">
              <Link href="/" className="menu_link border_link" onClick={closeMenu}>
                <Image src="/images/icons/download.webp" alt="Download Icon" width={33} height={37} />
                <span>DOWNLOADS</span>
              </Link>
            </li> */}
            <li>
              <Link href="/" className="menu_link border_link" id="bookConsultant" onClick={closeMenu}>
                <Image src="/images/icons/consultant.webp" alt="Consultant Icon" width={33} height={37} />
                <span>BOOK A CONSULT</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="menu_link border_link" id="orderSampleBox" onClick={closeMenu}>
                <Image src="/images/icons/order_box.webp" alt="Order Box Icon" width={33} height={37} />
                <span>ORDER SAMPLE BOX</span>
              </Link>
            </li>
            <li className="">
              <Link href="/locate-dealer" className="menu_link border_link" onClick={closeMenu}>
                <Image src="/images/icons/dealer.webp" alt="Dealer Icon" width={33} height={37} />
                <span>LOCATE DEALER</span>
              </Link>
            </li>
            <li className="">
              <Link href="/budget-calculator" className="menu_link border_link" onClick={closeMenu}>
                <Image src="/images/icons/calculator.webp" alt="Calculator Icon" width={33} height={37} />
                <span>BUDGET CALCULATOR</span>
              </Link>
            </li>
           
          </ul>
        </li>
      </ul>

      <ul className="lower_menu dFlex">
      {/* <li>
          <Link href="/locate-dealer" className="border_link" onClick={closeMenu}>
            DEALERS
          </Link>
        </li> */}
        <li>
          <Link href="/product" className="border_link" onClick={closeMenu}>
            PRODUCTS <span></span>
          </Link>
          <div className="sub_lower">
            <ul>
              <li>
                <Link href="/product/click-and-lock-wood" className="border_link" onClick={closeMenu}>
                  CLICK-N-LOCK® Wood
                </Link>
              </li>
              <li>
                <Link href="/product/click-and-lock-stone" className="border_link" onClick={closeMenu}>
                  CLICK-N-LOCK® Stone
                </Link>
              </li>
              <li>
                <Link href="/product/purgloss-tiles" className="border_link" onClick={closeMenu}>
                  PURGLOSS TILES
                </Link>
              </li>
              <li>
                <Link href="/product/carpet-tiles" className="border_link" onClick={closeMenu}>
                  CARPET TILES
                </Link>
              </li>
              <li>
                <Link href="/product/wall-to-wall-carpet" className="border_link" onClick={closeMenu}>
                  WALL TO WALL Carpet
                </Link>
              </li>
              <li>
                <Link href="/product/artificial-grass" className="border_link" onClick={closeMenu}>
                  GREENS
                </Link>
              </li>
              <li>
                <Link href="/product/multistile" className="border_link" onClick={closeMenu}>
                  MULTISTILE™
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link href="/applications" className="border_link" onClick={closeMenu}>
            APPLICATIONS
          </Link>
        </li>
        <li>
          <Link href="/about-us" className="border_link" onClick={closeMenu}>
            ABOUT WELSPUN FLOORING
          </Link>
        </li>
        <li>
          <Link href="/blog" className="border_link" onClick={closeMenu}>
            BLOG
          </Link>
        </li>
        <li>
          <Link href="/warranty" className="border_link" onClick={closeMenu}>
          WARRANTY & MAINTENANCE
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className="border_link" onClick={closeMenu}>
            CONTACT US
          </Link>
        </li>

        
      </ul>
    </div>
  );
};

export default Menu;
