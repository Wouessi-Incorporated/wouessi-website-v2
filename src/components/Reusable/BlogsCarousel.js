import React, { useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { BsArrowRightShort } from "react-icons/bs";
import BlogsData from "../../content/BlogData";
import { useParams } from "react-router-dom";
import content from "../../content/Home/OurVision.json"; 

const BlogsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 2; // Number of visible items at a time
  const totalItems = BlogsData.length;
  const itemsPerPage = itemsToShow;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? numberOfPages - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === numberOfPages - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="w-[80%] mt-[5vw] text-[1.5vw] text-left font-bold mb-[2vw] max-[450px]:text-[4vw] max-[450px]:">
          Explore more articles
        </h1>
      </div>
    <div className="relative flex items-center justify-center mt-[5vw]">
      <div
        onClick={goToPrevious}
        className="absolute left-0 flex justify-center items-center text-[2vw] text-black w-[4.5vw] h-[4.5vw] rounded-full bg-[#ECECEC] cursor-pointer z-10 hover:text-[#FF9900]">
        <HiOutlineArrowSmLeft />
      </div>
      <div className="overflow-hidden w-[80%]">
        <h1 className="text-[1.5vw] text-left font-bold mb-[2vw]">Explore more articles</h1>
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
          {BlogsData.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-[calc(50%_-_1vw)] pb-[2vw] bg-white rounded-2xl mx-[0.5vw]">
              <div className="flex w-full h-[29vw]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="flex justify-center">
                <div className="w-[90%] flex justify-between items-center bg-white text-black h-[7vw]">
                  <div className="flex flex-col text-left pt-8">
                    <h2 className="text-[1.2vw] font-bold mb-[0.5vw]">{card.title}</h2>
                    <p className="text-[1vw]">{card.tags}</p>
                  </div>
                  <div className="w-[15vw] h-[3.5vw] border-[#250978] border-[0.1vw] rounded-md bg-white text-[1.1vw] mr-[1vw] flex items-center justify-center cursor-pointer">
                    See Articles
                    <BsArrowRightShort className="text-[2vw]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={goToNext}
        className="absolute right-0 flex justify-center items-center text-[2vw] text-black w-[4.5vw] h-[4.5vw] rounded-full bg-[#ECECEC] cursor-pointer z-10 hover:text-[#FF9900]">
        <HiOutlineArrowSmRight />
      </div>
    </div>

   </div> 
  );
};

export default BlogsCarousel;
