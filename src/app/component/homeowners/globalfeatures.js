"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const GlobalFeatures = ({ slug = "click-and-lock-wood" }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [patternedFeatures, setPatternedFeatures] = useState([]);
  const [activeFeature, setActiveFeature] = useState(null); // Ensure consistent hook usage

  // Fetch Product Feature Data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products?filters[slug][$eq]=${slug}&populate[feature][populate]=feature.icon,feature.banner,feature.mobileBanner`
        );
        if (res.data.data.length > 0) {
          const productData = res.data.data[0];
          setProduct(productData);

          // Process features
          const features = productData.attributes.feature.feature || [];
          setPatternedFeatures(getPatternedFeatures(features));
        }
      } catch (error) {
        console.error("Error fetching product features:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  // Once `patternedFeatures` is set, initialize `activeFeature`
  useEffect(() => {
    if (patternedFeatures.length > 0) {
      const firstContentFeature = patternedFeatures.find((item) => item.type === "content")?.dataFeature;
      if (firstContentFeature) {
        setActiveFeature(firstContentFeature);
      }
    }
  }, [patternedFeatures]);

  if (loading) return <p>Loading features...</p>;
  if (!product) return <p>No features available.</p>;

  function getPatternedFeatures(features) {
    const totalItems = 11;
    const patterns = {
      4: [null, "content", null, "content", null, null, null, "content", null, "content", null],
      6: ["content", null, "content", null, "content", null, "content", null, "content", null, "content"],
      8: ["content", "content", null, "content", "content", null, "content", "content", null, "content", "content"],
      10: ["content", "content", "content", "content", "content", null, "content", "content", "content", "content", "content"],
    };

    const pattern = patterns[features.length] || Array(totalItems).fill(null);
    const result = [];
    let contentIndex = 0;
    let dataFeature = 1;

    for (let i = 0; i < totalItems; i++) {
      if (i === 5) {
        result.push({ type: "blank", dataFeature });
      } else if (pattern[i] === "content" && contentIndex < features.length) {
        result.push({ type: "content", feature: features[contentIndex], dataFeature });
        contentIndex++;
      } else {
        result.push({ type: "blank", dataFeature });
      }
      dataFeature++;
    }

    return result;
  }

  const handleMouseEnter = (featureIndex) => {
    setActiveFeature(featureIndex);
  };

  return (
    <section data-section="product_feature" className="product_feature">
      <div className="product_bg">
        {patternedFeatures.map((item, index) =>
          item.type === "content" ? (
            <picture
              className={`product_picture ${activeFeature === item.dataFeature ? "active" : ""}`}
              id={`feature-${item.dataFeature}`}
              key={item.feature.id}
            >
              <source
                media="(max-width:540px)"
                srcSet={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.feature.mobileBanner?.data?.attributes?.url}`}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.feature.banner?.data?.attributes?.url}`}
                alt={item.feature.altText}
                width={item.feature.width}
                height={item.feature.height}
              />
            </picture>
          ) : (
            <div key={index} id={`feature-${item.dataFeature}`} className="product_picture blank"></div>
          )
        )}
      </div>

      <div className="product_feature_container">
        <h2 className="subtitle_60">FEATURES</h2>
        <div className="product_feature_box">
          {patternedFeatures.map((item, index) => (
            <div
              key={index}
              className={`product_feature_item ${item.type === "content" && activeFeature === item.dataFeature ? "active" : ""}`}
              data-feature={item.dataFeature}
              onMouseEnter={() => item.type === "content" && handleMouseEnter(item.dataFeature)}
            >
              {item.type === "content" ? (
                <>
                  <div className="feature_front">
                    <div>
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.feature.icon?.data?.attributes?.url}`}
                        alt={item.feature.name[0].children[0].text}
                        width="96"
                        height="96"
                      />
                      <h3 className="subtitle_30">{item.feature.name[0].children[0].text}</h3>
                      <a href="#" className="know_feature">
                        Know More
                      </a>
                    </div>
                  </div>
                  <div className="feature_back">
                    <div className="subtitle_30">{item.feature.name[0].children[0].text}</div>
                    <div className="para_content">
                      <p>{item.feature.details[0].children[0].text}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="product_feature_item blank"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFeatures;
