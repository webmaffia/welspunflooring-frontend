import Image from 'next/image';

const ZeroWaste = () => {
  return (
    <section data-section="install_carpet" className="install_tile sustainable_zero">
      <div className="installation_container row_reverse">
        <Image
          src="/images/sustainability/zero/waste.webp"
          alt="Zero Waste"
          className="install_tile_img"
          width={849}
          height={565}
        />
        <div className="install_tile_container">
          <h2 className="install_tile_title subtitle_60">Zero Waste</h2>
          <div className="install_tile_para">
            We at Welspun Flooring have adopted the principle of <br />
            responsible management of all types of process waste <br />
            since the inception of the facility. We ensure that our <br />
            material management is handled responsibly towards a <br />
            circular economy for all process-generated wastes. Our <br />
            manufacturing facility operates in a zero waste to landfill <br />
            principle, and this is not restricted to processing wastes <br />
            alone but is extended across the entire operations.
          </div>
          <div className="about_diamond">
            <div className="border_diamond"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroWaste;
