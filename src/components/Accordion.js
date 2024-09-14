import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";

function Accordion({ title, InnerTextData }) {
  const [accordionOpen, setAccordionOpen] = useState(true);

  const accordionToggle = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="text-left pb-[1.5vw] max-[450px]:pb-[7vw]">
      <div className="flex items-center gap-x-[1.5vw] w-fit max-[450px]:w-full">
        <IoMdArrowDropright
          // onClick={accordionToggle}
          className={`text-[2vw] max-[450px]:text-[5vw]  ${
            accordionOpen ? "" : "transition-all duration-300 rotate-[90deg]"
          }`}
        />
        <div
          onClick={accordionToggle}
          className="max-[450px]:w-full cursor-pointer z-10">
          <h2 className="text-[3.8vw] hover:text-[#FF9900] font-bold max-[450px]:text-[5.5vw]/[6vw] transition-all duration-100 ease-in-out">
            {title}
          </h2>
          <div className="border-b-[0.1vw] border-[#666666] w-[10vw] max-[450px]:mt-[3vw] max-[450px]:w-full"></div>
        </div>
      </div>
      {InnerTextData.map((items, index) => {
        return (
          <div
            key={index}
            className={`transition-all duration-200 ease-linear pl-[6vw] ${
              accordionOpen ? `opacity-0 h-0` : `opacity-100 h-full pt-[1vw]`
            }`}>
            <h3 className="text-[2.8vw] font-bold max-[450px]:text-[4.5vw]/[5.5vw] max-[450px]:pt-[3vw]">
              {items.innerTitle}
            </h3>
            <div className="flex gap-x-[2vw] max-[450px]:flex-col max-[450px]:gap-y-[2vw]">
              {items.innerTitle ? (
                <div className="w-[7vw] border-t-[0.1vw] border-[#666666] max-[450px]:mt-[1vw] max-[450px]:w-[20vw]"></div>
              ) : (
                ""
              )}
              <div className="text-[1vw] w-[90%] max-[450px]:text-[2.5vw]">
                {Array.isArray(items.innerText) ? (
                  items.innerText.map((text, idx) => (
                    <p key={idx} className="mb-[0.5vw]">
                      {text}
                    </p>
                  ))
                ) : (
                  <p>{items.innerText}</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
