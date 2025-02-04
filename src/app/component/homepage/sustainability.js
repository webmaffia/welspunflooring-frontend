import Image from 'next/image';
import Link from 'next/link';

const SustainabilitySection = () => {
  return (
    <section data-section="home_sustainable" className="home_sustainable">
      <div className="sustainability_container">
        <div className="section_container">
          <h2 className="diamond diamond_blue">SUSTAINABILITY</h2>
          <div className="title_container">
            <div className="subtitle_60">
              Nurturing Nature for <br />Future Generations
            </div>
          </div>
        </div>
        <Image
          src="/images/sustainability.webp"
          alt="Sustainability"
          className="sustainability_img"
          width={1070}
          height={686}
        />
        <div className="swiper_container swiper_content">
          <div className="swiper_bg">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="subtitle_50">At Welspun World</div>
                <p>
                  We believe it is crucial to address the <br />
                  global need for sustainable practices and <br />
                  share a wholesome bond with the <br />
                  communities we influence. We work <br />
                  closely with the surrounding villages to <br />
                  better their quality of life in the aspects of <br />
                  Education, Environment, and Health <br />
                  sectors to empower the communities.
                </p>
                <div className="product_cta">
                  <Link href="/sustainability" className="view_link whiteBrd">
                    <div className="link_cta">
                      <div className="arrow_bg">
                        <Image
                          src="/images/icons/arrow-2.webp"
                          alt="Arrow Icon"
                          width={20}
                          height={17}
                        />
                      </div>
                      <span>KNOW MORE</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="square_box square_box_7"></div>
    </section>
  );
};

export default SustainabilitySection;
