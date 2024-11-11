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
        const mapUrl = firstDealer.googleMap
          ? `https://www.google.com/maps/embed?pb=${firstDealer.googleMap}`
          : firstDealer.maplink;
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

  // Haversine formula to calculate distance in km
  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleNearMeClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          const nearbyDealers = dealers.filter((dealer) => {
            const dealerLat = parseFloat(dealer.attributes.latitude);
            const dealerLng = parseFloat(dealer.attributes.longitude);

            const distance = getDistanceFromLatLonInKm(userLat, userLng, dealerLat, dealerLng);
            return distance <= 100; // Dealers within 100 km
          });

          setFilteredDealers(nearbyDealers);
          setNearbyMessage(
            nearbyDealers.length === 0
              ? "No dealers found within 100km of your location."
              : ""
          );
        },
        (error) => {
          console.error("Error retrieving location:", error);
          alert("Unable to retrieve your location. Please enable location services and try again.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleDirectionClick = (googleMap, maplink) => {
    const mapUrl = googleMap
      ? `https://www.google.com/maps/embed?pb=${googleMap}`
      : maplink;
    setSelectedMap(mapUrl);
  };

  return (
    <div className="product_wrapper">
      <section data-section="locate_dealer" className="locate_dealer">
        <div className="locate_container">
          <div className="locate_contact">
            <div className="subtitle_2904">Locate dealer</div>
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
                <button
                  type="button"
                  onClick={handleNearMeClick}
                  className="cta_deal greyBg"
                >
                  <div className="link_cta">
                    <div className="arrow_bg">
                      <img src="/images/icons/download_black.webp" alt="" width="17" height="26" />
                    </div>
                    <span>DEALERS <br /> NEAR ME</span>
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
                      {dealer.attributes.address}, {dealer.attributes.billingCity}, {dealer.attributes.stateName} {dealer.attributes.pincode} <br />
                      {dealer.attributes.billingCity}, {dealer.attributes.stateName} {dealer.attributes.pincode}
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
            <iframe
              src={selectedMap}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
