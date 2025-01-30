import Visualiser from '@/app/component/homepage/visulaiser';
import Image from 'next/image';
import axios from 'axios';
import { notFound } from 'next/navigation';
import ProductFeatures from '@/app/component/feature';
import ProductFAQ from '@/app/component/faqs';
import AssistanceSection from '@/app/component/assistance';
import ContactForm from '@/app/component/homepage/contactus';
import Link from 'next/link';
import ProductInnerList from '@/app/component/productInnerList';
import CarpetVideos from '@/app/component/products/carpetvideos';
import MultiTable from '@/app/component/multitable';
import MultistileVideos from '@/app/component/products/multistilevideos';
import WallToWallTable from '@/app/component/walltowall/walltowalltable';

export async function generateStaticParams() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const products = res.data.data;

    return products.map((product) => ({
      slug: product.attributes.slug,
    }));
  } catch (error) {
    console.error("Error fetching product slugs:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products?filters[slug][$eq]=${params.slug}&populate=seo`
    );
    const product = res.data.data[0];

    if (product) {
      const seo = product.attributes.seo[0];
      return {
        title: seo?.metaTitle || 'Default Title',
        description: seo?.metaDescription || 'Default description.',
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  return {
    title: 'Default Title',
    description: 'Default description.',
  };
}

export default async function ProductPage({ params }) {
  async function getHomepageData(segment) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/homepage?populate[${segment}][populate]=images.images,images.mobileImages`,
      { cache: 'no-store' }
    );
    const data = await res.json();
    return data?.data?.attributes?.[segment] || [];
  }

  const allData = await getHomepageData('default');
  const visuliserSection = allData.filter(
    (section) => section.__component === 'sections.visualiser'
  );

  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products?filters[slug][$eq]=${params.slug}&populate[about][populate]=*&populate[banner][populate]=*&populate[feature][populate]=feature.icon,feature.banner,feature.mobileBanner&populate[sustainable][populate]=certification.image&populate[trademark][populate]=certification.image&populate[collections][populate]=collectionList.image&populate[faq][populate]=*&populate[careInstructions][populate]=*&populate[blogsection][populate]=blog.thumbnail&populate[seo][populate]=*`
    );
    const product = res.data.data[0];

    if (!product) {
      notFound();
    }

    // Fetch sub-products
    const subProducts = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/product-specifications?filters[category][product][slug][$eq]=${params.slug}&populate[category][populate]=product&populate[details][populate]=slider.image`
    );
    const subProductsList = subProducts.data.data;

    // Group sub-products by collection, limit each to 2,
    // then limit total displayed to 10.
    // Helper function to filter sub-products
const getFilteredSubProducts = (subProductsArray) => {
  const grouped = {};

  // 1) Group sub-products by collection
  subProductsArray.forEach((item) => {
    const collectionName =
      item?.attributes?.category?.data?.attributes?.collectionName || 'Unknown';
    if (!grouped[collectionName]) {
      grouped[collectionName] = [];
    }
    grouped[collectionName].push(item);
  });

  const collectionNames = Object.keys(grouped);
  const numberOfCollections = collectionNames.length;

  // Default limit of 2 per collection
  let limitPerCollection = 2;

  // If we have fewer than 5 collections, we want to ensure we can still get 10 products,
  // so we increase the limit per collection to "ceil(10 / numberOfCollections)".
  // Then we still do a final .slice(0, 10) below to get exactly 10 in total.
  if (numberOfCollections < 5 && numberOfCollections > 0) {
    limitPerCollection = Math.ceil(10 / numberOfCollections);
  }

  // 2) Collect products from each collection, using our calculated limit
  let limitedByCollection = [];
  collectionNames.forEach((collection) => {
    limitedByCollection.push(
      ...grouped[collection].slice(0, limitPerCollection)
    );
  });

  // 3) Finally, limit total to 10
  return limitedByCollection.slice(0, 10);
};


    const filteredSubProductsList = getFilteredSubProducts(subProductsList);

    return (
      <>
        <main className="wrapper">
          <div className="product_wrapper">
            {/* Banner Section */}
            <section className="banner inner_banner">
              <picture>
                <source
                  media="(max-width:540px)"
                  srcSet={
                    `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${product.attributes?.banner?.mobileImage?.data?.attributes?.url}`
                  }
                />
                <img
                  src={
                    `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${product.attributes?.banner?.image?.data?.attributes?.url}`
                  }
                  alt=""
                  width="1920"
                  height="472"
                />
              </picture>
              <div className="inner_content">
                <h1 className="banner_heading">
                  {product.attributes.banner.heading.map((item, index) => (
                    <div key={index}>
                      {item.children.map((child, childIndex) => (
                        <span key={childIndex}>{child.text}</span>
                      ))}
                    </div>
                  ))}
                </h1>
                <div className="banner_sub_heading">
                  {product.attributes.banner.subheading}
                </div>
              </div>
            </section>

            {/* About Product Section */}
            <section className="about_product" data-section="about_product">
              <div className="products_container">
                <div className="section_container">
                  <h2 className="diamond diamond_blue">
                    {product.attributes.about.heading.sectionName}
                  </h2>
                  <div className="title_container">
                    <h3 className="subtitle_60">
                      {product.attributes.about.heading.heading}
                    </h3>
                  </div>
                </div>
                <div className="about_right_container">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.attributes.about.heading.description,
                    }}
                  />
                  <div className="dFlex">
                    {product?.attributes?.about?.brochurePdf?.data?.attributes
                      ?.url && (
                      <a
                        href={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${product?.attributes?.about?.brochurePdf?.data?.attributes?.url}`}
                        className="view_link download_cta purpleBg"
                      >
                        <div className="link_cta">
                          <div className="arrow_bg">
                            <img
                              src="/images/icons/arrow-2.webp"
                              alt=""
                              width="20"
                              height="17"
                            />
                          </div>
                          <span>
                            DOWNLOAD <br />
                            BROCHURE
                          </span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Product Inner List: Display Filtered Sub-Products */}
            {params.slug && params.slug !== 'artificial-grass' ? (
              <ProductInnerList
                productSlug={params.slug}
                subProductsList={filteredSubProductsList}
              />
            ) : (
              <p></p>
            )}

            {/* About Features */}
            <div className="about_features">
              {product.attributes?.about?.title?.map((item, index) => (
                <div className="about_feature_box border_bg" key={index}>
                  <div className="border_diamond"></div>
                  <div className="border_right"></div>
                  <div className="subtitle_30">
                    {item.point.map((point, idx) => (
                      <span key={idx}>
                        {point.children.map((child, cIndex) => (
                          <span key={cIndex}>{child.text}</span>
                        ))}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carpet Videos */}
            {params.slug === 'carpet-tiles' && <CarpetVideos />}

            {/* Product Features */}
            <ProductFeatures product={product} />

            {/* MultiTable */}
            {params.slug === 'multistile' && <MultiTable />}

            {/* {params.slug === 'wall-to-wall-carpet' && <WallToWallTable />} */}

        

            {/* Multistile Videos */}
            {params.slug === 'multistile' && <MultistileVideos />}

            {/* Sustainable Section */}
            {product.attributes.sustainable?.sectionName && (
              <section
                data-section="about_sustainable"
                className="about_sustainable"
              >
                <div className="diamond_title">
                  <h2 className="diamond diamond_blue">
                    {product.attributes.sustainable?.sectionName}
                  </h2>
                  <div className="subtitle_45">
                    {product.attributes.sustainable?.heading?.map(
                      (item, index) => (
                        <div key={index}>
                          {item.children.map((child, childIndex) => (
                            <span key={childIndex}>{child.text}</span>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="about_sustain_container">
                  {product.attributes.sustainable?.certification?.map(
                    (item, index) => (
                      <div className="sustain_item border_bg" key={index}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.image?.data?.attributes?.url}`}
                          alt=""
                          className=""
                          width="179"
                          height="183"
                        />
                        <div className="sustain_box">
                          <div className="border_diamond"></div>
                          <p>
                            {item.description.map((para, i) => (
                              <span key={i}>
                                {para.children.map((child, cIndex) => (
                                  <span key={cIndex}>{child.text}</span>
                                ))}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            {/* Trademark Section */}
            {product.attributes.trademark?.sectionName && (
              <section
                data-section="about_sustainable"
                className="about_sustainable trademark"
              >
                <div className="diamond_title">
                  <h2 className="diamond diamond_blue">
                    {product.attributes.trademark?.sectionName}
                  </h2>
                  <div className="subtitle_45">
                    {product.attributes.trademark?.heading.map(
                      (item, index) => (
                        <div key={index}>
                          {item.children.map((child, childIndex) => (
                            <span key={childIndex}>{child.text}</span>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="about_sustain_container">
                  {product.attributes.trademark?.certification?.map(
                    (item, index) => (
                      <div className="sustain_item border_bg" key={index}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.image?.data?.attributes?.url}`}
                          alt=""
                          className=""
                          width="179"
                          height="183"
                        />
                        <div className="sustain_box">
                          <div className="border_diamond"></div>
                          <p>
                            {item.description?.map((para, i) => (
                              <span key={i}>
                                {para.children?.map((child, cIndex) => (
                                  <span key={cIndex}>{child.text}</span>
                                ))}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            {/* FAQ */}
            <ProductFAQ product={product} />

            {/* Care Instructions */}
            <section data-section="care_instruct" className="care_instruct">
              <div className="section_container">
                <h2 className="diamond diamond_blue">
                  {product.attributes.careInstructions.sectionName}
                </h2>
                <div className="title_container">
                  <h3 className="subtitle_60">
                    {product.attributes.careInstructions.heading.map(
                      (item, index) => (
                        <div key={index}>
                          {item.children.map((child, childIndex) => (
                            <span key={childIndex}>{child.text}</span>
                          ))}
                        </div>
                      )
                    )}
                  </h3>
                </div>
              </div>
              <div className="care_container">
                <div className="about_features">
                  {product.attributes.careInstructions.point.map(
                    (item, index) => (
                      <div className="about_feature_box border_bg" key={index}>
                        <div className="border_diamond"></div>
                        <div className="subtitle_20">
                          {item.point.map((point, pIndex) => (
                            <span key={pIndex}>
                              {point.children.map((child, cIndex) => (
                                <span key={cIndex}>{child.text}</span>
                              ))}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </section>

            {/* Assistance */}
            <AssistanceSection />

            {/* Blog Section */}
            <section className="blog" data-section="blog">
              <div className="blogs_upper">
                <div className="section_container">
                  <h2 className="diamond diamond_blue">
                    {product.attributes.blogsection?.sectionName}
                  </h2>
                  <div className="title_container">
                    <div className="subtitle_60">
                      {product.attributes.blogsection?.sectionHeading?.map(
                        (paragraph, index) => (
                          <p key={index}>
                            {paragraph.children?.map((child, childIndex) => (
                              <span key={childIndex}>{child.text}</span>
                            ))}
                          </p>
                        )
                      )}
                    </div>
                    <a href="/blog" className="view_link purpleBg">
                      <div className="link_cta">
                        <div className="arrow_bg">
                          <Image
                            src="/images/icons/arrow-2.webp"
                            alt="Arrow"
                            width={20}
                            height={17}
                          />
                        </div>
                        <span>READ ALL</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="blogs_container">
                {product.attributes.blogsection?.blog?.map((blog, index) => (
                  <div className="blogs_item cursor_img" key={index}>
                    <div className="blogs_img">
                      <div className="blog_text">
                        <span>{blog.publishDate}</span>
                      </div>
                      <Link href={`/blog/${blog.url}`}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${blog.thumbnail?.data?.attributes?.url}`}
                          alt={blog.altText}
                          width={381}
                          height={381}
                        />
                      </Link>
                    </div>
                    <h3 className="blog_title">
                      {blog.heading?.map((paragraph, pIndex) => (
                        <p key={pIndex}>
                          {paragraph.children?.map((child, cIndex) => (
                            <span key={cIndex}>{child.text}</span>
                          ))}
                        </p>
                      ))}
                    </h3>
                    <Link
                      href={`/blog/${blog.url}`}
                      className="view_link cursor_cta purpleBg"
                    >
                      <div className="link_cta">
                        <div className="arrow_bg">
                          <Image
                            src="/images/icons/arrow-2.webp"
                            alt="Arrow"
                            width={20}
                            height={17}
                          />
                        </div>
                        <span>READ MORE</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="square_box square_box_10"></div>
            </section>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error('Error fetching product data:', error);
    notFound();
  }
}
