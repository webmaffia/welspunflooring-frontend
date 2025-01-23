'use client';

import Image from 'next/image';
import Link from 'next/link';

const ArchitectsProducts = () => {
    const products = [
        { src: '/images/interior/product/new/img_1.webp', alt: 'ALMOND', label: 'ALMOND' },
        { src: '/images/interior/product/new/img_2.webp', alt: 'PARADISE', label: 'PARADISE' },
        { src: '/images/interior/product/new/img_3.webp', alt: 'MIST', label: 'MIST' },
        { src: '/images/interior/product/new/img_4.webp', alt: 'ANGLE', label: 'ANGLE' },
        { src: '/images/interior/product/new/img_5.webp', alt: 'PURGLOSS', label: 'PURGLOSS' },
        { src: '/images/interior/product/new/img_6.webp', alt: 'ICED OAK', label: 'ICED OAK' }
    ];

    return (
        <section className="ad_products">
            <div className="our_products">
                <div className="product_list">
                    <div className="product_tile">
                        <div className="product_container">
                            <div className="product_tile_box">
                                {products.map((product, index) => (
                                    <div className="tile_item" key={index}>
                                        <div className="product_img_box">
                                            <Image src={product.src} alt={product.alt} width={298} height={261} className="tile_img" />
                                        </div>
                                        <div className="product_text">
                                            <h3 className="item_title">{product.label}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ad_products_container">
                <h2 className="subtitle_60">Products</h2>
                <p className="para">
                    Our flooring solutions cater to the needs <br />
                    of different residential and commercial <br />
                    spaces. with designs that bring alive the <br />
                    ideas and like to share <br />
                    with your clients.
                </p>
                <div className="dFlex">
                    <Link href="/product" className="view_link purpleBg">
                        <div className="link_cta">
                            <div className="arrow_bg">
                                <Image src="/images/icons/arrow-2.webp" alt="Arrow" width={20} height={17} />
                            </div>
                            <span>VIEW <br />COLLECTION</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ArchitectsProducts;
