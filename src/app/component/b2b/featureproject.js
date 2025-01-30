import React from "react";

const FeatureProjects = () => {
  const projects = [
    { id: 1, title: "Hospitality", image: "/images/projects/img_1.webp" },
    { id: 2, title: "Entertainment", image: "/images/projects/img_2.webp" },
    { id: 3, title: "Commercial", image: "/images/projects/img_3.webp" },
    { id: 4, title: "Restaurant", image: "/images/projects/Restaurant.png" },
    
  ];

  return (
    <section className="our_products feature_projects">
      <div className="section_container">
        <div className="diamond diamond_blue">FEATURED PROJECTS</div>
        <div className="title_container">
          <h1 className="subtitle_60">
            Spaces created using <br /> Welspun Flooring solutions
          </h1>
          <div className="product_list">
            <div className="product_tile more_products">
              <div className="product_container">
                <div className="product_tile_box">
                  {projects.map((project) => (
                    <div className="tile_item" key={project.id}>
                      <div className="product_img_box">
                        <img
                          src={project.image}
                          alt={project.title}
                          width="344"
                          height="311"
                          className="tile_img"
                        />
                      </div>
                      <div className="subtitle_25">{project.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;
