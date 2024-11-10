// components/Menu.js
"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApi } from '@/app/context/ApiContext';

const Menu = () => {
  const { setApiUrl } = useApi();

  const handleMenuClick = (newUrl) => {
    setApiUrl(newUrl);
  };

  return (
    <div className="menu">
      <ul className="upper_menu">
        <li className="menu_item">
          <ul className="dFlex">
            <li><div onClick={() => handleMenuClick("homeowners")} className="border_link">HOMEOWNERS</div></li>
            <li><div onClick={() => handleMenuClick("b2b")} className="border_link">B2B</div></li>
            <li><div onClick={() => handleMenuClick("architectsAndInteriorDesigners")} className="border_link">ARCHITECTS & INTERIOR DESIGNERS</div></li>
          </ul>
        </li>
        <li className="logo_img">
          <Link href="/">
            <Image src="/images/Logo.png" alt="Logo" width={162} height={62} />
          </Link>
        </li>
        <li className="menu_item">
          <ul className="dFlex">
            <li>
              <Link href="/" className="menu_link border_link">
                <Image src="/images/icons/consultant.webp" alt="Consultant Icon" width={33} height={37} />
                <span>B00K A CONSULT</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="menu_link border_link">
                <Image src="/images/icons/order_box.webp" alt="Order Box Icon" width={33} height={37} />
                <span>ORDER SAMPLE BOX</span>
              </Link>
            </li>
            <li>
              <Link href="/locate-dealer" className="menu_link border_link">
                <Image src="/images/icons/dealer.webp" alt="Dealer Icon" width={33} height={37} />
                <span>LOCATE DEALER</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="menu_link border_link">
                <Image src="/images/icons/calculator.webp" alt="Calculator Icon" width={33} height={37} />
                <span>BUDGET CALCULATOR</span>
              </Link>
            </li>
            <li>
              <Link href="/" className="menu_link border_link">
                <Image src="/images/icons/download.webp" alt="Download Icon" width={33} height={37} />
                <span>DOWNLOADS</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <ul className="lower_menu dFlex">
        <li>
          <Link href="/products" className="border_link">
            PRODUCTS <span></span>
          </Link>
          <div className="sub_lower">
            <ul>
              <li><Link href="/products/click-and-lock-wood" className="border_link">CLICK-N-LOCK® Wood</Link></li>
              <li><Link href="/products/click-and-lock-stone" className="border_link">CLICK-N-LOCK® Stone</Link></li>
              <li><Link href="/products/carpet-tiles" className="border_link">CARPET TILES </Link></li>
              <li><Link href="/products/wall-to-wall-carpet" className="border_link">WALL TO WALL</Link></li>
              <li><Link href="/products/artificial-grass" className="border_link">GREENS</Link></li>
              <li><Link href="/products/multistile" className="border_link">MULTISTILE&#8482;</Link></li>
            </ul>
          </div>
        </li>
        <li><Link href="/applications" className="border_link">APPLICATIONS</Link></li>
        <li><Link href="/about-us" className="border_link">ABOUT WELSPUN FLOORING</Link></li>
        {/* <li><Link href="/blog" className="border_link">BLOG</Link></li>
        <li>
          <form action="">
            <input type="text" placeholder="Search" id="search" />
            <button type="submit">
              <Image src="/images/icons/search.webp" alt="Search Icon" width={24} height={23} />
              <span>SEARCH</span>
            </button>
          </form>
        </li> */}
      </ul>
    </div>
  );
};

export default Menu;
