import React from "react";

const B2BProject = () => {
  const products = [
    {
      image: "/images/app/detail/img-1.webp",
      alt: "Click-N-Lock Stone",
      title: "Click-N-Lock Stone",
      description:
        "Wet-Lock technology-enabled Click-N-Lock Stone Tiles make upgrading to new flooring in commercial spaces possible within hours. The process is convenient as the installation is noise and dust-free."
    },
    {
      image: "/images/app/detail/img-2.webp",
      alt: "Click-N-Lock Wood",
      title: "Click-N-Lock Wood",
      description:
        "Click-N-Lock Wood Tiles offer the convenience of flooring upgrades for offices and other commercial spaces within 24 hours with the aesthetics of wood flooring."
    },
    {
      image: "/images/app/detail/Hotel.webp",
      alt: "Carpet Tiles",
      title: "Carpet Tiles",
      description:
        "Carpet Tiles as a flooring solution for business areas offer impeccable aesthetics, functionality, and durability. There's a range of designs to suit different spaces."
    },
    {
      image: "/images/app/detail/img-4.webp",
      alt: "Wall to Wall",
      title: "Wall to Wall",
      description:
        "Wall to Wall carpet flooring is designed with advanced printing and colour-fast technology that promises customisability and longevity when it comes to colour and texture. Mostly seen in hospitality, entertainment."
    },
    {
      image: "/images/app/detail/School.webp",
      alt: "Greens",
      title: "Greens",
      description:
        "Just like real grass but with less maintenance and more durability, Welspun Flooring's Greens is a great option for vertical landscaping, designing recreational areas, and timeout zones in commercial spaces."
    },
    {
      image: "/images/app/detail/img-6.webp",
      alt: "MultiStile",
      title: "MultiStile™",
      description:
        "Introducing MultiStile™ flooring solutions for business spaces that offer customisable laying patterns and versatile multi-surface applications that add more value to the product, and spaces."
    }
  ];

  return (
    <section className="b2b_detail">
      <div className="diamond_title">
        <h2 className="diamond diamond_blue">PRODUCTS</h2>
      </div>
      <div className="app_detail b2b_detail_container">
        {products.map((product, index) => (
          <a href="#" className="app_detail__container" key={index}>
            <div className="b2b_detail_img">
              <img src={product.image} alt={product.alt} width="692" height="471" />
            </div>
            <div className="app_title">
              <h3 className="subtitle_35">{product.title}</h3>
              <div className="border_diamond"></div>
            </div>
            <p className="para">{product.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default B2BProject;
