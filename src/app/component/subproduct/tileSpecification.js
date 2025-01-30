// components/TileSpecification.js
import Image from 'next/image';

const TileSpecification = ({specifications}) => {


  return (
    <section data-section="tile_specification" className="tile_specification">
      <div className="diamond_title">
        <h2 className="diamond diamond_blue">TILE SPECIFICATIONS</h2>
      </div>
      <div className="specified_tiles">
      {specifications.attributes.specification.slice(0, 6).map((spec, index) => (
  <div className="specified_detail" key={index}>
   {spec?.icon?.data?.attributes?.url && (
  <Image
    src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${spec?.icon?.data?.attributes?.url}`}
    alt={spec.title}
    width={84}
    height={81}
  />
)}

    <div className="specified_title">
      {spec.title?.map((point, index) => (
        <span key={index}>
          {point.children?.map((child, childIndex) => (
            <span key={childIndex}>{child.text}</span>
          ))}
        </span>
      ))}
    </div>
    <div className="specified_text">{spec.value}</div>
  </div>
))}

      </div>
    </section>
  );
};

export default TileSpecification;
