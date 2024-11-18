import InstallVideo from "../component/warranty/installvideo";
import DocumentMaintenance from "../component/warranty/maintaince";
import TabsComponent from "../component/warranty/maintaince";



export default function warrantyPage() {
  return (

    <div classNameName="product_wrapper warranty_wrapper">
<section className="banner inner_banner">
    <picture>
        <source media="(max-width:540px)" srcset="/images/warranty/mobile.jpg" />
        <img src="/images/warranty/banner.webp" alt="" width="1920" height="472" />
    </picture>
    <div className="inner_content">
        <h1 className="banner_heading">
        Caring 
            
        </h1>
        <div className="banner_sub_heading">For Your
        Floorings</div>
    </div>
</section>
<section data-section="installation_guide" className="installation_guide warranty_maintenance">
    <div className="section_container">
        <h2 className="diamond diamond_blue">WARRANTY & MAINTENANCE</h2>
        <div className="title_container">
            <div className="install_para">
            Our products come with a robust warranty to guarantee their
durability and performance over time. This warranty covers defects in materials
and manufacturing, ensuring that your investment is protected. To keep your products
looking their best, we offer maintenance guidelines that include regular
cleaning, stain removal, and proper installation practices. With proper care,
our products are designed to maintain their appearance and functionality for
years, making them a practical and cost-effective choice for your space.
            </div>
            <div className="about_diamond">
                <div className="border_diamond"></div>
            </div>
        </div>
    </div>
  <InstallVideo />
    <div className="square_box square_box_23"></div>
</section>
<section data-section="document_warranty" className="document_warranty">
    <div className="section_container">
        <div className="title_container">
            <div className="subtitle_60">
                Download the product maintenance & warranty <br />
                related documents below
            </div>
        </div>
        <h2 className="diamond diamond_blue">WARRANTY DOCUMENTS</h2>
    </div>
    <div className="documents_container">
        <a href="/images/warranty/CarpetTiles-WARRANTY.pdf" className="document_box" target="_blank">
            <img src="/images/warranty/icon/15_warranty.webp" alt="" className="document_img" width="183" height="157" />
            <div className="document_text">
                <div className="document_title">CARPET TILES <br />WARRANTY</div>
                <div className="view_link download_cta darkGreyBg">
                    <div className="link_cta">
                        <div className="arrow_bg">
                            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <a href="/images/warranty/Wall-to-Wall-waranty.pdf" className="document_box" target="_blank">
            <img src="/images/warranty/icon/15_warranty.webp" alt="" className="document_img" width="183" height="157" />
            <div className="document_text">
                <div className="document_title">WALL TO WALL <br />WARRANTY</div>
                <div className="view_link download_cta darkGreyBg">
                    <div className="link_cta">
                        <div className="arrow_bg">
                            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <a href="/images/warranty/GENERAL-LIMITED-RESIDENTIAL-WARRANTY-TERMS-welspun.pdf" className="document_box" target="_blank">
            <img src="/images/warranty/icon/5_warranty.webp" alt="" className="document_img" width="183" height="157" />
            <div className="document_text">
                <div className="document_title">CLICK N LOCK <br />RESIDENTIAL <br />WARRANTY</div>
                <div className="view_link download_cta darkGreyBg">
                    <div className="link_cta">
                        <div className="arrow_bg">
                            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <a href="/images/warranty/GENERAL-LIMITED-COMMERCIAL-WARRANTY-welspun.pdf" className="document_box" target="_blank">
            <img src="/images/warranty/icon/5_warranty.webp" alt="" className="document_img" width="183" height="157" />
            <div className="document_text">
                <div className="document_title">CLICK N LOCK <br />COMMERCIAL <br />WARRANTY</div>
                <div className="view_link download_cta darkGreyBg">
                    <div className="link_cta">
                        <div className="arrow_bg">
                            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <a href="/images/warranty/GREENS_WARRANTY_TERMS.pdf" className="document_box" target="_blank">
            <img src="/images/warranty/icon/5_warranty.webp" alt="" className="document_img" width="183" height="157" />
            <div className="document_text">
                <div className="document_title">GREEN <br />WARRANTY</div>
                <div className="view_link download_cta darkGreyBg">
                    <div className="link_cta">
                        <div className="arrow_bg">
                            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <a href="/images/warranty/PET_Carpet_Tiles_Warranty_certificates.pdf" className="document_box" target="_blank">
            <img src="/images/warranty/icon/7_warranty.webp" alt="" className="document_img" width="183" height="157" />
            <div className="document_text">
                <div className="document_title">PET CARPET TILES <br />WARRANTY</div>
                <div className="view_link download_cta darkGreyBg">
                    <div className="link_cta">
                        <div className="arrow_bg">
                            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <a href="/images/warranty/SDN_Carpet_Tiles_Warranty_certificates.pdf" className="document_box" target="_blank">
            <img src="/images/warranty/icon/15_warranty.webp" alt="" className="document_img" width="183" height="157" />
            <div className="document_text">
                <div className="document_title">SDN CARPET TILES <br />WARRANTY</div>
                <div className="view_link download_cta darkGreyBg">
                    <div className="link_cta">
                        <div className="arrow_bg">
                            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</section>

<DocumentMaintenance />
{/* <section data-section="document_maintenance" className="document_maintenance">
    <div className="maintenance_container">
        <div className="section_container">
            <h2 className="diamond diamond_blue">MAINTENANCE DOCUMENTS</h2>
        </div>
        <div className="maintenance_content">
            <div className="subtitle_40">Tips for Maintenance</div>
            <ul className="diamond_list">
                <li className="diamond_item">
                    Preventative Maintenance: Containing the soil entering the building using the <br />
                    walk-off mats at entrances. This includes outside matting, inside matting and <br />
                    mats at certain other high traffic areas
                </li>
                <li className="diamond_item">
                    Vaccuming: It is the single most important part of a maintenance program <br />
                    designed to remove soil or dust from top surface
                </li>
                <li className="diamond_item">
                    Quick removal of spills is key to reduce any chance of stain
                </li>
                <li className="diamond_item">
                    Interim Clean,ng. Several different methods can be used. Regularly scheduled <br />
                    interim cleaning can prolong the need of restorative cleaning
                </li>
                <li className="diamond_item">
                    Restorative cleaning: Deep cleaning designed to remove trapped soils. Hot water <br />
                    extraction and encapsulation are the most effective restorative methods
                </li>
            </ul>
            <a href="" className="view_link download_cta darkGreyBg">
                <div className="link_cta">
                    <div className="arrow_bg">
                        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>DOWNLOAD NOW</span>
                </div>
            </a>
        </div>
    </div>
    <div className="maintenance_types">
        <ul className="maintain_list">
            <li className="maintain_tabs active" data-maintain="1">
                Click N Lock <br />
                MAINTENANCE
            </li>
            <li className="maintain_tabs" data-maintain="2">
                CARPET TILES <br />
                MAINTENANCE
            </li>
            <li className="maintain_tabs" data-maintain="3">
                WALL TO WALL <br />
                MAINTENANCE
            </li>
            <li className="maintain_tabs" data-maintain="4">
                GREENS <br />
                MAINTENANCE
            </li>
        </ul>
        <div className="maintain_result">
            <div className="maintain_item active" id="maintain-1">
                <div className="maintain_box">
                    <img src="/images/warranty/document.webp" alt="" width="627" height="617" className="maintain_img" />
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
            <div className="maintain_item" id="maintain-2">
                <div className="maintain_box">
                    <img src="/images/warranty/document.webp" alt="" width="627" height="617" className="maintain_img" />
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
            <div className="maintain_item" id="maintain-3">
                <div className="maintain_box">
                    <img src="/images/warranty/document.webp" alt="" width="627" height="617" className="maintain_img" />
                    <div className="maintain_box_text">
                        <div className="maintain_box_title">
                            <span className="subtitle_3803">Wall To Wall Maintenance</span>
                            <div className="about_diamond">
                                <div className="border_diamond"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="maintain_item" id="maintain-4">
                <div className="maintain_box">
                    <img src="/images/warranty/document.webp" alt="" width="627" height="617" className="maintain_img" />
                    <div className="maintain_box_text">
                        <div className="maintain_box_title">
                            <span className="subtitle_3803">Green Maintenance</span>
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
</section> */}
</div>
  );
}
