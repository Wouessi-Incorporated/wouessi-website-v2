import { CgArrowLongUp } from "react-icons/cg";
import { Link } from "react-router-dom";
import HeroBannerVideo from "../../assets/Video/HeroBannerVideo.mp4";
import content from "../../content/Home/Hero.json"; 

function Hero({lang}) {
  const Content = content[lang]; 

  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-left w-[80%] text-left max-[450px]:justify-center">
          <div className="flex flex-col">
            <h2 className="text-[2vw] font-light max-[450px]:text-[5vw]">
              {Content.heading1} 
            </h2>
            <div className="flex items-center gap-x-[1vw] mt-[-4vw]">
              <h1 className="text-[12vw] font-extrabold max-[450px]:text-[18vw]">
                {Content.subheading1} 
              </h1>
              <div className="bg-[#FF9900] rounded-full w-[7vw] h-[7vw] ml-[25vw] mt-[5vw] min-[450.1px]:hidden"></div>
              <p className="w-[16vw] text-left text-[1.3vw] max-[450px]:hidden">
                {Content.description} 
              </p>
            </div>
            <div className="flex items-center mt-[-8vw] max-[450px]:mt-[-12vw]">
              <div className="flex justify-center w-[24vw] max-[450px]:w-[27.5vw]">
                <div className="bg-[#FF9900] rounded-full w-[5vw] h-[5vw] max-[450px]:hidden"></div>
              </div>
              <h1 className="text-[12vw] font-extrabold z-10 max-[450px]:text-[18vw]">
                {Content.subheading2} 
              </h1>
            </div>
          </div>
          <div>
            <Link to={`/${lang}/Portfolio`}>
              <div className="border-black border-[0.1vw] hover:bg-[#2703A5] hover:text-white transition ease-in-out duration-300 rounded-full flex items-center justify-center mt-[1vw] ml-[8vw] gap-x-[0.3vw] w-[14vw] h-[14vw] text-[1.1vw] cursor-pointer max-[450px]:hidden">
                {Content.buttonText} 
                <CgArrowLongUp className="text-[1.1vw] rotate-[60deg]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[-5vw] max-[450px]:mt-[-7vw]">
        <div className="flex justify-end w-[80%] h-[28vw] max-[450px]:w-full max-[450px]:flex-none max-[450px]:justify-start max-[450px]:h-[42vw]">
          <div className="w-[62vw] max-[450px]:w-full relative">
            <video
              src={HeroBannerVideo}
              className="h-full bg-cover bg-[center_-6vw] opacity-90 max-[450px]:w-full max-[450px]:bg-[center_-10vw]"
              autoPlay
              muted
              loop
              controls={false}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
