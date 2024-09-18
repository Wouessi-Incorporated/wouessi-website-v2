import React, { useState } from "react";
import ServicesSpotlightData from "../../content/ServicesSpotlightData";
import content from "../../content/Home/ServiceSpotlight.json"; 

function ServiceSpotlight({lang}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const Content = content[lang]; 

  return (
    <>
      <div className="bg-white pt-[4vw] pb-[5vw] flex justify-center max-[450px]:pt-[7vw] max-[450px]:pb-[7vw]">
        <div className="w-[80%] h-full text-left">
          <p className="text-[1.1vw] text-[#666666] font-normal max-[450px]:text-[2.5vw]">
            {Content.serviceSpotlight.sectionTitle}
          </p>
          <h1 className="text-[3.5vw] text-[#2E2E2E] font-bold mt-[0.2vw] mb-[4vw] max-[450px]:text-[6vw] max-[450px]:mt-[2vw]">
            {Content.serviceSpotlight.heading}
          </h1>
          <div className="flex flex-wrap gap-y-[1vw] justify-center max-[450px]:gap-y-[2vw] max-[450px]:gap-x-[1vw]">
            {ServicesSpotlightData.map((service, index) => (
              <div
                key={index}
                className={`rounded-full border-[0.02vw] text-[3vw] border-[#2B00AC] p-[1vw] text-[#2B00AC] cursor-pointer transition-all ease-in-out duration-500 max-[450px]:text-[4vw] max-[450px]:p-[2vw]
        ${
          hoveredIndex === index
            ? "scale-100 border-[#FF9900] text-[#FF9900]"
            : "scale-95"
        }
        ${
          hoveredIndex !== null && hoveredIndex !== index
            ? "scale-95 opacity-50"
            : ""
        }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSpotlight;
