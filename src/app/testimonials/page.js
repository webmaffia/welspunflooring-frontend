import ContactForm from "../component/homepage/contactus";
import TestimonialVideo from "../component/testimonials/testimonialVideos";


export default async function testimonialPage() {
    async function getHomepageData(segment) {
        const res = await fetch(
          `https://staging-cms.welspunflooring.com/api/homepage?populate[${segment}][populate]=testimonial.image`,      { cache: 'no-store' } // Ensures no caching for SSR, can be removed if caching is preferred
        );
      
        const data = await res.json();
        return data?.data?.attributes?.[segment] || [];
      }
      const allData = await getHomepageData('default');
  
      // Define visuliserSection with a default empty array to avoid 'undefined' errors
      const testimonialData = allData.length
        ? allData.filter((section) => section.__component === 'sections.testimonials')
        : [];

        const testimonials = testimonialData[0];
  return (

    <div className="product_wrapper">
       <section className="banner inner_banner">
    <picture>
        <source media="(max-width:540px)" srcset="/images/testimonial/banner_mob.webp" />
        <img src="/images/testimonial/banner.webp" alt="" width="1920" height="472" />
    </picture>
    <div className="inner_content">
        <h1 className="banner_heading">Floored by Welspun</h1>
    </div>
</section>

<TestimonialVideo />
<section data-section="testimonial_feature" className="testimonial_feature">
    <div className="feature_container">
        <div className="section_container">
            <h2 className="diamond diamond_blue">FEATURED TESTIMONIALS</h2>
            <div className="title_container">
                <div className="subtitle_60">
                    Spreading smiles, <br />
                    one tile at a time.
                </div>
            </div>
        </div>
        <div className="feature_detail">
            <p className="feature_para">
                Nothing inspires us more to keep innovating and exploring new flooring <br />
                technologies than the joyof our customers. Their needs and expectations <br />
                always have and will continue to be at the heart of everything that comprises <br />
                Welpsun Flooring.
            </p>
            <p className="feature_para">
                Here's to looking back at all the homes and businesses we transformed over <br />
                the years.
            </p>
            <div className="about_diamond">
                <div className="border_diamond"></div>
            </div>
        </div>
    </div>
    <img src="/images/testimonial/room.webp" alt="" className="feature_img" width="1167" height="666" />
    <div className="square_box square_box_22"></div>
</section>
			{/* <?php require_once 'testimonial/video-testimonial.php'; ?> */}
			<section data-section="testimonial_section" className="testimonial_section">
    <div className="testimonial_heading">
        <div className="diamond_title">
            <h2 className="subtitle_45">Testimonials</h2>
        </div>
    </div>
    <div className="testimonial_details">

    {testimonials.testimonial.map((testimonial, index) => (
                            

<div className="testimonial_box" key={index}>
<img src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${testimonial.image.data.attributes.url}`}

alt="" className="testimonial_img" width="542" height="542" />
<div className="about_diamond">
    <div className="border_diamond"></div>
</div>
<div className="box_para">
    <div className="testimonial_para">
    {testimonial.description.map((item, index) => (
                                        <div key={index}>
                                            {item.children.map((child, childIndex) => (
                                                <span key={childIndex}>{child.text}</span>
                                            ))}
                                        </div>
                                    ))}
    </div>
</div>
<div className="testimonial_text">
    <div className="testimonial_name">{testimonial.testimonialName}</div>
    {/* <div className="testimonial_city">Levana Suites, Lucknow</div> */}
</div>
</div>
                        ))}
     
      
    </div>
    <div className="square_box square_box_22_2"></div>
</section>

   <ContactForm />
</div>
  );
}
