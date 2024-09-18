import { useState, useEffect } from "react";
import RecentProjectData from "../../content/RecentProjectData"; // Updated import path
import { PiArrowCircleRightLight, PiArrowCircleLeftLight } from "react-icons/pi";
import content from "../../content/Home/RecentProjects.json"; 

function RecentProjects({lang}) {
  const [projSlider, updateProjSlider] = useState(0);
  const sliderLength = RecentProjectData.length;
  const Content = content[lang]; 

  // Automatically slide every 2 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      updateProjSlider((prevIndex) => (prevIndex === sliderLength - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [sliderLength]);

  // Get the current project data
  const currentProject = RecentProjectData[projSlider];

  return (
    <>
      <div className="bg-[#2B00AC] flex justify-center pt-[6vw] pb-[6vw] max-[450px]:pb-[10vw]">
        <div className="w-[80%] text-left flex flex-col">
          <h1 className="text-[#FF9900] text-[1.1vw] font-normal max-[450px]:text-[2.5vw] max-[450px]:mt-[3vw]">
            {Content.recentprojects}
          </h1>
          <div className="flex items-center justify-center">
            <PiArrowCircleLeftLight
              onClick={() =>
                updateProjSlider(projSlider === 0 ? sliderLength - 1 : projSlider - 1)
              }
              className="text-[7vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer mr-[4vw] max-[450px]:text-[10vw]"
            />
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-[70%] max-[450px]:flex-col"
            >
              <div className="flex flex-col justify-center text-white text-[7.5vw] font-extrabold w-[40%] mr-[-13vw] z-10 max-[450px]:mt-[5vw] max-[450px]:mb-[-4vw] max-[450px]:mr-0">
                <h1>{currentProject.titleFirstLine}</h1>
                {currentProject.titleSecondLine && (
                  <h1 className="w-[100%] flex justify-center mt-[-3vw] mb-[-3vw]">
                    {currentProject.titleSecondLine}
                  </h1>
                )}
                {currentProject.titleThirdLine && (
                  <h1>{currentProject.titleThirdLine}</h1>
                )}
              </div>
              <div
                style={{
                  backgroundImage: `url(${currentProject.thumbnail})`,
                }}
                className="w-[45vw] h-[40vw] bg-cover bg-[left] flex transition-all ease-in-out duration-300 max-[450px]:w-[55vw] max-[450px]:h-[50vw]"
              >
                <div className="w-full h-full bg-slate-900/50"></div>
              </div>
            </a>
            <PiArrowCircleRightLight
              onClick={() =>
                updateProjSlider(projSlider === sliderLength - 1 ? 0 : projSlider + 1)
              }
              className="text-[7vw] text-[#C8CFD5] hover:fill-[#FF9900] cursor-pointer ml-[4vw] max-[450px]:text-[10vw]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentProjects;
