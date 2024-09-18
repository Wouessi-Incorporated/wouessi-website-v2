import { useParams } from "react-router-dom";
import content from "../../content/Home/OurVision.json"; 

function HeroBanner({ Header, Content, BannerImage }) {
  return (
    <div className="flex items-center justify-center mb-[13vw] max-[450px]:mt-[13vw]">
      <div className="w-[6.5vw] h-[28vw] bg-[#2B00AC] mt-[-2vw] max-[450px]:hidden"></div>
      <div
        style={{ backgroundImage: `url(${BannerImage})` }}
        className="w-[30vw] h-[40vw] bg-cover bg-[center] max-[450px]:absolute max-[450px]:ml-[-70vw] max-[450px]:mt-[-30vw] max-[450px]:w-[33vw] max-[450px]:h-[38vw]"></div>
      <div>
        <div className="flex justify-center items-center w-[44vw] h-[28vw] bg-[#2B00AC] mt-[2vw] max-[450px]:p-[4vw] max-[450px]:items-end max-[450px]:h-fit max-[450px]:w-full">
          <div className="flex flex-col gap-y-[2vw] text-[2vw] text-[#B0B0B0] text-left min-[450.1px]:hidden">
            <p>PROCESS</p> <p>CREATIVITY</p> <p>EXPERIENCE</p>
          </div>
          <div className="w-[80%] text-left text-white">
            <div className="flex">
              <h1 className="text-[3.5vw]/[4.2vw] font-bold max-[450px]:text-[6vw]/[7vw] max-[450px]:ml-[8vw]">
                {Header}
              </h1>
              <div className="w-[12vw] flex justify-end items-center"></div>
            </div>
            <div className="flex justify-between mt-[3vw] max-[450px]:flex-col max-[450px]:ml-[8vw]">
              <div className="border-t-[0.1vw] border-white w-[5vw] h-[5vw] max-[450px]:w-[15vw]"></div>
              <p className="text-[1.1vw] w-[80%] mt-[-1vw] max-[450px]:text-[2.5vw] max-[450px]:w-[100%]">
                {Content}
              </p>
            </div>
          </div>
        </div>
        <p className="mt-[2.5vw] text-[1vw] text-[#757575] max-[450px]:hidden">
          PROCESS &#x2022; CREATIVITY &#x2022; EXPERIENCE
        </p>
      </div>
    </div>
  );
}

export default HeroBanner;
