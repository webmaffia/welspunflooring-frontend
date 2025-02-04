import React, { useState } from "react";

const B2BSustainableTabs = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section data-section="b2b_sustainable" className="b2b_sustainable">
      <div className="section_container">
        <div className="diamond diamond_blue">SUSTAINABILITY</div>
        <p className="para">
          We make sure to be a part of the sustainable story for a better future. <br />
          Welspun flooring products are certified sustainable by experts.
        </p>
      </div>
      <div className="sustainable_container">
        <div className="sustainable_tabs">
          <div className="sustainable_tabs">
            
          <button
            className={`subtitle_30 ${activeTab === "1" ? "active" : ""}`}
            onClick={() => handleTabClick("1")}
          >
            Click N Lock Certifications
          </button>
          <button
            className={`subtitle_30 ${activeTab === "2" ? "active" : ""}`}
            onClick={() => handleTabClick("2")}
          >
            Carpet Tiles Certifications
          </button>
          <button
            className={`subtitle_30 ${activeTab === "3" ? "active" : ""}`}
            onClick={() => handleTabClick("3")}
          >
            Wall to Wall Certifications
          </button>
          
          </div>
        </div>
        <div className="sustainable_tab_container">
          <div className={`sustainable_tab_box ${activeTab === "1" ? "active" : ""}`} id="box-1">
            <div className="box_container">
              <img src="/images/product/click_n_lock/sustainable_1.webp" alt="" width="179" height="183" />
              <img src="/images/product/click_n_lock/sustainable_2.webp" alt="" width="179" height="183" />
              <img src="/images/product/click_n_lock/sustainable_3.webp" alt="" width="179" height="183" />
            </div>
          </div>
          <div className={`sustainable_tab_box ${activeTab === "2" ? "active" : ""}`} id="box-2">
            <div className="box_container">
              <img src="/images/product/click_n_lock/sustainable_2.webp" alt="" width="179" height="183" />
              <img src="/images/product/click_n_lock/sustainable_1.webp" alt="" width="179" height="183" />
              <img src="/images/product/click_n_lock/sustainable_3.webp" alt="" width="179" height="183" />
            </div>
          </div>
          <div className={`sustainable_tab_box ${activeTab === "3" ? "active" : ""}`} id="box-3">
            <div className="box_container">
              <img src="/images/product/click_n_lock/sustainable_3.webp" alt="" width="179" height="183" />
              <img src="/images/product/click_n_lock/sustainable_1.webp" alt="" width="179" height="183" />
              <img src="/images/product/click_n_lock/sustainable_2.webp" alt="" width="179" height="183" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSustainableTabs;
