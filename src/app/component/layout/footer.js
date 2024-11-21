import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_title">
          Get more insights delivered <br />
          straight to your inbox
        </div>
        <form action="">
          <input type="email" placeholder="Type your email" />
          <button type="submit" className="view_link whiteBrd">
            <div className="link_cta">
              <div className="arrow_bg">
                <Image src="/images/icons/arrow-2.webp" alt="" width={20} height={17} />
              </div>
              <span>SUBMIT</span>
            </div>
          </button>
        </form>
      
        <address>
            Corporate Office <br />
            <span>
                Welspun House 6th Floor, Kamala Mills Compound, <br />
                Senapati Bapat Marg, Lower Parel, Mumbai 400 013, India<br />
                +91 22 66136000 / 24908000
            </span>
        </address>
        <address>
            Manufacturing Plant <br />
            <span>
                Survey No - 190, Village - Chandanvelly, Mandal - Shabad,<br />
                Chandanvelly, Ranga Reddy, Telangana, 501503
            </span>
        </address>
        <address>
            USA Office <br />
            <span>
                Suite No. 1118-1120, 295 Textile Building, <br />
                5th Avenue,New York 10016, U.S.A.
            </span>
        </address>
        <div class="contact_link">
            <a href="tel:+18001201161">1800-120-1161</a>
        </div>
        <div class="contact_link">
            <a href="mailto:contact_flooring@welspun.com">contact_flooring@welspun.com</a>
        </div>
      </div>
      <div className="footer_nav">
        <div className="nav_container">
          <span className="nav_link"><Link href="/products" className="border_link">Product</Link></span>
          <div className="sub_nav">
  <span className="nav_link">
    <Link href="/products/click-and-lock-wood" className="border_link" >
    CLICK-N-LOCK® Wood
    </Link>
  </span>
  <span className="nav_link">
    <Link href="/products/click-and-lock-stone" className="border_link" >
    CLICK-N-LOCK® Stone
    </Link>
  </span>
  <span className="nav_link">
    <Link href="/products/carpet-tiles" className="border_link" >
      Carpet Tiles
    </Link>
  </span>
  <span className="nav_link">
    <Link href="/products/wall-to-wall-carpet" className="border_link" >
      Wall To Wall Carpet
    </Link>
  </span>
  <span className="nav_link">
    <Link href="/products/artificial-grass" className="border_link" >
      GREENS
    </Link>
  </span>
  <span className="nav_link">
    <Link href="/products/multistile" className="border_link" >
      Multistile™
    </Link>
  </span>
</div>

        </div>

        <div className="nav_container">
          <span className="nav_link"><Link href="/about-us" className="border_link">About Us</Link></span>
          <span className="nav_link"><Link href="/applications" className="border_link">Spaces Recreated</Link></span>
          <span className="nav_link"><Link href="/warranty" className="border_link">Warranty & Maintenance</Link></span>
          <span className="nav_link"><Link href="/blog" className="border_link">Blog</Link></span>
          <span className="nav_link"><Link href="/contact-us" className="border_link">Contact Us</Link></span>
          <span className="nav_link"><Link href="/testimonials" className="border_link">Testimonials</Link></span>
          {/* <span className="nav_link"><a href="blog.php" className="border_link">Blog</a></span> */}
          {/* <span className="nav_link"><a href="" className="border_link">Video Guide</a></span>
          <span className="nav_link"><a href="" className="border_link">Visualiser</a></span>
          <span className="nav_link"><a href="case-study.php" className="border_link">Case Study</a></span>
          <span className="nav_link"><a href="" className="border_link">What's Trending</a></span> */}
        </div>

        <div className="nav_container">
          <span className="nav_link"><Link href="/sustainability" className="border_link">Sustainability</Link></span>
          <span className="nav_link"><Link href="/products" className="border_link">Catalogues</Link></span>
          <span className="nav_link"><Link href="/locate-dealer" className="border_link">Locate Dealer</Link></span>
          <span className="nav_link"><Link href="/installation" className="border_link">Installation</Link></span>
          <span className="nav_link"><Link href="/privacy-policy" className="border_link">Privacy Policy</Link></span>
          <span className="nav_link"><Link href="/terms-and-condition" className="border_link">Terms & Conditions</Link></span>
          {/* <span className="nav_link"><a href="" className="border_link">Certifications</a></span>
          <span className="nav_link"><a href="" className="border_link">FAQs</a></span> */}
          {/* 
           */}
        </div>
        

        <div className="nav_container">
          <span className="nav_link">
            <a href="https://www.facebook.com/WelspunFlooring/">
              <span className="nav_social">
                <Image src="/images/icons/fb.webp" alt="" width={39} height={39} />
                <span className="border_link">Facebook</span>
              </span>
            </a>
          </span>
          <span className="nav_link">
            <a href="https://in.linkedin.com/company/welspun-flooring">
              <span className="nav_social">
                <Image src="/images/icons/linkedin.webp" alt="" width={39} height={39} />
                <span className="border_link">Linkedin</span>
              </span>
            </a>
          </span>
          <span className="nav_link">
            <a href="https://www.youtube.com/channel/UCvRd3cJiHYaA9w-o8qJYGtA">
              <span className="nav_social">
                <Image src="/images/icons/yt.webp" alt="" width={39} height={39} />
                <span className="border_link">Youtube</span>
              </span>
            </a>
          </span>
          <span className="nav_link">
            <a href="https://www.instagram.com/welspunflooring/?hl=en">
              <span className="nav_social">
                <Image src="/images/icons/insta.webp" alt="" width={39} height={39} />
                <span className="border_link">Instagram</span>
              </span>
            </a>
          </span>
        </div>
      </div>
      <Image src="/images/welspun_footer.webp" alt="" className="lg_logo" width={1920} height={323} />
      <a href="" className="sm_logo">
        <Image src="/images/welspun.webp" alt="" width={443} height={170} />
      </a>
    </footer>
  );
};

export default Footer;
