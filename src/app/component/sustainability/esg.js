import Image from 'next/image';

const ESG = () => {
  return (
    <section data-section="esg_section" className="esg_section">
      <div className="esg_head">
        <div className="section_container">
          <h2 className="diamond diamond_blue">ENVIRONMENT, SOCIAL & GOVERNANCE</h2>
          <div className="title_container">
            <div className="subtitle_60">ESG Compass</div>
          </div>
        </div>
        <Image
          src="/images/sustainability/esg_compass.webp"
          alt="ESG Compass"
          className="esg_compass"
          width={1376}
          height={899}
        />
        <Image
          src="/images/sustainability/esg_leaf.webp"
          alt="ESG Leaf"
          className="esg_leaf"
          width={584}
          height={568}
        />
        <div className="square_box square_box_25"></div>
      </div>
      <div className="esg_data_container">
        <div className="esg_data">
          <div className="install_tile_container">
            <div className="install_tile_title subtitle_60">
              ESG data tracking and reporting <br />
              with cutting-edge technology
            </div>
            <div className="install_tile_para">
              As a part of the commitment to upholding the highest ESG standards, Welspun World has executed a new technological tool for ESG <br />
              reporting and data monitoring called the 'ESG Compass'. ESG Compass takes care of performance data collection through all the <br />
              Group's business entities and sites/plants. Data is securely gathered and collated throughout 30+ ESG KPIs in the E, S, and G domains. <br />
              Vital KPIs include electricity and fuel consumption, waste generation. GHG emissions, environmental emissions, governance <br />
              parameters, diversity ratios, and more. ESG Compass streamlines reporting to all stakeholders on the Group's ESG metrics, while using <br />
              a maker-checker framework for capturing data with complete traceability. SAP helps automate data collection while providing scope <br />
              for individual data entry. And that's not all; there is a helpful dashboard outlining the Group's shift towards de-carbonization in <br />
              relation to Scope 1, 2, and 3 emissions.
            </div>
          </div>
        </div>
        <div className="esg_commitment">
          <Image
            src="/images/sustainability/commitment.webp"
            alt="Welspun's Commitment"
            className="commitment_img"
            width={263}
            height={215}
          />
          <div className="install_tile_container">
            <div className="install_tile_title subtitle_60">Welspun's Commitment</div>
            <div className="install_tile_para">
              We're already on course towards mainstreaming our ESG blueprint while you're reading this! We have been integrating consumer-driven and <br />
              innovation-led ESG initiatives into our operational paradigms for a long time now, inspired by our proactive & committed leadership team. Our <br />
              global home textiles presence is just the tip of the iceberg. We are now focusing on syncing with global best practices on ESG, with higher <br />
              transparency, better social and community outreach, and environmental protection measures. What better way to spread a few smiles, do some <br />
              good, and take our business into the next-gen terrain of social responsibility and commitment?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESG;
