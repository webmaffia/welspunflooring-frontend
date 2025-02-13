// "use client";
// import React, { useEffect } from "react";
// import Image from 'next/image';
// import Link from 'next/link';
// import ProductSlides from './slide';

// const ProductDetail = ({ product, collection,lookbookUrls }) => {
//   useEffect(() => {
//     const handleChatClick = () => {
//       const chatBox = document.querySelector(".sticky_chat");
//       if (chatBox) {
//         chatBox.click();
//       }
//     };

//     // Get elements by class name
//     const elements = document.getElementsByClassName("triggerChat");

//     // Attach event listeners to each element
//     Array.from(elements).forEach((element) => {
//       element.addEventListener("click", handleChatClick);
//     });

//     // Cleanup event listeners when component unmounts
//     return () => {
//       Array.from(elements).forEach((element) => {
//         element.removeEventListener("click", handleChatClick);
//       });
//     };
//   }, []);

//   // Extract the product name for easier checks
//   const productName =
//     product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.product_name || "";

//   // Define valid product names
//   const validProductNames = ["Click-N-Lock Tiles Wood ", "Click-N-Lock Tiles Stone", "Multistile"];

//   const handleDownloadCatalogue = () => {
//     const files = lookbookUrls?.data?.[0]?.attributes?.lookbook?.data;
  
//     if (files?.length > 0) {
//       files.forEach((file) => {
//         const fileUrl = `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${file.attributes.url}`;
  
//         // Create a hidden <a> element
//         const link = document.createElement("a");
//         link.href = fileUrl;
//         link.target = "_blank"; // Open in a new tab
//         link.rel = "noopener noreferrer"; // Security best practice
//         link.style.display = "none"; // Hide the element
//         document.body.appendChild(link); // Add to DOM
  
//         // Simulate a click
//         link.click();
  
//         // Remove the element after clicking
//         document.body.removeChild(link);
//       });
//     }
//   };

//   return (
//     <>
//       <section data-section="product_detail" className="product_detail">
//         <div className="square_box square_box_15"></div>
//         <div className="detail_content">
//           <div className="bread_crump">
//             <ul>
//               <li>
//                 <Link href="/product">PRODUCTS</Link>
//               </li>
//               <li>
//                 <Link
//                   href={`/product/${product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug}`}
//                 >
//                   {
//                     product?.attributes?.category?.data?.attributes?.product?.data?.attributes
//                       ?.product_name
//                   }
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href={`/product?category=${product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug}&collection=${product?.attributes?.category?.data?.attributes?.collectionName}`}
//                 >
//                   {product?.attributes?.category?.data?.attributes?.collectionName}
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href={`/product/${product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug}/${product?.attributes?.category?.data?.attributes?.slug}/${product?.attributes?.slug}`}
//                 >
//                   {product?.attributes?.subProductName}
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="detail_product_content">
//             <ProductSlides images={product} />
//             <div className="about_our_product">
//               <h2 className="subtitle_5504">{product?.attributes?.subProductName}</h2>
//               <p>
//                 {product?.attributes?.details?.description?.map((item, index) => (
//                   <span key={index}>
//                     {item?.children?.map((child, childIndex) => (
//                       <span key={childIndex}>{child?.text}</span>
//                     ))}
//                   </span>
//                 ))}
//               </p>
//               <div className="product_subContent">
//                 <div className="specified_links">
//                   <Link className="opacity0" href="/view-space">
//                     VIEW IN YOUR SPACE
//                   </Link>
//                   <Link
//                     href={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${
//                       product?.attributes?.details?.warranty?.data?.attributes?.url
//                     }`}
//                     target="_blank"
//                   >
//                     WARRANTY
//                   </Link>

//                   {/* Render this link only if productName is one of our valid names */}
//                   {validProductNames.includes(productName) && (
//                     <Link href="/locate-dealer">LOCATE DEALER</Link>
//                   )}
//                 </div>
//                 <div className="more_tiles">
//                   <div className="tiles_view">
//                     <div className="tiles_name">
//                       More From {product?.attributes?.category?.data?.attributes?.collectionName}
//                     </div>
//                     <Link
//                       href={`/product?category=${
//                         product?.attributes?.category?.data?.attributes?.product?.data?.attributes
//                           ?.slug
//                       }&collection=${product?.attributes?.category?.data?.attributes?.collectionName}`}
//                     >
//                       View More
//                     </Link>
//                   </div>
//                   <div className="tiles_detail">
//                     {collection?.slice(0, 14).map((tile, index) => (
//                       <Link
                     
//                       key={index}
//                       href={`/product/${
//                         product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug
//                       }/${
//                         product?.attributes?.category?.data?.attributes?.slug
//                       }/${tile?.attributes?.slug}`}
//                       className={
//                         tile?.attributes?.slug === product?.attributes?.slug ? 'borderActive' : ''
//                       }
//                     >
//                       <img
//                         src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${tile?.attributes?.swatch?.data?.attributes?.url}`}
//                         alt={tile?.attributes?.swatch?.data?.attributes?.name}
//                         width={55}
//                         height={55}
//                       />
//                     </Link>
                    
//                     ))}
//                   </div>
//                   <div className="dFlex">
//                     <Link
//                       href="#"
//                       className="view_link purpleBg triggerChat"
//                       id="makeInquery"
//                     >
//                       <div className="link_cta">
//                         <div className="arrow_bg">
//                           <Image
//                             src="/images/icons/arrow-2.webp"
//                             alt="arrow"
//                             width={20}
//                             height={17}
//                           />
//                         </div>
//                         <span>
//                           MAKE AN <br />
//                           ENQUIRY
//                         </span>
//                       </div>
//                     </Link>
//                     {lookbookUrls?.data?.[0]?.attributes?.lookbook?.data?.length > 0 && (
//   <button onClick={handleDownloadCatalogue} className="view_link purpleBg cursor_on">
//     <div className="link_cta">
//       <div className="arrow_bg">
//         <Image
//           src="/images/icons/arrow-2.webp"
//           alt="arrow"
//           width={20}
//           height={17}
//         />
//       </div>
//       <span>
//         DOWNLOAD<br />
//        LOOKBOOK
//       </span>
//     </div>
//   </button>
// )}

//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="about_features">
//         {product?.attributes?.details?.point?.map((item, index) => (
//           <div className="about_feature_box border_bg" key={index}>
//             <div className="border_diamond"></div>
//             <div className="border_right"></div>
//             <div className="subtitle_30">
//               {item?.name?.map((point, pointIndex) => (
//                 <span key={pointIndex}>
//                   {point?.children?.map((child, childIndex) => (
//                     <span key={childIndex}>{child?.text}</span>
//                   ))}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       </section>
    
//     </>
//   );
// };

// export default ProductDetail;


"use client";
import React, { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import ProductSlides from './slide';

const ProductDetail = ({ product, collection, lookbookUrls, highResData }) => {
  useEffect(() => {
    const handleChatClick = () => {
      const chatBox = document.querySelector(".sticky_chat");
      if (chatBox) {
        chatBox.click();
      }
    };

    // Get elements by class name
    const elements = document.getElementsByClassName("triggerChat");

    // Attach event listeners to each element
    Array.from(elements).forEach((element) => {
      element.addEventListener("click", handleChatClick);
    });

    // Cleanup event listeners when component unmounts
    return () => {
      Array.from(elements).forEach((element) => {
        element.removeEventListener("click", handleChatClick);
      });
    };
  }, []);

  // Extract the product name for easier checks
  const productName =
    product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.product_name || "";

  // Define valid product names
  const validProductNames = ["Click-N-Lock Tiles Wood ", "Click-N-Lock Tiles Stone", "Multistile"];

  const handleDownloadCatalogue = () => {
    const files = lookbookUrls?.data?.[0]?.attributes?.lookbook?.data;
  
    if (files?.length > 0) {
      files.forEach((file) => {
        const fileUrl = `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${file.attributes.url}`;
  
        // Create a hidden <a> element
        const link = document.createElement("a");
        link.href = fileUrl;
        link.target = "_blank"; // Open in a new tab
        link.rel = "noopener noreferrer"; // Security best practice
        link.style.display = "none"; // Hide the element
        document.body.appendChild(link); // Add to DOM
  
        // Simulate a click
        link.click();
  
        // Remove the element after clicking
        document.body.removeChild(link);
      });
    }
  };

  // const handleDownloadHighRes = () => {
  //   const filesx = highResData?.data?.[0]?.attributes?.high_res_assets_url?.data;
  
  //   if (filesx?.length > 0) {
  //     filesx.forEach((file) => {
  //       const fileUrl = `${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${file.attributes.url}`;
  
  //       // Create a hidden <a> element
  //       const link = document.createElement("a");
  //       link.href = fileUrl;
  //       link.target = "_blank"; // Open in a new tab
  //       link.rel = "noopener noreferrer"; // Security best practice
  //       link.style.display = "none"; // Hide the element
  //       document.body.appendChild(link); // Add to DOM
  
  //       // Simulate a click
  //       link.click();
  
  //       // Remove the element after clicking
  //       document.body.removeChild(link);
  //     });
  //   }
  // };
  const router = useRouter();

  useEffect(() => {
    const handleScrollToSection = () => {
      setTimeout(() => {
        const section = document.getElementById("product-detail-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // Small delay to ensure the page is fully loaded
    };

    router.events?.on("routeChangeComplete", handleScrollToSection);

    return () => {
      router.events?.off("routeChangeComplete", handleScrollToSection);
    };
  }, [router]);

  return (
    <>
      <section id="product-detail-section" data-section="product_detail" className="product_detail">
        <div className="square_box square_box_15"></div>
        <div className="detail_content">
          <div className="bread_crump">
            <ul>
              <li><Link href="/product">PRODUCTS</Link></li>
              <li>
                <Link href={`/product/${product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug}`}>
                  {product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.product_name}
                </Link>
              </li>
              <li>
                <Link href={`/product?category=${product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug}&collection=${product?.attributes?.category?.data?.attributes?.collectionName}`}>
                  {product?.attributes?.category?.data?.attributes?.collectionName}
                </Link>
              </li>
              <li>
                <Link href={`/product/${product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug}/${product?.attributes?.category?.data?.attributes?.slug}/${product?.attributes?.slug}`}>
                  {product?.attributes?.subProductName}
                </Link>
              </li>
            </ul>
          </div>

          <div className="detail_product_content">
            <ProductSlides images={product} />
            <div className="about_our_product">
              <h2 className="subtitle_5504">{product?.attributes?.subProductName}</h2>
              <p>
                {product?.attributes?.details?.description?.map((item, index) => (
                  <span key={index}>
                    {item?.children?.map((child, childIndex) => (
                      <span key={childIndex}>{child?.text}</span>
                    ))}
                  </span>
                ))}
              </p>
              
              <div className="product_subContent">
                <div className="specified_links">
             
                  {highResData?.data?.[0]?.attributes?.high_res_assets_url?.length > 0 && (
                         <Link href={highResData?.data?.[0]?.attributes?.high_res_assets_url}>DOWNLOAD HI-RES TILE IMAGES</Link>
                      // <button onClick={handleDownloadHighRes} className="view_link purpleBg cursor_on">
                      //   <div className="link_cta">
                      //     <div className="arrow_bg">
                      //       <Image src="/images/icons/arrow-2.webp" alt="arrow" width={20} height={17} />
                      //     </div>
                      //     <span>DOWNLOAD<br />HI-RES ASSETS
                      //     </span>
                      //   </div>
                      // </button>
                    )}
                  <Link href={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${product?.attributes?.details?.warranty?.data?.attributes?.url}`} target="_blank">
                    WARRANTY
                  </Link>
                </div>
                
                <div className="more_tiles">
                  <div className="tiles_view">
                    <div className="tiles_name">
                      More From {product?.attributes?.category?.data?.attributes?.collectionName}
                    </div>
                    <Link href={`/product?category=${product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug}&collection=${product?.attributes?.category?.data?.attributes?.collectionName}`}>
                      View More
                    </Link>
                  </div>
                  
                  <div className="tiles_detail">
                    {collection?.slice(0, 14).map((tile, index) => (
                      <Link
                        key={index}
                        href={`/product/${product?.attributes?.category?.data?.attributes?.product?.data?.attributes?.slug}/${product?.attributes?.category?.data?.attributes?.slug}/${tile?.attributes?.slug}`}
                        className={tile?.attributes?.slug === product?.attributes?.slug ? 'borderActive' : ''}
                        scroll={false} // Prevent Next.js from scrolling automatically
                      >
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${tile?.attributes?.swatch?.data?.attributes?.url}`}
                          alt={tile?.attributes?.swatch?.data?.attributes?.name}
                          width={55}
                          height={55}
                        />
                      </Link>
                    ))}
                  </div>

                  <div className="dFlex">
                    <Link href="#" className="view_link purpleBg triggerChat" id="makeInquery">
                      <div className="link_cta">
                        <div className="arrow_bg">
                          <Image src="/images/icons/arrow-2.webp" alt="arrow" width={20} height={17} />
                        </div>
                        <span>MAKE AN <br /> ENQUIRY</span>
                      </div>
                    </Link>

                    {lookbookUrls?.data?.[0]?.attributes?.lookbook?.data?.length > 0 && (
                      <button onClick={handleDownloadCatalogue} className="view_link purpleBg cursor_on">
                        <div className="link_cta">
                          <div className="arrow_bg">
                            <Image src="/images/icons/arrow-2.webp" alt="arrow" width={20} height={17} />
                          </div>
                          <span>DOWNLOAD<br />LOOKBOOK</span>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about_features">
          {product?.attributes?.details?.point?.map((item, index) => (
            <div className="about_feature_box border_bg" key={index}>
              <div className="border_diamond"></div>
              <div className="border_right"></div>
              <div className="subtitle_30">
                {item?.name?.map((point, pointIndex) => (
                  <span key={pointIndex}>
                    {point?.children?.map((child, childIndex) => (
                      <span key={childIndex}>{child?.text}</span>
                    ))}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
