import Image from 'next/image';

const TrendingSection = () => {
  return (
    <section className="trending cursor_img" data-section="trending">
      <div className="section_container">
        <h2 className="diamond diamond_blue">WHAT'S TRENDING</h2>
        <div className="title_container">
          <div className="subtitle_60">
            Perfect floors for <br />for summer
          </div>
          <p>
            What's all the talk about in this <br />space, take a look!
          </p>
        </div>
      </div>
      
      {/* Next.js Image component for optimized image handling */}
      <Image
        src="/images/trending/trending.webp"
        alt="Trending"
        className="trending_img"
        width={1621}
        height={755}
      />
      
      <a href="" className="view_link cursor_cta purpleBg">
        <div className="link_cta">
          <div className="arrow_bg">
            <Image
              src="/images/icons/arrow-2.webp"
              alt="Arrow"
              width={20}
              height={17}
            />
          </div>
          <span>DISCOVER MORE</span>
        </div>
      </a>
    </section>
  );
};

export default TrendingSection;
