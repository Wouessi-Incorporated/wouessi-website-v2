import React, { useState } from "react";
import OurApproachUnderstandYourBusiness from "../assets/OurApproachUnderstandYourBusiness.jpeg";
import OurApproachStrategicPlanning from "../assets/OurApproachStrategicPlanning.jpeg";
import OurApproachInnovativeExecution from "../assets/OurApproachInnovativeExecution.jpeg";
import ContinuousImprovement from "../assets/ContinuousImprovement.png";
import {
  PiArrowCircleLeftLight,
  PiArrowCircleRight,
  PiArrowCircleRightLight,
} from "react-icons/pi";

function OurApproachCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(cards.length / 3) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === Math.ceil(cards.length / 3) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const cards = [
    {
      image: OurApproachUnderstandYourBusiness,
      title: "Understand",
      subtitle: "Your Business",
      hoverTitle: "Understanding Your Business",
      hoverContent:
        "Regardless of your business size, we will analyze your current digital gaps and formulate customized and transformational digital strategies.",
    },
    {
      image: OurApproachStrategicPlanning,
      title: "Strategic",
      subtitle: "Planning",
      hoverTitle: "Strategic Planning",
      hoverContent:
        "In our planning process, we study the patterns of the marketplace, customers, and KPIs, and develop efficient strategies for your marketing campaigns and software development.",
    },
    {
      image: OurApproachInnovativeExecution,
      title: "Innovative",
      subtitle: "Execution",
      hoverTitle: "Innovative Execution",
      hoverContent:
        "With the help of modern technologies and tools, we create perfect software and launch efficient marketing campaigns fully customized for your specific business needs.",
    },
    {
      image: ContinuousImprovement,
      title: "Improvement",
      subtitle: "Execution",
      hoverTitle: "Innovative Execution",
      hoverContent:
        "With the help of modern technologies and tools, we create perfect software and launch efficient marketing campaigns fully customized for your specific business needs.",
    },
    {
      image: ContinuousImprovement,
      title: "Improvement",
      subtitle: "Execution",
      hoverTitle: "Innovative Execution",
      hoverContent:
        "With the help of modern technologies and tools, we create perfect software and launch efficient marketing campaigns fully customized for your specific business needs.",
    },
  ];
  return (
    <div className="overflow-hidden pl-[8vw] mt-[3vw]">
      <h1 className="text-[3vw] text-left pl-[1vw] font-bold max-[450px]:text-[7vw]">
        Our Approach
      </h1>
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 99}%)` }}>
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-[33%] p-[1.3vw]">
            <div className="rounded-lg overflow-hidden">
              <div
                style={{ backgroundImage: `url(${card.image})` }}
                className="w-[full] h-[30vw] bg-cover bg-center">
                <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={`${
                    hoveredIndex === index &&
                    card.hoverTitle &&
                    card.hoverContent
                      ? "w-full h-full bg-[#2B00AC] p-[2vw] text-white text-left"
                      : "flex items-end text-left pl-[0.4vw] text-white bg-gray-500/35 w-full h-full font-bold text-[2vw]"
                  } transition duration-300 ease-out`}>
                  {hoveredIndex === index ? (
                    <div>
                      <h1 className="text-[1.5vw] font-bold">
                        {card.hoverTitle}
                      </h1>
                      <p className="text-[1.1vw] mt-[1vw]">
                        {card.hoverContent}
                      </p>
                    </div>
                  ) : (
                    card.item
                  )}
                </div>
              </div>

              <h2 className="font-bold text-[2vw] text-left pl-[0.4vw]">
                {card.subtitle}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-x-[0.5vw] w-[full]">
        <PiArrowCircleLeftLight
          onClick={goToPrevious}
          className="flex justify-center items-center text-[2vw] text-[#C8CFD5] w-[4.5vw] h-[4.5vw] ml-[1vw] cursor-pointer z-10 hover:text-[#FF9900]"
        />

        <PiArrowCircleRightLight
          onClick={goToNext}
          className="flex justify-center items-center text-[2vw] text-[#C8CFD5] w-[4.5vw] h-[4.5vw] cursor-pointer z-10 hover:text-[#FF9900]"
        />
      </div>
    </div>
  );
}

export default OurApproachCarousel;
