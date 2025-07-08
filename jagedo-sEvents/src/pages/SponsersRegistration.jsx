import React from "react";
import NavBar from "../components/NavBar";
import NavBar2 from "../components/NavBar2";

const SponsorsRegistration = () => {
  return (
  <div className="flex-1" style={{ height: 'calc(100vh - 140px)'}}>
    <div className="bg-white shadow-md sticky top-0 z-50">
        <NavBar2 />
        <NavBar />
      </div>
    <div className="h-full bg-white border-gray-200">
      <div className="relative h-full">
        <iframe
          title="JAGEDO BUILDERS INNOVATION SUMMIT - SPONSORS"
          src="https://forms.zohopublic.com/jagedoinnovationslimited1/form/JAGEDOBUILDERSINNOVATIONSUMMITSPONSORS/formperma/vNCLH1TYFzA1MGU_GSsZpSCWHpTOzC1sAaZNC4Ma3vY"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
  );
};

export default SponsorsRegistration;
