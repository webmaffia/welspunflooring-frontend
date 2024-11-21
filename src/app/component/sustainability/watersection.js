const WaterSection = () => {
    return (
      <section data-section="water_section" className="sustainable_pollution">
        <div className="section_container">
          <div className="diamond diamond_blue">WATER</div>
          <div className="title_container">
            <div className="subtitle_60">
              What would you rather imagine: <br />
              a world with water scarcity or <br />
              a world with clean water for all?
            </div>
            <p className="install_para">
              It is this thought that drives us towards increasing our conservation efforts
            </p>
          </div>
          <div className="pollution_container">
            <img
              src="/images/sustainability/water.webp"
              alt=""
              className="pollution_img"
              width="1361"
              height="600"
            />
            <div className="install_tile_container">
              <h2 className="install_tile_title subtitle_60">
                Here's what we're doing in this regard:
              </h2>
              <div className="diamond_container">
                <div className="diamond_border_title">
                  Judicious and careful water use in processing operations.
                </div>
                <div className="diamond_border_title">
                  Innovative water management project at Anjar with 40 MLD sewage treatment plant for recycling purposes. <br />
                  In a prime example of sustainability, the project is a partnership with the Anjar, Adipur, <br />
                  and Gandhidham local municipalities.
                </div>
                <div className="diamond_border_title">
                  We collect, transport and treat public sewage at the plant and use the treated water for our operations <br />
                  thereby recycling close to 7 billion litres of sewage water every year!
                </div>
                <div className="diamond_border_title">
                  We are also focused on lowering our water intensity/kg of processed items, taking it lower <br />
                  than the average threshold in the Industry.
                </div>
                <div className="diamond_border_title">
                  We've set up a rainwater harvesting pond at Anjar, enhancing availability not only for us, <br />
                  but the entire local community as well. In fact, the project is steadily attracting migratory birds, turning <br />
                  into a pleasing biodiversity hub in its own right.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="square_box square_box_26"></div>
      </section>
    );
  };
  
  export default WaterSection;
  