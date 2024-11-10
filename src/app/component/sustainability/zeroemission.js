import Image from 'next/image';

const ZeroEmission = () => {
  return (
    <section data-section="install_wall" className="install_tile sustainable_zero">
      <div className="installation_container">
        <Image
          src="/images/sustainability/zero/emission.webp"
          alt="Zero Emission"
          className="install_tile_img"
          width={849}
          height={565}
        />
        <div className="install_tile_container">
          <div className="install_tile_title subtitle_60">Zero Emission</div>
          <div className="install_tile_para">
            We conduct carbon footprint assessments and energy <br />
            audits to analyze the existing power consumption <br />
            pattern and bring to action the best solution to reduce <br />
            carbon emissions. We have initiated the use of Biogenic <br />
            fuel resources to avoid fossil fuel dependence. Apart <br />
            from the above, activities such as vehicle pooling for <br />
            employee commute, use of electrical equipment for all <br />
            our internal material movement, flexible packing <br />
            material made from recycled content for our final finish <br />
            products are some initiatives aimed at reducing <br />
            emissions.
          </div>
          <div className="about_diamond">
            <div className="border_diamond"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroEmission;
