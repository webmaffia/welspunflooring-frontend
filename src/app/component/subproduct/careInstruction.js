import React from 'react';

const CareInstructions = ({ product }) => {
  // Extract the first care instruction item
  const careInstruction = product.attributes.careInstruction?.[0];

  if (!careInstruction) {
    return null; // Return nothing if there is no care instruction data
  }

  return (
    <section data-section="care_instruct" className="care_instruct">
      <div className="section_container">
        <h2 className="diamond diamond_blue">
          {careInstruction.sectionName}
        </h2>
        <div className="title_container">
          <h3 className="subtitle_60">
            {careInstruction.heading.map((item, index) => (
              <div key={index}>
                {item.children.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </div>
            ))}
          </h3>
        </div>
      </div>
      <div className="care_container">
        <div className="about_features">
          {careInstruction.point.map((item, index) => (
            <div className="about_feature_box border_bg" key={index}>
              <div className="border_diamond"></div>
              <div className="subtitle_20">
                {item.point.map((point, index) => (
                  <span key={index}>
                    {point.children.map((child, childIndex) => (
                      <span key={childIndex}>{child.text}</span>
                    ))}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareInstructions;
