import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductSlides from './slide';

const ProductDetail = ({ product, collection }) => {

  return (
    <section data-section="product_detail" className="product_detail">
      <div className="square_box square_box_15"></div>
      <div className="detail_content">
        <div className="bread_crump">
          <ul>
            <li><Link href="/products">PRODUCTS</Link></li>
            <li>
              <Link href={`/products/${product.attributes.category.data.attributes.product.data.attributes.slug}`}>
                {product.attributes.category.data.attributes.product.data.attributes.product_name}
              </Link>
            </li>
            <li>
              <Link href={`/products/${product.attributes.category.data.attributes.product.data.attributes.slug}/${product.attributes.category.data.attributes.slug}`}>
                {product.attributes.category.data.attributes.collectionName}
              </Link>
            </li>
            <li>
              <Link href={`/products/${product.attributes.category.data.attributes.product.data.attributes.slug}/${product.attributes.category.data.attributes.slug}/${product.attributes.slug}`}>
                {product.attributes.subProductName}
              </Link>
            </li>
          </ul>
        </div>
        <div className="detail_product_content">
          <ProductSlides images={product} />
          <div className="about_our_product">
            <h2 className="subtitle_5504">{product.attributes.subProductName}</h2>
            <p>
              {product.attributes.details.description.map((item, index) => (
                <span key={index}>
                  {item.children.map((child, childIndex) => (
                    <span key={childIndex}>{child.text}</span>
                  ))}
                </span>
              ))}
            </p>
            <div className="product_subContent">
              <div className="specified_links">
                <Link href="/view-space">VIEW IN YOUR SPACE</Link>
                <Link href="/spec-sheet">SPECIFICATION SHEET</Link>
                <Link href="/locate-dealer">LOCATE DEALER</Link>
              </div>
              <div className="more_tiles">
                <div className="tiles_view">
                  <div className="tiles_name">More From {product.attributes.category.data.attributes.collectionName}</div>
                  <Link href="/product-list">View More</Link>
                </div>
                <div className="tiles_detail">
                  {collection.slice(0, 14).map((tile, index) => (
  <Link
    key={index}
    href={`/products/${product.attributes.category.data.attributes.product.data.attributes.slug}/${product.attributes.category.data.attributes.slug}/${tile.attributes.slug}`}
  >
    <Image
      src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${tile.attributes.swatch.data.attributes.url}`}
      alt={tile.attributes.swatch.data.attributes.name}
      width={55}
      height={55}
    />
  </Link>
))}
                </div>
                <div className="dFlex">
                  <Link href="/make-enquiry" className="view_link purpleBg">
                    <div className="link_cta">
                      <div className="arrow_bg">
                        <Image src="/images/icons/arrow-2.webp" alt="arrow" width={20} height={17} />
                      </div>
                      <span>MAKE AN <br />ENQUIRY</span>
                    </div>
                  </Link>
                  <Link href="/order-sample" className="view_link purpleBg">
                    <div className="link_cta">
                      <div className="arrow_bg">
                        <Image src="/images/icons/arrow-2.webp" alt="arrow" width={20} height={17} />
                      </div>
                      <span>ORDER A <br />SAMPLE BOX</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_features">
  {product.attributes.details.point?.map((item, index) => (
    <div className="about_feature_box border_bg" key={index}>
      <div className="border_diamond"></div>
      <div className="border_right"></div>
      <div className="subtitle_30">
        {item.name?.map((point, index) => (
          <span key={index}>
            {point.children?.map((child, childIndex) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default ProductDetail;
