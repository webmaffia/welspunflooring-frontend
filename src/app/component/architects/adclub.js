'use client';

import Image from 'next/image';

const AdClub = () => {
    return (
        <section data-section="ad_club" className="ad_club">
            <picture>
                <source media="(max-width: 540px)" srcSet="/images/interior/architect/mob_banner.webp" />
                <Image src="/images/interior/architect/banner.webp" alt="Ad Club Banner" width={1920} height={1080} className="ad_club_img" />
            </picture>
            <div className="ad_club_container">
                <div className="section_container">
                    <h2 className="diamond diamond_white">SPACES RECREATED</h2>
                    <Image 
                        src="/images/interior/architect/inspiro_white.webp" 
                        alt="Inspiro" 
                        width={584} 
                        height={348} 
                        className="inspiro_img" 
                    />
                    <div className="title_container">
                        <p className="para">
                            Inspiro by Welspun has been conceptualized for Architects & <br />
                            Designers who seek out-of-the-ordinary flooring solutions. <br />
                            We're here to help you with your projects by offering solutions <br />
                            tailored to your requirements. Seeking inspiration, looking for <br />
                            marvellous designs, or looking for absolute value, connect with <br />
                            us on your journey to make nothing less than masterpieces.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdClub;
