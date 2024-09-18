import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaArrowRight } from "react-icons/fa";
import content from "../../content/Home/Achievements.json";
import { Link } from "react-router-dom";

const Achievements = ({lang}) => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const Content = content[lang];

  return (
    <div className="pt-[4vw] pb-[5vw] flex justify-center">
      <div className="w-[80%] h-full text-left" ref={sectionRef}>
        <p className="text-[1.1vw] text-[#666666] font-normal max-[450px]:text-[2.5vw] max-[450px]:mt-[4vw]">
          {Content.aboutUs}
        </p>
        <h1 className="text-[3.5vw] text-[#2E2E2E] font-bold mt-[0.2vw] mb-[4vw] max-[450px]:text-[7vw]/[7vw] max-[450px]:mt-[3vw]">
          {Content.title}
        </h1>

        <div className="grid grid-cols-2 gap-[1vw] max-[450px]:mt-[6vw]">
          {/* First row with 2 boxes */}
          {Content.boxes.slice(0, 2).map((box, index) => (
            <div key={index} className="bg-[#2B00AC] text-white h-[32vw] text-left items-center pt-[5vw] pl-[3vw] rounded-md">
              <h1 className="text-[5vw] font-extrabold max-[450px]:text-[8vw] max-[450px]:mt-[-5vw]">
                {sectionInView ? <CountUp start={0} end={box.count} duration={3} /> : 0}
              </h1>
              <h2 className="text-[3vw]/[4vw] max-[450px]:text-[4vw]/[4.5vw] max-[450px]:font-light">
                {box.description}
              </h2>
              <Link to={`/${lang+box.link}`}>
                     
                    
              <div className="flex items-center mt-[2vw] w-fit text-[1.1vw] font-semibold gap-x-[0.5vw] hover:gap-x-[0.8vw] cursor-pointer max-[450px]:text-[2vw] max-[450px]:mt-[5vw]">
                <p>{box.cta}</p>
                <FaArrowRight />
              </div>
              </Link>

            </div>
          ))}
        </div>

        {/* Second row with 3 boxes */}
        <div className="col-span-3 grid grid-cols-3 gap-[1vw] mt-[1vw]">
          {Content.boxes.slice(2).map((box, index) => (
            <div key={index} className="border-[0.1vw] border-[#2B00AC] h-[22vw] text-left pt-[3vw] pl-[2vw] space-y-[1vw] rounded-md hover:bg-[#2B00AC] hover:pt-[4vw] transition-all ease-in-out duration-300 hover:text-white">
              <h1 className="text-[4vw] font-extrabold max-[450px]:text-[7vw] max-[450px]:mt-[-3vw] max-[450px]:mb-[-2vw]">
                {sectionInView ? <CountUp start={0} end={box.count} duration={3} /> : 0}
              </h1>
              <h2 className="text-[1.3vw] max-[450px]:text-[3vw]">{box.description}</h2>
              <Link to={`/${lang+box.link}`}>
              <div className="flex items-center pt-[1vw] w-fit text-[1.1vw] font-semibold space-x-[0.5vw] hover:space-x-[0.8vw] cursor-pointer max-[450px]:text-[2vw]">
                <p>{box.cta}</p>
                <FaArrowRight />
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
