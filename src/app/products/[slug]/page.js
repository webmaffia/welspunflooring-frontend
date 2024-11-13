
import Visualiser from '@/app/component/homepage/visulaiser';
import Image from 'next/image';
import axios from 'axios';
import { notFound } from 'next/navigation';
import ProductFeatures from '@/app/component/feature';
import ProductFAQ from '@/app/component/faqs';
import AssistanceSection from '@/app/component/assistance';
import ContactForm from '@/app/component/homepage/contactus';
import BlogSection from '@/app/component/homepage/blog';
import Link from 'next/link';

export async function generateStaticParams() {
  try {
 
    const res = await axios.get('https://welspun-cms.webmaffia.com/api/products');
    const products = res.data.data;

  
    return products.map((product) => ({
      slug: product.attributes.slug,
    }));
  } catch (error) {
    console.error("Error fetching product slugs:", error);
    return [];
  }
}



export default async function ProductPage({ params }) {
  async function getHomepageData(segment) {
    const res = await fetch(
      `https://welspun-cms.webmaffia.com/api/homepage?populate[${segment}][populate]=images.images,images.mobileImages`,      { cache: 'no-store' } // Ensures no caching for SSR, can be removed if caching is preferred
    );
  
    const data = await res.json();
    return data?.data?.attributes?.[segment] || [];
  }
  
  const allData = await getHomepageData('default');
  
  // Define visuliserSection with a default empty array to avoid 'undefined' errors
  const visuliserSection = allData.length
    ? allData.filter((section) => section.__component === 'sections.visualiser')
    : [];
  
  // Now visuliserSection will be an empty array if no matching sections are found
 
  
  
  
  try {
    
    const res = await axios.get(
      `https://welspun-cms.webmaffia.com/api/products?filters[slug][$eq]=${params.slug}&populate[about][populate]=*&populate[banner][populate]=*&populate[feature][populate]=feature.icon,feature.banner,feature.mobileBanner&populate[sustainable][populate]=certification.image&populate[trademark][populate]=certification.image&populate[collections][populate]=collectionList.image&populate[faq][populate]=*&populate[careInstructions][populate]=*&populate[blogsection][populate]=blog.thumbnail&populate[seo][populate]=*`
    );
    
    const product = res.data.data[0];
    
    if (!product) {
      notFound();
    }
    
  //   // Second API call for other data
  //   const visualiserDataRes = await axios.get(`https://welspun-cms.webmaffia.com/api/homepage?populate[default][populate]=slide.slideImage,slide.slideBg,slide.slideMobileBg,slide.image,slide.explore,slide.brochure,space.image,images.images,testimonial.posterImage,testimonial.image,image,partnerLogo.images,partnerLogo.mobileImages,content.images,content.mobileImages,blog.thumbnail,heading`); // Replace with your URL
     
    
  //   const visualiserData = visualiserDataRes.data.attributes.default || [];
  //   if (Array.isArray(visualiserData)) {
  //     const visuliserSection = visualiserData.filter((section) => section.__component === 'sections.visualiser');
  //     console.log(visuliserSection); // Now you can safely use visuliserSection
  // } else {
  //     console.error('visualiserData is not an array:', visualiserData);
  // }


    

  
    return (
        <>
        <main className="wrapper">
		<div className="product_wrapper">
            <section className="banner inner_banner">
                <picture>
                    <source media="(max-width:540px)" srcSet={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${product.attributes?.banner?.mobileImage?.data?.attributes?.url}`} />
                    <img src=
                    {`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${product.attributes?.banner.image?.data?.attributes?.url}`} 
                    alt="" width="1920" height="472" />
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
                <div className="banner_sub_heading">{product.attributes.banner.subheading}</div>
               
            </div>
            </section>

            <section className="about_product" data-section="about_product">
    <div className="products_container">
        <div className="section_container">
            <h2 className="diamond diamond_blue">{product.attributes.about.heading.sectionName}</h2>
            <div className="title_container">
                <h3 className="subtitle_60">{product.attributes.about.heading.heading}</h3>
            </div>
        </div>
        <div className="about_right_container">
       
        <div dangerouslySetInnerHTML={{ __html:  product.attributes.about.heading.description }} />
            
            {/* <p>
                The Click-N-Lock® anti-skid tiles are Stain & Scratch-resistant, Fire & Skid-Proof, <br />
                and come with an Antimicrobial layer – giving you the best flooring with perfect <br />
                interlocking tiles for every space in your house. Explore our latest collection of <br />
                flooring tiles and select designs that speak for your spaces.  
            </p> */}
            <div className="dFlex">
            {params.slug !== 'artificial-grass' && (
  <Link href={`/products?category=${params.slug}`} className="view_link purpleBg">
    <div className="link_cta">
      <div className="arrow_bg">
        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
      </div>
      <span>VIEW <br />COLLECTION</span>
    </div>
  </Link>
)}

                <a href={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${product.attributes.about.brochurePdf.data.attributes.url}`} className="view_link download_cta purpleBg">
                    <div className="link_cta">
                        <div className="arrow_bg">
                            <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                        </div>
                        <span>DOWNLOAD <br />BROCHURE</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div className="about_features">

    {product.attributes.about.title.map((item, index) => (
             <div className="about_feature_box border_bg" key={index}>
             <div className="border_diamond"></div>
             <div className="border_right"></div>
             <div className="subtitle_30">
             {item.point.map((point, index) => (
                <span key={index}>
                   {point.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
                </span>
              ))}
              
               
             </div>
         </div>
          ))}
     
    </div>
</section>



<ProductFeatures product={product}/>

<section data-section="about_sustainable" className="about_sustainable">
    <div className="diamond_title">
        <h2 className="diamond diamond_blue">{product.attributes.sustainable.sectionName}</h2>
        <h3 className="subtitle_45">  
          {product.attributes.sustainable.heading.map((item, index) => (
            <div key={index}>
              {item.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </div>
          ))}
          </h3>
    </div>

    <div className="about_sustain_container">
        

        {product.attributes.sustainable.certification.map((item, index) => (
            <div className="sustain_item border_bg" key={index}>
            <img src=
            {`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${item.image?.data?.attributes?.url}`}
            alt="" className="" width="179" height="183" />
            <div className="sustain_box">
                <div className="border_diamond"></div>
                <p>
                {item.description.map((para, index) => (
            <span key={index}>
              {para.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </span>
          ))}
                </p>
            </div>
        </div>
          ))}
 
    </div>
</section>

{product.attributes.trademark?.sectionName && (
  <section data-section="about_sustainable" className="about_sustainable trademark">
    <div className="diamond_title">
        <h2 className="diamond diamond_blue">{product.attributes.trademark?.sectionName}</h2>
        <h3 className="subtitle_45">  
          {product.attributes.trademark?.heading.map((item, index) => (
            <div key={index}>
              {item.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </div>
          ))}
        </h3>
    </div>

    <div className="about_sustain_container">
      {product.attributes.trademark?.certification?.map((item, index) => (
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
              {item.description?.map((para, paraIndex) => (
                <span key={paraIndex}>
                  {para.children?.map((child, childIndex) => (
                    <span key={childIndex}>{child.text}</span>
                  ))}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
)}




<section
  data-section="product_floor"
  className={`product_floor ${product?.attributes?.trademark?.sectionName ? '' : 'trademark'}`}
>
  <div className="section_container">
    <h2 className="diamond diamond_blue">THE FLOOR FINDER</h2>
    <div className="title_container">
      <h3 className="subtitle_45">
        Find the best-suited <br />product for your space
      </h3>
      <a href="" className="view_link blackBrd">
        <div className="link_cta">
          <div className="arrow_bg">
            <img
              src="/images/icons/arrow-2.webp"
              alt=""
              width="20"
              height="17"
            />
          </div>
          <span>START HERE</span>
        </div>
      </a>
    </div>
  </div>
  <div className="floor_finder">
    <a href="">
      <img
        src="/images/icons/q_&_a.webp"
        alt=""
        width="64"
        height="68"
      />
      <span>Answer a few questions</span>
    </a>
    <a href="">
      <img
        src="/images/icons/quiz.webp"
        alt=""
        width="64"
        height="68"
      />
      <span>Take our quiz</span>
    </a>
    <a href="">
      <img
        src="/images/icons/floor.webp"
        alt=""
        width="64"
        height="68"
      />
      <span>Discover your flooring</span>
    </a>
  </div>
</section>


<Visualiser visuliserData={visuliserSection} />




<ProductFAQ  product={product}/>
<section data-section="care_instruct" className="care_instruct">
    <div className="section_container">
        <h2 className="diamond diamond_blue">{product.attributes.careInstructions.sectionName}</h2>
        <div className="title_container">
            <h3 className="subtitle_60">{product.attributes.careInstructions.heading.map((item, index) => (
            <div key={index}>
              {item.children.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </div>
          ))}</h3>
        </div>
    </div>
    <div className="care_container">
        <div className="about_features">
        {product.attributes.careInstructions.point.map((item, index) => (
            

<div className="about_feature_box border_bg" key={index}>
<div className="border_diamond"></div>
<div className="subtitle_20">
{item.point.map((point, index) => (
                <span key={index}>
                   {point.children.map((child, childIndex) => (
                <span key={childIndex}> {child.text}</span>
              ))}
                </span>
              ))}
</div>
</div>
          ))}
           
          
        </div>
    </div>
</section>

<AssistanceSection />

<section className="blog" data-section="blog">
  <div className="blogs_upper">
    <div className="section_container">
      <h2 className="diamond diamond_blue">{product.attributes.blogsection?.sectionName}</h2>
      <div className="title_container">
        <div className="subtitle_60">
          {product.attributes.blogsection?.sectionHeading?.map((paragraph, index) => (
            <p key={index}>
              {paragraph.children?.map((child, childIndex) => (
                <span key={childIndex}>{child.text}</span>
              ))}
            </p>
          ))}
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
          {console.log(blog.heading)}
  {blog.heading?.map((paragraph, index) => (
    <p key={index}>
      {paragraph.children?.map((child, childIndex) => (
        <span key={childIndex}>{child.text}</span>
      ))}
    </p>
  ))}
</h3>
        <Link href={`/blog/${blog.url}`} className="view_link cursor_cta purpleBg">
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


<ContactForm />

			{/* 
			<?php require_once 'click-n-lock-stone/feature.php'; ?>


      
			<?php require_once 'click-n-lock-stone/sustainable.php'; ?>
			<?php require_once 'click-n-lock-stone/about-collection.php'; ?>
			<?php require_once 'click-n-lock-wood/trademark.php'; ?>
			<?php require_once 'click-n-lock-stone/product-floor.php'; ?>
			<?php require_once 'click-n-lock-stone/product-visualise.php'; ?>
			<?php require_once 'click-n-lock-stone/product-faq.php'; ?>
			<?php require_once 'homepage/video-guide.php'; ?>
			<?php require_once 'click-n-lock-stone/product-case-study.php'; ?>
			<?php require_once 'click-n-lock-stone/care.php'; ?>
			<?php require_once 'product-list/assistance.php'; ?>
			<?php require_once 'click-n-lock-stone/blog.php'; ?>
			<?php require 'homepage/contact.php'; ?>
			<?php require 'homepage/sticky.php'; ?> */}
		</div>
	</main>
      </>
    );
  } catch (error) {
    console.error("Error fetching product data:", error);
    notFound();  
  }
}

