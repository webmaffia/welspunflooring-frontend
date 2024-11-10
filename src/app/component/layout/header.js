// components/Header.js
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle('overflow', !menuActive);
  };

  return (
    <header className={menuActive ? 'active' : ''}>
      <div className="nav_mobile">
        <Link href="/">
          <Image src="/images/Logo.png" alt="Logo" priority width={162} height={62} />
        </Link>
        <div className={`menu_icon ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
