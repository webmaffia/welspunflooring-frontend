import Link from "next/link";
import ContactForm from "../component/homepage/contactus";

export async function generateMetadata() {
  return {
    title: "Flooring Tiles & Artificial Grass Installation Services",
    description: "Get all your floor tiles, carpet and artificial grass installations done by an expert tiles installer from Welspun Flooring. Dust &amp; Noise Free. Enquire Now!",
  }
}


export default function installationPage() {
    
  return (
<div className="product_wrapper">
<section className="banner inner_banner">
    <picture>
        <source media="(max-width:540px)" srcset="/images/installation/banner_mob.webp" />
        <img src="/images/installation/banner.webp" alt="" width="1920" height="472" />
    </picture>
    <div className="inner_content">
        <div className="banner_sub_heading">
            Hassle-Free & Covid-Safe <br />
            Tile Installation
        </div>
        <h1 className="banner_heading">By company installer</h1>
    </div>
</section>
<section data-section="installation_guide" className="installation_guide">
    <div className="section_container">
        <h2 className="diamond diamond_blue">INSTALLATION GUIDE</h2>
        <div className="title_container">
            <div className="subtitle_60">
                Our team of installers undergo daily <br />
                monitoring for COVID-19 symptoms,
            </div>
            <div className="install_para">
                and also provide self-declaration on the AROGYA SETU app about their health <br />
                conditions. They are trained to exercise personal hygiene at all times which <br />
                includes the use of face masks, hand sanitizers and PPE kits. The entire <br />
                flooring installation process is carried out in complete adherence to social <br />
                distancing protocols and precautionary measures to ensure utmost safety- <br />
                both for our customers and our installers.
            </div>
            <div className="about_diamond">
                <div className="border_diamond"></div>
            </div>
        </div>
    </div>
    <div className="install_video">
        <div className="video_content">
            <img src="/images/installation/install_poster.webp" alt="" className="poster_img" width="491" height="491" />
            {/* <a href="" className="play_btn">
                <img src="/images/icons/play_button.webp" alt="" width="641" height="897" />
            </a> */}
            <video width="491" height="491" loop mute>
                <source src="/videos/Welspun_Flooring_Furniture.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="install_video_text">
            <span>Welspun</span> Installation Guidence
        </div>
    </div>
    <div className="square_box square_box_23"></div>
</section>
<section data-section="install_click" className="install_click">
    <div className="click_container">
        <div className="install_tile_container">
            <h2 className="install_tile_title subtitle_60">Click N Lock Tiles</h2>
            <div className="install_tile_para">
                Our Click N Lock tiles come with advanced Wel-Lock <br />
                technology that enables the tiles to easily fit against one <br />
                another through a unique locking mechanism. This <br />
                ensures strong locking at the joints and makes installation <br />
                a quick and effortless process. Click N Lock tiles can be <br />
                laid in less than a day without any dust / noise,
            </div>
            <Link href="/product?category=click-and-lock-stone" className="view_link purpleBg">
                <div className="link_cta">
                    <div className="arrow_bg">
                        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>EXPLORE OUR PRODUCTS</span>
                </div>
            </Link>
        </div>
    </div>
    <div className="video_content">
        <img src="/images/installation/click_poster.webp" alt="" className="poster_img" width="1044" height="800" />
        {/* <a href="" className="play_btn">
            <img src="/images/icons/play_button.webp" alt="" width="641" height="897" />
        </a> */}
        <video width="1044" height="800" loop mute>
            <source src="/videos/Welspun_Flooring_Furniture.mp4" type="video/mp4" />
        </video>
    </div>
</section>
<section data-section="install_carpet" className="install_tile">
    <div className="installation_container">
        <img src="/images/installation/carpet.webp" alt="" className="install_tile_img" width="852" height="567" />
        <div className="install_tile_container">
            <h2 className="install_tile_title subtitle_60">Carpet Tiles</h2>
            <div className="install_tile_para">
                Our Carpet Tiles are available in a variety of vibrant designs <br />
                and help in creating customized floors. They are easy to <br />
                install and even easier to manage. Carpet Tiles are India's <br />
                first anti-viral* soft flooring solution and eliminate 99.68% <br />
                of viruses. It also absorbs C02 thereby reducing indoor <br />
                pollution and improving the air quality of the space.
            </div>
            <div className="install_tile_para">
                Depending on the site of tile installation, Carpet tiles are <br />
                installed by our trained professionals using <br />
                pressure-sensitive adhesive or adhesive tape. Check out <br />
                the tiles installation process below to know more.
            </div>
            <Link href="/product?category=carpet-tiles" className="view_link purpleBg">
                <div className="link_cta">
                    <div className="arrow_bg">
                        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>EXPLORE OUR PRODUCTS</span>
                </div>
            </Link>
        </div>
    </div>
    <div className="installation_steps">
        <div className="steps_container">
            <div className="steps_header">
                <div className="subtitle_30">Using pressure-sensitive adhesive</div>
                <img src="/images/icons/arrow-down.webp" alt="" width="64" height="64" />
            </div>
            <div className="steps_detail">
                <div className="steps_content">
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_1.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">01</div>
                                <div className="steps_para">
                                    Clean the surface to ensure <br />
                                    that it is dust and moisture <br />
                                    free
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_2.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">02</div>
                                <div className="steps_para">
                                    Apply thc pressure sensitive <br />
                                    adhesive,Wait for the <br />
                                    adhesive to become sticky
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_3.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">03</div>
                                <div className="steps_para">
                                    Start Installation by placing <br />
                                    tile one after other as per <br />
                                    laying pattern
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_4.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">04</div>
                                <div className="steps_para">
                                    Follow Design Pattern <br />
                                    and Complete the <br />
                                    installation
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_5.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">05</div>
                                <div className="steps_para">
                                    Protect installed area <br />
                                    using Polythene
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="steps_container">
            <div className="steps_header">
                <div className="subtitle_30">Using adhesive tape</div>
                <img src="/images/icons/arrow-down.webp" alt="" width="64" height="64" />
            </div>
            <div className="steps_detail">
                <div className="steps_content">
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_1.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">01</div>
                                <div className="steps_para">
                                    Clean the surface to ensure <br />
                                    that it is dust and moisture <br />
                                    free
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_6.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">02</div>
                                <div className="steps_para">
                                    Mark the centre <br />
                                    of the room
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_7.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">03</div>
                                <div className="steps_para">
                                    square up the <br />
                                    lines
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_8.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">04</div>
                                <div className="steps_para">
                                    Initiate sample <br />
                                    layout
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_9.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">05</div>
                                <div className="steps_para">
                                    Identify Carpet <br />
                                    Pile direction
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_10.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">06</div>
                                <div className="steps_para">
                                    Place the double sided <br />
                                    tape or sticker tab on <br />
                                    the corner of every tile
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_11.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">07</div>
                                <div className="steps_para">
                                    Trim tiles at the <br />
                                    walls and complete <br />
                                    the installation
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_12.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">08</div>
                                <div className="steps_para">
                                    Clean out <br />
                                    Remaining area
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section data-section="install_wall" className="install_tile">
    <div className="installation_container row_reverse">
        <img src="/images/installation/wall.webp" alt="" className="install_tile_img" width="852" height="567" />
        <div className="install_tile_container">
            <h2 className="install_tile_title subtitle_60">Wall to Wall Carpets</h2>
            <div className="install_tile_para">
                When it comes to striking a great 'first impression' of <br />
                beauty and prestige, our Wall to Wall Carpets are above <br />
                everything else. They splendidly enhance the 100k Of any <br />
                space and give a feeling of distinction in interior design <br />
                Our Wall to Wall Carpets are also India's first anti-viral• soft <br />
                flooring solution which eliminates 99.68% Of virus.
            </div>
            <div className="install_tile_para">
                It's important to get the flooring installation right in order <br />
                to bring out the true elegance Of Wall to Wall carpets. <br />
                Trained professionals follow a checklist of practices to <br />
                install them correctly. Flooring installation is carried out in <br />
                2 different methods - installation using permanent <br />
                adhesive (with or without EPE foam underlayement) or
            </div>
            <Link href="/product?category=wall-to-wall-carpet" className="view_link purpleBg">
                <div className="link_cta">
                    <div className="arrow_bg">
                        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>EXPLORE OUR PRODUCTS</span>
                </div>
            </Link>
        </div>
    </div>
    <div className="installation_steps">
        <div className="steps_container">
            <div className="steps_header">
                <div className="subtitle_30">Installation with permanent adhesive</div>
                <img src="/images/icons/arrow-down.webp" alt="" width="64" height="64" />
            </div>
            <div className="steps_detail">
                <div className="steps_content">
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_1.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">01</div>
                                <div className="steps_para">
                                    Clean the surface to ensure <br />
                                    that it is dust and moisture <br />
                                    free
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_2.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">02</div>
                                <div className="steps_para">
                                    Apply thc pressure sensitive <br />
                                    adhesive,Wait for the <br />
                                    adhesive to become sticky
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_3.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">03</div>
                                <div className="steps_para">
                                    Start Installation by placing <br />
                                    tile one after other as per <br />
                                    laying pattern
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_4.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">04</div>
                                <div className="steps_para">
                                    Follow Design Pattern <br />
                                    and Complete the <br />
                                    installation
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_5.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">05</div>
                                <div className="steps_para">
                                    Protect installed area <br />
                                    using Polythene
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="steps_container">
            <div className="steps_header">
                <div className="subtitle_30">Stretch-in installation</div>
                <img src="/images/icons/arrow-down.webp" alt="" width="64" height="64" />
            </div>
            <div className="steps_detail">
                <div className="steps_content">
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_1.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">01</div>
                                <div className="steps_para">
                                    Clean the surface to ensure <br />
                                    that it is dust and moisture <br />
                                    free
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_6.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">02</div>
                                <div className="steps_para">
                                    Mark the centre <br />
                                    of the room
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_7.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">03</div>
                                <div className="steps_para">
                                    square up the <br />
                                    lines
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_8.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">04</div>
                                <div className="steps_para">
                                    Initiate sample <br />
                                    layout
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_9.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">05</div>
                                <div className="steps_para">
                                    Identify Carpet <br />
                                    Pile direction
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_10.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">06</div>
                                <div className="steps_para">
                                    Place the double sided <br />
                                    tape or sticker tab on <br />
                                    the corner of every tile
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_11.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">07</div>
                                <div className="steps_para">
                                    Trim tiles at the <br />
                                    walls and complete <br />
                                    the installation
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_12.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">08</div>
                                <div className="steps_para">
                                    Clean out <br />
                                    Remaining area
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section data-section="install_green" className="install_tile install_green">
    <div className="installation_container">
        <img src="/images/installation/green.webp" alt="" className="install_tile_img" width="852" height="567" />
        <div className="install_tile_container">
            <h2 className="install_tile_title subtitle_60">Greens</h2>
            <div className="install_tile_para">
                Our Greens look as real as natural grass. Ideal for sports <br />
                arenas, commercial applications, residential terraces and <br />
                gardens, it is easy on maintenance too. No watering, <br />
                weeding, mowing or even patching up needed. It's easy to <br />
                install and drains out rain water easily.
            </div>
            <div className="install_tile_para">
                The flooring installation process for Artificial Grass can be <br />
                broadly classified under 3 different heads, namely - <br />
                Preparing the area, Installing the base & Installing the <br />
                lawn. Professionally trained installers carry out the <br />
                below-mentioned steps to ensure proper installation that <br />
                also aids in the flooring's longevity.
            </div>
            <a href="/product/artificial-grass" className="view_link purpleBg">
                <div className="link_cta">
                    <div className="arrow_bg">
                        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>EXPLORE OUR PRODUCTS</span>
                </div>
            </a>
        </div>
    </div>
    <div className="installation_steps">
        <div className="steps_container">
            <div className="steps_header">
                <div className="subtitle_30">Installation with permanent adhesive</div>
                <img src="/images/icons/arrow-down.webp" alt="" width="64" height="64" />
            </div>
            <div className="steps_detail">
                <div className="steps_content">
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_1.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">01</div>
                                <div className="steps_para">
                                    Clean the surface to ensure <br />
                                    that it is dust and moisture <br />
                                    free
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_2.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">02</div>
                                <div className="steps_para">
                                    Apply thc pressure sensitive <br />
                                    adhesive,Wait for the <br />
                                    adhesive to become sticky
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_3.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">03</div>
                                <div className="steps_para">
                                    Start Installation by placing <br />
                                    tile one after other as per <br />
                                    laying pattern
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_4.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">04</div>
                                <div className="steps_para">
                                    Follow Design Pattern <br />
                                    and Complete the <br />
                                    installation
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_5.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">05</div>
                                <div className="steps_para">
                                    Protect installed area <br />
                                    using Polythene
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="steps_container">
            <div className="steps_header">
                <div className="subtitle_30">Stretch-in installation</div>
                <img src="/images/icons/arrow-down.webp" alt="" width="64" height="64" />
            </div>
            <div className="steps_detail">
                <div className="steps_content">
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_1.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">01</div>
                                <div className="steps_para">
                                    Clean the surface to ensure <br />
                                    that it is dust and moisture <br />
                                    free
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_6.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">02</div>
                                <div className="steps_para">
                                    Mark the centre <br />
                                    of the room
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_7.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">03</div>
                                <div className="steps_para">
                                    square up the <br />
                                    lines
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_8.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">04</div>
                                <div className="steps_para">
                                    Initiate sample <br />
                                    layout
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_9.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">05</div>
                                <div className="steps_para">
                                    Identify Carpet <br />
                                    Pile direction
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_10.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">06</div>
                                <div className="steps_para">
                                    Place the double sided <br />
                                    tape or sticker tab on <br />
                                    the corner of every tile
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_11.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">07</div>
                                <div className="steps_para">
                                    Trim tiles at the <br />
                                    walls and complete <br />
                                    the installation
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_12.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">08</div>
                                <div className="steps_para">
                                    Clean out <br />
                                    Remaining area
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="steps_container">
            <div className="steps_header">
                <div className="subtitle_30">Stretch-in installation</div>
                <img src="/images/icons/arrow-down.webp" alt="" width="64" height="64" />
            </div>
            <div className="steps_detail">
                <div className="steps_content">
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_1.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">01</div>
                                <div className="steps_para">
                                    Clean the surface to ensure <br />
                                    that it is dust and moisture <br />
                                    free
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_6.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">02</div>
                                <div className="steps_para">
                                    Mark the centre <br />
                                    of the room
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_7.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">03</div>
                                <div className="steps_para">
                                    square up the <br />
                                    lines
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_8.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">04</div>
                                <div className="steps_para">
                                    Initiate sample <br />
                                    layout
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_9.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">05</div>
                                <div className="steps_para">
                                    Identify Carpet <br />
                                    Pile direction
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_10.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">06</div>
                                <div className="steps_para">
                                    Place the double sided <br />
                                    tape or sticker tab on <br />
                                    the corner of every tile
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_11.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">07</div>
                                <div className="steps_para">
                                    Trim tiles at the <br />
                                    walls and complete <br />
                                    the installation
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="steps_box">
                        <div className="steps_item">
                            <img src="/images/installation/icons/img_12.webp" alt="" width="104" height="109" />
                            <div className="steps_text">
                                <div className="steps_number">08</div>
                                <div className="steps_para">
                                    Clean out <br />
                                    Remaining area
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
			<ContactForm />
		</div>
   
  );
}
