
import TechLogos from "../../content/TechLogo";
import { useParams } from "react-router-dom";
import content from "../../content/Home/OurVision.json"; 

function TechStack () {
    return <>
    <div className="flex justify-center my-[5vw] ">
          <div className="w-[80%]">
            <h1 className="text-[3vw] text-left font-bold max-[450px]:text-[7vw]">
              Tech Stack
            </h1>
            <div className="grid grid-cols-5 gap-4 mt-[3vw]  max-[450px]:mb-[8vw]">
              {TechLogos.map((LogoComponent, index) => (
                <img
                  alt =""
                  key={index}
                  src={LogoComponent}
                  className={`flex justify-center items-center p-4 max-[450px]:p-1 w-[12vw] h-[12vw] ${
                    Math.floor(index / 5) !== 4 ? "border-b" : ""
                  }`}
                ></img>
              ))}
            </div>
          </div>
        </div></>
}


export default TechStack;