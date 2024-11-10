// app/sustainability/page.js
import React from "react";
import Banner from "../component/sustainability/banner";
import ZeroWaste from "../component/sustainability/zerowaste";
import ZeroEmission from "../component/sustainability/zeroemission";
import ZeroNonRenewableEnergy from "../component/sustainability/zerononrenewal";
import Principle from "../component/sustainability/principle";
import ESG from "../component/sustainability/esg";
import Environment from "../component/sustainability/environment";
import AirSection from "../component/sustainability/air";
import WaterSection from "../component/sustainability/watersection";
import LandSection from "../component/sustainability/landsection";

import ContactForm from "../component/homepage/contactus";
import SustainabilityPlans from "../component/sustainability/plans";

const SustainabilityPage = () => {
  return (
    <main className="wrapper">
      <div className="product_wrapper">
        <Banner />
        <ZeroWaste />
        <ZeroEmission />
        <ZeroNonRenewableEnergy />
        <Principle />
        <ESG />
        <Environment />
        <AirSection />
        <WaterSection />
        <LandSection />
   <SustainabilityPlans />
        <ContactForm />
      </div>
    </main>
  );
};

export default SustainabilityPage;
