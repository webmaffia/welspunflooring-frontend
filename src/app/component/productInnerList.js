// components/ProductInnerList.js
import Image from 'next/image';
import Link from 'next/link';

const ProductInnerList = ({ subProductsList, productSlug }) => {
  const productData = subProductsList;

  // Filter products to ensure they have valid image URLs
  const filteredProducts = productData.filter(product => {
    const imageUrl =
      product?.attributes?.details?.slider[0]?.image?.data?.attributes?.url ||
      product?.attributes?.details?.slider[1]?.image?.data?.attributes?.url;
    return Boolean(imageUrl); // Only include products with valid image URLs
  });

  // Return null if no products have valid images
  if (filteredProducts.length === 0) return null;

  return (
    <section className="our_products">
      <div className="product_list">
        <div className="product_tile more_products">
          <div className="product_container">
            <div className="product_tile_box">
              {filteredProducts.slice(0, 10).map((product, index) => (
                <div className="tile_item" key={index}>
                  <div className="product_img_box">
                    <Link
                      href={`/product/${product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug || ''}/${product.attributes.category.data.attributes.slug}/${product.attributes.slug}`}
                    >
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${product?.attributes?.details?.slider[0]?.image?.data?.attributes?.url || product?.attributes?.details?.slider[1]?.image?.data?.attributes?.url}`}
                        alt=""
                        width="584"
                        height="511"
                        className="tile_img"
                      />
                    </Link>
                  </div>
                  <div className="product_text">
                    <h3 className="item_title">{product.attributes.subProductName}</h3>
                    <div className="item_sub">{product.attributes.category.data.attributes.collectionName}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {productSlug !== 'artificial-grass' && (
        <div className="dFlex">
          <Link href={`/product?category=${productSlug}`} className="view_link purpleBg">
            <div className="link_cta">
              <div className="arrow_bg">
                <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
              </div>
              <span>
                VIEW <br />
                COLLECTION
              </span>
            </div>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProductInnerList;
