// components/BlogBanner.js

import Image from 'next/image';

export default function BlogBanner() {
  return (
    <section className="banner inner_banner">
      <picture>
        <source 
          media="(max-width:540px)" 
          srcSet="/images/blog_inner/listing/banner_mob.webp" 
        />
        <Image 
          src="/images/blog_inner/listing/banner.webp" 
          alt="Blog Banner" 
          width={1920} 
          height={472} 
          layout="responsive"
        />
      </picture>
      <div className="inner_content">
        <h1 className="banner_heading">What makes spaces <br />stand out?</h1>
        <div className="banner_sub_heading">Ideas, tips, trends and more!</div>
      </div>
    </section>
  );
}
