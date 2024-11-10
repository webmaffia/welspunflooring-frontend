import Image from 'next/image';

const Environment = () => {
  return (
    <section data-section="environment" className="environment">
      <picture>
        <source
          media="(max-width:540px)"
          srcSet="/images/sustainability/environment_mob.webp"
        />
        <Image
          src="/images/sustainability/environment.webp"
          alt="Environment"
          width={1920}
          height={781}
        />
      </picture>
      <div className="environment_container">
        <div className="environment_text">
          <div className="subtitle_5675">Environment</div>
          <div className="subtitle_5675">Social</div>
          <div className="subtitle_5675">Governance</div>
        </div>
        <div className="environment_para">
          All of us have the pivotal responsibility of passing on a healthy environment to our future generations. We have <br />
          concentrated our efforts in crucial areas, segregating them into Water, Air, and Land. Our core motto is the <br />
          restoration of the ecosystem and the maintenance of ecological balance. Our ESG strategy neatly aligns with our <br />
          core philosophy of inclusivity. Here's taking a look:
        </div>
      </div>
    </section>
  );
};

export default Environment;
