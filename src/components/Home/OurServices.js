import { CgArrowLongUp } from "react-icons/cg";
import DigitalMarketingImage from "../../assets/Images/what-we-do-digital-marketing.jpeg";
import SoftwareEngineeringImage from "../../assets/Images/what-we-do-software-engineering.jpeg";
import { Link } from "react-router-dom";
import content from "../../content/Home/OurService.json";

function OurServices({lang}) {
  const Content = content[lang]; 
  
  return (
    <>
      <div className="bg-[#F4F4F4] pb-[5vw] pt-[4vw] flex justify-center max-[450px]:pt-[8vw] max-[450px]:pb-[10vw]">
        <div className="w-[80%] h-full text-left">
          <p className="text-[1.1vw] text-[#666666] font-normal max-[450px]:text-[2.5vw]">
          {Content.heading}
          </p>
          <h1 className="text-[3.5vw] text-[#2E2E2E] font-bold mb-[1vw] max-[450px]:text-[6vw] max-[450px]:mt-[2vw]">
          {Content.heading}
          </h1>

          <div className="flex justify-between pt-[2vw] pb-[2vw] max-[450px]:flex-col">
            <div className="flex flex-col">
              <h1 className="text-[3vw] text-[#2E2E2E] font-bold max-[450px]:text-[4.5vw]/[5.5vw]">
              {Content.softwareEngineering.title1}<br/>{Content.softwareEngineering.title2}
              </h1>
              <div className="flex w-[36vw] items-end justify-between max-[450px]:w-full max-[450px]:items-center">
                <div className="flex items-center border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] max-[450px]:text-[2.7vw] max-[450px]:h-fit max-[450px]:w-[40vw]">
                {Content.softwareEngineering.description}
                </div>
                <div>
                  <Link to={`/${lang}/Services`}>
                    <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[10vw] h-[10vw] text-[1.1vw] text-white cursor-pointer bg-[#2703A5] hover:bg-white hover:text-black hover:border-black transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] mt-[-6vw]">
                    {Content.softwareEngineering.link}
                      <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${SoftwareEngineeringImage})` }}
              className="w-[35vw] h-[25vw] mt-[5vw] bg-cover bg-[center] flex max-[450px]:w-full max-[450px]:h-[55vw]"></div>
          </div>

          <div className="flex justify-between border-t-[0.01vw] border-[#9C9C9C] pt-[2vw] max-[450px]:w-full max-[450px]:flex-col max-[450px]:w-full max-[450px]:gap-y-[4vw] max-[450px]:border-none">
            <div className="flex flex-col mt-[6vw] min-[450.1px]:hidden">
              <h1 className="text-[3vw] text-[#2E2E2E] font-bold text-[4.5vw]/[5.5vw]">
              {Content.digitalMarketing.title1}<br/>{Content.digitalMarketing.title2}
              </h1>
              <div className="flex w-[36vw] items-end justify-between w-full items-center">
                <div className="flex items-center border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] text-[2.7vw] h-fit w-[40vw]">
                {Content.digitalMarketing.description}
                </div>
                <div>
                  <Link to={`/${lang}/Services`}>
                    <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[10vw] h-[10vw] text-[1.1vw] text-white cursor-pointer bg-[#2703A5] hover:bg-white hover:text-black hover:border-black transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] mt-[-6vw]">
                    {Content.digitalMarketing.link}
                      <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <div
              style={{ backgroundImage: `url(${DigitalMarketingImage})` }}
              className="w-[35vw] h-[25vw] bg-cover bg-[center_right_-0.5vw] flex max-[450px]:w-full max-[450px]:h-[55vw]"></div>
            
            <div className="flex flex-col max-[450px]:hidden">
              <h1 className="text-[3vw] text-[#2E2E2E] font-bold">
              {Content.digitalMarketing.title1}<br/>{Content.digitalMarketing.title2}
              </h1>
              <div className="flex w-[36vw] items-end justify-between">
                <div className="flex border-[#9C9C9C] border-l-[0.1vw] h-[7vw] w-[22vw] text-[1.3vw] text-[#787878] pl-[1vw] ml-[2.8vw] items-center">
                {Content.digitalMarketing.description}
                </div>
                <div>
                  <Link to={`/${lang}/Services`}>
                    <div className="border-black border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] w-[10vw] h-[10vw] text-[1.1vw] text-white cursor-pointer bg-[#2703A5] hover:bg-white hover:text-black hover:border-black transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] mt-[-6vw]">
                    {Content.digitalMarketing.link}
                      <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
