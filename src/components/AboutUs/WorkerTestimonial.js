
import QuoteIcon from "../../assets/SVG/QuoteIcon.svg";
import JasmineMHeadshot from "../../assets/Images/JasmineMHeadshot.png";
import { useParams } from "react-router-dom";
import content from "../../content/Home/OurVision.json"; 

function WorkerTestimonial() {
    return <><div className="flex justify-center mb-[3vw] mt-[8vw]">
    <div className="flex justify-center w-[80%]">
      <div
        style={{ backgroundImage: `url(${JasmineMHeadshot})` }}
        className="w-[30vw] h-[37vw] bg-cover bg-center"></div>
      <div>
        <img
          alt = "Quote Icon"
          src={QuoteIcon}
          className="w-[6vw] h-[6vw] ml-[2vw] mb-[1vw]"></img>
        <div className="flex justify-center items-center text-left w-[35vw] h-[27vw] bg-white ml-[-4vw]">
          <div className="p-[3vw]">
            <h1 className="text-[3vw]/[3vw] font-bold">
              Amazing Work Culture
            </h1>
            <p className="text-[1.1vw] mt-[1.5vw]">
              I’ve been provided with the opportunity to expand my skillset
              through the endless support, and choice in varying projects.
              I’ve had a great experience so far and am excited to see where
              this company goes in the future.
            </p>
            <h2 className="text-[1.8vw] font-bold text-[#0A0907] mt-[1vw]">
              Jasmine M.
            </h2>
            <p className="text-[0.9vw] text-[#666666]">
              PROJECT COORDINATOR, Calgary, AB Canada
            </p>
          </div>
        </div>
      </div>
    </div>
  </div></>
}

export default WorkerTestimonial;