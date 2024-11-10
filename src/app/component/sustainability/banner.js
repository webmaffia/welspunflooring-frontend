import Image from 'next/image';

const Banner = () => {
  return (
    <section className="banner inner_banner">
      <picture>
        <source
          media="(max-width: 540px)"
          srcSet="/images/sustainability/banner_mob.webp"
        />
        <Image
          src="/images/sustainability/banner.webp"
          alt="Sustainability Banner"
          width={1920}
          height={472}
          layout="intrinsic"
        />
      </picture>
      <div className="inner_content">
        <h1 className="banner_heading">
          Creating sustainable <br />
          spaces loved by all
        </h1>
        <div className="banner_sub_heading">The Earth included</div>
      </div>
    </section>
  );
};

export default Banner;
