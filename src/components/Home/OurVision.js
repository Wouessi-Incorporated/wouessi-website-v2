import { CgArrowLongUp } from "react-icons/cg";
import OurVisionPic from "../../assets/SVG/HomepageOurVision.svg";
import RedefineCollab from "../../assets/SVG/RedefineCollab.svg";
import DriveTransformation from "../../assets/SVG/DriveTransformation.svg";
import { Link } from "react-router-dom";
import content from "../../content/Home/OurVision.json"; 

function OurVision({lang}) {
  const Content = content[lang]; 

  return (
    <>
      <div className="bg-[#2B00AC] mt-[2vw]">
        <div className="flex justify-center bg-[#2B00AC] max-[450px]:mb-[10vw]">
          <div className="w-[80%] max-[450px]:mt-[3vw]">
            <h2 className="text-[1.1vw] text-left mt-[5vw] text-[#FF9900] max-[450px]:text-[2.5vw]">
              {Content.aboutUs}
            </h2>
            <h1 className="text-[3.5vw] text-left mb-[0.7vw] text-white font-bold max-[450px]:text-[7vw]">
            {Content.ourVision}
            </h1>
            <div className="flex justify-center justify-between mt-[2vw] max-[450px]:flex-col max-[450px]:gap-y-[5vw] max-[450px]:mt-[6vw]">
              <div className="flex flex-col text-left text-white w-[43%] max-[450px]:w-full gap-y-[2vw] max-[450px]:gap-y-[5vw]">
                <p className="text-[1.3vw] max-[450px]:text-[3vw]">
                {Content.introParagraph1}{" "}
                </p>
                <p className="text-[1.3vw] max-[450px]:text-[3vw]">
                  {Content.introParagraph2}
                </p>
              </div>
              <div className="space-y-[3vw] text-white text-left z-10 max-[450px]:space-y-[5vw] max-[450px]:mt-[6vw]">
                <div className="flex gap-x-[2vw] items-center">
                  <img alt=""
                    src={RedefineCollab}
                    className="w-[3vw] h-[3vw] max-[450px]:w-[8vw] max-[450px]:h-[8vw]"
                  ></img>
                  <p className="text-[1.5vw] font-bold max-[450px]:text-[4vw]">
                  {Content.redefineCollab}
                  </p>
                </div>
                <div className="flex gap-x-[2vw] items-center max-[450px]:pb-[6vw]">
                  <img alt=""
                    src={DriveTransformation}
                    className="w-[3vw] h-[3vw] max-[450px]:w-[8vw] max-[450px]:h-[8vw]"
                  ></img>
                  <p className="text-[1.5vw] font-bold max-[450px]:text-[4vw]">
                  {Content.driveTransformation}
                  </p>
                </div>
                <div>
                  <Link to={`/${lang}/AboutUs`}>
                    <div className="border-white border-[0.1vw] rounded-full flex items-center justify-center gap-x-[0.3vw] mt-[2vw] w-[10vw] h-[10vw] text-[1.1vw] text-white cursor-pointer hover:bg-white hover:text-black hover:border-black transition ease-in-out duration-300 max-[450px]:w-[25vw] max-[450px]:h-[25vw] max-[450px]:text-[3vw]">
                    {Content.viewMore}
                      <CgArrowLongUp className="text-[1.1vw] rotate-[60deg] max-[450px]:text-[3vw]" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="" src={OurVisionPic} className="w-full mt-[-5vw]"></img>
      </div>
    </>
  );
}

export default OurVision;
