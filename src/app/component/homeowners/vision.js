'use client';

import Image from 'next/image';

const Vision = () => {
  return (
    <section data-section="vision_container" className="vision_container structure_container bg_f8">
      <div className="section_container">
        <h2 className="diamond diamond_blue">STRUCTURE</h2>
        <div className="subtitle_30 mgt26">
          Click-N-Lock<sup>&#169;</sup> Tiles combines the strength of stone with a multi
          layer design and a unique construction that offers durability and
          strength and also resists wear and tear to retain a luxurious look
          for years. Click-N-Lock Tiles<sup>&#169;</sup> features include waterproofness,
          shatter, scratch and stain resistance.
        </div>
        <div className="vision_diamond">
          <div className="border_diamond"></div>
        </div>
      </div>
      <Image
        src="/images/about/CnL-layer.webp"
        alt=""
        className="main_vision_img"
        width={1099}
        height={844}
      />
    </section>
  );
};

export default Vision;