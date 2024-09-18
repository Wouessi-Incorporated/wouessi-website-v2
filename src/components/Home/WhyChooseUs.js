import WhyChooseUsBackground from "../../assets/Images/WhyChooseUsBackground.png";
import { CgArrowLongUp } from "react-icons/cg";
import { Link } from "react-router-dom";
import content from "../../content/Home/WhyChooseUs.json"; 

function WhyChooseUS({lang}) {
  const Content = content[lang]; 

  return (
    <>
      <div className="flex justify-center bg-[#2B00AC] gap-x-[6vw] mt-[2vw]">
        <img
          alt="Why Choose Us"
          src={WhyChooseUsBackground}
          className="w-[30vw] h-[45vw] mt-[6vw] mb-[6vw] max-[450px]:hidden"></img>
        <div className="flex flex-col text-left w-[38vw] max-[450px]:w-[80%] max-[450px]:mt-[4vw]">
          <h2 className="text-[1.1vw] mb-[0.7vw] mt-[6vw] text-[#FF9900] max-[450px]:text-[2.5vw]">
            {Content.whyChooseUs.sectionTitle}
          </h2>
          <h1 className="text-[4vw]/[4.5vw] text-left font-bold text-white max-[450px]:text-[6vw]/[7.5vw] max-[450px]:mt-[3vw]">
            {Content.whyChooseUs.heading}
          </h1>
          <div
            style={{ backgroundImage: `url(${WhyChooseUsBackground})` }}
            className="w-full h-[70vw] mt-[6vw] mb-[6vw] bg-cover bg-center min-[450.1px]:hidden"></div>
          <h3 className="text-[1.2vw] mt-[2vw] text-white max-[450px]:text-[3vw] ">
            {Content.whyChooseUs.description}
          </h3>
          <div>
            <Link to={`/${lang}/Services`}>
              <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] mt-[4vw] w-[10vw] h-[10vw] text-[1.1vw] text-white cursor-pointer hover:bg-white hover:text-black hover:border-black transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw] max-[450px]:mb-[10vw] max-[450px]:mt-[8vw]">
                {Content.whyChooseUs.button}
                <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUS;
