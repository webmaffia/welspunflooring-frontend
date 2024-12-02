import Image from 'next/image';
import Link from 'next/link';
import PartnerSection from '../component/homepage/partners';
import ContactForm from '../component/homepage/contactus';
import ApplicationDetails from '../component/application';
import { fetchApplications } from '../utils/applicationData';
import Testimonials from '../component/global/testimonials/testimonials';
import Partners from '../component/global/partners/partners';

export async function generateMetadata() {
  return {
    title: "Welspun Flooring - Applications",
    description: "Every space demands a unique aesthetic that also caters to the functional needs of the space.",
  }
}

export default async function ApplicationPage() {
  const data = await fetchApplications();
  return (
    <div className="application_wrapper">
      <section className="banner inner_banner">
        <picture>
          <source media="(max-width:540px)" srcSet="/images/app/banner_mob.webp" />
          <Image src="/images/app/banner.webp" alt="Banner" width={1920} height={472} />
        </picture>
        <div className="inner_content">
          <h1 className="banner_heading">Versatile products <br />& designs.</h1>
          <div className="banner_sub_heading">Suitable for different spaces.</div>
        </div>
      </section>

      <section data-section="about_app" className="about_app">
        <div className="products_container">
          <div className="section_container">
            <h2 className="subtitle_45">
              Every space demands <br />
              a unique aesthetic that also <br />
              caters to the functional <br />
              needs of the space.
            </h2>
          </div>
          <div className="about_right_container">
            <p>
              Every space demands a unique aesthetic that also caters to the functional needs of the space.
              Welspun Flooring's product range includes Click-N-Lock Tiles, Carpet Tiles, Wall to Wall and Greens,
              catering to different industry requirements. With a wide range of design collections, each product
              category has something unique to offer. Take a look at how spaces looked and felt different with
              Welspun Flooring products.
            </p>
          </div>
        </div>
      </section>

   <ApplicationDetails applications={data} />

   <Testimonials />

   <Partners />

      {/* <PartnerSection /> */}
      <ContactForm />
    </div>
  );
}
