import Link from "next/link";
import React, { useState } from "react";

const ClickTiles = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section data-section="click_tiles" className="click_tiles">
      <div className="click_tabs_container">
        <div className="scroll_tabs">
        <a
          href="#"
          className={`subtitle_2806 click_tab ${activeTab === "1" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleTabClick("1");
          }}
          data-click="1"
        >
          Click-N-Lock Tiles Wood
        </a>
        <a
          href="#"
          className={`subtitle_2806 click_tab ${activeTab === "2" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleTabClick("2");
          }}
          data-click="2"
        >
          Click-N-Lock Tiles Stone
        </a>
        <a
          href="#"
          className={`subtitle_2806 click_tab ${activeTab === "3" ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleTabClick("3");
          }}
          data-click="3"

          
        >
          MultiStile 
        </a>
        </div>
      </div>
      <div className="click_tiles_wrapper">
        <div
          className={`click_tiles_container ${activeTab === "1" ? "active" : ""}`}
          id="click-1"
        >
          <picture>
            <source
              media="(max-width: 540px)"
              srcSet="assets/images/homeowners/tabs/mob_banner_1.webp"
            />
            <img
              src="/images/homeowners/wood.webp"
              alt=""
              className="tiles_banner"
            />
          </picture>
          <div className="click_tiles_content">
            <h2 className="subtitle_60">Click-N-Lock Tiles Wood</h2>
            <p className="para">
              The interlocking tiles bring with them convenience, power-packed features and
              spectacular textures and designs in wood style. These are wooden Stone Polymer
              Composite (SPC) flooring
              designs. For those who like their spaces to carry a warm and woody theme, there
              are a variety of wood-style finish interlocking tiles to choose from, like Teak Wood,
              Oak Wood, Walnut Wood, etc.
            </p>
            <p className="para">
              It is based on Wel-LockTM technology that allows the tiles to fit into one another in
              a unique locking mechanism. This removes the need for glue.
            </p>
            <div className="dFlex">
              <Link href="/product/click-and-lock-wood" className="view_link transparentBg">
                <div className="link_cta">
                  <div className="arrow_bg">
                    <img
                      src="/images/icons/arrow-2.webp"
                      alt=""
                      width="20"
                      height="17"
                    />
                  </div>
                  <span>EXPLORE</span>
                </div>
              </Link>
              <Link href="https://staging-cms.welspunflooring.com/uploads/New_CNL_lookbook_Wood_and_Stone_7_bd8b7cf72a.pdf" className="view_link download_cta transparentBg" target="_blank">
                <div className="link_cta">
                  <div className="arrow_bg">
                    <img
                      src="/images/icons/arrow-2.webp"
                      alt=""
                      width="20"
                      height="17"
                    />
                  </div>
                  <span>DOWNLOAD <br /> BROCHURE</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`click_tiles_container ${activeTab === "2" ? "active" : ""}`}
          id="click-2"
        >
          <picture>
            <source
              media="(max-width: 540px)"
              srcSet="assets/images/homeowners/tabs/mob_banner_1.webp"
            />
            <img
             src="/images/homeowners/CNL-Stone.png"
              alt=""
              className="tiles_banner"
            />
          </picture>
          <div className="click_tiles_content">
            <h2 className="subtitle_60">Click-N-Lock Tiles Stone</h2>
            <p className="para">
              The interlocking tiles bring with them convenience, power-packed features and
              spectacular textures and designs in stone style. These are Stone Polymer
              Composite (SPC) flooring
              designs. For those who like their spaces to carry a classic stone aesthetic, there
              are a variety of stone-style finish interlocking tiles to choose from.
            </p>
            <p className="para">
              It is based on Wel-LockTM technology that allows the tiles to fit into one another in
              a unique locking mechanism. This removes the need for glue.
            </p>
            <div className="dFlex">
              <Link href="/product/click-and-lock-stone" className="view_link transparentBg">
                <div className="link_cta">
                  <div className="arrow_bg">
                    <img
                      src="/images/icons/arrow-2.webp"
                      alt=""
                      width="20"
                      height="17"
                    />
                  </div>
                  <span>EXPLORE</span>
                </div>
              </Link>
              <Link href="https://staging-cms.welspunflooring.com/uploads/New_CNL_lookbook_Wood_and_Stone_7_bd8b7cf72a.pdf" className="view_link download_cta transparentBg" target="_blank">
                <div className="link_cta">
                  <div className="arrow_bg">
                    <img
                      src="/images/icons/arrow-2.webp"
                      alt=""
                      width="20"
                      height="17"
                    />
                  </div>
                  <span>DOWNLOAD <br /> BROCHURE</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`click_tiles_container ${activeTab === "3" ? "active" : ""}`}
          id="click-3"
        >
          <picture>
            <source
              media="(max-width: 540px)"
              srcSet="assets/images/homeowners/tabs/mob_banner_1.webp"
            />
            <img
             src="/images/homeowners/Multistile.png"
              alt=""
              className="tiles_banner"
            />
          </picture>
          <div className="click_tiles_content">
            <h2 className="subtitle_60">MultiStile</h2>
            <p className="para">
            A great choice when you are looking to redo your flooring without compromising on aesthetics. MultiStile offers convenience as you can apply it within 24 hours*. It also allows for multi-surface application with benefits like durability, waterproof surface, scratch and stain resistance, and more. You can shortlist MultiStile for different spaces in your home: living room, bedrooms, kitchen, work from home rooms, etc. Welspun Flooring also helps out with expert installation to ease the process.
            </p>
        
            <div className="dFlex">
              <Link href="/product/multistile" className="view_link transparentBg">
                <div className="link_cta">
                  <div className="arrow_bg">
                    <img
                      src="/images/icons/arrow-2.webp"
                      alt=""
                      width="20"
                      height="17"
                    />
                  </div>
                  <span>EXPLORE</span>
                </div>
              </Link>
              <Link href="https://staging-cms.welspunflooring.com/uploads/Multistile2_0_look_Book_v1_5e57a3b817.pdf" className="view_link download_cta transparentBg" target="_blank">
                <div className="link_cta">
                  <div className="arrow_bg">
                    <img
                      src="/images/icons/arrow-2.webp"
                      alt=""
                      width="20"
                      height="17"
                    />
                  </div>
                  <span>DOWNLOAD <br /> BROCHURE</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClickTiles;
