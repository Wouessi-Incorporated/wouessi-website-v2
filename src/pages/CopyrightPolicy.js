import React from "react";
import "../styles/Services.css";
import CopyrightIcon from "../assets/SVG/CopyrightPolicyIcon.svg";
import Accordion from "../components/Accordion";
import CopyrightData from "../helpers/CopyrightPolicyText.json";
import ContactUsSection from "../components/ContactUsSection";

function CopyrightPolicy() {
  return (
    <div className="flex justify-center mt-[5vw]">
      <div className="w-[80%]">
        <div className=" items-center justify-between max-[450px]:flex-col max-[450px]:gap-y-[6vw] relative">
        <div
          style={{ backgroundImage: `url(${CopyrightIcon})`}}
          className="w-[20vw] h-[20vw] bg-cover absolute right-40 max-[450px]:w-[50vw] max-[450px]:h-[50vw] max-[450px]:left-20 max-[450px]:top-5"
        ></div>
          <div>
            <h1 className="text-left w-[70%] text-[4vw]/[6vw] font-bold max-[450px]:text-[7.5vw]/[9.5vw] max-[450px]:w-full">
            Copyright Notice and Disclaimer
            </h1>
          </div>
          <div className="flex gap-x-[2vw] mt-[3vw] max-[450px]:flex-col max-[450px]:gap-y-[2vw]">
            <div className="w-[7vw] border-t-[0.1vw] border-[#666666] max-[450px]:w-full max-[450px]:mt-[1vw] max-[450px]:w-[20vw]"></div>
            <div className="w-[65%] max-[450px]:w-[100%] max-[450px]:mt-[2vw] ">
              <p className="text-left text-[1.1vw] max-[450px]:text-[3vw] max-[450px]:font-semibold">
              Wouessi Inc. ("Company," "We," "Us," or "Our") owns and operates the website https://wouessi.com ("Site"). The content, design, and all materials on the Site, including but not limited to text, images, graphics, logos, videos, software, and other files, and their arrangement (collectively, "Content"), are the property of Wouessi Inc., its licensors, or other third-party content providers, and are protected by a range of national and international copyright laws and treaties.
              </p>
            </div>
          </div>
          
        </div>
        

        <div className="mb-[1vw] mt-[5vw] max-[450px]:mt-[5vw]">
          <Accordion
            title="Ownership of Content"
            InnerTextData={CopyrightData["Ownership of Content"]}
          />
          <Accordion
            title="Limited License"
            InnerTextData={CopyrightData["Limited License"]}
          />
          <Accordion
            title="Prohibited Uses"
            InnerTextData={CopyrightData["Prohibited Uses"]}
          />
          <Accordion
            title="User Contributions"
            InnerTextData={CopyrightData["User Contributions"]}
          />
          <Accordion
            title="Trademarks"
            InnerTextData={CopyrightData["Trademarks"]}
          />
          <Accordion
            title="Copyright Disclaimer"
            InnerTextData={CopyrightData["Copyright Disclaimer"]}
          />
          <Accordion
            title="Copyright Infringement Notification"
            InnerTextData={CopyrightData["Copyright Infringement Notification"]}
          />
          <Accordion
            title="Links to Third-Party Sites"
            InnerTextData={CopyrightData["Links to Third-Party Sites"]}
          />
          <Accordion
            title="Termination of Access"
            InnerTextData={CopyrightData["Termination of Access"]}
          />
          <Accordion
            title="Changes to this Copyright Notice"
            InnerTextData={CopyrightData["Changes to this Copyright Notice"]}
          />
          <Accordion
            title="Contact Us"
            InnerTextData={CopyrightData["Contact Us"]}
          />
        </div>

        <ContactUsSection />
      </div>
    </div>
  );
}

export default CopyrightPolicy;
