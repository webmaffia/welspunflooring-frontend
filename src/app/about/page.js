import AboutHistory from "../component/about/history";
import ContactForm from "../component/homepage/contactus";


export default function AboutPage() {
  return (
    <div className="product_wrapper">
   <section className="banner inner_banner">
    <picture>
        <source media="(max-width:540px)" srcset="/images/about/banner_mob.webp" />
        <img src="/images/about/banner.webp" alt="" width="1920" height="472" />
    </picture>
    <div className="inner_content">
        <h1 className="banner_heading">We offer a holistic <br />approach to flooring.</h1>
        <div className="banner_sub_heading">Convenience to Innovation <br />to Sustainability</div>
    </div>
</section>
<section data-section="about_container" className="about_container">
    <div className="section_container">
        <h2 className="diamond diamond_blue">ABOUT WELSPUN FLOORING</h2>
        <div className="title_container">
            <div className="subtitle_60">
                Welspun Flooring presents <br />
                the world with awe-inspiring, <br />
                holistic flooring solutions <br />
                that are inspired by technological <br />
                innovations.
            </div>
        </div>
    </div>
    <div className="about_us">
        <div className="about_detail">
            <div className="detail_content">
                <img src="/images/about/img_1.webp" alt="" className="about_floor_img" width="612" height="612" />
                <div className="about_floor_content">
                    <div className="floor_para">
                        The growing rate of urbanization, the shift in lifestyle choices, and the <br />
                        inclusion of smart living solutions have created a big avenue for flooring <br />
                        solutions. Welspun Flooring is an innovative, solutions-driven company that is <br />
                        a part of the Welspun Group.
                    </div>
                    <div className="floor_para">
                        The company has a strong foothold owing to its state-of-the-art <br />
                        manufacturing facility spread over 300 acres in Hyderabad, and an investment <br />
                        of more than RI 150 crores. Welspun Flooring is recognized as a pioneer in <br />
                        SPC flooring, meeting a diverse range of flooring needs for residential, <br />
                        commercial, and hospitality spaces worldwide. We are the only company in <br />
                        India equipped with all the latest technology for both soft and hard flooring <br />
                        under one roof. So, be it modern living room floor tiles, outdoor floor tiles, or <br />
                        floor tile designs for any other residential or commercial space, we've got an <br />
                        array of flooring solutions to offer.
                    </div>
                    <div className="about_diamond">
                        <div className="border_diamond"></div>
                    </div>
                </div>
            </div>
            <div className="detail_content">
                <div className="about_floor_content">
                    <div className="floor_para">
                        Our bouquet of offerings includes Click-N-Lock tiles (interlocking tiles), <br />
                        Wall-to-Wall/ Broadloom carpets, Greens - grass carpet tiles, and Carpet tiles <br />
                        for different residential and commercial spaces. Crafted meticulously by our <br />
                        dedicated team of experts, Welspun Flooring is a breakthrough in terms of <br />
                        engineering and design. The collection reflects refined aesthetics, a <br />
                        contemporary approach, and an environment-caring mindset catering to a <br />
                        diverse group of architects, designers, retailers and consumers.
                    </div>
                    <div className="floor_para">
                        With an annual production capacity of 40 million square metres, an exclusive <br />
                        installation training academy, and an in-house design lab, we are pleased to <br />
                        have revolutionized the flooring industry. Our commitment to sustainable <br />
                        production practices, which reduce water and energy consumption and <br />
                        minimize carbon dioxide emissions, has earned us the prestigious LEED <br />
                        certification—making us the only flooring company in India to achieve this <br />
                        honour.
                    </div>
                    <div className="about_diamond">
                        <div className="border_diamond"></div>
                    </div>
                </div>
                <img src="/images/about/img_2.webp" alt="" className="about_floor_img" width="612" height="612" />
            </div>
        </div>
        <div className="future_floor">
            <div className="subtitle_60">
                We cannot be more excited <br />
                that the future of flooring is <br />
                now and here!
            </div>
            <a href="" className="view_link purpleBg">
                <div className="link_cta">
                    <div className="arrow_bg">
                        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>EXPLORE OUR PRODUCTS</span>
                </div>
            </a>
        </div>
    </div>
    <div className="square_box square_box_20"></div>
</section>
<section data-section="about_leadership" className="about_leadership bg_f8">
    <div className="section_container">
        <h2 className="diamond diamond_blue">OUR LEADERSHIP</h2>
        <div className="subtitle_60 mgt26">
            We value a strong foundation and are <br />
            happy to have a team that reflects it. <br />
            Our leaders bring to the forefront a rich <br />
            trajectory of life and professional <br />
            experiences adding immense worth in <br />
            knowledge and perspectives.
        </div>
    </div>
    <div className="our_leaders">
        <div className="leader_box">
            <img src="/images/about/leadership/img_1.webp" alt="" className="leader_img" width="474" height="474" />
            <div className="leader_content">
                <div className="border_diamond"></div>
                <div className="leader_name">Balkrishan Goenka</div>
                <div className="leader_designation">Chairman, Welspun Group</div>
            </div>
        </div>
        <div className="leader_box">
            <img src="/images/about/leadership/img_2.webp" alt="" className="leader_img" width="474" height="474" />
            <div className="leader_content">
                <div className="border_diamond"></div>
                <div className="leader_name">Rajesh Mandawewala</div>
                <div className="leader_designation">Group MD, Welspun World</div>
            </div>
        </div>
        <div className="leader_box">
            <img src="/images/about/leadership/img_3.webp" alt="" className="leader_img" width="474" height="474" />
            <div className="leader_content">
                <div className="border_diamond"></div>
                <div className="leader_name">Dipali Goenka</div>
                <div className="leader_designation">MD and CEO, Welspun Living Ltd.</div>
            </div>
        </div>
    </div>
    <div className="square_box square_box_21"></div>
</section>
<section data-section="vision_container" className="vision_container">
    <div className="section_container">
        <h2 className="diamond diamond_blue">VISION</h2>
        <div className="subtitle_60 mgt26">
            Winning over the world <br />
            one room at a time
        </div>
        <div className="vision_diamond">
            <div className="border_diamond"></div>
        </div>
    </div>
    <img src="/images/about/modern_entry.webp" alt="" className="entry_img" width="648" height="505" />
    <img src="/images/about/globe.webp" alt="" className="main_vision_img" width="1099" height="844" />
</section>
<section data-section="purpose_container" className="purpose_container bg_f8">
    <div className="section_container">
        <h2 className="diamond diamond_blue">PURPOSE</h2>
        <div className="subtitle_60 mgt26">
            We are here to empower people to <br />
            delightfully reimagine their living <br />
            experiences, effortlessly.
        </div>
    </div>
    <img src="/images/about/mother_daughter.webp" alt="" className="purpose_img" width="1301" height="872" />
    <div className="purpose_look">
        <div className="purpose_text">
            See how <br />
            your space can look <br />
            different using our <br />
            visualizer
        </div>
        <a href="" className="view_link whiteBg" >
            <div className="link_cta">
                <div className="arrow_bg">
                    <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                </div>
                <span>EXPLORE NOW</span>
            </div>
        </a>
    </div>
</section>

<AboutHistory />
<ContactForm />
    
</div>
  );
}
