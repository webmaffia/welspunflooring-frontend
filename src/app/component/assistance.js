import Image from 'next/image';
import Link from 'next/link';

const AssistanceSection = () => {
  return (
    <section data-section="assistance" className="assistance">
      <div className="diamond_title">
        <h2 className="diamond diamond_blue">GET ASSISTANCE</h2>
      </div>
      <div className="assistance_container">
        {/* Assistance Box 1 */}
        <div className="assistance_box">
          <Image 
            src="/images/product_list/vector/img-1.webp"
            alt=""
            className="assist_img"
            width={146}
            height={151}
          />
          <h3 className="subtitle_40">
            Schedule an Expert <br />Consultation
          </h3>
          <Link href="#" className="view_link purpleBg">
            <div className="link_cta">
              <div className="arrow_bg">
                <Image 
                  src="/images/icons/arrow-2.webp"
                  alt=""
                  width={20}
                  height={17}
                />
              </div>
              <span>VIEW ALL</span>
            </div>
          </Link>
        </div>
        
        {/* Assistance Box 2 */}
        <div className="assistance_box">
          <Image 
            src="/images/product_list/vector/img-2.webp"
            alt=""
            className="assist_img"
            width={146}
            height={151}
          />
          <h3 className="subtitle_40">
            Order a <br />Sample Box
          </h3>
          <Link href="#" className="view_link purpleBg">
            <div className="link_cta">
              <div className="arrow_bg">
                <Image 
                  src="/images/icons/arrow-2.webp"
                  alt=""
                  width={20}
                  height={17}
                />
              </div>
              <span>VIEW ALL</span>
            </div>
          </Link>
        </div>
        
        {/* Assistance Box 3 */}
        <div className="assistance_box">
          <Image 
            src="/images/product_list/vector/img-3.webp"
            alt=""
            className="assist_img"
            width={146}
            height={151}
          />
          <h3 className="subtitle_40">
            Budget <br />Calculator
          </h3>
          <Link href="/budget-calculator" className="view_link purpleBg">
            <div className="link_cta">
              <div className="arrow_bg">
                <Image 
                  src="/images/icons/arrow-2.webp"
                  alt=""
                  width={20}
                  height={17}
                />
              </div>
              <span>VIEW ALL</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AssistanceSection;
