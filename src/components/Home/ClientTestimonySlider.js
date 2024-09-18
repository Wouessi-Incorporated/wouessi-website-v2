import { useState, useEffect, useCallback } from "react";
import HomepageTestimonyData from "../../content/HomepageTestimonyData.json";
import AboutUsPageTestimonyData from "../../content/AboutUspageTestimonyData.json";
import { PiArrowCircleRightLight, PiArrowCircleLeftLight } from "react-icons/pi";
import QuoteIcon from "../../assets/SVG/QuoteIcon.svg";
import { useParams } from "react-router-dom";
import content from "../../content/Home/ClientTestimony.json"

function ClientTestimonySlider({ isHomepage = true }) {
  const [testimonySlider, updateTestimonySlider] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const {lang} = useParams();

  const testimonyData = isHomepage
    ? HomepageTestimonyData[lang]
    : AboutUsPageTestimonyData[lang];
  const testimonyCount = testimonyData.length;
  const backgroundColor = isHomepage ? "bg-white" : "bg-[#F4F4F4]";
  const cardColor = isHomepage ? "bg-[#F4F4F4]" : "bg-white";



  const handleNext = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      updateTestimonySlider((testimonySlider + 1) % testimonyCount);
      setIsAnimating(false);
    }, 500);
  }, [testimonySlider, testimonyCount]); 

  // Autoplay functionality with useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); 
  }, [handleNext]); 

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      updateTestimonySlider(
        testimonySlider === 0 ? testimonyCount - 1 : testimonySlider - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className={`flex justify-center ${backgroundColor}`}>
      <div className="w-[80%] max-[450px]:mb-[4vw]">
        <h1 className="w-full text-left text-[#666666] mt-[4vw] max-[450px]:text-[3vw] max-[450px]:mt-[8vw]">
          {content[lang].heading}
        </h1>
        <div className="flex justify-center gap-x-[4vw] mt-[3vw] mb-[3vw]">
          <img
            alt="Quote Icon"
            src={QuoteIcon}
            className="w-[6vw] h-[6vw] mb-[1vw] max-[450px]:hidden"
          />
          <div
            className={`flex justify-center items-center text-left w-[50vw] h-fit mt-[4vw] ${cardColor} overflow-hidden relative`}
          >
            {/* Sliding Testimonial Content */}
            <div
              className={`w-fit h-fit transform transition-transform duration-500 ${
                isAnimating ? "translate-x-[-100%]" : "translate-x-0"
              }`}
            >
              <div className="flex flex-col justify-center items-center p-[3vw] h-[25vw] max-[450px]:h-[50vw] text-center max-[450px]:p-[5vw]">
                <p className="text-[1.5vw] mb-[3vw] text-[#A7A9AA] max-[450px]:text-[3vw]">
                  {testimonyData[testimonySlider].comment}
                </p>
                <h2 className="text-[1.8vw] font-bold text-[#0A0907] max-[450px]:text-[5vw]">
                  {testimonyData[testimonySlider].name}
                </h2>
                <div className="flex flex-wrap space-x-[0.5vw] justify-center text-[1.5vw] text-[#666666] max-[450px]:text-[3vw]">
                  <p>{testimonyData[testimonySlider].role}</p>
                  <p className="w-fit">{testimonyData[testimonySlider].location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Slider Buttons */}
        <div className="flex justify-center gap-x-[0.5vw] w-full p-[2vw]">
          <PiArrowCircleLeftLight
            onClick={handlePrev}
            className="flex justify-center items-center text-[2vw] text-[#C8CFD5] w-[6.5vw] h-[6.5vw] ml-[1vw] cursor-pointer z-10 hover:text-[#FF9900] max-[450px]:w-[10vw] max-[450px]:h-[10vw]"
          />
          <PiArrowCircleRightLight
            onClick={handleNext}
            className="flex justify-center items-center text-[2vw] text-[#C8CFD5] w-[6.5vw] h-[6.5vw] cursor-pointer z-10 hover:text-[#FF9900] max-[450px]:w-[10vw] max-[450px]:h-[10vw]"
          />
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonySlider;
