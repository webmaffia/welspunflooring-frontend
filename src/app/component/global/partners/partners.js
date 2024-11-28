import PartnerSlider from "./partnersSlider";

const Partners = async () => {

    async function getHomepageData(segment) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/homepage?populate[${segment}][populate]=partnerLogo.images`,      { cache: 'no-store' } // Ensures no caching for SSR, can be removed if caching is preferred
        );
      
        const data = await res.json();
        return data?.data?.attributes?.[segment] || [];
      }
      const allData = await getHomepageData('default');
  
      // Define visuliserSection with a default empty array to avoid 'undefined' errors
      const partnerSection = allData.length
        ? allData.filter((section) => section.__component === "sections.partners")
        : [];

        const partnerData = partnerSection[0];
       
    return (
        <div>
            <PartnerSlider partnerData={partnerData} />
        </div>
    );
}

export default Partners;