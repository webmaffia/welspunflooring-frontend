import Image from 'next/image';
import Link from 'next/link';
import PartnerSection from '../component/homepage/partners';
import ContactForm from '../component/homepage/contactus';

export default function ApplicationPage() {
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

      <section className="app_detail">
        {[
          { title: "Home", imgSrc: "/images/app/detail/img-1.webp", desc: "Every home has a different vibe, and it starts from the flooring tiles for homes to the paint on the walls, the décor, etc. that lend uniqueness to the interior space. When it’s about tiles for homes, Welspun flooring offers flooring solutions for different spaces. Be it living room floor tiles, floor tiles for balcony and terrace areas, or flooring tiles for other rooms, Welspun Flooring offers one of the best flooring for house solutions. These include interlocking tiles for flooring like Click-N-Lock Tiles, Wall to Wall Carpet for a plush, cozy, and well-designed space to Greens that are much like real grass for terrace areas and timeout spaces. Take a look at how Welspun flooring solutions have elevated the look and feel of different homes. If you’d like to see how our products would look in your space, visit here.", link: "#" },
          { title: "Corporate Offices", imgSrc: "/images/app/detail/img-2.webp", desc: "Be it a modern interior theme or colours that reflect the company’s branding, Welspun Flooring has a variety of office flooring tile solutions that elevate the experience of the space. These flooring solutions offer several features that are made keeping in mind different office spaces. You can choose from a wide collection of office carpet flooring designs that are made using highly resilient fibres, are easy to install and maintain. These office carpet tiles are also stain-resistant, anti-microbial and have comfortile backingTM that offers extra levels of acoustic and ergonomic support. You can preview Welspun Carpet tiles for office spaces using our visualizer to will help you shortlist the design that works best for you.", link: "#" },
          { title: "Hotels", imgSrc: "/images/app/detail/img-3.webp", desc: "Hotels are spaces that reflect luxury, comfort, aesthetics, and more! How many times have you noticed hotel flooring and took out your phone for a quick photograph? Depending on the type of hotel - luxury, heritage, budget, etc. you’d come across different types of hotel flooring that range from classic woody themes to more heritage-looking tiles to carpets that exude panache. Welspun Flooring solutions like Wall to Wall carpets, Carpet Tiles, Greens and even Click-N-Lock tiles are a great option for you to explore for different areas of the hotel. To get inspired by more hotel flooring ideas, use our visualiser to see which of our designs works in your favour for your hotel flooring.", link: "#" },
          { title: "Restaurants", imgSrc: "/images/app/detail/img-4.webp", desc: "A space that ideally should remind you of mouthwatering food and ambiance that one would love to revisit time and again! It is most often the attention to detail that leaves a lasting impression with those who walk into restaurants. Have you caught yourself noticing restaurant flooring tiles and appreciated something unique? Restaurant flooring design without fail adds a lot to the experience. The background in many food photography moments, and moments where families and friends are captured, restaurant floor tile designs have a big role to play. Welspun Flooring solutions have made their way into many restaurants with their features and designs. Be it Click-N-Lock tiles – Wood style, Stone style or any other, Carpet tiles, Wall to Wall carpets, Greens or MultiStile, we have many design and flooring choices for you. View it in your space through our visualiser and help yourself with the product and design that matches your sensibilities.", link: "#" },
          { title: "Schools", imgSrc: "/images/app/detail/img-5.webp", desc: "Schools are places with mostly heavy footfall, with children being themselves - staining floors, sitting on them, running/ walking around, etc. This makes it important to choose the right products that are safe and maintain hygiene. Flooring products that offer acoustic absorption can also be a suitable choice for flooring solutions in schools. Welspun Flooring offers a range of flooring products to meet different requirements in terms of features and designs. Click on our visualiser to find the befitting flooring product for your school space and make the right choice", link: "#" },
          { title: "Events & Exhibitions", imgSrc: "/images/app/detail/img-6.webp", desc: "Events and exhibitions can mean tighter timelines, quick turnarounds, professional aesthetics, and designs that are in tune with a pre-decided theme. Out of the many flooring solutions, Welspun Flooring’s Wall to Wall Carpet or commonly called Broadloom Carpets make it easy to cover event and exhibition space: there are many design options to choose from. Features like - it being colourfast to light, stain retardant, offering sound insulation, heat insulation, anti-flammability, etc. and that it is made for moderate to heavy footfall while being easy to maintain can prove it to be the ideal option for such spaces. If you want to take a look at our products and the design collection, use our visualiser to shortlist your favorite flooring product.", link: "#" },
          { title: "Gyms & Recreational Areas", imgSrc: "/images/app/detail/img-7.webp", desc: "Places where gym training and other forms of recreational activities take place do need specific kinds of flooring. Gym flooring would need to be durable and ready for moderate to heavy footfall, gym flooring tiles with cushioning would be preferred along with acoustic features. When shortlisting gym flooring options, hygiene and easy maintenance should also be considered. For those browsing mat flooring for gym, gym rubber flooring, rubber tiles for recreational areas, take a look at Welspun Flooring solutions. Our products like Wall to Wall carpets, Carpet Tiles, Greens, etc are packed with features that cater to gyms & recreational areas. Take a look at our product and design collection to know more about the flooring solution that suits your space or virtually see which of our products looks the best in your space using our visualiser.", link: "#" },
          { title: "Others", imgSrc: "/images/app/detail/img-8.webp", desc: "Welspun flooring products offer several features that work in favour of different spaces. If the space you are looking for is not mentioned above, get in touch with us to know more about how Welspun Flooring can meet the requirements of your space. You may also begin by exploring our flooring products like Click-N-Lock Tiles – Wood & Stone, Wall to Wall Carpets, Carpet Tiles, MultiStile and Greens. Our visualiser will help you see how the shortlisted Welspun product looks in your space, and our budget calculator will help you get a fair quote. Feel free to get in touch with us today!", link: "#" },
          // Add more categories as needed
        ].map((item, index) => (
          <div key={index} className="app_detail__container">
            <div className="app_title">
              <div className="subtitle_35">{item.title}</div>
              <div className="border_diamond"></div>
            </div>
            <Image src={item.imgSrc} alt={item.title} width={692} height={471} />
            <p>{item.desc}</p>
            <Link href={item.link} className="view_link purpleBg">
              <div className="link_cta">
                <div className="arrow_bg">
                  <Image src="/images/icons/arrow-2.webp" alt="Arrow" width={20} height={17} />
                </div>
                <span>EXPLORE MORE</span>
              </div>
            </Link>
          </div>
        ))}
      </section>

      <PartnerSection />
      <ContactForm />
    </div>
  );
}
