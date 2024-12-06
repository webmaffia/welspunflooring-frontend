"use client"
import { useState } from 'react';

const DocumentMaintenance = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section data-section="document_maintenance" className="document_maintenance">
      <div className="maintenance_container">
        <div className="section_container">
          <h2 className="diamond diamond_blue">MAINTENANCE DOCUMENTS</h2>
        </div>
        <ul className="maintain_list">
          <li
            className={`maintain_tabs ${activeTab === 1 ? 'active' : ''}`}
            data-maintain="1"
            onClick={() => handleTabClick(1)}
          >
            Click N Lock <br />
            MAINTENANCE
          </li>
          <li
            className={`maintain_tabs ${activeTab === 2 ? 'active' : ''}`}
            data-maintain="2"
            onClick={() => handleTabClick(2)}
          >
            CARPET TILES <br />
            MAINTENANCE
          </li>
          <li
            className={`maintain_tabs ${activeTab === 3 ? 'active' : ''}`}
            data-maintain="3"
            onClick={() => handleTabClick(3)}
          >
            WALL TO WALL <br />
            MAINTENANCE
          </li>
          <li
            className={`maintain_tabs ${activeTab === 4 ? 'active' : ''}`}
            data-maintain="4"
            onClick={() => handleTabClick(4)}
          >
            GREENS <br />
            MAINTENANCE
          </li>
        </ul>
      </div>
      <div className="maintenance_types">
        <div className="maintain_result">
          {/* Tab 1 Content */}
          <div
            className={`maintain_item ${activeTab === 1 ? 'active' : ''}`}
            id="maintain-1"
          >
            <div className="maintenance_content">
              <div className="subtitle_40">Tips for Maintenance</div>
              <ul class="diamond_list">
                        <li class="diamond_item">
                            Sweep the floor regularly with a soft bristle broom to remove loose dirt
                        </li>
                        <li class="diamond_item">
                            For everyday maintenance, a mop moistened with warm water will suffice
                        </li>
                        <li class="diamond_item">
                            Spills should be cleaned up immediately
                        </li>
                        <li class="diamond_item">
                            For spot treatment, a diluted 10/1 solution of water/liquid bleach is tolerable for stain removal. A diluted plain vinegar solution of 30:70 (Vinegar:Water) proportion can also be used
                        </li>
                        <li class="diamond_item">
                            Do Not use the following on your Welspun Click N Lock® flooring - Soap based detergents/ Abrasive or Mop & Shine Products/ Floor Wax/ Mineral Oil or Rancid Fluids/ Ammonia or bleaches/ Vacuum cleaner with a rotating beater bar
                        </li>
                    </ul>
              <a href="/CNL-MAINTENANCE.pdf" className="view_link download_cta darkGreyBg">
                <div className="link_cta">
                  <div className="arrow_bg">
                    <img
                      src="/images/icons/arrow-2.webp"
                      alt=""
                      width="20"
                      height="17"
                    />
                  </div>
                  <span>DOWNLOAD NOW</span>
                </div>
              </a>
            </div>
            <div className="maintain_box">
              <img
                src="/images/warranty/document.webp"
                alt=""
                width="627"
                height="617"
                className="maintain_img"
              />
              <div className="maintain_box_text">
                <div className="maintain_box_title">
                  <span className="subtitle_3803">Click N Lock Maintenance</span>
                  <div className="about_diamond">
                    <div className="border_diamond"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab 2 Content */}
          <div
            className={`maintain_item ${activeTab === 2 ? 'active' : ''}`}
            id="maintain-2"
          >
            <div className="maintenance_content">
              <div className="subtitle_40">Tips for Maintenance</div>
              <ul class="diamond_list">
                        <li class="diamond_item">
                            Preventative Maintenance: Containing the soil entering the building using the walk-off mats at entrances. This includes outside matting, inside matting and mats at certain other high traffic areas
                        </li>
                        <li class="diamond_item">
                        Vacuuming: It is the single most important part of a maintenance program designed to remove soil or dust from top surface
                        </li>
                        <li class="diamond_item">
                            Quick removal of spills is key to reduce any chance of stain
                        </li>
                        <li class="diamond_item">
                            Interim Cleaning: Several different methods can be used. Regularly scheduled interim cleaning can prolong the need of restorative cleaning
                        </li>
                        <li class="diamond_item">
                            Restorative cleaning: Deep cleaning designed to remove trapped soils. Hot water extraction and encapsulation are the most effective restorative methods
                        </li>
                    </ul>
              <a href="/Carpet-Tiles-MAINTENANCE.pdf" className="view_link download_cta darkGreyBg">
                <div className="link_cta">
                  <div className="arrow_bg">
                    <img
                      src="/images/icons/arrow-2.webp"
                      alt=""
                      width="20"
                      height="17"
                    />
                  </div>
                  <span>DOWNLOAD NOW</span>
                </div>
              </a>
            </div>
            <div className="maintain_box">
              <img
                src="/images/warranty/document.webp"
                alt=""
                width="627"
                height="617"
                className="maintain_img"
              />
              <div className="maintain_box_text">
                <div className="maintain_box_title">
                  <span className="subtitle_3803">Carpet Tiles Maintenance</span>
                  <div className="about_diamond">
                    <div className="border_diamond"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab 3 Content */}
          <div
            className={`maintain_item ${activeTab === 3 ? 'active' : ''}`}
            id="maintain-3"
          >
            <div className="maintenance_content">
              <div className="subtitle_40">Tips for Maintenance</div>
              <ul class="diamond_list">
                        <li class="diamond_item">
                            Preventative Maintenance: Containing the soil entering the building using the walk-off mats at entrances. This includes outside matting, inside matting and mats at certain other high traffic areas
                        </li>
                        <li class="diamond_item">
                            Vaccuming: It is the single most important part of a maintenance program designed to remove soil or dust from top surface
                        </li>
                        <li class="diamond_item">
                            Quick removal of spills is key to reduce any chance of stain
                        </li>
                        <li class="diamond_item">
                            Interim Cleaning: Several different methods can be used. Regularly scheduled interim cleaning can prolong the need of restorative cleaning
                        </li>
                        <li class="diamond_item">
                            Restorative cleaning: Deep cleaning designed to remove trapped soils. Hot water extraction and encapsulation are the most effective restorative methods
                        </li>
                    </ul>

              <a href="/Wall-to-Wall-MAINTENANCE.pdf" className="view_link download_cta darkGreyBg">
                <div className="link_cta">
                  <div className="arrow_bg">
                    <img
                      src="/images/icons/arrow-2.webp"
                      alt=""
                      width="20"
                      height="17"
                    />
                  </div>
                  <span>DOWNLOAD NOW</span>
                </div>
              </a>
            </div>
            <div className="maintain_box">
              <img
                src="/images/warranty/document.webp"
                alt=""
                width="627"
                height="617"
                className="maintain_img"
              />
              <div className="maintain_box_text">
                <div className="maintain_box_title">
                  <span className="subtitle_3803">Tips for Maintenance</span>
                  <div className="about_diamond">
                    <div className="border_diamond"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab 4 Content */}
          <div
            className={`maintain_item ${activeTab === 4 ? 'active' : ''}`}
            id="maintain-4"
          >
            <div className="maintenance_content">
              <div className="subtitle_40">Tips for Maintenance</div>
              <ul class="diamond_list">
                        <li class="diamond_item">
                            Clean- Remove debris from the grass, especially after strong winds. Removing leaves, branches, and other debris will protect your artificial grass from damage.
                        </li>
                        <li class="diamond_item">
                            Rinse the turf regularly. Use a hose with cool, clean water to remove dust and pollen. Use a mild household detergent in case of a stain. If the installed area receives rain often, you won’t have to rinse the grass with a hose nearly as much.
                        </li>
                        <li class="diamond_item">
                            Brush the grass against the grain in high-traffic areas. Cross brushing against the grain will help the grass to avoid becoming matted and keep it looking strong and fresh.
                        </li>
                    </ul>
              <a href="/Greens-Installation-&-Maintenance.pdf" className="view_link download_cta darkGreyBg">
                <div className="link_cta">
                  <div className="arrow_bg">
                    <img
                      src="/images/icons/arrow-2.webp"
                      alt=""
                      width="20"
                      height="17"
                    />
                  </div>
                  <span>DOWNLOAD NOW</span>
                </div>
              </a>
            </div>
            <div className="maintain_box">
              <img
                src="/images/warranty/document.webp"
                alt=""
                width="627"
                height="617"
                className="maintain_img"
              />
              <div className="maintain_box_text">
                <div className="maintain_box_title">
                  <span className="subtitle_3803">Greens Maintenance</span>
                  <div className="about_diamond">
                    <div className="border_diamond"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="square_box square_box_27"></div>
    </section>
  );
};

export default DocumentMaintenance;
