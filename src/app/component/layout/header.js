// // components/Header.js
// "use client"
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import Menu from './menu';

// const Header = () => {
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//     document.body.classList.toggle('overflow', !menuActive);
//   };

//   // Function to close menu
//   const closeMenu = () => {
//     setMenuActive(false);
//     document.body.classList.remove('overflow');
//   };

//   return (
//     <header className={menuActive ? 'active' : ''}>
//       <div className="nav_mobile">
//         <Link href="/" onClick={closeMenu}>
//           <Image src="/images/Welspun-Blue-Logo.png" alt="Logo" priority width={162} height={62} />
//         </Link>
//         <div className={`menu_icon ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//       <Menu closeMenu={closeMenu} /> {/* Pass closeMenu function */}
//     </header>
//   );
// };

// export default Header;


"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("top");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setScrollDirection("up");
      } else if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle("overflow", !menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
    document.body.classList.remove("overflow");
  };

  return (
    <header className={`${menuActive ? "active" : ""} ${scrollDirection === "down" ? "hide" : "show"}`}>
      <div className="nav_mobile">
        <Link href="/" onClick={closeMenu}>
          <Image src="/images/Welspun-Blue-Logo.png" alt="Logo" priority width={162} height={62} />
        </Link>
        <div className={`menu_icon ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Menu closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
