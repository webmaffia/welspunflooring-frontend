// components/Header.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from './menu'; // Assuming Menu is a separate component

const Header = ({}) => {
  return (
    <header>
      <div className="nav_mobile">
        <Link href="/">
          <Image src="/images/Logo.png" alt="Logo" priority={true} width={162} height={62} />
        </Link>
        <div className="menu_icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Menu  /> {/* Include Menu component */}
    </header>
  );
};

export default Header;
