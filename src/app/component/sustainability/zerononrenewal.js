import Image from 'next/image';

const ZeroNonRenewableEnergy = () => {
  return (
    <section data-section="install_wall" className="install_tile sustainable_zero">
      <div className="installation_container row_reverse">
        <Image
          src="/images/sustainability/zero/non-renewable-energy.webp"
          alt="Zero Non-Renewable Energy"
          className="install_tile_img"
          width={849}
          height={565}
        />
        <div className="install_tile_container">
          <div className="install_tile_title subtitle_60">Zero Non-Renewable Energy</div>
          <div className="install_tile_para">
            To streamline our work towards sustainability, we have <br />
            shifted a part of our energy dependency from <br />
            conventional power generation to renewable energy. At <br />
            present, over 15% of our total energy is sourced from <br />
            renewable inputs. We aim to increase this dependency to <br />
            100% renewable sources by 2030.
          </div>
          <div className="about_diamond">
            <div className="border_diamond"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroNonRenewableEnergy;
