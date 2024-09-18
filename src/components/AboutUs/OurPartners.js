import React from "react";
import Slider from "react-infinite-logo-slider";
import partnersLogos from "../../content/PartnersLogoData"; 
import { useParams } from "react-router-dom";
import content from "../../content/Home/OurVision.json"; 

function OurClients() {
  return (
    <>
      <div className="flex justify-center mb-[2vw]">
        <div className="w-[80%]">
          <h1 className="text-[3vw] text-left font-bold max-[450px]:text-[7vw]">
            Our Partners
          </h1>
        </div>
      </div>
      <Slider
        width="250px"
        duration={60}
        pauseOnHover={true}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        {partnersLogos.map((logo, index) => (
          <Slider.Slide key={index}>
            <img src={logo.src} alt={logo.alt} className="w-25" />
          </Slider.Slide>
        ))}
      </Slider>
    </>
  );
}

export default OurClients;
