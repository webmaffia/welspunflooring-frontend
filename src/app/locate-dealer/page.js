"use client";
import { useEffect, useState } from "react";
import ContactForm from "../component/homepage/contactus";
import { fetchDealers } from "../utils/fetchDealers";

export default function LocateDealersPage() {
  const [dealers, setDealers] = useState([]);
  const [filteredDealers, setFilteredDealers] = useState([]);
  const [selectedMap, setSelectedMap] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [nearbyMessage, setNearbyMessage] = useState("");

  useEffect(() => {
    async function loadDealers() {
      const dealersData = await fetchDealers();
      setDealers(dealersData);
      setFilteredDealers(dealersData);

      if (dealersData.length > 0) {
        const firstDealer = dealersData[0].attributes;
        let mapUrl;
      
        // Check if googleMap exists
        if (firstDealer.googleMap) {
          mapUrl = `https://www.google.com/maps/embed?pb=${firstDealer.googleMap}`;
        } else if (firstDealer.maplink) {
          // Remove HTML tags and 'pb=' from the maplink if googleMap doesn't exist
          const cleanedLink = firstDealer.maplink.replace(/<[^>]*>/g, "").replace('pb=', '');
      
          // If cleanedLink exists, use it in the embed URL format, else fallback to 404 image
          mapUrl = cleanedLink ? `https://www.google.com/maps/embed?${cleanedLink}` : "/images/404.png";
        } else {
          // Fallback to 404 image if neither googleMap nor maplink is available
          mapUrl = "/images/404.png";
        }
      
        setSelectedMap(mapUrl);
      }
      
      
    }

    loadDealers();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const filtered = dealers.filter((dealer) => {
      const { billingCity, OutletName } = dealer.attributes;
      return (
        (billingCity.toLowerCase().includes(cityInput.toLowerCase()) || cityInput === "") &&
        (OutletName.toLowerCase().includes(nameInput.toLowerCase()) || nameInput === "")
      );
    });
    setFilteredDealers(filtered);
    setNearbyMessage("");  // Clear any previous nearby message on search
  };

  const handleDirectionClick = (googleMap, maplink) => {
    // If googleMap exists, use the Google Maps embed URL
    if (googleMap) {
      setSelectedMap(`https://www.google.com/maps/embed?pb=${googleMap}`);
    } else if (maplink) {
      // Remove HTML tags and 'pb=' from the URL if maplink exists
      const otherLink = maplink.replace(/<[^>]*>/g, "");
      const cleanedLink = otherLink.replace('pb=', '');
      
      // Use the cleanedLink as an embed URL, or fallback to 404 image if invalid
      setSelectedMap(cleanedLink ? `https://www.google.com/maps/embed?pb=${cleanedLink}` : "/images/404.png");
    } else {
      // Fallback to 404 image if neither googleMap nor maplink is available
      setSelectedMap("/images/404.png");
    }
  };
  
  

  return (
    <div className="product_wrapper">
      <section data-section="locate_dealer" className="locate_dealer">
        <div className="locate_container">
          <div className="locate_contact">
            <h1 className="subtitle_2904">Locate dealer</h1>
            <form className="locate_form" onSubmit={handleSearch}>
              <label className="locate_label">
                <input
                  type="text"
                  placeholder="City or Address"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                />
              </label>
              <label className="locate_label">
                <input
                  type="text"
                  placeholder="Name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
              </label>
              <label className="locate_cta">
                <button type="submit" className="cta_search view_link purpleBg">
                  <div className="link_cta">
                    <div className="arrow_bg">
                      <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                    </div>
                    <span>SEARCH <br /> DEALERS</span>
                  </div>
                </button>
              </label>
            </form>
          </div>

          {nearbyMessage ? (
            <div className="no-nearby-dealers">{nearbyMessage}</div>
          ) : (
            <div className="address_locate_container">
                <div className="address_locate_box">
              {filteredDealers.map((dealer) => (
                <div className="address_locate_items" key={dealer.id}>
                  <div className="address_locate_detail">
                    <div className="address_locate_title">{dealer.attributes.OutletName}</div>
                    <div className="address_locate_para">
                      {dealer.attributes.address} <br />
                    </div>
                  </div>
                  <button
                    onClick={() => handleDirectionClick(dealer.attributes.googleMap, dealer.attributes.maplink)}
                    className="view_link"
                  >
                    <div className="link_cta">
                      <div className="arrow_bg">
                        <img src="/images/icons/arrow-2.webp" alt="" width="20" height="17" />
                      </div>
                      <span>DIRECTIONS</span>
                    </div>
                  </button>
                </div>
              ))}
              </div>
            </div>
          )}
        </div>

        <div className="locate_map">

       
          {selectedMap && filteredDealers.length > 0 && (
            selectedMap === "/images/404.png" ? (
              <div class="not_map"><span>Map Not Available</span></div>
            ) : (
              <iframe
                src={selectedMap}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )
          )}
        </div>
      </section>

      <section data-section="diamond_locate" className="diamond_locate">
        <div className="diamond_border"><span></span></div>
      </section>

      <ContactForm />
    </div>
  );
}
